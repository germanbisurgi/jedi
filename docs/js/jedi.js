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
    key: "refreshUI",
    value: function refreshUI() {
      var _this = this;
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
        var itemIndex = Number(child.getKey());
        var deleteBtn = _this.theme.getDeleteItemBtn();
        var moveUpBtn = _this.theme.getMoveUpItemBtn();
        var moveDownBtn = _this.theme.getMoveDownItemBtn();
        child.ui.control.arrayActions.innerHTML = '';
        child.ui.control.arrayActions.appendChild(deleteBtn);
        child.ui.control.arrayActions.appendChild(moveUpBtn);
        child.ui.control.arrayActions.appendChild(moveDownBtn);
        _this.control.childrenSlot.appendChild(child.ui.control.container);
        var childTitle;
        var schemaOptionItemTemplate = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(_this.instance.schema, 'itemTemplate');
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
          var itemIndex = Number(child.path.split(_this.instance.jedi.pathSeparator).pop());
          _this.instance.deleteItem(itemIndex);
        });
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;
          _this.instance.move(itemIndex, toIndex);
        });
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;
          _this.instance.move(itemIndex, toIndex);
        });
        var active = index === _this.activeTabIndex;
        var id = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(child.path);
        var tab = _this.theme.getTab({
          title: childTitle,
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
/* global confirm */





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
      var _this = this;
      this.control = this.theme.getArrayControl({
        title: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema)
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      var schemaOptionEnumTitles = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles');
      this.control = this.theme.getRadiosControl({
        values: ['false', 'true'],
        titles: schemaOptionEnumTitles || ['false', 'true'],
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      var schemaOptionEnumTitles = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles');
      this.control = this.theme.getSelectControl({
        values: ['false', 'true'],
        titles: schemaOptionEnumTitles || ['false', 'true'],
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
      });
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      this.control = this.theme.getCheckboxControl({
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
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
      var icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["iconsDefault"];
      switch (this.instance.jedi.options.iconLib) {
        case 'glyphicons':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["glyphicons"];
          break;
        case 'bootstrap-icons':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["bootstrapIcons"];
          break;
        case 'font-awesome-3':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome3"];
          break;
        case 'font-awesome-4':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome4"];
          break;
        case 'font-awesome-5':
          icons = _themes_icons_icons__WEBPACK_IMPORTED_MODULE_6__["fontAwesome5"];
          break;
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
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_12__["getSchemaType"])(this.instance.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_11__["isSet"])(schemaType)) {
        this.control.container.setAttribute('data-type', schemaType);
      }
    }

    /**
     * Builds the editor control and appends it to the editor container
     * @private
     */
  }, {
    key: "build",
    value: function build() {}

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
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor */ "./src/editors/editor.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents an EditorMultiple instance.
 * @extends Editor
 */
var EditorMultiple = /*#__PURE__*/function (_Editor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EditorMultiple, _Editor);
  var _super = _createSuper(EditorMultiple);
  function EditorMultiple() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorMultiple);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorMultiple, [{
    key: "build",
    value: function build() {
      var _this = this;
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaDescription"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      this.control = this.theme.getMultipleControl({
        title: 'Options',
        srOnly: schemaOptionHideTitle,
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(this.instance.path),
        description: schemaDescription,
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
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EditorMultiple.prototype), "showValidationErrors", this).call(this, multipleErrors);
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
  return EditorMultiple;
}(_editor__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      this.control = this.theme.getNullControl({
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
        description: schemaDescription
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      var schemaOptionEnumTitles = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles');
      this.control = this.theme.getRadiosControl({
        values: schemaEnum,
        titles: schemaOptionEnumTitles || schemaEnum,
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      var schemaOptionEnumTitles = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles');
      this.control = this.theme.getSelectControl({
        values: schemaEnum,
        titles: schemaOptionEnumTitles || schemaEnum,
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
      });
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      this.control = this.theme.getInputControl({
        type: 'number',
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
        description: schemaDescription
      });
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
      var _this = this;
      var schema = this.instance.schema;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(schema);
      var schemaAdditionalProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaAdditionalProperties"])(schema);
      var hideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(schema, 'hideTitle');
      var editableProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(schema, 'editableProperties');
      this.control = this.theme.getObjectControl({
        title: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: hideTitle,
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: schemaDescription,
        editableProperties: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(this.instance.jedi.options.editableProperties, true) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["equal"])(editableProperties, true)
      });
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
          var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(child.schema);
          var id = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(child.path) + '-activator';
          var checkboxControl = _this2.theme.getCheckboxControl({
            id: id,
            label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : child.getKey(),
            srOnly: false
          });
          var checkbox = checkboxControl.input;
          checkbox.checked = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this2.instance.getValue(), child.getKey());
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
          _this2.control.propertiesActivators.appendChild(checkboxControl.container);
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      var schemaOptionEnumTitles = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles');
      this.control = this.theme.getRadiosControl({
        values: schemaEnum,
        titles: schemaOptionEnumTitles || schemaEnum,
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
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
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaEnum"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      var schemaOptionEnumTitles = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'enumTitles');
      this.control = this.theme.getSelectControl({
        values: schemaEnum,
        titles: schemaOptionEnumTitles || schemaEnum,
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle,
        description: schemaDescription
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
      var _this = this;
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      this.control = this.theme.getTextareaControl({
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
        description: schemaDescription
      });
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
      var _this = this;
      var inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week'];
      var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema);
      var schemaDescription = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema);
      var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaFormat"])(this.instance.schema);
      var schemaOptionHideTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle');
      this.control = this.theme.getInputControl({
        type: inputTypes.includes(schemaFormat) ? schemaFormat : 'text',
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        label: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : this.instance.getKey(),
        srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
        description: schemaDescription
      });
      this.control.input.addEventListener('change', function () {
        _this.instance.setValue(_this.control.input.value);
      });

      // fix color picker bug
      if (schemaFormat === 'color' && this.instance.value.length === 0) {
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
/*! exports provided: clone, escapeRegExp, replaceAll, pathToAttribute, hasOwn, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep, overwriteExistingProperties, getValueByJSONPath, compileTemplate */
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Utils.
 * @module Utils
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
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(schema) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["notSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_9__["getSchemaType"])(schema))) {
        schema.type = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(value) ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["getType"])(value) : 'any';
      }
      var child = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path + this.jedi.pathSeparator + itemsCount,
        parent: this
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
        child.setValue(itemValue, false);
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
    _this.value = config.value || undefined;

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
  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      var schemaDefault = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaDefault"])(this.schema);
      var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaEnum"])(this.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(schemaDefault)) {
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(schemaEnum) && !schemaEnum.includes(schemaDefault)) {
          return;
        }
        var defaultErrors = this.jedi.validator.getErrors(schemaDefault, this.schema, this.getKey(), this.path);
        var validDefault = defaultErrors.length === 0;
        if (validDefault) {
          this.setValue(schemaDefault, false);
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
          _this.value = _this.activeInstance.getValue();
          _this.emit('change');
          _this.switchIf();
        });
        _this.instances.push(instance);
        _this.register();
      });
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.instances[0])) {
        if (this["if"]) {
          this.switchIf();
        } else {
          this.switchInstance(0);
        }
      }
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
      var lastInstanceValue = this.instances[this.lastIndex].getValue();
      var currentInstanceValue = this.activeInstance.getValue();
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(lastInstanceValue) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(currentInstanceValue)) {
        var mergedValue = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["overwriteExistingProperties"])(currentInstanceValue, lastInstanceValue);
        this.activeInstance.setValue(mergedValue, false);
      }
      this.value = this.activeInstance.getValue();
      this.emit('change');
    }
  }, {
    key: "switchIf",
    value: function switchIf() {
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this["if"])) {
        var ifIndex = this.getIfIndex(this.getValue());
        this.switchInstance(ifIndex);
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
          if (instance.instances) {
            instance.setValue(value, false);
          }
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
    key: "onSetValue",
    value: function onSetValue() {
      var newValue = this.value;

      // if value matches the active instance type set the value. Else switch to the first
      // instance that match the value.
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["different"])(this.activeInstance.getValue(), newValue)) {
        var fittestIndex = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this["if"]) ? this.getIfIndex(newValue) : this.getFittestIndex(newValue);
        this.switchInstance(fittestIndex, newValue);
      }
      this.activeInstance.setValue(newValue, false);
      this.value = this.activeInstance.getValue();
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
      var shouldStartDeactivated = this.jedi.options.deactivateProperties || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_10__["getSchemaOption"])(this.schema, 'deactivateProperties');
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
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["notSet"])(value[key])) {
          if (this.getChild(key)) {
            instance.deactivate();
          } else {
            this.deleteChild(key);
          }
        }
      }
      if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value)) {
        return;
      }
      Object.keys(value).forEach(function (key) {
        var child = _this4.getChild(key);

        // If a value has a already a child instance
        if (child) {
          var oldValue = child.getValue();
          var newValue = value[child.getKey()];

          // update child value if the old value and the new value are different
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["different"])(oldValue, newValue)) {
            child.setValue(newValue, false);
          }
        } else {
          // create new child instance for the new value entry having the value as default
          var initialValue = value[key];
          var type = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["getType"])(initialValue);
          var schema = {
            type: type,
            "default": initialValue
          };
          _this4.createChild(schema, key);
        }
      });
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
      showRequiredOnly: false,
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
      var instance;
      if (this.options.refParser && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["hasOwn"])(config.schema, '$ref')) {
        config.schema = this.refParser.define(config.schema['$ref']);
      }
      var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaType"])(config.schema);
      var schemaDefault = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaDefault"])(config.schema);
      var schemaIf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaIf"])(config.schema);
      var schemaOneOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaOneOf"])(config.schema);
      var schemaAnyOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_17__["getSchemaAnyOf"])(config.schema);
      if (schemaType === 'object') {
        instance = new _instances_object__WEBPACK_IMPORTED_MODULE_10__["default"](config);
      }
      if (schemaType === 'array') {
        instance = new _instances_array__WEBPACK_IMPORTED_MODULE_11__["default"](config);
      }
      if (schemaType === 'string') {
        instance = new _instances_string__WEBPACK_IMPORTED_MODULE_12__["default"](config);
      }
      if (schemaType === 'number' || schemaType === 'integer') {
        instance = new _instances_number__WEBPACK_IMPORTED_MODULE_13__["default"](config);
      }
      if (schemaType === 'boolean') {
        instance = new _instances_boolean__WEBPACK_IMPORTED_MODULE_9__["default"](config);
      }
      if (schemaType === 'null') {
        instance = new _instances_null__WEBPACK_IMPORTED_MODULE_14__["default"](config);
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(schemaIf) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(schemaAnyOf) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(schemaOneOf) || schemaType === 'any' || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isArray"])(schemaType) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["notSet"])(schemaType)) {
        if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["notSet"])(schemaType) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(schemaDefault)) {
          var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["clone"])(config.schema);
          schemaClone.type = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["getType"])(schemaDefault);
          config.schema = schemaClone;
          return this.createInstance(config);
        } else {
          instance = new _instances_multiple__WEBPACK_IMPORTED_MODULE_8__["default"](config);
        }
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(instance)) {
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
/*! exports provided: iconsDefault, glyphicons, bootstrapIcons, fontAwesome3, fontAwesome4, fontAwesome5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconsDefault", function() { return iconsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glyphicons", function() { return glyphicons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapIcons", function() { return bootstrapIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome3", function() { return fontAwesome3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome4", function() { return fontAwesome4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome5", function() { return fontAwesome5; });
/**
 * Lists of classes used for icons.
 * @module icons
 */

/**
 * HTML classes for default icons
 * @type {object}
 */
var iconsDefault = {
  properties: '',
  deleteAll: '',
  "delete": '',
  add: '',
  moveUp: '',
  moveDown: ''
};

/**
 * HTML classes for glyphicons icons
 * @type {object}
 */
var glyphicons = {
  properties: 'glyphicon glyphicon-list',
  deleteAll: 'glyphicon glyphicon-trash',
  "delete": 'glyphicon glyphicon-minus',
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
  deleteAll: 'bi bi-trash2',
  "delete": 'bi bi-trash',
  add: 'bi bi-plus',
  moveUp: 'bi bi-arrow-up',
  moveDown: 'bi bi-arrow-down'
};

/**
 * HTML classes for font-awesome-3 icons
 * @type {object}
 */
var fontAwesome3 = {
  properties: 'icon-list',
  deleteAll: 'icon-trash',
  "delete": 'icon-minus',
  add: 'icon-plus',
  moveUp: 'icon-arrow-up',
  moveDown: 'icon-arrow-down'
};

/**
 * HTML classes for font-awesome-4 icons
 * @type {object}
 */
var fontAwesome4 = {
  properties: 'fa fa-list',
  deleteAll: 'fa fa-trash',
  "delete": 'fa fa-minus',
  add: 'fa fa-plus',
  moveUp: 'fa fa-arrow-up',
  moveDown: 'fa fa-arrow-down'
};

/**
 * HTML classes for font-awesome-5 icons
 * @type {object}
 */
var fontAwesome5 = {
  properties: 'fas fa-list',
  deleteAll: 'fas fa-trash',
  "delete": 'fas fa-minus',
  add: 'fas fa-plus',
  moveUp: 'fas fa-arrow-up',
  moveDown: 'fas fa-arrow-down'
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
  function Theme(icons) {
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
      if (config.icon) {
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
     * Array "delete all" item button
     * @private
     */
  }, {
    key: "getArrayBtnDeleteAll",
    value: function getArrayBtnDeleteAll(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-array-delete-all');
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
      var deleteAllBtn = this.getArrayBtnDeleteAll({
        textContent: 'Delete items',
        icon: 'deleteAll'
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
      btnGroup.appendChild(deleteAllBtn);
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
        deleteAllBtn: deleteAllBtn,
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
            messages: ["Property \"".concat(property, "\" has not been defined and the schema does not allow additional properties.")],
            path: path
          });
        }
        if (!definedInPatternProperty && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(_additionalProperties) && !Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(properties, property)) {
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
  var schemaAllOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaAllOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaAllOf)) {
    schemaAllOf.forEach(function (schema) {
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




function anyOf(validator, value, schema, key, path) {
  var errors = [];
  var schemaOneOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaAnyOf"])(schema);
  var extraMessages = [];
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["isSet"])(schemaOneOf)) {
    var _anyOf = schemaOneOf;
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


function _const(validator, value, schema, key, path) {
  var errors = [];
  var schemaConst = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaConst"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaConst)) {
    var valueIsNotEqualConst = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["different"])(value, schemaConst);
    var invalid = valueIsNotEqualConst;
    if (invalid) {
      errors.push({
        messages: ['Must be: ' + JSON.stringify(schemaConst)],
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



function contains(validator, value, schema, key, path) {
  var errors = [];
  var schemaContains = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaContains"])(schema);
  var schemaMinContains = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaMinContains"])(schema);
  var schemaMaxContains = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaMaxContains"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaContains)) {
    var counter = 0;
    value.forEach(function (item) {
      var containsEditor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        schema: schemaContains,
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
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMinContains)) {
      var minContainsInvalid = counter < schemaMinContains;
      if (minContainsInvalid) {
        errors.push({
          messages: ["Contains match count ".concat(counter, " is less than minimum contains count of ").concat(schemaMinContains)],
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
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMaxContains)) {
      var maxContainsInvalid = counter > schemaMaxContains;
      if (maxContainsInvalid) {
        errors.push({
          messages: ["Contains match count ".concat(counter, " exceeds maximum contains count of ").concat(schemaMaxContains)],
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


function dependentRequired(validator, value, schema, key, path) {
  var errors = [];
  var schemaDependentRequired = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaDependentRequired"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaDependentRequired)) {
    var missingProperties = [];
    Object.keys(schemaDependentRequired).forEach(function (key) {
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(value[key])) {
        var requiredProperties = schemaDependentRequired[key];
        missingProperties = requiredProperties.filter(function (property) {
          return !Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(value, property);
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
  var schemaDependentSchemas = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaDependentSchemas"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaDependentSchemas)) {
    Object.keys(schemaDependentSchemas).forEach(function (key) {
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(value[key])) {
        var dependentSchema = schemaDependentSchemas[key];
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


function _enum(validator, value, schema, key, path) {
  var errors = [];
  var schemaEnum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaEnum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaEnum)) {
    var invalid = !schemaEnum.some(function (e) {
      return JSON.stringify(value) === JSON.stringify(e);
    });
    if (invalid) {
      errors.push({
        messages: ['Must be one of the enumerated values: ' + JSON.stringify(schemaEnum)],
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


function exclusiveMaximum(validator, value, schema, key, path) {
  var errors = [];
  var schemaExclusiveMaximum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaExclusiveMaximum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaExclusiveMaximum)) {
    var invalid = value >= schemaExclusiveMaximum;
    if (invalid) {
      errors.push({
        messages: ['Must be less than ' + schemaExclusiveMaximum],
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


function exclusiveMinimum(validator, value, schema, key, path) {
  var errors = [];
  var schemaExclusiveMinimum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaExclusiveMinimum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaExclusiveMinimum)) {
    var invalid = value <= schemaExclusiveMinimum;
    if (invalid) {
      errors.push({
        messages: ['Must be greater than ' + schemaExclusiveMinimum],
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


function format(validator, value, schema, key, path) {
  var errors = [];
  var schemaFormat = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaFormat"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaFormat) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
    var messages;
    var regexp;
    if (schemaFormat === 'email') {
      regexp = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
      messages = ['Must be a valid email address'];
    }
    if (schemaFormat === 'url') {
      regexp = new RegExp(/^(?:http[s\u017F]?|ftp):\/\/(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!(?:10|127)(?:\.[0-9]{1,3}){3})(?!(?:169\.254|192\.168)(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)?$/i);
      messages = ['Must be a valid email url'];
    }
    if (schemaFormat === 'uuid') {
      regexp = new RegExp(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i);
      messages = ['Must be a valid email uuid'];
    }
    var invalid = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(regexp) && !regexp.test(value);
    if (invalid) {
      errors.push({
        messages: messages,
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


function items(validator, value, schema, key, path) {
  var errors = [];
  var schemaItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaItems"])(schema);
  var schemaPrefixItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaPrefixItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaItems)) {
    var prefixItemsSchemasCount = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaPrefixItems) ? schemaPrefixItems.length : 0;
    if (schemaItems === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        messages: ['Schema always fails validation.'],
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


function maxItems(validator, value, schema, key, path) {
  var errors = [];
  var schemaMaxItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaxItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMaxItems)) {
    var invalid = value.length > schemaMaxItems;
    if (invalid) {
      errors.push({
        messages: ['Must have at most ' + schemaMaxItems + ' items'],
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


function maxLength(validator, value, schema, key, path) {
  var errors = [];
  var schemaMaxLength = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaxLength"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMaxLength)) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points
    var invalid = value.length > schemaMaxLength;
    if (invalid) {
      errors.push({
        messages: ['Must be at most ' + schemaMaxLength + ' characters long'],
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


function maxProperties(validator, value, schema, key, path) {
  var errors = [];
  var schemaMaxProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaxProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMaxProperties)) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount > schemaMaxProperties;
    if (invalid) {
      errors.push({
        messages: ['Must have at most ' + schemaMaxProperties + ' properties'],
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


function maximum(validator, value, schema, key, path) {
  var errors = [];
  var schemaMaximum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMaximum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMaximum)) {
    var computedMaximum = schemaMaximum;
    var invalid = value > computedMaximum;
    if (invalid) {
      errors.push({
        messages: ['Must be less than ' + computedMaximum],
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


function minItems(validator, value, schema, key, path) {
  var errors = [];
  var schemaMinItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMinItems)) {
    var invalid = value.length < schemaMinItems;
    if (invalid) {
      errors.push({
        messages: ['Must have at least ' + schemaMinItems + ' items'],
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


function minLength(validator, value, schema, key, path) {
  var errors = [];
  var schemaMinLength = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinLength"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMinLength)) {
    value = value.replace(/[\uDCA9]/g, ''); // remove Unicode code points
    var invalid = value.length < schemaMinLength;
    if (invalid) {
      errors.push({
        messages: ['Must be at least ' + schemaMinLength + ' characters long'],
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


function minProperties(validator, value, schema, key, path) {
  var errors = [];
  var schemaMinProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMinProperties)) {
    var propertiesCount = Object.keys(value).length;
    var invalid = propertiesCount < schemaMinProperties;
    if (invalid) {
      errors.push({
        messages: ['Must have at least ' + schemaMinProperties + ' properties'],
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


function minimum(validator, value, schema, key, path) {
  var errors = [];
  var schemaMinimum = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMinimum"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMinimum)) {
    var computedMinimum = schemaMinimum;
    var invalid = value < computedMinimum;
    if (invalid) {
      errors.push({
        messages: ['Must be at least ' + computedMinimum],
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


function multipleOf(validator, value, schema, key, path) {
  var errors = [];
  var schemaMultipleOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaMultipleOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaMultipleOf)) {
    var isMultipleOf = value / schemaMultipleOf === Math.floor(value / schemaMultipleOf);
    var invalid = !isMultipleOf || value.toString().includes('e');
    if (invalid) {
      errors.push({
        messages: ['Must be multiple of ' + schemaMultipleOf],
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");


function not(validator, value, schema, key, path) {
  var errors = [];
  var schemaNot = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaNot"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaNot)) {
    var notErrors = validator.getErrors(value, schemaNot, key, path);
    var invalid = notErrors.length === 0;
    if (invalid) {
      errors.push({
        messages: ['Must not validate against the provided schema'],
        path: path
      });
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");




function oneOf(validator, value, schema, key, path) {
  var errors = [];
  var schemaOneOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaOneOf"])(schema);
  var extraMessages = [];
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaOneOf)) {
    var counter = 0;
    schemaOneOf.forEach(function (schema) {
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


function pattern(validator, value, schema, key, path) {
  var errors = [];
  var schemaPattern = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaPattern"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaPattern)) {
    var regexp = new RegExp(schemaPattern);
    var invalid = !regexp.test(value);
    if (invalid) {
      errors.push({
        messages: ['Must be the pattern: ' + schemaPattern],
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
  var schemaPatternProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_3__["getSchemaPatternProperties"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaPatternProperties)) {
    var _patternProperties = schemaPatternProperties;
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



function prefixItems(validator, value, schema, key, path) {
  var errors = [];
  var schemaPrefixItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaPrefixItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaPrefixItems)) {
    schemaPrefixItems.forEach(function (itemSchema, index) {
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
            messages: ["Item ".concat(index, " fails validation.")],
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


function required(validator, value, schema, key, path) {
  var errors = [];
  var schemaRequired = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaRequired"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaRequired)) {
    var missingProperties = [];
    var keys = Object.keys(value);
    schemaRequired.forEach(function (key) {
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


function type(validator, value, schema, key, path) {
  var errors = [];
  var schemaType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaType"])(schema);
  if (schemaType === 'any') {
    return errors;
  }
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaType)) {
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
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(schemaType)) {
      valid = schemaType.some(function (type) {
        return types[type](value);
      });
    } else {
      valid = types[schemaType](value);
    }
    if (!valid) {
      errors.push({
        messages: ['Must be of type ' + schemaType],
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


function uniqueItems(validator, value, schema, key, path) {
  var errors = [];
  var schemaUniqueItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaUniqueItems"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaUniqueItems) && schemaUniqueItems === true) {
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
        messages: ['Must have unique items'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXAzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9pY29ucy9pY29ucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbGxPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA3LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAxOS0wOS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJFZGl0b3JBcnJheU5hdiIsIl9FZGl0b3JBcnJheSIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0IiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJhY3RpdmVUYWJJbmRleCIsInJlZnJlc2hVSSIsIl90aGlzIiwicmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMiLCJjb250cm9sIiwiY2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwicm93IiwidGhlbWUiLCJnZXRSb3ciLCJjb2xzIiwiZ2V0U2NoZW1hT3B0aW9uIiwiaW5zdGFuY2UiLCJzY2hlbWEiLCJ0YWJMaXN0Q29sIiwiZ2V0Q29sIiwidGFiQ29udGVudENvbCIsInRhYkNvbnRlbnQiLCJnZXRUYWJDb250ZW50IiwidGFiTGlzdCIsImdldFRhYkxpc3QiLCJzdGFja2VkIiwidHlwZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmRleCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImRlbGV0ZUJ0biIsImdldERlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBCdG4iLCJnZXRNb3ZlVXBJdGVtQnRuIiwibW92ZURvd25CdG4iLCJnZXRNb3ZlRG93bkl0ZW1CdG4iLCJ1aSIsImFycmF5QWN0aW9ucyIsImNvbnRhaW5lciIsImNoaWxkVGl0bGUiLCJzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpMCIsImkxIiwiZ2V0VmFsdWUiLCJjb21waWxlVGVtcGxhdGUiLCJzY2hlbWFUaXRsZSIsImdldFNjaGVtYVRpdGxlIiwiaXNTZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicGF0aCIsInNwbGl0IiwiamVkaSIsInBhdGhTZXBhcmF0b3IiLCJwb3AiLCJkZWxldGVJdGVtIiwidG9JbmRleCIsIm1vdmUiLCJhY3RpdmUiLCJpZCIsInBhdGhUb0F0dHJpYnV0ZSIsInRhYiIsImdldFRhYiIsInRpdGxlIiwibGlzdCIsInNldFRhYlBhbmVBdHRyaWJ1dGVzIiwiZGlzYWJsZWQiLCJpc1JlYWRPbmx5IiwiZGlzYWJsZSIsImVuYWJsZSIsIkVkaXRvckFycmF5IiwiX0VkaXRvciIsImJ1aWxkIiwiZ2V0QXJyYXlDb250cm9sIiwic3JPbmx5IiwiZGVzY3JpcHRpb24iLCJnZXRTY2hlbWFEZXNjcmlwdGlvbiIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJtZXNzYWdlIiwiZ2V0QWxlcnQiLCJzYW5pdGl6ZSIsImlzQXJyYXkiLCJfdGhpczIiLCJFZGl0b3IiLCJFZGl0b3JCb29sZWFuRW51bVJhZGlvIiwiX0VkaXRvckJvb2xlYW4iLCJzY2hlbWFEZXNjcmlwdGlvbiIsInNjaGVtYU9wdGlvbkhpZGVUaXRsZSIsInNjaGVtYU9wdGlvbkVudW1UaXRsZXMiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJjaGVja2VkIiwiRWRpdG9yQm9vbGVhbiIsIkVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IiwiZ2V0U2VsZWN0Q29udHJvbCIsImlucHV0IiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiQm9vbGVhbiIsIl9FdmVudEVtaXR0ZXIiLCJyZWFkT25seSIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsImVycm9ycyIsImdldEVycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwib24iLCJpY29ucyIsImljb25zRGVmYXVsdCIsImljb25MaWIiLCJnbHlwaGljb25zIiwiYm9vdHN0cmFwSWNvbnMiLCJmb250QXdlc29tZTMiLCJmb250QXdlc29tZTQiLCJmb250QXdlc29tZTUiLCJUaGVtZUJvb3RzdHJhcDMiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJUaGVtZSIsInNldEF0dHJpYnV0ZSIsInNjaGVtYVR5cGUiLCJnZXRTY2hlbWFUeXBlIiwibWVzc2FnZXMiLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsIl90aGlzMyIsImludGVyYWN0aXZlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJfdGhpczQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiRWRpdG9yTXVsdGlwbGUiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwic3dpdGNoSW5zdGFuY2UiLCJhY3RpdmVJbnN0YW5jZSIsIm11bHRpcGxlRXJyb3JzIiwiZmlsdGVyIiwiYWN0aXZlSW5zdGFuY2VFcnJvcnMiLCJFZGl0b3JOdWxsIiwic2NoZW1hRm9ybWF0IiwiZ2V0U2NoZW1hRm9ybWF0IiwiZ2V0TnVsbENvbnRyb2wiLCJFZGl0b3JOdW1iZXJFbnVtUmFkaW8iLCJfRWRpdG9yTnVtYmVyIiwic2NoZW1hRW51bSIsImdldFNjaGVtYUVudW0iLCJFZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IiwiZ2V0SW5wdXRDb250cm9sIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJFZGl0b3JPYmplY3RHcmlkIiwiX0VkaXRvck9iamVjdCIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIkVkaXRvck9iamVjdCIsIkVkaXRvck9iamVjdE5hdiIsInNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJoaWRlVGl0bGUiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRPYmplY3RDb250cm9sIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwibGVuZ3RoIiwicHJvcGVydHlFeGlzdCIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyIsInByb3BlcnRpZXNBY3RpdmF0b3JzIiwiY2hlY2tib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImRlYWN0aXZhdGUiLCJFZGl0b3JTdHJpbmdFbnVtUmFkaW8iLCJfRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nRW51bVNlbGVjdCIsIkVkaXRvclN0cmluZ1RleHRhcmVhIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiU3RyaW5nIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImVtaXQiLCJsaXN0ZW5lciIsImdldFNjaGVtYVNjaGVtYSIsImlzU3RyaW5nIiwiJHNjaGVtYSIsInVuZGVmaW5lZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiaXNCb29sZWFuIiwiZ2V0U2NoZW1hQWxsT2YiLCJhbGxPZiIsImdldFNjaGVtYUFueU9mIiwiYW55T2YiLCJnZXRTY2hlbWFDb25zdCIsImdldFNjaGVtYUNvbnRhaW5zIiwiY29udGFpbnMiLCJnZXRTY2hlbWFEZWZhdWx0IiwiZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMiLCJkZXBlbmRlbnRTY2hlbWFzIiwiZ2V0U2NoZW1hRWxzZSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJnZXRTY2hlbWFJZiIsImdldFNjaGVtYUl0ZW1zIiwiaXRlbXMiLCJnZXRTY2hlbWFNYXhpbXVtIiwibWF4aW11bSIsImdldFNjaGVtYU1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4Q29udGFpbnMiLCJnZXRTY2hlbWFNYXhJdGVtcyIsIm1heEl0ZW1zIiwiZ2V0U2NoZW1hTWF4TGVuZ3RoIiwibWF4TGVuZ3RoIiwiZ2V0U2NoZW1hTWF4UHJvcGVydGllcyIsIm1heFByb3BlcnRpZXMiLCJnZXRTY2hlbWFNaW5pbXVtIiwibWluaW11bSIsImdldFNjaGVtYU1pbkNvbnRhaW5zIiwibWluQ29udGFpbnMiLCJnZXRTY2hlbWFNaW5JdGVtcyIsIm1pbkl0ZW1zIiwiZ2V0U2NoZW1hTWluTGVuZ3RoIiwibWluTGVuZ3RoIiwiZ2V0U2NoZW1hTWluUHJvcGVydGllcyIsIm1pblByb3BlcnRpZXMiLCJnZXRTY2hlbWFNdWx0aXBsZU9mIiwibXVsdGlwbGVPZiIsImdldFNjaGVtYU5vdCIsIm5vdCIsIm9wdGlvbiIsImdldFNjaGVtYVBhdHRlcm4iLCJwYXR0ZXJuIiwiZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJwYXR0ZXJuUHJvcGVydGllcyIsImdldFNjaGVtYVByZWZpeEl0ZW1zIiwicHJlZml4SXRlbXMiLCJnZXRTY2hlbWFQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImdldFNjaGVtYVJlYWRPbmx5IiwiZ2V0U2NoZW1hUmVxdWlyZWQiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsImdldFNjaGVtYVRoZW4iLCJ0aGVuIiwiZ2V0U2NoZW1hT25lT2YiLCJvbmVPZiIsImdldFNjaGVtYVVuaXF1ZUl0ZW1zIiwidW5pcXVlSXRlbXMiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJmaW5kIiwiUmVnRXhwIiwib2JqIiwicHJvcCIsImhhc093blByb3BlcnR5Iiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsIm5vdFNldCIsIkFycmF5IiwiX3R5cGVvZiIsImdldFR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmNhdCIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsIm9iajEiLCJvYmoyIiwiZ2V0VmFsdWVCeUpTT05QYXRoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRlc3QiLCJwYXJzZUludCIsImVyciIsImUiLCJmIiwibWF0Y2giLCJJbnN0YW5jZUFycmF5IiwiX0luc3RhbmNlIiwic2V0VUkiLCJwcmVwYXJlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsInNjaGVtYUl0ZW1zIiwic2NoZW1hUHJlZml4SXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkluc3RhbmNlQm9vbGVhbiIsImNvbmZpZyIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJzY2hlbWFEZWZhdWx0IiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiSW5zdGFuY2VNdWx0aXBsZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hQ2xvbmUiLCJzY2hlbWFUaGVuIiwic2NoZW1hRWxzZSIsInRoZW5TY2hlbWEiLCJlbHNlU2NoZW1hIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfb2JqZWN0U3ByZWFkIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0Iiwic3dpdGNoSWYiLCJsYXN0SW5zdGFuY2VWYWx1ZSIsImN1cnJlbnRJbnN0YW5jZVZhbHVlIiwibWVyZ2VkVmFsdWUiLCJpZkluZGV4IiwiZ2V0SWZJbmRleCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiaW5zdGFuY2VFcnJvcnMiLCJJbnN0YW5jZU51bGwiLCJJbnN0YW5jZU51bWJlciIsInR5cGVJc051bWVyaWMiLCJJbnN0YW5jZU9iamVjdCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwiaSIsImdldENoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJJbnN0YW5jZVN0cmluZyIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiZGVmaW5lIiwic2NoZW1hSWYiLCJzY2hlbWFPbmVPZiIsInNjaGVtYUFueU9mIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsImRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiX1RoZW1lIiwidXNlVG9nZ2xlRXZlbnRzIiwiZ2V0TGVnZW5kIiwibGVnZW5kIiwiaGlkZUVsZW1lbnQiLCJnZXRDYXJkIiwiY2FyZCIsImdldENhcmRIZWFkZXIiLCJoZWFkZXIiLCJnZXRDYXJkQm9keSIsImh0bWwiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRCdG5Hcm91cCIsImdldERlc2NyaXB0aW9uIiwiZmllbGRzZXQiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9scyIsInJhZGlvQ29udHJvbCIsImZvcm1Hcm91cCIsImxhYmVsVGV4dCIsImdldFN3aXRjaGVyIiwicmVtb3ZlIiwieHMiLCJtZCIsIm9mZnNldE1kIiwibGluayIsInNob3dFbGVtZW50IiwiZ2V0Q29sdW1uQ2xhc3MiLCJzaXplIiwiZ2V0Q29udHJvbFNsb3QiLCJjb250cm9sU2xvdCIsImRlbGV0ZUFsbCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiZ2V0SWNvbiIsImljb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpY29uQ2xhc3NlcyIsImNsYXNzTmFtZSIsImdldEVkaXRvckNvbnRhaW5lciIsImdldEZpZWxkc2V0IiwidGV4dENvbnRlbnQiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2dnbGUiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJidXR0b24iLCJ0ZXh0IiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzY2hlbWFBbGxPZiIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImV4dHJhTWVzc2FnZXMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfY29uc3QiLCJzY2hlbWFDb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsInNjaGVtYUNvbnRhaW5zIiwic2NoZW1hTWluQ29udGFpbnMiLCJzY2hlbWFNYXhDb250YWlucyIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwic2NoZW1hRGVwZW5kZW50UmVxdWlyZWQiLCJqb2luIiwic2NoZW1hRGVwZW5kZW50U2NoZW1hcyIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsIl9lbnVtIiwic29tZSIsInNjaGVtYUV4Y2x1c2l2ZU1heGltdW0iLCJzY2hlbWFFeGNsdXNpdmVNaW5pbXVtIiwiX2lmIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50Iiwic2NoZW1hTWF4SXRlbXMiLCJzY2hlbWFNYXhMZW5ndGgiLCJzY2hlbWFNYXhQcm9wZXJ0aWVzIiwicHJvcGVydGllc0NvdW50Iiwic2NoZW1hTWF4aW11bSIsImNvbXB1dGVkTWF4aW11bSIsInNjaGVtYU1pbkl0ZW1zIiwic2NoZW1hTWluTGVuZ3RoIiwic2NoZW1hTWluUHJvcGVydGllcyIsInNjaGVtYU1pbmltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJzY2hlbWFNdWx0aXBsZU9mIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJzY2hlbWFOb3QiLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwic2NoZW1hUGF0dGVybiIsInByb3BlcnR5TmFtZSIsImVkaXRvckVycm9ycyIsIml0ZW1TY2hlbWEiLCJ0eXBlcyIsIm51bWJlciIsImludGVnZXIiLCJib29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJfbnVsbCIsInNjaGVtYVVuaXF1ZUl0ZW1zIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2FnZXMiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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ZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQXJyYXlcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXlOYXYgZXh0ZW5kcyBFZGl0b3JBcnJheSB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgbGV0IGNoaWxkVGl0bGVcbiAgICAgIGNvbnN0IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2l0ZW1UZW1wbGF0ZScpXG5cbiAgICAgIGlmIChzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGVcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpMDogaW5kZXgsXG4gICAgICAgICAgaTE6IChpbmRleCArIDEpLFxuICAgICAgICAgIHZhbHVlOiBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRUaXRsZSA9IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgICBjaGlsZFRpdGxlID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgKyAnICcgKyAoaW5kZXggKyAxKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICB0aXRsZTogY2hpbGRUaXRsZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSlcblxuICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgfSlcblxuICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcbiAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheU5hdlxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXkgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZXNjcmlwdGlvbiA9IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRW51bVRpdGxlcyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHNjaGVtYU9wdGlvbkVudW1UaXRsZXMgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPcHRpb25IaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkVudW1UaXRsZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPcHRpb25IaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpY29uc0RlZmF1bHQsIGdseXBoaWNvbnMsIGJvb3RzdHJhcEljb25zLCBmb250QXdlc29tZTMsIGZvbnRBd2Vzb21lNCwgZm9udEF3ZXNvbWU1IH0gZnJvbSAnLi4vdGhlbWVzL2ljb25zL2ljb25zJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lcy90aGVtZSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBJbnN0YW5jZSBiZWluZyBjb250cm9sbGVkIGJ5IHRoaXMgZWRpdG9yLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBidWlsZCB0aGUgRWRpdG9yIHVzZXIgaW50ZXJmYWNlLlxuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBpbnRlcmZhY2UgaHRtbCBmb3IgdGhpcyBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlZCBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIFJlYWQgb25seSBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJlYWRPbmx5ID0gdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KClcblxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuYWx3YXlzU2hvd0Vycm9ycyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIGxldCBpY29ucyA9IGljb25zRGVmYXVsdFxuXG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSB7XG4gICAgICBjYXNlICdnbHlwaGljb25zJzpcbiAgICAgICAgaWNvbnMgPSBnbHlwaGljb25zXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICBpY29ucyA9IGJvb3RzdHJhcEljb25zXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmb250LWF3ZXNvbWUtMyc6XG4gICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmb250LWF3ZXNvbWUtNCc6XG4gICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU0XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmb250LWF3ZXNvbWUtNSc6XG4gICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU1XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZShpY29ucylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb250YWluZXIgYXR0cmlidXRlcyBsaWtlIGRhdGEtcGF0aCBhbmQgZGF0YS10eXBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCBzY2hlbWFUeXBlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZCAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgfVxuXG4gIHJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcblxuICAgIGludGVyYWN0aXZlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udGFpbmVyICYmIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTXVsdGlwbGUgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPcHRpb25IaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRNdWx0aXBsZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgY29uc3QgbXVsdGlwbGVFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IucGF0aCA9PT0gdGhpcy5wYXRoKVxuICAgIGNvbnN0IGFjdGl2ZUluc3RhbmNlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggIT09IHRoaXMucGF0aClcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycyhtdWx0aXBsZUVycm9ycylcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKGFjdGl2ZUluc3RhbmNlRXJyb3JzKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdWxsIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlIHx8IHNjaGVtYUZvcm1hdCA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdWxsXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBzY2hlbWFFbnVtLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IHNjaGVtYUVudW0sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZXNjcmlwdGlvbiA9IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRW51bVRpdGxlcyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogc2NoZW1hRW51bSxcbiAgICAgIHRpdGxlczogc2NoZW1hT3B0aW9uRW51bVRpdGxlcyB8fCBzY2hlbWFFbnVtLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlIHx8IHNjaGVtYUZvcm1hdCA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdEdyaWQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0R3JpZCBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdjb2x1bW5zJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ25ld1JvdycpKSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0R3JpZFxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3ROYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0TmF2IGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcblxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgICAgdGl0bGU6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcblxuICAgICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZXNjcmlwdGlvbiA9IGdldFNjaGVtYURlc2NyaXB0aW9uKHNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgICBjb25zdCBoaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBoaWRlVGl0bGUsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb24sXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGlmIChpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VkaXRhYmxlUHJvcGVydGllcycpXG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbChzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1SYWRpbyBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBzY2hlbWFFbnVtLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IHNjaGVtYUVudW0sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBzY2hlbWFFbnVtLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IHNjaGVtYUVudW0sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdUZXh0YXJlYSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdUZXh0YXJlYSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzY2hlbWFEZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1RleHRhcmVhXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmcgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHNjaGVtYUZvcm1hdCkgPyBzY2hlbWFGb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzY2hlbWFEZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ2NvbG9yJyAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGFuIEV2ZW50RW1pdHRlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbnQgdGhpcyBldmVudCBpcyBlbWl0dGVkXG4gICAqL1xuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIGVtaXR0ZWRcbiAgICovXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFTY2hlbWEgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLiRzY2hlbWEpID8gc2NoZW1hLiRzY2hlbWEgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT3B0aW9uIChzY2hlbWEsIG9wdGlvbikge1xuICByZXR1cm4gKHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5wYXR0ZXJuKSA/IHNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcmVmaXhJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5wcmVmaXhJdGVtcykgPyBzY2hlbWEucHJlZml4SXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnByb3BlcnRpZXMpID8gc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlYWRPbmx5IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEucmVhZE9ubHkpID8gc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldChzY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGhlbiAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbihzY2hlbWEudGhlbikpID8gc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRpdGxlIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS50aXRsZSkgPyBzY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVR5cGUgKHNjaGVtYSkge1xuICBpZiAoaXNTdHJpbmcoc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS50eXBlXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPbmVPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5vbmVPZikgPyBzY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNsb25lIG9mIGEgdGhpbmdcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gYmUgY2xvbmVkXG4gKiBAcmV0dXJuIHsqfSBUaGUgY2xvbmUgb2YgdGhlIHRoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAodGhpbmcpIHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHMgYnV0IG9ubHkgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdHMgaW4gYm90aHMgb2JqZWN0c1xuICogaWYgdGhleSBhcmUgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gdHlwZW9mIG9iajJba2V5XSkge1xuICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5LCBub3RTZXQsIGlzT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEVkaXRvckFycmF5TmF2IGZyb20gJy4uL2VkaXRvcnMvYXJyYXktbmF2J1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheU5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IHNjaGVtYVxuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGNvbnN0IHNjaGVtYUl0ZW1zID0gZ2V0U2NoZW1hSXRlbXModGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyh0aGlzLnNjaGVtYSlcblxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChnZXRTY2hlbWFUeXBlKHNjaGVtYSkpKSB7XG4gICAgICBzY2hlbWEudHlwZSA9IGlzU2V0KHZhbHVlKSA/IGdldFR5cGUodmFsdWUpIDogJ2FueSdcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGNoaWxkLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUFycmF5XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZWZhdWx0LCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFSZWFkT25seSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogdG8gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVmYXVsdCA9IGdldFNjaGVtYURlZmF1bHQodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRGVmYXVsdCkpIHtcbiAgICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyhzY2hlbWFEZWZhdWx0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHNjaGVtYURlZmF1bHQsIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gICAgICBjb25zdCB2YWxpZERlZmF1bHQgPSBkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAodmFsaWREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2NoZW1hRGVmYXVsdCwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBpbnN0YW5jZSBpcyByZWFkIG9ubHlcbiAgICovXG4gIGlzUmVhZE9ubHkgKCkge1xuICAgIGxldCByZWFkT25seSA9IGZhbHNlXG5cbiAgICBpZiAoZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5wYXJlbnQuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQW55T2YsIGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFPbmVPZiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaGVuLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VNdWx0aXBsZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTXVsdGlwbGUodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChnZXRTY2hlbWFJZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgICAgdGhpcy5pZiA9IGNsb25lKGdldFNjaGVtYUlmKHRoaXMuc2NoZW1hKSlcbiAgICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBjbG9uZShnZXRTY2hlbWFUaGVuKHRoaXMuc2NoZW1hKSlcbiAgICAgIGNvbnN0IHNjaGVtYUVsc2UgPSBjbG9uZShnZXRTY2hlbWFFbHNlKHRoaXMuc2NoZW1hKSlcblxuICAgICAgZGVsZXRlIHNjaGVtYUNsb25lLmlmXG4gICAgICBkZWxldGUgc2NoZW1hQ2xvbmUudGhlblxuICAgICAgZGVsZXRlIHNjaGVtYUNsb25lLmVsc2VcblxuICAgICAgY29uc3QgdGhlblNjaGVtYSA9IHNjaGVtYVRoZW4gPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCBzY2hlbWFUaGVuKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG4gICAgICBjb25zdCBlbHNlU2NoZW1hID0gc2NoZW1hRWxzZSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHNjaGVtYUVsc2UpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcblxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhlblNjaGVtYSlcbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKGVsc2VTY2hlbWEpXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbMCwgMV1cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gWyd0aGVuJywgJ2Vsc2UnXVxuICAgIH0gZWxzZSBpZiAoaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSB8fCBpc1NldChnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpID8gZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpIDogZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjbG9uZVNjaGVtYSlcblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hVGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ3N3aXRjaGVyVGl0bGUnKSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHNjaGVtYVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZSh0aGlzLnNjaGVtYSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgIXNjaGVtYVR5cGUpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUodGhpcy5zY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIGlmICh0aGlzLmlmKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaW5kZXhdXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0SW5zdGFuY2VWYWx1ZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMubGFzdEluZGV4XS5nZXRWYWx1ZSgpXG4gICAgY29uc3QgY3VycmVudEluc3RhbmNlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc09iamVjdChsYXN0SW5zdGFuY2VWYWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudEluc3RhbmNlVmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXJnZWRWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50SW5zdGFuY2VWYWx1ZSwgbGFzdEluc3RhbmNlVmFsdWUpXG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKG1lcmdlZFZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICB9XG5cbiAgc3dpdGNoSWYgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLmlmKSkge1xuICAgICAgY29uc3QgaWZJbmRleCA9IHRoaXMuZ2V0SWZJbmRleCh0aGlzLmdldFZhbHVlKCkpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGlmSW5kZXgpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLmlmLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaW5zdGFuY2UgdGhhdCBoYXMgbGVzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgKi9cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIG5ld1ZhbHVlKSkge1xuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgobmV3VmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgobmV3VmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgbmV3VmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU11bHRpcGxlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdWxsIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdWxsIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdWxsKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdWxsXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVtYmVyIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHR5cGVJc051bWVyaWMgPSBzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcidcblxuICAgIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdW1iZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3ROYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3QodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hUmVxdWlyZWQpICYmIHNjaGVtYVJlcXVpcmVkLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgSW5zdGFuY2VNdWx0aXBsZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBJbnN0YW5jZUJvb2xlYW4gZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBJbnN0YW5jZU9iamVjdCBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgSW5zdGFuY2VBcnJheSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBJbnN0YW5jZVN0cmluZyBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgSW5zdGFuY2VOdW1iZXIgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IEluc3RhbmNlTnVsbCBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQsIGNsb25lIH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYURlZmF1bHQsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKZWRpIGluc3RhbmNlLlxuICovXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBKZWRpIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IG9wdGlvbnMuc2NoZW1hIC0gQSBKU09OIHNjaGVtYVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFZGl0b3IgLSBHZW5lcmF0ZXMgVUkgY29udHJvbHMgdG8gZWRpdCB0aGUgSlNPTiB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29udGFpbmVyIC0gV2hlcmUgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGhlbWUgLSBIb3cgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlIGFuZCBkZXJlZmVyZW5jZSBzY2hlbWEgb24gdGhlIGZseSBpZiBuZWVkZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZWZhdWx0ID0gZ2V0U2NoZW1hRGVmYXVsdChjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlQXJyYXkoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VTdHJpbmcoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTnVtYmVyKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZUJvb2xlYW4oY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUlmKSB8fCBpc1NldChzY2hlbWFBbnlPZikgfHwgaXNTZXQoc2NoZW1hT25lT2YpIHx8IHNjaGVtYVR5cGUgPT09ICdhbnknIHx8IGlzQXJyYXkoc2NoZW1hVHlwZSkgfHwgbm90U2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgICBpZiAobm90U2V0KHNjaGVtYVR5cGUpICYmIGlzU2V0KHNjaGVtYURlZmF1bHQpKSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUoY29uZmlnLnNjaGVtYSlcbiAgICAgICAgc2NoZW1hQ2xvbmUudHlwZSA9IGdldFR5cGUoc2NoZW1hRGVmYXVsdClcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IHNjaGVtYUNsb25lXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTXVsdGlwbGUoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vaGVscGVycy91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUmVmUGFyc2VyIGluc3RhbmNlLlxuICovXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1lbmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCIvKipcbiAqIExpc3RzIG9mIGNsYXNzZXMgdXNlZCBmb3IgaWNvbnMuXG4gKiBAbW9kdWxlIGljb25zXG4gKi9cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGRlZmF1bHQgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBpY29uc0RlZmF1bHQgPSB7XG4gIHByb3BlcnRpZXM6ICcnLFxuICBkZWxldGVBbGw6ICcnLFxuICBkZWxldGU6ICcnLFxuICBhZGQ6ICcnLFxuICBtb3ZlVXA6ICcnLFxuICBtb3ZlRG93bjogJydcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGdseXBoaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBnbHlwaGljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0JyxcbiAgZGVsZXRlQWxsOiAnZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaCcsXG4gIGRlbGV0ZTogJ2dseXBoaWNvbiBnbHlwaGljb24tbWludXMnLFxuICBhZGQ6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBib290c3RyYXAtaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBib290c3RyYXBJY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2JpIGJpLWNhcmQtbGlzdCcsXG4gIGRlbGV0ZUFsbDogJ2JpIGJpLXRyYXNoMicsXG4gIGRlbGV0ZTogJ2JpIGJpLXRyYXNoJyxcbiAgYWRkOiAnYmkgYmktcGx1cycsXG4gIG1vdmVVcDogJ2JpIGJpLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdiaSBiaS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udC1hd2Vzb21lLTMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTMgPSB7XG4gIHByb3BlcnRpZXM6ICdpY29uLWxpc3QnLFxuICBkZWxldGVBbGw6ICdpY29uLXRyYXNoJyxcbiAgZGVsZXRlOiAnaWNvbi1taW51cycsXG4gIGFkZDogJ2ljb24tcGx1cycsXG4gIG1vdmVVcDogJ2ljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnQtYXdlc29tZS00IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU0ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEgZmEtbGlzdCcsXG4gIGRlbGV0ZUFsbDogJ2ZhIGZhLXRyYXNoJyxcbiAgZGVsZXRlOiAnZmEgZmEtbWludXMnLFxuICBhZGQ6ICdmYSBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250LWF3ZXNvbWUtNSBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNSA9IHtcbiAgcHJvcGVydGllczogJ2ZhcyBmYS1saXN0JyxcbiAgZGVsZXRlQWxsOiAnZmFzIGZhLXRyYXNoJyxcbiAgZGVsZXRlOiAnZmFzIGZhLW1pbnVzJyxcbiAgYWRkOiAnZmFzIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYXMgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhcyBmYS1hcnJvdy1kb3duJ1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IgKGljb25zKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKG5hbWUpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaWNvbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJY29uIChuYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNvbnN0IGljb25DbGFzc2VzID0gdGhpcy5pY29uc1tuYW1lXS5zcGxpdCgnICcpXG5cbiAgICBpZiAoaWNvbkNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWNvbkNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGRpdiB1c2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBmaWVsZHNldCBlbGVtZW50LlxuICAgKiBVc2VkIHRvIHdyYXAgY2hpbGRyZW4gc2xvdCBhbmQgcHJvdmlkZSBtb3JlIHNlbWFudGljIGh0bWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29tcGxleCBlZGl0b3JzIGxpa2UgYXJyYXlzLCBvYmplY3RzIGFuZCBtdWx0aXBsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogTGVnZW5kIGVsZW1lbnQgdXNlZCBpbiBmaWVsZHNldHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgICBpZiAoY29uZmlnLnRleHRDb250ZW50KSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KHRpdGxlKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgY2hpbGQgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBjb250cm9sc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBwcm9wZXJ0aWVzIGVkaXRpbmcgZWxlbWVudHMgbGlrZSBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIE9iamVjdEVkaXRvciBwcm9wZXJ0aWVzIHdyYXBwZXIgdmlzaWJpbGl0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGVFbGVtZW50KGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIEEgYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmIChjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGUgYWxsXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuRGVsZXRlQWxsIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUtYWxsJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiZGVsZXRlXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlbGV0ZUl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJyxcbiAgICAgIGljb246ICdkZWxldGUnXG4gICAgfSlcblxuICAgIGRlbGV0ZUl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgcmV0dXJuIGRlbGV0ZUl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgdXBcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCcsXG4gICAgICBpY29uOiAnbW92ZVVwJ1xuICAgIH0pXG5cbiAgICBtb3ZlVXBJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICByZXR1cm4gbW92ZVVwSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSBkb3duXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1vdmVEb3duSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZURvd25JdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nLFxuICAgICAgaWNvbjogJ21vdmVEb3duJ1xuICAgIH0pXG5cbiAgICBtb3ZlRG93bkl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgcmV0dXJuIG1vdmVEb3duSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRoZSBlZGl0b3IgZGVzY3JpcHRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3QgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBFYWNoIGVkaXRvciBpcyBtYXBwZWQgdG8gYW4gb2JqZWN0IGluc3RhbmNlIHByb3BlcnR5LlxuICAgKiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCwgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZCBkZXBlbmRpbmcgb24gY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZCxcbiAgICAgIGljb246ICdwcm9wZXJ0aWVzJyxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXI6IHByb3BlcnRpZXNDb250YWluZXJcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0FjdGl2YXRvcnMgPSB0aGlzLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIGNvbmZpZy5pZCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5QnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZVxuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKHByb3BlcnRpZXNDb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICBpZiAoY29uZmlnLmVkaXRhYmxlUHJvcGVydGllcykge1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQWN0aXZhdG9ycylcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuXG4gICAgY29uc3QgZGVsZXRlQWxsQnRuID0gdGhpcy5nZXRBcnJheUJ0bkRlbGV0ZUFsbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcycsXG4gICAgICBpY29uOiAnZGVsZXRlQWxsJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVBbGxCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGRlbGV0ZUFsbEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBUZXh0YXJlYVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSByYWRpbyBncm91cCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcubGFiZWxcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBzZWxlY3QgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVhbHMgYSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcywgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsIGdldFNjaGVtYVByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hUHJvcGVydGllcykgPyBzY2hlbWFQcm9wZXJ0aWVzIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWFQYXR0ZXJuUHJvcGVydGllc1xuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBgUHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIGhhcyBub3QgYmVlbiBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIGRvZXMgbm90IGFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllcy5gXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICByb290TmFtZTogcHJvcGVydHksXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFsbE9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFBbGxPZikpIHtcbiAgICBzY2hlbWFBbGxPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbnlPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hT25lT2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG5cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWFPbmVPZikpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYU9uZU9mXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICAuLi5leHRyYU1lc3NhZ2VzXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFDb25zdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb25zdCA9IGdldFNjaGVtYUNvbnN0KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYUNvbnN0KVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hQ29uc3QpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb250YWlucyA9IGdldFNjaGVtYUNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hTWluQ29udGFpbnMgPSBnZXRTY2hlbWFNaW5Db250YWlucyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYU1heENvbnRhaW5zID0gZ2V0U2NoZW1hTWF4Q29udGFpbnMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWFDb250YWlucykpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYUNvbnRhaW5zLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLmdldEVycm9ycygpXG5cbiAgICAgIGlmIChjb250YWluc0Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5zRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluc0ludmFsaWQgPSAoY291bnRlciA9PT0gMClcblxuICAgIGlmIChpc1NldChzY2hlbWFNaW5Db250YWlucykpIHtcbiAgICAgIGNvbnN0IG1pbkNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyIDwgc2NoZW1hTWluQ29udGFpbnMpXG5cbiAgICAgIGlmIChtaW5Db250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBpcyBsZXNzIHRoYW4gbWluaW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYU1pbkNvbnRhaW5zfWBcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICdObyBpdGVtcyBtYXRjaCBjb250YWlucydcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hTWF4Q29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IHNjaGVtYU1heENvbnRhaW5zKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hTWF4Q29udGFpbnN9YFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRSZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgPSBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZChzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hRGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYURlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50U2NoZW1hcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYURlcGVuZGVudFNjaGVtYXMgPSBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYURlcGVuZGVudFNjaGVtYXMpKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hRGVwZW5kZW50U2NoZW1hcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gc2NoZW1hRGVwZW5kZW50U2NoZW1hc1trZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnRtcEVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2VudW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gIXNjaGVtYUVudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hRXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IHNjaGVtYUV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgc2NoZW1hRXhjbHVzaXZlTWF4aW11bVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFFeGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWFFeGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hRXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWFFeGNsdXNpdmVNaW5pbXVtXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFGb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCBtZXNzYWdlc1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnXVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICd1cmwnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86aHR0cHM/fGZ0cCk6XFwvXFwvKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSg/OlxcLig/OlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSstKSpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1KVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1cmwnXVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICd1dWlkJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/OnVybjp1dWlkOik/WzAtOWEtZl17OH0tKD86WzAtOWEtZl17NH0tKXszfVswLTlhLWZdezEyfSQvaSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXVpZCddXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFUaGVuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBfaWYgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hSWYpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWFUaGVuKSAmJiBub3RTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFJZiwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYVRoZW4pKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYVRoZW4sIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hRWxzZSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFJZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hSXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWFJdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zKSA/IHNjaGVtYVByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChzY2hlbWFJdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydTY2hlbWEgYWx3YXlzIGZhaWxzIHZhbGlkYXRpb24uJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFNYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hTWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWFNYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWFNYXhJdGVtcyArICcgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4TGVuZ3RoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1heExlbmd0aCA9IGdldFNjaGVtYU1heExlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWFNYXhMZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBzY2hlbWFNYXhMZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IG1vc3QgJyArIHNjaGVtYU1heExlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1heFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1heFByb3BlcnRpZXMgPSBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYU1heFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hTWF4UHJvcGVydGllcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWFNYXhQcm9wZXJ0aWVzICsgJyBwcm9wZXJ0aWVzJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1heGltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1heGltdW0gPSBnZXRTY2hlbWFNYXhpbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYU1heGltdW0pKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNYXhpbXVtID0gc2NoZW1hTWF4aW11bVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBjb21wdXRlZE1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGxlc3MgdGhhbiAnICsgY29tcHV0ZWRNYXhpbXVtXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5JdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWFNaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYU1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWFNaW5JdGVtcyArICcgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluTGVuZ3RoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWFNaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWFNaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWFNaW5MZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFNaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFNaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IHNjaGVtYU1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYU1pblByb3BlcnRpZXMgKyAnIHByb3BlcnRpZXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluaW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTWluaW11bSA9IGdldFNjaGVtYU1pbmltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hTWluaW11bSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1pbmltdW0gPSBzY2hlbWFNaW5pbXVtXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IGNvbXB1dGVkTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbGVhc3QgJyArIGNvbXB1dGVkTWluaW11bV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGxlT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU11bHRpcGxlT2YgPSBnZXRTY2hlbWFNdWx0aXBsZU9mKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYU11bHRpcGxlT2YpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hTXVsdGlwbGVPZiA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYU11bHRpcGxlT2YpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWFNdWx0aXBsZU9mXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFOb3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG5vdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTm90ID0gZ2V0U2NoZW1hTm90KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hTm90KSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIHNjaGVtYU5vdCwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYSddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFPbmVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25lT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuICBsZXQgZXh0cmFNZXNzYWdlcyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYU9uZU9mKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgc2NoZW1hT25lT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgZXh0cmFNZXNzYWdlcyA9IFsuLi5leHRyYU1lc3NhZ2VzLCBKU09OLnN0cmluZ2lmeShzY2hlbWEpXVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCAnICsgY291bnRlciArICcgb2YgdGhlIHNjaGVtYXMuJyxcbiAgICAgICAgICAuLi5leHRyYU1lc3NhZ2VzXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm4gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYVBhdHRlcm4gPSBnZXRTY2hlbWFQYXR0ZXJuKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYVBhdHRlcm4pKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWFQYXR0ZXJuKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hUGF0dGVybl0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFQYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYVByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWFQcmVmaXhJdGVtcykpIHtcbiAgICBzY2hlbWFQcmVmaXhJdGVtcy5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBpdGVtU2NoZW1hLCBzdGFydFZhbHVlOiBpdGVtVmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcblxuICAgICAgICBpZiAodG1wRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW2BJdGVtICR7aW5kZXh9IGZhaWxzIHZhbGlkYXRpb24uYF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFSZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYVJlcXVpcmVkKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWFSZXF1aXJlZC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoc2NoZW1hKVxuXG4gIGlmIChzY2hlbWFUeXBlID09PSAnYW55Jykge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldChzY2hlbWFUeXBlKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHZhbGlkID0gc2NoZW1hVHlwZS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbc2NoZW1hVHlwZV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYVR5cGVdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFVbmlxdWVJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYVVuaXF1ZUl0ZW1zID0gZ2V0U2NoZW1hVW5pcXVlSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWFVbmlxdWVJdGVtcykgJiYgc2NoZW1hVW5pcXVlSXRlbXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQwNCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNCdcbmltcG9ydCBkcmFmdDA2IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA2J1xuaW1wb3J0IGRyYWZ0MDcgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDcnXG5pbXBvcnQgZHJhZnQyMDE5MDkgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAxOS0wOSdcbmltcG9ydCBkcmFmdDIwMjAxMiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnQyMDIwMTJcblxuICAgIHRoaXMuanNvblNjaGVtYURyYWZ0cyA9IHtcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnOiBkcmFmdDA0LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDYvc2NoZW1hIyc6IGRyYWZ0MDYsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJzogZHJhZnQwNyxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDE5LTA5L3NjaGVtYSc6IGRyYWZ0MjAxOTA5LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMjAtMTIvc2NoZW1hJzogZHJhZnQyMDIwMTJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cbiAgICBjb25zdCBzY2hlbWFPcHRpb25zTWVzc2FnZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnbWVzc2FnZXMnKVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZShzY2hlbWEpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2VzOiBzY2hlbWFPcHRpb25zTWVzc2FnZXMgfHwgWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYU9wdGlvbnNNZXNzYWdlcykge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZXM6IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9