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

/***/ "./src/editors/array-nav.js":
/*!**********************************!*\
  !*** ./src/editors/array-nav.js ***!
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
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array */ "./src/editors/array.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorArrayNav instance.
 * @extends EditorArray
 */
var EditorArrayNav = /*#__PURE__*/function (_EditorArray) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EditorArrayNav, _EditorArray);
  var _super = _createSuper(EditorArrayNav);
  function EditorArrayNav() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorArrayNav);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorArrayNav, [{
    key: "init",
    value: function init() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorArrayNav.prototype), "init", this).call(this);
      this.activeTabIndex = 0;
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.addBtn.addEventListener('click', function () {
        _this.activeTabIndex = _this.instance.value.length;
        _this.instance.addItem();
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.refreshInteractiveElements();
      this.control.childrenSlot.innerHTML = '';
      var row = this.theme.getRow();
      var cols = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'nav').cols || 3;
      var tabListCol = this.theme.getCol(12, cols);
      var tabContentCol = this.theme.getCol(12, 12 - cols);
      var tabContent = this.theme.getTabContent();
      var tabList = this.theme.getTabList({
        stacked: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'nav').stacked,
        type: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'nav').type
      });
      this.control.childrenSlot.appendChild(row);
      row.appendChild(tabListCol);
      row.appendChild(tabContentCol);
      tabListCol.appendChild(tabList);
      tabContentCol.appendChild(tabContent);
      this.instance.children.forEach(function (child, index) {
        var deleteBtn = _this2.theme.getDeleteItemBtn();
        var moveUpBtn = _this2.theme.getMoveUpItemBtn();
        var moveDownBtn = _this2.theme.getMoveDownItemBtn();
        child.ui.control.arrayActions.innerHTML = '';
        child.ui.control.arrayActions.appendChild(deleteBtn);
        child.ui.control.arrayActions.appendChild(moveUpBtn);
        child.ui.control.arrayActions.appendChild(moveDownBtn);
        _this2.control.childrenSlot.appendChild(child.ui.control.container);
        var childTitle;
        var schemaOptionItemTemplate = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(_this2.instance.schema, 'itemTemplate');
        if (schemaOptionItemTemplate) {
          var template = schemaOptionItemTemplate;
          var data = {
            i0: index,
            i1: index + 1,
            value: child.getValue()
          };
          childTitle = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["compileTemplate"])(template, data);
        } else {
          var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaTitle"])(child.schema);
          childTitle = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(schemaTitle) ? schemaTitle + ' ' + (index + 1) : child.getKey();
        }
        deleteBtn.addEventListener('click', function () {
          _this2.activeTabIndex = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["clamp"])(index - 1, 0, _this2.instance.value.length - 1);
          _this2.instance.deleteItem(index);
        });
        moveUpBtn.addEventListener('click', function () {
          var toIndex = index - 1;
          _this2.activeTabIndex = toIndex;
          _this2.instance.move(index, toIndex);
        });
        moveDownBtn.addEventListener('click', function () {
          var toIndex = index + 1;
          _this2.activeTabIndex = toIndex;
          _this2.instance.move(index, toIndex);
        });
        var active = index === _this2.activeTabIndex;
        var id = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(child.path);
        var tab = _this2.theme.getTab({
          title: childTitle,
          id: id,
          active: active
        });
        tab.list.addEventListener('click', function () {
          _this2.activeTabIndex = index;
        });
        _this2.theme.setTabPaneAttributes(child.ui.control.container, active, id);
        tabList.appendChild(tab.list);
        tabContent.appendChild(child.ui.control.container);
        if (_this2.disabled || _this2.instance.isReadOnly()) {
          child.ui.disable();
        } else {
          child.ui.enable();
        }
        if (index === 0) {
          moveUpBtn.setAttribute('disabled', '');
        }
        if (_this2.instance.value.length - 1 === index) {
          moveDownBtn.setAttribute('disabled', '');
        }
      });
    }
  }]);
  return EditorArrayNav;
}(_array__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorArrayNav);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorArray instance.
 * @extends Editor
 */
var EditorArray = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorArray, _Editor);
  var _super = _createSuper(EditorArray);
  function EditorArray() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorArray);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorArray, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getArrayControl({
        title: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.addBtn.addEventListener('click', function () {
        _this.instance.addItem();
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
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
        return value;
      }
      return [];
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this2 = this;
      this.refreshInteractiveElements();
      var maxItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaMaxItems"])(this.instance.schema);
      var minItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaMinItems"])(this.instance.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(maxItems) && maxItems === this.instance.value.length) {
        this.control.addBtn.setAttribute('disabled', '');
      }
      this.control.childrenSlot.innerHTML = '';
      this.instance.children.forEach(function (child) {
        var itemIndex = Number(child.getKey());
        var deleteBtn = _this2.theme.getDeleteItemBtn();
        var moveUpBtn = _this2.theme.getMoveUpItemBtn();
        var moveDownBtn = _this2.theme.getMoveDownItemBtn();
        child.ui.control.arrayActions.innerHTML = '';
        child.ui.control.arrayActions.appendChild(deleteBtn);
        child.ui.control.arrayActions.appendChild(moveUpBtn);
        child.ui.control.arrayActions.appendChild(moveDownBtn);
        _this2.control.childrenSlot.appendChild(child.ui.control.container);
        deleteBtn.addEventListener('click', function () {
          var itemIndex = Number(child.path.split(_this2.instance.jedi.pathSeparator).pop());
          _this2.instance.deleteItem(itemIndex);
        });
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;
          _this2.instance.move(itemIndex, toIndex);
        });
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;
          _this2.instance.move(itemIndex, toIndex);
        });
        if (_this2.disabled || _this2.instance.isReadOnly()) {
          child.ui.disable();
        } else {
          child.ui.enable();
        }
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(minItems) && _this2.instance.value.length <= minItems) {
          deleteBtn.setAttribute('disabled', '');
        }
      });
    }
  }]);
  return EditorArray;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorArray);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorBooleanEnumRadio instance.
 * @extends EditorBoolean
 */
var EditorBooleanEnumRadio = /*#__PURE__*/function (_EditorBoolean) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorBooleanEnumRadio, _EditorBoolean);
  var _super = _createSuper(EditorBooleanEnumRadio);
  function EditorBooleanEnumRadio() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorBooleanEnumRadio);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorBooleanEnumRadio, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getRadiosControl({
        values: ['false', 'true'],
        titles: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles') || ['false', 'true'],
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
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
      this.refreshInteractiveElements();
      this.control.radios.forEach(function (radio) {
        var radioValue = radio.value === 'true';
        radio.checked = radioValue === _this2.instance.getValue();
      });
    }
  }]);
  return EditorBooleanEnumRadio;
}(_boolean__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorBooleanEnumRadio);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorBooleanEnumSelect instance.
 * @extends EditorBoolean
 */
var EditorBooleanEnumSelect = /*#__PURE__*/function (_EditorBoolean) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorBooleanEnumSelect, _EditorBoolean);
  var _super = _createSuper(EditorBooleanEnumSelect);
  function EditorBooleanEnumSelect() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorBooleanEnumSelect);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorBooleanEnumSelect, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getSelectControl({
        values: ['false', 'true'],
        titles: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles') || ['false', 'true'],
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.input.addEventListener('change', function () {
        var value = _this.control.input.value === 'true';
        _this.instance.setValue(value);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshInteractiveElements();
      this.control.input.value = this.instance.getValue() === true ? 'true' : 'false';
    }
  }]);
  return EditorBooleanEnumSelect;
}(_boolean__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorBooleanEnumSelect);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
var EditorBoolean = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorBoolean, _Editor);
  var _super = _createSuper(EditorBoolean);
  function EditorBoolean() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorBoolean);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorBoolean, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getCheckboxControl({
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
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
      this.refreshInteractiveElements();
      this.control.input.checked = this.instance.getValue();
    }
  }]);
  return EditorBoolean;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorBoolean);

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
/* harmony import */ var _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/icons/icons */ "./src/themes/icons/icons.js");
/* harmony import */ var _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes/bootstrap3 */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../themes/bootstrap4 */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/bootstrap5 */ "./src/themes/bootstrap5.js");
/* harmony import */ var _themes_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../themes/theme */ "./src/themes/theme.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









/**
 * Represents an Editor instance.
 * @extends EventEmitter
 */
var Editor = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Editor, _EventEmitter);
  var _super = _createSuper(Editor);
  function Editor(instance) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Editor);
    _this = _super.call(this);

    /**
     * A reference to the Instance being controlled by this editor.
     * @type {Instance}
     * @private
     */
    _this.instance = instance;

    /**
     * Theme instance used to build the Editor user interface.
     * @type {Theme}
     * @private
     */
    _this.theme = null;

    /**
     * The user interface html for this editor
     * @type {HTMLElement}
     * @private
     */
    _this.control = null;

    /**
     * Disabled status for this editor user interface
     * @type {boolean}
     * @private
     */
    _this.disabled = false;

    /**
     * Read only status for this editor user interface
     * @type {boolean}
     * @private
     */
    _this.readOnly = _this.instance.isReadOnly();
    _this.init();
    _this.build();
    _this.coerceValue();
    _this.addEventListeners();
    _this.setContainerAttributes();
    _this.refreshUI();
    if (_this.instance.jedi.options.alwaysShowErrors || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_12__["getSchemaOption"])(_this.instance.schema, 'alwaysShowErrors')) {
      var errors = _this.instance.getErrors();
      _this.showValidationErrors(errors);
    }
    _this.instance.on('set-value', function () {
      _this.refreshUI();
      var errors = _this.instance.getErrors();
      _this.showValidationErrors(errors);
    });
    _this.instance.on('change', function () {
      _this.refreshUI();
      var errors = _this.instance.getErrors();
      _this.showValidationErrors(errors);
    });
    return _this;
  }

  /**
   * Initializes the editor
   * @private
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Editor, [{
    key: "init",
    value: function init() {
      var icons = null;
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_11__["isSet"])(this.instance.jedi.options.iconLib)) {
        switch (this.instance.jedi.options.iconLib) {
          case 'glyphicons':
            icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["glyphicons"];
            break;
          case 'bootstrap-icons':
            icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["bootstrapIcons"];
            break;
          case 'fontawesome3':
            icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome3"];
            break;
          case 'fontawesome4':
            icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome4"];
            break;
          case 'fontawesome5':
            icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome5"];
            break;
          case 'fontawesome6':
            icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome6"];
            break;
        }
      }
      switch (this.instance.jedi.options.theme) {
        case 'bootstrap3':
          this.theme = new _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_7__["default"](icons);
          break;
        case 'bootstrap4':
          this.theme = new _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_8__["default"](icons);
          break;
        case 'bootstrap5':
          this.theme = new _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_9__["default"](icons);
          break;
        default:
          this.theme = new _themes_theme__WEBPACK_IMPORTED_MODULE_10__["default"](icons);
      }
    }

    /**
     * Sets container attributes like data-path and data-type
     * @private
     */
  }, {
    key: "setContainerAttributes",
    value: function setContainerAttributes() {
      this.control.container.setAttribute('data-path', this.instance.path);
      this.control.container.setAttribute('data-type', Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_12__["getSchemaType"])(this.instance.schema));
    }

    /**
     * Builds the editor control and appends it to the editor container
     * @private
     */
  }, {
    key: "build",
    value: function build() {}

    /**
     * Updates the value of the instance by making assumptions based on constrains
     */
  }, {
    key: "coerceValue",
    value: function coerceValue() {
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_12__["getSchemaEnum"])(this.instance.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_11__["isSet"])(schemaEnum) && !schemaEnum.includes(this.instance.getValue()) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_11__["isSet"])(schemaEnum[0])) {
        this.instance.setValue(schemaEnum[0], false);
      }
    }

    /**
     * Add event listeners to ui elements
     * @private
     */
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {}

    /**
     * Shows validation messages in the editor container.
     * @private
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

    /**
     * Get an error message container
     * @private
     */
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
     * Updates control UI when its state changes
     * @private
     */
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshInteractiveElements();
    }
  }, {
    key: "refreshInteractiveElements",
    value: function refreshInteractiveElements() {
      var _this3 = this;
      var interactiveElements = this.control.container.querySelectorAll('button, input, select, textarea');
      interactiveElements.forEach(function (element) {
        if (_this3.disabled || _this3.readOnly) {
          element.setAttribute('disabled', '');
        } else {
          element.removeAttribute('disabled', '');
        }
      });
    }

    /**
     * Transforms the input value if necessary before value set
     * @private
     */
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }

    /**
     * Destroys the editor
     * @private
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this4 = this;
      if (this.control.container && this.control.container.parentNode) {
        this.control.container.parentNode.removeChild(this.control.container);
      }
      Object.keys(this).forEach(function (key) {
        delete _this4[key];
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorMultiple instance.
 * @extends Editor
 */
var EditorMultiple = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorMultiple, _Editor);
  var _super = _createSuper(EditorMultiple);
  function EditorMultiple() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorMultiple);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorMultiple, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getMultipleControl({
        title: 'Options',
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema),
        switcherOptionValues: this.instance.switcherOptionValues,
        switcherOptionsLabels: this.instance.switcherOptionsLabels
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.switcher.input.addEventListener('change', function () {
        var index = Number(_this.control.switcher.input.value);
        _this.instance.switchInstance(index);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshInteractiveElements();
      this.control.childrenSlot.innerHTML = '';
      this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container);
      this.control.switcher.input.value = this.instance.index;
      if (this.disabled || this.instance.isReadOnly()) {
        this.instance.activeInstance.ui.disable();
      } else {
        this.instance.activeInstance.ui.enable();
      }
    }

    // showValidationErrors (errors) {
    //   const multipleErrors = errors.filter((error) => error.path === this.path)
    //   const activeInstanceErrors = errors.filter((error) => error.path !== this.path)
    //   super.showValidationErrors(multipleErrors)
    //   this.instance.activeInstance.ui.showValidationErrors(activeInstanceErrors)
    // }
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(message) {
      return this.theme.getAlert({
        message: message
      });
    }
  }]);
  return EditorMultiple;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorMultiple);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
var EditorNull = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorNull, _Editor);
  var _super = _createSuper(EditorNull);
  function EditorNull() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorNull);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorNull, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getNullControl({
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema) === 'hidden',
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);
  return EditorNull;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorNull);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorNumberEnumRadio instance.
 * @extends EditorNumber
 */
var EditorNumberEnumRadio = /*#__PURE__*/function (_EditorNumber) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorNumberEnumRadio, _EditorNumber);
  var _super = _createSuper(EditorNumberEnumRadio);
  function EditorNumberEnumRadio() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorNumberEnumRadio);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorNumberEnumRadio, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getRadiosControl({
        values: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        titles: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
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
      this.refreshInteractiveElements();
      this.control.radios.forEach(function (radio) {
        radio.checked = Number(radio.value) === Number(_this2.instance.getValue());
      });
    }
  }]);
  return EditorNumberEnumRadio;
}(_number__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorNumberEnumRadio);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorNumberEnumSelect instance.
 * @extends EditorNumber
 */
var EditorNumberEnumSelect = /*#__PURE__*/function (_EditorNumber) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorNumberEnumSelect, _EditorNumber);
  var _super = _createSuper(EditorNumberEnumSelect);
  function EditorNumberEnumSelect() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorNumberEnumSelect);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorNumberEnumSelect, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getSelectControl({
        values: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        titles: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });
    }
  }]);
  return EditorNumberEnumSelect;
}(_number__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorNumberEnumSelect);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
var EditorNumber = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorNumber, _Editor);
  var _super = _createSuper(EditorNumber);
  function EditorNumber() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorNumber);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorNumber, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getInputControl({
        type: 'number',
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema) === 'hidden',
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.input.addEventListener('change', function () {
        var value = _this.sanitize(_this.control.input.value);
        _this.instance.setValue(value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      if (Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaType"])(this.instance.schema) === 'integer') {
        return Math.floor(Number(value));
      } else {
        return Number(value);
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshInteractiveElements();
      var value = this.instance.getValue();
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(value)) {
        this.control.input.value = this.instance.getValue();
      }
    }
  }]);
  return EditorNumber;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorNumber);

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
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Represents a EditorObjectGrid instance.
 * @extends EditorObject
 */
var EditorObjectGrid = /*#__PURE__*/function (_EditorObject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorObjectGrid, _EditorObject);
  var _super = _createSuper(EditorObjectGrid);
  function EditorObjectGrid() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorObjectGrid);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorObjectGrid, [{
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
          var columns = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_6__["getSchemaOption"])(child.schema, 'columns');
          var offset = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_6__["getSchemaOption"])(child.schema, 'offset') || 0;
          var col = _this.theme.getCol(12, columns, offset);
          if (Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_6__["getSchemaOption"])(child.schema, 'newRow')) {
            row = _this.theme.getRow();
            _this.control.childrenSlot.appendChild(row);
          }
          row.appendChild(col);
          col.appendChild(child.ui.control.container);
          if (_this.disabled || _this.instance.isReadOnly()) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        }
      });
    }
  }]);
  return EditorObjectGrid;
}(_object__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorObjectGrid);

/***/ }),

/***/ "./src/editors/object-nav.js":
/*!***********************************!*\
  !*** ./src/editors/object-nav.js ***!
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
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object */ "./src/editors/object.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorObjectNav instance.
 * @extends EditorObject
 */
var EditorObjectNav = /*#__PURE__*/function (_EditorObject) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EditorObjectNav, _EditorObject);
  var _super = _createSuper(EditorObjectNav);
  function EditorObjectNav() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorObjectNav);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorObjectNav, [{
    key: "init",
    value: function init() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorObjectNav.prototype), "init", this).call(this);
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
      var cols = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'nav').cols || 3;
      var tabListCol = this.theme.getCol(12, cols);
      var tabContentCol = this.theme.getCol(12, 12 - cols);
      var tabContent = this.theme.getTabContent();
      var tabList = this.theme.getTabList({
        stacked: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'nav').stacked,
        type: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'nav').type
      });
      this.control.childrenSlot.appendChild(row);
      row.appendChild(tabListCol);
      row.appendChild(tabContentCol);
      tabListCol.appendChild(tabList);
      tabContentCol.appendChild(tabContent);
      this.instance.children.forEach(function (child, index) {
        if (child.isActive) {
          var active = index === _this.activeTabIndex;
          var id = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(child.path);
          var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaTitle"])(child.schema);
          var tab = _this.theme.getTab({
            title: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(schemaTitle) ? schemaTitle : child.getKey(),
            id: id,
            active: active
          });
          tab.list.addEventListener('click', function () {
            _this.activeTabIndex = index;
          });
          _this.theme.setTabPaneAttributes(child.ui.control.container, active, id);
          tabList.appendChild(tab.list);
          tabContent.appendChild(child.ui.control.container);
          if (_this.disabled || _this.instance.isReadOnly()) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        }
      });
    }
  }]);
  return EditorObjectNav;
}(_object__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorObjectNav);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorObject instance.
 * @extends Editor
 */
var EditorObject = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorObject, _Editor);
  var _super = _createSuper(EditorObject);
  function EditorObject() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorObject);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorObject, [{
    key: "build",
    value: function build() {
      var addProperty = true;
      var additionalProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaAdditionalProperties"])(this.instance.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(additionalProperties) && additionalProperties === false) {
        addProperty = false;
      }
      this.control = this.theme.getObjectControl({
        title: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema),
        editableProperties: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'editableProperties'), true),
        addProperty: addProperty
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.addPropertyBtn.addEventListener('click', function () {
        var key = _this.control.addPropertyControl.input.value;
        var propertyNameEmpty = key.length === 0;
        if (propertyNameEmpty) {
          return;
        }
        var propertyExist = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(_this.instance.value[key]);
        if (propertyExist) {
          return;
        }
        var schema = {
          type: 'any'
        };
        var schemaAdditionalProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaAdditionalProperties"])(schema);
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaAdditionalProperties)) {
          schema = schemaAdditionalProperties;
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
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value)) {
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
      var schemaOptionEditableProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'editableProperties');
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(schemaOptionEditableProperties, true)) {
        while (this.control.propertiesActivators.firstChild) {
          this.control.propertiesActivators.removeChild(this.control.propertiesActivators.lastChild);
        }
        this.instance.children.forEach(function (child) {
          var isRequired = _this2.instance.isRequired(child.getKey());
          var isDependentRequired = _this2.instance.isDependentRequired(child.getKey());
          var notRequired = !isRequired && !isDependentRequired;
          if (notRequired) {
            var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(child.schema);
            var id = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(child.path) + '-activator';
            var checkboxControl = _this2.theme.getCheckboxControl({
              id: id,
              label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : child.getKey(),
              srOnly: false
            });
            var checkbox = checkboxControl.input;
            checkbox.disabled = _this2.disabled;
            checkbox.checked = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this2.instance.getValue(), child.getKey());
            checkbox.addEventListener('change', function () {
              if (checkbox.checked) {
                child.activate();
              } else {
                child.deactivate();
              }
            });
            _this2.control.propertiesActivators.appendChild(checkboxControl.container);
          }
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
          if (_this3.disabled || _this3.instance.isReadOnly()) {
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
      this.refreshInteractiveElements();
      this.refreshPropertiesSlot();
      this.refreshEditors();
    }
  }]);
  return EditorObject;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorObject);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorStringEnumRadio instance.
 * @extends Editor
 */
var EditorStringEnumRadio = /*#__PURE__*/function (_EditorString) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorStringEnumRadio, _EditorString);
  var _super = _createSuper(EditorStringEnumRadio);
  function EditorStringEnumRadio() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorStringEnumRadio);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorStringEnumRadio, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getRadiosControl({
        values: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        titles: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
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
      this.refreshInteractiveElements();
      this.control.radios.forEach(function (radio) {
        radio.checked = radio.value === _this2.instance.getValue();
      });
    }
  }]);
  return EditorStringEnumRadio;
}(_string__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorStringEnumRadio);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorStringEnumSelect instance.
 * @extends Editor
 */
var EditorStringEnumSelect = /*#__PURE__*/function (_EditorString) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorStringEnumSelect, _EditorString);
  var _super = _createSuper(EditorStringEnumSelect);
  function EditorStringEnumSelect() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorStringEnumSelect);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorStringEnumSelect, [{
    key: "build",
    value: function build() {
      var _this = this;
      this.control = this.theme.getSelectControl({
        values: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        titles: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });
    }
  }]);
  return EditorStringEnumSelect;
}(_string__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorStringEnumSelect);

/***/ }),

/***/ "./src/editors/string-textarea.js":
/*!****************************************!*\
  !*** ./src/editors/string-textarea.js ***!
  \****************************************/
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorStringTextarea instance.
 * @extends Editor
 */
var EditorStringTextarea = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorStringTextarea, _Editor);
  var _super = _createSuper(EditorStringTextarea);
  function EditorStringTextarea() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorStringTextarea);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorStringTextarea, [{
    key: "build",
    value: function build() {
      this.control = this.theme.getTextareaControl({
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle') || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema) === 'hidden',
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshInteractiveElements();
      this.control.input.value = this.instance.getValue();
    }
  }]);
  return EditorStringTextarea;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorStringTextarea);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a EditorString instance.
 * @extends Editor
 */
var EditorString = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(EditorString, _Editor);
  var _super = _createSuper(EditorString);
  function EditorString() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorString);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorString, [{
    key: "build",
    value: function build() {
      var inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week'];
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema);
      this.control = this.theme.getInputControl({
        type: inputTypes.includes(schemaFormat) ? schemaFormat : 'text',
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle') || schemaFormat === 'hidden',
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
      });

      // fix color picker bug
      if (schemaFormat === 'color' && this.instance.value.length === 0) {
        this.instance.setValue('#000000', false);
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.refreshInteractiveElements();
      this.control.input.value = this.instance.getValue();
    }
  }]);
  return EditorString;
}(_editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorString);

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


/**
 * Represents an EventEmitter instance.
 */
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventEmitter);
    this.listeners = [];
  }

  /**
   * Adds an named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed whent this event is emitted
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventEmitter, [{
    key: "on",
    value: function on(name, callback) {
      this.listeners.push({
        name: name,
        callback: callback
      });
    }

    /**
     * Triggers the callback function of a named event listener
     * @public
     * @param {string} name - The name of the event to be emitted
     */
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

    /**
     * Deletes all properties of the class
     */
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

/***/ "./src/helpers/schema.js":
/*!*******************************!*\
  !*** ./src/helpers/schema.js ***!
  \*******************************/
/*! exports provided: getSchemaSchema, getSchemaAdditionalProperties, getSchemaAllOf, getSchemaAnyOf, getSchemaConst, getSchemaContains, getSchemaDefault, getSchemaDependentRequired, getSchemaDependentSchemas, getSchemaDescription, getSchemaElse, getSchemaEnum, getSchemaExclusiveMaximum, getSchemaExclusiveMinimum, getSchemaFormat, getSchemaIf, getSchemaItems, getSchemaMaximum, getSchemaMaxContains, getSchemaMaxItems, getSchemaMaxLength, getSchemaMaxProperties, getSchemaMinimum, getSchemaMinContains, getSchemaMinItems, getSchemaMinLength, getSchemaMinProperties, getSchemaMultipleOf, getSchemaNot, getSchemaOption, getSchemaPattern, getSchemaPatternProperties, getSchemaPrefixItems, getSchemaProperties, getSchemaReadOnly, getSchemaRequired, getSchemaThen, getSchemaTitle, getSchemaType, getSchemaOneOf, getSchemaUniqueItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaSchema", function() { return getSchemaSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaAdditionalProperties", function() { return getSchemaAdditionalProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaAllOf", function() { return getSchemaAllOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaAnyOf", function() { return getSchemaAnyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaConst", function() { return getSchemaConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaContains", function() { return getSchemaContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaDefault", function() { return getSchemaDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaDependentRequired", function() { return getSchemaDependentRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaDependentSchemas", function() { return getSchemaDependentSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaDescription", function() { return getSchemaDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaElse", function() { return getSchemaElse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaEnum", function() { return getSchemaEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaExclusiveMaximum", function() { return getSchemaExclusiveMaximum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaExclusiveMinimum", function() { return getSchemaExclusiveMinimum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaFormat", function() { return getSchemaFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaIf", function() { return getSchemaIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaItems", function() { return getSchemaItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMaximum", function() { return getSchemaMaximum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMaxContains", function() { return getSchemaMaxContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMaxItems", function() { return getSchemaMaxItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMaxLength", function() { return getSchemaMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMaxProperties", function() { return getSchemaMaxProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMinimum", function() { return getSchemaMinimum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMinContains", function() { return getSchemaMinContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMinItems", function() { return getSchemaMinItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMinLength", function() { return getSchemaMinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMinProperties", function() { return getSchemaMinProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaMultipleOf", function() { return getSchemaMultipleOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaNot", function() { return getSchemaNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaOption", function() { return getSchemaOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaPattern", function() { return getSchemaPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaPatternProperties", function() { return getSchemaPatternProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaPrefixItems", function() { return getSchemaPrefixItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaProperties", function() { return getSchemaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaReadOnly", function() { return getSchemaReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaRequired", function() { return getSchemaRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaThen", function() { return getSchemaThen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaTitle", function() { return getSchemaTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaType", function() { return getSchemaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaOneOf", function() { return getSchemaOneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaUniqueItems", function() { return getSchemaUniqueItems; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/helpers/utils.js");


function getSchemaSchema(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(schema.$schema) ? schema.$schema : undefined;
}
function getSchemaAdditionalProperties(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.additionalProperties) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.additionalProperties) ? schema.additionalProperties : undefined;
}
function getSchemaAllOf(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.allOf) ? schema.allOf : undefined;
}
function getSchemaAnyOf(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.anyOf) ? schema.anyOf : undefined;
}
function getSchemaConst(schema) {
  return schema["const"];
}
function getSchemaContains(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.contains) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.contains) ? schema.contains : undefined;
}
function getSchemaDefault(schema) {
  return schema["default"];
}
function getSchemaDependentRequired(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.dependentRequired) ? schema.dependentRequired : undefined;
}
function getSchemaDependentSchemas(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.dependentSchemas) ? schema.dependentSchemas : undefined;
}
function getSchemaDescription(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(schema.description) ? schema.description : undefined;
}
function getSchemaElse(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema["else"]) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema["else"]) ? schema["else"] : undefined;
}
function getSchemaEnum(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema["enum"]) && schema["enum"].length > 0) {
    return schema["enum"];
  }
  return undefined;
}
function getSchemaExclusiveMaximum(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schema.exclusiveMaximum) ? schema.exclusiveMaximum : undefined;
}
function getSchemaExclusiveMinimum(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schema.exclusiveMinimum) ? schema.exclusiveMinimum : undefined;
}
function getSchemaFormat(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(schema.format) ? schema.format : undefined;
}
function getSchemaIf(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema["if"])) {
    return schema["if"];
  }
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema["if"])) {
    return schema["if"];
  }
  return undefined;
}
function getSchemaItems(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.items) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.items) ? schema.items : undefined;
}
function getSchemaMaximum(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schema.maximum) ? schema.maximum : undefined;
}
function getSchemaMaxContains(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.maxContains) && schema.maxContains >= 0) {
    return schema.maxContains;
  }
  return undefined;
}
function getSchemaMaxItems(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.maxItems) && schema.maxItems >= 0) {
    return schema.maxItems;
  }
  return undefined;
}
function getSchemaMaxLength(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.maxLength) && schema.maxLength >= 0) {
    return schema.maxLength;
  }
  return undefined;
}
function getSchemaMaxProperties(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.maxProperties)) {
    return schema.maxProperties;
  }
  return undefined;
}
function getSchemaMinimum(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schema.minimum) ? schema.minimum : undefined;
}
function getSchemaMinContains(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.minContains) && schema.minContains >= 0) {
    return schema.minContains;
  }
  return undefined;
}
function getSchemaMinItems(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.minItems) && schema.minItems >= 0) {
    return schema.minItems;
  }
  return undefined;
}
function getSchemaMinLength(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.minLength) && schema.minLength >= 0) {
    return schema.minLength;
  }
  return undefined;
}
function getSchemaMinProperties(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isInteger"])(schema.minProperties) && schema.minProperties >= 0) {
    return schema.minProperties;
  }
  return undefined;
}
function getSchemaMultipleOf(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schema.multipleOf) && schema.multipleOf >= 0) {
    return schema.multipleOf;
  }
  return undefined;
}
function getSchemaNot(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.not) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.not) ? schema.not : undefined;
}
function getSchemaOption(schema, option) {
  return schema.options && schema.options[option] ? schema.options[option] : false;
}
function getSchemaPattern(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(schema.pattern) ? schema.pattern : undefined;
}
function getSchemaPatternProperties(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.patternProperties) ? schema.patternProperties : undefined;
}
function getSchemaPrefixItems(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.prefixItems) ? schema.prefixItems : undefined;
}
function getSchemaProperties(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.properties) ? schema.properties : undefined;
}
function getSchemaReadOnly(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.readOnly) ? schema.readOnly : undefined;
}
function getSchemaRequired(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.required) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(schema.required)) : undefined;
}
function getSchemaThen(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.then) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.then) ? schema.then : undefined;
}
function getSchemaTitle(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(schema.title) ? schema.title : undefined;
}
function getSchemaType(schema) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(schema.type) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.type)) {
    return schema.type;
  }
  return undefined;
}
function getSchemaOneOf(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.oneOf) ? schema.oneOf : undefined;
}
function getSchemaUniqueItems(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.uniqueItems) ? schema.uniqueItems : undefined;
}

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/*! exports provided: clone, escapeRegExp, replaceAll, pathToAttribute, hasOwn, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep, overwriteExistingProperties, getValueByJSONPath, compileTemplate, clamp, removeDuplicatesFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToAttribute", function() { return pathToAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueByJSONPath", function() { return getValueByJSONPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileTemplate", function() { return compileTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicatesFromArray", function() { return removeDuplicatesFromArray; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Utils.
 * @module utils
 */

/**
 * Returns a clone of a thing
 * @param {*} thing - The thing to be cloned
 * @return {*} The clone of the thing
 */
function clone(thing) {
  if (typeof thing === 'undefined') {
    return undefined;
  }
  return JSON.parse(JSON.stringify(thing));
}

/**
 * Returns escaped regexp
 * @param {string} string - The string
 * @return {string} Escaped regexp
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Multiple search and replace
 * @param {string} str - The string
 * @param {string} find - The part to be replaced
 * @param {string} replace - The replacement
 * @return {void}
 */
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

/**
 * Formats a json path to be used as an html attribute value
 * @param {string} path - The json path
 * @return {string}
 */
function pathToAttribute(path) {
  return replaceAll(replaceAll(path, '#', 'root'), '/', '-');
}

/**
 * Returns true if a given object has a given property
 * @param {object} obj - The object
 * @param {string} prop - The property
 * @return {boolean}
 */
function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * Sort object properties
 * @param {object} obj - The object
 * @return {void}
 */
function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

/**
 * Returns true if the two values passed are equal
 * @param {*} a - Value A
 * @param {*} b - Value B
 * @return {boolean}
 */
function equal(a, b) {
  if (isObject(a) && isObject(b)) {
    a = sortObject(a);
    b = sortObject(b);
  }
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Returns true if the two values passed are different
 * @param {*} a - Value A
 * @param {*} b - Value B
 * @return {boolean}
 */
function different(a, b) {
  return !equal(a, b);
}

/**
 * Returns true if the value passed is null
 * @param {*} value - The value
 * @return {boolean}
 */
function isNull(value) {
  return value === null;
}

/**
 * Returns true if the value is defined
 * @param {*} value - The value
 * @return {boolean}
 */
function isSet(value) {
  return typeof value !== 'undefined';
}

/**
 * Returns true if the value is undefined
 * @param {*} value - The value
 * @return {boolean}
 */
function notSet(value) {
  return typeof value === 'undefined';
}

/**
 * Returns true if the value passed is a number
 * @param {*} value - The value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Returns true if the value passed is an integer
 * @param {*} value - The value
 * @return {boolean}
 */
function isInteger(value) {
  return isNumber(value) && value === Math.floor(value);
}

/**
 * Returns true if the value passed is a string
 * @param {*} value - The value
 * @return {boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Returns true if the value passed is a boolean
 * @param {*} value - The value
 * @return {boolean}
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Returns true if the value passed is an array
 * @param {*} value - The value
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Returns true if the value passed is an object
 * @param {*} value - The value
 * @return {boolean}
 */
function isObject(value) {
  return !isNull(value) && !isArray(value) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) === 'object';
}

/**
 * Returns the type of a value
 * @param {*} value - The value
 * @return {string} The type of the value
 */
function getType(value) {
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
}

/**
 * Merges objects
 * @param {object} target - The target object
 * @param {object[]} sources - Objects to be merged into the target object
 * @return {object} The merged object
 */
function mergeDeep(target) {
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
}

/**
 * Merges objects but only the properties that exists in boths objects
 * if they are the same type of value
 * @param {object} obj1 - The target object
 * @param {object[]} obj2 - Objects who's properties are the overrides
 * @return {object} The overwritten object
 */
function overwriteExistingProperties(obj1, obj2) {
  Object.keys(obj2).forEach(function (key) {
    if (key in obj1) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj1[key]) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj2[key])) {
        obj1[key] = obj2[key];
      }
    }
  });
  return obj1;
}

/**
 * Get some value by traversing the data using JSON path
 * @param {object} data - The data source
 * @param {string} path - JSON path
 * @return {*}
 */
function getValueByJSONPath(data, path) {
  var keys = path.split('.'); // Split the path into individual keys

  var value = data;
  var _iterator = _createForOfIteratorHelper(keys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if (Array.isArray(value) && /^\d+$/.test(key)) {
        var index = parseInt(key);
        if (index >= 0 && index < value.length) {
          value = value[index];
        } else {
          return undefined; // Index is out of bounds, return undefined
        }
      } else if (hasOwn(value, key)) {
        value = value[key];
      } else {
        return undefined; // Key doesn't exist, return undefined
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return value;
}

/**
 * Compiles a template by search and replace
 * @param {string} template - The template string
 * @param {object} data - Where template data lives
 * @return {void}
 */
function compileTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, function (match) {
    match = match.replace(/\s/g, '');
    var path = match.split(/{{|}}/)[1];
    return getValueByJSONPath(data, path);
  });
}
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
function removeDuplicatesFromArray(arr) {
  var uniqueObjects = [];
  var uniqueValues = new Set();
  var _iterator2 = _createForOfIteratorHelper(arr),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var obj = _step2.value;
      var objString = JSON.stringify(obj);
      if (!uniqueValues.has(objString)) {
        uniqueValues.add(objString);
        uniqueObjects.push(obj);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return uniqueObjects;
}

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! exports provided: i18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/**
 * Simple translation module.
 * @module i18n
 */

/**
 * Locale messages
 * @type {object}
 */
var i18n = {
  errorAdditionalProperties: 'has additional property "{{ property }}" but no additional properties are allowed',
  errorAnyOf: 'must validate against at least one of the provided schemas',
  errorConst: 'must have value of: {{ const }}',
  errorContains: 'must contain at least one item matching the provided schema',
  errorDependentRequired: 'must have the required properties: {{ dependentRequired }}',
  errorEnum: 'must be one of the enumerated values: {{ enum }}',
  errorExclusiveMaximum: 'must be less than {{ exclusiveMaximum }}',
  errorExclusiveMinimum: 'must be greater than {{ exclusiveMinimum }}',
  errorFormat: 'must be a valid {{ format }}',
  errorItems: 'must have items that validate against the provided schema',
  errorMaximum: 'must be at most {{ maximum }}',
  errorMaxItems: 'must have at most {{ maxItems }} items',
  errorMaxLength: 'must be at most {{ maxLength }} characters long',
  errorMaxProperties: 'must have at most {{ maxProperties }} properties',
  errorMaxContains: 'must contain at most {{ maxContains }} items matching the provided schema. It currently contains {{ counter }}',
  errorMinContains: 'must contain at least {{ minContains }} items matching the provided schema. It currently contains {{ counter }}',
  errorMinimum: 'must be at least {{ minimum }}',
  errorMinItems: 'must have at least {{ minItems }} items',
  errorMinLength: 'must be at least {{ minLength }} characters long',
  errorMinProperties: 'must have at least {{ minProperties }} properties',
  errorMultipleOf: 'must be multiple of {{ multipleOf }}',
  errorNot: 'must not validate against the provided schema',
  errorOneOf: 'must validate against exactly one of the provided schemas. It currently validates against {{ counter }} of the schemas',
  errorPattern: 'must match the pattern: "{{ pattern }}"',
  errorPrefixItems: 'Item {{ index }} fails validation',
  errorRequired: 'must have the required properties: {{ required }}',
  errorType: 'must be of type {{ type }}',
  errorUniqueItems: 'must have unique items'
};

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _editors_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/array */ "./src/editors/array.js");
/* harmony import */ var _editors_array_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/array-nav */ "./src/editors/array-nav.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
var InstanceArray = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstanceArray, _Instance);
  var _super = _createSuper(InstanceArray);
  function InstanceArray() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstanceArray);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstanceArray, [{
    key: "setUI",
    value: function setUI() {
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaType"])(this.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaFormat"])(this.schema);
      if (schemaType === 'array' && schemaFormat === 'nav') {
        this.ui = new _editors_array_nav__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      } else {
        this.ui = new _editors_array__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      }
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
      var schema;
      var itemsCount = this.children.length;
      var schemaItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaItems"])(this.schema);
      var schemaPrefixItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaPrefixItems"])(this.schema);
      schema = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaItems) ? schemaItems : {};
      var hasPrefixItemsSchema = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaPrefixItems) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaPrefixItems[itemsCount]);
      if (hasPrefixItemsSchema) {
        schema = schemaPrefixItems[itemsCount];
      }
      var child = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path + this.jedi.pathSeparator + itemsCount,
        parent: this,
        value: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(value)
      });
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(value)) {
        child.setValue(value, false);
      }
      return child;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemInstance();
      var value = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(this.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      var currentValue = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(this.getValue());
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
      if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
        return;
      }
      value.forEach(function (itemValue) {
        var child = _this2.createItemInstance(itemValue);
        _this2.children.push(child);
      });
    }
  }]);
  return InstanceArray;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceArray);

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
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






/**
 * Represents a InstanceBoolean instance.
 * @extends Instance
 */
var InstanceBoolean = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstanceBoolean, _Instance);
  var _super = _createSuper(InstanceBoolean);
  function InstanceBoolean() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstanceBoolean);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstanceBoolean, [{
    key: "setUI",
    value: function setUI() {
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaType"])(this.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaFormat"])(this.schema);
      if (schemaType === 'boolean' && schemaFormat === 'radio') {
        this.ui = new _editors_boolean_enum_radio__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      } else if (schemaType === 'boolean' && schemaFormat === 'select') {
        this.ui = new _editors_boolean_enum_select__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (schemaType === 'boolean') {
        this.ui = new _editors_boolean__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      }
    }
  }]);
  return InstanceBoolean;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceBoolean);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents a JSON instance.
 */
var Instance = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Instance, _EventEmitter);
  var _super = _createSuper(Instance);
  function Instance(config) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Instance);
    _this = _super.call(this);

    /**
     * A reference to the Jedi instance to which this instance belongs.
     * @type {Jedi}
     * @private
     */
    _this.jedi = config.jedi;

    /**
     * A JSON schema.
     * @type {boolean|object}
     * @private
     */
    _this.schema = config.schema;

    /**
     * The json value of this instance.
     * @type {*}
     * @private
     */
    _this.value = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(config.value) ? config.value : undefined;

    /**
     * The active state of this instance. If false the editor is not participating
     * to the value.
     * @type {boolean}
     * @private
     */
    _this.isActive = true;

    /**
     * The schema path of this instance.
     * @type {string}
     * @private
     */
    _this.path = config.path || _this.jedi.rootName;

    /**
     * The Parent instance of this instance.
     * @type {Instance|null}
     * @private
     */
    _this.parent = config.parent || null;

    /**
     * Child instances of this instance.
     * @type {Instance[]}
     * @private
     */
    _this.children = [];

    /**
     * The editor controlling this Instance if any
     * @type {Editor|null}
     * @private
     */
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
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["notSet"])(this.value)) {
        var value;
        var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaType"])(this.schema);
        if (schemaType === 'boolean') value = false;
        if (schemaType === 'number') value = 0.0;
        if (schemaType === 'integer') value = 0;
        if (schemaType === 'string') value = '';
        if (schemaType === 'array') value = [];
        if (schemaType === 'object') value = {};
        if (schemaType === 'null') value = null;
        this.value = value;
      }
    }
  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      var schemaDefault = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaDefault"])(this.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(schemaDefault)) {
        this.setValue(schemaDefault, false);
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
      var errors = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path);
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["removeDuplicatesFromArray"])(errors);
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
     * Returns true if this instance is read only
     */
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      var readOnly = false;
      if (Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaReadOnly"])(this.schema) === true) {
        readOnly = true;
      }
      if (this.parent && Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaReadOnly"])(this.parent.schema) === true) {
        readOnly = true;
      }
      return readOnly;
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");







function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
var InstanceMultiple = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(InstanceMultiple, _Instance);
  var _super = _createSuper(InstanceMultiple);
  function InstanceMultiple() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InstanceMultiple);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InstanceMultiple, [{
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
      this.activeInstanceChanged = true;
      this.lastIndex = 0;
      this.index = 0;
      this.schemas = [];
      this.switcherOptionValues = [];
      this.switcherOptionsLabels = [];
      this.on('set-value', function () {
        _this.onSetValue();
      });
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaType"])(this.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaIf"])(this.schema))) {
        var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(this.schema);
        this["if"] = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaIf"])(this.schema));
        var schemaThen = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaThen"])(this.schema));
        var schemaElse = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaElse"])(this.schema));
        delete schemaClone["if"];
        delete schemaClone.then;
        delete schemaClone["else"];
        var thenSchema = schemaThen ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, schemaClone, schemaThen) : Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, schemaClone);
        var elseSchema = schemaElse ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, schemaClone, schemaElse) : Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])({}, schemaClone);
        this.schemas.push(thenSchema);
        this.schemas.push(elseSchema);
        this.switcherOptionValues = [0, 1];
        this.switcherOptionsLabels = ['then', 'else'];
      } else if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema)) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOneOf"])(this.schema))) {
        var schemasOf = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema)) ? Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema) : Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOneOf"])(this.schema);
        var cloneSchema = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(this.schema);
        delete cloneSchema['anyOf'];
        delete cloneSchema['oneOf'];
        delete cloneSchema['options'];
        schemasOf.forEach(function (schema, index) {
          schema = _objectSpread(_objectSpread({}, cloneSchema), schema);
          var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaTitle"])(cloneSchema);
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schemaTitle)) {
            schema.title = schemaTitle;
          }
          var switcherOptionsLabel = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOption"])(schema, 'switcherTitle') || 'Option-' + (index + 1);
          _this.switcherOptionValues.push(index);
          _this.switcherOptionsLabels.push(switcherOptionsLabel);
          _this.schemas.push(schema);
        });
      } else if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isArray"])(schemaType)) {
        schemaType.forEach(function (type, index) {
          var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(_this.schema);
          var schema = _objectSpread(_objectSpread({}, schemaClone), {
            type: type,
            title: type[0].toUpperCase() + type.slice(1)
          });
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schemaClone.title)) {
            schema.title = schemaClone.title;
          }
          _this.switcherOptionValues.push(index);
          _this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1));
          _this.schemas.push(schema);
        });
      } else if (schemaType === 'any' || !schemaType) {
        var _schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(this.schema);
        this.schemas = [_objectSpread(_objectSpread({}, _schemaClone), {
          type: 'object'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'array'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'string'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'number'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'integer'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'boolean'
        }), _objectSpread(_objectSpread({}, _schemaClone), {
          type: 'null'
        })];
        this.schemas.forEach(function (schema, index) {
          _this.switcherOptionValues.push(index);
        });
        this.switcherOptionsLabels = ['Object', 'Array', 'String', 'Number', 'Integer', 'Boolean', 'Null'];
      }
      this.schemas.forEach(function (schema) {
        var instance = _this.jedi.createInstance({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path,
          parent: _this.parent,
          value: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(_this.value)
        });
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(_this.value)) {
          instance.setValue(_this.value, false);
        }
        instance.unregister();
        instance.on('change', function () {
          _this.activeInstanceChanged = true;
          _this.setValue(_this.activeInstance.getValue());
        });
        _this.instances.push(instance);
        _this.register();
      });
      var fittestIndex = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this["if"]) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value);
      this.switchInstance(fittestIndex, this.value);
    }
  }, {
    key: "switchInstance",
    value: function switchInstance(index, value) {
      this.lastIndex = this.index;
      this.index = index;
      this.activeInstance = this.instances[index];
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(value)) {
        this.activeInstance.setValue(value, false);
      }
      this.setValue(this.activeInstance.getValue());
    }
  }, {
    key: "onSetValue",
    value: function onSetValue() {
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["different"])(this.activeInstance.getValue(), this.value) || this.activeInstanceChanged) {
        this.activeInstanceChanged = false;
        var fittestIndex = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this["if"]) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value);
        this.switchInstance(fittestIndex, this.value);
      }
    }
  }, {
    key: "reassignValues",
    value: function reassignValues() {
      var lastInstanceValue = this.instances[this.lastIndex].getValue();
      var currentInstanceValue = this.activeInstance.getValue();
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(lastInstanceValue) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(currentInstanceValue)) {
        var mergedValue = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["overwriteExistingProperties"])(currentInstanceValue, lastInstanceValue);
        this.activeInstance.setValue(mergedValue, false);
      }
    }
  }, {
    key: "getIfIndex",
    value: function getIfIndex(value) {
      var ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_10__["default"]({
        schema: this["if"],
        startValue: value,
        refParser: false
      });
      var ifErrors = ifEditor.getErrors();
      ifEditor.destroy();
      return ifErrors.length === 0 ? 0 : 1;
    }

    /**
     * Returns the index of the instance that has less validation errors
     */
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
          var instanceErrors = this.jedi.validator.getErrors(value, instance.schema, instance.getKey(), instance.path);
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["notSet"])(fittestIndex) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["notSet"])(championErrors)) {
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
    key: "destroy",
    value: function destroy() {
      this.instances.forEach(function (instance) {
        instance.destroy();
      });
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(InstanceMultiple.prototype), "destroy", this).call(this);
    }
  }]);
  return InstanceMultiple;
}(_instance__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceMultiple);

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



/**
 * Represents a InstanceNull instance.
 * @extends Instance
 */
var InstanceNull = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstanceNull, _Instance);
  var _super = _createSuper(InstanceNull);
  function InstanceNull() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstanceNull);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstanceNull, [{
    key: "setUI",
    value: function setUI() {
      this.ui = new _editors_null__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    }
  }]);
  return InstanceNull;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceNull);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







/**
 * Represents a InstanceNumber instance.
 * @extends Instance
 */
var InstanceNumber = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstanceNumber, _Instance);
  var _super = _createSuper(InstanceNumber);
  function InstanceNumber() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstanceNumber);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstanceNumber, [{
    key: "setUI",
    value: function setUI() {
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaType"])(this.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaEnum"])(this.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaFormat"])(this.schema);
      var typeIsNumeric = schemaType === 'number' || schemaType === 'integer';
      if (typeIsNumeric && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schemaEnum) && schemaFormat === 'radio') {
        this.ui = new _editors_number_enum_radio__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      } else if (typeIsNumeric && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schemaEnum)) {
        this.ui = new _editors_number_enum_select__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (typeIsNumeric) {
        this.ui = new _editors_number__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      }
    }
  }]);
  return InstanceNumber;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceNumber);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/object-grid */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/object */ "./src/editors/object.js");
/* harmony import */ var _editors_object_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editors/object-nav */ "./src/editors/object-nav.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







/**
 * Represents an InstanceObject instance.
 * @extends Instance
 */
var InstanceObject = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstanceObject, _Instance);
  var _super = _createSuper(InstanceObject);
  function InstanceObject() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstanceObject);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstanceObject, [{
    key: "setUI",
    value: function setUI() {
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaType"])(this.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaFormat"])(this.schema);
      this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      if (schemaType === 'object' && schemaFormat === 'grid') {
        this.ui = new _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (schemaType === 'object' && schemaFormat === 'nav') {
        this.ui = new _editors_object_nav__WEBPACK_IMPORTED_MODULE_9__["default"](this);
      } else {
        this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      }
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this = this;
      var schemaProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaProperties"])(this.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaProperties)) {
        Object.keys(schemaProperties).forEach(function (key) {
          var schema = schemaProperties[key];
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
      var schemaRequired = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaRequired"])(this.schema);
      return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaRequired) && schemaRequired.includes(property);
    }

    /**
     * Returns true if the property is dependent required
     */
  }, {
    key: "isDependentRequired",
    value: function isDependentRequired(property) {
      var _this2 = this;
      var dependentRequired = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaDependentRequired"])(this.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(dependentRequired)) {
        var missingProperties = [];
        Object.keys(dependentRequired).forEach(function (key) {
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(_this2.value[key])) {
            var requiredProperties = dependentRequired[key];
            missingProperties = requiredProperties.filter(function (property) {
              return !Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this2.value, property);
            });
          }
        });
        return missingProperties.includes(property);
      }
      return false;
    }
  }, {
    key: "createChild",
    value: function createChild(schema, key, value) {
      var instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path + this.jedi.pathSeparator + key,
        parent: this,
        value: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["clone"])(value)
      });
      this.children.push(instance);
      this.value[key] = instance.getValue();
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
      if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value)) {
        return;
      }
      Object.keys(value).forEach(function (key) {
        var child = _this4.getChild(key);

        // If a value has a already a child instance
        if (child) {
          child.activate();
          var oldValue = child.getValue();
          var newValue = value[child.getKey()];

          // update child value if the old value and the new value are different
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["different"])(oldValue, newValue)) {
            child.setValue(newValue, false);
          }
        } else {
          // create new child instance for the new value entry having the value as default
          _this4.createChild({}, key, value[key]);
        }
      });

      // remove any children that are not included in the value
      for (var i = this.children.length - 1; i >= 0; i--) {
        var instance = this.children[i];
        var key = instance.getKey();
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["notSet"])(value[key])) {
          if (this.getChild(key)) {
            instance.deactivate();
          } else {
            this.deleteChild(key);
          }
        }
      }
    }
  }]);
  return InstanceObject;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceObject);

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
/* harmony import */ var _editors_string_textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editors/string-textarea */ "./src/editors/string-textarea.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
var InstanceString = /*#__PURE__*/function (_Instance) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InstanceString, _Instance);
  var _super = _createSuper(InstanceString);
  function InstanceString() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstanceString);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstanceString, [{
    key: "setUI",
    value: function setUI() {
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaType"])(this.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaEnum"])(this.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaFormat"])(this.schema);
      if (schemaType === 'string' && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_10__["isSet"])(schemaEnum) && schemaFormat === 'radio') {
        this.ui = new _editors_string_enum_radio__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (schemaType === 'string' && schemaFormat === 'textarea') {
        this.ui = new _editors_string_textarea__WEBPACK_IMPORTED_MODULE_9__["default"](this);
      } else if (schemaType === 'string' && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_10__["isSet"])(schemaEnum)) {
        this.ui = new _editors_string_enum_select__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      } else if (schemaType === 'string') {
        this.ui = new _editors_string__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      }
    }
  }]);
  return InstanceString;
}(_instance__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (InstanceString);

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
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation/validator */ "./src/validation/validator.js");
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-emitter */ "./src/event-emitter.js");
/* harmony import */ var _instances_multiple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instances/multiple */ "./src/instances/multiple.js");
/* harmony import */ var _instances_boolean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instances/boolean */ "./src/instances/boolean.js");
/* harmony import */ var _instances_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instances/object */ "./src/instances/object.js");
/* harmony import */ var _instances_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./instances/array */ "./src/instances/array.js");
/* harmony import */ var _instances_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instances/string */ "./src/instances/string.js");
/* harmony import */ var _instances_number__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./instances/number */ "./src/instances/number.js");
/* harmony import */ var _instances_null__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./instances/null */ "./src/instances/null.js");
/* harmony import */ var _ref_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ref-parser */ "./src/ref-parser.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/schema */ "./src/helpers/schema.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













/**
 * Represents a Jedi instance.
 */
var Jedi = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Jedi, _EventEmitter);
  var _super = _createSuper(Jedi);
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.isEditor - Generates UI controls to edit the JSON value
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  function Jedi(options) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Jedi);
    _this = _super.call(this);
    _this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      alwaysShowErrors: false,
      schema: {},
      refParser: true
    }, options);

    /**
     * Roots symbol used in paths
     * @type {string}
     * @private
     */
    _this.rootName = '#';

    /**
     * Separator symbol used in paths
     * @type {string}
     * @private
     */
    _this.pathSeparator = '/';

    /**
     * List of registered instances
     * @type {object}
     * @private
     */
    _this.instances = {};

    /**
     * The root editor
     * @type {Instance}
     * @private
     */
    _this.root = null;

    /**
     * The Theme instance used to generate editors user interfaces
     * @type {Theme}
     * @private
     */
    _this.theme = null;

    /**
     * The Validator instance used to validate instance values
     * @type {Validator}
     * @private
     */
    _this.validator = null;

    /**
     * A json schema used
     * @type {*}
     * @private
     */
    _this.schema = null;

    /**
     * A RefParser instance
     * @type {RefParser}
     * @private
     */
    _this.refParser = null;
    _this.init();
    return _this;
  }

  /**
   * Initializes instance properties
   * @private
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Jedi, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.validator = new _validation_validator__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (this.options.refParser) {
        this.refParser = new _ref_parser__WEBPACK_IMPORTED_MODULE_15__["default"]({
          XMLHttpRequest: this.options.XMLHttpRequest
        });
        this.options.schema = this.refParser.dereference(this.options.schema);
      }
      this.schema = this.options.schema;
      this.root = this.createInstance({
        jedi: this,
        schema: this.options.schema
      });
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(this.options.startValue)) {
        this.root.setValue(this.options.startValue, false);
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
     * @private
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
     * @private
     */
  }, {
    key: "register",
    value: function register(instance) {
      this.instances[instance.path] = instance;
    }

    /**
     * Deletes a child instance pointer from the instances list
     * @private
     */
  }, {
    key: "unregister",
    value: function unregister(instance) {
      this.instances[instance.path] = null;
      delete this.instances[instance.path];
    }

    /**
     * Creates an json instance and dereference schema on the fly if needed.
     * @private
     */
  }, {
    key: "createInstance",
    value: function createInstance(config) {
      if (this.options.refParser && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["hasOwn"])(config.schema, '$ref')) {
        config.schema = this.refParser.define(config.schema['$ref']);
      }
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaType"])(config.schema);
      var schemaOneOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaOneOf"])(config.schema);
      var schemaAnyOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaAnyOf"])(config.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(schemaAnyOf) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(schemaOneOf) || schemaType === 'any' || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isArray"])(schemaType) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["notSet"])(schemaType)) {
        return new _instances_multiple__WEBPACK_IMPORTED_MODULE_8__["default"](config);
      }
      if (schemaType === 'object') {
        return new _instances_object__WEBPACK_IMPORTED_MODULE_10__["default"](config);
      }
      if (schemaType === 'array') {
        return new _instances_array__WEBPACK_IMPORTED_MODULE_11__["default"](config);
      }
      if (schemaType === 'string') {
        return new _instances_string__WEBPACK_IMPORTED_MODULE_12__["default"](config);
      }
      if (schemaType === 'number' || schemaType === 'integer') {
        return new _instances_number__WEBPACK_IMPORTED_MODULE_13__["default"](config);
      }
      if (schemaType === 'boolean') {
        return new _instances_boolean__WEBPACK_IMPORTED_MODULE_9__["default"](config);
      }
      if (schemaType === 'null') {
        return new _instances_null__WEBPACK_IMPORTED_MODULE_14__["default"](config);
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
     */
  }, {
    key: "setValue",
    value: function setValue() {
      var _this$root;
      (_this$root = this.root).setValue.apply(_this$root, arguments);
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
}(_event_emitter__WEBPACK_IMPORTED_MODULE_7__["default"]);
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.js");


/* global XMLHttpRequest */



/**
 * Represents a RefParser instance.
 */
var RefParser = /*#__PURE__*/function () {
  function RefParser(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RefParser);
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["notSet"])(options)) {
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
            if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(args.value)) {
              return;
            }
            var refOwner = args.prevValue;
            var ref = args.value['$ref'];
            if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(refOwner) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(ref)) {
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
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["equal"])(firstHalf, secondHalf)) {
          output = true;
        }
      });
      return output;
    }
  }, {
    key: "define",
    value: function define(ref) {
      if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(ref)) {
        return ref;
      }

      // definitions
      if (ref.startsWith('#')) {
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(this.definitions[ref])) {
          return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.definitions[ref]);
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
      var path = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(args.path) ? args.path + '/' + args.key : '#';
      args.path = path;
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(callback)) {
        callback(args);
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"])(value)) {
        Object.keys(value).forEach(function (key) {
          args.value = value[key];
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this2.traverse(args);
        });
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/themes/theme.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Represents a ThemeBootstrap3 instance.
 * @extends Theme
 */
var ThemeBootstrap3 = /*#__PURE__*/function (_Theme) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ThemeBootstrap3, _Theme);
  var _super = _createSuper(ThemeBootstrap3);
  function ThemeBootstrap3() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBootstrap3);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBootstrap3, [{
    key: "init",
    value: function init() {
      this.useToggleEvents = false;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getLegend", this).call(this, config);
      this.hideElement(legend);
      return legend;
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
      html.classList.add('btn-group');
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
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getPropertiesSlot", this).call(this, config);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
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
    key: "getDescription",
    value: function getDescription(config) {
      var description = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getDescription", this).call(this, config);
      description.classList.add('text-muted');
      return description;
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
        this.hideElement(label);
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
        this.hideElement(label);
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getRadiosControl", this).call(this, config);
      var fieldset = control.fieldset,
        radios = control.radios,
        labels = control.labels,
        labelTexts = control.labelTexts,
        radioControls = control.radioControls,
        description = control.description,
        messages = control.messages;
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('radio');
        fieldset.appendChild(radioControls[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(radios[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      fieldset.appendChild(description);
      fieldset.appendChild(messages);
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
        this.hideElement(label);
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
      tabList.classList.add('nav-stacked');
      if (config.stacked === false) {
        tabList.classList.remove('nav-stacked');
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
      if (active) {
        element.classList.add('in');
        element.classList.add('active');
      }
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.classList.add('sr-only');
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.classList.remove('sr-only');
    }
  }]);
  return ThemeBootstrap3;
}(_theme__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/themes/theme.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Represents a ThemeBootstrap4 instance.
 * @extends Theme
 */
var ThemeBootstrap4 = /*#__PURE__*/function (_Theme) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ThemeBootstrap4, _Theme);
  var _super = _createSuper(ThemeBootstrap4);
  function ThemeBootstrap4() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBootstrap4);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBootstrap4, [{
    key: "init",
    value: function init() {
      this.useToggleEvents = false;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getLegend", this).call(this, config);
      this.hideElement(legend);
      return legend;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var card = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCard", this).call(this);
      card.classList.add('card');
      card.classList.add('mb-3');
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
      html.classList.add('pb-0');
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getPropertiesSlot", this).call(this, config);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getArrayActionsSlot", this).call(this);
      html.classList.add('btn-group');
      html.classList.add('float-right');
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
      return html;
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getDescription", this).call(this, config);
      description.classList.add('text-muted');
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
        this.hideElement(label);
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
        this.hideElement(label);
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        fieldset = control.fieldset,
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
        fieldset.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      fieldset.appendChild(description);
      fieldset.appendChild(messages);
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
      formGroup.classList.add('form-group');
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
      tabList.classList.add('flex-column');
      if (config.stacked === false) {
        tabList.classList.remove('flex-column');
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
      if (active) {
        element.classList.add('active');
      }
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.classList.add('sr-only');
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.classList.remove('sr-only');
    }
  }]);
  return ThemeBootstrap4;
}(_theme__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/themes/theme.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Represents a ThemeBootstrap5 instance.
 * @extends Theme
 */
var ThemeBootstrap5 = /*#__PURE__*/function (_Theme) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ThemeBootstrap5, _Theme);
  var _super = _createSuper(ThemeBootstrap5);
  function ThemeBootstrap5() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ThemeBootstrap5);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ThemeBootstrap5, [{
    key: "init",
    value: function init() {
      this.useToggleEvents = false;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getLegend", this).call(this, config);
      this.hideElement(legend);
      return legend;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var card = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCard", this).call(this);
      card.classList.add('card');
      card.classList.add('mb-3');
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
      html.classList.add('pb-0');
      return html;
    }
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getPropertiesSlot", this).call(this, config);
      html.classList.add('collapse');
      html.setAttribute('id', config.id);
      return html;
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getArrayActionsSlot", this).call(this);
      html.classList.add('btn-group');
      html.classList.add('float-end');
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
      return html;
    }
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getDescription", this).call(this, config);
      description.classList.add('text-muted');
      return description;
    }
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getTextareaControl", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.add('mb-3');
      input.classList.add('form-control');
      if (config.srOnly) {
        this.hideElement(label);
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
      container.classList.add('mb-3');
      input.classList.add('form-control');
      if (config.srOnly) {
        this.hideElement(label);
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        fieldset = control.fieldset,
        radios = control.radios,
        labels = control.labels,
        labelTexts = control.labelTexts,
        radioControls = control.radioControls,
        description = control.description,
        messages = control.messages;
      container.classList.add('mb-3');
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('form-check');
        radios[index].classList.add('form-check-input');
        labels[index].classList.add('form-check-label');
        fieldset.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      fieldset.appendChild(description);
      fieldset.appendChild(messages);
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
      container.classList.add('mb-3');
      formGroup.classList.add('form-check');
      input.classList.add('form-check-input');
      label.classList.add('form-check-label');
      if (config.srOnly) {
        this.hideElement(label);
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
      container.classList.add('mb-3');
      input.classList.add('form-select');
      return control;
    }
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getSwitcher", this).call(this, config);
      var container = control.container,
        input = control.input,
        label = control.label;
      container.classList.remove('mb-3');
      input.classList.remove('form-select');
      this.hideElement(label);
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
      tabList.classList.add('flex-column');
      if (config.stacked === false) {
        tabList.classList.remove('flex-column');
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
      if (active) {
        element.classList.add('active');
      }
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.classList.add('visually-hidden');
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.classList.remove('visually-hidden');
    }
  }]);
  return ThemeBootstrap5;
}(_theme__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ThemeBootstrap5);

/***/ }),

/***/ "./src/themes/icons/icons.js":
/*!***********************************!*\
  !*** ./src/themes/icons/icons.js ***!
  \***********************************/
/*! exports provided: glyphicons, bootstrapIcons, fontAwesome3, fontAwesome4, fontAwesome5, fontAwesome6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glyphicons", function() { return glyphicons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapIcons", function() { return bootstrapIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome3", function() { return fontAwesome3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome4", function() { return fontAwesome4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome5", function() { return fontAwesome5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome6", function() { return fontAwesome6; });
/**
 * Lists of html classes used for icons.
 * @module icons
 */

/**
 * HTML classes for glyphicons icons
 * @type {object}
 */
var glyphicons = {
  properties: 'glyphicon glyphicon-list',
  "delete": 'glyphicon glyphicon-trash',
  add: 'glyphicon glyphicon-plus',
  moveUp: 'glyphicon glyphicon-arrow-up',
  moveDown: 'glyphicon glyphicon-arrow-down'
};

/**
 * HTML classes for bootstrap-icons icons
 * @type {object}
 */
var bootstrapIcons = {
  properties: 'bi bi-card-list',
  "delete": 'bi bi-trash2',
  add: 'bi bi-plus',
  moveUp: 'bi bi-arrow-up',
  moveDown: 'bi bi-arrow-down'
};

/**
 * HTML classes for fontawesome3 icons
 * @type {object}
 */
var fontAwesome3 = {
  properties: 'icon-list',
  "delete": 'icon-trash',
  add: 'icon-plus',
  moveUp: 'icon-arrow-up',
  moveDown: 'icon-arrow-down'
};

/**
 * HTML classes for fontawesome4 icons
 * @type {object}
 */
var fontAwesome4 = {
  properties: 'fa fa-list',
  "delete": 'fa fa-trash',
  add: 'fa fa-plus',
  moveUp: 'fa fa-arrow-up',
  moveDown: 'fa fa-arrow-down'
};

/**
 * HTML classes for fontawesome5 icons
 * @type {object}
 */
var fontAwesome5 = {
  properties: 'fas fa-list',
  "delete": 'fas fa-trash',
  add: 'fas fa-plus',
  moveUp: 'fas fa-arrow-up',
  moveDown: 'fas fa-arrow-down'
};

/**
 * HTML classes for fontawesome6 icons
 * @type {object}
 */
var fontAwesome6 = {
  properties: 'fa-solid fa-list',
  "delete": 'fa-solid fa-trash',
  add: 'fa-solid fa-plus',
  moveUp: 'fa-solid fa-arrow-up',
  moveDown: 'fa-solid fa-arrow-down'
};

/***/ }),

/***/ "./src/themes/theme.js":
/*!*****************************!*\
  !*** ./src/themes/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Represents a Theme instance.
 */
var Theme = /*#__PURE__*/function () {
  function Theme() {
    var icons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Theme);
    this.icons = icons;
    this.useToggleEvents = true;
    this.init();
  }

  /**
   * Inits some instance properties
   * @private
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Theme, [{
    key: "init",
    value: function init(name) {
      this.useToggleEvents = true;
    }

    /**
     * Returns a icon element
     * @private
     */
  }, {
    key: "getIcon",
    value: function getIcon(name) {
      var icon = document.createElement('i');
      var iconClasses = this.icons[name].split(' ');
      if (iconClasses.length > 0) {
        iconClasses.forEach(function (className) {
          icon.classList.add(className);
        });
      }
      return icon;
    }

    /**
     * Returns a div used to wrap the editor UI elements
     * @private
     */
  }, {
    key: "getEditorContainer",
    value: function getEditorContainer() {
      var html = document.createElement('div');
      html.classList.add('jedi-editor-container');
      return html;
    }

    /**
     * Return a fieldset element.
     * Used to wrap children slot and provide more semantic html
     * @private
     */
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      return document.createElement('fieldset');
    }

    /**
     * Container for complex editors like arrays, objects and multiple
     * @private
     */
  }, {
    key: "getCard",
    value: function getCard() {
      return document.createElement('div');
    }

    /**
     * Legend element used in fieldsets
     * @private
     */
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = document.createElement('legend');
      legend.textContent = config.textContent;
      this.hideElement(legend);
      return legend;
    }

    /**
     * Header for cards
     * @private
     */
  }, {
    key: "getCardHeader",
    value: function getCardHeader() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var header = document.createElement('div');
      var title = document.createElement('span');
      if (config.textContent) {
        title.textContent = config.textContent;
      }
      if (config.srOnly) {
        this.hideElement(title);
      }
      header.appendChild(title);
      return header;
    }

    /**
     * A body for the cards
     * @private
     */
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      return document.createElement('div');
    }

    /**
     * Wrapper for editor actions buttons
     * @private
     */
  }, {
    key: "getActionsSlot",
    value: function getActionsSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-actions-slot');
      return html;
    }

    /**
     * Wrapper for editor array specific actions buttons
     * @private
     */
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-array-actions-slot');
      return html;
    }

    /**
     * Wrapper for child editors
     * @private
     */
  }, {
    key: "getChildrenSlot",
    value: function getChildrenSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-child-editors-slot');
      return html;
    }

    /**
     * Wrapper for error messages
     * @private
     */
  }, {
    key: "getMessagesSlot",
    value: function getMessagesSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-messages-slot');
      return html;
    }

    /**
     * Wrapper for editor controls
     * @private
     */
  }, {
    key: "getControlSlot",
    value: function getControlSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-control-slot');
      return html;
    }

    /**
     * Container for properties editing elements like property activators
     * @private
     */
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot(config) {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-slot');
      html.setAttribute('id', config.id);
      if (this.useToggleEvents) {
        html.style.display = 'none';
      }
      return html;
    }

    /**
     * Toggles the ObjectEditor properties wrapper visibility
     * @private
     */
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var _this = this;
      var toggle = this.getButton(config);
      toggle.classList.add('jedi-properties-toggle');
      if (this.useToggleEvents) {
        toggle.addEventListener('click', function () {
          if (config.propertiesContainer.style.display === 'none') {
            _this.showElement(config.propertiesContainer);
          } else {
            _this.hideElement(config.propertiesContainer);
          }
        });
      }
      return toggle;
    }

    /**
     * Wrapper for property activators
     * @private
     */
  }, {
    key: "getPropertiesActivators",
    value: function getPropertiesActivators() {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-container');
      return html;
    }

    /**
     * Wrapper buttons
     * @private
     */
  }, {
    key: "getBtnGroup",
    value: function getBtnGroup() {
      return document.createElement('div');
    }

    /**
     * A button
     * @private
     */
  }, {
    key: "getButton",
    value: function getButton(config) {
      var button = document.createElement('button');
      button.setAttribute('type', 'button');
      if (config.value) {
        button.value = config.value;
      }
      if (config.id) {
        button.setAttribute('id', config.value);
      }
      var text = document.createElement('span');
      text.textContent = config.textContent;
      if (this.icons && config.icon) {
        var icon = this.getIcon(config.icon);
        icon.setAttribute('title', config.textContent);
        button.appendChild(icon);
        this.hideElement(text);
      }
      button.appendChild(text);
      return button;
    }

    /**
     * Array "add" item button
     * @private
     */
  }, {
    key: "getArrayBtnAdd",
    value: function getArrayBtnAdd(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-array-add');
      return html;
    }

    /**
     * Array "delete" item button
     * @private
     */
  }, {
    key: "getDeleteItemBtn",
    value: function getDeleteItemBtn() {
      var deleteItemBtn = this.getButton({
        textContent: 'Delete item',
        icon: 'delete'
      });
      deleteItemBtn.classList.add('jedi-array-delete');
      return deleteItemBtn;
    }

    /**
     * Array "move up" item button
     * @private
     */
  }, {
    key: "getMoveUpItemBtn",
    value: function getMoveUpItemBtn() {
      var moveUpItemBtn = this.getButton({
        textContent: 'Move up',
        icon: 'moveUp'
      });
      moveUpItemBtn.classList.add('jedi-array-move-up');
      return moveUpItemBtn;
    }

    /**
     * Array "move down" item button
     * @private
     */
  }, {
    key: "getMoveDownItemBtn",
    value: function getMoveDownItemBtn() {
      var moveDownItemBtn = this.getButton({
        textContent: 'Move down',
        icon: 'moveDown'
      });
      moveDownItemBtn.classList.add('jedi-array-move-down');
      return moveDownItemBtn;
    }

    /**
     * Wrapper for the editor description
     * @private
     */
  }, {
    key: "getDescription",
    value: function getDescription(config) {
      var description = document.createElement('div');
      description.textContent = config.textContent;
      return description;
    }

    /**
     * Object control is a card containing multiple editors.
     * Each editor is mapped to an object instance property.
     * Properties can be added, activated and deactivated depending on configuration
     * @private
     */
  }, {
    key: "getObjectControl",
    value: function getObjectControl(config) {
      var container = document.createElement('div');
      var card = this.getCard();
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
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
      var propertiesContainer = this.getPropertiesSlot({
        id: 'properties-slot-' + config.id
      });
      var propertiesToggle = this.getPropertiesToggle({
        textContent: 'Properties',
        id: 'properties-slot-' + config.id,
        icon: 'properties',
        propertiesContainer: propertiesContainer
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
      container.appendChild(description);
      container.appendChild(card);
      card.appendChild(header);
      card.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(arrayActions);
      body.appendChild(propertiesContainer);
      body.appendChild(messages);
      body.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(childrenSlot);
      if (config.editableProperties) {
        actions.appendChild(propertiesToggle);
        propertiesContainer.appendChild(propertiesActivators);
      }
      if (config.addProperty) {
        propertiesContainer.appendChild(addPropertyControl.container);
        propertiesContainer.appendChild(addPropertyBtn);
      }
      return {
        container: container,
        card: card,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        propertiesToggle: propertiesToggle,
        propertiesContainer: propertiesContainer,
        addPropertyControl: addPropertyControl,
        addPropertyBtn: addPropertyBtn,
        propertiesActivators: propertiesActivators,
        arrayActions: arrayActions
      };
    }

    /**
     * Array control is a card containing multiple editors.
     * Items can bve added, deleted or moved up or down.
     * @private
     */
  }, {
    key: "getArrayControl",
    value: function getArrayControl(config) {
      var container = document.createElement('div');
      var card = this.getCard();
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
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
        textContent: 'Add item',
        icon: 'add'
      });
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title
      });
      container.appendChild(description);
      container.appendChild(card);
      card.appendChild(header);
      card.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(btnGroup);
      btnGroup.appendChild(addBtn);
      actions.appendChild(arrayActions);
      body.appendChild(messages);
      body.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(childrenSlot);
      return {
        container: container,
        card: card,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        btnGroup: btnGroup,
        addBtn: addBtn,
        arrayActions: arrayActions
      };
    }

    /**
     * Multiple control is a card containing multiple editors options that can be
     * selected with a switcher control. Only one editor can be active/visible
     * at a time
     * @private
     */
  }, {
    key: "getMultipleControl",
    value: function getMultipleControl(config) {
      var container = document.createElement('div');
      var card = this.getCard();
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
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
        srOnly: true,
        readOnly: config.readOnly
      });
      switcher.container.classList.add('jedi-switcher');
      container.appendChild(description);
      container.appendChild(card);
      card.appendChild(header);
      card.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(arrayActions);
      actions.appendChild(switcher.container);
      body.appendChild(messages);
      body.appendChild(childrenSlot);
      return {
        container: container,
        card: card,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        switcher: switcher,
        arrayActions: arrayActions
      };
    }

    /**
     * Control for NullEditor
     * @private
     */
  }, {
    key: "getNullControl",
    value: function getNullControl(config) {
      var container = document.createElement('div');
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        this.hideElement(label);
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
      container.appendChild(actions);
      actions.appendChild(arrayActions);
      label.appendChild(labelText);
      return {
        container: container,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages,
        actions: actions,
        arrayActions: arrayActions
      };
    }

    /**
     * A Textarea
     * @private
     */
  }, {
    key: "getTextareaControl",
    value: function getTextareaControl(config) {
      var container = document.createElement('div');
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var input = document.createElement('textarea');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        this.hideElement(label);
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
      container.appendChild(actions);
      actions.appendChild(arrayActions);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages,
        actions: actions,
        arrayActions: arrayActions
      };
    }

    /**
     * An Input control
     * @private
     */
  }, {
    key: "getInputControl",
    value: function getInputControl(config) {
      var container = document.createElement('div');
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var input = document.createElement('input');
      input.setAttribute('type', config.type);
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        this.hideElement(label);
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
      container.appendChild(actions);
      actions.appendChild(arrayActions);
      label.appendChild(labelText);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages,
        actions: actions,
        arrayActions: arrayActions
      };
    }

    /**
     * A radio group control
     * @private
     */
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var container = document.createElement('div');
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.label
      });
      fieldset.appendChild(legend);
      var label = document.createElement('span');
      label.textContent = config.label;
      if (config.srOnly) {
        this.hideElement(label);
      }
      var messages = this.getMessagesSlot();
      fieldset.appendChild(label);
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
        fieldset.appendChild(radioControls[index]);
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
      container.appendChild(fieldset);
      container.appendChild(actions);
      actions.appendChild(arrayActions);
      fieldset.appendChild(description);
      fieldset.appendChild(messages);
      return {
        container: container,
        fieldset: fieldset,
        legend: legend,
        label: label,
        radios: radios,
        labels: labels,
        labelTexts: labelTexts,
        radioControls: radioControls,
        description: description,
        messages: messages,
        actions: actions,
        arrayActions: arrayActions
      };
    }

    /**
     * A checkbox control
     * @private
     */
  }, {
    key: "getCheckboxControl",
    value: function getCheckboxControl(config) {
      var container = document.createElement('div');
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var formGroup = document.createElement('div');
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', config.id);
      var label = document.createElement('label');
      label.setAttribute('for', config.id);
      var labelText = document.createElement('span');
      labelText.textContent = config.label;
      if (config.srOnly) {
        this.hideElement(label);
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
      container.appendChild(actions);
      actions.appendChild(arrayActions);
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
        messages: messages,
        actions: actions,
        arrayActions: arrayActions
      };
    }

    /**
     * A select control
     * @private
     */
  }, {
    key: "getSelectControl",
    value: function getSelectControl(config) {
      var container = document.createElement('div');
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
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
        this.hideElement(label);
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
      container.appendChild(actions);
      actions.appendChild(arrayActions);
      return {
        container: container,
        input: input,
        label: label,
        labelText: labelText,
        description: description,
        messages: messages,
        actions: actions,
        arrayActions: arrayActions
      };
    }

    /**
     * Control to switch between multiple editors options
     * @private
     */
  }, {
    key: "getSwitcher",
    value: function getSwitcher(config) {
      return this.getSelectControl(config);
    }

    /**
     * Another type of error message container used for more complex editors like
     * object, array and multiple editors
     * @private
     */
  }, {
    key: "getAlert",
    value: function getAlert(config) {
      var html = document.createElement('p');
      html.classList.add('jedi-error-message');
      html.textContent = config.message;
      return html;
    }

    /**
     * Error messages
     * @public
     */
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = document.createElement('div');
      html.classList.add('jedi-error-message');
      html.textContent = config.message;
      return html;
    }

    /**
     * Container for columns
     * @private
     */
  }, {
    key: "getRow",
    value: function getRow() {
      var row = document.createElement('div');
      row.classList.add('jedi-row');
      return row;
    }

    /**
     * A column to contain content to a specific width
     * @private
     */
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

    /**
     * Tab list is a list of links that triggers tabs visibility ne at the time
     * @private
     */
  }, {
    key: "getTabList",
    value: function getTabList(config) {
      var tabList = document.createElement('ul');
      tabList.classList.add('jedi-nav-list');
      return tabList;
    }

    /**
     * A Tab is a wrapper for content
     * @private
     */
  }, {
    key: "getTab",
    value: function getTab(config) {
      var list = document.createElement('li');
      var link = document.createElement('a');
      link.classList.add('jedi-nav-link');
      link.setAttribute('href', '#' + config.id);
      link.textContent = config.title;
      list.appendChild(link);
      return {
        list: list,
        link: link
      };
    }

    /**
     * Wrapper for tabs
     * @private
     */
  }, {
    key: "getTabContent",
    value: function getTabContent() {
      var tabContent = document.createElement('div');
      tabContent.classList.add('tab-content');
      return tabContent;
    }

    /**
     * Set tab attributes to make it toggleable
     * @private
     */
  }, {
    key: "setTabPaneAttributes",
    value: function setTabPaneAttributes(element, active, id) {
      element.setAttribute('id', id);
      element.classList.add('jedi-tab-pane');
    }

    /**
     * Makes an element visually hidden
     * @private
     */
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }

    /**
     * Reveals a visually hidden element
     * @private
     */
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'block';
    }
  }]);
  return Theme;
}();
/* harmony default export */ __webpack_exports__["default"] = (Theme);

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");

/**
 * constrains additionalProperties
 */





function additionalProperties(validator, value, schema, key, path) {
  var errors = [];
  var schemaAdditionalProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaAdditionalProperties"])(schema);
  var schemaPatternProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaPatternProperties"])(schema);
  var schemaProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaAdditionalProperties)) {
    var properties = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaProperties) ? schemaProperties : {};
    var _additionalProperties = schemaAdditionalProperties;
    var patternProperties = schemaPatternProperties;
    if (properties) {
      Object.keys(value).forEach(function (property) {
        var definedInPatternProperty = false;
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(patternProperties)) {
          Object.keys(patternProperties).forEach(function (pattern) {
            var regexp = new RegExp(pattern);
            definedInPatternProperty = regexp.test(property);
          });
        }
        if (!definedInPatternProperty && _additionalProperties === false && !Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(properties, property)) {
          errors.push({
            messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].errorAdditionalProperties, {
              property: property
            })],
            path: path
          });
        }
        if (!definedInPatternProperty && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(_additionalProperties) && !Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(properties, property)) {
          var editor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function allOf(validator, value, schema, key, path) {
  var errors = [];
  var allOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaAllOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(allOf)) {
    allOf.forEach(function (schema) {
      var subSchemaEditor = new _jedi__WEBPACK_IMPORTED_MODULE_2__["default"]({
        schema: schema,
        startValue: value,
        rootName: key,
        refParser: false
      });
      var subSchemaErrors = subSchemaEditor.getErrors();
      subSchemaEditor.destroy();
      errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(subSchemaErrors));
      errors = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["removeDuplicatesFromArray"])(errors);
    });
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");





function anyOf(validator, value, schema, key, path) {
  var errors = [];
  var anyOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaAnyOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(anyOf)) {
    var valid = false;
    var anyOfErrorsMessages = [];
    anyOf.forEach(function (schema) {
      var anyOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        schema: schema,
        startValue: value,
        refParser: false
      });
      var anyOfErrors = anyOfEditor.getErrors();
      anyOfErrorsMessages = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(anyOfErrorsMessages), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(anyOfErrors));
      anyOfEditor.destroy();
      if (anyOfErrors.length === 0) {
        valid = true;
      }
    });
    if (!valid) {
      errors.push({
        messages: [_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].errorAnyOf],
        path: path
      });
      errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(anyOfErrorsMessages));
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function _const(validator, value, schema, key, path) {
  var errors = [];
  var schemaConst = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaConst"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaConst)) {
    var valueIsNotEqualConst = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["different"])(value, schemaConst);
    var invalid = valueIsNotEqualConst;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorConst, {
          "const": JSON.stringify(schemaConst)
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function contains(validator, value, schema, key, path) {
  var errors = [];
  var contains = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaContains"])(schema);
  var minContains = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaMinContains"])(schema);
  var maxContains = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaMaxContains"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(contains)) {
    var counter = 0;
    value.forEach(function (item) {
      var containsEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        schema: contains,
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
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(minContains)) {
      var minContainsInvalid = counter < minContains;
      if (minContainsInvalid) {
        errors.push({
          messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorMinContains, {
            counter: counter,
            minContains: minContains
          })],
          path: path
        });
      }
    } else {
      if (containsInvalid) {
        errors.push({
          messages: [_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorContains],
          path: path
        });
      }
    }
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(maxContains)) {
      var maxContainsInvalid = counter > maxContains;
      if (maxContainsInvalid) {
        errors.push({
          messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorMaxContains, {
            counter: counter,
            maxContains: maxContains
          })],
          path: path
        });
      }
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function dependentRequired(validator, value, schema, key, path) {
  var errors = [];
  var dependentRequired = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaDependentRequired"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(dependentRequired)) {
    var missingProperties = [];
    Object.keys(dependentRequired).forEach(function (key) {
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(value[key])) {
        var requiredProperties = dependentRequired[key];
        missingProperties = requiredProperties.filter(function (property) {
          return !Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(value, property);
        });
      }
    });
    var invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorDependentRequired, {
          dependentRequired: missingProperties.join(', ')
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function dependentSchemas(validator, value, schema, key, path) {
  var errors = [];
  var dependentSchemas = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaDependentSchemas"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(dependentSchemas)) {
    Object.keys(dependentSchemas).forEach(function (key) {
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value[key])) {
        var dependentSchema = dependentSchemas[key];
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
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function _enum(validator, value, schema, key, path) {
  var errors = [];
  var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaEnum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaEnum)) {
    var invalid = !schemaEnum.some(function (e) {
      return JSON.stringify(value) === JSON.stringify(e);
    });
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorEnum, {
          "enum": JSON.stringify(schemaEnum)
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function exclusiveMaximum(validator, value, schema, key, path) {
  var errors = [];
  var exclusiveMaximum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaExclusiveMaximum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(exclusiveMaximum)) {
    var invalid = value >= exclusiveMaximum;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorExclusiveMaximum, {
          exclusiveMaximum: exclusiveMaximum
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function exclusiveMinimum(validator, value, schema, key, path) {
  var errors = [];
  var exclusiveMinimum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaExclusiveMinimum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(exclusiveMinimum)) {
    var invalid = value <= exclusiveMinimum;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorExclusiveMinimum, {
          exclusiveMinimum: exclusiveMinimum
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function format(validator, value, schema, key, path) {
  var errors = [];
  var format = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaFormat"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(format) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
    var regexp;
    if (format === 'email') {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
    }
    if (format === 'url') {
      regexp = new RegExp(/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i);
    }
    if (format === 'uuid') {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i);
    }
    var invalid = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(regexp) && !regexp.test(value);
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorFormat, {
          format: format
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");



function _if(validator, value, schema, key, path) {
  var errors = [];
  var schemaIf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaIf"])(schema);
  var schemaThen = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaThen"])(schema);
  var schemaElse = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaElse"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaIf)) {
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["notSet"])(schemaThen) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["notSet"])(schemaElse)) {
      return errors;
    }
    var ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
      schema: schemaIf,
      startValue: value,
      refParser: false
    });
    var ifErrors = ifEditor.getErrors();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaThen)) {
      var thenEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schemaThen,
        startValue: value,
        refParser: false
      });
      thenErrors = thenEditor.getErrors();
      thenEditor.destroy();
    }
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaElse)) {
      var elseEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schemaElse,
        startValue: value,
        refParser: false
      });
      elseErrors = elseEditor.getErrors();
      elseEditor.destroy();
    }
    if (schemaIf === true) {
      return thenErrors;
    }
    if (schemaIf === false) {
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
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function items(validator, value, schema, key, path) {
  var errors = [];
  var items = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaItems"])(schema);
  var prefixItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaPrefixItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(items)) {
    var prefixItemsSchemasCount = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(prefixItems) ? prefixItems.length : 0;
    if (items === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        messages: [_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMaxProperties],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function maxItems(validator, value, schema, key, path) {
  var errors = [];
  var maxItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaxItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(maxItems)) {
    var invalid = value.length > maxItems;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMaxItems, {
          maxItems: maxItems
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function maxLength(validator, value, schema, key, path) {
  var errors = [];
  var maxLength = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaxLength"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(maxLength)) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points
    var invalid = value.length > maxLength;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMaxLength, {
          maxLength: maxLength
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function maxProperties(validator, value, schema, key, path) {
  var errors = [];
  var maxProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaxProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(maxProperties)) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount > maxProperties;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMaxProperties, {
          maxProperties: maxProperties
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function maximum(validator, value, schema, key, path) {
  var errors = [];
  var maximum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaximum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(maximum)) {
    var invalid = value > maximum;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMaximum, {
          maximum: maximum
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function minItems(validator, value, schema, key, path) {
  var errors = [];
  var minItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(minItems)) {
    var invalid = value.length < minItems;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMinItems, {
          minItems: minItems
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function minLength(validator, value, schema, key, path) {
  var errors = [];
  var minLength = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinLength"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(minLength)) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points
    var invalid = value.length < minLength;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMinLength, {
          minLength: minLength
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function minProperties(validator, value, schema, key, path) {
  var errors = [];
  var minProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(minProperties)) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount < minProperties;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMinProperties, {
          minProperties: minProperties
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function minimum(validator, value, schema, key, path) {
  var errors = [];
  var minimum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinimum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(minimum)) {
    var invalid = value < minimum;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMinimum, {
          minimum: minimum
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function multipleOf(validator, value, schema, key, path) {
  var errors = [];
  var multipleOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMultipleOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(multipleOf)) {
    if (value === 0) {
      return errors;
    }
    var isMultipleOf = value / multipleOf === Math.floor(value / multipleOf);
    var invalid = !isMultipleOf || value.toString().includes('e');
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorMultipleOf, {
          multipleOf: multipleOf
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");



function not(validator, value, schema, key, path) {
  var errors = [];
  var not = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaNot"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(not)) {
    var notErrors = validator.getErrors(value, not, key, path);
    var invalid = notErrors.length === 0;
    if (invalid) {
      var replaceText = function replaceText(data) {
        return data.map(function (item) {
          var newMessages = item.messages.map(function (message) {
            return message.replace('must', 'must NOT');
          });
          return {
            messages: newMessages,
            path: item.path
          };
        });
      };
      var notNotErrors = validator.getErrors(undefined, not, key, path);
      errors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(errors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(notNotErrors));
      errors = replaceText(errors);
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function oneOf(validator, value, schema, key, path) {
  var errors = [];
  var oneOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaOneOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(oneOf)) {
    var counter = 0;
    oneOf.forEach(function (schema) {
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
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorOneOf, {
          counter: counter
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function pattern(validator, value, schema, key, path) {
  var errors = [];
  var pattern = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaPattern"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(pattern)) {
    var regexp = new RegExp(pattern);
    var invalid = !regexp.test(value);
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorPattern, {
          pattern: pattern
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function patternProperties(validator, value, schema, path) {
  var errors = [];
  var atternProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaPatternProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(atternProperties)) {
    var _patternProperties = atternProperties;
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
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function prefixItems(validator, value, schema, key, path) {
  var errors = [];
  var prefixItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaPrefixItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(prefixItems)) {
    prefixItems.forEach(function (itemSchema, index) {
      var itemValue = value[index];
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(itemValue)) {
        var tmpEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
          schema: itemSchema,
          startValue: itemValue,
          refParser: false
        });
        var tmpErrors = tmpEditor.getErrors();
        tmpEditor.destroy();
        if (tmpErrors.length > 0) {
          errors.push({
            messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorPrefixItems, {
              index: index
            })],
            path: path
          });
        }
      }
    });
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function required(validator, value, schema, key, path) {
  var errors = [];
  var required = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaRequired"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(required)) {
    var missingProperties = [];
    var keys = Object.keys(value);
    required.forEach(function (key) {
      if (!keys.includes(key)) {
        missingProperties.push(key);
      }
    });
    var invalid = missingProperties.length > 0;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorRequired, {
          required: missingProperties.join(', ')
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function type(validator, value, schema, key, path) {
  var errors = [];
  var type = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaType"])(schema);
  if (type === 'any') {
    return errors;
  }
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(type)) {
    var types = {
      string: function string(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value);
      },
      number: function number(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value);
      },
      integer: function integer(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(value);
      },
      "boolean": function boolean(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isBoolean"])(value);
      },
      array: function array(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value);
      },
      object: function object(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value);
      },
      "null": function _null(value) {
        return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNull"])(value);
      }
    };
    var valid = true;
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(type)) {
      valid = type.some(function (type) {
        return types[type](value);
      });
    } else {
      valid = types[type](value);
    }
    if (!valid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorType, {
          type: type,
          valueType: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["getType"])(value)
        })],
        path: path
      });
    }
  }
  return errors;
}

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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");



function uniqueItems(validator, value, schema, key, path) {
  var errors = [];
  var uniqueItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaUniqueItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(uniqueItems) && uniqueItems === true) {
    var seen = [];
    var hasDuplicatedItems = false;
    var _loop = function _loop() {
      var item = value[i];
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(item)) {
        item = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["sortObject"])(item);
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
        messages: [_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorUniqueItems],
        path: path
      });
    }
  }
  return errors;
}

/***/ }),

/***/ "./src/validation/drafts/draft-04.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-04.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constrains/allOf */ "./src/validation/constrains/allOf.js");
/* harmony import */ var _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constrains/minLength */ "./src/validation/constrains/minLength.js");
/* harmony import */ var _constrains_anyOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constrains/anyOf */ "./src/validation/constrains/anyOf.js");
/* harmony import */ var _constrains_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constrains/enum */ "./src/validation/constrains/enum.js");
/* harmony import */ var _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constrains/exclusiveMaximum */ "./src/validation/constrains/exclusiveMaximum.js");
/* harmony import */ var _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constrains/exclusiveMinimum */ "./src/validation/constrains/exclusiveMinimum.js");
/* harmony import */ var _constrains_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constrains/format */ "./src/validation/constrains/format.js");
/* harmony import */ var _constrains_items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constrains/items */ "./src/validation/constrains/items.js");
/* harmony import */ var _constrains_maxItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constrains/maxItems */ "./src/validation/constrains/maxItems.js");
/* harmony import */ var _constrains_maxLength__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constrains/maxLength */ "./src/validation/constrains/maxLength.js");
/* harmony import */ var _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constrains/maxProperties */ "./src/validation/constrains/maxProperties.js");
/* harmony import */ var _constrains_minimum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constrains/minimum */ "./src/validation/constrains/minimum.js");
/* harmony import */ var _constrains_minItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constrains/minItems */ "./src/validation/constrains/minItems.js");
/* harmony import */ var _constrains_minProperties__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constrains/minProperties */ "./src/validation/constrains/minProperties.js");
/* harmony import */ var _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constrains/multipleOf */ "./src/validation/constrains/multipleOf.js");
/* harmony import */ var _constrains_not__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constrains/not */ "./src/validation/constrains/not.js");
/* harmony import */ var _constrains_oneOf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constrains/oneOf */ "./src/validation/constrains/oneOf.js");
/* harmony import */ var _constrains_pattern__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constrains/pattern */ "./src/validation/constrains/pattern.js");
/* harmony import */ var _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constrains/patternProperties */ "./src/validation/constrains/patternProperties.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");
























/* harmony default export */ __webpack_exports__["default"] = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_23__["additionalProperties"],
  allOf: _constrains_allOf__WEBPACK_IMPORTED_MODULE_0__["allOf"],
  anyOf: _constrains_anyOf__WEBPACK_IMPORTED_MODULE_2__["anyOf"],
  "enum": _constrains_enum__WEBPACK_IMPORTED_MODULE_3__["_enum"],
  exclusiveMaximum: _constrains_exclusiveMaximum__WEBPACK_IMPORTED_MODULE_4__["exclusiveMaximum"],
  exclusiveMinimum: _constrains_exclusiveMinimum__WEBPACK_IMPORTED_MODULE_5__["exclusiveMinimum"],
  format: _constrains_format__WEBPACK_IMPORTED_MODULE_6__["format"],
  items: _constrains_items__WEBPACK_IMPORTED_MODULE_7__["items"],
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_21__["maximum"],
  maxItems: _constrains_maxItems__WEBPACK_IMPORTED_MODULE_8__["maxItems"],
  maxLength: _constrains_maxLength__WEBPACK_IMPORTED_MODULE_9__["maxLength"],
  maxProperties: _constrains_maxProperties__WEBPACK_IMPORTED_MODULE_10__["maxProperties"],
  minimum: _constrains_minimum__WEBPACK_IMPORTED_MODULE_11__["minimum"],
  minItems: _constrains_minItems__WEBPACK_IMPORTED_MODULE_12__["minItems"],
  minLength: _constrains_minLength__WEBPACK_IMPORTED_MODULE_1__["minLength"],
  minProperties: _constrains_minProperties__WEBPACK_IMPORTED_MODULE_13__["minProperties"],
  multipleOf: _constrains_multipleOf__WEBPACK_IMPORTED_MODULE_14__["multipleOf"],
  not: _constrains_not__WEBPACK_IMPORTED_MODULE_15__["not"],
  oneOf: _constrains_oneOf__WEBPACK_IMPORTED_MODULE_16__["oneOf"],
  pattern: _constrains_pattern__WEBPACK_IMPORTED_MODULE_17__["pattern"],
  patternProperties: _constrains_patternProperties__WEBPACK_IMPORTED_MODULE_18__["patternProperties"],
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_19__["required"],
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_20__["type"],
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_22__["uniqueItems"]
});

/***/ }),

/***/ "./src/validation/drafts/draft-06.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-06.js ***!
  \*******************************************/
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

/***/ "./src/validation/drafts/draft-07.js":
/*!*******************************************!*\
  !*** ./src/validation/drafts/draft-07.js ***!
  \*******************************************/
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

/***/ "./src/validation/drafts/draft-2019-09.js":
/*!************************************************!*\
  !*** ./src/validation/drafts/draft-2019-09.js ***!
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
/* harmony import */ var _drafts_draft_04__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drafts/draft-04 */ "./src/validation/drafts/draft-04.js");
/* harmony import */ var _drafts_draft_06__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drafts/draft-06 */ "./src/validation/drafts/draft-06.js");
/* harmony import */ var _drafts_draft_07__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drafts/draft-07 */ "./src/validation/drafts/draft-07.js");
/* harmony import */ var _drafts_draft_2019_09__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drafts/draft-2019-09 */ "./src/validation/drafts/draft-2019-09.js");
/* harmony import */ var _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drafts/draft-2020-12 */ "./src/validation/drafts/draft-2020-12.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");











/**
 * Represents a Validator instance.
 */
var Validator = /*#__PURE__*/function () {
  function Validator() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Validator);
    this.draft = _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_7__["default"];
    this.jsonSchemaDrafts = {
      'http://json-schema.org/draft-04/schema#': _drafts_draft_04__WEBPACK_IMPORTED_MODULE_3__["default"],
      'http://json-schema.org/draft-06/schema#': _drafts_draft_06__WEBPACK_IMPORTED_MODULE_4__["default"],
      'http://json-schema.org/draft-07/schema#': _drafts_draft_07__WEBPACK_IMPORTED_MODULE_5__["default"],
      'https://json-schema.org/draft/2019-09/schema': _drafts_draft_2019_09__WEBPACK_IMPORTED_MODULE_6__["default"],
      'https://json-schema.org/draft/2020-12/schema': _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
  }

  /**
   * Validates a value against it's schema
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Validator, [{
    key: "getErrors",
    value: function getErrors(value, schema, key, path) {
      var _this = this;
      var schemaErrors = [];
      var schemaOptionsMessages = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaOption"])(schema, 'messages');
      var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_8__["clone"])(schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_8__["isBoolean"])(schemaClone) && schemaClone === true) {
        return schemaErrors;
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_8__["isBoolean"])(schemaClone) && schemaClone === false) {
        return [{
          messages: schemaOptionsMessages || ['invalid'],
          path: path
        }];
      }
      Object.keys(this.draft).forEach(function (constrain) {
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_8__["hasOwn"])(schemaClone, constrain)) {
          var validator = _this.draft[constrain];
          var validatorErrors = validator(_this, value, schema, key, path);
          if (validatorErrors) {
            schemaErrors = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(schemaErrors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(validatorErrors));
          }
        }
      });
      if (schemaErrors.length > 0 && schemaOptionsMessages) {
        schemaErrors = [{
          messages: schemaOptionsMessages,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2kxOG4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yQXJyYXlOYXYiLCJfRWRpdG9yQXJyYXkiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiYWN0aXZlVGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiY29udHJvbCIsImFkZEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0YW5jZSIsImxlbmd0aCIsImFkZEl0ZW0iLCJyZWZyZXNoVUkiLCJfdGhpczIiLCJyZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImdldFNjaGVtYU9wdGlvbiIsInNjaGVtYSIsInRhYkxpc3RDb2wiLCJnZXRDb2wiLCJ0YWJDb250ZW50Q29sIiwidGFiQ29udGVudCIsImdldFRhYkNvbnRlbnQiLCJ0YWJMaXN0IiwiZ2V0VGFiTGlzdCIsInN0YWNrZWQiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImluZGV4IiwiZGVsZXRlQnRuIiwiZ2V0RGVsZXRlSXRlbUJ0biIsIm1vdmVVcEJ0biIsImdldE1vdmVVcEl0ZW1CdG4iLCJtb3ZlRG93bkJ0biIsImdldE1vdmVEb3duSXRlbUJ0biIsInVpIiwiYXJyYXlBY3Rpb25zIiwiY29udGFpbmVyIiwiY2hpbGRUaXRsZSIsInNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSIsInRlbXBsYXRlIiwiZGF0YSIsImkwIiwiaTEiLCJnZXRWYWx1ZSIsImNvbXBpbGVUZW1wbGF0ZSIsInNjaGVtYVRpdGxlIiwiZ2V0U2NoZW1hVGl0bGUiLCJpc1NldCIsImdldEtleSIsImNsYW1wIiwiZGVsZXRlSXRlbSIsInRvSW5kZXgiLCJtb3ZlIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwidGFiIiwiZ2V0VGFiIiwidGl0bGUiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImlzUmVhZE9ubHkiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2V0QXR0cmlidXRlIiwiRWRpdG9yQXJyYXkiLCJfRWRpdG9yIiwiYnVpbGQiLCJnZXRBcnJheUNvbnRyb2wiLCJzck9ubHkiLCJkZXNjcmlwdGlvbiIsImdldFNjaGVtYURlc2NyaXB0aW9uIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwibWVzc2FnZSIsImdldEFsZXJ0Iiwic2FuaXRpemUiLCJpc0FycmF5IiwibWF4SXRlbXMiLCJnZXRTY2hlbWFNYXhJdGVtcyIsIm1pbkl0ZW1zIiwiZ2V0U2NoZW1hTWluSXRlbXMiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJzcGxpdCIsImplZGkiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwiRWRpdG9yIiwiRWRpdG9yQm9vbGVhbkVudW1SYWRpbyIsIl9FZGl0b3JCb29sZWFuIiwiZ2V0UmFkaW9zQ29udHJvbCIsInZhbHVlcyIsInRpdGxlcyIsImxhYmVsIiwicmFkaW9zIiwicmFkaW8iLCJyYWRpb1ZhbHVlIiwic2V0VmFsdWUiLCJjaGVja2VkIiwiRWRpdG9yQm9vbGVhbiIsIkVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IiwiZ2V0U2VsZWN0Q29udHJvbCIsImlucHV0IiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiQm9vbGVhbiIsIl9FdmVudEVtaXR0ZXIiLCJyZWFkT25seSIsImNvZXJjZVZhbHVlIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhbHdheXNTaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsImljb25zIiwiaWNvbkxpYiIsImdseXBoaWNvbnMiLCJib290c3RyYXBJY29ucyIsImZvbnRBd2Vzb21lMyIsImZvbnRBd2Vzb21lNCIsImZvbnRBd2Vzb21lNSIsImZvbnRBd2Vzb21lNiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lIiwiZ2V0U2NoZW1hVHlwZSIsInNjaGVtYUVudW0iLCJnZXRTY2hlbWFFbnVtIiwiaW5jbHVkZXMiLCJtZXNzYWdlcyIsImVycm9yIiwiaW52YWxpZEZlZWRiYWNrIiwiX3RoaXMzIiwiaW50ZXJhY3RpdmVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwiZGVzdHJveSIsIl90aGlzNCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk9iamVjdCIsImtleXMiLCJFdmVudEVtaXR0ZXIiLCJFZGl0b3JNdWx0aXBsZSIsImdldE11bHRpcGxlQ29udHJvbCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwic3dpdGNoZXIiLCJzd2l0Y2hJbnN0YW5jZSIsImFjdGl2ZUluc3RhbmNlIiwiRWRpdG9yTnVsbCIsImdldE51bGxDb250cm9sIiwiZ2V0U2NoZW1hRm9ybWF0IiwiRWRpdG9yTnVtYmVyRW51bVJhZGlvIiwiX0VkaXRvck51bWJlciIsIkVkaXRvck51bWJlciIsIkVkaXRvck51bWJlckVudW1TZWxlY3QiLCJnZXRJbnB1dENvbnRyb2wiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIkVkaXRvck9iamVjdEdyaWQiLCJfRWRpdG9yT2JqZWN0IiwicmVmcmVzaEVkaXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaXNBY3RpdmUiLCJjb2x1bW5zIiwib2Zmc2V0IiwiY29sIiwiRWRpdG9yT2JqZWN0IiwiRWRpdG9yT2JqZWN0TmF2IiwiYWRkUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0T2JqZWN0Q29udHJvbCIsImVkaXRhYmxlUHJvcGVydGllcyIsImVxdWFsIiwiYWRkUHJvcGVydHlCdG4iLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyIsInByb3BlcnRpZXNBY3RpdmF0b3JzIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJub3RSZXF1aXJlZCIsImNoZWNrYm94Q29udHJvbCIsImNoZWNrYm94IiwiaGFzT3duIiwiZGVhY3RpdmF0ZSIsIkVkaXRvclN0cmluZ0VudW1SYWRpbyIsIl9FZGl0b3JTdHJpbmciLCJFZGl0b3JTdHJpbmciLCJFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IiwiRWRpdG9yU3RyaW5nVGV4dGFyZWEiLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJTdHJpbmciLCJpbnB1dFR5cGVzIiwic2NoZW1hRm9ybWF0IiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImVtaXQiLCJmaWx0ZXIiLCJsaXN0ZW5lciIsImdldFNjaGVtYVNjaGVtYSIsImlzU3RyaW5nIiwiJHNjaGVtYSIsInVuZGVmaW5lZCIsImlzQm9vbGVhbiIsImdldFNjaGVtYUFsbE9mIiwiYWxsT2YiLCJnZXRTY2hlbWFBbnlPZiIsImFueU9mIiwiZ2V0U2NoZW1hQ29uc3QiLCJnZXRTY2hlbWFDb250YWlucyIsImNvbnRhaW5zIiwiZ2V0U2NoZW1hRGVmYXVsdCIsImdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIiwiZGVwZW5kZW50U2NoZW1hcyIsImdldFNjaGVtYUVsc2UiLCJnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZ2V0U2NoZW1hSWYiLCJnZXRTY2hlbWFJdGVtcyIsIml0ZW1zIiwiZ2V0U2NoZW1hTWF4aW11bSIsIm1heGltdW0iLCJnZXRTY2hlbWFNYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heENvbnRhaW5zIiwiZ2V0U2NoZW1hTWF4TGVuZ3RoIiwibWF4TGVuZ3RoIiwiZ2V0U2NoZW1hTWF4UHJvcGVydGllcyIsIm1heFByb3BlcnRpZXMiLCJnZXRTY2hlbWFNaW5pbXVtIiwibWluaW11bSIsImdldFNjaGVtYU1pbkNvbnRhaW5zIiwibWluQ29udGFpbnMiLCJnZXRTY2hlbWFNaW5MZW5ndGgiLCJtaW5MZW5ndGgiLCJnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIiwibWluUHJvcGVydGllcyIsImdldFNjaGVtYU11bHRpcGxlT2YiLCJtdWx0aXBsZU9mIiwiZ2V0U2NoZW1hTm90Iiwibm90Iiwib3B0aW9uIiwiZ2V0U2NoZW1hUGF0dGVybiIsInBhdHRlcm4iLCJnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hUHJlZml4SXRlbXMiLCJwcmVmaXhJdGVtcyIsImdldFNjaGVtYVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hUmVhZE9ubHkiLCJnZXRTY2hlbWFSZXF1aXJlZCIsInJlcXVpcmVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiU2V0IiwiZ2V0U2NoZW1hVGhlbiIsInRoZW4iLCJnZXRTY2hlbWFPbmVPZiIsIm9uZU9mIiwiZ2V0U2NoZW1hVW5pcXVlSXRlbXMiLCJ1bmlxdWVJdGVtcyIsImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN0ciIsImZpbmQiLCJSZWdFeHAiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJzb3J0T2JqZWN0Iiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwibm90U2V0IiwiQXJyYXkiLCJfdHlwZW9mIiwiZ2V0VHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiYXNzaWduIiwiX2RlZmluZVByb3BlcnR5IiwiY29uY2F0Iiwib3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIiwib2JqMSIsIm9iajIiLCJnZXRWYWx1ZUJ5SlNPTlBhdGgiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidGVzdCIsInBhcnNlSW50IiwiZXJyIiwiZSIsImYiLCJtYXRjaCIsIm51bWJlciIsIm1pbiIsIm1heCIsInJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkiLCJhcnIiLCJ1bmlxdWVPYmplY3RzIiwidW5pcXVlVmFsdWVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm9ialN0cmluZyIsImhhcyIsImFkZCIsImkxOG4iLCJlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZXJyb3JBbnlPZiIsImVycm9yQ29uc3QiLCJlcnJvckNvbnRhaW5zIiwiZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCIsImVycm9yRW51bSIsImVycm9yRXhjbHVzaXZlTWF4aW11bSIsImVycm9yRXhjbHVzaXZlTWluaW11bSIsImVycm9yRm9ybWF0IiwiZXJyb3JJdGVtcyIsImVycm9yTWF4aW11bSIsImVycm9yTWF4SXRlbXMiLCJlcnJvck1heExlbmd0aCIsImVycm9yTWF4UHJvcGVydGllcyIsImVycm9yTWF4Q29udGFpbnMiLCJlcnJvck1pbkNvbnRhaW5zIiwiZXJyb3JNaW5pbXVtIiwiZXJyb3JNaW5JdGVtcyIsImVycm9yTWluTGVuZ3RoIiwiZXJyb3JNaW5Qcm9wZXJ0aWVzIiwiZXJyb3JNdWx0aXBsZU9mIiwiZXJyb3JOb3QiLCJlcnJvck9uZU9mIiwiZXJyb3JQYXR0ZXJuIiwiZXJyb3JQcmVmaXhJdGVtcyIsImVycm9yUmVxdWlyZWQiLCJlcnJvclR5cGUiLCJlcnJvclVuaXF1ZUl0ZW1zIiwiSW5zdGFuY2VBcnJheSIsIl9JbnN0YW5jZSIsInNldFVJIiwic2NoZW1hVHlwZSIsInByZXBhcmUiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJpdGVtc0NvdW50Iiwic2NoZW1hSXRlbXMiLCJzY2hlbWFQcmVmaXhJdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIm5ld1ZhbHVlIiwib25DaGlsZENoYW5nZSIsIml0ZW1WYWx1ZSIsIkluc3RhbmNlIiwiSW5zdGFuY2VCb29sZWFuIiwiY29uZmlnIiwicm9vdE5hbWUiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwidW5yZWdpc3RlciIsInNjaGVtYURlZmF1bHQiLCJ0cmlnZ2Vyc0NoYW5nZSIsInZhbGlkYXRvciIsIkluc3RhbmNlTXVsdGlwbGUiLCJpbnN0YW5jZXMiLCJhY3RpdmVJbnN0YW5jZUNoYW5nZWQiLCJsYXN0SW5kZXgiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYUNsb25lIiwic2NoZW1hVGhlbiIsInNjaGVtYUVsc2UiLCJ0aGVuU2NoZW1hIiwiZWxzZVNjaGVtYSIsInNjaGVtYXNPZiIsImNsb25lU2NoZW1hIiwiX29iamVjdFNwcmVhZCIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImZpdHRlc3RJbmRleCIsImdldElmSW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJyZWFzc2lnblZhbHVlcyIsImxhc3RJbnN0YW5jZVZhbHVlIiwiY3VycmVudEluc3RhbmNlVmFsdWUiLCJtZXJnZWRWYWx1ZSIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImNoYW1waW9uRXJyb3JzIiwiaW5zdGFuY2VFcnJvcnMiLCJJbnN0YW5jZU51bGwiLCJJbnN0YW5jZU51bWJlciIsInR5cGVJc051bWVyaWMiLCJJbnN0YW5jZU9iamVjdCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJpIiwiZ2V0Q2hpbGQiLCJvbGRWYWx1ZSIsIkluc3RhbmNlU3RyaW5nIiwicm9vdCIsIlZhbGlkYXRvciIsIlJlZlBhcnNlciIsIlhNTEh0dHBSZXF1ZXN0IiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImNsYXNzTGlzdCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsImRlZmluZSIsInNjaGVtYU9uZU9mIiwic2NoZW1hQW55T2YiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwiZGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWZPd25lciIsInByZXZWYWx1ZSIsInJlZiIsImlzQ2lyY3VsYXJQYXRoIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJfVGhlbWUiLCJ1c2VUb2dnbGVFdmVudHMiLCJnZXRMZWdlbmQiLCJsZWdlbmQiLCJoaWRlRWxlbWVudCIsImdldENhcmQiLCJjYXJkIiwiZ2V0Q2FyZEhlYWRlciIsImhlYWRlciIsImdldENhcmRCb2R5IiwiaHRtbCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEJ0bkdyb3VwIiwiZ2V0RGVzY3JpcHRpb24iLCJmaWVsZHNldCIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2xzIiwicmFkaW9Db250cm9sIiwiZm9ybUdyb3VwIiwibGFiZWxUZXh0IiwiZ2V0U3dpdGNoZXIiLCJyZW1vdmUiLCJ4cyIsIm1kIiwib2Zmc2V0TWQiLCJsaW5rIiwic2hvd0VsZW1lbnQiLCJnZXRDb2x1bW5DbGFzcyIsInNpemUiLCJnZXRDb250cm9sU2xvdCIsImNvbnRyb2xTbG90IiwibW92ZVVwIiwibW92ZURvd24iLCJnZXRJY29uIiwiaWNvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImljb25DbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiZ2V0RmllbGRzZXQiLCJ0ZXh0Q29udGVudCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZSIsInByb3BlcnRpZXNDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImJ1dHRvbiIsInRleHQiLCJnZXRBcnJheUJ0bkFkZCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZCIsImFueU9mRXJyb3JzTWVzc2FnZXMiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2NvbnN0Iiwic2NoZW1hQ29uc3QiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJfZW51bSIsInNvbWUiLCJfaWYiLCJzY2hlbWFJZiIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwibm90RXJyb3JzIiwicmVwbGFjZVRleHQiLCJuZXdNZXNzYWdlcyIsIm5vdE5vdEVycm9ycyIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsIl9udWxsIiwidmFsdWVUeXBlIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2FnZXMiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFj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QUksQ0FBQyxJQUFJLENBQUMwZCxLQUFLLENBQUMsQ0FBQ25sQixPQUFPLENBQUMsVUFBQzRsQixTQUFTLEVBQUs7UUFDN0MsSUFBSTlhLDZEQUFNLENBQUMwTixXQUFXLEVBQUVvTixTQUFTLENBQUMsRUFBRTtVQUNsQyxJQUFNM04sU0FBUyxHQUFHOVosS0FBSSxDQUFDZ25CLEtBQUssQ0FBQ1MsU0FBUyxDQUFDO1VBQ3ZDLElBQU1DLGVBQWUsR0FBRzVOLFNBQVMsQ0FBQzlaLEtBQUksRUFBRVIsS0FBSyxFQUFFeUIsTUFBTSxFQUFFMUIsR0FBRyxFQUFFcUUsSUFBSSxDQUFDO1VBRWpFLElBQUk4akIsZUFBZSxFQUFFO1lBQ25CSCxZQUFZLE1BQUFuVCxNQUFBLENBQUE1QywrRUFBQSxDQUFPK1YsWUFBWSxHQUFBL1YsK0VBQUEsQ0FBS2tXLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUgsWUFBWSxDQUFDbG5CLE1BQU0sR0FBRyxDQUFDLElBQUltbkIscUJBQXFCLEVBQUU7UUFDcERELFlBQVksR0FBRyxDQUNiO1VBQ0U5ZSxRQUFRLEVBQUUrZSxxQkFBcUI7VUFDL0I1akIsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBTzJqQixZQUFZO0lBQ3JCO0VBQUM7RUFBQSxPQUFBeEssU0FBQTtBQUFBO0FBR1lBLHdFQUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4vYXJyYXknXG5pbXBvcnQgeyBjbGFtcCwgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQXJyYXlcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXlOYXYgZXh0ZW5kcyBFZGl0b3JBcnJheSB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aFxuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLmNvbHMgfHwgM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Jykuc3RhY2tlZCxcbiAgICAgIHR5cGU6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLnR5cGVcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG4gICAgICBjb25zdCBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdpdGVtVGVtcGxhdGUnKVxuXG4gICAgICBpZiAoc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaTA6IGluZGV4LFxuICAgICAgICAgIGkxOiAoaW5kZXggKyAxKSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkVGl0bGUgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgY2hpbGRUaXRsZSA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlICsgJyAnICsgKGluZGV4ICsgMSkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgfVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBjbGFtcCgoaW5kZXggLSAxKSwgMCwgKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4IC0gMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4ICsgMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICB0aXRsZTogY2hpbGRUaXRsZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSlcblxuICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgfSlcblxuICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcbiAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBtb3ZlVXBCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkgPT09IGluZGV4KSB7XG4gICAgICAgIG1vdmVEb3duQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hTWF4SXRlbXMsXG4gIGdldFNjaGVtYU1pbkl0ZW1zLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXkgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuXG4gICAgY29uc3QgbWF4SXRlbXMgPSBnZXRTY2hlbWFNYXhJdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBtaW5JdGVtcyA9IGdldFNjaGVtYU1pbkl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KG1heEl0ZW1zKSAmJiBtYXhJdGVtcyA9PT0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2V0KG1pbkl0ZW1zKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA8PSBtaW5JdGVtcykge1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlcbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW4gZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnbHlwaGljb25zLCBib290c3RyYXBJY29ucywgZm9udEF3ZXNvbWUzLCBmb250QXdlc29tZTQsIGZvbnRBd2Vzb21lNSwgZm9udEF3ZXNvbWU2IH0gZnJvbSAnLi4vdGhlbWVzL2ljb25zL2ljb25zJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lcy90aGVtZSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBJbnN0YW5jZSBiZWluZyBjb250cm9sbGVkIGJ5IHRoaXMgZWRpdG9yLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBidWlsZCB0aGUgRWRpdG9yIHVzZXIgaW50ZXJmYWNlLlxuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBpbnRlcmZhY2UgaHRtbCBmb3IgdGhpcyBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlZCBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIFJlYWQgb25seSBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJlYWRPbmx5ID0gdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KClcblxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5jb2VyY2VWYWx1ZSgpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIGxldCBpY29ucyA9IG51bGxcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSkge1xuICAgICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSB7XG4gICAgICAgIGNhc2UgJ2dseXBoaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gZ2x5cGhpY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Jvb3RzdHJhcC1pY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBib290c3RyYXBJY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lMyc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTQnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU0XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU1JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNic6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTZcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMyhpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNChpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNShpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoaWNvbnMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkpXG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBlZGl0b3IgY29udHJvbCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBieSBtYWtpbmcgYXNzdW1wdGlvbnMgYmFzZWQgb24gY29uc3RyYWluc1xuICAgKi9cbiAgY29lcmNlVmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVudW0pICYmICFzY2hlbWFFbnVtLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkgJiYgaXNTZXQoc2NoZW1hRW51bVswXSkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoc2NoZW1hRW51bVswXSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdWkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgfVxuXG4gIHJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcblxuICAgIGludGVyYWN0aXZlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udGFpbmVyICYmIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTXVsdGlwbGUgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRNdWx0aXBsZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAvLyAgIGNvbnN0IG11bHRpcGxlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggPT09IHRoaXMucGF0aClcbiAgLy8gICBjb25zdCBhY3RpdmVJbnN0YW5jZUVycm9ycyA9IGVycm9ycy5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5wYXRoICE9PSB0aGlzLnBhdGgpXG4gIC8vICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMobXVsdGlwbGVFcnJvcnMpXG4gIC8vICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycyhhY3RpdmVJbnN0YW5jZUVycm9ycylcbiAgLy8gfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck11bHRpcGxlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdWxsIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdWxsXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JOdW1iZXJcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck51bWJlckVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JOdW1iZXJcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFGb3JtYXQsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXIgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdEdyaWQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0R3JpZCBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdjb2x1bW5zJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ25ld1JvdycpKSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0R3JpZFxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3ROYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0TmF2IGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcblxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgICAgdGl0bGU6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcblxuICAgICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgbGV0IGFkZFByb3BlcnR5ID0gdHJ1ZVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgYWRkUHJvcGVydHkgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbChnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSksXG4gICAgICBhZGRQcm9wZXJ0eTogYWRkUHJvcGVydHlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgICAgIGlmIChpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VkaXRhYmxlUHJvcGVydGllcycpXG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbChzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3Qgbm90UmVxdWlyZWQgPSAhaXNSZXF1aXJlZCAmJiAhaXNEZXBlbmRlbnRSZXF1aXJlZFxuXG4gICAgICAgIGlmIChub3RSZXF1aXJlZCkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0XG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ0VudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ0VudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdUZXh0YXJlYSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdUZXh0YXJlYSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdUZXh0YXJlYVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmcgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHNjaGVtYUZvcm1hdCkgPyBzY2hlbWFGb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IHNjaGVtYUZvcm1hdCA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ2NvbG9yJyAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGFuIEV2ZW50RW1pdHRlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbnQgdGhpcyBldmVudCBpcyBlbWl0dGVkXG4gICAqL1xuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIGVtaXR0ZWRcbiAgICovXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFTY2hlbWEgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLiRzY2hlbWEpID8gc2NoZW1hLiRzY2hlbWEgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT3B0aW9uIChzY2hlbWEsIG9wdGlvbikge1xuICByZXR1cm4gKHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5wYXR0ZXJuKSA/IHNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcmVmaXhJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5wcmVmaXhJdGVtcykgPyBzY2hlbWEucHJlZml4SXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnByb3BlcnRpZXMpID8gc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlYWRPbmx5IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEucmVhZE9ubHkpID8gc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldChzY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGhlbiAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbihzY2hlbWEudGhlbikpID8gc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRpdGxlIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS50aXRsZSkgPyBzY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVR5cGUgKHNjaGVtYSkge1xuICBpZiAoaXNTdHJpbmcoc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS50eXBlXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPbmVPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5vbmVPZikgPyBzY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNsb25lIG9mIGEgdGhpbmdcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gYmUgY2xvbmVkXG4gKiBAcmV0dXJuIHsqfSBUaGUgY2xvbmUgb2YgdGhlIHRoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAodGhpbmcpIHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHMgYnV0IG9ubHkgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdHMgaW4gYm90aHMgb2JqZWN0c1xuICogaWYgdGhleSBhcmUgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gdHlwZW9mIG9iajJba2V5XSkge1xuICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wIChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG51bWJlciwgbWF4KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgKGFycikge1xuICBjb25zdCB1bmlxdWVPYmplY3RzID0gW11cbiAgY29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFNldCgpXG5cbiAgZm9yIChjb25zdCBvYmogb2YgYXJyKSB7XG4gICAgY29uc3Qgb2JqU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIGlmICghdW5pcXVlVmFsdWVzLmhhcyhvYmpTdHJpbmcpKSB7XG4gICAgICB1bmlxdWVWYWx1ZXMuYWRkKG9ialN0cmluZylcbiAgICAgIHVuaXF1ZU9iamVjdHMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZU9iamVjdHNcbn1cbiIsIi8qKlxuICogU2ltcGxlIHRyYW5zbGF0aW9uIG1vZHVsZS5cbiAqIEBtb2R1bGUgaTE4blxuICovXG5cbi8qKlxuICogTG9jYWxlIG1lc3NhZ2VzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgaTE4biA9IHtcbiAgZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllczogJ2hhcyBhZGRpdGlvbmFsIHByb3BlcnR5IFwie3sgcHJvcGVydHkgfX1cIiBidXQgbm8gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBhbGxvd2VkJyxcbiAgZXJyb3JBbnlPZjogJ211c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICBlcnJvckNvbnN0OiAnbXVzdCBoYXZlIHZhbHVlIG9mOiB7eyBjb25zdCB9fScsXG4gIGVycm9yQ29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGl0ZW0gbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yRGVwZW5kZW50UmVxdWlyZWQ6ICdtdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IGRlcGVuZGVudFJlcXVpcmVkIH19JyxcbiAgZXJyb3JFbnVtOiAnbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiB7eyBlbnVtIH19JyxcbiAgZXJyb3JFeGNsdXNpdmVNYXhpbXVtOiAnbXVzdCBiZSBsZXNzIHRoYW4ge3sgZXhjbHVzaXZlTWF4aW11bSB9fScsXG4gIGVycm9yRXhjbHVzaXZlTWluaW11bTogJ211c3QgYmUgZ3JlYXRlciB0aGFuIHt7IGV4Y2x1c2l2ZU1pbmltdW0gfX0nLFxuICBlcnJvckZvcm1hdDogJ211c3QgYmUgYSB2YWxpZCB7eyBmb3JtYXQgfX0nLFxuICBlcnJvckl0ZW1zOiAnbXVzdCBoYXZlIGl0ZW1zIHRoYXQgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hJyxcbiAgZXJyb3JNYXhpbXVtOiAnbXVzdCBiZSBhdCBtb3N0IHt7IG1heGltdW0gfX0nLFxuICBlcnJvck1heEl0ZW1zOiAnbXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4SXRlbXMgfX0gaXRlbXMnLFxuICBlcnJvck1heExlbmd0aDogJ211c3QgYmUgYXQgbW9zdCB7eyBtYXhMZW5ndGggfX0gY2hhcmFjdGVycyBsb25nJyxcbiAgZXJyb3JNYXhQcm9wZXJ0aWVzOiAnbXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4UHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzJyxcbiAgZXJyb3JNYXhDb250YWluczogJ211c3QgY29udGFpbiBhdCBtb3N0IHt7IG1heENvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19JyxcbiAgZXJyb3JNaW5Db250YWluczogJ211c3QgY29udGFpbiBhdCBsZWFzdCB7eyBtaW5Db250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fScsXG4gIGVycm9yTWluaW11bTogJ211c3QgYmUgYXQgbGVhc3Qge3sgbWluaW11bSB9fScsXG4gIGVycm9yTWluSXRlbXM6ICdtdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluSXRlbXMgfX0gaXRlbXMnLFxuICBlcnJvck1pbkxlbmd0aDogJ211c3QgYmUgYXQgbGVhc3Qge3sgbWluTGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZycsXG4gIGVycm9yTWluUHJvcGVydGllczogJ211c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5Qcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMnLFxuICBlcnJvck11bHRpcGxlT2Y6ICdtdXN0IGJlIG11bHRpcGxlIG9mIHt7IG11bHRpcGxlT2YgfX0nLFxuICBlcnJvck5vdDogJ211c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yT25lT2Y6ICdtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCB7eyBjb3VudGVyIH19IG9mIHRoZSBzY2hlbWFzJyxcbiAgZXJyb3JQYXR0ZXJuOiAnbXVzdCBtYXRjaCB0aGUgcGF0dGVybjogXCJ7eyBwYXR0ZXJuIH19XCInLFxuICBlcnJvclByZWZpeEl0ZW1zOiAnSXRlbSB7eyBpbmRleCB9fSBmYWlscyB2YWxpZGF0aW9uJyxcbiAgZXJyb3JSZXF1aXJlZDogJ211c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgcmVxdWlyZWQgfX0nLFxuICBlcnJvclR5cGU6ICdtdXN0IGJlIG9mIHR5cGUge3sgdHlwZSB9fScsXG4gIGVycm9yVW5pcXVlSXRlbXM6ICdtdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJ1xufVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBpc1NldCwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgRWRpdG9yQXJyYXlOYXYgZnJvbSAnLi4vZWRpdG9ycy9hcnJheS1uYXYnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcywgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQXJyYXkgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JyAmJiBzY2hlbWFGb3JtYXQgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXkodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgY29uc3Qgc2NoZW1hSXRlbXMgPSBnZXRTY2hlbWFJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQXJyYXlcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQm9vbGVhbiBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWFGb3JtYXQgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUJvb2xlYW5cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVmYXVsdCwgZ2V0U2NoZW1hUmVhZE9ubHksIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSlNPTiBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEplZGkgaW5zdGFuY2UgdG8gd2hpY2ggdGhpcyBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqIEB0eXBlIHtKZWRpfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcblxuICAgIC8qKlxuICAgICAqIEEgSlNPTiBzY2hlbWEuXG4gICAgICogQHR5cGUge2Jvb2xlYW58b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG5cbiAgICAvKipcbiAgICAgKiBUaGUganNvbiB2YWx1ZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IGlzU2V0KGNvbmZpZy52YWx1ZSkgPyBjb25maWcudmFsdWUgOiB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgc3RhdGUgb2YgdGhpcyBpbnN0YW5jZS4gSWYgZmFsc2UgdGhlIGVkaXRvciBpcyBub3QgcGFydGljaXBhdGluZ1xuICAgICAqIHRvIHRoZSB2YWx1ZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NoZW1hIHBhdGggb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgdGhpcy5qZWRpLnJvb3ROYW1lXG5cbiAgICAvKipcbiAgICAgKiBUaGUgUGFyZW50IGluc3RhbmNlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuXG4gICAgLyoqXG4gICAgICogQ2hpbGQgaW5zdGFuY2VzIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIC8qKlxuICAgICAqIFRoZSBlZGl0b3IgY29udHJvbGxpbmcgdGhpcyBJbnN0YW5jZSBpZiBhbnlcbiAgICAgKiBAdHlwZSB7RWRpdG9yfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVpID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J3MgdHlwZVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBpZiAobm90U2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICBsZXQgdmFsdWVcbiAgICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVmYXVsdCA9IGdldFNjaGVtYURlZmF1bHQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRGVmYXVsdCkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoc2NoZW1hRGVmYXVsdCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcblxuICAgIHJldHVybiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBpbnN0YW5jZSBpcyByZWFkIG9ubHlcbiAgICovXG4gIGlzUmVhZE9ubHkgKCkge1xuICAgIGxldCByZWFkT25seSA9IGZhbHNlXG5cbiAgICBpZiAoZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5wYXJlbnQuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYUVsc2UsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaGVuLFxuICBnZXRTY2hlbWFUaXRsZSxcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTXVsdGlwbGUgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck11bHRpcGxlKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZ2V0U2NoZW1hSWYodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZSh0aGlzLnNjaGVtYSlcbiAgICAgIHRoaXMuaWYgPSBjbG9uZShnZXRTY2hlbWFJZih0aGlzLnNjaGVtYSkpXG4gICAgICBjb25zdCBzY2hlbWFUaGVuID0gY2xvbmUoZ2V0U2NoZW1hVGhlbih0aGlzLnNjaGVtYSkpXG4gICAgICBjb25zdCBzY2hlbWFFbHNlID0gY2xvbmUoZ2V0U2NoZW1hRWxzZSh0aGlzLnNjaGVtYSkpXG5cbiAgICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5pZlxuICAgICAgZGVsZXRlIHNjaGVtYUNsb25lLnRoZW5cbiAgICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5lbHNlXG5cbiAgICAgIGNvbnN0IHRoZW5TY2hlbWEgPSBzY2hlbWFUaGVuID8gbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSwgc2NoZW1hVGhlbikgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgY29uc3QgZWxzZVNjaGVtYSA9IHNjaGVtYUVsc2UgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCBzY2hlbWFFbHNlKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHRoZW5TY2hlbWEpXG4gICAgICB0aGlzLnNjaGVtYXMucHVzaChlbHNlU2NoZW1hKVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gWzAsIDFdXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFsndGhlbicsICdlbHNlJ11cbiAgICB9IGVsc2UgaWYgKGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgfHwgaXNTZXQoZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSA/IGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSA6IGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSBjbG9uZSh0aGlzLnNjaGVtYSlcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2xvbmVTY2hlbWEpXG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYVRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYVRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJykgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHNjaGVtYVR5cGUpKSB7XG4gICAgICBzY2hlbWFUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUodGhpcy5zY2hlbWEpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdhbnknIHx8ICFzY2hlbWFUeXBlKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdPYmplY3QnLCAnQXJyYXknLCAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgICAgdmFsdWU6IGNsb25lKHRoaXMudmFsdWUpXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy52YWx1ZSwgZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgodGhpcy52YWx1ZSkgOiB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKGluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpbmRleF1cblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHRoaXMudmFsdWUpIHx8IHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IGZhbHNlXG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSBpc1NldCh0aGlzLmlmKSA/IHRoaXMuZ2V0SWZJbmRleCh0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWFzc2lnblZhbHVlcyAoKSB7XG4gICAgY29uc3QgbGFzdEluc3RhbmNlVmFsdWUgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmxhc3RJbmRleF0uZ2V0VmFsdWUoKVxuICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZVZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNPYmplY3QobGFzdEluc3RhbmNlVmFsdWUpICYmIGlzT2JqZWN0KGN1cnJlbnRJbnN0YW5jZVZhbHVlKSkge1xuICAgICAgY29uc3QgbWVyZ2VkVmFsdWUgPSBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMoY3VycmVudEluc3RhbmNlVmFsdWUsIGxhc3RJbnN0YW5jZVZhbHVlKVxuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZShtZXJnZWRWYWx1ZSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLmlmLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaW5zdGFuY2UgdGhhdCBoYXMgbGVzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgKi9cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU11bHRpcGxlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdWxsIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdWxsIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdWxsKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdWxsXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVtYmVyIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHR5cGVJc051bWVyaWMgPSBzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcidcblxuICAgIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdW1iZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBpc09iamVjdCwgaGFzT3duLCBjbG9uZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgRWRpdG9yT2JqZWN0R3JpZCBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1ncmlkJ1xuaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBFZGl0b3JPYmplY3ROYXYgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtbmF2J1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQsXG4gIGdldFNjaGVtYUZvcm1hdCxcbiAgZ2V0U2NoZW1hUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUmVxdWlyZWQsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZU9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlT2JqZWN0IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3QodGhpcylcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JyAmJiBzY2hlbWFGb3JtYXQgPT09ICdncmlkJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3RHcmlkKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JyAmJiBzY2hlbWFGb3JtYXQgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdE5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHRoaXMuc2NoZW1hKVxuICAgIGlmIChpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSkge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hUHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYVByb3BlcnRpZXNba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3Qgc2NoZW1hUmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIHJldHVybiBpc1NldChzY2hlbWFSZXF1aXJlZCkgJiYgc2NoZW1hUmVxdWlyZWQuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZCh7fSwga2V5LCB2YWx1ZVtrZXldKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VPYmplY3RcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvclN0cmluZ1RleHRhcmVhIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLXRleHRhcmVhJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VTdHJpbmcgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hRm9ybWF0ID09PSAndGV4dGFyZWEnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ1RleHRhcmVhKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmcodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VTdHJpbmdcbiIsImltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEplZGkgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIEplZGkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gb3B0aW9ucy5zY2hlbWEgLSBBIEpTT04gc2NoZW1hXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5pc0VkaXRvciAtIEdlbmVyYXRlcyBVSSBjb250cm9scyB0byBlZGl0IHRoZSBKU09OIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb250YWluZXIgLSBXaGVyZSB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aGVtZSAtIEhvdyB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZSBhbmQgZGVyZWZlcmVuY2Ugc2NoZW1hIG9uIHRoZSBmbHkgaWYgbmVlZGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9uZU9mID0gZ2V0U2NoZW1hT25lT2YoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBbnlPZiA9IGdldFNjaGVtYUFueU9mKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hQW55T2YpIHx8IGlzU2V0KHNjaGVtYU9uZU9mKSB8fCBzY2hlbWFUeXBlID09PSAnYW55JyB8fCBpc0FycmF5KHNjaGVtYVR5cGUpIHx8IG5vdFNldChzY2hlbWFUeXBlKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU11bHRpcGxlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VPYmplY3QoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQXJyYXkoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZVN0cmluZyhjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bWJlcihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUJvb2xlYW4oY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdWxsKGNvbmZpZylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLmdldEVycm9ycygpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJlZlBhcnNlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAobm90U2V0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgN1xuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgLy8gcmVnaXN0ZXIgZGVmaW5pdGlvbnMgYXMgbG9uZyBhcyB0aGV5IGFyZSBub3QgcmVmZXJlbmNlc1xuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmIChhcmdzLmtleSAhPT0gJyRyZWYnKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBkZXJlZmVyZW5jZVxuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoYXJncy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlZk93bmVyID0gYXJncy5wcmV2VmFsdWVcbiAgICAgICAgICBjb25zdCByZWYgPSBhcmdzLnZhbHVlWyckcmVmJ11cblxuICAgICAgICAgIGlmIChpc1NldChyZWZPd25lcikgJiYgaXNTZXQocmVmKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaXJjdWxhclBhdGgoYXJncy5wYXRoKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2lyY3VsYXInLCBhcmdzLnBhdGgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZPd25lclthcmdzLmtleV0gPSB0aGlzLmRlZmluZShyZWYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGlzQ2lyY3VsYXJQYXRoIChwYXRoKSB7XG4gICAgbGV0IG91dHB1dCA9IGZhbHNlXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmluaXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vIHJlbW92ZSAjXG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSlcblxuICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChwYXRoLmxlbmd0aCAvIDIpXG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSBwYXRoLnNsaWNlKDAsIGhhbGYpXG4gICAgICBjb25zdCBzZWNvbmRIYWxmID0gcGF0aC5zbGljZShoYWxmKVxuXG4gICAgICBpZiAoZXF1YWwoZmlyc3RIYWxmLCBzZWNvbmRIYWxmKSkge1xuICAgICAgICBvdXRwdXQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgLy8gZGVmaW5pdGlvbnNcbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmaW5pdGlvbnNbcmVmXSkpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMuZGVmaW5pdGlvbnNbcmVmXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcmVmLCBmYWxzZSkgLy8gYGZhbHNlYCBtYWtlcyB0aGUgcmVxdWVzdCBzeW5jaHJvbm91c1xuICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FuIG5vdCBsb2FkJywgcmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHRyYXZlcnNlIChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnZhbHVlXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmNhbGxiYWNrXG4gICAgY29uc3QgcGF0aCA9IGlzU2V0KGFyZ3MucGF0aCkgPyBhcmdzLnBhdGggKyAnLycgKyBhcmdzLmtleSA6ICcjJ1xuICAgIGFyZ3MucGF0aCA9IHBhdGhcblxuICAgIGlmIChpc1NldChjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDMgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDMgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaGVhZGVyID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtc3RhY2tlZCcpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29sdW1uQ2xhc3MgKHNpemUsIGNvbHMpIHtcbiAgICByZXR1cm4gJ2NvbC0nICsgc2l6ZSArICctJyArIGNvbHNcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtZW5kJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiLyoqXG4gKiBMaXN0cyBvZiBodG1sIGNsYXNzZXMgdXNlZCBmb3IgaWNvbnMuXG4gKiBAbW9kdWxlIGljb25zXG4gKi9cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGdseXBoaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBnbHlwaGljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaCcsXG4gIGFkZDogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gIG1vdmVVcDogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGJvb3RzdHJhcC1pY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJvb3RzdHJhcEljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnYmkgYmktY2FyZC1saXN0JyxcbiAgZGVsZXRlOiAnYmkgYmktdHJhc2gyJyxcbiAgYWRkOiAnYmkgYmktcGx1cycsXG4gIG1vdmVVcDogJ2JpIGJpLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdiaSBiaS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWUzIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWUzID0ge1xuICBwcm9wZXJ0aWVzOiAnaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnaWNvbi10cmFzaCcsXG4gIGFkZDogJ2ljb24tcGx1cycsXG4gIG1vdmVVcDogJ2ljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNCBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNCA9IHtcbiAgcHJvcGVydGllczogJ2ZhIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYSBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYSBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNSBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNSA9IHtcbiAgcHJvcGVydGllczogJ2ZhcyBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmFzIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmFzIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYXMgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhcyBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU2IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU2ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEtc29saWQgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhLXNvbGlkIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEtc29saWQgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhLXNvbGlkIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYS1zb2xpZCBmYS1hcnJvdy1kb3duJ1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IgKGljb25zID0gbnVsbCkge1xuICAgIHRoaXMuaWNvbnMgPSBpY29uc1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdHMgc29tZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0IChuYW1lKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGljb24gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SWNvbiAobmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBpY29uQ2xhc3NlcyA9IHRoaXMuaWNvbnNbbmFtZV0uc3BsaXQoJyAnKVxuXG4gICAgaWYgKGljb25DbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGljb25DbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBkaXYgdXNlZCB0byB3cmFwIHRoZSBlZGl0b3IgVUkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgZmllbGRzZXQgZWxlbWVudC5cbiAgICogVXNlZCB0byB3cmFwIGNoaWxkcmVuIHNsb3QgYW5kIHByb3ZpZGUgbW9yZSBzZW1hbnRpYyBodG1sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIGNvbXBsZXggZWRpdG9ycyBsaWtlIGFycmF5cywgb2JqZWN0cyBhbmQgbXVsdGlwbGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIExlZ2VuZCBlbGVtZW50IHVzZWQgaW4gZmllbGRzZXRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgLyoqXG4gICAqIEhlYWRlciBmb3IgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZyA9IHt9KSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG4gICAgaWYgKGNvbmZpZy50ZXh0Q29udGVudCkge1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0aXRsZSlcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICByZXR1cm4gaGVhZGVyXG4gIH1cblxuICAvKipcbiAgICogQSBib2R5IGZvciB0aGUgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYXJyYXkgc3BlY2lmaWMgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGNoaWxkIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlcnJvciBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBPYmplY3RFZGl0b3IgcHJvcGVydGllcyB3cmFwcGVyIHZpc2liaWxpdHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlRWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAodGhpcy5pY29ucyAmJiBjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ3Byb3BlcnRpZXMnLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcjogcHJvcGVydGllc0NvbnRhaW5lclxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBUZXh0YXJlYVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSByYWRpbyBncm91cCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcubGFiZWxcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBzZWxlY3QgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVhbHMgYSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRpdGlvbmFsUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpID8gc2NoZW1hUHJvcGVydGllcyA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBbGxPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgYWxsT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYW55T2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFueU9mKSkge1xuICAgIGxldCB2YWxpZCA9IGZhbHNlXG4gICAgbGV0IGFueU9mRXJyb3JzTWVzc2FnZXMgPSBbXVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVycm9yc01lc3NhZ2VzID0gWy4uLmFueU9mRXJyb3JzTWVzc2FnZXMsIC4uLmFueU9mRXJyb3JzXVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcblxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYW55T2ZFcnJvcnNNZXNzYWdlc11cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50LCBjb21waWxlVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29uc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb25zdCA9IGdldFNjaGVtYUNvbnN0KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYUNvbnN0KVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQ29uc3QsIHtcbiAgICAgICAgICAgIGNvbnN0OiBKU09OLnN0cmluZ2lmeShzY2hlbWFDb25zdClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogY29udGFpbnMsIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KG1pbkNvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBtaW5Db250YWlucylcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluQ29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWluQ29udGFpbnM6IG1pbkNvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChtYXhDb250YWlucykpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gbWF4Q29udGFpbnMpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heENvbnRhaW5zLCB7XG4gICAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIG1heENvbnRhaW5zOiBtYXhDb250YWluc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRGVwZW5kZW50UmVxdWlyZWQsIHtcbiAgICAgICAgICAgIGRlcGVuZGVudFJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFNjaGVtYXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChkZXBlbmRlbnRTY2hlbWFzKSkge1xuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFNjaGVtYXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IGRlcGVuZGVudFNjaGVtYXNba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFbnVtLCB7XG4gICAgICAgICAgICBlbnVtOiBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBmb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2lmICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hSWYsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWFUaGVuKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFUaGVuLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYUVsc2UsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFOb3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG5vdCA9IGdldFNjaGVtYU5vdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG5vdCkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBub3QsIGtleSwgcGF0aClcbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VUZXh0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gaXRlbS5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiBtZXNzYWdlLnJlcGxhY2UoJ211c3QnLCAnbXVzdCBOT1QnKSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IG5ld01lc3NhZ2VzLFxuICAgICAgICAgICAgcGF0aDogaXRlbS5wYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub3ROb3RFcnJvcnMgPSB2YWxpZGF0b3IuZ2V0RXJyb3JzKHVuZGVmaW5lZCwgbm90LCBrZXksIHBhdGgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5ub3ROb3RFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZXBsYWNlVGV4dChlcnJvcnMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT25lT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25lT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChvbmVPZikpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIG9uZU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JPbmVPZiwge1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlclxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVybiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwYXR0ZXJuID0gZ2V0U2NoZW1hUGF0dGVybihzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChwYXR0ZXJuKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclBhdHRlcm4sIHtcbiAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gYXR0ZXJuUHJvcGVydGllc1xuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHByZWZpeEl0ZW1zKSkge1xuICAgIHByZWZpeEl0ZW1zLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJlZml4SXRlbXMsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZChzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChyZXF1aXJlZCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JSZXF1aXJlZCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7XG4gIGNvbXBpbGVUZW1wbGF0ZSwgZ2V0VHlwZSxcbiAgaXNBcnJheSxcbiAgaXNCb29sZWFuLFxuICBpc0ludGVnZXIsXG4gIGlzTnVsbCxcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdHlwZSA9IGdldFNjaGVtYVR5cGUoc2NoZW1hKVxuXG4gIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldCh0eXBlKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHZhbGlkID0gdHlwZS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yVHlwZSwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZ2V0VHlwZSh2YWx1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFVbmlxdWVJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdW5pcXVlSXRlbXMgPSBnZXRTY2hlbWFVbmlxdWVJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1bmlxdWVJdGVtcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yVW5pcXVlSXRlbXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQwNCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNCdcbmltcG9ydCBkcmFmdDA2IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA2J1xuaW1wb3J0IGRyYWZ0MDcgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDcnXG5pbXBvcnQgZHJhZnQyMDE5MDkgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAxOS0wOSdcbmltcG9ydCBkcmFmdDIwMjAxMiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnQyMDIwMTJcblxuICAgIHRoaXMuanNvblNjaGVtYURyYWZ0cyA9IHtcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnOiBkcmFmdDA0LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDYvc2NoZW1hIyc6IGRyYWZ0MDYsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJzogZHJhZnQwNyxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDE5LTA5L3NjaGVtYSc6IGRyYWZ0MjAxOTA5LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMjAtMTIvc2NoZW1hJzogZHJhZnQyMDIwMTJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cbiAgICBjb25zdCBzY2hlbWFPcHRpb25zTWVzc2FnZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnbWVzc2FnZXMnKVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZShzY2hlbWEpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2VzOiBzY2hlbWFPcHRpb25zTWVzc2FnZXMgfHwgWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYU9wdGlvbnNNZXNzYWdlcykge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZXM6IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9