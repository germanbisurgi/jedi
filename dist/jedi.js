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
 * Represents an ArrayNavEditor instance.
 * @extends ArrayEditor
 */
var ArrayNavEditor = /*#__PURE__*/function (_ArrayEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ArrayNavEditor, _ArrayEditor);
  var _super = _createSuper(ArrayNavEditor);
  function ArrayNavEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ArrayNavEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ArrayNavEditor, [{
    key: "init",
    value: function init() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ArrayNavEditor.prototype), "init", this).call(this);
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
  return ArrayNavEditor;
}(_array__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ArrayNavEditor);

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
 * Represents an ArrayEditor instance.
 * @extends Editor
 */
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



/**
 * Represents an BooleanEnumRadioEditor instance.
 * @extends BooleanEditor
 */
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



/**
 * Represents an BooleanEnumSelectEditor instance.
 * @extends BooleanEditor
 */
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



/**
 * Represents a BooleanEditor instance.
 * @extends Editor
 */
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
        case 'barebones':
          this.theme = new _themes_barebones__WEBPACK_IMPORTED_MODULE_9__["default"]();
          break;
        default:
          this.theme = new _themes_barebones__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
 * Represents an MultipleEditor instance.
 * @extends Editor
 */
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



/**
 * Represents a NullEditor instance.
 * @extends Editor
 */
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



/**
 * Represents an NumberEnumRadioEditor instance.
 * @extends NumberEditor
 */
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



/**
 * Represents an NumberEnumSelectEditor instance.
 * @extends NumberEditor
 */
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



/**
 * Represents a NumberEditor instance.
 * @extends Editor
 */
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
 * Represents a ObjectGridEditor instance.
 * @extends ObjectEditor
 */
var ObjectGridEditor = /*#__PURE__*/function (_ObjectEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ObjectGridEditor, _ObjectEditor);
  var _super = _createSuper(ObjectGridEditor);
  function ObjectGridEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectGridEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectGridEditor, [{
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
  return ObjectGridEditor;
}(_object__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ObjectGridEditor);

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
 * Represents a ObjectNavEditor instance.
 * @extends ObjectEditor
 */
var ObjectNavEditor = /*#__PURE__*/function (_ObjectEditor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ObjectNavEditor, _ObjectEditor);
  var _super = _createSuper(ObjectNavEditor);
  function ObjectNavEditor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectNavEditor);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectNavEditor, [{
    key: "init",
    value: function init() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ObjectNavEditor.prototype), "init", this).call(this);
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
  return ObjectNavEditor;
}(_object__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ObjectNavEditor);

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
 * Represents an ObjectEditor instance.
 * @extends Editor
 */
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



/**
 * Represents a StringEnumRadioEditor instance.
 * @extends Editor
 */
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



/**
 * Represents a StringEnumSelectEditor instance.
 * @extends Editor
 */
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



/**
 * Represents a StringEditor instance.
 * @extends Editor
 */
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
   * @param name
   * @param callback
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
     * @param name
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
 * Represents an ArrayInstance instance.
 * @extends Instance
 */
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





/**
 * Represents a BooleanInstance instance.
 * @extends Instance
 */
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





/**
 * Represents a MultipleInstance instance.
 * @extends Instance
 */
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



/**
 * Represents a NullInstance instance.
 * @extends Instance
 */
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






/**
 * Represents a NumberInstance instance.
 * @extends Instance
 */
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
/* harmony import */ var _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editors/object-grid */ "./src/editors/object-grid.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editors/object */ "./src/editors/object.js");
/* harmony import */ var _editors_object_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editors/object-nav */ "./src/editors/object-nav.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






/**
 * Represents an ObjectInstance instance.
 * @extends Instance
 */
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






/**
 * Represents a StringInstance instance.
 * @extends Instance
 */
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
      theme: 'barebones',
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


/**
 * Represents a Theme instance.
 */
var Theme = /*#__PURE__*/function () {
  function Theme() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Theme);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Theme, [{
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
    key: "getCard",
    value: function getCard() {
      return document.createElement('div');
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var html = document.createElement('legend');
      html.textContent = config.textContent;
      return html;
    }
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
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      return document.createElement('div');
    }
  }, {
    key: "getFooter",
    value: function getFooter() {
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
    key: "getDeleteItemBtn",
    value: function getDeleteItemBtn() {
      var deleteItemBtn = this.getButton({
        textContent: 'Delete item'
      });
      deleteItemBtn.classList.add('jedi-array-delete');
      return deleteItemBtn;
    }
  }, {
    key: "getMoveUpItemBtn",
    value: function getMoveUpItemBtn() {
      var moveUpItemBtn = this.getButton({
        textContent: 'Move up'
      });
      moveUpItemBtn.classList.add('jedi-array-move-up');
      return moveUpItemBtn;
    }
  }, {
    key: "getMoveDownItemBtn",
    value: function getMoveDownItemBtn() {
      var moveDownItemBtn = this.getButton({
        textContent: 'Move down'
      });
      moveDownItemBtn.classList.add('jedi-array-move-down');
      return moveDownItemBtn;
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
  }, {
    key: "getArrayItem",
    value: function getArrayItem(config) {
      var container = this.getCard();
      var actions = this.getActionsSlot();
      var body = this.getCardBody();
      var header = this.getCardHeader();
      var btnGroup = this.getBtnGroup();
      var deleteBtn = this.getDeleteItemBtn();
      var moveUpBtn = this.getMoveUpItemBtn();
      var moveDownBtn = this.getMoveDownItemBtn();
      var childrenSlot = this.getChildrenSlot();
      container.appendChild(header);
      container.appendChild(body);
      header.appendChild(actions);
      header.appendChild(btnGroup);
      body.appendChild(childrenSlot);
      btnGroup.appendChild(deleteBtn);
      btnGroup.appendChild(moveUpBtn);
      btnGroup.appendChild(moveDownBtn);
      return {
        container: container,
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
  }, {
    key: "getRow",
    value: function getRow() {
      var row = document.createElement('div');
      row.classList.add('jedi-row');
      return row;
    }
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
  }, {
    key: "getTabList",
    value: function getTabList(config) {
      var tabList = document.createElement('ul');
      tabList.classList.add('jedi-nav-list');
      return tabList;
    }
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
  }, {
    key: "getTabContent",
    value: function getTabContent() {
      var tabContent = document.createElement('div');
      tabContent.classList.add('tab-content');
      return tabContent;
    }
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
    key: "getFooter",
    value: function getFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getFooter", this).call(this);
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
    key: "getButtonActiveClass",
    value: function getButtonActiveClass() {
      return 'btn-primary';
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
    key: "getFooter",
    value: function getFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getFooter", this).call(this);
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
    key: "getFooter",
    value: function getFooter() {
      var footer = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getFooter", this).call(this);
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
}(_barebones__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ThemeBootstrap5);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: clone, fakeForEach, escapeRegExp, replaceAll, pathToAttribute, hasOwn, pretty, round2decimals, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep, overwriteExistingProperties, getValueFromJSON, compileTemplate */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromJSON", function() { return getValueFromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileTemplate", function() { return compileTemplate; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var getValueFromJSON = function getValueFromJSON(data, path) {
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
};
var compileTemplate = function compileTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, function (match) {
    match = match.replace(/\s/g, '');
    var path = match.split(/{{|}}/)[1];
    return getValueFromJSON(data, path);
  });
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

/**
 * constrains additionalProperties
 */



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






/**
 * Represents a Validator instance.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheU5hdkVkaXRvciIsIl9BcnJheUVkaXRvciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0IiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJhY3RpdmVUYWJJbmRleCIsInJlZnJlc2hVSSIsIl90aGlzIiwiY29udHJvbCIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImluc3RhbmNlIiwic2NoZW1hIiwib3B0aW9uIiwidGFiTGlzdENvbCIsImdldENvbCIsInRhYkNvbnRlbnRDb2wiLCJ0YWJDb250ZW50IiwiZ2V0VGFiQ29udGVudCIsInRhYkxpc3QiLCJnZXRUYWJMaXN0Iiwic3RhY2tlZCIsInR5cGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJnZXRLZXkiLCJkZWxldGVCdG4iLCJnZXREZWxldGVJdGVtQnRuIiwibW92ZVVwQnRuIiwiZ2V0TW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duQnRuIiwiZ2V0TW92ZURvd25JdGVtQnRuIiwidWkiLCJhcnJheUFjdGlvbnMiLCJjb250YWluZXIiLCJjaGlsZFRpdGxlIiwidGVtcGxhdGUiLCJkYXRhIiwiaTAiLCJpMSIsImdldFZhbHVlIiwiY29tcGlsZVRlbXBsYXRlIiwiaXNTZXQiLCJ0aXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRoIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsImRlbGV0ZUl0ZW0iLCJ0b0luZGV4IiwibW92ZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJ0YWIiLCJnZXRUYWIiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImRpc2FibGUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJidWlsZCIsImdldEFycmF5Q29udHJvbCIsInNyT25seSIsImRlc2NyaXB0aW9uIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsIl90aGlzMiIsIkVkaXRvciIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsImNoZWNrZWQiLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsImVycm9ycyIsImdldEVycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwib24iLCJUaGVtZUJvb3RzdHJhcDMiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJUaGVtZSIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJkZXN0cm95IiwiX3RoaXMzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsIm11bHRpcGxlRXJyb3JzIiwiZmlsdGVyIiwiYWN0aXZlSW5zdGFuY2VFcnJvcnMiLCJOdWxsRWRpdG9yIiwiZ2V0TnVsbENvbnRyb2wiLCJmb3JtYXRJcyIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiZ2V0SW5wdXRDb250cm9sIiwidHlwZUlzIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJPYmplY3RHcmlkRWRpdG9yIiwiX09iamVjdEVkaXRvciIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIk9iamVjdEVkaXRvciIsIk9iamVjdE5hdkVkaXRvciIsImdldE9iamVjdENvbnRyb2wiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJlcXVhbCIsImFkZFByb3BlcnR5QnRuIiwiYWRkUHJvcGVydHlDb250cm9sIiwicHJvcGVydHlOYW1lRW1wdHkiLCJsZW5ndGgiLCJwcm9wZXJ0eUV4aXN0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiaXNPYmplY3QiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImNoZWNib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImRlYWN0aXZhdGUiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiX1N0cmluZ0VkaXRvciIsIlN0cmluZ0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImxpc3RlbmVyIiwiQXJyYXlJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNldFVJIiwicHJlcGFyZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJpdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwicHJlZml4SXRlbXMiLCJub3RTZXQiLCJnZXRUeXBlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJjbG9uZSIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJCb29sZWFuSW5zdGFuY2UiLCJjb25maWciLCJ1bmRlZmluZWQiLCJyb290TmFtZSIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hQ2xvbmUiLCJ0aGVuU2NoZW1hIiwidGhlbiIsIm1lcmdlRGVlcCIsImVsc2VTY2hlbWEiLCJhbnlPZiIsIm9uZU9mIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfc2NoZW1hJG9wdGlvbnMiLCJfc2NoZW1hJG9wdGlvbnMyIiwiX29iamVjdFNwcmVhZCIsImFsbE9mIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsInN3aXRjaElmIiwibmV3SW5kZXgiLCJpZkluZGV4IiwiZ2V0SWZJbmRleCIsInByZVZhbHVlIiwiZmluYWxWYWx1ZSIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZSIsImYiLCJkaWZmZXJlbnQiLCJOdWxsSW5zdGFuY2UiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJyZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJpIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdJbnN0YW5jZSIsImFzc2lnbiIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsIlNjaGVtYSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmluZSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl90aGlzNSIsIml0ZXJhdGlvbnMiLCJkZWZpbml0aW9ucyIsInRyYXZlcnNlIiwiYXJncyIsInJlZk93bmVyIiwicHJldlZhbHVlIiwicmVmIiwiaXNDaXJjdWxhclBhdGgiLCJjb25zb2xlIiwibG9nIiwib3V0cHV0Iiwic3Vic3RyaW5nIiwiaGFsZiIsImNlaWwiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwiaXNTdHJpbmciLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpc0Jvb2xlYW4iLCJfY29uc3QiLCJjb250YWlucyIsIl9kZWZhdWx0IiwiZGVwZW5kZW50U2NoZW1hcyIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsIl9pZiIsIm1heGltdW0iLCJtYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJyZWFkT25seSIsIlNldCIsInVuaXF1ZUl0ZW1zIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiaHRtbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldEZpZWxkc2V0IiwiZ2V0Q2FyZCIsImdldExlZ2VuZCIsInRleHRDb250ZW50IiwiZ2V0Q2FyZEhlYWRlciIsImhlYWRlciIsImdldENhcmRCb2R5IiwiZ2V0Rm9vdGVyIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImdldEJ0bkdyb3VwIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJnZXREZXNjcmlwdGlvbiIsImNhcmQiLCJhY3Rpb25zIiwiYm9keSIsInByb3BlcnRpZXNDb250YWluZXIiLCJmaWVsZHNldCIsImxlZ2VuZCIsImJ0bkdyb3VwIiwiZ2V0QXJyYXlJdGVtIiwiZ2V0U3dpdGNoZXIiLCJsYWJlbFRleHQiLCJkZXNjcmlwdGlvbklkIiwicmFkaW9Db250cm9scyIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2wiLCJmb3JtR3JvdXAiLCJ4cyIsIm1kIiwib2Zmc2V0TWQiLCJsaW5rIiwiZWxlbWVudCIsIl9UaGVtZSIsImZvb3RlciIsInJlbW92ZSIsImdldENvbHVtbkNsYXNzIiwic2l6ZSIsImNvbnRyb2xTbG90IiwidGhpbmciLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJSZWdFeHAiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsInByZXR0eSIsInJvdW5kMmRlY2ltYWxzIiwibnVtYmVyIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImEiLCJiIiwiaXNOdWxsIiwiQXJyYXkiLCJfdHlwZW9mIiwidGFyZ2V0IiwiX2xlbiIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoxIiwib2JqMiIsImdldFZhbHVlRnJvbUpTT04iLCJ0ZXN0IiwicGFyc2VJbnQiLCJtYXRjaCIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsInJlZ2V4cCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImV4dHJhTWVzc2FnZXMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJzb21lIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLGlIOzs7Ozs7Ozs7OztBQ0xBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSDs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0c7Ozs7Ozs7Ozs7O0FDTEEsb0JBQW9C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TUFBTSxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDeERrZ0IsWUFBWSxHQUFHLENBQ2I7VUFDRXhaLFFBQVEsRUFBRTNHLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztVQUNuQ3FDLElBQUksRUFBRUE7UUFDUixDQUFDLENBQ0Y7TUFDSDtNQUVBLE9BQU82ZCxZQUFZO0lBQ3JCO0VBQUM7RUFBQSxPQUFBdE4sU0FBQTtBQUFBO0FBR1lBLHdFQUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4vYXJyYXknXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEFycmF5TmF2RWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgQXJyYXlFZGl0b3JcbiAqL1xuY2xhc3MgQXJyYXlOYXZFZGl0b3IgZXh0ZW5kcyBBcnJheUVkaXRvciB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS5jb2xzIHx8IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2Jykuc3RhY2tlZCxcbiAgICAgIHR5cGU6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2JykudHlwZVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgbGV0IGNoaWxkVGl0bGVcblxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaXRlbVRlbXBsYXRlJykpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2l0ZW1UZW1wbGF0ZScpXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaTA6IGluZGV4LFxuICAgICAgICAgIGkxOiAoaW5kZXggKyAxKSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkVGl0bGUgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZFRpdGxlID0gaXNTZXQoY2hpbGQuc2NoZW1hLnRpdGxlKCkpID8gY2hpbGQuc2NoZW1hLnRpdGxlKCkgKyAnICcgKyAoaW5kZXggKyAxKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICB0aXRsZTogY2hpbGRUaXRsZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSlcblxuICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgfSlcblxuICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcbiAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5TmF2RWRpdG9yXG4iLCIvKiBnbG9iYWwgY29uZmlybSAqL1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gQXJyYXlFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgQXJyYXlFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmRlbGV0ZUFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZSBhbGwnKSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKFtdKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBCb29sZWFuRWRpdG9yXG4gKi9cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEJvb2xlYW5FZGl0b3JcbiAqL1xuY2xhc3MgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEJvb2xlYW5FZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lcy9iYXJlYm9uZXMnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuICAgIHRoaXMuY29udHJvbCA9IG51bGxcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZCAoKSB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udGFpbmVyICYmIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIE11bHRpcGxlRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIE11bHRpcGxlRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCBvbGRJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubGFzdEluZGV4XVxuXG4gICAgaWYgKG9sZEluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQob2xkSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIGNvbnN0IG11bHRpcGxlRXJyb3JzID0gZXJyb3JzLmZpbHRlcigoZXJyb3IpID0+IGVycm9yLnBhdGggPT09IHRoaXMucGF0aClcbiAgICBjb25zdCBhY3RpdmVJbnN0YW5jZUVycm9ycyA9IGVycm9ycy5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5wYXRoICE9PSB0aGlzLnBhdGgpXG4gICAgc3VwZXIuc2hvd1ZhbGlkYXRpb25FcnJvcnMobXVsdGlwbGVFcnJvcnMpXG4gICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5zaG93VmFsaWRhdGlvbkVycm9ycyhhY3RpdmVJbnN0YW5jZUVycm9ycylcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBOdWxsRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnaGlkZGVuJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBOdW1iZXJFZGl0b3JcbiAqL1xuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGNvbnRyb2xcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIE51bWJlckVudW1TZWxlY3RFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBOdW1iZXJFZGl0b3JcbiAqL1xuY2xhc3MgTnVtYmVyRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBOdW1iZXJFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZUlzKCdpbnRlZ2VyJykpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9vYmplY3QnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIE9iamVjdEdyaWRFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBPYmplY3RFZGl0b3JcbiAqL1xuY2xhc3MgT2JqZWN0R3JpZEVkaXRvciBleHRlbmRzIE9iamVjdEVkaXRvciB7XG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGNoaWxkLnNjaGVtYS5vcHRpb24oJ2NvbHVtbnMnKVxuICAgICAgICBjb25zdCBvZmZzZXQgPSBjaGlsZC5zY2hlbWEub3B0aW9uKCdvZmZzZXQnKSB8fCAwXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2x1bW5zLCBvZmZzZXQpXG5cbiAgICAgICAgaWYgKGNoaWxkLnNjaGVtYS5vcHRpb24oJ25ld1JvdycpKSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0R3JpZEVkaXRvclxuIiwiaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgT2JqZWN0TmF2RWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgT2JqZWN0RWRpdG9yXG4gKi9cbmNsYXNzIE9iamVjdE5hdkVkaXRvciBleHRlbmRzIE9iamVjdEVkaXRvciB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ25hdicpLnN0YWNrZWQsXG4gICAgICB0eXBlOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ25hdicpLnR5cGVcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgICAgdGl0bGU6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcblxuICAgICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0TmF2RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBPYmplY3RFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7IHR5cGU6ICdhbnknIH1cblxuICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcygpXG5cbiAgICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoUHJvcGVydGllc1Nsb3QgKCkge1xuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpKSB7XG4gICAgICB3aGlsZSAodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5sYXN0Q2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aCkgKyAnLWFjdGl2YXRvcidcblxuICAgICAgICBjb25zdCBjaGVjYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgbGFiZWw6IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2JveENvbnRyb2wuaW5wdXRcblxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgaXNEZXBlbmRlbnRSZXF1aXJlZCA9IHRoaXMuaW5zdGFuY2UuaXNEZXBlbmRlbnRSZXF1aXJlZChjaGlsZC5nZXRLZXkoKSlcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gaXNSZXF1aXJlZCB8fCBpc0RlcGVuZGVudFJlcXVpcmVkIHx8IGRpc2FibGVkXG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuYXBwZW5kQ2hpbGQoY2hlY2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNUb2dnbGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc1RvZ2dsZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFN0cmluZ0VkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBTdHJpbmdFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cblxuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygndGV4dGFyZWEnKSkge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdCgpIDogJ3RleHQnLFxuICAgICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdjb2xvcicpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGFuIEV2ZW50RW1pdHRlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgbmFtZSwgY2FsbGJhY2sgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgYSBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBnZXRUeXBlLCBpc1NldCwgY2xvbmUsIGlzQXJyYXksIG5vdFNldCwgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEFycmF5TmF2RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYXJyYXktbmF2J1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gQXJyYXlJbnN0YW5jZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEFycmF5SW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdhcnJheScpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCduYXYnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBBcnJheU5hdkVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEFycmF5RWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgbGV0IHNjaGVtYVxuXG4gICAgc2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEuaXRlbXMoKSkgPyB0aGlzLnNjaGVtYS5pdGVtcygpIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKSkgJiYgaXNTZXQodGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJlZml4SXRlbXMoKVtpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzY2hlbWEpICYmIG5vdFNldChzY2hlbWEudHlwZSkpIHtcbiAgICAgIHNjaGVtYS50eXBlID0gaXNTZXQodmFsdWUpID8gZ2V0VHlwZSh2YWx1ZSkgOiAnYW55J1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIGNoaWxkLnNldFZhbHVlKGl0ZW1WYWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQm9vbGVhbkluc3RhbmNlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgQm9vbGVhbkluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdzZWxlY3QnKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVNlbGVjdEVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdib29sZWFuJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuSW5zdGFuY2VcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEpTT04gaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuICAgIHRoaXMudWkgPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKClbMF0pKSB7XG4gICAgLy8gICB0aGlzLnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0LCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXNcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBNdWx0aXBsZUluc3RhbmNlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgdGhpcy50aGVuU2NoZW1hID0gdGhpcy5zY2hlbWEudGhlbigpID8gbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSwgdGhpcy5zY2hlbWEudGhlbigpKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG4gICAgICB0aGlzLmVsc2VTY2hlbWEgPSB0aGlzLnNjaGVtYS5lbHNlKCkgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCB0aGlzLnNjaGVtYS5lbHNlKCkpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHRoaXMudGhlblNjaGVtYSlcbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHRoaXMuZWxzZVNjaGVtYSlcblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBkZWxldGUgc2NoZW1hLmlmXG4gICAgICAgIGRlbGV0ZSBzY2hlbWEudGhlblxuICAgICAgICBkZWxldGUgc2NoZW1hLmVsc2VcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbMCwgMV1cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gWyd0aGVuJywgJ2Vsc2UnXVxuICAgIH0gZWxzZSBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZikgJiYgc2NoZW1hLm9wdGlvbnM/Lm1lcmdlQWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgICB0aGlzLnN3aXRjaElmKClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSWYgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgY29uc3QgaWZJbmRleCA9IHRoaXMuZ2V0SWZJbmRleCh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBwcmVWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShpZkluZGV4KVxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgICBjb25zdCBmaW5hbFZhbHVlID0gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzKGN1cnJlbnRWYWx1ZSwgcHJlVmFsdWUpXG4gICAgICB0aGlzLnNldFZhbHVlKGZpbmFsVmFsdWUsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGdldElmSW5kZXggKHZhbHVlKSB7XG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogdGhpcy5zY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG4gICAgcmV0dXJuIGlmRXJyb3JzLmxlbmd0aCA9PT0gMCA/IDAgOiAxXG4gIH1cblxuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5pbnN0YW5jZXMpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGxldCBmaXR0ZXN0SW5kZXhcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0SWZJbmRleCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBOdWxsSW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgTnVtYmVySW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0R3JpZEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1ncmlkJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBPYmplY3ROYXZFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtbmF2J1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gT2JqZWN0SW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnZ3JpZCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE9iamVjdEdyaWRFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ25hdicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE9iamVjdE5hdkVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFN0cmluZ0luc3RhbmNlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKZWRpIGluc3RhbmNlLlxuICovXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBKZWRpIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IG9wdGlvbnMuc2NoZW1hIC0gQSBKU09OIHNjaGVtYVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFZGl0b3IgLSBHZW5lcmF0ZXMgVUkgY29udHJvbHMgdG8gZWRpdCB0aGUgSlNPTiB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29udGFpbmVyIC0gV2hlcmUgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGhlbWUgLSBIb3cgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICAvLyBjaXJjdWxhciAkcmVmIGFyZSBub3QgaW5pdGlhbGx5IGRlcmVmZXJlbmNlZCBhbmQgbXVzdCBiZSBkZWZpbmVkIG9uIGNyZWF0aW9uXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuaWYoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgc2NoZW1hQ2xvbmUudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBzY2hlbWFDbG9uZVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLmdldEVycm9ycygpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBSZWZQYXJzZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEZvb3RlciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGh0bWwudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZWxldGVJdGVtQnRuICgpIHtcbiAgICBjb25zdCBkZWxldGVJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICB9KVxuXG4gICAgbW92ZVVwSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgcmV0dXJuIG1vdmVVcEl0ZW1CdG5cbiAgfVxuXG4gIGdldE1vdmVEb3duSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZURvd25JdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdqZWRpLWFjdGl2ZS1idG4nXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHByb3BlcnRpZXNUb2dnbGUsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLFxuICAgICAgYWRkUHJvcGVydHlDb250cm9sLFxuICAgICAgYWRkUHJvcGVydHlCdG4sXG4gICAgICBwcm9wZXJ0aWVzQWN0aXZhdG9ycyxcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIGdldEFycmF5Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVBbGxCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGRlbGV0ZUFsbEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIGdldEFycmF5SXRlbSAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcigpXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuZ2V0TW92ZURvd25JdGVtQnRuKClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGJvZHksXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBkZWxldGVCdG4sXG4gICAgICBtb3ZlVXBCdG4sXG4gICAgICBtb3ZlRG93bkJ0blxuICAgIH1cbiAgfVxuXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSlcblxuICAgIHN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbFxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGluaycpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuaWQpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGluaylcbiAgICByZXR1cm4geyBsaXN0LCBsaW5rIH1cbiAgfVxuXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnamVkaS10YWItcGFuZScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL2JhcmVib25lcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGItMCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0Rm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZSB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtZW5kJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdFeHAgPSAoc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoc3RyLCBmaW5kLCByZXBsYWNlKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSlcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhUb0F0dHJpYnV0ZSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiByZXBsYWNlQWxsKHJlcGxhY2VBbGwocGF0aCwgJyMnLCAncm9vdCcpLCAnLycsICctJylcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBjb25zdCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgPSAob2JqMSwgb2JqMikgPT4ge1xuICBPYmplY3Qua2V5cyhvYmoyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iajEpIHtcbiAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JqMVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tSlNPTiA9IChkYXRhLCBwYXRoKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBpbGVUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSwgZGF0YSkgPT4ge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21KU09OKGRhdGEsIHBhdGgpXG4gIH0pXG59XG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGxldCBleHRyYU1lc3NhZ2VzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBleHRyYU1lc3NhZ2VzID0gWy4uLmV4dHJhTWVzc2FnZXMsIEpTT04uc3RyaW5naWZ5KHNjaGVtYSldXG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgICAgLi4uZXh0cmFNZXNzYWdlc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLmdldEVycm9ycygpXG5cbiAgICAgIGlmIChjb250YWluc0Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5zRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluc0ludmFsaWQgPSAoY291bnRlciA9PT0gMClcblxuICAgIGlmIChpc1NldChzY2hlbWEubWluQ29udGFpbnMoKSkpIHtcbiAgICAgIGNvbnN0IG1pbkNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyIDwgc2NoZW1hLm1pbkNvbnRhaW5zKCkpXG5cbiAgICAgIGlmIChtaW5Db250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBpcyBsZXNzIHRoYW4gbWluaW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5taW5Db250YWlucygpfWBcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICdObyBpdGVtcyBtYXRjaCBjb250YWlucydcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1heENvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IHNjaGVtYS5tYXhDb250YWlucygpKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZXNcbiAgICBsZXQgcmVnZXhwXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ11cbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1cmwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ11cbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1dWlkJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBpdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIC8vIHRvZG8gaWYgYXJyYXkgbGVuZ3RoIGlzID4gcHJlZml4SXRlbXMubGVuZ3RoXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuaXRlbXMoKSkpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSA/IHNjaGVtYS5wcmVmaXhJdGVtcygpLmxlbmd0aCA6IDBcblxuICAgIGlmIChzY2hlbWEuaXRlbXMoKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydTY2hlbWEgYWx3YXlzIGZhaWxzIHZhbGlkYXRpb24uJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS4nXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IG9uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGxldCBleHRyYU1lc3NhZ2VzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBleHRyYU1lc3NhZ2VzID0gWy4uLmV4dHJhTWVzc2FnZXMsIEpTT04uc3RyaW5naWZ5KHNjaGVtYSldXG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICAgIC4uLmV4dHJhTWVzc2FnZXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHByZWZpeEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSkge1xuICAgIHNjaGVtYS5wcmVmaXhJdGVtcygpLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbYEl0ZW0gJHtpbmRleH0gZmFpbHMgdmFsaWRhdGlvbi5gXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHR5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpIDogWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=