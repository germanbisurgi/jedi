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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXktbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL211bHRpcGxlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC1ncmlkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtbmF2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udWxsLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvamVkaS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYmFyZWJvbmVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJBcnJheU5hdkVkaXRvciIsIl9BcnJheUVkaXRvciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0IiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJhY3RpdmVUYWJJbmRleCIsInJlZnJlc2hVSSIsIl90aGlzIiwiY29udHJvbCIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImluc3RhbmNlIiwic2NoZW1hIiwib3B0aW9uIiwidGFiTGlzdENvbCIsImdldENvbCIsInRhYkNvbnRlbnRDb2wiLCJ0YWJDb250ZW50IiwiZ2V0VGFiQ29udGVudCIsInRhYkxpc3QiLCJnZXRUYWJMaXN0Iiwic3RhY2tlZCIsInR5cGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJnZXRLZXkiLCJkZWxldGVCdG4iLCJnZXREZWxldGVJdGVtQnRuIiwibW92ZVVwQnRuIiwiZ2V0TW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duQnRuIiwiZ2V0TW92ZURvd25JdGVtQnRuIiwidWkiLCJhcnJheUFjdGlvbnMiLCJjb250YWluZXIiLCJjaGlsZFRpdGxlIiwidGVtcGxhdGUiLCJkYXRhIiwiaTAiLCJpMSIsImdldFZhbHVlIiwiY29tcGlsZVRlbXBsYXRlIiwiaXNTZXQiLCJ0aXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXRoIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsImRlbGV0ZUl0ZW0iLCJ0b0luZGV4IiwibW92ZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJ0YWIiLCJnZXRUYWIiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImRpc2FibGUiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJlbmFibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJBcnJheUVkaXRvciIsIl9FZGl0b3IiLCJidWlsZCIsImdldEFycmF5Q29udHJvbCIsInNyT25seSIsImRlc2NyaXB0aW9uIiwiYWRkQnRuIiwiYWRkSXRlbSIsImRlbGV0ZUFsbEJ0biIsImNvbmZpcm0iLCJzZXRWYWx1ZSIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsIl90aGlzMiIsIkVkaXRvciIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJfQm9vbGVhbkVkaXRvciIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsImNoZWNrZWQiLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWx3YXlzU2hvd0Vycm9ycyIsImVycm9ycyIsImdldEVycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwib24iLCJUaGVtZUJvb3RzdHJhcDMiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJUaGVtZSIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJkZXN0cm95IiwiX3RoaXMzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIk11bHRpcGxlRWRpdG9yIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsInN3aXRjaEluc3RhbmNlIiwib2xkSW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJsYXN0SW5kZXgiLCJhY3RpdmVJbnN0YW5jZSIsIm11bHRpcGxlRXJyb3JzIiwiZmlsdGVyIiwiYWN0aXZlSW5zdGFuY2VFcnJvcnMiLCJOdWxsRWRpdG9yIiwiZ2V0TnVsbENvbnRyb2wiLCJmb3JtYXRJcyIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIl9OdW1iZXJFZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiZ2V0SW5wdXRDb250cm9sIiwidHlwZUlzIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJPYmplY3RHcmlkRWRpdG9yIiwiX09iamVjdEVkaXRvciIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIk9iamVjdEVkaXRvciIsIk9iamVjdE5hdkVkaXRvciIsImdldE9iamVjdENvbnRyb2wiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJlcXVhbCIsImFkZFByb3BlcnR5QnRuIiwiYWRkUHJvcGVydHlDb250cm9sIiwicHJvcGVydHlOYW1lRW1wdHkiLCJsZW5ndGgiLCJwcm9wZXJ0eUV4aXN0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiaXNPYmplY3QiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImNoZWNib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsImRlYWN0aXZhdGUiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiX1N0cmluZ0VkaXRvciIsIlN0cmluZ0VkaXRvciIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJpbnB1dFR5cGVzIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImxpc3RlbmVyIiwiQXJyYXlJbnN0YW5jZSIsIl9JbnN0YW5jZSIsInNldFVJIiwicHJlcGFyZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJpdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwicHJlZml4SXRlbXMiLCJub3RTZXQiLCJnZXRUeXBlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJjbG9uZSIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJCb29sZWFuSW5zdGFuY2UiLCJjb25maWciLCJ1bmRlZmluZWQiLCJyb290TmFtZSIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJ1bnJlZ2lzdGVyIiwiZGVmYXVsdEVycm9ycyIsInZhbGlkYXRvciIsInZhbGlkRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwiTXVsdGlwbGVJbnN0YW5jZSIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hQ2xvbmUiLCJ0aGVuU2NoZW1hIiwidGhlbiIsIm1lcmdlRGVlcCIsImVsc2VTY2hlbWEiLCJhbnlPZiIsIm9uZU9mIiwic2NoZW1hc09mIiwiY2xvbmVTY2hlbWEiLCJfc2NoZW1hJG9wdGlvbnMiLCJfc2NoZW1hJG9wdGlvbnMyIiwiX29iamVjdFNwcmVhZCIsImFsbE9mIiwibWVyZ2VBbGxPZiIsIm1lcmdlZCIsImFsbE9mU2NoZW1hIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzd2l0Y2hlclRpdGxlIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsInN3aXRjaElmIiwibmV3SW5kZXgiLCJpZkluZGV4IiwiZ2V0SWZJbmRleCIsInByZVZhbHVlIiwiZmluYWxWYWx1ZSIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsImlmRWRpdG9yIiwiSmVkaSIsInN0YXJ0VmFsdWUiLCJyZWZQYXJzZXIiLCJpZkVycm9ycyIsImdldEZpdHRlc3RJbmRleCIsImZpdHRlc3RJbmRleCIsImNoYW1waW9uRXJyb3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImluc3RhbmNlRXJyb3JzIiwiZXJyIiwiZSIsImYiLCJkaWZmZXJlbnQiLCJOdWxsSW5zdGFuY2UiLCJOdW1iZXJJbnN0YW5jZSIsInR5cGVJc051bWVyaWMiLCJPYmplY3RJbnN0YW5jZSIsInByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJyZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJpc05vdFJlcXVpcmVkIiwic2hvdWxkU3RhcnREZWFjdGl2YXRlZCIsImRlYWN0aXZhdGVQcm9wZXJ0aWVzIiwiZGVsZXRlQ2hpbGQiLCJpIiwiZ2V0Q2hpbGQiLCJmaW5kIiwiX3RoaXM0Iiwib2xkVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJTdHJpbmdJbnN0YW5jZSIsImFzc2lnbiIsInNob3dSZXF1aXJlZE9ubHkiLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsIlNjaGVtYSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmluZSIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl90aGlzNSIsIml0ZXJhdGlvbnMiLCJkZWZpbml0aW9ucyIsInRyYXZlcnNlIiwiYXJncyIsInJlZk93bmVyIiwicHJldlZhbHVlIiwicmVmIiwiaXNDaXJjdWxhclBhdGgiLCJjb25zb2xlIiwibG9nIiwib3V0cHV0Iiwic3Vic3RyaW5nIiwiaGFsZiIsImNlaWwiLCJmaXJzdEhhbGYiLCJzZWNvbmRIYWxmIiwiaXNTdHJpbmciLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpc0Jvb2xlYW4iLCJfY29uc3QiLCJjb250YWlucyIsIl9kZWZhdWx0IiwiZGVwZW5kZW50U2NoZW1hcyIsIl9lbHNlIiwiX2VudW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsIl9pZiIsIm1heGltdW0iLCJtYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heEl0ZW1zIiwibWF4TGVuZ3RoIiwibWF4UHJvcGVydGllcyIsIm1pbmltdW0iLCJtaW5Db250YWlucyIsIm1pbkl0ZW1zIiwibWluTGVuZ3RoIiwibWluUHJvcGVydGllcyIsIm11bHRpcGxlT2YiLCJub3QiLCJwYXR0ZXJuIiwicGF0dGVyblByb3BlcnRpZXMiLCJyZWFkT25seSIsIlNldCIsInVuaXF1ZUl0ZW1zIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiaHRtbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldEZpZWxkc2V0IiwiZ2V0Q2FyZCIsImdldExlZ2VuZCIsInRleHRDb250ZW50IiwiZ2V0Q2FyZEhlYWRlciIsImhlYWRlciIsImdldENhcmRCb2R5IiwiZ2V0Rm9vdGVyIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJnZXRDb250cm9sU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImdldEJ0bkdyb3VwIiwiZ2V0QXJyYXlCdG5BZGQiLCJnZXRBcnJheUJ0bkRlbGV0ZUFsbCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiZ2V0QnV0dG9uQWN0aXZlQ2xhc3MiLCJnZXREZXNjcmlwdGlvbiIsImNhcmQiLCJhY3Rpb25zIiwiYm9keSIsInByb3BlcnRpZXNDb250YWluZXIiLCJmaWVsZHNldCIsImxlZ2VuZCIsImJ0bkdyb3VwIiwiZ2V0QXJyYXlJdGVtIiwiZ2V0U3dpdGNoZXIiLCJsYWJlbFRleHQiLCJkZXNjcmlwdGlvbklkIiwicmFkaW9Db250cm9scyIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2wiLCJmb3JtR3JvdXAiLCJ4cyIsIm1kIiwib2Zmc2V0TWQiLCJsaW5rIiwiZWxlbWVudCIsIl9UaGVtZSIsImZvb3RlciIsInJlbW92ZSIsImdldENvbHVtbkNsYXNzIiwic2l6ZSIsImNvbnRyb2xTbG90IiwidGhpbmciLCJmYWtlRm9yRWFjaCIsImFycmF5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJSZWdFeHAiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsInByZXR0eSIsInJvdW5kMmRlY2ltYWxzIiwibnVtYmVyIiwicm91bmQiLCJzb3J0T2JqZWN0Iiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImEiLCJiIiwiaXNOdWxsIiwiQXJyYXkiLCJfdHlwZW9mIiwidGFyZ2V0IiwiX2xlbiIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoxIiwib2JqMiIsImdldFZhbHVlRnJvbUpTT04iLCJ0ZXN0IiwicGFyc2VJbnQiLCJtYXRjaCIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsInJlZ2V4cCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImV4dHJhTWVzc2FnZXMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJzb21lIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiY29tcHV0ZWRNYXhpbXVtIiwiY29tcHV0ZWRNaW5pbXVtIiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJvYmplY3QiLCJfbnVsbCIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsInNjaGVtYUVycm9ycyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLGlIOzs7Ozs7Ozs7OztBQ0xBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSDs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0c7Ozs7Ozs7Ozs7O0FDTEEsb0JBQW9C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Q2xDLElBQU1yUyxTQUFTLEdBQUd4TyxLQUFJLENBQUMyZ0IsS0FBSyxDQUFDRSxTQUFTLENBQUM7VUFDdkMsSUFBTUMsZUFBZSxHQUFHdFMsU0FBUyxDQUFDeE8sS0FBSSxFQUFFUixLQUFLLEVBQUVpQixNQUFNLEVBQUVsQixHQUFHLEVBQUV3RCxJQUFJLENBQUM7VUFFakUsSUFBSStkLGVBQWUsRUFBRTtZQUNuQkYsWUFBWSxNQUFBdE0sTUFBQSxDQUFBQywrRUFBQSxDQUFPcU0sWUFBWSxHQUFBck0sK0VBQUEsQ0FBS3VNLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUYsWUFBWSxDQUFDcFcsTUFBTSxHQUFHLENBQUMsSUFBSS9KLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3hEa2dCLFlBQVksR0FBRyxDQUNiO1VBQ0V4WixRQUFRLEVBQUUzRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7VUFDbkNxQyxJQUFJLEVBQUVBO1FBQ1IsQ0FBQyxDQUNGO01BQ0g7TUFFQSxPQUFPNmQsWUFBWTtJQUNyQjtFQUFDO0VBQUEsT0FBQXROLFNBQUE7QUFBQTtBQUdZQSx3RUFBUyxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBBcnJheU5hdkVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEFycmF5RWRpdG9yXG4gKi9cbmNsYXNzIEFycmF5TmF2RWRpdG9yIGV4dGVuZHMgQXJyYXlFZGl0b3Ige1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignbmF2JykuY29scyB8fCAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ25hdicpLnN0YWNrZWQsXG4gICAgICB0eXBlOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ25hdicpLnR5cGVcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG5cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2l0ZW1UZW1wbGF0ZScpKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdpdGVtVGVtcGxhdGUnKVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGkwOiBpbmRleCxcbiAgICAgICAgICBpMTogKGluZGV4ICsgMSksXG4gICAgICAgICAgdmFsdWU6IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFRpdGxlID0gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRUaXRsZSA9IGlzU2V0KGNoaWxkLnNjaGVtYS50aXRsZSgpKSA/IGNoaWxkLnNjaGVtYS50aXRsZSgpICsgJyAnICsgKGluZGV4ICsgMSkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgfVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheU5hdkVkaXRvclxuIiwiLyogZ2xvYmFsIGNvbmZpcm0gKi9cblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEFycmF5RWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5kZWxldGVBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUgYWxsJykpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShbXSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgQm9vbGVhbkVkaXRvclxuICovXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBCb29sZWFuRWRpdG9yXG4gKi9cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBCb29sZWFuRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZSBmcm9tICcuLi90aGVtZXMvYmFyZWJvbmVzJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmFsd2F5c1Nob3dFcnJvcnMgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdhbHdheXNTaG93RXJyb3JzJykpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2JhcmVib25lcyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5pbnN0YW5jZS5zY2hlbWEudHlwZSgpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZCAoKSB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBNdWx0aXBsZUVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBNdWx0aXBsZUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKCksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3Qgb2xkSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLmxhc3RJbmRleF1cblxuICAgIGlmIChvbGRJbnN0YW5jZS51aS5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKG9sZEluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBtdWx0aXBsZUVycm9ycyA9IGVycm9ycy5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci5wYXRoID09PSB0aGlzLnBhdGgpXG4gICAgY29uc3QgYWN0aXZlSW5zdGFuY2VFcnJvcnMgPSBlcnJvcnMuZmlsdGVyKChlcnJvcikgPT4gZXJyb3IucGF0aCAhPT0gdGhpcy5wYXRoKVxuICAgIHN1cGVyLnNob3dWYWxpZGF0aW9uRXJyb3JzKG11bHRpcGxlRXJyb3JzKVxuICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuc2hvd1ZhbGlkYXRpb25FcnJvcnMoYWN0aXZlSW5zdGFuY2VFcnJvcnMpXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgTnVsbEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ2hpZGRlbicpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gTnVtYmVyRW51bVJhZGlvRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgTnVtYmVyRWRpdG9yXG4gKi9cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBjb250cm9sXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgdGl0bGVzOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VudW1UaXRsZXMnKSB8fCB0aGlzLmluc3RhbmNlLnNjaGVtYS5lbnVtKCksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgTnVtYmVyRWRpdG9yXG4gKi9cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgTnVtYmVyRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBpc1NldCh0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpKSA/IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkgOiB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmluc3RhbmNlLnNjaGVtYS5kZXNjcmlwdGlvbigpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnR5cGVJcygnaW50ZWdlcicpKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgT2JqZWN0RWRpdG9yIGZyb20gJy4vb2JqZWN0J1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBPYmplY3RHcmlkRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgT2JqZWN0RWRpdG9yXG4gKi9cbmNsYXNzIE9iamVjdEdyaWRFZGl0b3IgZXh0ZW5kcyBPYmplY3RFZGl0b3Ige1xuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBjaGlsZC5zY2hlbWEub3B0aW9uKCdjb2x1bW5zJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2hpbGQuc2NoZW1hLm9wdGlvbignb2Zmc2V0JykgfHwgMFxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29sdW1ucywgb2Zmc2V0KVxuXG4gICAgICAgIGlmIChjaGlsZC5zY2hlbWEub3B0aW9uKCduZXdSb3cnKSkge1xuICAgICAgICAgIHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEdyaWRFZGl0b3JcbiIsImltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIE9iamVjdE5hdkVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIE9iamVjdEVkaXRvclxuICovXG5jbGFzcyBPYmplY3ROYXZFZGl0b3IgZXh0ZW5kcyBPYmplY3RFZGl0b3Ige1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ25hdicpLmNvbHMgfHwgM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS5zdGFja2VkLFxuICAgICAgdHlwZTogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCduYXYnKS50eXBlXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICAgIHRpdGxlOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG5cbiAgICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdE5hdkVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gT2JqZWN0RWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0geyB0eXBlOiAnYW55JyB9XG5cbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuXG4gICAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBpZiAoZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbCh0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2VkaXRhYmxlUHJvcGVydGllcycpLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG5cbiAgICAgICAgY29uc3QgY2hlY2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGxhYmVsOiBpc1NldChjaGlsZC5zY2hlbWEudGl0bGUoKSkgPyBjaGlsZC5zY2hlbWEudGl0bGUoKSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIHNyT25seTogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGlzUmVxdWlyZWQgfHwgaXNEZXBlbmRlbnRSZXF1aXJlZCB8fCBkaXNhYmxlZFxuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNib3hDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzVG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNUb2dnbGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFN0cmluZ0VudW1SYWRpb0VkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gY29udHJvbFxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmVudW0oKSxcbiAgICAgIHRpdGxlczogdGhpcy5pbnN0YW5jZS5zY2hlbWEub3B0aW9uKCdlbnVtVGl0bGVzJykgfHwgdGhpcy5pbnN0YW5jZS5zY2hlbWEuZW51bSgpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGlzU2V0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hLnRpdGxlKCkpID8gdGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSA6IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbignaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5pbnN0YW5jZS5zY2hlbWEuZGVzY3JpcHRpb24oKVxuICAgIH0pXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBTdHJpbmdFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZS5zY2hlbWEuZm9ybWF0SXMoJ3RleHRhcmVhJykpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXQoKSA6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgICBsYWJlbDogaXNTZXQodGhpcy5pbnN0YW5jZS5zY2hlbWEudGl0bGUoKSkgPyB0aGlzLmluc3RhbmNlLnNjaGVtYS50aXRsZSgpIDogdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgICAgc3JPbmx5OiB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb24oJ2hpZGVUaXRsZScpIHx8IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmZvcm1hdElzKCdoaWRkZW4nKSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLmRlc2NyaXB0aW9uKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnNjaGVtYS5mb3JtYXRJcygnY29sb3InKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGEgbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZ2V0VHlwZSwgaXNTZXQsIGNsb25lLCBpc0FycmF5LCBub3RTZXQsIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBBcnJheU5hdkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2FycmF5LW5hdidcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEFycmF5SW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBBcnJheUluc3RhbmNlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYXJyYXknKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnbmF2JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQXJyYXlOYXZFZGl0b3IodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBBcnJheUVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGxldCBzY2hlbWFcblxuICAgIHNjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLml0ZW1zKCkpID8gdGhpcy5zY2hlbWEuaXRlbXMoKSA6IHt9XG5cbiAgICBjb25zdCBoYXNQcmVmaXhJdGVtc1NjaGVtYSA9IGlzU2V0KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKCkpICYmIGlzU2V0KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKClbaXRlbXNDb3VudF0pXG5cbiAgICBpZiAoaGFzUHJlZml4SXRlbXNTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKClbaXRlbXNDb3VudF1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qoc2NoZW1hKSAmJiBub3RTZXQoc2NoZW1hLnR5cGUpKSB7XG4gICAgICBzY2hlbWEudHlwZSA9IGlzU2V0KHZhbHVlKSA/IGdldFR5cGUodmFsdWUpIDogJ2FueSdcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICBjaGlsZC5zZXRWYWx1ZShpdGVtVmFsdWUsIGZhbHNlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEJvb2xlYW5JbnN0YW5jZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEJvb2xlYW5JbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBCb29sZWFuRW51bVJhZGlvRWRpdG9yKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnc2VsZWN0JykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYm9vbGVhbicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEJvb2xlYW5FZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkluc3RhbmNlXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlIHx8IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogdG8gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG4gICAgXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbmQgcmVnaXN0ZXIgdGhlIGluc3RhbmNlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgICB0aGlzLnNldEluaXRpYWxWYWx1ZSgpXG4gICAgdGhpcy5wcmVwYXJlKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG5cbiAgICBpZiAodGhpcy5qZWRpLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuc2V0VUkoKVxuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudC5vbkNoaWxkQ2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHVpIHByb3BlcnR5LiBVSSBjYW4gYmUgYW4gZWRpdG9yIGluc3RhbmNlIG9yIHNpbWlsYXJcbiAgICovXG4gIHNldFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2Jvb2xlYW4nKSB2YWx1ZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUoKSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnc3RyaW5nJykgdmFsdWUgPSAnJ1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdhcnJheScpIHZhbHVlID0gW11cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSgpID09PSAnb2JqZWN0JykgdmFsdWUgPSB7fVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlKCkgPT09ICdudWxsJykgdmFsdWUgPSBudWxsXG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgLy8gaWYgKHRoaXMuc2NoZW1hLmVudW0oKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKClbMF0pKSB7XG4gICAgLy8gICB0aGlzLnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bSgpWzBdXG4gICAgLy8gfVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmICF0aGlzLnNjaGVtYS5lbnVtKCkuaW5jbHVkZXModGhpcy5zY2hlbWEuZGVmYXVsdCgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdEVycm9ycyA9IHRoaXMuamVkaS52YWxpZGF0b3IuZ2V0RXJyb3JzKHRoaXMuc2NoZW1hLmRlZmF1bHQoKSwgdGhpcy5zY2hlbWEsIHRoaXMuZ2V0S2V5KCksIHRoaXMucGF0aClcbiAgICAgIGNvbnN0IHZhbGlkRGVmYXVsdCA9IGRlZmF1bHRFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmICh2YWxpZERlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0KCksIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuXG4gICAgaWYgKHRoaXMudWkpIHtcbiAgICAgIHRoaXMudWkuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBNdWx0aXBsZUVkaXRvciBmcm9tICcuLi9lZGl0b3JzL211bHRpcGxlJ1xuaW1wb3J0IHtcbiAgaXNTZXQsXG4gIG1lcmdlRGVlcCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBpc09iamVjdCxcbiAgbm90U2V0LCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXNcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBNdWx0aXBsZUluc3RhbmNlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgTXVsdGlwbGVJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgTXVsdGlwbGVFZGl0b3IodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5zY2hlbWEuaWYoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgdGhpcy50aGVuU2NoZW1hID0gdGhpcy5zY2hlbWEudGhlbigpID8gbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSwgdGhpcy5zY2hlbWEudGhlbigpKSA6IG1lcmdlRGVlcCh7fSwgc2NoZW1hQ2xvbmUpXG4gICAgICB0aGlzLmVsc2VTY2hlbWEgPSB0aGlzLnNjaGVtYS5lbHNlKCkgPyBtZXJnZURlZXAoe30sIHNjaGVtYUNsb25lLCB0aGlzLnNjaGVtYS5lbHNlKCkpIDogbWVyZ2VEZWVwKHt9LCBzY2hlbWFDbG9uZSlcbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHRoaXMudGhlblNjaGVtYSlcbiAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHRoaXMuZWxzZVNjaGVtYSlcblxuICAgICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgICBkZWxldGUgc2NoZW1hLmlmXG4gICAgICAgIGRlbGV0ZSBzY2hlbWEudGhlblxuICAgICAgICBkZWxldGUgc2NoZW1hLmVsc2VcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbMCwgMV1cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gWyd0aGVuJywgJ2Vsc2UnXVxuICAgIH0gZWxzZSBpZiAoaXNTZXQodGhpcy5zY2hlbWEuYW55T2YoKSkgfHwgaXNTZXQodGhpcy5zY2hlbWEub25lT2YoKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KHRoaXMuc2NoZW1hLmFueU9mKCkpID8gdGhpcy5zY2hlbWEuYW55T2YoKSA6IHRoaXMuc2NoZW1hLm9uZU9mKClcbiAgICAgIGNvbnN0IGNsb25lU2NoZW1hID0gdGhpcy5zY2hlbWEuY2xvbmUoKVxuICAgICAgZGVsZXRlIGNsb25lU2NoZW1hWydhbnlPZiddXG4gICAgICBkZWxldGUgY2xvbmVTY2hlbWFbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBjbG9uZVNjaGVtYVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uY2xvbmVTY2hlbWEsIC4uLnNjaGVtYSB9XG5cbiAgICAgICAgLy8gbWVyZ2UgYWxsT2ZcbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZikgJiYgc2NoZW1hLm9wdGlvbnM/Lm1lcmdlQWxsT2YpIHtcbiAgICAgICAgICBsZXQgbWVyZ2VkID0ge31cblxuICAgICAgICAgIHNjaGVtYS5hbGxPZi5mb3JFYWNoKChhbGxPZlNjaGVtYSkgPT4ge1xuICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VEZWVwKG1lcmdlZCwgYWxsT2ZTY2hlbWEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHNjaGVtYSA9IG1lcmdlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KGNsb25lU2NoZW1hLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IGNsb25lU2NoZW1hLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IHNjaGVtYS5vcHRpb25zPy5zd2l0Y2hlclRpdGxlIHx8ICdPcHRpb24tJyArIChpbmRleCArIDEpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaChzd2l0Y2hlck9wdGlvbnNMYWJlbClcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlKCkuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgICAgY29uc3Qgc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnNjaGVtYUNsb25lLFxuICAgICAgICAgIC4uLnsgdHlwZTogdHlwZSwgdGl0bGU6IHR5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYUNsb25lLnRpdGxlKSkge1xuICAgICAgICAgIHNjaGVtYS50aXRsZSA9IHNjaGVtYUNsb25lLnRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2godHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkpXG5cbiAgICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnYW55JykgfHwgIXRoaXMuc2NoZW1hLnR5cGUoKSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSB0aGlzLnNjaGVtYS5jbG9uZSgpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ0FycmF5JywgJ09iamVjdCcsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIC8vIEluc3RhbmNlc1xuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgICB9KVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgICAgICB0aGlzLnN3aXRjaElmKClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IHRoaXMuc2NoZW1hLmNsb25lKClcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGlzT2JqZWN0KHNjaGVtYUNsb25lKVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2VzWzBdKSkge1xuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZSgwLCBmYWxzZSwgc2V0VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSW5zdGFuY2UgKG5ld0luZGV4LCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUsIHNldFZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMubGFzdEluZGV4ID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuXG4gICAgaWYgKHNldFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSwgdHJpZ2dlcnNDaGFuZ2UpXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoSWYgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5pZigpKSkge1xuICAgICAgY29uc3QgaWZJbmRleCA9IHRoaXMuZ2V0SWZJbmRleCh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBwcmVWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShpZkluZGV4KVxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gICAgICBjb25zdCBmaW5hbFZhbHVlID0gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzKGN1cnJlbnRWYWx1ZSwgcHJlVmFsdWUpXG4gICAgICB0aGlzLnNldFZhbHVlKGZpbmFsVmFsdWUsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGdldElmSW5kZXggKHZhbHVlKSB7XG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogdGhpcy5zY2hlbWEuaWYoKSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG4gICAgcmV0dXJuIGlmRXJyb3JzLmxlbmd0aCA9PT0gMCA/IDAgOiAxXG4gIH1cblxuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5pbnN0YW5jZXMpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVcblxuICAgIC8vIGlmIHZhbHVlIG1hdGNoZXMgdGhlIGFjdGl2ZSBpbnN0YW5jZSB0eXBlIHNldCB0aGUgdmFsdWUuIEVsc2Ugc3dpdGNoIHRvIHRoZSBmaXJzdFxuICAgIC8vIGluc3RhbmNlIHRoYXQgbWF0Y2ggdGhlIHZhbHVlLlxuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB2YWx1ZSkpIHtcbiAgICAgIGxldCBmaXR0ZXN0SW5kZXhcblxuICAgICAgaWYgKGlzU2V0KHRoaXMuc2NoZW1hLmlmKCkpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0SWZJbmRleCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHZhbHVlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUluc3RhbmNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBOdWxsSW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBOdWxsSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IE51bGxFZGl0b3IodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IE51bWJlckVudW1SYWRpb0VkaXRvciBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgTnVtYmVySW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBOdW1iZXJJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlSXNOdW1lcmljKCkgJiYgaXNTZXQodGhpcy5zY2hlbWEuZW51bSgpKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygncmFkaW8nKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFbnVtUmFkaW9FZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE51bWJlckVudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJc051bWVyaWMoKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBOdW1iZXJFZGl0b3IodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgZGlmZmVyZW50LCBpc1NldCwgbm90U2V0LCBnZXRUeXBlLCBpc09iamVjdCwgaGFzT3duIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgT2JqZWN0R3JpZEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1ncmlkJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBPYmplY3ROYXZFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtbmF2J1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gT2JqZWN0SW5zdGFuY2UgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBPYmplY3RJbnN0YW5jZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgT2JqZWN0RWRpdG9yKHRoaXMpXG5cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdvYmplY3QnKSAmJiB0aGlzLnNjaGVtYS5mb3JtYXRJcygnZ3JpZCcpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE9iamVjdEdyaWRFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnb2JqZWN0JykgJiYgdGhpcy5zY2hlbWEuZm9ybWF0SXMoJ25hdicpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE9iamVjdE5hdkVkaXRvcih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IE9iamVjdEVkaXRvcih0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGlmIChpc1NldCh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKCkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKClba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGlzU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkpICYmIHRoaXMuc2NoZW1hLnJlcXVpcmVkKCkuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLnNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgaXNOb3RSZXF1aXJlZCA9ICF0aGlzLmlzUmVxdWlyZWQoa2V5KVxuICAgIGNvbnN0IHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQgPSB0aGlzLmplZGkub3B0aW9ucy5kZWFjdGl2YXRlUHJvcGVydGllcyB8fCB0aGlzLnNjaGVtYS5vcHRpb24oJ2RlYWN0aXZhdGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChpc05vdFJlcXVpcmVkICYmIHNob3VsZFN0YXJ0RGVhY3RpdmF0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgLy8gcmVtb3ZlIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgY29uc3Qga2V5ID0gaW5zdGFuY2UuZ2V0S2V5KClcbiAgICAgIGlmIChub3RTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsZXRlQ2hpbGQoa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVbY2hpbGQuZ2V0S2V5KCldXG5cbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHZhbHVlIGlmIHRoZSBvbGQgdmFsdWUgYW5kIHRoZSBuZXcgdmFsdWUgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZGlmZmVyZW50KG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGlsZC5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgY2hpbGQgaW5zdGFuY2UgZm9yIHRoZSBuZXcgdmFsdWUgZW50cnkgaGF2aW5nIHRoZSB2YWx1ZSBhcyBkZWZhdWx0XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUoaW5pdGlhbFZhbHVlKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRlZmF1bHQ6IGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEluc3RhbmNlXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmcnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8nXG5pbXBvcnQgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFN0cmluZ0luc3RhbmNlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgU3RyaW5nSW5zdGFuY2UgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpICYmIHRoaXMuc2NoZW1hLmZvcm1hdElzKCdyYWRpbycpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1SYWRpb0VkaXRvcih0aGlzKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZUlzKCdzdHJpbmcnKSAmJiBpc1NldCh0aGlzLnNjaGVtYS5lbnVtKCkpKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IodGhpcylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGVJcygnc3RyaW5nJykpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgU3RyaW5nRWRpdG9yKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0luc3RhbmNlXG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgTXVsdGlwbGVJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBCb29sZWFuSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgQXJyYXlJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBTdHJpbmdJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgTnVtYmVySW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IE51bGxJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBnZXRUeXBlLCBoYXNPd24sIGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKZWRpIGluc3RhbmNlLlxuICovXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBKZWRpIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IG9wdGlvbnMuc2NoZW1hIC0gQSBKU09OIHNjaGVtYVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFZGl0b3IgLSBHZW5lcmF0ZXMgVUkgY29udHJvbHMgdG8gZWRpdCB0aGUgSlNPTiB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29udGFpbmVyIC0gV2hlcmUgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGhlbWUgLSBIb3cgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgYWx3YXlzU2hvd0Vycm9yczogZmFsc2UsXG4gICAgICBzaG93UmVxdWlyZWRPbmx5OiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICB0aGVtZTogJ2JhcmVib25lcycsXG4gICAgICByZWZQYXJzZXI6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodGhpcy5vcHRpb25zLnNjaGVtYSlcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBqc29uIGluc3RhbmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgbGV0IGluc3RhbmNlXG5cbiAgICAvLyBjaXJjdWxhciAkcmVmIGFyZSBub3QgaW5pdGlhbGx5IGRlcmVmZXJlbmNlZCBhbmQgbXVzdCBiZSBkZWZpbmVkIG9uIGNyZWF0aW9uXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWZQYXJzZXIgJiYgaGFzT3duKGNvbmZpZy5zY2hlbWEsICckcmVmJykpIHtcbiAgICAgIGNvbmZpZy5zY2hlbWEgPSB0aGlzLnJlZlBhcnNlci5kZWZpbmUoY29uZmlnLnNjaGVtYVsnJHJlZiddKVxuICAgIH1cblxuICAgIGNvbmZpZy5zY2hlbWEgPSBuZXcgU2NoZW1hKGNvbmZpZy5zY2hlbWEpXG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ2Jvb2xlYW4nKSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQm9vbGVhbkluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ29iamVjdCcpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBPYmplY3RJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhcnJheScpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBcnJheUluc3RhbmNlKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNjaGVtYS50eXBlSXMoJ3N0cmluZycpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBTdHJpbmdJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzTnVtZXJpYygpKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBOdW1iZXJJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zY2hlbWEudHlwZUlzKCdudWxsJykpIHtcbiAgICAgIGluc3RhbmNlID0gbmV3IE51bGxJbnN0YW5jZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGNvbmZpZy5zY2hlbWEuaWYoKSkgfHwgaXNTZXQoY29uZmlnLnNjaGVtYS5hbnlPZigpKSB8fCBpc1NldChjb25maWcuc2NoZW1hLm9uZU9mKCkpIHx8IGNvbmZpZy5zY2hlbWEudHlwZUlzKCdhbnknKSB8fCBpc0FycmF5KGNvbmZpZy5zY2hlbWEudHlwZSgpKSB8fCBub3RTZXQoY29uZmlnLnNjaGVtYS50eXBlKCkpKSB7XG4gICAgICBpZiAobm90U2V0KGNvbmZpZy5zY2hlbWEudHlwZSgpKSAmJiBpc1NldChjb25maWcuc2NoZW1hLmRlZmF1bHQoKSkpIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjb25maWcuc2NoZW1hLmNsb25lKClcbiAgICAgICAgc2NoZW1hQ2xvbmUudHlwZSA9IGdldFR5cGUoY29uZmlnLnNjaGVtYS5kZWZhdWx0KCkpXG4gICAgICAgIGNvbmZpZy5zY2hlbWEgPSBzY2hlbWFDbG9uZVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZShjb25maWcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBNdWx0aXBsZUluc3RhbmNlKGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoaW5zdGFuY2UpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKi9cbiAgc2V0VmFsdWUgKCkge1xuICAgIHRoaXMucm9vdC5zZXRWYWx1ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGluc3RhbmNlIGJ5IHBhdGhcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW3BhdGhdXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZGlzYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmVuYWJsZSgpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5pbnN0YW5jZXNba2V5XVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yLmdldEVycm9ycygpXVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yb290LmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xuXG5pbXBvcnQge1xuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nLFxuICBub3RTZXQsXG4gIGNsb25lLCBlcXVhbFxufSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBSZWZQYXJzZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFJlZlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKG5vdFNldChvcHRpb25zKSkge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25zID0gb3B0aW9ucy5pdGVyYXRpb25zIHx8IDdcbiAgICB0aGlzLlhNTEh0dHBSZXF1ZXN0ID0gb3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdFxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fVxuICB9XG5cbiAgZGVyZWZlcmVuY2UgKHNjaGVtYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGRlZmluaXRpb25zIGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHJlZmVyZW5jZXNcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoYXJncy5rZXkgIT09ICckcmVmJykge1xuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uc1thcmdzLnBhdGhdID0gYXJncy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gZGVyZWZlcmVuY2VcbiAgICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoIWlzT2JqZWN0KGFyZ3MudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZWZPd25lciA9IGFyZ3MucHJldlZhbHVlXG4gICAgICAgICAgY29uc3QgcmVmID0gYXJncy52YWx1ZVsnJHJlZiddXG5cbiAgICAgICAgICBpZiAoaXNTZXQocmVmT3duZXIpICYmIGlzU2V0KHJlZikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2lyY3VsYXJQYXRoKGFyZ3MucGF0aCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpcmN1bGFyJywgYXJncy5wYXRoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmT3duZXJbYXJncy5rZXldID0gdGhpcy5kZWZpbmUocmVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICBpc0NpcmN1bGFyUGF0aCAocGF0aCkge1xuICAgIGxldCBvdXRwdXQgPSBmYWxzZVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZWZpbml0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvLyByZW1vdmUgI1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwocGF0aC5sZW5ndGggLyAyKVxuICAgICAgY29uc3QgZmlyc3RIYWxmID0gcGF0aC5zbGljZSgwLCBoYWxmKVxuICAgICAgY29uc3Qgc2Vjb25kSGFsZiA9IHBhdGguc2xpY2UoaGFsZilcblxuICAgICAgaWYgKGVxdWFsKGZpcnN0SGFsZiwgc2Vjb25kSGFsZikpIHtcbiAgICAgICAgb3V0cHV0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cblxuICBkZWZpbmUgKHJlZikge1xuICAgIGlmICghaXNTdHJpbmcocmVmKSkge1xuICAgICAgcmV0dXJuIHJlZlxuICAgIH1cblxuICAgIC8vIGRlZmluaXRpb25zXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGlmIChpc1NldCh0aGlzLmRlZmluaXRpb25zW3JlZl0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzLmRlZmluaXRpb25zW3JlZl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgdGhpcy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgeyBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzSW50ZWdlciwgaXNCb29sZWFuLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvciAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWFcbiAgfVxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHRydWVcbiAgfVxuXG4gIGFsbE9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5hbGxPZikgPyB0aGlzLnNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgYW55T2YgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLmFueU9mKSA/IHRoaXMuc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnN0XG4gIH1cblxuICBjb250YWlucyAoKSB7XG4gICAgcmV0dXJuIChpc09iamVjdCh0aGlzLnNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLmNvbnRhaW5zKSkgPyB0aGlzLnNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSlcbiAgfVxuXG4gIGRlZmF1bHQgKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gIH1cblxuICBkZXBlbmRlbnRSZXF1aXJlZCAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHRoaXMuc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXBlbmRlbnRTY2hlbWFzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyB0aGlzLnNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG4gIH1cblxuICBkZXNjcmlwdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbHNlICgpIHtcbiAgICByZXR1cm4gKGlzT2JqZWN0KHRoaXMuc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbih0aGlzLnNjaGVtYS5lbHNlKSkgPyB0aGlzLnNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG4gIH1cblxuICBlbnVtICgpIHtcbiAgICBpZiAoaXNBcnJheSh0aGlzLnNjaGVtYS5lbnVtKSAmJiB0aGlzLnNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5lbnVtXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWF4aW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZXhjbHVzaXZlTWluaW11bSAoKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxuICB9XG5cbiAgZm9ybWF0SXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc1NldCh0aGlzLmZvcm1hdCgpKSAmJiB0aGlzLmZvcm1hdCgpID09PSB2YWx1ZSlcbiAgfVxuXG4gIGlmICgpIHtcbiAgICBpZiAoaXNPYmplY3QodGhpcy5zY2hlbWEuaWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaWZcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHRoaXMuc2NoZW1hLmlmKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmlmXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgaXRlbXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLml0ZW1zKSA/IHRoaXMuc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhpbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWF4aW11bSkgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtYXhDb250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhDb250YWlucykgJiYgdGhpcy5zY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heENvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4SXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWF4SXRlbXMpICYmIHRoaXMuc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1heExlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhMZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4TGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWF4UHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBtaW5pbXVtICgpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zY2hlbWEubWluaW11bSkgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG4gIH1cblxuICBtaW5Db250YWlucyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Db250YWlucykgJiYgdGhpcy5zY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbkNvbnRhaW5zXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluSXRlbXMgKCkge1xuICAgIGlmIChpc0ludGVnZXIodGhpcy5zY2hlbWEubWluSXRlbXMpICYmIHRoaXMuc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5JdGVtc1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIG1pbkxlbmd0aCAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5MZW5ndGgpICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluTGVuZ3RoXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbWluUHJvcGVydGllcyAoKSB7XG4gICAgaWYgKGlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgbXVsdGlwbGVPZiAoKSB7XG4gICAgaWYgKGlzTnVtYmVyKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpICYmIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm11bHRpcGxlT2ZcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBub3QgKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4odGhpcy5zY2hlbWEubm90KSkgPyB0aGlzLnNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbiAgfVxuXG4gIG9wdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS5vcHRpb25zICYmIHRoaXMuc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyB0aGlzLnNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiBmYWxzZVxuICB9XG5cbiAgcGF0dGVybiAoKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRoaXMuc2NoZW1hLnBhdHRlcm4pID8gdGhpcy5zY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcGF0dGVyblByb3BlcnRpZXMgKCkge1xuICAgIHJldHVybiBpc09iamVjdCh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJlZml4SXRlbXMgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHRoaXMuc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG4gIH1cblxuICBwcm9wZXJ0aWVzICgpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpcy5zY2hlbWEucHJvcGVydGllcykgPyB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG4gIH1cblxuICByZWFkT25seSAoKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih0aGlzLnNjaGVtYS5yZWFkT25seSkgPyB0aGlzLnNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxuICB9XG5cbiAgcmVxdWlyZWQgKCkge1xuICAgIHJldHVybiBpc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHRoaXMuc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRoZW4gKCkge1xuICAgIHJldHVybiAoaXNPYmplY3QodGhpcy5zY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHRoaXMuc2NoZW1hLnRoZW4pKSA/IHRoaXMuc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbiAgfVxuXG4gIHRpdGxlICgpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGhpcy5zY2hlbWEudGl0bGUpID8gdGhpcy5zY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGUgKCkge1xuICAgIGlmIChpc1N0cmluZyh0aGlzLnNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHRoaXMuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHR5cGVJcyAodmFsdWUpIHtcbiAgICByZXR1cm4gKGlzU2V0KHRoaXMudHlwZSgpKSAmJiB0aGlzLnR5cGUoKSA9PT0gdmFsdWUpXG4gIH1cblxuICB0eXBlSXNOdW1lcmljICgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlSXMoJ251bWJlcicpIHx8IHRoaXMudHlwZUlzKCdpbnRlZ2VyJylcbiAgfVxuXG4gIG9uZU9mICgpIHtcbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLnNjaGVtYS5vbmVPZikgPyB0aGlzLnNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxuICB9XG5cbiAgdW5pcXVlSXRlbXMgKCkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpID8gdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEZvb3RlciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGh0bWwudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlCdG5EZWxldGVBbGwgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZS1hbGwnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZWxldGVJdGVtQnRuICgpIHtcbiAgICBjb25zdCBkZWxldGVJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCdcbiAgICB9KVxuXG4gICAgbW92ZVVwSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgcmV0dXJuIG1vdmVVcEl0ZW1CdG5cbiAgfVxuXG4gIGdldE1vdmVEb3duSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZURvd25JdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICBnZXRCdXR0b25BY3RpdmVDbGFzcyAoKSB7XG4gICAgcmV0dXJuICdqZWRpLWFjdGl2ZS1idG4nXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHByb3BlcnRpZXNUb2dnbGUsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLFxuICAgICAgYWRkUHJvcGVydHlDb250cm9sLFxuICAgICAgYWRkUHJvcGVydHlCdG4sXG4gICAgICBwcm9wZXJ0aWVzQWN0aXZhdG9ycyxcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIGdldEFycmF5Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJ1xuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVBbGxCdG4gPSB0aGlzLmdldEFycmF5QnRuRGVsZXRlQWxsKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW1zJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVBbGxCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGRlbGV0ZUFsbEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIGdldEFycmF5SXRlbSAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcigpXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuZ2V0TW92ZURvd25JdGVtQnRuKClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGJvZHksXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBkZWxldGVCdG4sXG4gICAgICBtb3ZlVXBCdG4sXG4gICAgICBtb3ZlRG93bkJ0blxuICAgIH1cbiAgfVxuXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlXG4gICAgfSlcblxuICAgIHN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbFxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGluaycpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuaWQpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGluaylcbiAgICByZXR1cm4geyBsaXN0LCBsaW5rIH1cbiAgfVxuXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnamVkaS10YWItcGFuZScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL2JhcmVib25lcydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbkFjdGl2ZUNsYXNzICgpIHtcbiAgICByZXR1cm4gJ2J0bi1wcmltYXJ5J1xuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGItMCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gc3VwZXIuZ2V0Rm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKVxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vYmFyZWJvbmVzJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZSB7XG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Rm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBzdXBlci5nZXRGb290ZXIoKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWZvb3RlcicpXG4gICAgcmV0dXJuIGZvb3RlclxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtZW5kJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uQWN0aXZlQ2xhc3MgKCkge1xuICAgIHJldHVybiAnYnRuLXByaW1hcnknXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsImV4cG9ydCBjb25zdCBjbG9uZSA9ICh0aGluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG59XG5cbmV4cG9ydCBjb25zdCBmYWtlRm9yRWFjaCA9IChhcnJheSwgY2FsbGJhY2spID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdFeHAgPSAoc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoc3RyLCBmaW5kLCByZXBsYWNlKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSlcbn1cblxuZXhwb3J0IGNvbnN0IHBhdGhUb0F0dHJpYnV0ZSA9IChwYXRoKSA9PiB7XG4gIHJldHVybiByZXBsYWNlQWxsKHJlcGxhY2VBbGwocGF0aCwgJyMnLCAncm9vdCcpLCAnLycsICctJylcbn1cblxuZXhwb3J0IGNvbnN0IGhhc093biA9IChvYmosIGtleSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMilcbn1cblxuZXhwb3J0IGNvbnN0IHJvdW5kMmRlY2ltYWxzID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMDApIC8gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBzb3J0T2JqZWN0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG5leHBvcnQgY29uc3QgZXF1YWwgPSAoYSwgYikgPT4ge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgY29uc3QgZGlmZmVyZW50ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG5leHBvcnQgY29uc3QgaXNOdWxsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgaXNTZXQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0IGNvbnN0IG5vdFNldCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAodmFsdWUpID0+IHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBjb25zdCBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgPSAob2JqMSwgb2JqMikgPT4ge1xuICBPYmplY3Qua2V5cyhvYmoyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iajEpIHtcbiAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JqMVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tSlNPTiA9IChkYXRhLCBwYXRoKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBpbGVUZW1wbGF0ZSA9ICh0ZW1wbGF0ZSwgZGF0YSkgPT4ge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgve3soLio/KX19L2csIChtYXRjaCkgPT4ge1xuICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHBhdGggPSBtYXRjaC5zcGxpdCgve3t8fX0vKVsxXVxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21KU09OKGRhdGEsIHBhdGgpXG4gIH0pXG59XG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYS5wcm9wZXJ0aWVzKCkpID8gc2NoZW1hLnByb3BlcnRpZXMoKSA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKClcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgYFByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cIiBoYXMgbm90IGJlZW4gZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSBkb2VzIG5vdCBhbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXMuYFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgcm9vdE5hbWU6IHByb3BlcnR5LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgYWxsT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgbGV0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5hbGxPZigpKSkge1xuICAgIHNjaGVtYS5hbGxPZigpLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJvb3ROYW1lOiBrZXksIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVycm9ycyA9IHN1YlNjaGVtYUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgc3ViU2NoZW1hRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uc3ViU2NoZW1hRXJyb3JzXVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFueU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGxldCBleHRyYU1lc3NhZ2VzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmFueU9mKCkpKSB7XG4gICAgY29uc3QgYW55T2YgPSBzY2hlbWEuYW55T2YoKVxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBhbnlPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGFueU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBleHRyYU1lc3NhZ2VzID0gWy4uLmV4dHJhTWVzc2FnZXMsIEpTT04uc3RyaW5naWZ5KHNjaGVtYSldXG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gICAgICAgICAgLi4uZXh0cmFNZXNzYWdlc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IF9jb25zdCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBpZiAoaXNTZXQoc2NoZW1hLmNvbnN0KCkpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYS5jb25zdCgpKVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICdNdXN0IGJlOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmNvbnN0KCkpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuY29udGFpbnMoKSkpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5jb250YWlucygpLCBzdGFydFZhbHVlOiBpdGVtLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLmdldEVycm9ycygpXG5cbiAgICAgIGlmIChjb250YWluc0Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5zRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluc0ludmFsaWQgPSAoY291bnRlciA9PT0gMClcblxuICAgIGlmIChpc1NldChzY2hlbWEubWluQ29udGFpbnMoKSkpIHtcbiAgICAgIGNvbnN0IG1pbkNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyIDwgc2NoZW1hLm1pbkNvbnRhaW5zKCkpXG5cbiAgICAgIGlmIChtaW5Db250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBgQ29udGFpbnMgbWF0Y2ggY291bnQgJHtjb3VudGVyfSBpcyBsZXNzIHRoYW4gbWluaW11bSBjb250YWlucyBjb3VudCBvZiAke3NjaGVtYS5taW5Db250YWlucygpfWBcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICdObyBpdGVtcyBtYXRjaCBjb250YWlucydcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hLm1heENvbnRhaW5zKCkpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IHNjaGVtYS5tYXhDb250YWlucygpKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgYENvbnRhaW5zIG1hdGNoIGNvdW50ICR7Y291bnRlcn0gZXhjZWVkcyBtYXhpbXVtIGNvbnRhaW5zIGNvdW50IG9mICR7c2NoZW1hLm1heENvbnRhaW5zKCl9YFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKCkpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCgpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQoKVtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczogJyArIG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMoKSkpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcygpW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGRlcGVuZGVudFNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcbiAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udG1wRXJyb3JzXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2VudW0gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgaWYgKGlzU2V0KHNjaGVtYS5lbnVtKCkpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWEuZW51bSgpLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLmVudW0oKSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgbGVzcyB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSgpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0oKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgYmUgZ3JlYXRlciB0aGFuICcgKyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSgpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLmZvcm1hdCgpKSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBsZXQgbWVzc2FnZXNcbiAgICBsZXQgcmVnZXhwXG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCdlbWFpbCcpKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/JC9pKVxuICAgICAgbWVzc2FnZXMgPSBbJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ11cbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1cmwnKSkge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICAgIG1lc3NhZ2VzID0gWydNdXN0IGJlIGEgdmFsaWQgZW1haWwgdXJsJ11cbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmZvcm1hdElzKCd1dWlkJykpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgICBtZXNzYWdlcyA9IFsnTXVzdCBiZSBhIHZhbGlkIGVtYWlsIHV1aWQnXVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgX2lmID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU2V0KHNjaGVtYS5pZigpKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hLnRoZW4oKSkgJiYgbm90U2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLmlmKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWEudGhlbigpKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEudGhlbigpLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYS5lbHNlKCkpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYS5lbHNlKCksIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLmlmKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5pZigpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBpdGVtcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIC8vIHRvZG8gaWYgYXJyYXkgbGVuZ3RoIGlzID4gcHJlZml4SXRlbXMubGVuZ3RoXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChzY2hlbWEuaXRlbXMoKSkpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSA/IHNjaGVtYS5wcmVmaXhJdGVtcygpLmxlbmd0aCA6IDBcblxuICAgIGlmIChzY2hlbWEuaXRlbXMoKSA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydTY2hlbWEgYWx3YXlzIGZhaWxzIHZhbGlkYXRpb24uJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhJdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gc2NoZW1hLm1heEl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKCkgKyAnIGl0ZW1zJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhMZW5ndGggPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhMZW5ndGgoKSkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IHNjaGVtYS5tYXhMZW5ndGgoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heExlbmd0aCgpICsgJyBjaGFyYWN0ZXJzIGxvbmcnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1heFByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tYXhQcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50ID4gc2NoZW1hLm1heFByb3BlcnRpZXMoKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4UHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtYXhpbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWF4aW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gY29tcHV0ZWRNYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGNvbXB1dGVkTWF4aW11bV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG1pbkl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5taW5JdGVtcygpKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGhhdmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcygpICsgJyBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluTGVuZ3RoID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluTGVuZ3RoKCkpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluTGVuZ3RoKCkpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluTGVuZ3RoKCkgKyAnIGNoYXJhY3RlcnMgbG9uZyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgbWluUHJvcGVydGllcyA9ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLm1pblByb3BlcnRpZXMoKSkpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPCBzY2hlbWEubWluUHJvcGVydGllcygpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluUHJvcGVydGllcygpICsgJyBwcm9wZXJ0aWVzJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBtaW5pbXVtID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChzY2hlbWEubWluaW11bSgpKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkTWluaW11bSA9IHNjaGVtYS5taW5pbXVtKClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlIDwgY29tcHV0ZWRNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBhdCBsZWFzdCAnICsgY29tcHV0ZWRNaW5pbXVtXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxlT2YgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5tdWx0aXBsZU9mKCkpKSB7XG4gICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gc2NoZW1hLm11bHRpcGxlT2YoKSA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIHNjaGVtYS5tdWx0aXBsZU9mKCkpKVxuICAgIGNvbnN0IGludmFsaWQgPSAoIWlzTXVsdGlwbGVPZiB8fCB2YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKCdlJykpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZigpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uL3NjaGVtYSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBub3QgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm5vdCgpKSkge1xuICAgIGNvbnN0IG5vdEVycm9ycyA9IHZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIG5ldyBTY2hlbWEoc2NoZW1hLm5vdCgpKSwga2V5LCBwYXRoKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbJ011c3Qgbm90IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS4nXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IG9uZU9mID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGxldCBleHRyYU1lc3NhZ2VzID0gW11cblxuICBpZiAoaXNTZXQoc2NoZW1hLm9uZU9mKCkpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBzY2hlbWEub25lT2YoKS5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBleHRyYU1lc3NhZ2VzID0gWy4uLmV4dHJhTWVzc2FnZXMsIEpTT04uc3RyaW5naWZ5KHNjaGVtYSldXG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0ICcgKyBjb3VudGVyICsgJyBvZiB0aGUgc2NoZW1hcy4nLFxuICAgICAgICAgIC4uLmV4dHJhTWVzc2FnZXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHBhdHRlcm4gPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wYXR0ZXJuKCkpKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChzY2hlbWEucGF0dGVybigpKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogWydNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgc2NoZW1hLnBhdHRlcm4oKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKCkpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMoKVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgICByZWZQYXJzZXI6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGVkaXRvckVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGggKyAnLycgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uZWRpdG9yRXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcblxuZXhwb3J0IGNvbnN0IHByZWZpeEl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5wcmVmaXhJdGVtcygpKSkge1xuICAgIHNjaGVtYS5wcmVmaXhJdGVtcygpLmZvckVhY2goKGl0ZW1TY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtVmFsdWUgPSB2YWx1ZVtpbmRleF1cblxuICAgICAgaWYgKGlzU2V0KGl0ZW1WYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IGl0ZW1TY2hlbWEsIHN0YXJ0VmFsdWU6IGl0ZW1WYWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbYEl0ZW0gJHtpbmRleH0gZmFpbHMgdmFsaWRhdGlvbi5gXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYS5yZXF1aXJlZCgpKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICBzY2hlbWEucmVxdWlyZWQoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiAnICsgbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKV0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNCb29sZWFuLCBpc0ludGVnZXIsIGlzTnVsbCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHR5cGUgPSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBpZiAoc2NoZW1hLnR5cGVJcygnYW55JykpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQoc2NoZW1hLnR5cGUoKSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHNjaGVtYS50eXBlKCkpKSB7XG4gICAgICB2YWxpZCA9IHNjaGVtYS50eXBlKCkuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlKCldKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSgpXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscydcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUl0ZW1zID0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHNjaGVtYS51bmlxdWVJdGVtcygpKSAmJiBzY2hlbWEudW5pcXVlSXRlbXMoKSA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFsnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcyddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4gfSBmcm9tICcuLi91dGlscydcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gc2NoZW1hLmNsb25lKClcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykgPyBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpIDogWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYS5vcHRpb24oJ21lc3NhZ2VzJykpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWEub3B0aW9uKCdtZXNzYWdlcycpLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=