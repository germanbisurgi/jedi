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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






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
      this.control.childrenSlot.innerHTML = '';
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
        if (_this.instance.schema.option('itemTemplate')) {
          var template = _this.instance.schema.option('itemTemplate');
          var data = {
            i0: index,
            i1: index + 1,
            value: child.getValue()
          };
          childTitle = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["compileTemplate"])(template, data);
        } else {
          childTitle = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(child.schema.title()) ? child.schema.title() + ' ' + (index + 1) : child.getKey();
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
        var buttons = _this.control.container.querySelectorAll('button');
        var active = index === _this.activeTabIndex;
        var id = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["pathToAttribute"])(child.path);
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
        if (_this.disabled) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/bootstrap3 */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes/bootstrap4 */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_bootstrap5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../themes/bootstrap5 */ "./src/themes/bootstrap5.js");
/* harmony import */ var _themes_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/theme */ "./src/themes/theme.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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

  /**
   * Initializes the editor
   * @private
   */
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
        default:
          this.theme = new _themes_theme__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isSet"])(this.instance.schema.type())) {
        this.control.container.setAttribute('data-type', this.instance.schema.type());
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
     * Updates control UI when its state changes
     * @private
     */
  }, {
    key: "refreshUI",
    value: function refreshUI() {}

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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
  return EditorStringEnumSelect;
}(_string__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorStringEnumSelect);

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
/* harmony import */ var _editors_array_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/array-nav */ "./src/editors/array-nav.js");





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
      if (this.schema.typeIs('array') && this.schema.formatIs('nav')) {
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
      this.children = [];
      var value = this.getValue();
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
        return;
      }
      value.forEach(function (itemValue, index) {
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
      if (this.schema.typeIs('boolean') && this.schema.formatIs('radio')) {
        this.ui = new _editors_boolean_enum_radio__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      } else if (this.schema.typeIs('boolean') && this.schema.formatIs('select')) {
        this.ui = new _editors_boolean_enum_select__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIs('boolean')) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");






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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
      if (this.schema.typeIsNumeric() && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]()) && this.schema.formatIs('radio')) {
        this.ui = new _editors_number_enum_radio__WEBPACK_IMPORTED_MODULE_6__["default"](this);
      } else if (this.schema.typeIsNumeric() && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]())) {
        this.ui = new _editors_number_enum_select__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIsNumeric()) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/object-grid */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/object */ "./src/editors/object.js");
/* harmony import */ var _editors_object_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editors/object-nav */ "./src/editors/object-nav.js");





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
      this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      if (this.schema.typeIs('object') && this.schema.formatIs('grid')) {
        this.ui = new _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIs('object') && this.schema.formatIs('nav')) {
        this.ui = new _editors_object_nav__WEBPACK_IMPORTED_MODULE_9__["default"](this);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.js");





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
      if (this.schema.typeIs('string') && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]()) && this.schema.formatIs('radio')) {
        this.ui = new _editors_string_enum_radio__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (this.schema.typeIs('string') && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(this.schema["enum"]())) {
        this.ui = new _editors_string_enum_select__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      } else if (this.schema.typeIs('string')) {
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
     * Creates an json instance
     * @private
     */
  }, {
    key: "createInstance",
    value: function createInstance(config) {
      var instance;

      // circular $ref are not initially dereferenced and must be defined on creation
      console.log(config);
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



/**
 * Represents a RefParser instance.
 */
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
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getPropertiesSlot", this).call(this);
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
      html.classList.add('btn-sm');
      return html;
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
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getPropertiesSlot", this).call(this);
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
      html.classList.add('btn-sm');
      return html;
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
      container.classList.add('mb-3');
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
      container.classList.add('mb-3');
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
  }]);
  return ThemeBootstrap5;
}(_theme__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ThemeBootstrap5);

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
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Theme);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Theme, [{
    key: "getEditorContainer",
    value:
    /**
     * Returns a div used to wrap the editor UI elements
     * @private
     */
    function getEditorContainer() {
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
      var html = document.createElement('legend');
      html.textContent = config.textContent;
      return html;
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
        title.classList.add('sr-only');
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
     * Container for properties editing elements like property activators
     * @private
     */
  }, {
    key: "getPropertiesSlot",
    value: function getPropertiesSlot() {
      var html = document.createElement('div');
      html.classList.add('jedi-properties-slot');
      return html;
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
     * Toggles the ObjectEditor properties wrapper visibility
     * @private
     */
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.classList.add('jedi-properties-toggle');
      return html;
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
        textContent: 'Delete item'
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
        textContent: 'Move up'
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
        textContent: 'Move down'
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
        textContent: 'Add item'
      });
      var deleteAllBtn = this.getArrayBtnDeleteAll({
        textContent: 'Delete items'
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
        srOnly: true
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
        label.classList.add('sr-only');
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
     * @private
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
  }]);
  return Theme;
}();
/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
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
 * Merges objects
 * @param {object} obj1 - The target object
 * @param {object[]} obj2 - Objects who's properties are the overrides
 * @return {object} The overwritten object
 */
function overwriteExistingProperties(obj1, obj2) {
  Object.keys(obj2).forEach(function (key) {
    if (key in obj1) {
      obj1[key] = obj2[key];
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

/**
 * constrains additionalProperties
 */



function additionalProperties(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



function allOf(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");



function anyOf(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function _const(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");


function contains(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function dependentRequired(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



function dependentSchemas(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function _enum(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function exclusiveMaximum(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function exclusiveMinimum(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function format(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


function _if(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function items(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function maxItems(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function maxLength(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function maxProperties(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function maximum(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function minItems(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function minLength(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function minProperties(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function minimum(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function multipleOf(validator, value, schema, key, path) {
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
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../schema */ "./src/schema.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


function not(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



function oneOf(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function pattern(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");



function patternProperties(validator, value, schema, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");


function prefixItems(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function required(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function type(validator, value, schema, key, path) {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");

function uniqueItems(validator, value, schema, key, path) {
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
}

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






/**
 * Represents a Validator instance.
 */
var Validator = /*#__PURE__*/function () {
  function Validator() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Validator);
    this.draft = _drafts_draft_2020_12__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.jsonSchemaDrafts = ['http://json-schema.org/draft-04/schema#', 'http://json-schema.org/draft-06/schema#', 'http://json-schema.org/draft-07/schema#', 'https://json-schema.org/draft/2019-09/schema', 'https://json-schema.org/draft/2020-12/schema'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbGxPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9hbnlPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb25zdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2VudW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9ub3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvb25lT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wcmVmaXhJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvckFycmF5TmF2IiwiX0VkaXRvckFycmF5IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsImFjdGl2ZVRhYkluZGV4IiwicmVmcmVzaFVJIiwiX3RoaXMiLCJjb250cm9sIiwiY2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwicm93IiwidGhlbWUiLCJnZXRSb3ciLCJjb2xzIiwiaW5zdGFuY2UiLCJzY2hlbWEiLCJvcHRpb24iLCJ0YWJMaXN0Q29sIiwiZ2V0Q29sIiwidGFiQ29udGVudENvbCIsInRhYkNvbnRlbnQiLCJnZXRUYWJDb250ZW50IiwidGFiTGlzdCIsImdldFRhYkxpc3QiLCJzdGFja2VkIiwidHlwZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmRleCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImRlbGV0ZUJ0biIsImdldERlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBCdG4iLCJnZXRNb3ZlVXBJdGVtQnRuIiwibW92ZURvd25CdG4iLCJnZXRNb3ZlRG93bkl0ZW1CdG4iLCJ1aSIsImFycmF5QWN0aW9ucyIsImNvbnRhaW5lciIsImNoaWxkVGl0bGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpMCIsImkxIiwiZ2V0VmFsdWUiLCJjb21waWxlVGVtcGxhdGUiLCJpc1NldCIsInRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdGgiLCJzcGxpdCIsImplZGkiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwiZGVsZXRlSXRlbSIsInRvSW5kZXgiLCJtb3ZlIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3RpdmUiLCJpZCIsInBhdGhUb0F0dHJpYnV0ZSIsInRhYiIsImdldFRhYiIsImxpc3QiLCJzZXRUYWJQYW5lQXR0cmlidXRlcyIsImRpc2FibGVkIiwiZGlzYWJsZSIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImVuYWJsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkVkaXRvckFycmF5IiwiX0VkaXRvciIsImJ1aWxkIiwiZ2V0QXJyYXlDb250cm9sIiwic3JPbmx5IiwiZGVzY3JpcHRpb24iLCJhZGRCdG4iLCJhZGRJdGVtIiwiZGVsZXRlQWxsQnRuIiwiY29uZmlybSIsInNldFZhbHVlIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwibWVzc2FnZSIsImdldEFsZXJ0Iiwic2FuaXRpemUiLCJpc0FycmF5IiwiX3RoaXMyIiwiRWRpdG9yIiwiRWRpdG9yQm9vbGVhbkVudW1SYWRpbyIsIl9FZGl0b3JCb29sZWFuIiwiZ2V0UmFkaW9zQ29udHJvbCIsInZhbHVlcyIsInRpdGxlcyIsImxhYmVsIiwicmFkaW9zIiwicmFkaW8iLCJyYWRpb1ZhbHVlIiwiY2hlY2tlZCIsIkVkaXRvckJvb2xlYW4iLCJFZGl0b3JCb29sZWFuRW51bVNlbGVjdCIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhbHdheXNTaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lIiwibWVzc2FnZXMiLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsImRlc3Ryb3kiLCJfdGhpczMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiRWRpdG9yTXVsdGlwbGUiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwic3dpdGNoSW5zdGFuY2UiLCJvbGRJbnN0YW5jZSIsImluc3RhbmNlcyIsImxhc3RJbmRleCIsImFjdGl2ZUluc3RhbmNlIiwibXVsdGlwbGVFcnJvcnMiLCJmaWx0ZXIiLCJhY3RpdmVJbnN0YW5jZUVycm9ycyIsIkVkaXRvck51bGwiLCJnZXROdWxsQ29udHJvbCIsImZvcm1hdElzIiwiRWRpdG9yTnVtYmVyRW51bVJhZGlvIiwiX0VkaXRvck51bWJlciIsIkVkaXRvck51bWJlciIsIkVkaXRvck51bWJlckVudW1TZWxlY3QiLCJnZXRJbnB1dENvbnRyb2wiLCJ0eXBlSXMiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIkVkaXRvck9iamVjdEdyaWQiLCJfRWRpdG9yT2JqZWN0IiwicmVmcmVzaEVkaXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaXNBY3RpdmUiLCJjb2x1bW5zIiwib2Zmc2V0IiwiY29sIiwiRWRpdG9yT2JqZWN0IiwiRWRpdG9yT2JqZWN0TmF2IiwiZ2V0T2JqZWN0Q29udHJvbCIsImVkaXRhYmxlUHJvcGVydGllcyIsImVxdWFsIiwiYWRkUHJvcGVydHlCdG4iLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJwcm9wZXJ0eU5hbWVFbXB0eSIsImxlbmd0aCIsInByb3BlcnR5RXhpc3QiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInByb3BlcnRpZXNBY3RpdmF0b3JzIiwiY2hlY2JveENvbnRyb2wiLCJjaGVja2JveCIsImhhc093biIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwiZGVhY3RpdmF0ZSIsInByb3BlcnRpZXNUb2dnbGUiLCJFZGl0b3JTdHJpbmdFbnVtUmFkaW8iLCJfRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nRW51bVNlbGVjdCIsImlucHV0VHlwZXMiLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJpbmNsdWRlcyIsImZvcm1hdCIsIlN0cmluZyIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJlbWl0IiwibGlzdGVuZXIiLCJJbnN0YW5jZUFycmF5IiwiX0luc3RhbmNlIiwic2V0VUkiLCJwcmVwYXJlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsIml0ZW1zIiwiaGFzUHJlZml4SXRlbXNTY2hlbWEiLCJwcmVmaXhJdGVtcyIsIm5vdFNldCIsImdldFR5cGUiLCJjcmVhdGVJbnN0YW5jZSIsInBhcmVudCIsImZyb21JbmRleCIsImNsb25lIiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkluc3RhbmNlQm9vbGVhbiIsImNvbmZpZyIsInVuZGVmaW5lZCIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJkZWZhdWx0RXJyb3JzIiwidmFsaWRhdG9yIiwidmFsaWREZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJJbnN0YW5jZU11bHRpcGxlIiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFDbG9uZSIsInRoZW5TY2hlbWEiLCJ0aGVuIiwibWVyZ2VEZWVwIiwiZWxzZVNjaGVtYSIsImFueU9mIiwib25lT2YiLCJzY2hlbWFzT2YiLCJjbG9uZVNjaGVtYSIsIl9zY2hlbWEkb3B0aW9ucyIsIl9zY2hlbWEkb3B0aW9uczIiLCJfb2JqZWN0U3ByZWFkIiwiYWxsT2YiLCJtZXJnZUFsbE9mIiwibWVyZ2VkIiwiYWxsT2ZTY2hlbWEiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0Iiwic3dpdGNoSWYiLCJuZXdJbmRleCIsImlmSW5kZXgiLCJnZXRJZkluZGV4IiwicHJlVmFsdWUiLCJmaW5hbFZhbHVlIiwib3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsInJlZlBhcnNlciIsImlmRXJyb3JzIiwiZ2V0Rml0dGVzdEluZGV4IiwiZml0dGVzdEluZGV4IiwiY2hhbXBpb25FcnJvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5zdGFuY2VFcnJvcnMiLCJlcnIiLCJlIiwiZiIsImRpZmZlcmVudCIsIkluc3RhbmNlTnVsbCIsIkluc3RhbmNlTnVtYmVyIiwidHlwZUlzTnVtZXJpYyIsIkluc3RhbmNlT2JqZWN0IiwicHJvcGVydGllcyIsInJlZnJlc2hJbnN0YW5jZXMiLCJwcm9wZXJ0eSIsInJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImlzTm90UmVxdWlyZWQiLCJzaG91bGRTdGFydERlYWN0aXZhdGVkIiwiZGVhY3RpdmF0ZVByb3BlcnRpZXMiLCJkZWxldGVDaGlsZCIsImkiLCJnZXRDaGlsZCIsImZpbmQiLCJfdGhpczQiLCJvbGRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsIkluc3RhbmNlU3RyaW5nIiwiYXNzaWduIiwic2hvd1JlcXVpcmVkT25seSIsInJvb3QiLCJWYWxpZGF0b3IiLCJSZWZQYXJzZXIiLCJYTUxIdHRwUmVxdWVzdCIsImRlcmVmZXJlbmNlIiwiU2NoZW1hIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImRlZmluZSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl90aGlzNSIsIml0ZXJhdGlvbnMiLCJkZWZpbml0aW9ucyIsInRyYXZlcnNlIiwiYXJncyIsInJlZk93bmVyIiwicHJldlZhbHVlIiwicmVmIiwiaXNDaXJjdWxhclBhdGgiLCJvdXRwdXQiLCJzdWJzdHJpbmciLCJoYWxmIiwiY2VpbCIsImZpcnN0SGFsZiIsInNlY29uZEhhbGYiLCJpc1N0cmluZyIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImlzQm9vbGVhbiIsIl9jb25zdCIsImNvbnRhaW5zIiwiX2RlZmF1bHQiLCJkZXBlbmRlbnRTY2hlbWFzIiwiX2Vsc2UiLCJfZW51bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiX2lmIiwibWF4aW11bSIsIm1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4SXRlbXMiLCJtYXhMZW5ndGgiLCJtYXhQcm9wZXJ0aWVzIiwibWluaW11bSIsIm1pbkNvbnRhaW5zIiwibWluSXRlbXMiLCJtaW5MZW5ndGgiLCJtaW5Qcm9wZXJ0aWVzIiwibXVsdGlwbGVPZiIsIm5vdCIsInBhdHRlcm4iLCJwYXR0ZXJuUHJvcGVydGllcyIsInJlYWRPbmx5IiwiU2V0IiwidW5pcXVlSXRlbXMiLCJfVGhlbWUiLCJnZXRMZWdlbmQiLCJodG1sIiwiZ2V0Q2FyZCIsImNhcmQiLCJnZXRDYXJkSGVhZGVyIiwiaGVhZGVyIiwiZ2V0Q2FyZEJvZHkiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRCdG5Hcm91cCIsImZpZWxkc2V0IiwibGFiZWxzIiwibGFiZWxUZXh0cyIsInJhZGlvQ29udHJvbHMiLCJyYWRpb0NvbnRyb2wiLCJmb3JtR3JvdXAiLCJsYWJlbFRleHQiLCJnZXRTd2l0Y2hlciIsInJlbW92ZSIsInhzIiwibWQiLCJvZmZzZXRNZCIsImxpbmsiLCJlbGVtZW50IiwiZ2V0RGVzY3JpcHRpb24iLCJnZXRDb2x1bW5DbGFzcyIsInNpemUiLCJnZXRDb250cm9sU2xvdCIsImNvbnRyb2xTbG90IiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RmllbGRzZXQiLCJ0ZXh0Q29udGVudCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwibGVnZW5kIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwidGhpbmciLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN0ciIsIlJlZ0V4cCIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInNvcnRPYmplY3QiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiYSIsImIiLCJpc051bGwiLCJBcnJheSIsIl90eXBlb2YiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iajEiLCJvYmoyIiwiZ2V0VmFsdWVCeUpTT05QYXRoIiwidGVzdCIsInBhcnNlSW50IiwibWF0Y2giLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJleHRyYU1lc3NhZ2VzIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJpbnZhbGlkIiwiY291bnRlciIsImNvbnRhaW5zRWRpdG9yIiwiY29udGFpbnNFcnJvcnMiLCJjb250YWluc0ludmFsaWQiLCJtaW5Db250YWluc0ludmFsaWQiLCJtYXhDb250YWluc0ludmFsaWQiLCJqb2luIiwiZGVwZW5kZW50U2NoZW1hIiwidG1wRWRpdG9yIiwidG1wRXJyb3JzIiwic29tZSIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCIsInByb3BlcnRpZXNDb3VudCIsImNvbXB1dGVkTWF4aW11bSIsImNvbXB1dGVkTWluaW11bSIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwibm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsInByb3BlcnR5TmFtZSIsImVkaXRvckVycm9ycyIsIml0ZW1TY2hlbWEiLCJ0eXBlcyIsIm51bWJlciIsImludGVnZXIiLCJib29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsImpzb25TY2hlbWFEcmFmdHMiLCJzY2hlbWFFcnJvcnMi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LEdBQUcsQ0FBQyxJQUFJL0osTUFBTSxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDeEQ0ZixZQUFZLEdBQUcsQ0FDYjtVQUNFbFosUUFBUSxFQUFFM0csTUFBTSxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO1VBQ25DcUMsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBT3VkLFlBQVk7SUFDckI7RUFBQztFQUFBLE9BQUFoTixTQUFBO0FBQUE7QUFHWUEsd0VBQVMsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXlOYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JBcnJheVxuICovXG5jbGFzcyBFZGl0b3JBcnJheU5hdiBleHRlbmRzIEVkaXRvckFycmF5IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ25hdicpLmNvbHMgfHwgM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS50eXBlXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBsZXQgY2hpbGRUaXRsZVxuXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdpdGVtVGVtcGxhdGUnKSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaXRlbVRlbXBsYXRlJylcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpMDogaW5kZXgsXG4gICAgICAgICAgaTE6IChpbmRleCArIDEpLFxuICAgICAgICAgIHZhbHVlOiBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRUaXRsZSA9IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkVGl0bGUgPSBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSArICcgJyArIChpbmRleCArIDEpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgIH1cblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuXG4gICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgIHRpdGxlOiBjaGlsZFRpdGxlLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICB9KVxuXG4gICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlOYXZcbiIsIi8qIGdsb2JhbCBjb25maXJtICovXG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JBcnJheSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuZGVsZXRlQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlIGFsbCcpKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoW10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vdGhlbWVzL3RoZW1lJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGUoKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBlZGl0b3IgY29udHJvbCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGQgKCkge31cblxuICAvKipcbiAgICogVXBkYXRlcyBjb250cm9sIFVJIHdoZW4gaXRzIHN0YXRlIGNoYW5nZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTXVsdGlwbGUgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRNdWx0aXBsZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IG9sZEluc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5sYXN0SW5kZXhdXG5cbiAgICBpZiAob2xkSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZChvbGRJbnN0YW5jZS51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmluZGV4XG5cbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgY29uc3QgbXVsdGlwbGVFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IucGF0aCA9PT0gdGhpcy5wYXRoKVxuICAgIGNvbnN0IGFjdGl2ZUluc3RhbmNlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggIT09IHRoaXMucGF0aClcbiAgICBzdXBlci5zaG93VmFsaWRhdGlvbkVycm9ycyhtdWx0aXBsZUVycm9ycylcbiAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLnNob3dWYWxpZGF0aW9uRXJyb3JzKGFjdGl2ZUluc3RhbmNlRXJyb3JzKVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck51bWJlckVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXIgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlSXMoJ2ludGVnZXInKSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlclxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0R3JpZCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3RHcmlkIGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gY2hpbGQuc2NoZW1hLm9wdGlvbignY29sdW1ucycpXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGNoaWxkLnNjaGVtYS5vcHRpb24oJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoY2hpbGQuc2NoZW1hLm9wdGlvbignbmV3Um93JykpIHtcbiAgICAgICAgICByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RHcmlkXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3ROYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0TmF2IGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS5jb2xzIHx8IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2Jykuc3RhY2tlZCxcbiAgICAgIHR5cGU6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3ROYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRPYmplY3RDb250cm9sKHtcbiAgICAgIHRpdGxlOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCksXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IGtleS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHNjaGVtYSA9IHsgdHlwZTogJ2FueScgfVxuXG4gICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKClcblxuICAgICAgaWYgKGlzU2V0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBhZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwodGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKSArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgIGNvbnN0IGNoZWNib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBsYWJlbDogaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVjYm94Q29udHJvbC5pbnB1dFxuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBoYXNPd24odGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpLCBjaGlsZC5nZXRLZXkoKSlcblxuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBpc1JlcXVpcmVkIHx8IGlzRGVwZW5kZW50UmVxdWlyZWQgfHwgZGlzYWJsZWRcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5hcHBlbmRDaGlsZChjaGVjYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc1RvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0XG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ0VudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZyBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCd0ZXh0YXJlYScpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0KCkgOiAndGV4dCcsXG4gICAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2NvbG9yJykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYW4gRXZlbnRFbWl0dGVyIGluc3RhbmNlLlxuICovXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVudCB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgZW1pdHRlZFxuICAgKi9cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5LCBub3RTZXQsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBFZGl0b3JBcnJheU5hdiBmcm9tICcuLi9lZGl0b3JzL2FycmF5LW5hdidcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYXJyYXknKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnbmF2JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXlOYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheSh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGxldCBzY2hlbWFcblxuICAgIHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHt9XG5cbiAgICBjb25zdCBoYXNQcmVmaXhJdGVtc1NjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKCkpICYmIGlzU2V0KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKClbaXRlbXNDb3VudF0pXG5cbiAgICBpZiAoaGFzUHJlZml4SXRlbXNTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKClbaXRlbXNDb3VudF1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qoc2NoZW1hKSAmJiBub3RTZXQoc2NoZW1hLnR5cGUpKSB7XG4gICAgICBzY2hlbWEudHlwZSA9IGlzU2V0KHZhbHVlKSA/IGdldFR5cGUodmFsdWUpIDogJ2FueSdcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICBjaGlsZC5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VBcnJheVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQm9vbGVhbiBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogdG8gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge31cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgbGV0IHZhbHVlXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICAvLyBpZiAodGhpcy5zY2hlbWEuZW51bSgpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKVswXSkpIHtcbiAgICAvLyAgIHRoaXMudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtKClbMF1cbiAgICAvLyB9XG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgIXRoaXMuc2NoZW1hLmVudW0oKS5pbmNsdWRlcyh0aGlzLnNjaGVtYS5kZWZhdWx0KCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0RXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5zY2hlbWEuZGVmYXVsdCgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICAgICAgY29uc3QgdmFsaWREZWZhdWx0ID0gZGVmYXVsdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHZhbGlkRGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdmFsdWVcbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgdHJpZ2dlcnNDaGFuZ2UgPSB0cnVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5lbWl0KCdzZXQtdmFsdWUnKVxuXG4gICAgaWYgKHRyaWdnZXJzQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBjaGlsZCdzIGluc3RhbmNlIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck11bHRpcGxlIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgbWVyZ2VEZWVwLFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIGlzT2JqZWN0LFxuICBub3RTZXQsIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllc1xufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU11bHRpcGxlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JNdWx0aXBsZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICB0aGlzLnRoZW5TY2hlbWEgPSB0aGlzLnNjaGVtYS50aGVuKCkgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCB0aGlzLnNjaGVtYS50aGVuKCkpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcbiAgICAgIHRoaXMuZWxzZVNjaGVtYSA9IHRoaXMuc2NoZW1hLmVsc2UoKSA/IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUsIHRoaXMuc2NoZW1hLmVsc2UoKSkgOiBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lKVxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhpcy50aGVuU2NoZW1hKVxuICAgICAgdGhpcy5zY2hlbWFzLnB1c2godGhpcy5lbHNlU2NoZW1hKVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBzY2hlbWEuaWZcbiAgICAgICAgZGVsZXRlIHNjaGVtYS50aGVuXG4gICAgICAgIGRlbGV0ZSBzY2hlbWEuZWxzZVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFswLCAxXVxuICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbJ3RoZW4nLCAnZWxzZSddXG4gICAgfSBlbHNlIGlmIChpc1NldCh0aGlzLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldCh0aGlzLnNjaGVtYS5vbmVPZigpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgPyB0aGlzLnNjaGVtYS5hbnlPZigpIDogdGhpcy5zY2hlbWEub25lT2YoKVxuICAgICAgY29uc3QgY2xvbmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb25lT2YnXVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5jbG9uZVNjaGVtYSwgLi4uc2NoZW1hIH1cblxuICAgICAgICAvLyBtZXJnZSBhbGxPZlxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hLmFsbE9mKSAmJiBzY2hlbWEub3B0aW9ucz8ubWVyZ2VBbGxPZikge1xuICAgICAgICAgIGxldCBtZXJnZWQgPSB7fVxuXG4gICAgICAgICAgc2NoZW1hLmFsbE9mLmZvckVhY2goKGFsbE9mU2NoZW1hKSA9PiB7XG4gICAgICAgICAgICBtZXJnZWQgPSBtZXJnZURlZXAobWVyZ2VkLCBhbGxPZlNjaGVtYSlcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2NoZW1hID0gbWVyZ2VkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoY2xvbmVTY2hlbWEudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gY2xvbmVTY2hlbWEudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hLm9wdGlvbnM/LnN3aXRjaGVyVGl0bGUgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUoKSkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUoKS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCAhdGhpcy5zY2hlbWEudHlwZSgpKSB7XG4gICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdzdHJpbmcnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVtYmVyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2ludGVnZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYm9vbGVhbicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdhcnJheScgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnU3RyaW5nJywgJ051bWJlcicsICdJbnRlZ2VyJywgJ0Jvb2xlYW4nLCAnQXJyYXknLCAnT2JqZWN0JywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgLy8gSW5zdGFuY2VzXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICAgIH0pXG5cbiAgICAgIGluc3RhbmNlLnVucmVnaXN0ZXIoKVxuXG4gICAgICBpbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgICAgIHRoaXMuc3dpdGNoSWYoKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgIGNvbnN0IHNldFZhbHVlID0gaXNPYmplY3Qoc2NoZW1hQ2xvbmUpXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZXNbMF0pKSB7XG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKDAsIGZhbHNlLCBzZXRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAobmV3SW5kZXgsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSwgc2V0VmFsdWUgPSB0cnVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMuaW5kZXhdXG5cbiAgICBpZiAoc2V0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB0cmlnZ2Vyc0NoYW5nZSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hJZiAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICBjb25zdCBpZkluZGV4ID0gdGhpcy5nZXRJZkluZGV4KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IHByZVZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGlmSW5kZXgpXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMoY3VycmVudFZhbHVlLCBwcmVWYWx1ZSlcbiAgICAgIHRoaXMuc2V0VmFsdWUoZmluYWxWYWx1ZSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0SWZJbmRleCAodmFsdWUpIHtcbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiB0aGlzLnNjaGVtYS5pZigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcbiAgICByZXR1cm4gaWZFcnJvcnMubGVuZ3RoID09PSAwID8gMCA6IDFcbiAgfVxuXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgaWYgKGluc3RhbmNlLmluc3RhbmNlcykge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgLy8gaWYgdmFsdWUgbWF0Y2hlcyB0aGUgYWN0aXZlIGluc3RhbmNlIHR5cGUgc2V0IHRoZSB2YWx1ZS4gRWxzZSBzd2l0Y2ggdG8gdGhlIGZpcnN0XG4gICAgLy8gaW5zdGFuY2UgdGhhdCBtYXRjaCB0aGUgdmFsdWUuXG4gICAgaWYgKGRpZmZlcmVudCh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCksIHZhbHVlKSkge1xuICAgICAgbGV0IGZpdHRlc3RJbmRleFxuXG4gICAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRJZkluZGV4KHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gdGhpcy5nZXRGaXR0ZXN0SW5kZXgodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlSW5zdGFuY2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VNdWx0aXBsZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVsbCBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVsbCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVsbCh0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVsbFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVtYmVyIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bWJlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGdldFR5cGUsIGlzT2JqZWN0LCBoYXNPd24gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZU9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlT2JqZWN0IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3QodGhpcylcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdncmlkJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnbmF2JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXMoKVtrZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gaXNTZXQodGhpcy5zY2hlbWEucmVxdWlyZWQoKSkgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQoKS5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKClcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBpc05vdFJlcXVpcmVkID0gIXRoaXMuaXNSZXF1aXJlZChrZXkpXG4gICAgY29uc3Qgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCA9IHRoaXMuamVkaS5vcHRpb25zLmRlYWN0aXZhdGVQcm9wZXJ0aWVzIHx8IHRoaXMuc2NoZW1hLm9wdGlvbignZGVhY3RpdmF0ZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGlzTm90UmVxdWlyZWQgJiYgc2hvdWxkU3RhcnREZWFjdGl2YXRlZCkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShpbml0aWFsVmFsdWUpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGVmYXVsdDogaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VPYmplY3RcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ3JhZGlvJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpICYmIGlzU2V0KHRoaXMuc2NoZW1hLmVudW0oKSkpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmcodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VTdHJpbmdcbiIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdGlvbi92YWxpZGF0b3InXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBJbnN0YW5jZU11bHRpcGxlIGZyb20gJy4vaW5zdGFuY2VzL211bHRpcGxlJ1xuaW1wb3J0IEluc3RhbmNlQm9vbGVhbiBmcm9tICcuL2luc3RhbmNlcy9ib29sZWFuJ1xuaW1wb3J0IEluc3RhbmNlT2JqZWN0IGZyb20gJy4vaW5zdGFuY2VzL29iamVjdCdcbmltcG9ydCBJbnN0YW5jZUFycmF5IGZyb20gJy4vaW5zdGFuY2VzL2FycmF5J1xuaW1wb3J0IEluc3RhbmNlU3RyaW5nIGZyb20gJy4vaW5zdGFuY2VzL3N0cmluZydcbmltcG9ydCBJbnN0YW5jZU51bWJlciBmcm9tICcuL2luc3RhbmNlcy9udW1iZXInXG5pbXBvcnQgSW5zdGFuY2VOdWxsIGZyb20gJy4vaW5zdGFuY2VzL251bGwnXG5pbXBvcnQgUmVmUGFyc2VyIGZyb20gJy4vcmVmLXBhcnNlcidcbmltcG9ydCB7IGdldFR5cGUsIGhhc093biwgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEplZGkgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIEplZGkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gb3B0aW9ucy5zY2hlbWEgLSBBIEpTT04gc2NoZW1hXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5pc0VkaXRvciAtIEdlbmVyYXRlcyBVSSBjb250cm9scyB0byBlZGl0IHRoZSBKU09OIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb250YWluZXIgLSBXaGVyZSB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aGVtZSAtIEhvdyB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBhbHdheXNTaG93RXJyb3JzOiBmYWxzZSxcbiAgICAgIHNob3dSZXF1aXJlZE9ubHk6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHJlZlBhcnNlcjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICAvKipcbiAgICAgKiBSb290cyBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3ROYW1lID0gJyMnXG5cbiAgICAvKipcbiAgICAgKiBTZXBhcmF0b3Igc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXRoU2VwYXJhdG9yID0gJy8nXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHJlZ2lzdGVyZWQgaW5zdGFuY2VzXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5zdGFuY2VzID0ge31cblxuICAgIC8qKlxuICAgICAqIFRoZSByb290IGVkaXRvclxuICAgICAqIEB0eXBlIHtJbnN0YW5jZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucm9vdCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGdlbmVyYXRlIGVkaXRvcnMgdXNlciBpbnRlcmZhY2VzXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSBWYWxpZGF0b3IgaW5zdGFuY2UgdXNlZCB0byB2YWxpZGF0ZSBpbnN0YW5jZSB2YWx1ZXNcbiAgICAgKiBAdHlwZSB7VmFsaWRhdG9yfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3IgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBBIGpzb24gc2NoZW1hIHVzZWRcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBSZWZQYXJzZXIgaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7UmVmUGFyc2VyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIpIHtcbiAgICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3RcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMub3B0aW9ucy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuc3RhcnRWYWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBsZXQgaW5zdGFuY2VcblxuICAgIC8vIGNpcmN1bGFyICRyZWYgYXJlIG5vdCBpbml0aWFsbHkgZGVyZWZlcmVuY2VkIGFuZCBtdXN0IGJlIGRlZmluZWQgb24gY3JlYXRpb25cbiAgICBjb25zb2xlLmxvZyhjb25maWcpXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VCb29sZWFuKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZUFycmF5KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZVN0cmluZyhjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZU51bWJlcihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuaWYoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgc2NoZW1hQ2xvbmUudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBzY2hlbWFDbG9uZVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZU11bHRpcGxlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLmdldEVycm9ycygpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBSZWZQYXJzZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1lbmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lIGluc3RhbmNlLlxuICovXG5jbGFzcyBUaGVtZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZGl2IHVzZWQgdG8gd3JhcCB0aGUgZWRpdG9yIFVJIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGZpZWxkc2V0IGVsZW1lbnQuXG4gICAqIFVzZWQgdG8gd3JhcCBjaGlsZHJlbiBzbG90IGFuZCBwcm92aWRlIG1vcmUgc2VtYW50aWMgaHRtbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb21wbGV4IGVkaXRvcnMgbGlrZSBhcnJheXMsIG9iamVjdHMgYW5kIG11bHRpcGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBMZWdlbmQgZWxlbWVudCB1c2VkIGluIGZpZWxkc2V0c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWFkZXIgZm9yIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkSGVhZGVyIChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFycmF5IHNwZWNpZmljIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBjaGlsZCBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGNvbnRyb2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBPYmplY3RFZGl0b3IgcHJvcGVydGllcyB3cmFwcGVyIHZpc2liaWxpdHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogQSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGh0bWwudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJhZGRcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImRlbGV0ZSBhbGxcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nXG4gICAgfSlcblxuICAgIGRlbGV0ZUl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgcmV0dXJuIGRlbGV0ZUl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgdXBcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICB9KVxuXG4gICAgbW92ZVVwSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgcmV0dXJuIG1vdmVVcEl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgZG93blwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlRG93bkl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IG1vdmVEb3duSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJ1xuICAgIH0pXG5cbiAgICBtb3ZlRG93bkl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgcmV0dXJuIG1vdmVEb3duSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRoZSBlZGl0b3IgZGVzY3JpcHRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3QgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBFYWNoIGVkaXRvciBpcyBtYXBwZWQgdG8gYW4gb2JqZWN0IGluc3RhbmNlIHByb3BlcnR5LlxuICAgKiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCwgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZCBkZXBlbmRpbmcgb24gY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSdcbiAgICB9KVxuXG4gICAgY29uc3QgZGVsZXRlQWxsQnRuID0gdGhpcy5nZXRBcnJheUJ0bkRlbGV0ZUFsbCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtcydcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQWxsQnRuKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBkZWxldGVBbGxCdG4sXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbGUgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnMgdGhhdCBjYW4gYmVcbiAgICogc2VsZWN0ZWQgd2l0aCBhIHN3aXRjaGVyIGNvbnRyb2wuIE9ubHkgb25lIGVkaXRvciBjYW4gYmUgYWN0aXZlL3Zpc2libGVcbiAgICogYXQgYSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGV4dGFyZWFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSByYWRpbyBncm91cCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcubGFiZWxcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICBjb25zdCByYWRpb0NvbnRyb2xzID0gW11cbiAgICBjb25zdCByYWRpb3MgPSBbXVxuICAgIGNvbnN0IGxhYmVscyA9IFtdXG4gICAgY29uc3QgbGFiZWxUZXh0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbHMucHVzaChyYWRpb0NvbnRyb2wpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvcy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgY2hlY2tib3ggY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29sdW1uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdqZWRpLXJvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29sdW1uIHRvIGNvbnRhaW4gY29udGVudCB0byBhIHNwZWNpZmljIHdpZHRoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgLyoqXG4gICAqIFRhYiBsaXN0IGlzIGEgbGlzdCBvZiBsaW5rcyB0aGF0IHRyaWdnZXJzIHRhYnMgdmlzaWJpbGl0eSBuZSBhdCB0aGUgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICAvKipcbiAgICogQSBUYWIgaXMgYSB3cmFwcGVyIGZvciBjb250ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGluaycpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuaWQpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGluaylcbiAgICByZXR1cm4geyBsaXN0LCBsaW5rIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0YWJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJDb250ZW50ICgpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50JylcbiAgICByZXR1cm4gdGFiQ29udGVudFxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0YWIgYXR0cmlidXRlcyB0byBtYWtlIGl0IHRvZ2dsZWFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqZWRpLXRhYi1wYW5lJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiLyoqXG4gKiBVdGlscy5cbiAqIEBtb2R1bGUgVXRpbHNcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGVzY2FwZWQgcmVnZXhwXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIHJlZ2V4cFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpIC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG4vKipcbiAqIE11bHRpcGxlIHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaW5kIC0gVGhlIHBhcnQgdG8gYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlIC0gVGhlIHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbCAoc3RyLCBmaW5kLCByZXBsYWNlKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSlcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEganNvbiBwYXRoIHRvIGJlIHVzZWQgYXMgYW4gaHRtbCBhdHRyaWJ1dGUgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIGpzb24gcGF0aFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aFRvQXR0cmlidXRlIChwYXRoKSB7XG4gIHJldHVybiByZXBsYWNlQWxsKHJlcGxhY2VBbGwocGF0aCwgJyMnLCAncm9vdCcpLCAnLycsICctJylcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIFRoZSBwcm9wZXJ0eVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxufVxuXG4vKipcbiAqIFNvcnQgb2JqZWN0IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydE9iamVjdCAob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwge30pXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIHBhc3NlZCBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbCAoYSwgYikge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGRpZmZlcmVudFxuICogQHBhcmFtIHsqfSBhIC0gVmFsdWUgQVxuICogQHBhcmFtIHsqfSBiIC0gVmFsdWUgQlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVudCAoYSwgYikge1xuICByZXR1cm4gIWVxdWFsKGEsIGIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgbnVsbFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZXQgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RTZXQgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBudW1iZXJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlciAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBpbnRlZ2VyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyICh2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgc3RyaW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBib29sZWFuXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBhcnJheVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIG9iamVjdFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0ICh2YWx1ZSkge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGEgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHR5cGUgb2YgdGhlIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlICh2YWx1ZSkge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuLyoqXG4gKiBNZXJnZXMgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdFtdfSBzb3VyY2VzIC0gT2JqZWN0cyB0byBiZSBtZXJnZWQgaW50byB0aGUgdGFyZ2V0IG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBUaGUgbWVyZ2VkIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwICh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cblxuLyoqXG4gKiBNZXJnZXMgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlICh0ZW1wbGF0ZSwgZGF0YSkge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUJ5SlNPTlBhdGgoZGF0YSwgcGF0aClcbiAgfSlcbn1cbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYWxsT2YoKSkpIHtcbiAgICBzY2hlbWEuYWxsT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbnlPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEuYW55T2YoKSkpIHtcbiAgICBjb25zdCBhbnlPZiA9IHNjaGVtYS5hbnlPZigpXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgICAgICAgICAuLi5leHRyYU1lc3NhZ2VzXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmNvbnRhaW5zKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluc0VkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuY29udGFpbnMoKSwgc3RhcnRWYWx1ZTogaXRlbSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1pbkNvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IHNjaGVtYS5taW5Db250YWlucygpKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gaXMgbGVzcyB0aGFuIG1pbmltdW0gY29udGFpbnMgY291bnQgb2YgJHtzY2hlbWEubWluQ29udGFpbnMoKX1gXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAnTm8gaXRlbXMgbWF0Y2ggY29udGFpbnMnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5tYXhDb250YWlucygpKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBzY2hlbWEubWF4Q29udGFpbnMoKSlcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGBDb250YWlucyBtYXRjaCBjb3VudCAke2NvdW50ZXJ9IGV4Y2VlZHMgbWF4aW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5tYXhDb250YWlucygpfWBcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKSkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFNjaGVtYXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2VudW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGlmIChpc1NldChzY2hlbWEuZW51bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hLmVudW0oKS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczogJyArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5lbnVtKCkpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+PSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5mb3JtYXQoKSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IG1lc3NhZ2VzXG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygnZW1haWwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXJsJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHVybCddXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5mb3JtYXRJcygndXVpZCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCB1dWlkJ11cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaXNTZXQocmVnZXhwKSAmJiAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0LCBub3RTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIF9pZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmlmKCkpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWEudGhlbigpKSAmJiBub3RTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS50aGVuKCkpKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS50aGVuKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLmVsc2UoKSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmVsc2UoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWEuaWYoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIC8vIHRvZG8gaWYgYXJyYXkgbGVuZ3RoIGlzID4gcHJlZml4SXRlbXMubGVuZ3RoXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuaXRlbXMoKSkpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSA/IHNjaGVtYS5wcmVmaXhJdGVtcygpLmxlbmd0aCA6IDBcblxuICAgIGlmIChzY2hlbWEuaXRlbXMoKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydTY2hlbWEgYWx3YXlzIGZhaWxzIHZhbGlkYXRpb24uJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4SXRlbXMoKSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhJdGVtcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcygpICsgJyBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heExlbmd0aCgpKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heExlbmd0aCgpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4TGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1heGltdW0oKSkpIHtcbiAgICBjb25zdCBjb21wdXRlZE1heGltdW0gPSBzY2hlbWEubWF4aW11bSgpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA+IGNvbXB1dGVkTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgbGVzcyB0aGFuICcgKyBjb21wdXRlZE1heGltdW1dLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5JdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pbkl0ZW1zKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKCkgKyAnIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgc2NoZW1hLm1pblByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pblByb3BlcnRpZXMoKSArICcgcHJvcGVydGllcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluaW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5pbXVtKCkpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRNaW5pbXVtID0gc2NoZW1hLm1pbmltdW0oKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBjb21wdXRlZE1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBjb21wdXRlZE1pbmltdW1dLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBub3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5ub3QoKSkpIHtcbiAgICBjb25zdCBub3RFcnJvcnMgPSB2YWxpZGF0b3IuZ2V0RXJyb3JzKHZhbHVlLCBuZXcgU2NoZW1hKHNjaGVtYS5ub3QoKSksIGtleSwgcGF0aClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgbGV0IGV4dHJhTWVzc2FnZXMgPSBbXVxuXG4gIGlmIChpc1NldChzY2hlbWEub25lT2YoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHNjaGVtYS5vbmVPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGV4dHJhTWVzc2FnZXMgPSBbLi4uZXh0cmFNZXNzYWdlcywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKV1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3QgJyArIGNvdW50ZXIgKyAnIG9mIHRoZSBzY2hlbWFzLicsXG4gICAgICAgICAgLi4uZXh0cmFNZXNzYWdlc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcygpKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnByZWZpeEl0ZW1zKCkpKSB7XG4gICAgc2NoZW1hLnByZWZpeEl0ZW1zKCkuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogaXRlbVNjaGVtYSwgc3RhcnRWYWx1ZTogaXRlbVZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtgSXRlbSAke2luZGV4fSBmYWlscyB2YWxpZGF0aW9uLmBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKHNjaGVtYS50eXBlSXMoJ2FueScpKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheShzY2hlbWEudHlwZSgpKSkge1xuICAgICAgdmFsaWQgPSBzY2hlbWEudHlwZSgpLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZSgpXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUoKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnVuaXF1ZUl0ZW1zKCkpICYmIHNjaGVtYS51bmlxdWVJdGVtcygpID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnRcblxuICAgIHRoaXMuanNvblNjaGVtYURyYWZ0cyA9IFtcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnLFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDYvc2NoZW1hIycsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJyxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDE5LTA5L3NjaGVtYScsXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAyMC0xMi9zY2hlbWEnXG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIGdldEVycm9ycyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHNjaGVtYS5jbG9uZSgpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2VzOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpID8gc2NoZW1hLm9wdGlvbignbWVzc2FnZXMnKSA6IFsnaW52YWxpZCddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhZnQpLmZvckVhY2goKGNvbnN0cmFpbikgPT4ge1xuICAgICAgaWYgKGhhc093bihzY2hlbWFDbG9uZSwgY29uc3RyYWluKSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmRyYWZ0W2NvbnN0cmFpbl1cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hLm9wdGlvbignbWVzc2FnZXMnKSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9