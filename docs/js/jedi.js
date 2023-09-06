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
      console.log(this.instance.path);
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
/*! exports provided: getCircularReplacer, clone, escapeRegExp, replaceAll, pathToAttribute, hasOwn, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep, overwriteExistingProperties, getValueByJSONPath, compileTemplate, clamp, removeDuplicatesFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCircularReplacer", function() { return getCircularReplacer; });
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

function getCircularReplacer() {
  var ancestors = [];
  return function (key, value) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value) !== 'object' || value === null) {
      return value;
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return '[Circular]';
    }
    ancestors.push(value);
    return value;
  };
}

/**
 * Returns a clone of a thing
 * @param {*} thing - The thing to be cloned
 * @return {*} The clone of the thing
 */
function clone(thing) {
  if (typeof thing === 'undefined') {
    return undefined;
  }
  return JSON.parse(JSON.stringify(thing, getCircularReplacer()));
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

      /* if (isSet(getSchemaIf(this.schema))) {
        const schemaClone = clone(this.schema)
        this.if = clone(getSchemaIf(this.schema))
        const schemaThen = clone(getSchemaThen(this.schema))
        const schemaElse = clone(getSchemaElse(this.schema))
         delete schemaClone.if
        delete schemaClone.then
        delete schemaClone.else
         const thenSchema = schemaThen ? mergeDeep({}, schemaClone, schemaThen) : mergeDeep({}, schemaClone)
        const elseSchema = schemaElse ? mergeDeep({}, schemaClone, schemaElse) : mergeDeep({}, schemaClone)
         this.schemas.push(thenSchema)
        this.schemas.push(elseSchema)
         this.switcherOptionValues = [0, 1]
        this.switcherOptionsLabels = ['then', 'else']
      } else */
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema)) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOneOf"])(this.schema))) {
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
        var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["clone"])(this.schema);
        this.schemas = [_objectSpread(_objectSpread({}, schemaClone), {
          type: 'object'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'array'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'string'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'number'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'integer'
        }), _objectSpread(_objectSpread({}, schemaClone), {
          type: 'boolean'
        }), _objectSpread(_objectSpread({}, schemaClone), {
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
      var deactivateNonRequired = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaOption"])(this.schema, 'deactivateNonRequired');
      if (this.isNotRequired(key) && deactivateNonRequired === true) {
        instance.deactivate();
      }
      return instance;
    }
  }, {
    key: "isNotRequired",
    value: function isNotRequired(property) {
      return !this.isRequired(property) && !this.isDependentRequired(property);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2kxOG4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yQXJyYXlOYXYiLCJfRWRpdG9yQXJyYXkiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiYWN0aXZlVGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiY29udHJvbCIsImFkZEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0YW5jZSIsImxlbmd0aCIsImFkZEl0ZW0iLCJyZWZyZXNoVUkiLCJfdGhpczIiLCJyZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImdldFNjaGVtYU9wdGlvbiIsInNjaGVtYSIsInRhYkxpc3RDb2wiLCJnZXRDb2wiLCJ0YWJDb250ZW50Q29sIiwidGFiQ29udGVudCIsImdldFRhYkNvbnRlbnQiLCJ0YWJMaXN0IiwiZ2V0VGFiTGlzdCIsInN0YWNrZWQiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImluZGV4IiwiZGVsZXRlQnRuIiwiZ2V0RGVsZXRlSXRlbUJ0biIsIm1vdmVVcEJ0biIsImdldE1vdmVVcEl0ZW1CdG4iLCJtb3ZlRG93bkJ0biIsImdldE1vdmVEb3duSXRlbUJ0biIsInVpIiwiYXJyYXlBY3Rpb25zIiwiY29udGFpbmVyIiwiY2hpbGRUaXRsZSIsInNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSIsInRlbXBsYXRlIiwiZGF0YSIsImkwIiwiaTEiLCJnZXRWYWx1ZSIsImNvbXBpbGVUZW1wbGF0ZSIsInNjaGVtYVRpdGxlIiwiZ2V0U2NoZW1hVGl0bGUiLCJpc1NldCIsImdldEtleSIsImNsYW1wIiwiZGVsZXRlSXRlbSIsInRvSW5kZXgiLCJtb3ZlIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwidGFiIiwiZ2V0VGFiIiwidGl0bGUiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImlzUmVhZE9ubHkiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2V0QXR0cmlidXRlIiwiRWRpdG9yQXJyYXkiLCJfRWRpdG9yIiwiYnVpbGQiLCJnZXRBcnJheUNvbnRyb2wiLCJzck9ubHkiLCJkZXNjcmlwdGlvbiIsImdldFNjaGVtYURlc2NyaXB0aW9uIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwibWVzc2FnZSIsImdldEFsZXJ0Iiwic2FuaXRpemUiLCJpc0FycmF5IiwibWF4SXRlbXMiLCJnZXRTY2hlbWFNYXhJdGVtcyIsIm1pbkl0ZW1zIiwiZ2V0U2NoZW1hTWluSXRlbXMiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJzcGxpdCIsImplZGkiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwiRWRpdG9yIiwiRWRpdG9yQm9vbGVhbkVudW1SYWRpbyIsIl9FZGl0b3JCb29sZWFuIiwiZ2V0UmFkaW9zQ29udHJvbCIsInZhbHVlcyIsInRpdGxlcyIsImxhYmVsIiwicmFkaW9zIiwicmFkaW8iLCJyYWRpb1ZhbHVlIiwic2V0VmFsdWUiLCJjaGVja2VkIiwiRWRpdG9yQm9vbGVhbiIsIkVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IiwiZ2V0U2VsZWN0Q29udHJvbCIsImlucHV0IiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiQm9vbGVhbiIsIl9FdmVudEVtaXR0ZXIiLCJyZWFkT25seSIsImNvZXJjZVZhbHVlIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhbHdheXNTaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsImljb25zIiwiaWNvbkxpYiIsImdseXBoaWNvbnMiLCJib290c3RyYXBJY29ucyIsImZvbnRBd2Vzb21lMyIsImZvbnRBd2Vzb21lNCIsImZvbnRBd2Vzb21lNSIsImZvbnRBd2Vzb21lNiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lIiwiZ2V0U2NoZW1hVHlwZSIsInNjaGVtYUVudW0iLCJnZXRTY2hlbWFFbnVtIiwiaW5jbHVkZXMiLCJtZXNzYWdlcyIsImVycm9yIiwiaW52YWxpZEZlZWRiYWNrIiwiX3RoaXMzIiwiaW50ZXJhY3RpdmVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwiZGVzdHJveSIsIl90aGlzNCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk9iamVjdCIsImtleXMiLCJFdmVudEVtaXR0ZXIiLCJFZGl0b3JNdWx0aXBsZSIsImdldE11bHRpcGxlQ29udHJvbCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwic3dpdGNoZXIiLCJzd2l0Y2hJbnN0YW5jZSIsImFjdGl2ZUluc3RhbmNlIiwiRWRpdG9yTnVsbCIsImdldE51bGxDb250cm9sIiwiZ2V0U2NoZW1hRm9ybWF0IiwiRWRpdG9yTnVtYmVyRW51bVJhZGlvIiwiX0VkaXRvck51bWJlciIsIkVkaXRvck51bWJlciIsIkVkaXRvck51bWJlckVudW1TZWxlY3QiLCJnZXRJbnB1dENvbnRyb2wiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIkVkaXRvck9iamVjdEdyaWQiLCJfRWRpdG9yT2JqZWN0IiwicmVmcmVzaEVkaXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaXNBY3RpdmUiLCJjb2x1bW5zIiwib2Zmc2V0IiwiY29sIiwiRWRpdG9yT2JqZWN0IiwiRWRpdG9yT2JqZWN0TmF2IiwiYWRkUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0T2JqZWN0Q29udHJvbCIsImVkaXRhYmxlUHJvcGVydGllcyIsImVxdWFsIiwiYWRkUHJvcGVydHlCdG4iLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyIsInByb3BlcnRpZXNBY3RpdmF0b3JzIiwiaXNSZXF1aXJlZCIsImlzRGVwZW5kZW50UmVxdWlyZWQiLCJub3RSZXF1aXJlZCIsImNoZWNrYm94Q29udHJvbCIsImNoZWNrYm94IiwiaGFzT3duIiwiZGVhY3RpdmF0ZSIsIkVkaXRvclN0cmluZ0VudW1SYWRpbyIsIl9FZGl0b3JTdHJpbmciLCJFZGl0b3JTdHJpbmciLCJFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IiwiRWRpdG9yU3RyaW5nVGV4dGFyZWEiLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJTdHJpbmciLCJpbnB1dFR5cGVzIiwic2NoZW1hRm9ybWF0IiwiY29uc29sZSIsImxvZyIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJlbWl0IiwiZmlsdGVyIiwibGlzdGVuZXIiLCJnZXRTY2hlbWFTY2hlbWEiLCJpc1N0cmluZyIsIiRzY2hlbWEiLCJ1bmRlZmluZWQiLCJpc0Jvb2xlYW4iLCJnZXRTY2hlbWFBbGxPZiIsImFsbE9mIiwiZ2V0U2NoZW1hQW55T2YiLCJhbnlPZiIsImdldFNjaGVtYUNvbnN0IiwiZ2V0U2NoZW1hQ29udGFpbnMiLCJjb250YWlucyIsImdldFNjaGVtYURlZmF1bHQiLCJnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwiZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyIsImRlcGVuZGVudFNjaGVtYXMiLCJnZXRTY2hlbWFFbHNlIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsImdldFNjaGVtYUlmIiwiZ2V0U2NoZW1hSXRlbXMiLCJpdGVtcyIsImdldFNjaGVtYU1heGltdW0iLCJtYXhpbXVtIiwiZ2V0U2NoZW1hTWF4Q29udGFpbnMiLCJpc0ludGVnZXIiLCJtYXhDb250YWlucyIsImdldFNjaGVtYU1heExlbmd0aCIsIm1heExlbmd0aCIsImdldFNjaGVtYU1heFByb3BlcnRpZXMiLCJtYXhQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hTWluaW11bSIsIm1pbmltdW0iLCJnZXRTY2hlbWFNaW5Db250YWlucyIsIm1pbkNvbnRhaW5zIiwiZ2V0U2NoZW1hTWluTGVuZ3RoIiwibWluTGVuZ3RoIiwiZ2V0U2NoZW1hTWluUHJvcGVydGllcyIsIm1pblByb3BlcnRpZXMiLCJnZXRTY2hlbWFNdWx0aXBsZU9mIiwibXVsdGlwbGVPZiIsImdldFNjaGVtYU5vdCIsIm5vdCIsIm9wdGlvbiIsImdldFNjaGVtYVBhdHRlcm4iLCJwYXR0ZXJuIiwiZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJwYXR0ZXJuUHJvcGVydGllcyIsImdldFNjaGVtYVByZWZpeEl0ZW1zIiwicHJlZml4SXRlbXMiLCJnZXRTY2hlbWFQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImdldFNjaGVtYVJlYWRPbmx5IiwiZ2V0U2NoZW1hUmVxdWlyZWQiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsImdldFNjaGVtYVRoZW4iLCJ0aGVuIiwiZ2V0U2NoZW1hT25lT2YiLCJvbmVPZiIsImdldFNjaGVtYVVuaXF1ZUl0ZW1zIiwidW5pcXVlSXRlbXMiLCJnZXRDaXJjdWxhclJlcGxhY2VyIiwiYW5jZXN0b3JzIiwiX3R5cGVvZiIsImF0IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiZmluZCIsIlJlZ0V4cCIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInNvcnRPYmplY3QiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJub3RTZXQiLCJBcnJheSIsImdldFR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmNhdCIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsIm9iajEiLCJvYmoyIiwiZ2V0VmFsdWVCeUpTT05QYXRoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRlc3QiLCJwYXJzZUludCIsImVyciIsImUiLCJmIiwibWF0Y2giLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJyZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IiwiYXJyIiwidW5pcXVlT2JqZWN0cyIsInVuaXF1ZVZhbHVlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJvYmpTdHJpbmciLCJoYXMiLCJhZGQiLCJpMThuIiwiZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcyIsImVycm9yQW55T2YiLCJlcnJvckNvbnN0IiwiZXJyb3JDb250YWlucyIsImVycm9yRGVwZW5kZW50UmVxdWlyZWQiLCJlcnJvckVudW0iLCJlcnJvckV4Y2x1c2l2ZU1heGltdW0iLCJlcnJvckV4Y2x1c2l2ZU1pbmltdW0iLCJlcnJvckZvcm1hdCIsImVycm9ySXRlbXMiLCJlcnJvck1heGltdW0iLCJlcnJvck1heEl0ZW1zIiwiZXJyb3JNYXhMZW5ndGgiLCJlcnJvck1heFByb3BlcnRpZXMiLCJlcnJvck1heENvbnRhaW5zIiwiZXJyb3JNaW5Db250YWlucyIsImVycm9yTWluaW11bSIsImVycm9yTWluSXRlbXMiLCJlcnJvck1pbkxlbmd0aCIsImVycm9yTWluUHJvcGVydGllcyIsImVycm9yTXVsdGlwbGVPZiIsImVycm9yTm90IiwiZXJyb3JPbmVPZiIsImVycm9yUGF0dGVybiIsImVycm9yUHJlZml4SXRlbXMiLCJlcnJvclJlcXVpcmVkIiwiZXJyb3JUeXBlIiwiZXJyb3JVbmlxdWVJdGVtcyIsIkluc3RhbmNlQXJyYXkiLCJfSW5zdGFuY2UiLCJzZXRVSSIsInNjaGVtYVR5cGUiLCJwcmVwYXJlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsInNjaGVtYUl0ZW1zIiwic2NoZW1hUHJlZml4SXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkluc3RhbmNlQm9vbGVhbiIsImNvbmZpZyIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJzY2hlbWFEZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJ2YWxpZGF0b3IiLCJJbnN0YW5jZU11bHRpcGxlIiwiaW5zdGFuY2VzIiwiYWN0aXZlSW5zdGFuY2VDaGFuZ2VkIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIl9vYmplY3RTcHJlYWQiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImZpdHRlc3RJbmRleCIsImdldElmSW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJyZWFzc2lnblZhbHVlcyIsImxhc3RJbnN0YW5jZVZhbHVlIiwiY3VycmVudEluc3RhbmNlVmFsdWUiLCJtZXJnZWRWYWx1ZSIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImNoYW1waW9uRXJyb3JzIiwiaW5zdGFuY2VFcnJvcnMiLCJJbnN0YW5jZU51bGwiLCJJbnN0YW5jZU51bWJlciIsInR5cGVJc051bWVyaWMiLCJJbnN0YW5jZU9iamVjdCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZGVhY3RpdmF0ZU5vblJlcXVpcmVkIiwiaXNOb3RSZXF1aXJlZCIsImRlbGV0ZUNoaWxkIiwiaSIsImdldENoaWxkIiwib2xkVmFsdWUiLCJJbnN0YW5jZVN0cmluZyIsInJvb3QiLCJWYWxpZGF0b3IiLCJSZWZQYXJzZXIiLCJYTUxIdHRwUmVxdWVzdCIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJjbGFzc0xpc3QiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJkZWZpbmUiLCJzY2hlbWFPbmVPZiIsInNjaGVtYUFueU9mIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsImRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsIm91dHB1dCIsInN1YnN0cmluZyIsImhhbGYiLCJjZWlsIiwiZmlyc3RIYWxmIiwic2Vjb25kSGFsZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJfVGhlbWUiLCJ1c2VUb2dnbGVFdmVudHMiLCJnZXRMZWdlbmQiLCJsZWdlbmQiLCJoaWRlRWxlbWVudCIsImdldENhcmQiLCJjYXJkIiwiZ2V0Q2FyZEhlYWRlciIsImhlYWRlciIsImdldENhcmRCb2R5IiwiaHRtbCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEJ0bkdyb3VwIiwiZ2V0RGVzY3JpcHRpb24iLCJmaWVsZHNldCIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2xzIiwicmFkaW9Db250cm9sIiwiZm9ybUdyb3VwIiwibGFiZWxUZXh0IiwiZ2V0U3dpdGNoZXIiLCJyZW1vdmUiLCJ4cyIsIm1kIiwib2Zmc2V0TWQiLCJsaW5rIiwic2hvd0VsZW1lbnQiLCJnZXRDb2x1bW5DbGFzcyIsInNpemUiLCJnZXRDb250cm9sU2xvdCIsImNvbnRyb2xTbG90IiwibW92ZVVwIiwibW92ZURvd24iLCJnZXRJY29uIiwiaWNvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImljb25DbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiZ2V0RmllbGRzZXQiLCJ0ZXh0Q29udGVudCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZSIsInByb3BlcnRpZXNDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImJ1dHRvbiIsInRleHQiLCJnZXRBcnJheUJ0bkFkZCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZCIsImFueU9mRXJyb3JzTWVzc2FnZXMiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2NvbnN0Iiwic2NoZW1hQ29uc3QiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJfZW51bSIsInNvbWUiLCJfaWYiLCJzY2hlbWFJZiIsInNjaGVtYVRoZW4iLCJzY2hlbWFFbHNlIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJyZXBsYWNlVGV4dCIsIm5ld01lc3NhZ2VzIiwibm90Tm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsImF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3JFcnJvcnMiLCJpdGVtU2NoZW1hIiwidHlwZXMiLCJpbnRlZ2VyIiwiYm9vbGVhbiIsImFycmF5Iiwib2JqZWN0IiwiX251bGwiLCJ2YWx1ZVR5cGUiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiX2xvb3AiLCJpdGVtU3RyaW5naWZpZWQiLCJfcmV0IiwiZHJhZnQiLCJkcmFmdDIwMjAxMiIsImpzb25TY2hlbWFEcmFmdHMiLCJkcmFmdDA0IiwiZHJhZnQwNiIsImRyYWZ0MDciLCJkcmFmdDIwMTkwOSIsInNjaGVtYUVycm9ycyIsInNjaGVtYU9wdGlvbnNNZXNzYWdlcyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFF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QUU7UUFDbkQsT0FBTyxDQUFDO1VBQ05yUyxRQUFRLEVBQUVrZixxQkFBcUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztVQUM5Qy9qQixJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUFDO01BQ0o7TUFFQXlGLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQzZkLEtBQUssQ0FBQyxDQUFDdGxCLE9BQU8sQ0FBQyxVQUFDK2xCLFNBQVMsRUFBSztRQUM3QyxJQUFJamIsNkRBQU0sQ0FBQ21PLFdBQVcsRUFBRThNLFNBQVMsQ0FBQyxFQUFFO1VBQ2xDLElBQU16TixTQUFTLEdBQUduYSxLQUFJLENBQUNtbkIsS0FBSyxDQUFDUyxTQUFTLENBQUM7VUFDdkMsSUFBTUMsZUFBZSxHQUFHMU4sU0FBUyxDQUFDbmEsS0FBSSxFQUFFUixLQUFLLEVBQUV5QixNQUFNLEVBQUUxQixHQUFHLEVBQUVxRSxJQUFJLENBQUM7VUFFakUsSUFBSWlrQixlQUFlLEVBQUU7WUFDbkJILFlBQVksTUFBQWpULE1BQUEsQ0FBQS9DLCtFQUFBLENBQU9nVyxZQUFZLEdBQUFoVywrRUFBQSxDQUFLbVcsZUFBZSxFQUFDO1VBQ3REO1FBQ0Y7TUFDRixDQUFDLENBQUM7TUFFRixJQUFJSCxZQUFZLENBQUNybkIsTUFBTSxHQUFHLENBQUMsSUFBSXNuQixxQkFBcUIsRUFBRTtRQUNwREQsWUFBWSxHQUFHLENBQ2I7VUFDRWpmLFFBQVEsRUFBRWtmLHFCQUFxQjtVQUMvQi9qQixJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUNGO01BQ0g7TUFFQSxPQUFPOGpCLFlBQVk7SUFDckI7RUFBQztFQUFBLE9BQUF4SyxTQUFBO0FBQUE7QUFHWUEsd0VBQVMsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7IGNsYW1wLCBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXlOYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JBcnJheVxuICovXG5jbGFzcyBFZGl0b3JBcnJheU5hdiBleHRlbmRzIEVkaXRvckFycmF5IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoXG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgbGV0IGNoaWxkVGl0bGVcbiAgICAgIGNvbnN0IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2l0ZW1UZW1wbGF0ZScpXG5cbiAgICAgIGlmIChzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGVcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpMDogaW5kZXgsXG4gICAgICAgICAgaTE6IChpbmRleCArIDEpLFxuICAgICAgICAgIHZhbHVlOiBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRUaXRsZSA9IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgICBjaGlsZFRpdGxlID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgKyAnICcgKyAoaW5kZXggKyAxKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGNsYW1wKChpbmRleCAtIDEpLCAwLCAodGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggLSAxKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXggLSAxXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0b0luZGV4XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXggKyAxXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0b0luZGV4XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuXG4gICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgIHRpdGxlOiBjaGlsZFRpdGxlLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICB9KVxuXG4gICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIG1vdmVVcEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG5cbiAgICAgIGlmICgodGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggLSAxKSA9PT0gaW5kZXgpIHtcbiAgICAgICAgbW92ZURvd25CdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlOYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFNYXhJdGVtcyxcbiAgZ2V0U2NoZW1hTWluSXRlbXMsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JBcnJheSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG5cbiAgICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQobWF4SXRlbXMpICYmIG1heEl0ZW1zID09PSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb250cm9sLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZXQobWluSXRlbXMpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIDw9IG1pbkl0ZW1zKSB7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvckJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbiBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdseXBoaWNvbnMsIGJvb3RzdHJhcEljb25zLCBmb250QXdlc29tZTMsIGZvbnRBd2Vzb21lNCwgZm9udEF3ZXNvbWU1LCBmb250QXdlc29tZTYgfSBmcm9tICcuLi90aGVtZXMvaWNvbnMvaWNvbnMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vdGhlbWVzL3RoZW1lJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEluc3RhbmNlIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhpcyBlZGl0b3IuXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBFZGl0b3IgdXNlciBpbnRlcmZhY2UuXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGludGVyZmFjZSBodG1sIGZvciB0aGlzIGVkaXRvclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udHJvbCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVkIHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBvbmx5IHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVhZE9ubHkgPSB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKVxuXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLmNvZXJjZVZhbHVlKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgbGV0IGljb25zID0gbnVsbFxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpIHtcbiAgICAgICAgY2FzZSAnZ2x5cGhpY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBnbHlwaGljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYm9vdHN0cmFwLWljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGJvb3RzdHJhcEljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWUzJzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lM1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNCc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTUnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU1XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU2JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZShpY29ucylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb250YWluZXIgYXR0cmlidXRlcyBsaWtlIGRhdGEtcGF0aCBhbmQgZGF0YS10eXBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCBnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJ5IG1ha2luZyBhc3N1bXB0aW9ucyBiYXNlZCBvbiBjb25zdHJhaW5zXG4gICAqL1xuICBjb2VyY2VWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRW51bSkgJiYgIXNjaGVtYUVudW0uaW5jbHVkZXModGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSAmJiBpc1NldChzY2hlbWFFbnVtWzBdKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShzY2hlbWFFbnVtWzBdLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB1aSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JNdWx0aXBsZSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICAvLyBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gIC8vICAgY29uc3QgbXVsdGlwbGVFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IucGF0aCA9PT0gdGhpcy5wYXRoKVxuICAvLyAgIGNvbnN0IGFjdGl2ZUluc3RhbmNlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggIT09IHRoaXMucGF0aClcbiAgLy8gICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycyhtdWx0aXBsZUVycm9ycylcbiAgLy8gICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKGFjdGl2ZUluc3RhbmNlRXJyb3JzKVxuICAvLyB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bGwgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bGxcbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck51bWJlckVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYUZvcm1hdCxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0R3JpZCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3RHcmlkIGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ2NvbHVtbnMnKVxuICAgICAgICBjb25zdCBvZmZzZXQgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnb2Zmc2V0JykgfHwgMFxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29sdW1ucywgb2Zmc2V0KVxuXG4gICAgICAgIGlmIChnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnbmV3Um93JykpIHtcbiAgICAgICAgICByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RHcmlkXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdE5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3ROYXYgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5jb2xzIHx8IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLnN0YWNrZWQsXG4gICAgICB0eXBlOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS50eXBlXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3ROYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBsZXQgYWRkUHJvcGVydHkgPSB0cnVlXG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICBhZGRQcm9wZXJ0eSA9IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRPYmplY3RDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSxcbiAgICAgIGFkZFByb3BlcnR5OiBhZGRQcm9wZXJ0eVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IGtleS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHNjaGVtYSA9IHsgdHlwZTogJ2FueScgfVxuXG4gICAgICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICAgICAgaWYgKGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBub3RSZXF1aXJlZCA9ICFpc1JlcXVpcmVkICYmICFpc0RlcGVuZGVudFJlcXVpcmVkXG5cbiAgICAgICAgaWYgKG5vdFJlcXVpcmVkKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aCkgKyAnLWFjdGl2YXRvcidcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGxhYmVsOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNrYm94Q29udHJvbC5pbnB1dFxuXG4gICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5hcHBlbmRDaGlsZChjaGVja2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1SYWRpbyBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ1RleHRhcmVhIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ1RleHRhcmVhIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1RleHRhcmVhXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZyBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXMoc2NoZW1hRm9ybWF0KSA/IHNjaGVtYUZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAoc2NoZW1hRm9ybWF0ID09PSAnY29sb3InICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYW4gRXZlbnRFbWl0dGVyIGluc3RhbmNlLlxuICovXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVudCB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgZW1pdHRlZFxuICAgKi9cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVNjaGVtYSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuJHNjaGVtYSkgPyBzY2hlbWEuJHNjaGVtYSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWxsT2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYWxsT2YpID8gc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbnlPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbnlPZikgPyBzY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnN0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5jb25zdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29udGFpbnMgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHNjaGVtYS5jb250YWlucykpID8gc2NoZW1hLmNvbnRhaW5zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZWZhdWx0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5kZWZhdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKSA/IHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXNjcmlwdGlvbiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZGVzY3JpcHRpb24pID8gc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbHNlIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHNjaGVtYS5lbHNlKSkgPyBzY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRW51bSAoc2NoZW1hKSB7XG4gIGlmIChpc0FycmF5KHNjaGVtYS5lbnVtKSAmJiBzY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5lbnVtXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFGb3JtYXQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmZvcm1hdCkgPyBzY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJZiAoc2NoZW1hKSB7XG4gIGlmIChpc09iamVjdChzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgaWYgKGlzQm9vbGVhbihzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLml0ZW1zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLml0ZW1zKSA/IHNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWF4aW11bSkgPyBzY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4Q29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhDb250YWlucykgJiYgc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heENvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhJdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heEl0ZW1zKSAmJiBzY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4SXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heExlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heExlbmd0aCkgJiYgc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhMZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgIHJldHVybiBzY2hlbWEubWF4UHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWluaW11bSkgPyBzY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluQ29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Db250YWlucykgJiYgc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkNvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5JdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkl0ZW1zKSAmJiBzY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluSXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkxlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkxlbmd0aCkgJiYgc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5MZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pblByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiBzY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNdWx0aXBsZU9mIChzY2hlbWEpIHtcbiAgaWYgKGlzTnVtYmVyKHNjaGVtYS5tdWx0aXBsZU9mKSAmJiBzY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tdWx0aXBsZU9mXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFOb3QgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbihzY2hlbWEubm90KSkgPyBzY2hlbWEubm90IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPcHRpb24gKHNjaGVtYSwgb3B0aW9uKSB7XG4gIHJldHVybiAoc2NoZW1hLm9wdGlvbnMgJiYgc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyBzY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5pcXVlSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmlxdWVJdGVtcykgPyBzY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbn1cbiIsIi8qKlxuICogVXRpbHMuXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmN1bGFyUmVwbGFjZXIgKCkge1xuICBjb25zdCBhbmNlc3RvcnMgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLy8gYHRoaXNgIGlzIHRoZSBvYmplY3QgdGhhdCB2YWx1ZSBpcyBjb250YWluZWQgaW4sXG4gICAgLy8gaS5lLiwgaXRzIGRpcmVjdCBwYXJlbnQuXG4gICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggPiAwICYmIGFuY2VzdG9ycy5hdCgtMSkgIT09IHRoaXMpIHtcbiAgICAgIGFuY2VzdG9ycy5wb3AoKVxuICAgIH1cbiAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJ1xuICAgIH1cbiAgICBhbmNlc3RvcnMucHVzaCh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcsIGdldENpcmN1bGFyUmVwbGFjZXIoKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHMgYnV0IG9ubHkgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdHMgaW4gYm90aHMgb2JqZWN0c1xuICogaWYgdGhleSBhcmUgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gdHlwZW9mIG9iajJba2V5XSkge1xuICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wIChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG51bWJlciwgbWF4KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgKGFycikge1xuICBjb25zdCB1bmlxdWVPYmplY3RzID0gW11cbiAgY29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFNldCgpXG5cbiAgZm9yIChjb25zdCBvYmogb2YgYXJyKSB7XG4gICAgY29uc3Qgb2JqU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIGlmICghdW5pcXVlVmFsdWVzLmhhcyhvYmpTdHJpbmcpKSB7XG4gICAgICB1bmlxdWVWYWx1ZXMuYWRkKG9ialN0cmluZylcbiAgICAgIHVuaXF1ZU9iamVjdHMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZU9iamVjdHNcbn1cbiIsIi8qKlxuICogU2ltcGxlIHRyYW5zbGF0aW9uIG1vZHVsZS5cbiAqIEBtb2R1bGUgaTE4blxuICovXG5cbi8qKlxuICogTG9jYWxlIG1lc3NhZ2VzXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgaTE4biA9IHtcbiAgZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllczogJ2hhcyBhZGRpdGlvbmFsIHByb3BlcnR5IFwie3sgcHJvcGVydHkgfX1cIiBidXQgbm8gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBhbGxvd2VkJyxcbiAgZXJyb3JBbnlPZjogJ211c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICBlcnJvckNvbnN0OiAnbXVzdCBoYXZlIHZhbHVlIG9mOiB7eyBjb25zdCB9fScsXG4gIGVycm9yQ29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGl0ZW0gbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yRGVwZW5kZW50UmVxdWlyZWQ6ICdtdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IGRlcGVuZGVudFJlcXVpcmVkIH19JyxcbiAgZXJyb3JFbnVtOiAnbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiB7eyBlbnVtIH19JyxcbiAgZXJyb3JFeGNsdXNpdmVNYXhpbXVtOiAnbXVzdCBiZSBsZXNzIHRoYW4ge3sgZXhjbHVzaXZlTWF4aW11bSB9fScsXG4gIGVycm9yRXhjbHVzaXZlTWluaW11bTogJ211c3QgYmUgZ3JlYXRlciB0aGFuIHt7IGV4Y2x1c2l2ZU1pbmltdW0gfX0nLFxuICBlcnJvckZvcm1hdDogJ211c3QgYmUgYSB2YWxpZCB7eyBmb3JtYXQgfX0nLFxuICBlcnJvckl0ZW1zOiAnbXVzdCBoYXZlIGl0ZW1zIHRoYXQgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hJyxcbiAgZXJyb3JNYXhpbXVtOiAnbXVzdCBiZSBhdCBtb3N0IHt7IG1heGltdW0gfX0nLFxuICBlcnJvck1heEl0ZW1zOiAnbXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4SXRlbXMgfX0gaXRlbXMnLFxuICBlcnJvck1heExlbmd0aDogJ211c3QgYmUgYXQgbW9zdCB7eyBtYXhMZW5ndGggfX0gY2hhcmFjdGVycyBsb25nJyxcbiAgZXJyb3JNYXhQcm9wZXJ0aWVzOiAnbXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4UHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzJyxcbiAgZXJyb3JNYXhDb250YWluczogJ211c3QgY29udGFpbiBhdCBtb3N0IHt7IG1heENvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19JyxcbiAgZXJyb3JNaW5Db250YWluczogJ211c3QgY29udGFpbiBhdCBsZWFzdCB7eyBtaW5Db250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fScsXG4gIGVycm9yTWluaW11bTogJ211c3QgYmUgYXQgbGVhc3Qge3sgbWluaW11bSB9fScsXG4gIGVycm9yTWluSXRlbXM6ICdtdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluSXRlbXMgfX0gaXRlbXMnLFxuICBlcnJvck1pbkxlbmd0aDogJ211c3QgYmUgYXQgbGVhc3Qge3sgbWluTGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZycsXG4gIGVycm9yTWluUHJvcGVydGllczogJ211c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5Qcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMnLFxuICBlcnJvck11bHRpcGxlT2Y6ICdtdXN0IGJlIG11bHRpcGxlIG9mIHt7IG11bHRpcGxlT2YgfX0nLFxuICBlcnJvck5vdDogJ211c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yT25lT2Y6ICdtdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCB7eyBjb3VudGVyIH19IG9mIHRoZSBzY2hlbWFzJyxcbiAgZXJyb3JQYXR0ZXJuOiAnbXVzdCBtYXRjaCB0aGUgcGF0dGVybjogXCJ7eyBwYXR0ZXJuIH19XCInLFxuICBlcnJvclByZWZpeEl0ZW1zOiAnSXRlbSB7eyBpbmRleCB9fSBmYWlscyB2YWxpZGF0aW9uJyxcbiAgZXJyb3JSZXF1aXJlZDogJ211c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgcmVxdWlyZWQgfX0nLFxuICBlcnJvclR5cGU6ICdtdXN0IGJlIG9mIHR5cGUge3sgdHlwZSB9fScsXG4gIGVycm9yVW5pcXVlSXRlbXM6ICdtdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJ1xufVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBpc1NldCwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgRWRpdG9yQXJyYXlOYXYgZnJvbSAnLi4vZWRpdG9ycy9hcnJheS1uYXYnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcywgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQXJyYXkgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JyAmJiBzY2hlbWFGb3JtYXQgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXkodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgY29uc3Qgc2NoZW1hSXRlbXMgPSBnZXRTY2hlbWFJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQXJyYXlcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQm9vbGVhbiBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWFGb3JtYXQgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUJvb2xlYW5cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVmYXVsdCwgZ2V0U2NoZW1hUmVhZE9ubHksIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSlNPTiBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEplZGkgaW5zdGFuY2UgdG8gd2hpY2ggdGhpcyBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqIEB0eXBlIHtKZWRpfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcblxuICAgIC8qKlxuICAgICAqIEEgSlNPTiBzY2hlbWEuXG4gICAgICogQHR5cGUge2Jvb2xlYW58b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG5cbiAgICAvKipcbiAgICAgKiBUaGUganNvbiB2YWx1ZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9IGlzU2V0KGNvbmZpZy52YWx1ZSkgPyBjb25maWcudmFsdWUgOiB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgc3RhdGUgb2YgdGhpcyBpbnN0YW5jZS4gSWYgZmFsc2UgdGhlIGVkaXRvciBpcyBub3QgcGFydGljaXBhdGluZ1xuICAgICAqIHRvIHRoZSB2YWx1ZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NoZW1hIHBhdGggb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgdGhpcy5qZWRpLnJvb3ROYW1lXG5cbiAgICAvKipcbiAgICAgKiBUaGUgUGFyZW50IGluc3RhbmNlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuXG4gICAgLyoqXG4gICAgICogQ2hpbGQgaW5zdGFuY2VzIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge0luc3RhbmNlW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIC8qKlxuICAgICAqIFRoZSBlZGl0b3IgY29udHJvbGxpbmcgdGhpcyBJbnN0YW5jZSBpZiBhbnlcbiAgICAgKiBAdHlwZSB7RWRpdG9yfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnVpID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgcGFydCBvZiB0aGUgaW5zdGFuY2UgcGF0aFxuICAgKi9cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3Rlcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJhc2VkIG9uIGl0J3MgdHlwZVxuICAgKi9cbiAgc2V0SW5pdGlhbFZhbHVlICgpIHtcbiAgICBpZiAobm90U2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICBsZXQgdmFsdWVcbiAgICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVmYXVsdCA9IGdldFNjaGVtYURlZmF1bHQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRGVmYXVsdCkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoc2NoZW1hRGVmYXVsdCwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcblxuICAgIHJldHVybiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIGRhdGEgYmVmb3JlIGJ1aWxkaW5nIHRoZSBlZGl0b3JcbiAgICovXG4gIHByZXBhcmUgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBpbnN0YW5jZSBpcyByZWFkIG9ubHlcbiAgICovXG4gIGlzUmVhZE9ubHkgKCkge1xuICAgIGxldCByZWFkT25seSA9IGZhbHNlXG5cbiAgICBpZiAoZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5wYXJlbnQuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIC8vIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIC8vIGdldFNjaGVtYUVsc2UsXG4gIC8vIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICAvLyBnZXRTY2hlbWFUaGVuLFxuICBnZXRTY2hlbWFUaXRsZSxcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTXVsdGlwbGUgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck11bHRpcGxlKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICAvKiBpZiAoaXNTZXQoZ2V0U2NoZW1hSWYodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZSh0aGlzLnNjaGVtYSlcbiAgICAgIHRoaXMuaWYgPSBjbG9uZShnZXRTY2hlbWFJZih0aGlzLnNjaGVtYSkpXG4gICAgICBjb25zdCBzY2hlbWFUaGVuID0gY2xvbmUoZ2V0U2NoZW1hVGhlbih0aGlzLnNjaGVtYSkpXG4gICAgICBjb25zdCBzY2hlbWFFbHNlID0gY2xvbmUoZ2V0U2NoZW1hRWxzZSh0aGlzLnNjaGVtYSkpXG5cbiAgICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5pZlxuICAgICAgZGVsZXRlIHNjaGVtYUNsb25lLnRoZW5cbiAgICAgIGRlbGV0ZSBzY2hlbWFDbG9uZS5lbHNlXG5cbiAgICAgIGNvbnN0IHRoZW5TY2hlbWEgPSBzY2hlbWFUaGVuID8gbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSwgc2NoZW1hVGhlbikgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgY29uc3QgZWxzZVNjaGVtYSA9IHNjaGVtYUVsc2UgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCBzY2hlbWFFbHNlKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHRoZW5TY2hlbWEpXG4gICAgICB0aGlzLnNjaGVtYXMucHVzaChlbHNlU2NoZW1hKVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gWzAsIDFdXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFsndGhlbicsICdlbHNlJ11cbiAgICB9IGVsc2UgKi8gaWYgKGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgfHwgaXNTZXQoZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSA/IGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSA6IGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSBjbG9uZSh0aGlzLnNjaGVtYSlcbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnYW55T2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvbmVPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLmNsb25lU2NoZW1hLCAuLi5zY2hlbWEgfVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2xvbmVTY2hlbWEpXG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYVRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYVRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJykgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHNjaGVtYVR5cGUpKSB7XG4gICAgICBzY2hlbWFUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUodGhpcy5zY2hlbWEpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdhbnknIHx8ICFzY2hlbWFUeXBlKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMgPSBbXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ29iamVjdCcgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudWxsJyB9IH1cbiAgICAgIF1cblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXG4gICAgICAgICdPYmplY3QnLCAnQXJyYXknLCAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnTnVsbCdcbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgICAgdmFsdWU6IGNsb25lKHRoaXMudmFsdWUpXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy52YWx1ZSwgZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKVxuXG4gICAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB9KVxuXG4gICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgodGhpcy52YWx1ZSkgOiB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKGluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpbmRleF1cblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICB9XG5cbiAgb25TZXRWYWx1ZSAoKSB7XG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHRoaXMudmFsdWUpIHx8IHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IGZhbHNlXG4gICAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSBpc1NldCh0aGlzLmlmKSA/IHRoaXMuZ2V0SWZJbmRleCh0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWFzc2lnblZhbHVlcyAoKSB7XG4gICAgY29uc3QgbGFzdEluc3RhbmNlVmFsdWUgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmxhc3RJbmRleF0uZ2V0VmFsdWUoKVxuICAgIGNvbnN0IGN1cnJlbnRJbnN0YW5jZVZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNPYmplY3QobGFzdEluc3RhbmNlVmFsdWUpICYmIGlzT2JqZWN0KGN1cnJlbnRJbnN0YW5jZVZhbHVlKSkge1xuICAgICAgY29uc3QgbWVyZ2VkVmFsdWUgPSBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMoY3VycmVudEluc3RhbmNlVmFsdWUsIGxhc3RJbnN0YW5jZVZhbHVlKVxuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZShtZXJnZWRWYWx1ZSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLmlmLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaW5zdGFuY2UgdGhhdCBoYXMgbGVzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgKi9cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZUVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBpbnN0YW5jZS5zY2hlbWEsIGluc3RhbmNlLmdldEtleSgpLCBpbnN0YW5jZS5wYXRoKVxuXG4gICAgICBpZiAobm90U2V0KGZpdHRlc3RJbmRleCkgfHwgbm90U2V0KGNoYW1waW9uRXJyb3JzKSkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZUVycm9ycy5sZW5ndGggPCBjaGFtcGlvbkVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpdHRlc3RJbmRleFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU11bHRpcGxlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdWxsIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdWxsIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdWxsKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdWxsXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVtYmVyIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHR5cGVJc051bWVyaWMgPSBzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcidcblxuICAgIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdW1iZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBpc09iamVjdCwgaGFzT3duLCBjbG9uZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgRWRpdG9yT2JqZWN0R3JpZCBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1ncmlkJ1xuaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBFZGl0b3JPYmplY3ROYXYgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtbmF2J1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQsXG4gIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VPYmplY3QgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdCh0aGlzKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnICYmIHNjaGVtYUZvcm1hdCA9PT0gJ2dyaWQnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdEdyaWQodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnICYmIHNjaGVtYUZvcm1hdCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hUmVxdWlyZWQpICYmIHNjaGVtYVJlcXVpcmVkLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBpc05vdFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhdGhpcy5pc1JlcXVpcmVkKHByb3BlcnR5KSAmJiAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZCh7fSwga2V5LCB2YWx1ZVtrZXldKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VPYmplY3RcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvclN0cmluZ1RleHRhcmVhIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLXRleHRhcmVhJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VTdHJpbmcgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hRm9ybWF0ID09PSAndGV4dGFyZWEnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ1RleHRhcmVhKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmcodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VTdHJpbmdcbiIsImltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEplZGkgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIEplZGkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gb3B0aW9ucy5zY2hlbWEgLSBBIEpTT04gc2NoZW1hXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5pc0VkaXRvciAtIEdlbmVyYXRlcyBVSSBjb250cm9scyB0byBlZGl0IHRoZSBKU09OIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb250YWluZXIgLSBXaGVyZSB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aGVtZSAtIEhvdyB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZSBhbmQgZGVyZWZlcmVuY2Ugc2NoZW1hIG9uIHRoZSBmbHkgaWYgbmVlZGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyICYmIGhhc093bihjb25maWcuc2NoZW1hLCAnJHJlZicpKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVmaW5lKGNvbmZpZy5zY2hlbWFbJyRyZWYnXSlcbiAgICB9XG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9uZU9mID0gZ2V0U2NoZW1hT25lT2YoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBbnlPZiA9IGdldFNjaGVtYUFueU9mKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hQW55T2YpIHx8IGlzU2V0KHNjaGVtYU9uZU9mKSB8fCBzY2hlbWFUeXBlID09PSAnYW55JyB8fCBpc0FycmF5KHNjaGVtYVR5cGUpIHx8IG5vdFNldChzY2hlbWFUeXBlKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU11bHRpcGxlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VPYmplY3QoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQXJyYXkoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZVN0cmluZyhjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bWJlcihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUJvb2xlYW4oY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdWxsKGNvbmZpZylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLmdldEVycm9ycygpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJlZlBhcnNlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAobm90U2V0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgN1xuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgLy8gcmVnaXN0ZXIgZGVmaW5pdGlvbnMgYXMgbG9uZyBhcyB0aGV5IGFyZSBub3QgcmVmZXJlbmNlc1xuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmIChhcmdzLmtleSAhPT0gJyRyZWYnKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBkZXJlZmVyZW5jZVxuICAgICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICAgIGlmICghaXNPYmplY3QoYXJncy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlZk93bmVyID0gYXJncy5wcmV2VmFsdWVcbiAgICAgICAgICBjb25zdCByZWYgPSBhcmdzLnZhbHVlWyckcmVmJ11cblxuICAgICAgICAgIGlmIChpc1NldChyZWZPd25lcikgJiYgaXNTZXQocmVmKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaXJjdWxhclBhdGgoYXJncy5wYXRoKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2lyY3VsYXInLCBhcmdzLnBhdGgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWZPd25lclthcmdzLmtleV0gPSB0aGlzLmRlZmluZShyZWYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGlzQ2lyY3VsYXJQYXRoIChwYXRoKSB7XG4gICAgbGV0IG91dHB1dCA9IGZhbHNlXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmluaXRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vIHJlbW92ZSAjXG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSlcblxuICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChwYXRoLmxlbmd0aCAvIDIpXG4gICAgICBjb25zdCBmaXJzdEhhbGYgPSBwYXRoLnNsaWNlKDAsIGhhbGYpXG4gICAgICBjb25zdCBzZWNvbmRIYWxmID0gcGF0aC5zbGljZShoYWxmKVxuXG4gICAgICBpZiAoZXF1YWwoZmlyc3RIYWxmLCBzZWNvbmRIYWxmKSkge1xuICAgICAgICBvdXRwdXQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGRlZmluZSAocmVmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhyZWYpKSB7XG4gICAgICByZXR1cm4gcmVmXG4gICAgfVxuXG4gICAgLy8gZGVmaW5pdGlvbnNcbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuZGVmaW5pdGlvbnNbcmVmXSkpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMuZGVmaW5pdGlvbnNbcmVmXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcmVmLCBmYWxzZSkgLy8gYGZhbHNlYCBtYWtlcyB0aGUgcmVxdWVzdCBzeW5jaHJvbm91c1xuICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2FuIG5vdCBsb2FkJywgcmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHRyYXZlcnNlIChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnZhbHVlXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmNhbGxiYWNrXG4gICAgY29uc3QgcGF0aCA9IGlzU2V0KGFyZ3MucGF0aCkgPyBhcmdzLnBhdGggKyAnLycgKyBhcmdzLmtleSA6ICcjJ1xuICAgIGFyZ3MucGF0aCA9IHBhdGhcblxuICAgIGlmIChpc1NldChjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDMgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDMgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaGVhZGVyID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtc3RhY2tlZCcpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29sdW1uQ2xhc3MgKHNpemUsIGNvbHMpIHtcbiAgICByZXR1cm4gJ2NvbC0nICsgc2l6ZSArICctJyArIGNvbHNcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtZW5kJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiLyoqXG4gKiBMaXN0cyBvZiBodG1sIGNsYXNzZXMgdXNlZCBmb3IgaWNvbnMuXG4gKiBAbW9kdWxlIGljb25zXG4gKi9cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGdseXBoaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBnbHlwaGljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaCcsXG4gIGFkZDogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gIG1vdmVVcDogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGJvb3RzdHJhcC1pY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJvb3RzdHJhcEljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnYmkgYmktY2FyZC1saXN0JyxcbiAgZGVsZXRlOiAnYmkgYmktdHJhc2gyJyxcbiAgYWRkOiAnYmkgYmktcGx1cycsXG4gIG1vdmVVcDogJ2JpIGJpLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdiaSBiaS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWUzIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWUzID0ge1xuICBwcm9wZXJ0aWVzOiAnaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnaWNvbi10cmFzaCcsXG4gIGFkZDogJ2ljb24tcGx1cycsXG4gIG1vdmVVcDogJ2ljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNCBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNCA9IHtcbiAgcHJvcGVydGllczogJ2ZhIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYSBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYSBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNSBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNSA9IHtcbiAgcHJvcGVydGllczogJ2ZhcyBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmFzIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmFzIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYXMgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhcyBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU2IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU2ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEtc29saWQgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhLXNvbGlkIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEtc29saWQgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhLXNvbGlkIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYS1zb2xpZCBmYS1hcnJvdy1kb3duJ1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IgKGljb25zID0gbnVsbCkge1xuICAgIHRoaXMuaWNvbnMgPSBpY29uc1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdHMgc29tZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0IChuYW1lKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGljb24gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SWNvbiAobmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBpY29uQ2xhc3NlcyA9IHRoaXMuaWNvbnNbbmFtZV0uc3BsaXQoJyAnKVxuXG4gICAgaWYgKGljb25DbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGljb25DbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBkaXYgdXNlZCB0byB3cmFwIHRoZSBlZGl0b3IgVUkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgZmllbGRzZXQgZWxlbWVudC5cbiAgICogVXNlZCB0byB3cmFwIGNoaWxkcmVuIHNsb3QgYW5kIHByb3ZpZGUgbW9yZSBzZW1hbnRpYyBodG1sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIGNvbXBsZXggZWRpdG9ycyBsaWtlIGFycmF5cywgb2JqZWN0cyBhbmQgbXVsdGlwbGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIExlZ2VuZCBlbGVtZW50IHVzZWQgaW4gZmllbGRzZXRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgLyoqXG4gICAqIEhlYWRlciBmb3IgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZyA9IHt9KSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG4gICAgaWYgKGNvbmZpZy50ZXh0Q29udGVudCkge1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0aXRsZSlcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICByZXR1cm4gaGVhZGVyXG4gIH1cblxuICAvKipcbiAgICogQSBib2R5IGZvciB0aGUgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYXJyYXkgc3BlY2lmaWMgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGNoaWxkIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlcnJvciBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBPYmplY3RFZGl0b3IgcHJvcGVydGllcyB3cmFwcGVyIHZpc2liaWxpdHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlRWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAodGhpcy5pY29ucyAmJiBjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ3Byb3BlcnRpZXMnLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcjogcHJvcGVydGllc0NvbnRhaW5lclxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBUZXh0YXJlYVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSByYWRpbyBncm91cCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcubGFiZWxcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBzZWxlY3QgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVhbHMgYSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRpdGlvbmFsUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpID8gc2NoZW1hUHJvcGVydGllcyA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBbGxPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgYWxsT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYW55T2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFueU9mKSkge1xuICAgIGxldCB2YWxpZCA9IGZhbHNlXG4gICAgbGV0IGFueU9mRXJyb3JzTWVzc2FnZXMgPSBbXVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVycm9yc01lc3NhZ2VzID0gWy4uLmFueU9mRXJyb3JzTWVzc2FnZXMsIC4uLmFueU9mRXJyb3JzXVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcblxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYW55T2ZFcnJvcnNNZXNzYWdlc11cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50LCBjb21waWxlVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29uc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb25zdCA9IGdldFNjaGVtYUNvbnN0KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYUNvbnN0KVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQ29uc3QsIHtcbiAgICAgICAgICAgIGNvbnN0OiBKU09OLnN0cmluZ2lmeShzY2hlbWFDb25zdClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogY29udGFpbnMsIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KG1pbkNvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBtaW5Db250YWlucylcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluQ29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWluQ29udGFpbnM6IG1pbkNvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChtYXhDb250YWlucykpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gbWF4Q29udGFpbnMpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heENvbnRhaW5zLCB7XG4gICAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIG1heENvbnRhaW5zOiBtYXhDb250YWluc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRGVwZW5kZW50UmVxdWlyZWQsIHtcbiAgICAgICAgICAgIGRlcGVuZGVudFJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFNjaGVtYXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChkZXBlbmRlbnRTY2hlbWFzKSkge1xuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFNjaGVtYXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IGRlcGVuZGVudFNjaGVtYXNba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFbnVtLCB7XG4gICAgICAgICAgICBlbnVtOiBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBmb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2lmICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hSWYsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWFUaGVuKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFUaGVuLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYUVsc2UsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFOb3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG5vdCA9IGdldFNjaGVtYU5vdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG5vdCkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBub3QsIGtleSwgcGF0aClcbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VUZXh0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gaXRlbS5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiBtZXNzYWdlLnJlcGxhY2UoJ211c3QnLCAnbXVzdCBOT1QnKSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IG5ld01lc3NhZ2VzLFxuICAgICAgICAgICAgcGF0aDogaXRlbS5wYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub3ROb3RFcnJvcnMgPSB2YWxpZGF0b3IuZ2V0RXJyb3JzKHVuZGVmaW5lZCwgbm90LCBrZXksIHBhdGgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5ub3ROb3RFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZXBsYWNlVGV4dChlcnJvcnMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT25lT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25lT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChvbmVPZikpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIG9uZU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JPbmVPZiwge1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlclxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVybiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwYXR0ZXJuID0gZ2V0U2NoZW1hUGF0dGVybihzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChwYXR0ZXJuKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclBhdHRlcm4sIHtcbiAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gYXR0ZXJuUHJvcGVydGllc1xuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHByZWZpeEl0ZW1zKSkge1xuICAgIHByZWZpeEl0ZW1zLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJlZml4SXRlbXMsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZChzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChyZXF1aXJlZCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JSZXF1aXJlZCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7XG4gIGNvbXBpbGVUZW1wbGF0ZSwgZ2V0VHlwZSxcbiAgaXNBcnJheSxcbiAgaXNCb29sZWFuLFxuICBpc0ludGVnZXIsXG4gIGlzTnVsbCxcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdHlwZSA9IGdldFNjaGVtYVR5cGUoc2NoZW1hKVxuXG4gIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldCh0eXBlKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHZhbGlkID0gdHlwZS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yVHlwZSwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZ2V0VHlwZSh2YWx1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFVbmlxdWVJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdW5pcXVlSXRlbXMgPSBnZXRTY2hlbWFVbmlxdWVJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1bmlxdWVJdGVtcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yVW5pcXVlSXRlbXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQwNCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNCdcbmltcG9ydCBkcmFmdDA2IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA2J1xuaW1wb3J0IGRyYWZ0MDcgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDcnXG5pbXBvcnQgZHJhZnQyMDE5MDkgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAxOS0wOSdcbmltcG9ydCBkcmFmdDIwMjAxMiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnQyMDIwMTJcblxuICAgIHRoaXMuanNvblNjaGVtYURyYWZ0cyA9IHtcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnOiBkcmFmdDA0LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDYvc2NoZW1hIyc6IGRyYWZ0MDYsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJzogZHJhZnQwNyxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDE5LTA5L3NjaGVtYSc6IGRyYWZ0MjAxOTA5LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMjAtMTIvc2NoZW1hJzogZHJhZnQyMDIwMTJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cbiAgICBjb25zdCBzY2hlbWFPcHRpb25zTWVzc2FnZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnbWVzc2FnZXMnKVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZShzY2hlbWEpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2VzOiBzY2hlbWFPcHRpb25zTWVzc2FnZXMgfHwgWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYU9wdGlvbnNNZXNzYWdlcykge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZXM6IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9