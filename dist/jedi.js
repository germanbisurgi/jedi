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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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
      var navCols = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'navCols');
      var navStacked = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'navStacked');
      var navType = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaOption"])(this.instance.schema, 'navType');
      var row = this.theme.getRow();
      var cols = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(navCols) ? navCols : 3;
      var tabListCol = this.theme.getCol(12, cols);
      var tabContentCol = this.theme.getCol(12, 12 - cols);
      var tabContent = this.theme.getTabContent();
      var tabList = this.theme.getTabList({
        stacked: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(navStacked) ? navStacked : false,
        type: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(navType) ? navType : 'pils'
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
    value: function getInvalidFeedback(config) {
      return this.theme.getAlert(config);
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
    var alwaysShowErrors = _this.instance.jedi.options.showErrors === 'always' || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_12__["getSchemaOption"])(_this.instance.schema, 'showErrors') === 'always';
    if (alwaysShowErrors) {
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
      var neverShowErrors = this.instance.jedi.options.showErrors === 'never' || Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_12__["getSchemaOption"])(this.instance.schema, 'showErrors') === 'never';
      if (neverShowErrors) {
        return;
      }
      this.control.messages.innerHTML = '';
      errors.forEach(function (error) {
        error.messages.forEach(function (message) {
          var invalidFeedback = _this2.getInvalidFeedback({
            message: message
          });
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
    value: function getInvalidFeedback(config) {
      return this.theme.getInvalidFeedback(config);
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
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      return this.theme.getAlert(config);
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
          var columns = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_6__["getSchemaOption"])(child.schema, 'columns') || 12;
          var offset = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_6__["getSchemaOption"])(child.schema, 'offset') || 0;
          var col = _this.theme.getCol(12, columns, offset);
          if (Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_6__["getSchemaOption"])(child.schema, 'newRow') === true) {
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
      var controlCols = this.instance.schema['x-control-cols'];
      var controlStacked = this.instance.schema['x-control-stacked'];
      var controlVariant = this.instance.schema['x-control-variant'];
      var row = this.theme.getRow();
      var cols = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(controlCols) ? controlCols : 3;
      var tabListCol = this.theme.getCol(12, cols);
      var tabContentCol = this.theme.getCol(12, 12 - cols);
      var tabContent = this.theme.getTabContent();
      var tabList = this.theme.getTabList({
        stacked: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(controlStacked) ? controlStacked : false,
        type: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(controlVariant) ? controlVariant : 'pils'
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
        var schema = {};
        var schemaAdditionalProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaAdditionalProperties"])(_this.instance.schema);
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
    value: function getInvalidFeedback(config) {
      return this.theme.getAlert(config);
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
/*! exports provided: getSchemaX, getSchemaSchema, getSchemaAdditionalProperties, getSchemaAllOf, getSchemaAnyOf, getSchemaConst, getSchemaContains, getSchemaDefault, getSchemaDependentRequired, getSchemaDependentSchemas, getSchemaDescription, getSchemaElse, getSchemaEnum, getSchemaExclusiveMaximum, getSchemaExclusiveMinimum, getSchemaFormat, getSchemaIf, getSchemaItems, getSchemaMaximum, getSchemaMaxContains, getSchemaMaxItems, getSchemaMaxLength, getSchemaMaxProperties, getSchemaMinimum, getSchemaMinContains, getSchemaMinItems, getSchemaMinLength, getSchemaMinProperties, getSchemaMultipleOf, getSchemaNot, getSchemaOption, getSchemaPattern, getSchemaPatternProperties, getSchemaPrefixItems, getSchemaProperties, getSchemaReadOnly, getSchemaRequired, getSchemaThen, getSchemaTitle, getSchemaType, getSchemaOneOf, getSchemaUniqueItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaX", function() { return getSchemaX; });
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


function getSchemaX(schema, keyword) {
  var key = 'x-' + keyword;
  return schema[key];
}
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
  return schema.options && schema.options[option] ? schema.options[option] : undefined;
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
/*! exports provided: getCircularReplacer, clone, escapeRegExp, replaceAll, pathToAttribute, hasOwn, sortObject, equal, different, isNull, isSet, notSet, isNumber, isInteger, isString, isBoolean, isArray, isObject, getType, mergeDeep, deepCopy, overwriteExistingProperties, getValueByJSONPath, compileTemplate, clamp, removeDuplicatesFromArray */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
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
function deepCopy(obj) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj) !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    var _copy = [];
    for (var i = 0; i < obj.length; i++) {
      _copy[i] = deepCopy(obj[i]);
    }
    return _copy;
  }
  var copy = {};
  for (var key in obj) {
    if (hasOwn(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
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
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema)) || Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOneOf"])(this.schema))) {
        var schemasOf = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema)) ? Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaAnyOf"])(this.schema) : Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOneOf"])(this.schema);
        var schemaCopy = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["deepCopy"])(this.schema);
        delete schemaCopy['anyOf'];
        delete schemaCopy['oneOf'];
        delete schemaCopy['options'];
        schemasOf.forEach(function (schema, index) {
          schema = _objectSpread(_objectSpread({}, schemaCopy), schema);
          var switcherOptionsLabel = 'Option-' + (index + 1);
          var switcherTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOption"])(schema, 'switcherTitle');
          var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaTitle"])(schema);
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(schemaTitle)) {
            switcherOptionsLabel = schemaTitle;
          }
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(switcherTitle)) {
            switcherOptionsLabel = switcherTitle;
          }
          _this.switcherOptionValues.push(index);
          _this.switcherOptionsLabels.push(switcherOptionsLabel);
          _this.schemas.push(schema);
        });
      } else if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isArray"])(schemaType)) {
        schemaType.forEach(function (type, index) {
          var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["mergeDeep"])(_this.schema);
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
        var schemaClone = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["deepCopy"])(this.schema);
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
        data: value
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
      var schemaControl = this.schema['x-control'];
      this.ui = new _editors_object__WEBPACK_IMPORTED_MODULE_8__["default"](this);
      if (schemaType === 'object' && schemaFormat === 'grid') {
        this.ui = new _editors_object_grid__WEBPACK_IMPORTED_MODULE_7__["default"](this);
      } else if (schemaType === 'object' && schemaControl === 'nav') {
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
      if (this.isNotRequired(key) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(deactivateNonRequired) && deactivateNonRequired === true) {
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
/* harmony import */ var _ref_parser_ref_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ref-parser/ref-parser */ "./src/ref-parser/ref-parser.js");
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
      schema: {},
      showErrors: 'change',
      data: undefined,
      XMLHttpRequest: undefined
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
      this.schema = this.options.schema;
      this.refParser = new _ref_parser_ref_parser__WEBPACK_IMPORTED_MODULE_15__["default"]({
        XMLHttpRequest: this.options.XMLHttpRequest
      });
      this.refParser.dereference(this.options.schema);
      this.validator = new _validation_validator__WEBPACK_IMPORTED_MODULE_6__["default"](this.refParser);
      this.root = this.createInstance({
        jedi: this,
        schema: this.options.schema
      });
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_16__["isSet"])(this.options.data)) {
        this.root.setValue(this.options.data, false);
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
      this.hiddenInput.removeAttribute('aria-describedby');
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
     * Creates a json instance and dereference schema on the fly if needed.
     * @private
     */
  }, {
    key: "createInstance",
    value: function createInstance(config) {
      config.schema = this.refParser.expand(config.schema);
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

/***/ "./src/ref-parser/ref-parser.js":
/*!**************************************!*\
  !*** ./src/ref-parser/ref-parser.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/schema */ "./src/helpers/schema.js");



/* global XMLHttpRequest */




/**
 * Represents a RefParser instance.
 */
var RefParser = /*#__PURE__*/function () {
  function RefParser(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RefParser);
    this.iterations = options.iterations || 1;
    this.XMLHttpRequest = options.XMLHttpRequest || XMLHttpRequest;
    this.refDefinitions = {};
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RefParser, [{
    key: "dereference",
    value: function dereference(schema) {
      var _this = this;
      this.traverse({
        value: schema,
        callback: function callback(args) {
          if (args.key === '$ref') {
            _this.refDefinitions[args.value] = null;
          }
        }
      });

      // define external refs
      Object.keys(this.refDefinitions).forEach(function (ref) {
        if (ref.startsWith('http') || ref.startsWith('https')) {
          var request = new _this.XMLHttpRequest();
          request.open('GET', ref, false); // `false` makes the request synchronous
          request.send(null);
          if (request.status === 200) {
            _this.refDefinitions[ref] = JSON.parse(request.responseText);
          } else {
            console.error('can not load', ref);
          }
        }
      });

      // define internal refs
      this.traverse({
        value: schema,
        callback: function callback(args) {
          if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(_this.refDefinitions[args.path])) {
            _this.refDefinitions[args.path] = args.value;
          }
        }
      });
    }
  }, {
    key: "expand",
    value: function expand(schema) {
      var _this2 = this;
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(schema['$ref'])) {
        return this.refDefinitions[schema['$ref']];
      }
      var anyOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_4__["getSchemaAnyOf"])(schema);
      var oneOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_4__["getSchemaOneOf"])(schema);
      var allOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_4__["getSchemaAllOf"])(schema);
      var prefixItems = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_4__["getSchemaPrefixItems"])(schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(anyOf)) {
        Object.entries(anyOf).forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          schema.anyOf[key] = _this2.expand(value);
        });
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(oneOf)) {
        Object.entries(oneOf).forEach(function (_ref3) {
          var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];
          schema.oneOf[key] = _this2.expand(value);
        });
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(allOf)) {
        Object.entries(allOf).forEach(function (_ref5) {
          var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];
          schema.allOf[key] = _this2.expand(value);
        });
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(prefixItems)) {
        Object.entries(prefixItems).forEach(function (_ref7) {
          var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];
          schema.prefixItems[key] = _this2.expand(value);
        });
      }
      return schema;
    }
  }, {
    key: "traverse",
    value: function traverse(args) {
      var _this3 = this;
      var value = args.value;
      var callback = args.callback;
      var path = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(args.path) ? args.path + '/' + args.key : '#';
      args.path = path;
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isSet"])(callback)) {
        callback(args);
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
        Object.keys(value).forEach(function (key) {
          args.value = value[key];
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this3.traverse(args);
        });
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(value)) {
        value.forEach(function (newValue, key) {
          args.value = newValue;
          args.key = key;
          args.path = path;
          args.prevValue = value;
          _this3.traverse(args);
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
      html.setAttribute('data-target', '#' + config.propertiesContainer.id);
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
      html.setAttribute('data-target', '#' + config.propertiesContainer.id);
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
      html.setAttribute('data-bs-target', '#' + config.propertiesContainer.id);
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
          if (config.propertiesContainer.hasAttribute('style')) {
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
        button.setAttribute('id', config.id);
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
        id: 'properties-slot-toggle-' + config.id,
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
        input.setAttribute('aria-description', descriptionId);
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      input.setAttribute('aria-describedby', messagesId);
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
        input.setAttribute('aria-description', descriptionId);
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      input.setAttribute('aria-describedby', messagesId);
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
      var label = document.createElement('span');
      var fieldset = this.getFieldset();
      var messages = this.getMessagesSlot();
      var legend = this.getLegend({
        textContent: config.label
      });
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var descriptionId = config.id + '-description';
      var description = document.createElement('div');
      description.setAttribute('id', descriptionId);
      if (config.srOnly) {
        this.hideElement(label);
      }
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
        if (config.description) {
          radio.setAttribute('aria-description', descriptionId);
        }
        radio.setAttribute('aria-describedby', messagesId);
        var label = document.createElement('label');
        label.setAttribute('for', config.id + '-' + index);
        var labelText = document.createElement('span');
        labelTexts.push(labelText);
        if (config.titles && config.titles[index]) {
          labelText.textContent = config.titles[index];
        }
        labels.push(label);
      });
      if (config.description) {
        description.textContent = config.description;
      }
      if (config.label) {
        label.textContent = config.label;
      }
      fieldset.appendChild(label);
      container.appendChild(fieldset);
      container.appendChild(actions);
      fieldset.appendChild(legend);
      actions.appendChild(arrayActions);
      radioControls.forEach(function (radioControl, index) {
        fieldset.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
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
        input.setAttribute('aria-description', descriptionId);
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      input.setAttribute('aria-describedby', messagesId);
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
        input.setAttribute('aria-description', descriptionId);
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      input.setAttribute('aria-describedby', messagesId);
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
      element.setAttribute('style', 'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;');
    }

    /**
     * Reveals a visually hidden element
     * @private
     */
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.removeAttribute('style');
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
            XMLHttpRequest: validator.refParser.XMLHttpRequest,
            schema: _additionalProperties,
            data: value[property]
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
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schema,
        data: value,
        rootName: key
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
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");




function anyOf(validator, value, schema, key, path) {
  var errors = [];
  var anyOf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaAnyOf"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(anyOf)) {
    var valid = false;
    anyOf.forEach(function (schema) {
      var anyOfEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schema,
        data: value
      });
      var anyOfErrors = anyOfEditor.getErrors();
      anyOfEditor.destroy();
      if (anyOfErrors.length === 0) {
        valid = true;
      }
    });
    if (!valid) {
      errors.push({
        messages: [_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorAnyOf],
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
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: contains,
        data: item
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
          XMLHttpRequest: validator.refParser.XMLHttpRequest,
          schema: dependentSchema,
          data: value
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
      XMLHttpRequest: validator.refParser.XMLHttpRequest,
      schema: schemaIf,
      data: value
    });
    var ifErrors = ifEditor.getErrors();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaThen)) {
      var thenEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schemaThen,
        data: value
      });
      thenErrors = thenEditor.getErrors();
      thenEditor.destroy();
    }
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaElse)) {
      var elseEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schemaElse,
        data: value
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");




function not(validator, value, schema, key, path) {
  var errors = [];
  var not = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaNot"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(not)) {
    var notEditor = new _jedi__WEBPACK_IMPORTED_MODULE_3__["default"]({
      XMLHttpRequest: validator.refParser.XMLHttpRequest,
      schema: not,
      data: value
    });
    var notErrors = notEditor.getErrors();
    notEditor.destroy();
    var invalid = notErrors.length === 0;
    if (invalid) {
      errors.push({
        messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].errorNot)],
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
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schema,
        data: value
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
            XMLHttpRequest: validator.refParser.XMLHttpRequest,
            schema: _schema,
            data: value[propertyName]
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
          XMLHttpRequest: validator.refParser.XMLHttpRequest,
          schema: itemSchema,
          data: itemValue
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
  function Validator(refParser) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Validator);
    this.refParser = refParser;
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
          messages: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_8__["isSet"])(schemaOptionsMessages) ? schemaOptionsMessages : ['invalid'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yQXJyYXlOYXYiLCJfRWRpdG9yQXJyYXkiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiYWN0aXZlVGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiY29udHJvbCIsImFkZEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0YW5jZSIsImxlbmd0aCIsImFkZEl0ZW0iLCJyZWZyZXNoVUkiLCJfdGhpczIiLCJyZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsIm5hdkNvbHMiLCJnZXRTY2hlbWFPcHRpb24iLCJzY2hlbWEiLCJuYXZTdGFja2VkIiwibmF2VHlwZSIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImlzU2V0IiwidGFiTGlzdENvbCIsImdldENvbCIsInRhYkNvbnRlbnRDb2wiLCJ0YWJDb250ZW50IiwiZ2V0VGFiQ29udGVudCIsInRhYkxpc3QiLCJnZXRUYWJMaXN0Iiwic3RhY2tlZCIsInR5cGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJkZWxldGVCdG4iLCJnZXREZWxldGVJdGVtQnRuIiwibW92ZVVwQnRuIiwiZ2V0TW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duQnRuIiwiZ2V0TW92ZURvd25JdGVtQnRuIiwidWkiLCJhcnJheUFjdGlvbnMiLCJjb250YWluZXIiLCJjaGlsZFRpdGxlIiwic2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlIiwidGVtcGxhdGUiLCJkYXRhIiwiaTAiLCJpMSIsImdldFZhbHVlIiwiY29tcGlsZVRlbXBsYXRlIiwic2NoZW1hVGl0bGUiLCJnZXRTY2hlbWFUaXRsZSIsImdldEtleSIsImNsYW1wIiwiZGVsZXRlSXRlbSIsInRvSW5kZXgiLCJtb3ZlIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwidGFiIiwiZ2V0VGFiIiwidGl0bGUiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImlzUmVhZE9ubHkiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2V0QXR0cmlidXRlIiwiRWRpdG9yQXJyYXkiLCJfRWRpdG9yIiwiYnVpbGQiLCJnZXRBcnJheUNvbnRyb2wiLCJzck9ubHkiLCJkZXNjcmlwdGlvbiIsImdldFNjaGVtYURlc2NyaXB0aW9uIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwiY29uZmlnIiwiZ2V0QWxlcnQiLCJzYW5pdGl6ZSIsImlzQXJyYXkiLCJtYXhJdGVtcyIsImdldFNjaGVtYU1heEl0ZW1zIiwibWluSXRlbXMiLCJnZXRTY2hlbWFNaW5JdGVtcyIsIml0ZW1JbmRleCIsIk51bWJlciIsInNwbGl0IiwiamVkaSIsInBhdGhTZXBhcmF0b3IiLCJwb3AiLCJFZGl0b3IiLCJFZGl0b3JCb29sZWFuRW51bVJhZGlvIiwiX0VkaXRvckJvb2xlYW4iLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJzZXRWYWx1ZSIsImNoZWNrZWQiLCJFZGl0b3JCb29sZWFuIiwiRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsInJlYWRPbmx5IiwiY29lcmNlVmFsdWUiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwiYWx3YXlzU2hvd0Vycm9ycyIsIm9wdGlvbnMiLCJzaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsImljb25zIiwiaWNvbkxpYiIsImdseXBoaWNvbnMiLCJib290c3RyYXBJY29ucyIsImZvbnRBd2Vzb21lMyIsImZvbnRBd2Vzb21lNCIsImZvbnRBd2Vzb21lNSIsImZvbnRBd2Vzb21lNiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lIiwiZ2V0U2NoZW1hVHlwZSIsInNjaGVtYUVudW0iLCJnZXRTY2hlbWFFbnVtIiwiaW5jbHVkZXMiLCJuZXZlclNob3dFcnJvcnMiLCJtZXNzYWdlcyIsImVycm9yIiwibWVzc2FnZSIsImludmFsaWRGZWVkYmFjayIsIl90aGlzMyIsImludGVyYWN0aXZlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJfdGhpczQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiRWRpdG9yTXVsdGlwbGUiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwic3dpdGNoSW5zdGFuY2UiLCJhY3RpdmVJbnN0YW5jZSIsIkVkaXRvck51bGwiLCJnZXROdWxsQ29udHJvbCIsImdldFNjaGVtYUZvcm1hdCIsIkVkaXRvck51bWJlckVudW1SYWRpbyIsIl9FZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IiwiZ2V0SW5wdXRDb250cm9sIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJFZGl0b3JPYmplY3RHcmlkIiwiX0VkaXRvck9iamVjdCIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIkVkaXRvck9iamVjdCIsIkVkaXRvck9iamVjdE5hdiIsImNvbnRyb2xDb2xzIiwiY29udHJvbFN0YWNrZWQiLCJjb250cm9sVmFyaWFudCIsImFkZFByb3BlcnR5IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyIsImdldE9iamVjdENvbnRyb2wiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJlcXVhbCIsImFkZFByb3BlcnR5QnRuIiwiYWRkUHJvcGVydHlDb250cm9sIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0Iiwic2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiaXNPYmplY3QiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwibm90UmVxdWlyZWQiLCJjaGVja2JveENvbnRyb2wiLCJjaGVja2JveCIsImhhc093biIsImRlYWN0aXZhdGUiLCJFZGl0b3JTdHJpbmdFbnVtUmFkaW8iLCJfRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nRW51bVNlbGVjdCIsIkVkaXRvclN0cmluZ1RleHRhcmVhIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiU3RyaW5nIiwiaW5wdXRUeXBlcyIsInNjaGVtYUZvcm1hdCIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJlbWl0IiwiZmlsdGVyIiwibGlzdGVuZXIiLCJnZXRTY2hlbWFYIiwia2V5d29yZCIsImdldFNjaGVtYVNjaGVtYSIsImlzU3RyaW5nIiwiJHNjaGVtYSIsInVuZGVmaW5lZCIsImlzQm9vbGVhbiIsImdldFNjaGVtYUFsbE9mIiwiYWxsT2YiLCJnZXRTY2hlbWFBbnlPZiIsImFueU9mIiwiZ2V0U2NoZW1hQ29uc3QiLCJnZXRTY2hlbWFDb250YWlucyIsImNvbnRhaW5zIiwiZ2V0U2NoZW1hRGVmYXVsdCIsImdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIiwiZGVwZW5kZW50U2NoZW1hcyIsImdldFNjaGVtYUVsc2UiLCJnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZ2V0U2NoZW1hSWYiLCJnZXRTY2hlbWFJdGVtcyIsIml0ZW1zIiwiZ2V0U2NoZW1hTWF4aW11bSIsIm1heGltdW0iLCJnZXRTY2hlbWFNYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heENvbnRhaW5zIiwiZ2V0U2NoZW1hTWF4TGVuZ3RoIiwibWF4TGVuZ3RoIiwiZ2V0U2NoZW1hTWF4UHJvcGVydGllcyIsIm1heFByb3BlcnRpZXMiLCJnZXRTY2hlbWFNaW5pbXVtIiwibWluaW11bSIsImdldFNjaGVtYU1pbkNvbnRhaW5zIiwibWluQ29udGFpbnMiLCJnZXRTY2hlbWFNaW5MZW5ndGgiLCJtaW5MZW5ndGgiLCJnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIiwibWluUHJvcGVydGllcyIsImdldFNjaGVtYU11bHRpcGxlT2YiLCJtdWx0aXBsZU9mIiwiZ2V0U2NoZW1hTm90Iiwibm90Iiwib3B0aW9uIiwiZ2V0U2NoZW1hUGF0dGVybiIsInBhdHRlcm4iLCJnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hUHJlZml4SXRlbXMiLCJwcmVmaXhJdGVtcyIsImdldFNjaGVtYVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hUmVhZE9ubHkiLCJnZXRTY2hlbWFSZXF1aXJlZCIsInJlcXVpcmVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiU2V0IiwiZ2V0U2NoZW1hVGhlbiIsInRoZW4iLCJnZXRTY2hlbWFPbmVPZiIsIm9uZU9mIiwiZ2V0U2NoZW1hVW5pcXVlSXRlbXMiLCJ1bmlxdWVJdGVtcyIsImdldENpcmN1bGFyUmVwbGFjZXIiLCJhbmNlc3RvcnMiLCJfdHlwZW9mIiwiYXQiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJmaW5kIiwiUmVnRXhwIiwib2JqIiwicHJvcCIsImhhc093blByb3BlcnR5Iiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsIm5vdFNldCIsIkFycmF5IiwiZ2V0VHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiYXNzaWduIiwiX2RlZmluZVByb3BlcnR5IiwiY29uY2F0IiwiZGVlcENvcHkiLCJjb3B5IiwiaSIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsIm9iajEiLCJvYmoyIiwiZ2V0VmFsdWVCeUpTT05QYXRoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRlc3QiLCJwYXJzZUludCIsImVyciIsImUiLCJmIiwibWF0Y2giLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJyZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IiwiYXJyIiwidW5pcXVlT2JqZWN0cyIsInVuaXF1ZVZhbHVlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJvYmpTdHJpbmciLCJoYXMiLCJhZGQiLCJpMThuIiwiZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcyIsImVycm9yQW55T2YiLCJlcnJvckNvbnN0IiwiZXJyb3JDb250YWlucyIsImVycm9yRGVwZW5kZW50UmVxdWlyZWQiLCJlcnJvckVudW0iLCJlcnJvckV4Y2x1c2l2ZU1heGltdW0iLCJlcnJvckV4Y2x1c2l2ZU1pbmltdW0iLCJlcnJvckZvcm1hdCIsImVycm9ySXRlbXMiLCJlcnJvck1heGltdW0iLCJlcnJvck1heEl0ZW1zIiwiZXJyb3JNYXhMZW5ndGgiLCJlcnJvck1heFByb3BlcnRpZXMiLCJlcnJvck1heENvbnRhaW5zIiwiZXJyb3JNaW5Db250YWlucyIsImVycm9yTWluaW11bSIsImVycm9yTWluSXRlbXMiLCJlcnJvck1pbkxlbmd0aCIsImVycm9yTWluUHJvcGVydGllcyIsImVycm9yTXVsdGlwbGVPZiIsImVycm9yTm90IiwiZXJyb3JPbmVPZiIsImVycm9yUGF0dGVybiIsImVycm9yUHJlZml4SXRlbXMiLCJlcnJvclJlcXVpcmVkIiwiZXJyb3JUeXBlIiwiZXJyb3JVbmlxdWVJdGVtcyIsIkluc3RhbmNlQXJyYXkiLCJfSW5zdGFuY2UiLCJzZXRVSSIsInNjaGVtYVR5cGUiLCJwcmVwYXJlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsInNjaGVtYUl0ZW1zIiwic2NoZW1hUHJlZml4SXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkluc3RhbmNlQm9vbGVhbiIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJzY2hlbWFEZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJ2YWxpZGF0b3IiLCJJbnN0YW5jZU11bHRpcGxlIiwiaW5zdGFuY2VzIiwiYWN0aXZlSW5zdGFuY2VDaGFuZ2VkIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJzY2hlbWFDb3B5IiwiX29iamVjdFNwcmVhZCIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImZpdHRlc3RJbmRleCIsImdldElmSW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJyZWFzc2lnblZhbHVlcyIsImxhc3RJbnN0YW5jZVZhbHVlIiwiY3VycmVudEluc3RhbmNlVmFsdWUiLCJtZXJnZWRWYWx1ZSIsImlmRWRpdG9yIiwiSmVkaSIsImlmRXJyb3JzIiwiY2hhbXBpb25FcnJvcnMiLCJpbnN0YW5jZUVycm9ycyIsIkluc3RhbmNlTnVsbCIsIkluc3RhbmNlTnVtYmVyIiwidHlwZUlzTnVtZXJpYyIsIkluc3RhbmNlT2JqZWN0Iiwic2NoZW1hQ29udHJvbCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZGVhY3RpdmF0ZU5vblJlcXVpcmVkIiwiaXNOb3RSZXF1aXJlZCIsImRlbGV0ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJvbGRWYWx1ZSIsIkluc3RhbmNlU3RyaW5nIiwiWE1MSHR0cFJlcXVlc3QiLCJyb290IiwicmVmUGFyc2VyIiwiUmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJWYWxpZGF0b3IiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImNsYXNzTGlzdCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsImV4cGFuZCIsInNjaGVtYU9uZU9mIiwic2NoZW1hQW55T2YiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwicmVmRGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiY29uc29sZSIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIl9yZWYzIiwiX3JlZjQiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfcmVmOCIsInByZXZWYWx1ZSIsIl9UaGVtZSIsInVzZVRvZ2dsZUV2ZW50cyIsImdldExlZ2VuZCIsImxlZ2VuZCIsImhpZGVFbGVtZW50IiwiZ2V0Q2FyZCIsImNhcmQiLCJnZXRDYXJkSGVhZGVyIiwiaGVhZGVyIiwiZ2V0Q2FyZEJvZHkiLCJodG1sIiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldEJ1dHRvbiIsInByb3BlcnRpZXNDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEJ0bkdyb3VwIiwiZ2V0RGVzY3JpcHRpb24iLCJmaWVsZHNldCIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2xzIiwicmFkaW9Db250cm9sIiwiZm9ybUdyb3VwIiwibGFiZWxUZXh0IiwiZ2V0U3dpdGNoZXIiLCJyZW1vdmUiLCJ4cyIsIm1kIiwib2Zmc2V0TWQiLCJsaW5rIiwic2hvd0VsZW1lbnQiLCJnZXRDb2x1bW5DbGFzcyIsInNpemUiLCJnZXRDb250cm9sU2xvdCIsImNvbnRyb2xTbG90IiwibW92ZVVwIiwibW92ZURvd24iLCJnZXRJY29uIiwiaWNvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImljb25DbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiZ2V0RmllbGRzZXQiLCJ0ZXh0Q29udGVudCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZSIsImhhc0F0dHJpYnV0ZSIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiYnV0dG9uIiwidGV4dCIsImdldEFycmF5QnRuQWRkIiwiZGVsZXRlSXRlbUJ0biIsIm1vdmVVcEl0ZW1CdG4iLCJtb3ZlRG93bkl0ZW1CdG4iLCJhY3Rpb25zIiwiYm9keSIsInByb3BlcnRpZXNUb2dnbGUiLCJidG5Hcm91cCIsImRlc2NyaXB0aW9uSWQiLCJtZXNzYWdlc0lkIiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfY29uc3QiLCJzY2hlbWFDb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsIl9lbnVtIiwic29tZSIsIl9pZiIsInNjaGVtYUlmIiwic2NoZW1hVGhlbiIsInNjaGVtYUVsc2UiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJlZml4SXRlbXNTY2hlbWFzQ291bnQiLCJwcm9wZXJ0aWVzQ291bnQiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsIm5vdEVkaXRvciIsIm5vdEVycm9ycyIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsIl9udWxsIiwidmFsdWVUeXBlIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2FnZXMiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQSxpSDs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQSwrRzs7Ozs7Ozs7Ozs7QUNIQSx1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Es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RWpFLElBQUkya0IsZUFBZSxFQUFFO1lBQ25CSCxZQUFZLE1BQUFyVCxNQUFBLENBQUEvQywrRUFBQSxDQUFPb1csWUFBWSxHQUFBcFcsK0VBQUEsQ0FBS3VXLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUgsWUFBWSxDQUFDbG9CLE1BQU0sR0FBRyxDQUFDLElBQUltb0IscUJBQXFCLEVBQUU7UUFDcERELFlBQVksR0FBRyxDQUNiO1VBQ0V6ZixRQUFRLEVBQUUwZixxQkFBcUI7VUFDL0J6a0IsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBT3drQixZQUFZO0lBQ3JCO0VBQUM7RUFBQSxPQUFBdkssU0FBQTtBQUFBO0FBR1lBLHdFQUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBudWxsID09IGFyciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gX2kpIHtcbiAgICB2YXIgX3MsXG4gICAgICBfZSxcbiAgICAgIF94LFxuICAgICAgX3IsXG4gICAgICBfYXJyID0gW10sXG4gICAgICBfbiA9ICEwLFxuICAgICAgX2QgPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKF94ID0gKF9pID0gX2kuY2FsbChhcnIpKS5uZXh0LCAwID09PSBpKSB7XG4gICAgICAgIGlmIChPYmplY3QoX2kpICE9PSBfaSkgcmV0dXJuO1xuICAgICAgICBfbiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKF9uID0gKF9zID0gX3guY2FsbChfaSkpLmRvbmUpICYmIChfYXJyLnB1c2goX3MudmFsdWUpLCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgbnVsbCAhPSBfaVtcInJldHVyblwiXSAmJiAoX3IgPSBfaVtcInJldHVyblwiXSgpLCBPYmplY3QoX3IpICE9PSBfcikpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYXJyO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHsgY2xhbXAsIGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheU5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckFycmF5XG4gKi9cbmNsYXNzIEVkaXRvckFycmF5TmF2IGV4dGVuZHMgRWRpdG9yQXJyYXkge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGhcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgbmF2Q29scyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdkNvbHMnKVxuICAgIGNvbnN0IG5hdlN0YWNrZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZTdGFja2VkJylcbiAgICBjb25zdCBuYXZUeXBlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2VHlwZScpXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KG5hdkNvbHMpID8gbmF2Q29scyA6IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGlzU2V0KG5hdlN0YWNrZWQpID8gbmF2U3RhY2tlZCA6IGZhbHNlLFxuICAgICAgdHlwZTogaXNTZXQobmF2VHlwZSkgPyBuYXZUeXBlIDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBsZXQgY2hpbGRUaXRsZVxuICAgICAgY29uc3Qgc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaXRlbVRlbXBsYXRlJylcblxuICAgICAgaWYgKHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGkwOiBpbmRleCxcbiAgICAgICAgICBpMTogKGluZGV4ICsgMSksXG4gICAgICAgICAgdmFsdWU6IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFRpdGxlID0gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNoaWxkVGl0bGUgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSArICcgJyArIChpbmRleCArIDEpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgIH1cblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gY2xhbXAoKGluZGV4IC0gMSksIDAsICh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCArIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgbW92ZVVwQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cblxuICAgICAgaWYgKCh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpID09PSBpbmRleCkge1xuICAgICAgICBtb3ZlRG93bkJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheU5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU1heEl0ZW1zLFxuICBnZXRTY2hlbWFNaW5JdGVtcyxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckFycmF5IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydChjb25maWcpXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcblxuICAgIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChtYXhJdGVtcykgJiYgbWF4SXRlbXMgPT09IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NldChtaW5JdGVtcykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPD0gbWluSXRlbXMpIHtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5XG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2x5cGhpY29ucywgYm9vdHN0cmFwSWNvbnMsIGZvbnRBd2Vzb21lMywgZm9udEF3ZXNvbWU0LCBmb250QXdlc29tZTUsIGZvbnRBd2Vzb21lNiB9IGZyb20gJy4uL3RoZW1lcy9pY29ucy9pY29ucydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZSBmcm9tICcuLi90aGVtZXMvdGhlbWUnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIG9ubHkgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuY29lcmNlVmFsdWUoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgY29uc3QgYWx3YXlzU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICdhbHdheXMnIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ2Fsd2F5cydcblxuICAgIGlmIChhbHdheXNTaG93RXJyb3JzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICBsZXQgaWNvbnMgPSBudWxsXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikge1xuICAgICAgICBjYXNlICdnbHlwaGljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGdseXBoaWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gYm9vdHN0cmFwSWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTMnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU0JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNSc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTYnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU2XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKGljb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpKVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYnkgbWFraW5nIGFzc3VtcHRpb25zIGJhc2VkIG9uIGNvbnN0cmFpbnNcbiAgICovXG4gIGNvZXJjZVZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpICYmIGlzU2V0KHNjaGVtYUVudW1bMF0pKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHNjaGVtYUVudW1bMF0sIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHVpIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBuZXZlclNob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnbmV2ZXInIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ25ldmVyJ1xuXG4gICAgaWYgKG5ldmVyU2hvd0Vycm9ycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2soeyBtZXNzYWdlIH0pXG4gICAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgfVxuXG4gIHJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcblxuICAgIGludGVyYWN0aXZlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udGFpbmVyICYmIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTXVsdGlwbGUgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRNdWx0aXBsZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgfVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydChjb25maWcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bGwgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bGxcbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck51bWJlckVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYUZvcm1hdCxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0R3JpZCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3RHcmlkIGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ2NvbHVtbnMnKSB8fCAxMlxuICAgICAgICBjb25zdCBvZmZzZXQgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnb2Zmc2V0JykgfHwgMFxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29sdW1ucywgb2Zmc2V0KVxuXG4gICAgICAgIGlmIChnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnbmV3Um93JykgPT09IHRydWUpIHtcbiAgICAgICAgICByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RHcmlkXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3ROYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0TmF2IGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xDb2xzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC1jb2xzJ11cbiAgICBjb25zdCBjb250cm9sU3RhY2tlZCA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtc3RhY2tlZCddXG4gICAgY29uc3QgY29udHJvbFZhcmlhbnQgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLXZhcmlhbnQnXVxuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSBpc1NldChjb250cm9sQ29scykgPyBjb250cm9sQ29scyA6IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGlzU2V0KGNvbnRyb2xTdGFja2VkKSA/IGNvbnRyb2xTdGFja2VkIDogZmFsc2UsXG4gICAgICB0eXBlOiBpc1NldChjb250cm9sVmFyaWFudCkgPyBjb250cm9sVmFyaWFudCA6ICdwaWxzJ1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcblxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgICAgdGl0bGU6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcblxuICAgICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgbGV0IGFkZFByb3BlcnR5ID0gdHJ1ZVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgYWRkUHJvcGVydHkgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbChnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSksXG4gICAgICBhZGRQcm9wZXJ0eTogYWRkUHJvcGVydHlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7fVxuXG4gICAgICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgICBpZiAoaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoY29uZmlnKVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIWlzUmVxdWlyZWQgJiYgIWlzRGVwZW5kZW50UmVxdWlyZWRcblxuICAgICAgICBpZiAobm90UmVxdWlyZWQpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKSArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nVGV4dGFyZWEgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nVGV4dGFyZWFcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyhzY2hlbWFGb3JtYXQpID8gc2NoZW1hRm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBzY2hlbWFGb3JtYXQgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdjb2xvcicgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW50IHRoaXMgZXZlbnQgaXMgZW1pdHRlZFxuICAgKi9cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGEgbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBiZSBlbWl0dGVkXG4gICAqL1xuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbGxPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbGxPZikgPyBzY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFueU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFueU9mKSA/IHNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29uc3QgKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmNvbnN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb250YWlucyAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmNvbnRhaW5zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmNvbnRhaW5zKSkgPyBzY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlZmF1bHQgKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmRlZmF1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlc2NyaXB0aW9uIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5kZXNjcmlwdGlvbikgPyBzY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVsc2UgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmVsc2UpKSA/IHNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbnVtIChzY2hlbWEpIHtcbiAgaWYgKGlzQXJyYXkoc2NoZW1hLmVudW0pICYmIHNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLmVudW1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUZvcm1hdCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZm9ybWF0KSA/IHNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUlmIChzY2hlbWEpIHtcbiAgaWYgKGlzT2JqZWN0KHNjaGVtYS5pZikpIHtcbiAgICByZXR1cm4gc2NoZW1hLmlmXG4gIH1cblxuICBpZiAoaXNCb29sZWFuKHNjaGVtYS5pZikpIHtcbiAgICByZXR1cm4gc2NoZW1hLmlmXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuaXRlbXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuaXRlbXMpID8gc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5tYXhpbXVtKSA/IHNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhDb250YWlucyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heENvbnRhaW5zKSAmJiBzY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4Q29udGFpbnNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heEl0ZW1zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4SXRlbXMpICYmIHNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhJdGVtc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4TGVuZ3RoIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4TGVuZ3RoKSAmJiBzY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5taW5pbXVtKSA/IHNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Db250YWlucyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiBzY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluQ29udGFpbnNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkl0ZW1zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluSXRlbXMpICYmIHNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5JdGVtc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluTGVuZ3RoIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluTGVuZ3RoKSAmJiBzY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU11bHRpcGxlT2YgKHNjaGVtYSkge1xuICBpZiAoaXNOdW1iZXIoc2NoZW1hLm11bHRpcGxlT2YpICYmIHNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm11bHRpcGxlT2ZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU5vdCAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHNjaGVtYS5ub3QpKSA/IHNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9wdGlvbiAoc2NoZW1hLCBvcHRpb24pIHtcbiAgcmV0dXJuIChzY2hlbWEub3B0aW9ucyAmJiBzY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5pcXVlSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmlxdWVJdGVtcykgPyBzY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbn1cbiIsIi8qKlxuICogVXRpbHMuXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmN1bGFyUmVwbGFjZXIgKCkge1xuICBjb25zdCBhbmNlc3RvcnMgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLy8gYHRoaXNgIGlzIHRoZSBvYmplY3QgdGhhdCB2YWx1ZSBpcyBjb250YWluZWQgaW4sXG4gICAgLy8gaS5lLiwgaXRzIGRpcmVjdCBwYXJlbnQuXG4gICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggPiAwICYmIGFuY2VzdG9ycy5hdCgtMSkgIT09IHRoaXMpIHtcbiAgICAgIGFuY2VzdG9ycy5wb3AoKVxuICAgIH1cbiAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJ1xuICAgIH1cbiAgICBhbmNlc3RvcnMucHVzaCh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcsIGdldENpcmN1bGFyUmVwbGFjZXIoKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weSAob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgY29uc3QgY29weSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcHlbaV0gPSBkZWVwQ29weShvYmpbaV0pXG4gICAgfVxuICAgIHJldHVybiBjb3B5XG4gIH1cblxuICBjb25zdCBjb3B5ID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29weVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzIGJ1dCBvbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluIGJvdGhzIG9iamVjdHNcbiAqIGlmIHRoZXkgYXJlIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9iajIgLSBPYmplY3RzIHdobydzIHByb3BlcnRpZXMgYXJlIHRoZSBvdmVycmlkZXNcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG92ZXJ3cml0dGVuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIChvYmoxLCBvYmoyKSB7XG4gIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqMSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmoxW2tleV0gPT09IHR5cGVvZiBvYmoyW2tleV0pIHtcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmoxXG59XG5cbi8qKlxuICogR2V0IHNvbWUgdmFsdWUgYnkgdHJhdmVyc2luZyB0aGUgZGF0YSB1c2luZyBKU09OIHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEpTT04gcGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlKU09OUGF0aCAoZGF0YSwgcGF0aCkge1xuICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdCgnLicpIC8vIFNwbGl0IHRoZSBwYXRoIGludG8gaW5kaXZpZHVhbCBrZXlzXG5cbiAgbGV0IHZhbHVlID0gZGF0YVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIC9eXFxkKyQvLnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChrZXkpXG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2luZGV4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJbmRleCBpcyBvdXQgb2YgYm91bmRzLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEtleSBkb2Vzbid0IGV4aXN0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBieSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gV2hlcmUgdGVtcGxhdGUgZGF0YSBsaXZlc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZSAodGVtcGxhdGUsIGRhdGEpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAobWF0Y2gpID0+IHtcbiAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICBjb25zdCBwYXRoID0gbWF0Y2guc3BsaXQoL3t7fH19LylbMV1cbiAgICByZXR1cm4gZ2V0VmFsdWVCeUpTT05QYXRoKGRhdGEsIHBhdGgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IChhcnIpIHtcbiAgY29uc3QgdW5pcXVlT2JqZWN0cyA9IFtdXG4gIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKVxuXG4gIGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIGNvbnN0IG9ialN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICBpZiAoIXVuaXF1ZVZhbHVlcy5oYXMob2JqU3RyaW5nKSkge1xuICAgICAgdW5pcXVlVmFsdWVzLmFkZChvYmpTdHJpbmcpXG4gICAgICB1bmlxdWVPYmplY3RzLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlxdWVPYmplY3RzXG59XG4iLCIvKipcbiAqIFNpbXBsZSB0cmFuc2xhdGlvbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGkxOG5cbiAqL1xuXG4vKipcbiAqIExvY2FsZSBtZXNzYWdlc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGkxOG4gPSB7XG4gIGVycm9yQWRkaXRpb25hbFByb3BlcnRpZXM6ICdoYXMgYWRkaXRpb25hbCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCIgYnV0IG5vIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgYWxsb3dlZCcsXG4gIGVycm9yQW55T2Y6ICdtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgZXJyb3JDb25zdDogJ211c3QgaGF2ZSB2YWx1ZSBvZjoge3sgY29uc3QgfX0nLFxuICBlcnJvckNvbnRhaW5zOiAnbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvckRlcGVuZGVudFJlcXVpcmVkOiAnbXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyBkZXBlbmRlbnRSZXF1aXJlZCB9fScsXG4gIGVycm9yRW51bTogJ211c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczoge3sgZW51bSB9fScsXG4gIGVycm9yRXhjbHVzaXZlTWF4aW11bTogJ211c3QgYmUgbGVzcyB0aGFuIHt7IGV4Y2x1c2l2ZU1heGltdW0gfX0nLFxuICBlcnJvckV4Y2x1c2l2ZU1pbmltdW06ICdtdXN0IGJlIGdyZWF0ZXIgdGhhbiB7eyBleGNsdXNpdmVNaW5pbXVtIH19JyxcbiAgZXJyb3JGb3JtYXQ6ICdtdXN0IGJlIGEgdmFsaWQge3sgZm9ybWF0IH19JyxcbiAgZXJyb3JJdGVtczogJ211c3QgaGF2ZSBpdGVtcyB0aGF0IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yTWF4aW11bTogJ211c3QgYmUgYXQgbW9zdCB7eyBtYXhpbXVtIH19JyxcbiAgZXJyb3JNYXhJdGVtczogJ211c3QgaGF2ZSBhdCBtb3N0IHt7IG1heEl0ZW1zIH19IGl0ZW1zJyxcbiAgZXJyb3JNYXhMZW5ndGg6ICdtdXN0IGJlIGF0IG1vc3Qge3sgbWF4TGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZycsXG4gIGVycm9yTWF4UHJvcGVydGllczogJ211c3QgaGF2ZSBhdCBtb3N0IHt7IG1heFByb3BlcnRpZXMgfX0gcHJvcGVydGllcycsXG4gIGVycm9yTWF4Q29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbW9zdCB7eyBtYXhDb250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fScsXG4gIGVycm9yTWluQ29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbGVhc3Qge3sgbWluQ29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0nLFxuICBlcnJvck1pbmltdW06ICdtdXN0IGJlIGF0IGxlYXN0IHt7IG1pbmltdW0gfX0nLFxuICBlcnJvck1pbkl0ZW1zOiAnbXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pbkl0ZW1zIH19IGl0ZW1zJyxcbiAgZXJyb3JNaW5MZW5ndGg6ICdtdXN0IGJlIGF0IGxlYXN0IHt7IG1pbkxlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcnLFxuICBlcnJvck1pblByb3BlcnRpZXM6ICdtdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluUHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzJyxcbiAgZXJyb3JNdWx0aXBsZU9mOiAnbXVzdCBiZSBtdWx0aXBsZSBvZiB7eyBtdWx0aXBsZU9mIH19JyxcbiAgZXJyb3JOb3Q6ICdtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvck9uZU9mOiAnbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3Qge3sgY291bnRlciB9fSBvZiB0aGUgc2NoZW1hcycsXG4gIGVycm9yUGF0dGVybjogJ211c3QgbWF0Y2ggdGhlIHBhdHRlcm46IFwie3sgcGF0dGVybiB9fVwiJyxcbiAgZXJyb3JQcmVmaXhJdGVtczogJ0l0ZW0ge3sgaW5kZXggfX0gZmFpbHMgdmFsaWRhdGlvbicsXG4gIGVycm9yUmVxdWlyZWQ6ICdtdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IHJlcXVpcmVkIH19JyxcbiAgZXJyb3JUeXBlOiAnbXVzdCBiZSBvZiB0eXBlIHt7IHR5cGUgfX0nLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcydcbn1cbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEVkaXRvckFycmF5TmF2IGZyb20gJy4uL2VkaXRvcnMvYXJyYXktbmF2J1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheU5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IHNjaGVtYVxuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGNvbnN0IHNjaGVtYUl0ZW1zID0gZ2V0U2NoZW1hSXRlbXModGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBzY2hlbWEgPSBpc1NldChzY2hlbWFJdGVtcykgPyBzY2hlbWFJdGVtcyA6IHt9XG5cbiAgICBjb25zdCBoYXNQcmVmaXhJdGVtc1NjaGVtYSA9IGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zKSAmJiBpc1NldChzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoQ2hpbGRyZW4gKCkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUFycmF5XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlZmF1bHQsIGdldFNjaGVtYVJlYWRPbmx5LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEpTT04gaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBKZWRpIGluc3RhbmNlIHRvIHdoaWNoIHRoaXMgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKiBAdHlwZSB7SmVkaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG5cbiAgICAvKipcbiAgICAgKiBBIEpTT04gc2NoZW1hLlxuICAgICAqIEB0eXBlIHtib29sZWFufG9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuXG4gICAgLyoqXG4gICAgICogVGhlIGpzb24gdmFsdWUgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSBpc1NldChjb25maWcudmFsdWUpID8gY29uZmlnLnZhbHVlIDogdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIHN0YXRlIG9mIHRoaXMgaW5zdGFuY2UuIElmIGZhbHNlIHRoZSBlZGl0b3IgaXMgbm90IHBhcnRpY2lwYXRpbmdcbiAgICAgKiB0byB0aGUgdmFsdWUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjaGVtYSBwYXRoIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuXG4gICAgLyoqXG4gICAgICogVGhlIFBhcmVudCBpbnN0YW5jZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcblxuICAgIC8qKlxuICAgICAqIENoaWxkIGluc3RhbmNlcyBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZVtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWRpdG9yIGNvbnRyb2xsaW5nIHRoaXMgSW5zdGFuY2UgaWYgYW55XG4gICAgICogQHR5cGUge0VkaXRvcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy51aSA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgaWYgKG5vdFNldCh0aGlzLnZhbHVlKSkge1xuICAgICAgbGV0IHZhbHVlXG4gICAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYURlZmF1bHQgPSBnZXRTY2hlbWFEZWZhdWx0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYURlZmF1bHQpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHNjaGVtYURlZmF1bHQsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG5cbiAgICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheShlcnJvcnMpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgaW5zdGFuY2UgaXMgcmVhZCBvbmx5XG4gICAqL1xuICBpc1JlYWRPbmx5ICgpIHtcbiAgICBsZXQgcmVhZE9ubHkgPSBmYWxzZVxuXG4gICAgaWYgKGdldFNjaGVtYVJlYWRPbmx5KHRoaXMuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIGdldFNjaGVtYVJlYWRPbmx5KHRoaXMucGFyZW50LnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZWFkT25seVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIG5vdFNldCxcbiAgY2xvbmUsXG4gIGlzT2JqZWN0LFxuICBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMsIG1lcmdlRGVlcCwgZGVlcENvcHlcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU11bHRpcGxlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JNdWx0aXBsZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgfHwgaXNTZXQoZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSA/IGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSA6IGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3Qgc2NoZW1hQ29weSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvbmVPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uc2NoZW1hQ29weSwgLi4uc2NoZW1hIH1cbiAgICAgICAgbGV0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcblxuICAgICAgICBjb25zdCBzd2l0Y2hlclRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ3N3aXRjaGVyVGl0bGUnKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHNjaGVtYSlcblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hVGl0bGUpKSB7XG4gICAgICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWFUaXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHN3aXRjaGVyVGl0bGUpKSB7XG4gICAgICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzd2l0Y2hlclRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHNjaGVtYVR5cGUpKSB7XG4gICAgICBzY2hlbWFUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gbWVyZ2VEZWVwKHRoaXMuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYW55JyB8fCAhc2NoZW1hVHlwZSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSlcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnT2JqZWN0JywgJ0FycmF5JywgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgIHZhbHVlOiBjbG9uZSh0aGlzLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHRoaXMudmFsdWUsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaW5kZXhdXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB0aGlzLnZhbHVlKSB8fCB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSBmYWxzZVxuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgodGhpcy52YWx1ZSkgOiB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVhc3NpZ25WYWx1ZXMgKCkge1xuICAgIGNvbnN0IGxhc3RJbnN0YW5jZVZhbHVlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5sYXN0SW5kZXhdLmdldFZhbHVlKClcbiAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VWYWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzT2JqZWN0KGxhc3RJbnN0YW5jZVZhbHVlKSAmJiBpc09iamVjdChjdXJyZW50SW5zdGFuY2VWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IG1lcmdlZFZhbHVlID0gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzKGN1cnJlbnRJbnN0YW5jZVZhbHVlLCBsYXN0SW5zdGFuY2VWYWx1ZSlcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUobWVyZ2VkVmFsdWUsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGdldElmSW5kZXggKHZhbHVlKSB7XG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogdGhpcy5pZiwgZGF0YTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG4gICAgcmV0dXJuIGlmRXJyb3JzLmxlbmd0aCA9PT0gMCA/IDAgOiAxXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGluc3RhbmNlIHRoYXQgaGFzIGxlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICovXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VNdWx0aXBsZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVsbCBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVsbCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVsbCh0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVsbFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bWJlciBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCB0eXBlSXNOdW1lcmljID0gc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInXG5cbiAgICBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVtYmVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgaXNPYmplY3QsIGhhc093biwgY2xvbmUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEVkaXRvck9iamVjdEdyaWQgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtZ3JpZCdcbmltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgRWRpdG9yT2JqZWN0TmF2IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LW5hdidcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkLFxuICBnZXRTY2hlbWFGb3JtYXQsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUmVxdWlyZWQsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZU9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlT2JqZWN0IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUNvbnRyb2wgPSB0aGlzLnNjaGVtYVsneC1jb250cm9sJ11cblxuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hQ29udHJvbCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hUmVxdWlyZWQpICYmIHNjaGVtYVJlcXVpcmVkLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGlzU2V0KGRlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGlzTm90UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVxdWlyZWQocHJvcGVydHkpICYmICF0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQocHJvcGVydHkpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHt9LCBrZXksIHZhbHVlW2tleV0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgSW5zdGFuY2VNdWx0aXBsZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBJbnN0YW5jZUJvb2xlYW4gZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBJbnN0YW5jZU9iamVjdCBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgSW5zdGFuY2VBcnJheSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBJbnN0YW5jZVN0cmluZyBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgSW5zdGFuY2VOdW1iZXIgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IEluc3RhbmNlTnVsbCBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXIvcmVmLXBhcnNlcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSmVkaSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgSmVkaSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdHxib29sZWFufSBvcHRpb25zLnNjaGVtYSAtIEEgSlNPTiBzY2hlbWFcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmlzRWRpdG9yIC0gR2VuZXJhdGVzIFVJIGNvbnRyb2xzIHRvIGVkaXQgdGhlIEpTT04gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNvbnRhaW5lciAtIFdoZXJlIHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRoZW1lIC0gSG93IHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICBzaG93RXJyb3JzOiAnY2hhbmdlJyxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIFhNTEh0dHBSZXF1ZXN0OiB1bmRlZmluZWRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoeyBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0IH0pXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IodGhpcy5yZWZQYXJzZXIpXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5kYXRhKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5kYXRhLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcbiAgICB0aGlzLmhpZGRlbklucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGpzb24gaW5zdGFuY2UgYW5kIGRlcmVmZXJlbmNlIHNjaGVtYSBvbiB0aGUgZmx5IGlmIG5lZWRlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZXhwYW5kKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUFueU9mKSB8fCBpc1NldChzY2hlbWFPbmVPZikgfHwgc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgaXNBcnJheShzY2hlbWFUeXBlKSB8fCBub3RTZXQoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VNdWx0aXBsZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlT2JqZWN0KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUFycmF5KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VTdHJpbmcoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdW1iZXIoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VCb29sZWFuKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci5nZXRFcnJvcnMoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0XG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbGxPZixcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFQcmVmaXhJdGVtc1xufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUmVmUGFyc2VyIGluc3RhbmNlLlxuICovXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCAxXG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLnJlZkRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3Mua2V5ID09PSAnJHJlZicpIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW2FyZ3MudmFsdWVdID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGRlZmluZSBleHRlcm5hbCByZWZzXG4gICAgT2JqZWN0LmtleXModGhpcy5yZWZEZWZpbml0aW9ucykuZm9yRWFjaCgocmVmKSA9PiB7XG4gICAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW3JlZl0gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkZWZpbmUgaW50ZXJuYWwgcmVmc1xuICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy5yZWZEZWZpbml0aW9uc1thcmdzLnBhdGhdKSkge1xuICAgICAgICAgIHRoaXMucmVmRGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBleHBhbmQgKHNjaGVtYSkge1xuICAgIGlmIChpc1NldChzY2hlbWFbJyRyZWYnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZkRlZmluaXRpb25zW3NjaGVtYVsnJHJlZiddXVxuICAgIH1cblxuICAgIGNvbnN0IGFueU9mID0gZ2V0U2NoZW1hQW55T2Yoc2NoZW1hKVxuICAgIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuICAgIGNvbnN0IGFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuICAgIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGFueU9mKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoYW55T2YpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEuYW55T2Zba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQob25lT2YpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhvbmVPZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5vbmVPZltrZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1NldChhbGxPZikpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGFsbE9mKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLmFsbE9mW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHByZWZpeEl0ZW1zKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJlZml4SXRlbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEucHJlZml4SXRlbXNba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGhlYWRlciA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICByZXR1cm4gaGVhZGVyXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtc3RhY2tlZCcpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1lbmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3QnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cblxuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsIi8qKlxuICogTGlzdHMgb2YgaHRtbCBjbGFzc2VzIHVzZWQgZm9yIGljb25zLlxuICogQG1vZHVsZSBpY29uc1xuICovXG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBnbHlwaGljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZ2x5cGhpY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2dseXBoaWNvbiBnbHlwaGljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2dseXBoaWNvbiBnbHlwaGljb24tdHJhc2gnLFxuICBhZGQ6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBib290c3RyYXAtaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBib290c3RyYXBJY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2JpIGJpLWNhcmQtbGlzdCcsXG4gIGRlbGV0ZTogJ2JpIGJpLXRyYXNoMicsXG4gIGFkZDogJ2JpIGJpLXBsdXMnLFxuICBtb3ZlVXA6ICdiaSBiaS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnYmkgYmktYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lMyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lMyA9IHtcbiAgcHJvcGVydGllczogJ2ljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2ljb24tdHJhc2gnLFxuICBhZGQ6ICdpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTQgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTQgPSB7XG4gIHByb3BlcnRpZXM6ICdmYSBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmEgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYSBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTUgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTUgPSB7XG4gIHByb3BlcnRpZXM6ICdmYXMgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhcyBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhcyBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmFzIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYXMgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNiBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNiA9IHtcbiAgcHJvcGVydGllczogJ2ZhLXNvbGlkIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYS1zb2xpZCBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhLXNvbGlkIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYS1zb2xpZCBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEtc29saWQgZmEtYXJyb3ctZG93bidcbn1cbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lIGluc3RhbmNlLlxuICovXG5jbGFzcyBUaGVtZSB7XG4gIGNvbnN0cnVjdG9yIChpY29ucyA9IG51bGwpIHtcbiAgICB0aGlzLmljb25zID0gaWNvbnNcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHNvbWUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAobmFtZSkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpY29uIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEljb24gKG5hbWUpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgaWNvbkNsYXNzZXMgPSB0aGlzLmljb25zW25hbWVdLnNwbGl0KCcgJylcblxuICAgIGlmIChpY29uQ2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpY29uQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZGl2IHVzZWQgdG8gd3JhcCB0aGUgZWRpdG9yIFVJIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGZpZWxkc2V0IGVsZW1lbnQuXG4gICAqIFVzZWQgdG8gd3JhcCBjaGlsZHJlbiBzbG90IGFuZCBwcm92aWRlIG1vcmUgc2VtYW50aWMgaHRtbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb21wbGV4IGVkaXRvcnMgbGlrZSBhcnJheXMsIG9iamVjdHMgYW5kIG11bHRpcGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBMZWdlbmQgZWxlbWVudCB1c2VkIGluIGZpZWxkc2V0c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWFkZXIgZm9yIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkSGVhZGVyIChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQodGl0bGUpXG4gICAgfVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgLyoqXG4gICAqIEEgYm9keSBmb3IgdGhlIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFycmF5IHNwZWNpZmljIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBjaGlsZCBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGNvbnRyb2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIHByb3BlcnRpZXMgZWRpdGluZyBlbGVtZW50cyBsaWtlIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICAgIGh0bWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgT2JqZWN0RWRpdG9yIHByb3BlcnRpZXMgd3JhcHBlciB2aXNpYmlsaXR5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCB0b2dnbGUgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIHtcbiAgICAgICAgICB0aGlzLnNob3dFbGVtZW50KGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZUVsZW1lbnQoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZ2dsZVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogQSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKHRoaXMuaWNvbnMgJiYgY29uZmlnLmljb24pIHtcbiAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdldEljb24oY29uZmlnLmljb24pXG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBjb25maWcudGV4dENvbnRlbnQpXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbilcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQodGV4dClcbiAgICB9XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImFkZFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiZGVsZXRlXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlbGV0ZUl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJyxcbiAgICAgIGljb246ICdkZWxldGUnXG4gICAgfSlcblxuICAgIGRlbGV0ZUl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgcmV0dXJuIGRlbGV0ZUl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgdXBcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCcsXG4gICAgICBpY29uOiAnbW92ZVVwJ1xuICAgIH0pXG5cbiAgICBtb3ZlVXBJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICByZXR1cm4gbW92ZVVwSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSBkb3duXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1vdmVEb3duSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZURvd25JdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nLFxuICAgICAgaWNvbjogJ21vdmVEb3duJ1xuICAgIH0pXG5cbiAgICBtb3ZlRG93bkl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgcmV0dXJuIG1vdmVEb3duSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRoZSBlZGl0b3IgZGVzY3JpcHRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3QgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBFYWNoIGVkaXRvciBpcyBtYXBwZWQgdG8gYW4gb2JqZWN0IGluc3RhbmNlIHByb3BlcnR5LlxuICAgKiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCwgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZCBkZXBlbmRpbmcgb24gY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtdG9nZ2xlLScgKyBjb25maWcuaWQsXG4gICAgICBpY29uOiAncHJvcGVydGllcycsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyOiBwcm9wZXJ0aWVzQ29udGFpbmVyXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hZGRQcm9wZXJ0eSkge1xuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbScsXG4gICAgICBpY29uOiAnYWRkJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIGJ0bkdyb3VwLFxuICAgICAgYWRkQnRuLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGxlIGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycyBvcHRpb25zIHRoYXQgY2FuIGJlXG4gICAqIHNlbGVjdGVkIHdpdGggYSBzd2l0Y2hlciBjb250cm9sLiBPbmx5IG9uZSBlZGl0b3IgY2FuIGJlIGFjdGl2ZS92aXNpYmxlXG4gICAqIGF0IGEgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TXVsdGlwbGVDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBzd2l0Y2hlciA9IHRoaXMuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBzck9ubHk6IHRydWUsXG4gICAgICByZWFkT25seTogY29uZmlnLnJlYWRPbmx5XG4gICAgfSlcblxuICAgIHN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgZm9yIE51bGxFZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE51bGxDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRleHRhcmVhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIG1lc3NhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCBtZXNzYWdlc0lkKVxuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgbWVzc2FnZXNJZClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIG1lc3NhZ2VzSWQpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgcmFkaW8gZ3JvdXAgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbFxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb25JZClcbiAgICAgIH1cblxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgbWVzc2FnZXNJZClcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGlmIChjb25maWcubGFiZWwpIHtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG4gICAgfVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgY2hlY2tib3ggY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIG1lc3NhZ2VzSWQpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIG1lc3NhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCBtZXNzYWdlc0lkKVxuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgbWVzc2FnZXNJZClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDFweDtoZWlnaHQ6IDFweDtwYWRkaW5nOiAwO21hcmdpbjogLTFweDtvdmVyZmxvdzogaGlkZGVuO2NsaXA6IHJlY3QoMCwwLDAsMCk7Ym9yZGVyOiAwOycpXG4gIH1cblxuICAvKipcbiAgICogUmV2ZWFscyBhIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRpdGlvbmFsUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpID8gc2NoZW1hUHJvcGVydGllcyA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsXG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVbcHJvcGVydHldXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyA9IGVkaXRvci5nZXRFcnJvcnMoKS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogZXJyb3IubWVzc2FnZXMsXG4gICAgICAgICAgICAgIHBhdGg6IHByb3BlcnR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmFkZGl0aW9uYWxQcm9wZXJ0eUVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQWxsT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbE9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGFsbE9mKSkge1xuICAgIGFsbE9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgc3ViU2NoZW1hRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlLCByb290TmFtZToga2V5IH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICAgIGVycm9ycyA9IHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQW55T2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYW55T2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFueU9mID0gZ2V0U2NoZW1hQW55T2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbnlPZikpIHtcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50LCBjb21waWxlVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29uc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb25zdCA9IGdldFNjaGVtYUNvbnN0KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYUNvbnN0KVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQ29uc3QsIHtcbiAgICAgICAgICAgIGNvbnN0OiBKU09OLnN0cmluZ2lmeShzY2hlbWFDb25zdClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IGNvbnRhaW5zLCBkYXRhOiBpdGVtIH0pXG4gICAgICBjb25zdCBjb250YWluc0Vycm9ycyA9IGNvbnRhaW5zRWRpdG9yLmdldEVycm9ycygpXG5cbiAgICAgIGlmIChjb250YWluc0Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5zRWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluc0ludmFsaWQgPSAoY291bnRlciA9PT0gMClcblxuICAgIGlmIChpc1NldChtaW5Db250YWlucykpIHtcbiAgICAgIGNvbnN0IG1pbkNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyIDwgbWluQ29udGFpbnMpXG5cbiAgICAgIGlmIChtaW5Db250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkNvbnRhaW5zLCB7XG4gICAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIG1pbkNvbnRhaW5zOiBtaW5Db250YWluc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtpMThuLmVycm9yQ29udGFpbnNdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTZXQobWF4Q29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtYXhDb250YWluc0ludmFsaWQgPSAoY291bnRlciA+IG1heENvbnRhaW5zKVxuXG4gICAgICBpZiAobWF4Q29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhDb250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtYXhDb250YWluczogbWF4Q29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRSZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZChzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFoYXNPd24odmFsdWUsIHByb3BlcnR5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckRlcGVuZGVudFJlcXVpcmVkLCB7XG4gICAgICAgICAgICBkZXBlbmRlbnRSZXF1aXJlZDogbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbnRTY2hlbWFzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgZGVwZW5kZW50U2NoZW1hcyA9IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50U2NoZW1hcykpIHtcbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRTY2hlbWFzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnRTY2hlbWEgPSBkZXBlbmRlbnRTY2hlbWFzW2tleV1cbiAgICAgICAgY29uc3QgdG1wRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnRtcEVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIF9lbnVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWFFbnVtLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckVudW0sIHtcbiAgICAgICAgICAgIGVudW06IEpTT04uc3RyaW5naWZ5KHNjaGVtYUVudW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gZXhjbHVzaXZlTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNYXhpbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KGV4Y2x1c2l2ZU1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBleGNsdXNpdmVNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckV4Y2x1c2l2ZU1pbmltdW0sIHtcbiAgICAgICAgICAgIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGZvcm1hdCkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ2VtYWlsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXJsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXVpZCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckZvcm1hdCwge1xuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFUaGVuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBfaWYgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hSWYpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWFUaGVuKSAmJiBub3RTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hSWYsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWFUaGVuKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hVGhlbiwgZGF0YTogdmFsdWUgfSlcbiAgICAgIHRoZW5FcnJvcnMgPSB0aGVuRWRpdG9yLmdldEVycm9ycygpXG4gICAgICB0aGVuRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFFbHNlKSkge1xuICAgICAgY29uc3QgZWxzZUVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hRWxzZSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFJZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBpdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHNjaGVtYSlcbiAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGl0ZW1zKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQocHJlZml4SXRlbXMpID8gcHJlZml4SXRlbXMubGVuZ3RoIDogMFxuXG4gICAgaWYgKGl0ZW1zID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbaTE4bi5lcnJvck1heFByb3BlcnRpZXNdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtYXhJdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heEl0ZW1zLCB7XG4gICAgICAgICAgICBtYXhJdGVtczogbWF4SXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heExlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heExlbmd0aCA9IGdldFNjaGVtYU1heExlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtYXhMZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4TGVuZ3RoLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtYXhQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IG1heFByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4UHJvcGVydGllcywge1xuICAgICAgICAgICAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhpbXVtID0gZ2V0U2NoZW1hTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBtYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heGltdW0sIHtcbiAgICAgICAgICAgIG1heGltdW06IG1heGltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5JdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5JdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KG1pbkl0ZW1zKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluSXRlbXMsIHtcbiAgICAgICAgICAgIG1pbkl0ZW1zOiBtaW5JdGVtc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluTGVuZ3RoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbkxlbmd0aCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluTGVuZ3RoID0gZ2V0U2NoZW1hTWluTGVuZ3RoKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KG1pbkxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5MZW5ndGgsIHtcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pblByb3BlcnRpZXMgPSBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KG1pblByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgbWluUHJvcGVydGllcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Qcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbmltdW0gPSBnZXRTY2hlbWFNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KG1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IG1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluaW11bSwge1xuICAgICAgICAgICAgbWluaW11bTogbWluaW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTXVsdGlwbGVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBsZU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtdWx0aXBsZU9mID0gZ2V0U2NoZW1hTXVsdGlwbGVPZihzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtdWx0aXBsZU9mKSkge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck11bHRpcGxlT2YsIHtcbiAgICAgICAgICAgIG11bHRpcGxlT2Y6IG11bHRpcGxlT2ZcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTm90IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBmdW5jdGlvbiBub3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG5vdCA9IGdldFNjaGVtYU5vdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG5vdCkpIHtcbiAgICBjb25zdCBub3RFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IG5vdCwgZGF0YTogdmFsdWUgfSlcbiAgICBjb25zdCBub3RFcnJvcnMgPSBub3RFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBub3RFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck5vdClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFPbmVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgb25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgb25lT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgY29uc3Qgb25lT2ZFcnJvcnMgPSBvbmVPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgb25lT2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChvbmVPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjb3VudGVyICE9PSAxKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JPbmVPZiwge1xuICAgICAgICAgICAgY291bnRlcjogY291bnRlclxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVybiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwYXR0ZXJuID0gZ2V0U2NoZW1hUGF0dGVybihzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChwYXR0ZXJuKSkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICBjb25zdCBpbnZhbGlkID0gIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclBhdHRlcm4sIHtcbiAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm5cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gYXR0ZXJuUHJvcGVydGllc1xuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBpZiAocmVnZXhwLnRlc3QocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHBhdHRlcm5Qcm9wZXJ0aWVzW3BhdHRlcm5dXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCxcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICBwcmVmaXhJdGVtcy5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogaXRlbVNjaGVtYSwgZGF0YTogaXRlbVZhbHVlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQcmVmaXhJdGVtcywge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCByZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHJlcXVpcmVkKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICByZXF1aXJlZC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclJlcXVpcmVkLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHtcbiAgY29tcGlsZVRlbXBsYXRlLCBnZXRUeXBlLFxuICBpc0FycmF5LFxuICBpc0Jvb2xlYW4sXG4gIGlzSW50ZWdlcixcbiAgaXNOdWxsLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZ1xufSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCB0eXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG5cbiAgaWYgKHR5cGUgPT09ICdhbnknKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHR5cGUpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdmFsaWQgPSB0eXBlLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JUeXBlLCB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBnZXRUeXBlKHZhbHVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCB1bmlxdWVJdGVtcyA9IGdldFNjaGVtYVVuaXF1ZUl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQodW5pcXVlSXRlbXMpICYmIHVuaXF1ZUl0ZW1zID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGkxOG4uZXJyb3JVbmlxdWVJdGVtc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdDA0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA0J1xuaW1wb3J0IGRyYWZ0MDYgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDYnXG5pbXBvcnQgZHJhZnQwNyBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNydcbmltcG9ydCBkcmFmdDIwMTkwOSBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDE5LTA5J1xuaW1wb3J0IGRyYWZ0MjAyMDEyIGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiwgY2xvbmUsIGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yIChyZWZQYXJzZXIpIHtcbiAgICB0aGlzLnJlZlBhcnNlciA9IHJlZlBhcnNlclxuICAgIHRoaXMuZHJhZnQgPSBkcmFmdDIwMjAxMlxuXG4gICAgdGhpcy5qc29uU2NoZW1hRHJhZnRzID0ge1xuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIyc6IGRyYWZ0MDQsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNi9zY2hlbWEjJzogZHJhZnQwNixcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSMnOiBkcmFmdDA3LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMTktMDkvc2NoZW1hJzogZHJhZnQyMDE5MDksXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAyMC0xMi9zY2hlbWEnOiBkcmFmdDIwMjAxMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICBnZXRFcnJvcnMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdtZXNzYWdlcycpXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHNjaGVtYSlcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IGlzU2V0KHNjaGVtYU9wdGlvbnNNZXNzYWdlcykgPyBzY2hlbWFPcHRpb25zTWVzc2FnZXMgOiBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=