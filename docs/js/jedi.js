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
      var icons = null;
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_11__["isSet"])(this.instance.jedi.options.iconLib)) {
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
/*! exports provided: glyphicons, bootstrapIcons, fontAwesome3, fontAwesome4, fontAwesome5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glyphicons", function() { return glyphicons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapIcons", function() { return bootstrapIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome3", function() { return fontAwesome3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome4", function() { return fontAwesome4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontAwesome5", function() { return fontAwesome5; });
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
        console.log('test');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvc2NoZW1hLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9qZWRpLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvcmVmLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXAzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9pY29ucy9pY29ucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbGxPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA3LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAxOS0wOS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJFZGl0b3JBcnJheU5hdiIsIl9FZGl0b3JBcnJheSIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0IiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJhY3RpdmVUYWJJbmRleCIsInJlZnJlc2hVSSIsIl90aGlzIiwicmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMiLCJjb250cm9sIiwiY2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwicm93IiwidGhlbWUiLCJnZXRSb3ciLCJjb2xzIiwiZ2V0U2NoZW1hT3B0aW9uIiwiaW5zdGFuY2UiLCJzY2hlbWEiLCJ0YWJMaXN0Q29sIiwiZ2V0Q29sIiwidGFiQ29udGVudENvbCIsInRhYkNvbnRlbnQiLCJnZXRUYWJDb250ZW50IiwidGFiTGlzdCIsImdldFRhYkxpc3QiLCJzdGFja2VkIiwidHlwZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmRleCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImRlbGV0ZUJ0biIsImdldERlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBCdG4iLCJnZXRNb3ZlVXBJdGVtQnRuIiwibW92ZURvd25CdG4iLCJnZXRNb3ZlRG93bkl0ZW1CdG4iLCJ1aSIsImFycmF5QWN0aW9ucyIsImNvbnRhaW5lciIsImNoaWxkVGl0bGUiLCJzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpMCIsImkxIiwiZ2V0VmFsdWUiLCJjb21waWxlVGVtcGxhdGUiLCJzY2hlbWFUaXRsZSIsImdldFNjaGVtYVRpdGxlIiwiaXNTZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicGF0aCIsInNwbGl0IiwiamVkaSIsInBhdGhTZXBhcmF0b3IiLCJwb3AiLCJkZWxldGVJdGVtIiwidG9JbmRleCIsIm1vdmUiLCJhY3RpdmUiLCJpZCIsInBhdGhUb0F0dHJpYnV0ZSIsInRhYiIsImdldFRhYiIsInRpdGxlIiwibGlzdCIsInNldFRhYlBhbmVBdHRyaWJ1dGVzIiwiZGlzYWJsZWQiLCJpc1JlYWRPbmx5IiwiZGlzYWJsZSIsImVuYWJsZSIsIkVkaXRvckFycmF5IiwiX0VkaXRvciIsImJ1aWxkIiwiZ2V0QXJyYXlDb250cm9sIiwic3JPbmx5IiwiZGVzY3JpcHRpb24iLCJnZXRTY2hlbWFEZXNjcmlwdGlvbiIsImFkZEJ0biIsImFkZEl0ZW0iLCJkZWxldGVBbGxCdG4iLCJjb25maXJtIiwic2V0VmFsdWUiLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJtZXNzYWdlIiwiZ2V0QWxlcnQiLCJzYW5pdGl6ZSIsImlzQXJyYXkiLCJfdGhpczIiLCJFZGl0b3IiLCJFZGl0b3JCb29sZWFuRW51bVJhZGlvIiwiX0VkaXRvckJvb2xlYW4iLCJzY2hlbWFEZXNjcmlwdGlvbiIsInNjaGVtYU9wdGlvbkhpZGVUaXRsZSIsInNjaGVtYU9wdGlvbkVudW1UaXRsZXMiLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJjaGVja2VkIiwiRWRpdG9yQm9vbGVhbiIsIkVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IiwiZ2V0U2VsZWN0Q29udHJvbCIsImlucHV0IiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiQm9vbGVhbiIsIl9FdmVudEVtaXR0ZXIiLCJyZWFkT25seSIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsImVycm9ycyIsImdldEVycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwib24iLCJpY29ucyIsImljb25MaWIiLCJnbHlwaGljb25zIiwiYm9vdHN0cmFwSWNvbnMiLCJmb250QXdlc29tZTMiLCJmb250QXdlc29tZTQiLCJmb250QXdlc29tZTUiLCJUaGVtZUJvb3RzdHJhcDMiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJUaGVtZSIsInNldEF0dHJpYnV0ZSIsInNjaGVtYVR5cGUiLCJnZXRTY2hlbWFUeXBlIiwibWVzc2FnZXMiLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsIl90aGlzMyIsImludGVyYWN0aXZlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJfdGhpczQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiRWRpdG9yTXVsdGlwbGUiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwic3dpdGNoSW5zdGFuY2UiLCJhY3RpdmVJbnN0YW5jZSIsIm11bHRpcGxlRXJyb3JzIiwiZmlsdGVyIiwiYWN0aXZlSW5zdGFuY2VFcnJvcnMiLCJFZGl0b3JOdWxsIiwic2NoZW1hRm9ybWF0IiwiZ2V0U2NoZW1hRm9ybWF0IiwiZ2V0TnVsbENvbnRyb2wiLCJFZGl0b3JOdW1iZXJFbnVtUmFkaW8iLCJfRWRpdG9yTnVtYmVyIiwic2NoZW1hRW51bSIsImdldFNjaGVtYUVudW0iLCJFZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IiwiZ2V0SW5wdXRDb250cm9sIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJFZGl0b3JPYmplY3RHcmlkIiwiX0VkaXRvck9iamVjdCIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIkVkaXRvck9iamVjdCIsIkVkaXRvck9iamVjdE5hdiIsInNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJoaWRlVGl0bGUiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRPYmplY3RDb250cm9sIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwibGVuZ3RoIiwicHJvcGVydHlFeGlzdCIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyIsInByb3BlcnRpZXNBY3RpdmF0b3JzIiwiY2hlY2tib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImRlYWN0aXZhdGUiLCJFZGl0b3JTdHJpbmdFbnVtUmFkaW8iLCJfRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nRW51bVNlbGVjdCIsIkVkaXRvclN0cmluZ1RleHRhcmVhIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiU3RyaW5nIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImVtaXQiLCJsaXN0ZW5lciIsImdldFNjaGVtYVNjaGVtYSIsImlzU3RyaW5nIiwiJHNjaGVtYSIsInVuZGVmaW5lZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiaXNCb29sZWFuIiwiZ2V0U2NoZW1hQWxsT2YiLCJhbGxPZiIsImdldFNjaGVtYUFueU9mIiwiYW55T2YiLCJnZXRTY2hlbWFDb25zdCIsImdldFNjaGVtYUNvbnRhaW5zIiwiY29udGFpbnMiLCJnZXRTY2hlbWFEZWZhdWx0IiwiZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMiLCJkZXBlbmRlbnRTY2hlbWFzIiwiZ2V0U2NoZW1hRWxzZSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJnZXRTY2hlbWFJZiIsImdldFNjaGVtYUl0ZW1zIiwiaXRlbXMiLCJnZXRTY2hlbWFNYXhpbXVtIiwibWF4aW11bSIsImdldFNjaGVtYU1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4Q29udGFpbnMiLCJnZXRTY2hlbWFNYXhJdGVtcyIsIm1heEl0ZW1zIiwiZ2V0U2NoZW1hTWF4TGVuZ3RoIiwibWF4TGVuZ3RoIiwiZ2V0U2NoZW1hTWF4UHJvcGVydGllcyIsIm1heFByb3BlcnRpZXMiLCJnZXRTY2hlbWFNaW5pbXVtIiwibWluaW11bSIsImdldFNjaGVtYU1pbkNvbnRhaW5zIiwibWluQ29udGFpbnMiLCJnZXRTY2hlbWFNaW5JdGVtcyIsIm1pbkl0ZW1zIiwiZ2V0U2NoZW1hTWluTGVuZ3RoIiwibWluTGVuZ3RoIiwiZ2V0U2NoZW1hTWluUHJvcGVydGllcyIsIm1pblByb3BlcnRpZXMiLCJnZXRTY2hlbWFNdWx0aXBsZU9mIiwibXVsdGlwbGVPZiIsImdldFNjaGVtYU5vdCIsIm5vdCIsIm9wdGlvbiIsImdldFNjaGVtYVBhdHRlcm4iLCJwYXR0ZXJuIiwiZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJwYXR0ZXJuUHJvcGVydGllcyIsImdldFNjaGVtYVByZWZpeEl0ZW1zIiwicHJlZml4SXRlbXMiLCJnZXRTY2hlbWFQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImdldFNjaGVtYVJlYWRPbmx5IiwiZ2V0U2NoZW1hUmVxdWlyZWQiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsImdldFNjaGVtYVRoZW4iLCJ0aGVuIiwiZ2V0U2NoZW1hT25lT2YiLCJvbmVPZiIsImdldFNjaGVtYVVuaXF1ZUl0ZW1zIiwidW5pcXVlSXRlbXMiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJmaW5kIiwiUmVnRXhwIiwib2JqIiwicHJvcCIsImhhc093blByb3BlcnR5Iiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsIm5vdFNldCIsIkFycmF5IiwiX3R5cGVvZiIsImdldFR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmNhdCIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsIm9iajEiLCJvYmoyIiwiZ2V0VmFsdWVCeUpTT05QYXRoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRlc3QiLCJwYXJzZUludCIsImVyciIsImUiLCJmIiwibWF0Y2giLCJJbnN0YW5jZUFycmF5IiwiX0luc3RhbmNlIiwic2V0VUkiLCJwcmVwYXJlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsInNjaGVtYUl0ZW1zIiwic2NoZW1hUHJlZml4SXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkluc3RhbmNlQm9vbGVhbiIsImNvbmZpZyIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJzY2hlbWFEZWZhdWx0IiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiSW5zdGFuY2VNdWx0aXBsZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hQ2xvbmUiLCJzY2hlbWFUaGVuIiwic2NoZW1hRWxzZSIsInRoZW5TY2hlbWEiLCJlbHNlU2NoZW1hIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfb2JqZWN0U3ByZWFkIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0Iiwic3dpdGNoSWYiLCJsYXN0SW5zdGFuY2VWYWx1ZSIsImN1cnJlbnRJbnN0YW5jZVZhbHVlIiwibWVyZ2VkVmFsdWUiLCJpZkluZGV4IiwiZ2V0SWZJbmRleCIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiaW5zdGFuY2VFcnJvcnMiLCJJbnN0YW5jZU51bGwiLCJJbnN0YW5jZU51bWJlciIsInR5cGVJc051bWVyaWMiLCJJbnN0YW5jZU9iamVjdCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiaXNOb3RSZXF1aXJlZCIsInNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlUHJvcGVydGllcyIsImRlbGV0ZUNoaWxkIiwiaSIsImdldENoaWxkIiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJJbnN0YW5jZVN0cmluZyIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiZGVmaW5lIiwic2NoZW1hSWYiLCJzY2hlbWFPbmVPZiIsInNjaGVtYUFueU9mIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsImRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmT3duZXIiLCJwcmV2VmFsdWUiLCJyZWYiLCJpc0NpcmN1bGFyUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiX1RoZW1lIiwidXNlVG9nZ2xlRXZlbnRzIiwiZ2V0TGVnZW5kIiwibGVnZW5kIiwiaGlkZUVsZW1lbnQiLCJnZXRDYXJkIiwiY2FyZCIsImdldENhcmRIZWFkZXIiLCJoZWFkZXIiLCJnZXRDYXJkQm9keSIsImh0bWwiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRCdG5Hcm91cCIsImdldERlc2NyaXB0aW9uIiwiZmllbGRzZXQiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9scyIsInJhZGlvQ29udHJvbCIsImZvcm1Hcm91cCIsImxhYmVsVGV4dCIsImdldFN3aXRjaGVyIiwicmVtb3ZlIiwieHMiLCJtZCIsIm9mZnNldE1kIiwibGluayIsInNob3dFbGVtZW50IiwiZ2V0Q29sdW1uQ2xhc3MiLCJzaXplIiwiZ2V0Q29udHJvbFNsb3QiLCJjb250cm9sU2xvdCIsImRlbGV0ZUFsbCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiZ2V0SWNvbiIsImljb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpY29uQ2xhc3NlcyIsImNsYXNzTmFtZSIsImdldEVkaXRvckNvbnRhaW5lciIsImdldEZpZWxkc2V0IiwidGV4dENvbnRlbnQiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2dnbGUiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJidXR0b24iLCJ0ZXh0IiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzY2hlbWFBbGxPZiIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImV4dHJhTWVzc2FnZXMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfY29uc3QiLCJzY2hlbWFDb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsInNjaGVtYUNvbnRhaW5zIiwic2NoZW1hTWluQ29udGFpbnMiLCJzY2hlbWFNYXhDb250YWlucyIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwic2NoZW1hRGVwZW5kZW50UmVxdWlyZWQiLCJqb2luIiwic2NoZW1hRGVwZW5kZW50U2NoZW1hcyIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsIl9lbnVtIiwic29tZSIsInNjaGVtYUV4Y2x1c2l2ZU1heGltdW0iLCJzY2hlbWFFeGNsdXNpdmVNaW5pbXVtIiwiX2lmIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50Iiwic2NoZW1hTWF4SXRlbXMiLCJzY2hlbWFNYXhMZW5ndGgiLCJzY2hlbWFNYXhQcm9wZXJ0aWVzIiwicHJvcGVydGllc0NvdW50Iiwic2NoZW1hTWF4aW11bSIsImNvbXB1dGVkTWF4aW11bSIsInNjaGVtYU1pbkl0ZW1zIiwic2NoZW1hTWluTGVuZ3RoIiwic2NoZW1hTWluUHJvcGVydGllcyIsInNjaGVtYU1pbmltdW0iLCJjb21wdXRlZE1pbmltdW0iLCJzY2hlbWFNdWx0aXBsZU9mIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJzY2hlbWFOb3QiLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwic2NoZW1hUGF0dGVybiIsInByb3BlcnR5TmFtZSIsImVkaXRvckVycm9ycyIsIml0ZW1TY2hlbWEiLCJ0eXBlcyIsIm51bWJlciIsImludGVnZXIiLCJib29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJfbnVsbCIsInNjaGVtYVVuaXF1ZUl0ZW1zIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2FnZXMiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdI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YnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheU5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckFycmF5XG4gKi9cbmNsYXNzIEVkaXRvckFycmF5TmF2IGV4dGVuZHMgRWRpdG9yQXJyYXkge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLmNvbHMgfHwgM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Jykuc3RhY2tlZCxcbiAgICAgIHR5cGU6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLnR5cGVcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG4gICAgICBjb25zdCBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdpdGVtVGVtcGxhdGUnKVxuXG4gICAgICBpZiAoc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaTA6IGluZGV4LFxuICAgICAgICAgIGkxOiAoaW5kZXggKyAxKSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkVGl0bGUgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgY2hpbGRUaXRsZSA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlICsgJyAnICsgKGluZGV4ICsgMSkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgfVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlOYXZcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckFycmF5IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlcbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPcHRpb25IaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkVudW1UaXRsZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogc2NoZW1hT3B0aW9uRW51bVRpdGxlcyB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBzY2hlbWFEZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvckJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbiBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBzY2hlbWFEZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2x5cGhpY29ucywgYm9vdHN0cmFwSWNvbnMsIGZvbnRBd2Vzb21lMywgZm9udEF3ZXNvbWU0LCBmb250QXdlc29tZTUgfSBmcm9tICcuLi90aGVtZXMvaWNvbnMvaWNvbnMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vdGhlbWVzL3RoZW1lJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEluc3RhbmNlIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhpcyBlZGl0b3IuXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBFZGl0b3IgdXNlciBpbnRlcmZhY2UuXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGludGVyZmFjZSBodG1sIGZvciB0aGlzIGVkaXRvclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udHJvbCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVkIHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBvbmx5IHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVhZE9ubHkgPSB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKVxuXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGlmICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5hbHdheXNTaG93RXJyb3JzIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2Fsd2F5c1Nob3dFcnJvcnMnKSkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgbGV0IGljb25zID0gbnVsbFxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpIHtcbiAgICAgICAgY2FzZSAnZ2x5cGhpY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBnbHlwaGljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYm9vdHN0cmFwLWljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGJvb3RzdHJhcEljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udC1hd2Vzb21lLTMnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udC1hd2Vzb21lLTQnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU0XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udC1hd2Vzb21lLTUnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU1XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKGljb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFUeXBlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHNjaGVtYVR5cGUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgfVxuXG4gIHJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcblxuICAgIGludGVyYWN0aXZlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udGFpbmVyICYmIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTXVsdGlwbGUgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPcHRpb25IaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRNdWx0aXBsZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgY29uc3QgbXVsdGlwbGVFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IucGF0aCA9PT0gdGhpcy5wYXRoKVxuICAgIGNvbnN0IGFjdGl2ZUluc3RhbmNlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggIT09IHRoaXMucGF0aClcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycyhtdWx0aXBsZUVycm9ycylcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKGFjdGl2ZUluc3RhbmNlRXJyb3JzKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdWxsIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlIHx8IHNjaGVtYUZvcm1hdCA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdWxsXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBzY2hlbWFFbnVtLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IHNjaGVtYUVudW0sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZXNjcmlwdGlvbiA9IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRW51bVRpdGxlcyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogc2NoZW1hRW51bSxcbiAgICAgIHRpdGxlczogc2NoZW1hT3B0aW9uRW51bVRpdGxlcyB8fCBzY2hlbWFFbnVtLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHNjaGVtYURlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRGVzY3JpcHRpb24gPSBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogc2NoZW1hT3B0aW9uSGlkZVRpdGxlIHx8IHNjaGVtYUZvcm1hdCA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdEdyaWQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0R3JpZCBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdjb2x1bW5zJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ25ld1JvdycpKSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0R3JpZFxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3ROYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0TmF2IGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcblxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgICAgdGl0bGU6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcblxuICAgICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZXNjcmlwdGlvbiA9IGdldFNjaGVtYURlc2NyaXB0aW9uKHNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgICBjb25zdCBoaWRlVGl0bGUgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBlZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBoaWRlVGl0bGUsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb24sXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGlmIChpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VkaXRhYmxlUHJvcGVydGllcycpXG5cbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbChzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1SYWRpbyBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBzY2hlbWFFbnVtLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IHNjaGVtYUVudW0sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uSGlkZVRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJylcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FbnVtVGl0bGVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBzY2hlbWFFbnVtLFxuICAgICAgdGl0bGVzOiBzY2hlbWFPcHRpb25FbnVtVGl0bGVzIHx8IHNjaGVtYUVudW0sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2NoZW1hRGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdUZXh0YXJlYSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdUZXh0YXJlYSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzY2hlbWFEZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1RleHRhcmVhXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmcgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYURlc2NyaXB0aW9uID0gZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbkhpZGVUaXRsZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHNjaGVtYUZvcm1hdCkgPyBzY2hlbWFGb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBzY2hlbWFPcHRpb25IaWRlVGl0bGUgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzY2hlbWFEZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ2NvbG9yJyAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGFuIEV2ZW50RW1pdHRlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbnQgdGhpcyBldmVudCBpcyBlbWl0dGVkXG4gICAqL1xuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGJlIGVtaXR0ZWRcbiAgICovXG4gIGVtaXQgKG5hbWUpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIobGlzdGVuZXIgPT4gbGlzdGVuZXIubmFtZSA9PT0gbmFtZSlcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFTY2hlbWEgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLiRzY2hlbWEpID8gc2NoZW1hLiRzY2hlbWEgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgfHwgaXNCb29sZWFuKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT3B0aW9uIChzY2hlbWEsIG9wdGlvbikge1xuICByZXR1cm4gKHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5wYXR0ZXJuKSA/IHNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcmVmaXhJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5wcmVmaXhJdGVtcykgPyBzY2hlbWEucHJlZml4SXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnByb3BlcnRpZXMpID8gc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlYWRPbmx5IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEucmVhZE9ubHkpID8gc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldChzY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGhlbiAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbihzY2hlbWEudGhlbikpID8gc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRpdGxlIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS50aXRsZSkgPyBzY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVR5cGUgKHNjaGVtYSkge1xuICBpZiAoaXNTdHJpbmcoc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS50eXBlXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPbmVPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5vbmVPZikgPyBzY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNsb25lIG9mIGEgdGhpbmdcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gYmUgY2xvbmVkXG4gKiBAcmV0dXJuIHsqfSBUaGUgY2xvbmUgb2YgdGhlIHRoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAodGhpbmcpIHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHMgYnV0IG9ubHkgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdHMgaW4gYm90aHMgb2JqZWN0c1xuICogaWYgdGhleSBhcmUgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gdHlwZW9mIG9iajJba2V5XSkge1xuICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5LCBub3RTZXQsIGlzT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEVkaXRvckFycmF5TmF2IGZyb20gJy4uL2VkaXRvcnMvYXJyYXktbmF2J1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheU5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IHNjaGVtYVxuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGNvbnN0IHNjaGVtYUl0ZW1zID0gZ2V0U2NoZW1hSXRlbXModGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyh0aGlzLnNjaGVtYSlcblxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChnZXRTY2hlbWFUeXBlKHNjaGVtYSkpKSB7XG4gICAgICBzY2hlbWEudHlwZSA9IGlzU2V0KHZhbHVlKSA/IGdldFR5cGUodmFsdWUpIDogJ2FueSdcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGNoaWxkLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUFycmF5XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZWZhdWx0LCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFSZWFkT25seSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogdG8gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRGVmYXVsdCA9IGdldFNjaGVtYURlZmF1bHQodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRGVmYXVsdCkpIHtcbiAgICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyhzY2hlbWFEZWZhdWx0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHNjaGVtYURlZmF1bHQsIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gICAgICBjb25zdCB2YWxpZERlZmF1bHQgPSBkZWZhdWx0RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAodmFsaWREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2NoZW1hRGVmYXVsdCwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBpbnN0YW5jZSBpcyByZWFkIG9ubHlcbiAgICovXG4gIGlzUmVhZE9ubHkgKCkge1xuICAgIGxldCByZWFkT25seSA9IGZhbHNlXG5cbiAgICBpZiAoZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgZ2V0U2NoZW1hUmVhZE9ubHkodGhpcy5wYXJlbnQuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JNdWx0aXBsZSBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQW55T2YsIGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFPbmVPZiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaGVuLCBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VNdWx0aXBsZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTXVsdGlwbGUodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChnZXRTY2hlbWFJZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgICAgdGhpcy5pZiA9IGNsb25lKGdldFNjaGVtYUlmKHRoaXMuc2NoZW1hKSlcbiAgICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBjbG9uZShnZXRTY2hlbWFUaGVuKHRoaXMuc2NoZW1hKSlcbiAgICAgIGNvbnN0IHNjaGVtYUVsc2UgPSBjbG9uZShnZXRTY2hlbWFFbHNlKHRoaXMuc2NoZW1hKSlcblxuICAgICAgZGVsZXRlIHNjaGVtYUNsb25lLmlmXG4gICAgICBkZWxldGUgc2NoZW1hQ2xvbmUudGhlblxuICAgICAgZGVsZXRlIHNjaGVtYUNsb25lLmVsc2VcblxuICAgICAgY29uc3QgdGhlblNjaGVtYSA9IHNjaGVtYVRoZW4gPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCBzY2hlbWFUaGVuKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG4gICAgICBjb25zdCBlbHNlU2NoZW1hID0gc2NoZW1hRWxzZSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHNjaGVtYUVsc2UpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcblxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhlblNjaGVtYSlcbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKGVsc2VTY2hlbWEpXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbMCwgMV1cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gWyd0aGVuJywgJ2Vsc2UnXVxuICAgIH0gZWxzZSBpZiAoaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSB8fCBpc1NldChnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpID8gZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpIDogZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpXG4gICAgICBjb25zdCBjbG9uZVNjaGVtYSA9IGNsb25lKHRoaXMuc2NoZW1hKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjbG9uZVNjaGVtYSlcblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hVGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ3N3aXRjaGVyVGl0bGUnKSB8fCAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHNjaGVtYVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZSh0aGlzLnNjaGVtYSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgIXNjaGVtYVR5cGUpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUodGhpcy5zY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ09iamVjdCcsICdBcnJheScsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlc1swXSkpIHtcbiAgICAgIGlmICh0aGlzLmlmKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaW5kZXhdXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0SW5zdGFuY2VWYWx1ZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMubGFzdEluZGV4XS5nZXRWYWx1ZSgpXG4gICAgY29uc3QgY3VycmVudEluc3RhbmNlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc09iamVjdChsYXN0SW5zdGFuY2VWYWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudEluc3RhbmNlVmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXJnZWRWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50SW5zdGFuY2VWYWx1ZSwgbGFzdEluc3RhbmNlVmFsdWUpXG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKG1lcmdlZFZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICB9XG5cbiAgc3dpdGNoSWYgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLmlmKSkge1xuICAgICAgY29uc3QgaWZJbmRleCA9IHRoaXMuZ2V0SWZJbmRleCh0aGlzLmdldFZhbHVlKCkpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGlmSW5kZXgpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLmlmLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaW5zdGFuY2UgdGhhdCBoYXMgbGVzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgKi9cbiAgZ2V0Rml0dGVzdEluZGV4ICh2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZml0dGVzdEluZGV4XG4gICAgbGV0IGNoYW1waW9uRXJyb3JzXG5cbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIHRoaXMuaW5zdGFuY2VzKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIG5ld1ZhbHVlKSkge1xuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgobmV3VmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgobmV3VmFsdWUpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgbmV3VmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU11bHRpcGxlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdWxsIGZyb20gJy4uL2VkaXRvcnMvbnVsbCdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdWxsIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdWxsKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdWxsXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVtYmVyIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHR5cGVJc051bWVyaWMgPSBzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcidcblxuICAgIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VOdW1iZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3ROYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3QodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hUmVxdWlyZWQpICYmIHNjaGVtYVJlcXVpcmVkLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlUHJvcGVydGllcycpXG5cbiAgICBpZiAoaXNOb3RSZXF1aXJlZCAmJiBzaG91bGRTdGFydERlYWN0aXZhdGVkKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGRlbGV0ZUNoaWxkIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0S2V5KCkgPT09IGtleSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZCAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IGluc3RhbmNlLmdldEtleSgpLnNwbGl0KHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKVxuICAgIH0pXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdmFsdWVbY2hpbGQuZ2V0S2V5KCldID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaEluc3RhbmNlcyAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoa2V5KVxuXG4gICAgICAvLyBJZiBhIHZhbHVlIGhhcyBhIGFscmVhZHkgYSBjaGlsZCBpbnN0YW5jZVxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGluaXRpYWxWYWx1ZSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkZWZhdWx0OiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgSW5zdGFuY2VNdWx0aXBsZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBJbnN0YW5jZUJvb2xlYW4gZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBJbnN0YW5jZU9iamVjdCBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgSW5zdGFuY2VBcnJheSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBJbnN0YW5jZVN0cmluZyBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgSW5zdGFuY2VOdW1iZXIgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IEluc3RhbmNlTnVsbCBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQsIGNsb25lIH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYURlZmF1bHQsXG4gIGdldFNjaGVtYUlmLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKZWRpIGluc3RhbmNlLlxuICovXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBKZWRpIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IG9wdGlvbnMuc2NoZW1hIC0gQSBKU09OIHNjaGVtYVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFZGl0b3IgLSBHZW5lcmF0ZXMgVUkgY29udHJvbHMgdG8gZWRpdCB0aGUgSlNPTiB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29udGFpbmVyIC0gV2hlcmUgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGhlbWUgLSBIb3cgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlIGFuZCBkZXJlZmVyZW5jZSBzY2hlbWEgb24gdGhlIGZseSBpZiBuZWVkZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlciAmJiBoYXNPd24oY29uZmlnLnNjaGVtYSwgJyRyZWYnKSkge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlZmluZShjb25maWcuc2NoZW1hWyckcmVmJ10pXG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFEZWZhdWx0ID0gZ2V0U2NoZW1hRGVmYXVsdChjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlQXJyYXkoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VTdHJpbmcoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTnVtYmVyKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZUJvb2xlYW4oY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUlmKSB8fCBpc1NldChzY2hlbWFBbnlPZikgfHwgaXNTZXQoc2NoZW1hT25lT2YpIHx8IHNjaGVtYVR5cGUgPT09ICdhbnknIHx8IGlzQXJyYXkoc2NoZW1hVHlwZSkgfHwgbm90U2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgICBpZiAobm90U2V0KHNjaGVtYVR5cGUpICYmIGlzU2V0KHNjaGVtYURlZmF1bHQpKSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUoY29uZmlnLnNjaGVtYSlcbiAgICAgICAgc2NoZW1hQ2xvbmUudHlwZSA9IGdldFR5cGUoc2NoZW1hRGVmYXVsdClcbiAgICAgICAgY29uZmlnLnNjaGVtYSA9IHNjaGVtYUNsb25lXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTXVsdGlwbGUoY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChpbnN0YW5jZSkpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmcsXG4gIG5vdFNldCxcbiAgY2xvbmUsIGVxdWFsXG59IGZyb20gJy4vaGVscGVycy91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUmVmUGFyc2VyIGluc3RhbmNlLlxuICovXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCA3XG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLmRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAvLyByZWdpc3RlciBkZWZpbml0aW9ucyBhcyBsb25nIGFzIHRoZXkgYXJlIG5vdCByZWZlcmVuY2VzXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3Mua2V5ICE9PSAnJHJlZicpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGRlcmVmZXJlbmNlXG4gICAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc09iamVjdChhcmdzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVmT3duZXIgPSBhcmdzLnByZXZWYWx1ZVxuICAgICAgICAgIGNvbnN0IHJlZiA9IGFyZ3MudmFsdWVbJyRyZWYnXVxuXG4gICAgICAgICAgaWYgKGlzU2V0KHJlZk93bmVyKSAmJiBpc1NldChyZWYpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyUGF0aChhcmdzLnBhdGgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjdWxhcicsIGFyZ3MucGF0aClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZk93bmVyW2FyZ3Mua2V5XSA9IHRoaXMuZGVmaW5lKHJlZilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgaXNDaXJjdWxhclBhdGggKHBhdGgpIHtcbiAgICBsZXQgb3V0cHV0ID0gZmFsc2VcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlICNcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygxKVxuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKHBhdGgubGVuZ3RoIC8gMilcbiAgICAgIGNvbnN0IGZpcnN0SGFsZiA9IHBhdGguc2xpY2UoMCwgaGFsZilcbiAgICAgIGNvbnN0IHNlY29uZEhhbGYgPSBwYXRoLnNsaWNlKGhhbGYpXG5cbiAgICAgIGlmIChlcXVhbChmaXJzdEhhbGYsIHNlY29uZEhhbGYpKSB7XG4gICAgICAgIG91dHB1dCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG5cbiAgZGVmaW5lIChyZWYpIHtcbiAgICBpZiAoIWlzU3RyaW5nKHJlZikpIHtcbiAgICAgIHJldHVybiByZWZcbiAgICB9XG5cbiAgICAvLyBkZWZpbml0aW9uc1xuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBpZiAoaXNTZXQodGhpcy5kZWZpbml0aW9uc1tyZWZdKSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcy5kZWZpbml0aW9uc1tyZWZdKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWYuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHJlZi5zdGFydHNXaXRoKCdodHRwcycpKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbClcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1lbmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCIvKipcbiAqIExpc3RzIG9mIGh0bWwgY2xhc3NlcyB1c2VkIGZvciBpY29ucy5cbiAqIEBtb2R1bGUgaWNvbnNcbiAqL1xuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZ2x5cGhpY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdseXBoaWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QnLFxuICBkZWxldGVBbGw6ICdnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoJyxcbiAgZGVsZXRlOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1taW51cycsXG4gIGFkZDogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gIG1vdmVVcDogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGJvb3RzdHJhcC1pY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJvb3RzdHJhcEljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnYmkgYmktY2FyZC1saXN0JyxcbiAgZGVsZXRlQWxsOiAnYmkgYmktdHJhc2gyJyxcbiAgZGVsZXRlOiAnYmkgYmktdHJhc2gnLFxuICBhZGQ6ICdiaSBiaS1wbHVzJyxcbiAgbW92ZVVwOiAnYmkgYmktYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2JpIGJpLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250LWF3ZXNvbWUtMyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lMyA9IHtcbiAgcHJvcGVydGllczogJ2ljb24tbGlzdCcsXG4gIGRlbGV0ZUFsbDogJ2ljb24tdHJhc2gnLFxuICBkZWxldGU6ICdpY29uLW1pbnVzJyxcbiAgYWRkOiAnaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udC1hd2Vzb21lLTQgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTQgPSB7XG4gIHByb3BlcnRpZXM6ICdmYSBmYS1saXN0JyxcbiAgZGVsZXRlQWxsOiAnZmEgZmEtdHJhc2gnLFxuICBkZWxldGU6ICdmYSBmYS1taW51cycsXG4gIGFkZDogJ2ZhIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYSBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnQtYXdlc29tZS01IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU1ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmFzIGZhLWxpc3QnLFxuICBkZWxldGVBbGw6ICdmYXMgZmEtdHJhc2gnLFxuICBkZWxldGU6ICdmYXMgZmEtbWludXMnLFxuICBhZGQ6ICdmYXMgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhcyBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmFzIGZhLWFycm93LWRvd24nXG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvciAoaWNvbnMgPSBudWxsKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKG5hbWUpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaWNvbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJY29uIChuYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNvbnN0IGljb25DbGFzc2VzID0gdGhpcy5pY29uc1tuYW1lXS5zcGxpdCgnICcpXG5cbiAgICBpZiAoaWNvbkNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWNvbkNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGRpdiB1c2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBmaWVsZHNldCBlbGVtZW50LlxuICAgKiBVc2VkIHRvIHdyYXAgY2hpbGRyZW4gc2xvdCBhbmQgcHJvdmlkZSBtb3JlIHNlbWFudGljIGh0bWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29tcGxleCBlZGl0b3JzIGxpa2UgYXJyYXlzLCBvYmplY3RzIGFuZCBtdWx0aXBsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogTGVnZW5kIGVsZW1lbnQgdXNlZCBpbiBmaWVsZHNldHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgICBpZiAoY29uZmlnLnRleHRDb250ZW50KSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KHRpdGxlKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgY2hpbGQgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBjb250cm9sc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBwcm9wZXJ0aWVzIGVkaXRpbmcgZWxlbWVudHMgbGlrZSBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIE9iamVjdEVkaXRvciBwcm9wZXJ0aWVzIHdyYXBwZXIgdmlzaWJpbGl0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGVFbGVtZW50KGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIEEgYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmICh0aGlzLmljb25zICYmIGNvbmZpZy5pY29uKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgICBjb25zdCBpY29uID0gdGhpcy5nZXRJY29uKGNvbmZpZy5pY29uKVxuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY29uZmlnLnRleHRDb250ZW50KVxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXG4gICAgICB0aGlzLmhpZGVFbGVtZW50KHRleHQpXG4gICAgfVxuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpXG5cbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJhZGRcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImRlbGV0ZSBhbGxcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ3Byb3BlcnRpZXMnLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcjogcHJvcGVydGllc0NvbnRhaW5lclxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbScsXG4gICAgICBpY29uOiAnYWRkJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJyxcbiAgICAgIGljb246ICdkZWxldGVBbGwnXG4gICAgfSlcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUFsbEJ0bilcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIGJ0bkdyb3VwLFxuICAgICAgYWRkQnRuLFxuICAgICAgZGVsZXRlQWxsQnRuLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGxlIGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycyBvcHRpb25zIHRoYXQgY2FuIGJlXG4gICAqIHNlbGVjdGVkIHdpdGggYSBzd2l0Y2hlciBjb250cm9sLiBPbmx5IG9uZSBlZGl0b3IgY2FuIGJlIGFjdGl2ZS92aXNpYmxlXG4gICAqIGF0IGEgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TXVsdGlwbGVDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBzd2l0Y2hlciA9IHRoaXMuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBzck9ubHk6IHRydWUsXG4gICAgICByZWFkT25seTogY29uZmlnLnJlYWRPbmx5XG4gICAgfSlcblxuICAgIHN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgZm9yIE51bGxFZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE51bGxDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRleHRhcmVhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJhZGlvIGdyb3VwIGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbFxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmaWVsZHNldCwgbGVnZW5kLCBsYWJlbCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNoZWNrYm94IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIHRvIHN3aXRjaCBiZXR3ZWVuIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIEFub3RoZXIgdHlwZSBvZiBlcnJvciBtZXNzYWdlIGNvbnRhaW5lciB1c2VkIGZvciBtb3JlIGNvbXBsZXggZWRpdG9ycyBsaWtlXG4gICAqIG9iamVjdCwgYXJyYXkgYW5kIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZXNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIGNvbHVtbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnamVkaS1yb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbHVtbiB0byBjb250YWluIGNvbnRlbnQgdG8gYSBzcGVjaWZpYyB3aWR0aFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wteHMtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWIgbGlzdCBpcyBhIGxpc3Qgb2YgbGlua3MgdGhhdCB0cmlnZ2VycyB0YWJzIHZpc2liaWxpdHkgbmUgYXQgdGhlIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saXN0JylcbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGFiIGlzIGEgd3JhcHBlciBmb3IgY29udGVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpbmsnKVxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmlkKVxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmspXG4gICAgcmV0dXJuIHsgbGlzdCwgbGluayB9XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGFic1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiQ29udGVudCAoKSB7XG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpXG4gICAgcmV0dXJuIHRhYkNvbnRlbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGFiIGF0dHJpYnV0ZXMgdG8gbWFrZSBpdCB0b2dnbGVhYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnamVkaS10YWItcGFuZScpXG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gZWxlbWVudCB2aXN1YWxseSBoaWRkZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICAvKipcbiAgICogUmV2ZWFscyBhIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiLyoqXG4gKiBjb25zdHJhaW5zIGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gKi9cblxuaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSA/IHNjaGVtYVByb3BlcnRpZXMgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGBQcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCIgaGFzIG5vdCBiZWVuIGRlZmluZWQgYW5kIHRoZSBzY2hlbWEgZG9lcyBub3QgYWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLmBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHJvb3ROYW1lOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQWxsT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUFsbE9mKSkge1xuICAgIHNjaGVtYUFsbE9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQW55T2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBsZXQgZXh0cmFNZXNzYWdlcyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYU9uZU9mKSkge1xuICAgIGNvbnN0IGFueU9mID0gc2NoZW1hT25lT2ZcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgZXh0cmFNZXNzYWdlcyA9IFsuLi5leHRyYU1lc3NhZ2VzLCBKU09OLnN0cmluZ2lmeShzY2hlbWEpXVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMnLFxuICAgICAgICAgIC4uLmV4dHJhTWVzc2FnZXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29uc3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUNvbnN0ID0gZ2V0U2NoZW1hQ29uc3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFDb25zdCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hQ29uc3QpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmU6ICcgKyBKU09OLnN0cmluZ2lmeShzY2hlbWFDb25zdClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29udGFpbnMsIGdldFNjaGVtYU1heENvbnRhaW5zLCBnZXRTY2hlbWFNaW5Db250YWlucyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFNaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hTWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYUNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hQ29udGFpbnMsIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYU1pbkNvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBzY2hlbWFNaW5Db250YWlucylcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGlzIGxlc3MgdGhhbiBtaW5pbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hTWluQ29udGFpbnN9YFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgJ05vIGl0ZW1zIG1hdGNoIGNvbnRhaW5zJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFNYXhDb250YWlucykpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gc2NoZW1hTWF4Q29udGFpbnMpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBleGNlZWRzIG1heGltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWFNYXhDb250YWluc31gXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYURlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gc2NoZW1hRGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRTY2hlbWFzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRGVwZW5kZW50U2NoZW1hcyA9IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hRGVwZW5kZW50U2NoZW1hcykpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWFEZXBlbmRlbnRTY2hlbWFzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWFEZXBlbmRlbnRTY2hlbWFzW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYUVudW0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFFeGNsdXNpdmVNYXhpbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWFFeGNsdXNpdmVNYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hRXhjbHVzaXZlTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWFFeGNsdXNpdmVNYXhpbXVtXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gPSBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBzY2hlbWFFeGNsdXNpdmVNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBncmVhdGVyIHRoYW4gJyArIHNjaGVtYUV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUZvcm1hdCkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IG1lc3NhZ2VzXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ2VtYWlsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHVybCddXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1dWlkJ11cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRWxzZSwgZ2V0U2NoZW1hSWYsIGdldFNjaGVtYVRoZW4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIF9pZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hSWYgPSBnZXRTY2hlbWFJZihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hRWxzZSA9IGdldFNjaGVtYUVsc2Uoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFJZikpIHtcbiAgICBpZiAobm90U2V0KHNjaGVtYVRoZW4pICYmIG5vdFNldChzY2hlbWFFbHNlKSkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYUlmLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hVGhlbikpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hVGhlbiwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLmdldEVycm9ycygpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFFbHNlKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFFbHNlLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgZWxzZUVycm9ycyA9IGVsc2VFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGVsc2VFZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChzY2hlbWFJZiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYUl0ZW1zKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpID8gc2NoZW1hUHJlZml4SXRlbXMubGVuZ3RoIDogMFxuXG4gICAgaWYgKHNjaGVtYUl0ZW1zID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ1NjaGVtYSBhbHdheXMgZmFpbHMgdmFsaWRhdGlvbi4nXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWFNYXhJdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYU1heEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYU1heEl0ZW1zICsgJyBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1heExlbmd0aCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTWF4TGVuZ3RoID0gZ2V0U2NoZW1hTWF4TGVuZ3RoKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYU1heExlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYU1heExlbmd0aClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hTWF4TGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hTWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBzY2hlbWFNYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYU1heFByb3BlcnRpZXMgKyAnIHByb3BlcnRpZXMnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hTWF4aW11bSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWFNYXhpbXVtXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW1dLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5JdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYU1pbkl0ZW1zKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hTWluSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYU1pbkl0ZW1zICsgJyBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5MZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbkxlbmd0aCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTWluTGVuZ3RoID0gZ2V0U2NoZW1hTWluTGVuZ3RoKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYU1pbkxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IHNjaGVtYU1pbkxlbmd0aClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbGVhc3QgJyArIHNjaGVtYU1pbkxlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1pblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYU1pblByb3BlcnRpZXMgPSBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYU1pblByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hTWluUHJvcGVydGllcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hTWluUHJvcGVydGllcyArICcgcHJvcGVydGllcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFNaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWFNaW5pbXVtKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYU1pbmltdW1cbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTXVsdGlwbGVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hTXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hTXVsdGlwbGVPZikpIHtcbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBzY2hlbWFNdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gc2NoZW1hTXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIHNjaGVtYU11bHRpcGxlT2ZdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU5vdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFOb3QgPSBnZXRTY2hlbWFOb3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFOb3QpKSB7XG4gICAgY29uc3Qgbm90RXJyb3JzID0gdmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgc2NoZW1hTm90LCBrZXksIHBhdGgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYU9uZU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hT25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG4gIGxldCBleHRyYU1lc3NhZ2VzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hT25lT2YpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWFPbmVPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBleHRyYU1lc3NhZ2VzID0gWy4uLmV4dHJhTWVzc2FnZXMsIEpTT04uc3RyaW5naWZ5KHNjaGVtYSldXG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICAgIC4uLmV4dHJhTWVzc2FnZXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVybiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hUGF0dGVybiA9IGdldFNjaGVtYVBhdHRlcm4oc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hUGF0dGVybikpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHNjaGVtYVBhdHRlcm4pXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBzY2hlbWFQYXR0ZXJuXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zKSkge1xuICAgIHNjaGVtYVByZWZpeEl0ZW1zLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbYEl0ZW0gJHtpbmRleH0gZmFpbHMgdmFsaWRhdGlvbi5gXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hUmVxdWlyZWQpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHNjaGVtYVJlcXVpcmVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6ICcgKyBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzSW50ZWdlciwgaXNOdWxsLCBpc051bWJlciwgaXNPYmplY3QsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG5cbiAgaWYgKHNjaGVtYVR5cGUgPT09ICdhbnknKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWFUeXBlKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWFUeXBlLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWFUeXBlXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hVHlwZV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hVW5pcXVlSXRlbXMgPSBnZXRTY2hlbWFVbmlxdWVJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYVVuaXF1ZUl0ZW1zKSAmJiBzY2hlbWFVbmlxdWVJdGVtcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdDA0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA0J1xuaW1wb3J0IGRyYWZ0MDYgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDYnXG5pbXBvcnQgZHJhZnQwNyBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNydcbmltcG9ydCBkcmFmdDIwMTkwOSBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDE5LTA5J1xuaW1wb3J0IGRyYWZ0MjAyMDEyIGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiwgY2xvbmUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdDIwMjAxMlxuXG4gICAgdGhpcy5qc29uU2NoZW1hRHJhZnRzID0ge1xuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIyc6IGRyYWZ0MDQsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNi9zY2hlbWEjJzogZHJhZnQwNixcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSMnOiBkcmFmdDA3LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMTktMDkvc2NoZW1hJzogZHJhZnQyMDE5MDksXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAyMC0xMi9zY2hlbWEnOiBkcmFmdDIwMjAxMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICBnZXRFcnJvcnMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdtZXNzYWdlcycpXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHNjaGVtYSlcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyB8fCBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=