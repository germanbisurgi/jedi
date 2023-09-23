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
          var switcherTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOption"])(schema, 'switcherTitle');
          var switcherOptionsLabel = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isSet"])(switcherTitle) ? switcherTitle : 'Option-' + (index + 1);
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
      schema: {},
      refParser: true,
      showErrors: 'change'
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
      if (this.options.refParser) {
        config.schema = this.refParser.expand(config.schema);
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/schema */ "./src/helpers/schema.js");



/* global XMLHttpRequest */




/**
 * Represents a RefParser instance.
 */
var RefParser = /*#__PURE__*/function () {
  function RefParser(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RefParser);
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["notSet"])(options)) {
      options = {};
    }
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

      // console.log(JSON.stringify(this.refDefinitions, null, 2))
      // console.log(JSON.stringify(schema, null, 2))

      return schema;
    }
  }, {
    key: "expand",
    value: function expand(schema) {
      var _this2 = this;
      // console.log('EXPAND', JSON.stringify(schema, null, 2))
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
        schema: schema,
        startValue: value,
        refParser: false
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
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");




function not(validator, value, schema, key, path) {
  var errors = [];
  var not = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaNot"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(not)) {
    var notEditor = new _jedi__WEBPACK_IMPORTED_MODULE_3__["default"]({
      schema: not,
      startValue: value,
      refParser: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2ljb25zL2ljb25zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3RoZW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZW51bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZm9ybWF0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2lmLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2l0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL25vdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9vbmVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3R5cGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDE5LTA5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvckFycmF5TmF2IiwiX0VkaXRvckFycmF5IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsImFjdGl2ZVRhYkluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJfdGhpcyIsImNvbnRyb2wiLCJhZGRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5zdGFuY2UiLCJsZW5ndGgiLCJhZGRJdGVtIiwicmVmcmVzaFVJIiwiX3RoaXMyIiwicmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMiLCJjaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJuYXZDb2xzIiwiZ2V0U2NoZW1hT3B0aW9uIiwic2NoZW1hIiwibmF2U3RhY2tlZCIsIm5hdlR5cGUiLCJyb3ciLCJ0aGVtZSIsImdldFJvdyIsImNvbHMiLCJpc1NldCIsInRhYkxpc3RDb2wiLCJnZXRDb2wiLCJ0YWJDb250ZW50Q29sIiwidGFiQ29udGVudCIsImdldFRhYkNvbnRlbnQiLCJ0YWJMaXN0IiwiZ2V0VGFiTGlzdCIsInN0YWNrZWQiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImluZGV4IiwiZGVsZXRlQnRuIiwiZ2V0RGVsZXRlSXRlbUJ0biIsIm1vdmVVcEJ0biIsImdldE1vdmVVcEl0ZW1CdG4iLCJtb3ZlRG93bkJ0biIsImdldE1vdmVEb3duSXRlbUJ0biIsInVpIiwiYXJyYXlBY3Rpb25zIiwiY29udGFpbmVyIiwiY2hpbGRUaXRsZSIsInNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSIsInRlbXBsYXRlIiwiZGF0YSIsImkwIiwiaTEiLCJnZXRWYWx1ZSIsImNvbXBpbGVUZW1wbGF0ZSIsInNjaGVtYVRpdGxlIiwiZ2V0U2NoZW1hVGl0bGUiLCJnZXRLZXkiLCJjbGFtcCIsImRlbGV0ZUl0ZW0iLCJ0b0luZGV4IiwibW92ZSIsImFjdGl2ZSIsImlkIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsInRhYiIsImdldFRhYiIsInRpdGxlIiwibGlzdCIsInNldFRhYlBhbmVBdHRyaWJ1dGVzIiwiZGlzYWJsZWQiLCJpc1JlYWRPbmx5IiwiZGlzYWJsZSIsImVuYWJsZSIsInNldEF0dHJpYnV0ZSIsIkVkaXRvckFycmF5IiwiX0VkaXRvciIsImJ1aWxkIiwiZ2V0QXJyYXlDb250cm9sIiwic3JPbmx5IiwiZGVzY3JpcHRpb24iLCJnZXRTY2hlbWFEZXNjcmlwdGlvbiIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsIm1heEl0ZW1zIiwiZ2V0U2NoZW1hTWF4SXRlbXMiLCJtaW5JdGVtcyIsImdldFNjaGVtYU1pbkl0ZW1zIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsIkVkaXRvciIsIkVkaXRvckJvb2xlYW5FbnVtUmFkaW8iLCJfRWRpdG9yQm9vbGVhbiIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsInNldFZhbHVlIiwiY2hlY2tlZCIsIkVkaXRvckJvb2xlYW4iLCJFZGl0b3JCb29sZWFuRW51bVNlbGVjdCIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwicmVhZE9ubHkiLCJjb2VyY2VWYWx1ZSIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJhbHdheXNTaG93RXJyb3JzIiwib3B0aW9ucyIsInNob3dFcnJvcnMiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsIm9uIiwiaWNvbnMiLCJpY29uTGliIiwiZ2x5cGhpY29ucyIsImJvb3RzdHJhcEljb25zIiwiZm9udEF3ZXNvbWUzIiwiZm9udEF3ZXNvbWU0IiwiZm9udEF3ZXNvbWU1IiwiZm9udEF3ZXNvbWU2IiwiVGhlbWVCb290c3RyYXAzIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiVGhlbWUiLCJnZXRTY2hlbWFUeXBlIiwic2NoZW1hRW51bSIsImdldFNjaGVtYUVudW0iLCJpbmNsdWRlcyIsIm5ldmVyU2hvd0Vycm9ycyIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJfdGhpczMiLCJpbnRlcmFjdGl2ZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkZXN0cm95IiwiX3RoaXM0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIkVkaXRvck11bHRpcGxlIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsInN3aXRjaEluc3RhbmNlIiwiYWN0aXZlSW5zdGFuY2UiLCJFZGl0b3JOdWxsIiwiZ2V0TnVsbENvbnRyb2wiLCJnZXRTY2hlbWFGb3JtYXQiLCJFZGl0b3JOdW1iZXJFbnVtUmFkaW8iLCJfRWRpdG9yTnVtYmVyIiwiRWRpdG9yTnVtYmVyIiwiRWRpdG9yTnVtYmVyRW51bVNlbGVjdCIsImdldElucHV0Q29udHJvbCIsIk1hdGgiLCJmbG9vciIsImlzTnVtYmVyIiwiRWRpdG9yT2JqZWN0R3JpZCIsIl9FZGl0b3JPYmplY3QiLCJyZWZyZXNoRWRpdG9ycyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc0FjdGl2ZSIsImNvbHVtbnMiLCJvZmZzZXQiLCJjb2wiLCJFZGl0b3JPYmplY3QiLCJFZGl0b3JPYmplY3ROYXYiLCJhZGRQcm9wZXJ0eSIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJnZXRPYmplY3RDb250cm9sIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsInNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlQ2hpbGQiLCJhY3RpdmF0ZSIsImlzT2JqZWN0IiwicmVmcmVzaFByb3BlcnRpZXNTbG90Iiwic2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzIiwicHJvcGVydGllc0FjdGl2YXRvcnMiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsIm5vdFJlcXVpcmVkIiwiY2hlY2tib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJkZWFjdGl2YXRlIiwiRWRpdG9yU3RyaW5nRW51bVJhZGlvIiwiX0VkaXRvclN0cmluZyIsIkVkaXRvclN0cmluZyIsIkVkaXRvclN0cmluZ0VudW1TZWxlY3QiLCJFZGl0b3JTdHJpbmdUZXh0YXJlYSIsImdldFRleHRhcmVhQ29udHJvbCIsIlN0cmluZyIsImlucHV0VHlwZXMiLCJzY2hlbWFGb3JtYXQiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImZpbHRlciIsImxpc3RlbmVyIiwiZ2V0U2NoZW1hU2NoZW1hIiwiaXNTdHJpbmciLCIkc2NoZW1hIiwidW5kZWZpbmVkIiwiaXNCb29sZWFuIiwiZ2V0U2NoZW1hQWxsT2YiLCJhbGxPZiIsImdldFNjaGVtYUFueU9mIiwiYW55T2YiLCJnZXRTY2hlbWFDb25zdCIsImdldFNjaGVtYUNvbnRhaW5zIiwiY29udGFpbnMiLCJnZXRTY2hlbWFEZWZhdWx0IiwiZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMiLCJkZXBlbmRlbnRTY2hlbWFzIiwiZ2V0U2NoZW1hRWxzZSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJnZXRTY2hlbWFJZiIsImdldFNjaGVtYUl0ZW1zIiwiaXRlbXMiLCJnZXRTY2hlbWFNYXhpbXVtIiwibWF4aW11bSIsImdldFNjaGVtYU1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4Q29udGFpbnMiLCJnZXRTY2hlbWFNYXhMZW5ndGgiLCJtYXhMZW5ndGgiLCJnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIiwibWF4UHJvcGVydGllcyIsImdldFNjaGVtYU1pbmltdW0iLCJtaW5pbXVtIiwiZ2V0U2NoZW1hTWluQ29udGFpbnMiLCJtaW5Db250YWlucyIsImdldFNjaGVtYU1pbkxlbmd0aCIsIm1pbkxlbmd0aCIsImdldFNjaGVtYU1pblByb3BlcnRpZXMiLCJtaW5Qcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hTXVsdGlwbGVPZiIsIm11bHRpcGxlT2YiLCJnZXRTY2hlbWFOb3QiLCJub3QiLCJvcHRpb24iLCJnZXRTY2hlbWFQYXR0ZXJuIiwicGF0dGVybiIsImdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIiwicGF0dGVyblByb3BlcnRpZXMiLCJnZXRTY2hlbWFQcmVmaXhJdGVtcyIsInByZWZpeEl0ZW1zIiwiZ2V0U2NoZW1hUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJnZXRTY2hlbWFSZWFkT25seSIsImdldFNjaGVtYVJlcXVpcmVkIiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJnZXRTY2hlbWFUaGVuIiwidGhlbiIsImdldFNjaGVtYU9uZU9mIiwib25lT2YiLCJnZXRTY2hlbWFVbmlxdWVJdGVtcyIsInVuaXF1ZUl0ZW1zIiwiZ2V0Q2lyY3VsYXJSZXBsYWNlciIsImFuY2VzdG9ycyIsIl90eXBlb2YiLCJhdCIsImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN0ciIsImZpbmQiLCJSZWdFeHAiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJzb3J0T2JqZWN0Iiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwibm90U2V0IiwiQXJyYXkiLCJnZXRUeXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0IiwiX2xlbiIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJhc3NpZ24iLCJfZGVmaW5lUHJvcGVydHkiLCJjb25jYXQiLCJkZWVwQ29weSIsImNvcHkiLCJpIiwib3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIiwib2JqMSIsIm9iajIiLCJnZXRWYWx1ZUJ5SlNPTlBhdGgiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidGVzdCIsInBhcnNlSW50IiwiZXJyIiwiZSIsImYiLCJtYXRjaCIsIm51bWJlciIsIm1pbiIsIm1heCIsInJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkiLCJhcnIiLCJ1bmlxdWVPYmplY3RzIiwidW5pcXVlVmFsdWVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm9ialN0cmluZyIsImhhcyIsImFkZCIsImkxOG4iLCJlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZXJyb3JBbnlPZiIsImVycm9yQ29uc3QiLCJlcnJvckNvbnRhaW5zIiwiZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCIsImVycm9yRW51bSIsImVycm9yRXhjbHVzaXZlTWF4aW11bSIsImVycm9yRXhjbHVzaXZlTWluaW11bSIsImVycm9yRm9ybWF0IiwiZXJyb3JJdGVtcyIsImVycm9yTWF4aW11bSIsImVycm9yTWF4SXRlbXMiLCJlcnJvck1heExlbmd0aCIsImVycm9yTWF4UHJvcGVydGllcyIsImVycm9yTWF4Q29udGFpbnMiLCJlcnJvck1pbkNvbnRhaW5zIiwiZXJyb3JNaW5pbXVtIiwiZXJyb3JNaW5JdGVtcyIsImVycm9yTWluTGVuZ3RoIiwiZXJyb3JNaW5Qcm9wZXJ0aWVzIiwiZXJyb3JNdWx0aXBsZU9mIiwiZXJyb3JOb3QiLCJlcnJvck9uZU9mIiwiZXJyb3JQYXR0ZXJuIiwiZXJyb3JQcmVmaXhJdGVtcyIsImVycm9yUmVxdWlyZWQiLCJlcnJvclR5cGUiLCJlcnJvclVuaXF1ZUl0ZW1zIiwiSW5zdGFuY2VBcnJheSIsIl9JbnN0YW5jZSIsInNldFVJIiwic2NoZW1hVHlwZSIsInByZXBhcmUiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJpdGVtc0NvdW50Iiwic2NoZW1hSXRlbXMiLCJzY2hlbWFQcmVmaXhJdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIm5ld1ZhbHVlIiwib25DaGlsZENoYW5nZSIsIml0ZW1WYWx1ZSIsIkluc3RhbmNlIiwiSW5zdGFuY2VCb29sZWFuIiwiY29uZmlnIiwicm9vdE5hbWUiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwidW5yZWdpc3RlciIsInNjaGVtYURlZmF1bHQiLCJ0cmlnZ2Vyc0NoYW5nZSIsInZhbGlkYXRvciIsIkluc3RhbmNlTXVsdGlwbGUiLCJpbnN0YW5jZXMiLCJhY3RpdmVJbnN0YW5jZUNoYW5nZWQiLCJsYXN0SW5kZXgiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsInNjaGVtYUNvcHkiLCJfb2JqZWN0U3ByZWFkIiwic3dpdGNoZXJUaXRsZSIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic2NoZW1hQ2xvbmUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhckF0IiwiZml0dGVzdEluZGV4IiwiZ2V0SWZJbmRleCIsImdldEZpdHRlc3RJbmRleCIsInJlYXNzaWduVmFsdWVzIiwibGFzdEluc3RhbmNlVmFsdWUiLCJjdXJyZW50SW5zdGFuY2VWYWx1ZSIsIm1lcmdlZFZhbHVlIiwiaWZFZGl0b3IiLCJKZWRpIiwic3RhcnRWYWx1ZSIsInJlZlBhcnNlciIsImlmRXJyb3JzIiwiY2hhbXBpb25FcnJvcnMiLCJpbnN0YW5jZUVycm9ycyIsIkluc3RhbmNlTnVsbCIsIkluc3RhbmNlTnVtYmVyIiwidHlwZUlzTnVtZXJpYyIsIkluc3RhbmNlT2JqZWN0Iiwic2NoZW1hUHJvcGVydGllcyIsInJlZnJlc2hJbnN0YW5jZXMiLCJwcm9wZXJ0eSIsInNjaGVtYVJlcXVpcmVkIiwibWlzc2luZ1Byb3BlcnRpZXMiLCJyZXF1aXJlZFByb3BlcnRpZXMiLCJkZWFjdGl2YXRlTm9uUmVxdWlyZWQiLCJpc05vdFJlcXVpcmVkIiwiZGVsZXRlQ2hpbGQiLCJnZXRDaGlsZCIsIm9sZFZhbHVlIiwiSW5zdGFuY2VTdHJpbmciLCJyb290IiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiWE1MSHR0cFJlcXVlc3QiLCJkZXJlZmVyZW5jZSIsImFwcGVuZEhpZGRlbklucHV0IiwiY2xhc3NMaXN0IiwiaGlkZGVuQ29udHJvbCIsImhpZGRlbklucHV0IiwiZXhwYW5kIiwic2NoZW1hT25lT2YiLCJzY2hlbWFBbnlPZiIsIl90aGlzJHJvb3QiLCJnZXRJbnN0YW5jZSIsImVkaXRvciIsIl90aGlzNSIsIml0ZXJhdGlvbnMiLCJyZWZEZWZpbml0aW9ucyIsInRyYXZlcnNlIiwiYXJncyIsInJlZiIsInN0YXJ0c1dpdGgiLCJyZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwiZW50cmllcyIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwiX3JlZjMiLCJfcmVmNCIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9yZWY4IiwicHJldlZhbHVlIiwiX1RoZW1lIiwidXNlVG9nZ2xlRXZlbnRzIiwiZ2V0TGVnZW5kIiwibGVnZW5kIiwiaGlkZUVsZW1lbnQiLCJnZXRDYXJkIiwiY2FyZCIsImdldENhcmRIZWFkZXIiLCJoZWFkZXIiLCJnZXRDYXJkQm9keSIsImh0bWwiLCJnZXRBY3Rpb25zU2xvdCIsImdldEFycmF5QWN0aW9uc1Nsb3QiLCJnZXRQcm9wZXJ0aWVzVG9nZ2xlIiwiZ2V0QnV0dG9uIiwiZ2V0UHJvcGVydGllc1Nsb3QiLCJnZXRCdG5Hcm91cCIsImdldERlc2NyaXB0aW9uIiwiZmllbGRzZXQiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9scyIsInJhZGlvQ29udHJvbCIsImZvcm1Hcm91cCIsImxhYmVsVGV4dCIsImdldFN3aXRjaGVyIiwicmVtb3ZlIiwieHMiLCJtZCIsIm9mZnNldE1kIiwibGluayIsInNob3dFbGVtZW50IiwiZ2V0Q29sdW1uQ2xhc3MiLCJzaXplIiwiZ2V0Q29udHJvbFNsb3QiLCJjb250cm9sU2xvdCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiZ2V0SWNvbiIsImljb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpY29uQ2xhc3NlcyIsImNsYXNzTmFtZSIsImdldEVkaXRvckNvbnRhaW5lciIsImdldEZpZWxkc2V0IiwidGV4dENvbnRlbnQiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2dnbGUiLCJwcm9wZXJ0aWVzQ29udGFpbmVyIiwiZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMiLCJidXR0b24iLCJ0ZXh0IiwiZ2V0QXJyYXlCdG5BZGQiLCJkZWxldGVJdGVtQnRuIiwibW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duSXRlbUJ0biIsImFjdGlvbnMiLCJib2R5IiwicHJvcGVydGllc1RvZ2dsZSIsImJ0bkdyb3VwIiwiZGVzY3JpcHRpb25JZCIsInNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIiwiZGVmaW5lZEluUGF0dGVyblByb3BlcnR5IiwicmVnZXhwIiwiYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzIiwibWFwIiwic3ViU2NoZW1hRWRpdG9yIiwic3ViU2NoZW1hRXJyb3JzIiwidmFsaWQiLCJhbnlPZkVkaXRvciIsImFueU9mRXJyb3JzIiwiX2NvbnN0Iiwic2NoZW1hQ29uc3QiLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsImludmFsaWQiLCJjb3VudGVyIiwiY29udGFpbnNFZGl0b3IiLCJjb250YWluc0Vycm9ycyIsImNvbnRhaW5zSW52YWxpZCIsIm1pbkNvbnRhaW5zSW52YWxpZCIsIm1heENvbnRhaW5zSW52YWxpZCIsImpvaW4iLCJkZXBlbmRlbnRTY2hlbWEiLCJ0bXBFZGl0b3IiLCJ0bXBFcnJvcnMiLCJfZW51bSIsInNvbWUiLCJfaWYiLCJzY2hlbWFJZiIsInNjaGVtYVRoZW4iLCJzY2hlbWFFbHNlIiwidGhlbkVycm9ycyIsImVsc2VFcnJvcnMiLCJ0aGVuRWRpdG9yIiwiZWxzZUVkaXRvciIsInByZWZpeEl0ZW1zU2NoZW1hc0NvdW50IiwicHJvcGVydGllc0NvdW50IiwiaXNNdWx0aXBsZU9mIiwidG9TdHJpbmciLCJub3RFZGl0b3IiLCJub3RFcnJvcnMiLCJvbmVPZkVkaXRvciIsIm9uZU9mRXJyb3JzIiwiYXR0ZXJuUHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsImVkaXRvckVycm9ycyIsIml0ZW1TY2hlbWEiLCJ0eXBlcyIsImludGVnZXIiLCJib29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJfbnVsbCIsInZhbHVlVHlwZSIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJfbG9vcCIsIml0ZW1TdHJpbmdpZmllZCIsIl9yZXQiLCJkcmFmdCIsImRyYWZ0MjAyMDEyIiwianNvblNjaGVtYURyYWZ0cyIsImRyYWZ0MDQiLCJkcmFmdDA2IiwiZHJhZnQwNyIsImRyYWZ0MjAxOTA5Iiwic2NoZW1hRXJyb3JzIiwic2NoZW1hT3B0aW9uc01lc3NhZ2VzIiwiY29uc3RyYWluIiwidmFsaWRhdG9yRXJyb3JzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0EsaUg7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0EsK0c7Ozs7Ozs7Ozs7O0FDSEEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGtIOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNIOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRzs7Ozs7Ozs7Ozs7QUNMQSxvQkFB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QyxTQUFTLENBQUM7VUFDNUVsa0IsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FBQztNQUNKO01BRUEyRixNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM4ZCxLQUFLLENBQUMsQ0FBQ3hsQixPQUFPLENBQUMsVUFBQ2ltQixTQUFTLEVBQUs7UUFDN0MsSUFBSWxiLDZEQUFNLENBQUNxTyxXQUFXLEVBQUU2TSxTQUFTLENBQUMsRUFBRTtVQUNsQyxJQUFNek4sU0FBUyxHQUFHemEsS0FBSSxDQUFDeW5CLEtBQUssQ0FBQ1MsU0FBUyxDQUFDO1VBQ3ZDLElBQU1DLGVBQWUsR0FBRzFOLFNBQVMsQ0FBQ3phLEtBQUksRUFBRVIsS0FBSyxFQUFFc0IsTUFBTSxFQUFFdkIsR0FBRyxFQUFFd0UsSUFBSSxDQUFDO1VBRWpFLElBQUlva0IsZUFBZSxFQUFFO1lBQ25CSCxZQUFZLE1BQUFwVCxNQUFBLENBQUEvQywrRUFBQSxDQUFPbVcsWUFBWSxHQUFBblcsK0VBQUEsQ0FBS3NXLGVBQWUsRUFBQztVQUN0RDtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSUgsWUFBWSxDQUFDM25CLE1BQU0sR0FBRyxDQUFDLElBQUk0bkIscUJBQXFCLEVBQUU7UUFDcERELFlBQVksR0FBRyxDQUNiO1VBQ0VsZixRQUFRLEVBQUVtZixxQkFBcUI7VUFDL0Jsa0IsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBT2lrQixZQUFZO0lBQ3JCO0VBQUM7RUFBQSxPQUFBeEssU0FBQTtBQUFBO0FBR1lBLHdFQUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBudWxsID09IGFyciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gX2kpIHtcbiAgICB2YXIgX3MsXG4gICAgICBfZSxcbiAgICAgIF94LFxuICAgICAgX3IsXG4gICAgICBfYXJyID0gW10sXG4gICAgICBfbiA9ICEwLFxuICAgICAgX2QgPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKF94ID0gKF9pID0gX2kuY2FsbChhcnIpKS5uZXh0LCAwID09PSBpKSB7XG4gICAgICAgIGlmIChPYmplY3QoX2kpICE9PSBfaSkgcmV0dXJuO1xuICAgICAgICBfbiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKF9uID0gKF9zID0gX3guY2FsbChfaSkpLmRvbmUpICYmIChfYXJyLnB1c2goX3MudmFsdWUpLCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgbnVsbCAhPSBfaVtcInJldHVyblwiXSAmJiAoX3IgPSBfaVtcInJldHVyblwiXSgpLCBPYmplY3QoX3IpICE9PSBfcikpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYXJyO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHsgY2xhbXAsIGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheU5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckFycmF5XG4gKi9cbmNsYXNzIEVkaXRvckFycmF5TmF2IGV4dGVuZHMgRWRpdG9yQXJyYXkge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGhcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgbmF2Q29scyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdkNvbHMnKVxuICAgIGNvbnN0IG5hdlN0YWNrZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZTdGFja2VkJylcbiAgICBjb25zdCBuYXZUeXBlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2VHlwZScpXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KG5hdkNvbHMpID8gbmF2Q29scyA6IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGlzU2V0KG5hdlN0YWNrZWQpID8gbmF2U3RhY2tlZCA6IGZhbHNlLFxuICAgICAgdHlwZTogaXNTZXQobmF2VHlwZSkgPyBuYXZUeXBlIDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBsZXQgY2hpbGRUaXRsZVxuICAgICAgY29uc3Qgc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaXRlbVRlbXBsYXRlJylcblxuICAgICAgaWYgKHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGkwOiBpbmRleCxcbiAgICAgICAgICBpMTogKGluZGV4ICsgMSksXG4gICAgICAgICAgdmFsdWU6IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFRpdGxlID0gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNoaWxkVGl0bGUgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSArICcgJyArIChpbmRleCArIDEpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgIH1cblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gY2xhbXAoKGluZGV4IC0gMSksIDAsICh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCArIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgbW92ZVVwQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cblxuICAgICAgaWYgKCh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpID09PSBpbmRleCkge1xuICAgICAgICBtb3ZlRG93bkJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheU5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU1heEl0ZW1zLFxuICBnZXRTY2hlbWFNaW5JdGVtcyxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckFycmF5IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcblxuICAgIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChtYXhJdGVtcykgJiYgbWF4SXRlbXMgPT09IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NldChtaW5JdGVtcykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPD0gbWluSXRlbXMpIHtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5XG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2x5cGhpY29ucywgYm9vdHN0cmFwSWNvbnMsIGZvbnRBd2Vzb21lMywgZm9udEF3ZXNvbWU0LCBmb250QXdlc29tZTUsIGZvbnRBd2Vzb21lNiB9IGZyb20gJy4uL3RoZW1lcy9pY29ucy9pY29ucydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZSBmcm9tICcuLi90aGVtZXMvdGhlbWUnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIG9ubHkgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuY29lcmNlVmFsdWUoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgY29uc3QgYWx3YXlzU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICdhbHdheXMnIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ2Fsd2F5cydcblxuICAgIGlmIChhbHdheXNTaG93RXJyb3JzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICBsZXQgaWNvbnMgPSBudWxsXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikge1xuICAgICAgICBjYXNlICdnbHlwaGljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGdseXBoaWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gYm9vdHN0cmFwSWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTMnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU0JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNSc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTYnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU2XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKGljb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpKVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYnkgbWFraW5nIGFzc3VtcHRpb25zIGJhc2VkIG9uIGNvbnN0cmFpbnNcbiAgICovXG4gIGNvZXJjZVZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpICYmIGlzU2V0KHNjaGVtYUVudW1bMF0pKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHNjaGVtYUVudW1bMF0sIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHVpIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBuZXZlclNob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnbmV2ZXInIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ25ldmVyJ1xuXG4gICAgaWYgKG5ldmVyU2hvd0Vycm9ycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JNdWx0aXBsZSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JNdWx0aXBsZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlclxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3RHcmlkIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdEdyaWQgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnY29sdW1ucycpIHx8IDEyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdvZmZzZXQnKSB8fCAwXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2x1bW5zLCBvZmZzZXQpXG5cbiAgICAgICAgaWYgKGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICduZXdSb3cnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdEdyaWRcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdE5hdiBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBuYXZDb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Q29scycpXG4gICAgY29uc3QgbmF2U3RhY2tlZCA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdlN0YWNrZWQnKVxuICAgIGNvbnN0IG5hdlR5cGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZUeXBlJylcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQobmF2Q29scykgPyBuYXZDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQobmF2U3RhY2tlZCkgPyBuYXZTdGFja2VkIDogZmFsc2UsXG4gICAgICB0eXBlOiBpc1NldChuYXZUeXBlKSA/IG5hdlR5cGUgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG5cbiAgICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICAgIHRpdGxlOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG5cbiAgICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdE5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGxldCBhZGRQcm9wZXJ0eSA9IHRydWVcbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgIGFkZFByb3BlcnR5ID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpLFxuICAgICAgYWRkUHJvcGVydHk6IGFkZFByb3BlcnR5XG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0ge31cblxuICAgICAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgICAgaWYgKGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBub3RSZXF1aXJlZCA9ICFpc1JlcXVpcmVkICYmICFpc0RlcGVuZGVudFJlcXVpcmVkXG5cbiAgICAgICAgaWYgKG5vdFJlcXVpcmVkKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aCkgKyAnLWFjdGl2YXRvcidcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGxhYmVsOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNrYm94Q29udHJvbC5pbnB1dFxuXG4gICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5hcHBlbmRDaGlsZChjaGVja2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1SYWRpbyBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ1RleHRhcmVhIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ1RleHRhcmVhIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1RleHRhcmVhXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZyBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXMoc2NoZW1hRm9ybWF0KSA/IHNjaGVtYUZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAoc2NoZW1hRm9ybWF0ID09PSAnY29sb3InICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYW4gRXZlbnRFbWl0dGVyIGluc3RhbmNlLlxuICovXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVudCB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgZW1pdHRlZFxuICAgKi9cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVNjaGVtYSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuJHNjaGVtYSkgPyBzY2hlbWEuJHNjaGVtYSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWxsT2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYWxsT2YpID8gc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbnlPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbnlPZikgPyBzY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnN0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5jb25zdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29udGFpbnMgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHNjaGVtYS5jb250YWlucykpID8gc2NoZW1hLmNvbnRhaW5zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZWZhdWx0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5kZWZhdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKSA/IHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXNjcmlwdGlvbiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZGVzY3JpcHRpb24pID8gc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbHNlIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHNjaGVtYS5lbHNlKSkgPyBzY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRW51bSAoc2NoZW1hKSB7XG4gIGlmIChpc0FycmF5KHNjaGVtYS5lbnVtKSAmJiBzY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5lbnVtXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFGb3JtYXQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmZvcm1hdCkgPyBzY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJZiAoc2NoZW1hKSB7XG4gIGlmIChpc09iamVjdChzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgaWYgKGlzQm9vbGVhbihzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLml0ZW1zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLml0ZW1zKSA/IHNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWF4aW11bSkgPyBzY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4Q29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhDb250YWlucykgJiYgc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heENvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhJdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heEl0ZW1zKSAmJiBzY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4SXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heExlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heExlbmd0aCkgJiYgc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhMZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgIHJldHVybiBzY2hlbWEubWF4UHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWluaW11bSkgPyBzY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluQ29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Db250YWlucykgJiYgc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkNvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5JdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkl0ZW1zKSAmJiBzY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluSXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkxlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkxlbmd0aCkgJiYgc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5MZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pblByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiBzY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNdWx0aXBsZU9mIChzY2hlbWEpIHtcbiAgaWYgKGlzTnVtYmVyKHNjaGVtYS5tdWx0aXBsZU9mKSAmJiBzY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tdWx0aXBsZU9mXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFOb3QgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbihzY2hlbWEubm90KSkgPyBzY2hlbWEubm90IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPcHRpb24gKHNjaGVtYSwgb3B0aW9uKSB7XG4gIHJldHVybiAoc2NoZW1hLm9wdGlvbnMgJiYgc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyBzY2hlbWEub3B0aW9uc1tvcHRpb25dIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5wYXR0ZXJuKSA/IHNjaGVtYS5wYXR0ZXJuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucGF0dGVyblByb3BlcnRpZXMpID8gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcmVmaXhJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5wcmVmaXhJdGVtcykgPyBzY2hlbWEucHJlZml4SXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnByb3BlcnRpZXMpID8gc2NoZW1hLnByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlYWRPbmx5IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEucmVhZE9ubHkpID8gc2NoZW1hLnJlYWRPbmx5IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBbLi4ubmV3IFNldChzY2hlbWEucmVxdWlyZWQpXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGhlbiAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLnRoZW4pIHx8IGlzQm9vbGVhbihzY2hlbWEudGhlbikpID8gc2NoZW1hLnRoZW4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRpdGxlIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS50aXRsZSkgPyBzY2hlbWEudGl0bGUgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVR5cGUgKHNjaGVtYSkge1xuICBpZiAoaXNTdHJpbmcoc2NoZW1hLnR5cGUpIHx8IGlzQXJyYXkoc2NoZW1hLnR5cGUpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS50eXBlXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPbmVPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5vbmVPZikgPyBzY2hlbWEub25lT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVVuaXF1ZUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQm9vbGVhbihzY2hlbWEudW5pcXVlSXRlbXMpID8gc2NoZW1hLnVuaXF1ZUl0ZW1zIDogdW5kZWZpbmVkXG59XG4iLCIvKipcbiAqIFV0aWxzLlxuICogQG1vZHVsZSB1dGlsc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjdWxhclJlcGxhY2VyICgpIHtcbiAgY29uc3QgYW5jZXN0b3JzID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIC8vIGB0aGlzYCBpcyB0aGUgb2JqZWN0IHRoYXQgdmFsdWUgaXMgY29udGFpbmVkIGluLFxuICAgIC8vIGkuZS4sIGl0cyBkaXJlY3QgcGFyZW50LlxuICAgIHdoaWxlIChhbmNlc3RvcnMubGVuZ3RoID4gMCAmJiBhbmNlc3RvcnMuYXQoLTEpICE9PSB0aGlzKSB7XG4gICAgICBhbmNlc3RvcnMucG9wKClcbiAgICB9XG4gICAgaWYgKGFuY2VzdG9ycy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnW0NpcmN1bGFyXSdcbiAgICB9XG4gICAgYW5jZXN0b3JzLnB1c2godmFsdWUpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2xvbmUgb2YgYSB0aGluZ1xuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB0aGluZyB0byBiZSBjbG9uZWRcbiAqIEByZXR1cm4geyp9IFRoZSBjbG9uZSBvZiB0aGUgdGhpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lICh0aGluZykge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nLCBnZXRDaXJjdWxhclJlcGxhY2VyKCkpKVxufVxuXG4vKipcbiAqIFJldHVybnMgZXNjYXBlZCByZWdleHBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEVzY2FwZWQgcmVnZXhwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbi8qKlxuICogTXVsdGlwbGUgc2VhcmNoIGFuZCByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZpbmQgLSBUaGUgcGFydCB0byBiZSByZXBsYWNlZFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2UgLSBUaGUgcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQWxsIChzdHIsIGZpbmQsIHJlcGxhY2UpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKVxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBqc29uIHBhdGggdG8gYmUgdXNlZCBhcyBhbiBodG1sIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUganNvbiBwYXRoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9BdHRyaWJ1dGUgKHBhdGgpIHtcbiAgcmV0dXJuIHJlcGxhY2VBbGwocmVwbGFjZUFsbChwYXRoLCAnIycsICdyb290JyksICcvJywgJy0nKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gVGhlIHByb3BlcnR5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXG59XG5cbi8qKlxuICogU29ydCBvYmplY3QgcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFRoZSBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0T2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IG9ialtrZXldXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBlcXVhbFxuICogQHBhcmFtIHsqfSBhIC0gVmFsdWUgQVxuICogQHBhcmFtIHsqfSBiIC0gVmFsdWUgQlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsIChhLCBiKSB7XG4gIGlmIChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSkge1xuICAgIGEgPSBzb3J0T2JqZWN0KGEpXG4gICAgYiA9IHNvcnRPYmplY3QoYilcbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIHBhc3NlZCBhcmUgZGlmZmVyZW50XG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW50IChhLCBiKSB7XG4gIHJldHVybiAhZXF1YWwoYSwgYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBudWxsXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGxcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdFNldCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIG51bWJlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGludGVnZXJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIgKHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gb2JqZWN0XG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOdWxsKHZhbHVlKSAmJiAhaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHR5cGUgb2YgYSB2YWx1ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUgKHZhbHVlKSB7XG4gIGxldCB0eXBlID0gJ2FueSdcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgdHlwZSA9IGlzSW50ZWdlcih2YWx1ZSkgPyAnaW50ZWdlcicgOiAnbnVtYmVyJ1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnc3RyaW5nJ1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2Jvb2xlYW4nXG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ2FycmF5J1xuICB9IGVsc2UgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ251bGwnXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnXG4gIH1cblxuICByZXR1cm4gdHlwZVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IHNvdXJjZXMgLSBPYmplY3RzIHRvIGJlIG1lcmdlZCBpbnRvIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBtZXJnZWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAgKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICAgIFtrZXldOiB7fVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgW2tleV06IHNvdXJjZVtrZXldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkgKG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGNvbnN0IGNvcHkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3B5W2ldID0gZGVlcENvcHkob2JqW2ldKVxuICAgIH1cbiAgICByZXR1cm4gY29weVxuICB9XG5cbiAgY29uc3QgY29weSA9IHt9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgICBjb3B5W2tleV0gPSBkZWVwQ29weShvYmpba2V5XSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvcHlcbn1cblxuLyoqXG4gKiBNZXJnZXMgb2JqZWN0cyBidXQgb25seSB0aGUgcHJvcGVydGllcyB0aGF0IGV4aXN0cyBpbiBib3RocyBvYmplY3RzXG4gKiBpZiB0aGV5IGFyZSB0aGUgc2FtZSB0eXBlIG9mIHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqMSAtIFRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdFtdfSBvYmoyIC0gT2JqZWN0cyB3aG8ncyBwcm9wZXJ0aWVzIGFyZSB0aGUgb3ZlcnJpZGVzXG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBvdmVyd3JpdHRlbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyAob2JqMSwgb2JqMikge1xuICBPYmplY3Qua2V5cyhvYmoyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iajEpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqMVtrZXldID09PSB0eXBlb2Ygb2JqMltrZXldKSB7XG4gICAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gb2JqMVxufVxuXG4vKipcbiAqIEdldCBzb21lIHZhbHVlIGJ5IHRyYXZlcnNpbmcgdGhlIGRhdGEgdXNpbmcgSlNPTiBwYXRoXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFRoZSBkYXRhIHNvdXJjZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBKU09OIHBhdGhcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUJ5SlNPTlBhdGggKGRhdGEsIHBhdGgpIHtcbiAgY29uc3Qga2V5cyA9IHBhdGguc3BsaXQoJy4nKSAvLyBTcGxpdCB0aGUgcGF0aCBpbnRvIGluZGl2aWR1YWwga2V5c1xuXG4gIGxldCB2YWx1ZSA9IGRhdGFcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAvXlxcZCskLy50ZXN0KGtleSkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoa2V5KVxuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtpbmRleF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gSW5kZXggaXMgb3V0IG9mIGJvdW5kcywgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKHZhbHVlLCBrZXkpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlW2tleV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBLZXkgZG9lc24ndCBleGlzdCwgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIENvbXBpbGVzIGEgdGVtcGxhdGUgYnkgc2VhcmNoIGFuZCByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBUaGUgdGVtcGxhdGUgc3RyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFdoZXJlIHRlbXBsYXRlIGRhdGEgbGl2ZXNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUgKHRlbXBsYXRlLCBkYXRhKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC97eyguKj8pfX0vZywgKG1hdGNoKSA9PiB7XG4gICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgY29uc3QgcGF0aCA9IG1hdGNoLnNwbGl0KC97e3x9fS8pWzFdXG4gICAgcmV0dXJuIGdldFZhbHVlQnlKU09OUGF0aChkYXRhLCBwYXRoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAgKG51bWJlciwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obnVtYmVyLCBtYXgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSAoYXJyKSB7XG4gIGNvbnN0IHVuaXF1ZU9iamVjdHMgPSBbXVxuICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgU2V0KClcblxuICBmb3IgKGNvbnN0IG9iaiBvZiBhcnIpIHtcbiAgICBjb25zdCBvYmpTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgaWYgKCF1bmlxdWVWYWx1ZXMuaGFzKG9ialN0cmluZykpIHtcbiAgICAgIHVuaXF1ZVZhbHVlcy5hZGQob2JqU3RyaW5nKVxuICAgICAgdW5pcXVlT2JqZWN0cy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pcXVlT2JqZWN0c1xufVxuIiwiLyoqXG4gKiBTaW1wbGUgdHJhbnNsYXRpb24gbW9kdWxlLlxuICogQG1vZHVsZSBpMThuXG4gKi9cblxuLyoqXG4gKiBMb2NhbGUgbWVzc2FnZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBpMThuID0ge1xuICBlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzOiAnaGFzIGFkZGl0aW9uYWwgcHJvcGVydHkgXCJ7eyBwcm9wZXJ0eSB9fVwiIGJ1dCBubyBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIGFsbG93ZWQnLFxuICBlcnJvckFueU9mOiAnbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcycsXG4gIGVycm9yQ29uc3Q6ICdtdXN0IGhhdmUgdmFsdWUgb2Y6IHt7IGNvbnN0IH19JyxcbiAgZXJyb3JDb250YWluczogJ211c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hJyxcbiAgZXJyb3JEZXBlbmRlbnRSZXF1aXJlZDogJ211c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgZGVwZW5kZW50UmVxdWlyZWQgfX0nLFxuICBlcnJvckVudW06ICdtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXM6IHt7IGVudW0gfX0nLFxuICBlcnJvckV4Y2x1c2l2ZU1heGltdW06ICdtdXN0IGJlIGxlc3MgdGhhbiB7eyBleGNsdXNpdmVNYXhpbXVtIH19JyxcbiAgZXJyb3JFeGNsdXNpdmVNaW5pbXVtOiAnbXVzdCBiZSBncmVhdGVyIHRoYW4ge3sgZXhjbHVzaXZlTWluaW11bSB9fScsXG4gIGVycm9yRm9ybWF0OiAnbXVzdCBiZSBhIHZhbGlkIHt7IGZvcm1hdCB9fScsXG4gIGVycm9ySXRlbXM6ICdtdXN0IGhhdmUgaXRlbXMgdGhhdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvck1heGltdW06ICdtdXN0IGJlIGF0IG1vc3Qge3sgbWF4aW11bSB9fScsXG4gIGVycm9yTWF4SXRlbXM6ICdtdXN0IGhhdmUgYXQgbW9zdCB7eyBtYXhJdGVtcyB9fSBpdGVtcycsXG4gIGVycm9yTWF4TGVuZ3RoOiAnbXVzdCBiZSBhdCBtb3N0IHt7IG1heExlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcnLFxuICBlcnJvck1heFByb3BlcnRpZXM6ICdtdXN0IGhhdmUgYXQgbW9zdCB7eyBtYXhQcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMnLFxuICBlcnJvck1heENvbnRhaW5zOiAnbXVzdCBjb250YWluIGF0IG1vc3Qge3sgbWF4Q29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0nLFxuICBlcnJvck1pbkNvbnRhaW5zOiAnbXVzdCBjb250YWluIGF0IGxlYXN0IHt7IG1pbkNvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19JyxcbiAgZXJyb3JNaW5pbXVtOiAnbXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5pbXVtIH19JyxcbiAgZXJyb3JNaW5JdGVtczogJ211c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5JdGVtcyB9fSBpdGVtcycsXG4gIGVycm9yTWluTGVuZ3RoOiAnbXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5MZW5ndGggfX0gY2hhcmFjdGVycyBsb25nJyxcbiAgZXJyb3JNaW5Qcm9wZXJ0aWVzOiAnbXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pblByb3BlcnRpZXMgfX0gcHJvcGVydGllcycsXG4gIGVycm9yTXVsdGlwbGVPZjogJ211c3QgYmUgbXVsdGlwbGUgb2Yge3sgbXVsdGlwbGVPZiB9fScsXG4gIGVycm9yTm90OiAnbXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hJyxcbiAgZXJyb3JPbmVPZjogJ211c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0IHt7IGNvdW50ZXIgfX0gb2YgdGhlIHNjaGVtYXMnLFxuICBlcnJvclBhdHRlcm46ICdtdXN0IG1hdGNoIHRoZSBwYXR0ZXJuOiBcInt7IHBhdHRlcm4gfX1cIicsXG4gIGVycm9yUHJlZml4SXRlbXM6ICdJdGVtIHt7IGluZGV4IH19IGZhaWxzIHZhbGlkYXRpb24nLFxuICBlcnJvclJlcXVpcmVkOiAnbXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyByZXF1aXJlZCB9fScsXG4gIGVycm9yVHlwZTogJ211c3QgYmUgb2YgdHlwZSB7eyB0eXBlIH19JyxcbiAgZXJyb3JVbmlxdWVJdGVtczogJ211c3QgaGF2ZSB1bmlxdWUgaXRlbXMnXG59XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBFZGl0b3JBcnJheU5hdiBmcm9tICcuLi9lZGl0b3JzL2FycmF5LW5hdidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZUFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VBcnJheSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknICYmIHNjaGVtYUZvcm1hdCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXlOYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheSh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGxldCBzY2hlbWFcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBjb25zdCBzY2hlbWFJdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXModGhpcy5zY2hlbWEpXG4gICAgc2NoZW1hID0gaXNTZXQoc2NoZW1hSXRlbXMpID8gc2NoZW1hSXRlbXMgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldChzY2hlbWFQcmVmaXhJdGVtcykgJiYgaXNTZXQoc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF0pXG5cbiAgICBpZiAoaGFzUHJlZml4SXRlbXNTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VBcnJheVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VCb29sZWFuIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQm9vbGVhblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZWZhdWx0LCBnZXRTY2hlbWFSZWFkT25seSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gaXNTZXQoY29uZmlnLnZhbHVlKSA/IGNvbmZpZy52YWx1ZSA6IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogdG8gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGlmIChub3RTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgIGxldCB2YWx1ZVxuICAgICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFEZWZhdWx0ID0gZ2V0U2NoZW1hRGVmYXVsdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFEZWZhdWx0KSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShzY2hlbWFEZWZhdWx0LCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuXG4gICAgcmV0dXJuIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkoZXJyb3JzKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGluc3RhbmNlIGlzIHJlYWQgb25seVxuICAgKi9cbiAgaXNSZWFkT25seSAoKSB7XG4gICAgbGV0IHJlYWRPbmx5ID0gZmFsc2VcblxuICAgIGlmIChnZXRTY2hlbWFSZWFkT25seSh0aGlzLnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiBnZXRTY2hlbWFSZWFkT25seSh0aGlzLnBhcmVudC5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck11bHRpcGxlIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzLCBtZXJnZURlZXAsIGRlZXBDb3B5XG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU11bHRpcGxlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JNdWx0aXBsZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgfHwgaXNTZXQoZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSA/IGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSA6IGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3Qgc2NoZW1hQ29weSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvbmVPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uc2NoZW1hQ29weSwgLi4uc2NoZW1hIH1cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJUaXRsZSA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJylcbiAgICAgICAgY29uc3Qgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBpc1NldChzd2l0Y2hlclRpdGxlKSA/IHN3aXRjaGVyVGl0bGUgOiAnT3B0aW9uLScgKyAoaW5kZXggKyAxKVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHNjaGVtYVR5cGUpKSB7XG4gICAgICBzY2hlbWFUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gbWVyZ2VEZWVwKHRoaXMuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYW55JyB8fCAhc2NoZW1hVHlwZSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSlcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnT2JqZWN0JywgJ0FycmF5JywgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgIHZhbHVlOiBjbG9uZSh0aGlzLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHRoaXMudmFsdWUsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaW5kZXhdXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB0aGlzLnZhbHVlKSB8fCB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSBmYWxzZVxuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgodGhpcy52YWx1ZSkgOiB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVhc3NpZ25WYWx1ZXMgKCkge1xuICAgIGNvbnN0IGxhc3RJbnN0YW5jZVZhbHVlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5sYXN0SW5kZXhdLmdldFZhbHVlKClcbiAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VWYWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzT2JqZWN0KGxhc3RJbnN0YW5jZVZhbHVlKSAmJiBpc09iamVjdChjdXJyZW50SW5zdGFuY2VWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IG1lcmdlZFZhbHVlID0gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzKGN1cnJlbnRJbnN0YW5jZVZhbHVlLCBsYXN0SW5zdGFuY2VWYWx1ZSlcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUobWVyZ2VkVmFsdWUsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGdldElmSW5kZXggKHZhbHVlKSB7XG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogdGhpcy5pZiwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG4gICAgcmV0dXJuIGlmRXJyb3JzLmxlbmd0aCA9PT0gMCA/IDAgOiAxXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGluc3RhbmNlIHRoYXQgaGFzIGxlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICovXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VNdWx0aXBsZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVsbCBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVsbCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVsbCh0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVsbFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bWJlciBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCB0eXBlSXNOdW1lcmljID0gc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInXG5cbiAgICBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVtYmVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgaXNPYmplY3QsIGhhc093biwgY2xvbmUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEVkaXRvck9iamVjdEdyaWQgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtZ3JpZCdcbmltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgRWRpdG9yT2JqZWN0TmF2IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LW5hdidcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkLFxuICBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUmVxdWlyZWQsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZU9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlT2JqZWN0IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3QodGhpcylcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JyAmJiBzY2hlbWFGb3JtYXQgPT09ICdncmlkJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3RHcmlkKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0JyAmJiBzY2hlbWFGb3JtYXQgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdE5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpKSB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWFQcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gc2NoZW1hUHJvcGVydGllc1trZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBzY2hlbWFSZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgcmV0dXJuIGlzU2V0KHNjaGVtYVJlcXVpcmVkKSAmJiBzY2hlbWFSZXF1aXJlZC5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcblxuICAgIGlmICh0aGlzLmlzTm90UmVxdWlyZWQoa2V5KSAmJiBpc1NldChkZWFjdGl2YXRlTm9uUmVxdWlyZWQpICYmIGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBpc05vdFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhdGhpcy5pc1JlcXVpcmVkKHByb3BlcnR5KSAmJiAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZCh7fSwga2V5LCB2YWx1ZVtrZXldKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VPYmplY3RcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvclN0cmluZ1RleHRhcmVhIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLXRleHRhcmVhJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VTdHJpbmcgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hRm9ybWF0ID09PSAndGV4dGFyZWEnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ1RleHRhcmVhKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmcodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VTdHJpbmdcbiIsImltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKZWRpIGluc3RhbmNlLlxuICovXG5jbGFzcyBKZWRpIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBKZWRpIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IG9wdGlvbnMuc2NoZW1hIC0gQSBKU09OIHNjaGVtYVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuaXNFZGl0b3IgLSBHZW5lcmF0ZXMgVUkgY29udHJvbHMgdG8gZWRpdCB0aGUgSlNPTiB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29udGFpbmVyIC0gV2hlcmUgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGhlbWUgLSBIb3cgdGhlIFVJIGNvbnRyb2xzIHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBpc0VkaXRvcjogZmFsc2UsXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgc2NoZW1hOiB7fSxcbiAgICAgIHJlZlBhcnNlcjogdHJ1ZSxcbiAgICAgIHNob3dFcnJvcnM6ICdjaGFuZ2UnXG4gICAgfSwgb3B0aW9ucylcblxuICAgIC8qKlxuICAgICAqIFJvb3RzIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcblxuICAgIC8qKlxuICAgICAqIFNlcGFyYXRvciBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgcmVnaXN0ZXJlZCBpbnN0YW5jZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuXG4gICAgLyoqXG4gICAgICogVGhlIHJvb3QgZWRpdG9yXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290ID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gZ2VuZXJhdGUgZWRpdG9ycyB1c2VyIGludGVyZmFjZXNcbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIFZhbGlkYXRvciBpbnN0YW5jZSB1c2VkIHRvIHZhbGlkYXRlIGluc3RhbmNlIHZhbHVlc1xuICAgICAqIEB0eXBlIHtWYWxpZGF0b3J9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEganNvbiBzY2hlbWEgdXNlZFxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBBIFJlZlBhcnNlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtSZWZQYXJzZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdFxuICAgICAgfSlcblxuICAgICAgdGhpcy5vcHRpb25zLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLm9wdGlvbnMuc2NoZW1hXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5zdGFydFZhbHVlKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5zdGFydFZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdobydzIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuSW5wdXQpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcblxuICAgIHRoaXMub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gaW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdW5yZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGpzb24gaW5zdGFuY2UgYW5kIGRlcmVmZXJlbmNlIHNjaGVtYSBvbiB0aGUgZmx5IGlmIG5lZWRlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZlBhcnNlcikge1xuICAgICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmV4cGFuZChjb25maWcuc2NoZW1hKVxuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT25lT2YgPSBnZXRTY2hlbWFPbmVPZihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUFueU9mID0gZ2V0U2NoZW1hQW55T2YoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFBbnlPZikgfHwgaXNTZXQoc2NoZW1hT25lT2YpIHx8IHNjaGVtYVR5cGUgPT09ICdhbnknIHx8IGlzQXJyYXkoc2NoZW1hVHlwZSkgfHwgbm90U2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTXVsdGlwbGUoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VBcnJheShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlU3RyaW5nKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVtYmVyKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQm9vbGVhbihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bGwoY29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgbm90U2V0XG59IGZyb20gJy4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFsbE9mLFxuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYVByZWZpeEl0ZW1zXG59IGZyb20gJy4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJlZlBhcnNlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAobm90U2V0KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgMVxuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5yZWZEZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmtleSA9PT0gJyRyZWYnKSB7XG4gICAgICAgICAgdGhpcy5yZWZEZWZpbml0aW9uc1thcmdzLnZhbHVlXSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkZWZpbmUgZXh0ZXJuYWwgcmVmc1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVmRGVmaW5pdGlvbnMpLmZvckVhY2goKHJlZikgPT4ge1xuICAgICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5yZWZEZWZpbml0aW9uc1tyZWZdID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gZGVmaW5lIGludGVybmFsIHJlZnNcbiAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMucmVmRGVmaW5pdGlvbnNbYXJncy5wYXRoXSkpIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZWZEZWZpbml0aW9ucywgbnVsbCwgMikpXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc2NoZW1hLCBudWxsLCAyKSlcblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIGV4cGFuZCAoc2NoZW1hKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0VYUEFORCcsIEpTT04uc3RyaW5naWZ5KHNjaGVtYSwgbnVsbCwgMikpXG4gICAgaWYgKGlzU2V0KHNjaGVtYVsnJHJlZiddKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmRGVmaW5pdGlvbnNbc2NoZW1hWyckcmVmJ11dXG4gICAgfVxuXG4gICAgY29uc3QgYW55T2YgPSBnZXRTY2hlbWFBbnlPZihzY2hlbWEpXG4gICAgY29uc3Qgb25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG4gICAgY29uc3QgYWxsT2YgPSBnZXRTY2hlbWFBbGxPZihzY2hlbWEpXG4gICAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhhbnlPZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5hbnlPZltrZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1NldChvbmVPZikpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKG9uZU9mKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLm9uZU9mW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KGFsbE9mKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoYWxsT2YpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEuYWxsT2Zba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQocHJlZml4SXRlbXMpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhwcmVmaXhJdGVtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5wcmVmaXhJdGVtc1trZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIHRyYXZlcnNlIChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnZhbHVlXG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLmNhbGxiYWNrXG4gICAgY29uc3QgcGF0aCA9IGlzU2V0KGFyZ3MucGF0aCkgPyBhcmdzLnBhdGggKyAnLycgKyBhcmdzLmtleSA6ICcjJ1xuICAgIGFyZ3MucGF0aCA9IHBhdGhcblxuICAgIGlmIChpc1NldChjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKGFyZ3MpXG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gdmFsdWVba2V5XVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKG5ld1ZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZQYXJzZXJcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDMgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDMgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaGVhZGVyID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWhlYWRpbmcnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi14cycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZGVmYXVsdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdyYWRpbycpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdygpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtc3RhY2tlZCcpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zdGFja2VkJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDNcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDQgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29sdW1uQ2xhc3MgKHNpemUsIGNvbHMpIHtcbiAgICByZXR1cm4gJ2NvbC0nICsgc2l6ZSArICctJyArIGNvbHNcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzci1vbmx5JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDRcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZUJvb3RzdHJhcDUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBUaGVtZVxuICovXG5jbGFzcyBUaGVtZUJvb3RzdHJhcDUgZXh0ZW5kcyBUaGVtZSB7XG4gIGluaXQgKCkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gZmFsc2VcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICBnZXRDYXJkICgpIHtcbiAgICBjb25zdCBjYXJkID0gc3VwZXIuZ2V0Q2FyZCgpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEhlYWRlcihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtZW5kJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxuXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNVxuIiwiLyoqXG4gKiBMaXN0cyBvZiBodG1sIGNsYXNzZXMgdXNlZCBmb3IgaWNvbnMuXG4gKiBAbW9kdWxlIGljb25zXG4gKi9cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGdseXBoaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBnbHlwaGljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaCcsXG4gIGFkZDogJ2dseXBoaWNvbiBnbHlwaGljb24tcGx1cycsXG4gIG1vdmVVcDogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2dseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGJvb3RzdHJhcC1pY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJvb3RzdHJhcEljb25zID0ge1xuICBwcm9wZXJ0aWVzOiAnYmkgYmktY2FyZC1saXN0JyxcbiAgZGVsZXRlOiAnYmkgYmktdHJhc2gyJyxcbiAgYWRkOiAnYmkgYmktcGx1cycsXG4gIG1vdmVVcDogJ2JpIGJpLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdiaSBiaS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWUzIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWUzID0ge1xuICBwcm9wZXJ0aWVzOiAnaWNvbi1saXN0JyxcbiAgZGVsZXRlOiAnaWNvbi10cmFzaCcsXG4gIGFkZDogJ2ljb24tcGx1cycsXG4gIG1vdmVVcDogJ2ljb24tYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ljb24tYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNCBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNCA9IHtcbiAgcHJvcGVydGllczogJ2ZhIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYSBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYSBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNSBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNSA9IHtcbiAgcHJvcGVydGllczogJ2ZhcyBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmFzIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmFzIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYXMgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhcyBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU2IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU2ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEtc29saWQgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhLXNvbGlkIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEtc29saWQgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhLXNvbGlkIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYS1zb2xpZCBmYS1hcnJvdy1kb3duJ1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRoZW1lIHtcbiAgY29uc3RydWN0b3IgKGljb25zID0gbnVsbCkge1xuICAgIHRoaXMuaWNvbnMgPSBpY29uc1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdHMgc29tZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0IChuYW1lKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGljb24gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SWNvbiAobmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBpY29uQ2xhc3NlcyA9IHRoaXMuaWNvbnNbbmFtZV0uc3BsaXQoJyAnKVxuXG4gICAgaWYgKGljb25DbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGljb25DbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBkaXYgdXNlZCB0byB3cmFwIHRoZSBlZGl0b3IgVUkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEVkaXRvckNvbnRhaW5lciAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVkaXRvci1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgZmllbGRzZXQgZWxlbWVudC5cbiAgICogVXNlZCB0byB3cmFwIGNoaWxkcmVuIHNsb3QgYW5kIHByb3ZpZGUgbW9yZSBzZW1hbnRpYyBodG1sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIGNvbXBsZXggZWRpdG9ycyBsaWtlIGFycmF5cywgb2JqZWN0cyBhbmQgbXVsdGlwbGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIExlZ2VuZCBlbGVtZW50IHVzZWQgaW4gZmllbGRzZXRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgLyoqXG4gICAqIEhlYWRlciBmb3IgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZyA9IHt9KSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXG4gICAgaWYgKGNvbmZpZy50ZXh0Q29udGVudCkge1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0aXRsZSlcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICByZXR1cm4gaGVhZGVyXG4gIH1cblxuICAvKipcbiAgICogQSBib2R5IGZvciB0aGUgY2FyZHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgYXJyYXkgc3BlY2lmaWMgYWN0aW9ucyBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGNoaWxkIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlcnJvciBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBPYmplY3RFZGl0b3IgcHJvcGVydGllcyB3cmFwcGVyIHZpc2liaWxpdHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlRWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAodGhpcy5pY29ucyAmJiBjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiAnUHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkLFxuICAgICAgaWNvbjogJ3Byb3BlcnRpZXMnLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcjogcHJvcGVydGllc0NvbnRhaW5lclxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQWN0aXZhdG9ycyA9IHRoaXMuZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMoKVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlDb250cm9sID0gdGhpcy5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQ6ICdqZWRpLWFkZC1wcm9wZXJ0eS1pbnB1dC0nICsgY29uZmlnLmlkLFxuICAgICAgbGFiZWw6ICdQcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkUHJvcGVydHlCdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGFkZFByb3BlcnR5QnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktb2JqZWN0LWFkZCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvcGVydGllc0NvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0nLFxuICAgICAgaWNvbjogJ2FkZCdcbiAgICB9KVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChidG5Hcm91cClcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBidG5Hcm91cCxcbiAgICAgIGFkZEJ0bixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNdWx0aXBsZSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9ucyB0aGF0IGNhbiBiZVxuICAgKiBzZWxlY3RlZCB3aXRoIGEgc3dpdGNoZXIgY29udHJvbC4gT25seSBvbmUgZWRpdG9yIGNhbiBiZSBhY3RpdmUvdmlzaWJsZVxuICAgKiBhdCBhIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE11bHRpcGxlQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3Qgc3dpdGNoZXIgPSB0aGlzLmdldFN3aXRjaGVyKHtcbiAgICAgIHZhbHVlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgdGl0bGVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25zTGFiZWxzLFxuICAgICAgaWQ6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgbGFiZWw6IGNvbmZpZy5pZCArICctc3dpdGNoZXInLFxuICAgICAgc3JPbmx5OiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IGNvbmZpZy5yZWFkT25seVxuICAgIH0pXG5cbiAgICBzd2l0Y2hlci5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1zd2l0Y2hlcicpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoc3dpdGNoZXIuY29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBzd2l0Y2hlcixcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIGZvciBOdWxsRWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROdWxsQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBUZXh0YXJlYVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSByYWRpbyBncm91cCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcblxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcubGFiZWxcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcblxuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBsYWJlbFRleHRzLnB1c2gobGFiZWxUZXh0KVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBsYWJlbHMucHVzaChsYWJlbClcbiAgICB9KVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgbGFiZWwsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBzZWxlY3QgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlcyAmJiBjb25maWcudGl0bGVzW2luZGV4XSkge1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVhbHMgYSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsIi8qKlxuICogY29uc3RyYWlucyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcywgZ2V0U2NoZW1hUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRpdGlvbmFsUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpID8gc2NoZW1hUHJvcGVydGllcyA6IHt9XG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgIGNvbnN0IHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hUGF0dGVyblByb3BlcnRpZXNcblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgbGV0IGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGlzU2V0KHBhdHRlcm5Qcm9wZXJ0aWVzKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgICAgICBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSByZWdleHAudGVzdChwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgJiYgaXNPYmplY3QoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmICFoYXNPd24ocHJvcGVydGllcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHZhbHVlW3Byb3BlcnR5XSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBbGxPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgYWxsT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50LCBjb21waWxlVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29uc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb25zdCA9IGdldFNjaGVtYUNvbnN0KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYUNvbnN0KVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQ29uc3QsIHtcbiAgICAgICAgICAgIGNvbnN0OiBKU09OLnN0cmluZ2lmeShzY2hlbWFDb25zdClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogY29udGFpbnMsIHN0YXJ0VmFsdWU6IGl0ZW0sIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KG1pbkNvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBtaW5Db250YWlucylcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluQ29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWluQ29udGFpbnM6IG1pbkNvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChtYXhDb250YWlucykpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gbWF4Q29udGFpbnMpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heENvbnRhaW5zLCB7XG4gICAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIG1heENvbnRhaW5zOiBtYXhDb250YWluc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRGVwZW5kZW50UmVxdWlyZWQsIHtcbiAgICAgICAgICAgIGRlcGVuZGVudFJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFNjaGVtYXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChkZXBlbmRlbnRTY2hlbWFzKSkge1xuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFNjaGVtYXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IGRlcGVuZGVudFNjaGVtYXNba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFbnVtLCB7XG4gICAgICAgICAgICBlbnVtOiBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBmb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2lmICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hSWYsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWFUaGVuKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFUaGVuLCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYUVsc2UsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU5vdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBub3QgPSBnZXRTY2hlbWFOb3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChub3QpKSB7XG4gICAgY29uc3Qgbm90RWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IG5vdCwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBub3RFcnJvcnMgPSBub3RFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBub3RFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck5vdClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFPbmVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgb25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgb25lT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck9uZU9mLCB7XG4gICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm4gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHBhdHRlcm4gPSBnZXRTY2hlbWFQYXR0ZXJuKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHBhdHRlcm4pKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUGF0dGVybiwge1xuICAgICAgICAgICAgcGF0dGVybjogcGF0dGVyblxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICAgIHJlZlBhcnNlcjogZmFsc2VcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQocHJlZml4SXRlbXMpKSB7XG4gICAgcHJlZml4SXRlbXMuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogaXRlbVNjaGVtYSwgc3RhcnRWYWx1ZTogaXRlbVZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgICAgaWYgKHRtcEVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQcmVmaXhJdGVtcywge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCByZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHJlcXVpcmVkKSkge1xuICAgIGNvbnN0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG5cbiAgICByZXF1aXJlZC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbWlzc2luZ1Byb3BlcnRpZXMubGVuZ3RoID4gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclJlcXVpcmVkLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogbWlzc2luZ1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHtcbiAgY29tcGlsZVRlbXBsYXRlLCBnZXRUeXBlLFxuICBpc0FycmF5LFxuICBpc0Jvb2xlYW4sXG4gIGlzSW50ZWdlcixcbiAgaXNOdWxsLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBpc1N0cmluZ1xufSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCB0eXBlID0gZ2V0U2NoZW1hVHlwZShzY2hlbWEpXG5cbiAgaWYgKHR5cGUgPT09ICdhbnknKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaWYgKGlzU2V0KHR5cGUpKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBzdHJpbmc6IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSxcbiAgICAgIG51bWJlcjogdmFsdWUgPT4gaXNOdW1iZXIodmFsdWUpLFxuICAgICAgaW50ZWdlcjogdmFsdWUgPT4gaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgIGJvb2xlYW46IHZhbHVlID0+IGlzQm9vbGVhbih2YWx1ZSksXG4gICAgICBhcnJheTogdmFsdWUgPT4gaXNBcnJheSh2YWx1ZSksXG4gICAgICBvYmplY3Q6IHZhbHVlID0+IGlzT2JqZWN0KHZhbHVlKSxcbiAgICAgIG51bGw6IHZhbHVlID0+IGlzTnVsbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdmFsaWQgPSB0eXBlLnNvbWUoKHR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JUeXBlLCB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdmFsdWVUeXBlOiBnZXRUeXBlKHZhbHVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU2V0LCBzb3J0T2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCB1bmlxdWVJdGVtcyA9IGdldFNjaGVtYVVuaXF1ZUl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQodW5pcXVlSXRlbXMpICYmIHVuaXF1ZUl0ZW1zID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2VlbiA9IFtdXG4gICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHZhbHVlW2ldXG5cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBpdGVtID0gc29ydE9iamVjdChpdGVtKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtU3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gc2Vlbi5zb21lKChzZWVuKSA9PiBzZWVuID09PSBpdGVtU3RyaW5naWZpZWQpXG5cbiAgICAgIGlmIChoYXNEdXBsaWNhdGVkSXRlbXMpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4ucHVzaChpdGVtU3RyaW5naWZpZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IChoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGkxOG4uZXJyb3JVbmlxdWVJdGVtc1xuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCB7IGFsbE9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbGxPZidcbmltcG9ydCB7IG1pbkxlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluTGVuZ3RoJ1xuaW1wb3J0IHsgX2NvbnN0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb25zdCdcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9jb250YWlucydcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IGRlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRSZXF1aXJlZCdcbmltcG9ydCB7IGRlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuLi9jb25zdHJhaW5zL2lmJ1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2l0ZW1zJ1xuaW1wb3J0IHsgbWF4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heEl0ZW1zJ1xuaW1wb3J0IHsgbWF4TGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhMZW5ndGgnXG5pbXBvcnQgeyBtYXhQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluaW11bSdcbmltcG9ydCB7IG1pbkl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5JdGVtcydcbmltcG9ydCB7IG1pblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMnXG5pbXBvcnQgeyBtdWx0aXBsZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tdWx0aXBsZU9mJ1xuaW1wb3J0IHsgbm90IH0gZnJvbSAnLi4vY29uc3RyYWlucy9ub3QnXG5pbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvb25lT2YnXG5pbXBvcnQgeyBwYXR0ZXJuIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuJ1xuaW1wb3J0IHsgcGF0dGVyblByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgcHJlZml4SXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdDA0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA0J1xuaW1wb3J0IGRyYWZ0MDYgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDYnXG5pbXBvcnQgZHJhZnQwNyBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNydcbmltcG9ydCBkcmFmdDIwMTkwOSBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDE5LTA5J1xuaW1wb3J0IGRyYWZ0MjAyMDEyIGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiwgY2xvbmUsIGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnQyMDIwMTJcblxuICAgIHRoaXMuanNvblNjaGVtYURyYWZ0cyA9IHtcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnOiBkcmFmdDA0LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDYvc2NoZW1hIyc6IGRyYWZ0MDYsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJzogZHJhZnQwNyxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDE5LTA5L3NjaGVtYSc6IGRyYWZ0MjAxOTA5LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMjAtMTIvc2NoZW1hJzogZHJhZnQyMDIwMTJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cbiAgICBjb25zdCBzY2hlbWFPcHRpb25zTWVzc2FnZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnbWVzc2FnZXMnKVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZShzY2hlbWEpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2VzOiBpc1NldChzY2hlbWFPcHRpb25zTWVzc2FnZXMpID8gc2NoZW1hT3B0aW9uc01lc3NhZ2VzIDogWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYU9wdGlvbnNNZXNzYWdlcykge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZXM6IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9