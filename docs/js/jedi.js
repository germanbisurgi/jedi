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
      this.validator = new _validation_validator__WEBPACK_IMPORTED_MODULE_6__["default"]();
      this.refParser = new _ref_parser_ref_parser__WEBPACK_IMPORTED_MODULE_15__["default"]({
        XMLHttpRequest: this.options.XMLHttpRequest
      });
      this.refParser.dereference(this.options.schema);
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
      schema: schemaIf,
      data: value
    });
    var ifErrors = ifEditor.getErrors();
    ifEditor.destroy();
    var thenErrors = [];
    var elseErrors = [];
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaThen)) {
      var thenEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
        schema: schemaThen,
        data: value
      });
      thenErrors = thenEditor.getErrors();
      thenEditor.destroy();
    }
    if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__["isSet"])(schemaElse)) {
      var elseEditor = new _jedi__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yQXJyYXlOYXYiLCJfRWRpdG9yQXJyYXkiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiYWN0aXZlVGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiY29udHJvbCIsImFkZEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0YW5jZSIsImxlbmd0aCIsImFkZEl0ZW0iLCJyZWZyZXNoVUkiLCJfdGhpczIiLCJyZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsIm5hdkNvbHMiLCJnZXRTY2hlbWFPcHRpb24iLCJzY2hlbWEiLCJuYXZTdGFja2VkIiwibmF2VHlwZSIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImlzU2V0IiwidGFiTGlzdENvbCIsImdldENvbCIsInRhYkNvbnRlbnRDb2wiLCJ0YWJDb250ZW50IiwiZ2V0VGFiQ29udGVudCIsInRhYkxpc3QiLCJnZXRUYWJMaXN0Iiwic3RhY2tlZCIsInR5cGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJkZWxldGVCdG4iLCJnZXREZWxldGVJdGVtQnRuIiwibW92ZVVwQnRuIiwiZ2V0TW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duQnRuIiwiZ2V0TW92ZURvd25JdGVtQnRuIiwidWkiLCJhcnJheUFjdGlvbnMiLCJjb250YWluZXIiLCJjaGlsZFRpdGxlIiwic2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlIiwidGVtcGxhdGUiLCJkYXRhIiwiaTAiLCJpMSIsImdldFZhbHVlIiwiY29tcGlsZVRlbXBsYXRlIiwic2NoZW1hVGl0bGUiLCJnZXRTY2hlbWFUaXRsZSIsImdldEtleSIsImNsYW1wIiwiZGVsZXRlSXRlbSIsInRvSW5kZXgiLCJtb3ZlIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwidGFiIiwiZ2V0VGFiIiwidGl0bGUiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImlzUmVhZE9ubHkiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2V0QXR0cmlidXRlIiwiRWRpdG9yQXJyYXkiLCJfRWRpdG9yIiwiYnVpbGQiLCJnZXRBcnJheUNvbnRyb2wiLCJzck9ubHkiLCJkZXNjcmlwdGlvbiIsImdldFNjaGVtYURlc2NyaXB0aW9uIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwibWVzc2FnZSIsImdldEFsZXJ0Iiwic2FuaXRpemUiLCJpc0FycmF5IiwibWF4SXRlbXMiLCJnZXRTY2hlbWFNYXhJdGVtcyIsIm1pbkl0ZW1zIiwiZ2V0U2NoZW1hTWluSXRlbXMiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJzcGxpdCIsImplZGkiLCJwYXRoU2VwYXJhdG9yIiwicG9wIiwiRWRpdG9yIiwiRWRpdG9yQm9vbGVhbkVudW1SYWRpbyIsIl9FZGl0b3JCb29sZWFuIiwiZ2V0UmFkaW9zQ29udHJvbCIsInZhbHVlcyIsInRpdGxlcyIsImxhYmVsIiwicmFkaW9zIiwicmFkaW8iLCJyYWRpb1ZhbHVlIiwic2V0VmFsdWUiLCJjaGVja2VkIiwiRWRpdG9yQm9vbGVhbiIsIkVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IiwiZ2V0U2VsZWN0Q29udHJvbCIsImlucHV0IiwiZ2V0Q2hlY2tib3hDb250cm9sIiwiQm9vbGVhbiIsIl9FdmVudEVtaXR0ZXIiLCJyZWFkT25seSIsImNvZXJjZVZhbHVlIiwic2V0Q29udGFpbmVyQXR0cmlidXRlcyIsImFsd2F5c1Nob3dFcnJvcnMiLCJvcHRpb25zIiwic2hvd0Vycm9ycyIsImVycm9ycyIsImdldEVycm9ycyIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwib24iLCJpY29ucyIsImljb25MaWIiLCJnbHlwaGljb25zIiwiYm9vdHN0cmFwSWNvbnMiLCJmb250QXdlc29tZTMiLCJmb250QXdlc29tZTQiLCJmb250QXdlc29tZTUiLCJmb250QXdlc29tZTYiLCJUaGVtZUJvb3RzdHJhcDMiLCJUaGVtZUJvb3RzdHJhcDQiLCJUaGVtZUJvb3RzdHJhcDUiLCJUaGVtZSIsImdldFNjaGVtYVR5cGUiLCJzY2hlbWFFbnVtIiwiZ2V0U2NoZW1hRW51bSIsImluY2x1ZGVzIiwibmV2ZXJTaG93RXJyb3JzIiwibWVzc2FnZXMiLCJlcnJvciIsImludmFsaWRGZWVkYmFjayIsIl90aGlzMyIsImludGVyYWN0aXZlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJfdGhpczQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiRWRpdG9yTXVsdGlwbGUiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwic3dpdGNoSW5zdGFuY2UiLCJhY3RpdmVJbnN0YW5jZSIsIkVkaXRvck51bGwiLCJnZXROdWxsQ29udHJvbCIsImdldFNjaGVtYUZvcm1hdCIsIkVkaXRvck51bWJlckVudW1SYWRpbyIsIl9FZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IiwiZ2V0SW5wdXRDb250cm9sIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJFZGl0b3JPYmplY3RHcmlkIiwiX0VkaXRvck9iamVjdCIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIkVkaXRvck9iamVjdCIsIkVkaXRvck9iamVjdE5hdiIsImNvbnRyb2xDb2xzIiwiY29udHJvbFN0YWNrZWQiLCJjb250cm9sVmFyaWFudCIsImFkZFByb3BlcnR5IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyIsImdldE9iamVjdENvbnRyb2wiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJlcXVhbCIsImFkZFByb3BlcnR5QnRuIiwiYWRkUHJvcGVydHlDb250cm9sIiwicHJvcGVydHlOYW1lRW1wdHkiLCJwcm9wZXJ0eUV4aXN0Iiwic2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGVDaGlsZCIsImFjdGl2YXRlIiwiaXNPYmplY3QiLCJyZWZyZXNoUHJvcGVydGllc1Nsb3QiLCJzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImlzUmVxdWlyZWQiLCJpc0RlcGVuZGVudFJlcXVpcmVkIiwibm90UmVxdWlyZWQiLCJjaGVja2JveENvbnRyb2wiLCJjaGVja2JveCIsImhhc093biIsImRlYWN0aXZhdGUiLCJFZGl0b3JTdHJpbmdFbnVtUmFkaW8iLCJfRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nIiwiRWRpdG9yU3RyaW5nRW51bVNlbGVjdCIsIkVkaXRvclN0cmluZ1RleHRhcmVhIiwiZ2V0VGV4dGFyZWFDb250cm9sIiwiU3RyaW5nIiwiaW5wdXRUeXBlcyIsInNjaGVtYUZvcm1hdCIsImxpc3RlbmVycyIsIm5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJlbWl0IiwiZmlsdGVyIiwibGlzdGVuZXIiLCJnZXRTY2hlbWFYIiwia2V5d29yZCIsImdldFNjaGVtYVNjaGVtYSIsImlzU3RyaW5nIiwiJHNjaGVtYSIsInVuZGVmaW5lZCIsImlzQm9vbGVhbiIsImdldFNjaGVtYUFsbE9mIiwiYWxsT2YiLCJnZXRTY2hlbWFBbnlPZiIsImFueU9mIiwiZ2V0U2NoZW1hQ29uc3QiLCJnZXRTY2hlbWFDb250YWlucyIsImNvbnRhaW5zIiwiZ2V0U2NoZW1hRGVmYXVsdCIsImdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIiwiZGVwZW5kZW50UmVxdWlyZWQiLCJnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIiwiZGVwZW5kZW50U2NoZW1hcyIsImdldFNjaGVtYUVsc2UiLCJnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiZm9ybWF0IiwiZ2V0U2NoZW1hSWYiLCJnZXRTY2hlbWFJdGVtcyIsIml0ZW1zIiwiZ2V0U2NoZW1hTWF4aW11bSIsIm1heGltdW0iLCJnZXRTY2hlbWFNYXhDb250YWlucyIsImlzSW50ZWdlciIsIm1heENvbnRhaW5zIiwiZ2V0U2NoZW1hTWF4TGVuZ3RoIiwibWF4TGVuZ3RoIiwiZ2V0U2NoZW1hTWF4UHJvcGVydGllcyIsIm1heFByb3BlcnRpZXMiLCJnZXRTY2hlbWFNaW5pbXVtIiwibWluaW11bSIsImdldFNjaGVtYU1pbkNvbnRhaW5zIiwibWluQ29udGFpbnMiLCJnZXRTY2hlbWFNaW5MZW5ndGgiLCJtaW5MZW5ndGgiLCJnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIiwibWluUHJvcGVydGllcyIsImdldFNjaGVtYU11bHRpcGxlT2YiLCJtdWx0aXBsZU9mIiwiZ2V0U2NoZW1hTm90Iiwibm90Iiwib3B0aW9uIiwiZ2V0U2NoZW1hUGF0dGVybiIsInBhdHRlcm4iLCJnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyIsInBhdHRlcm5Qcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hUHJlZml4SXRlbXMiLCJwcmVmaXhJdGVtcyIsImdldFNjaGVtYVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hUmVhZE9ubHkiLCJnZXRTY2hlbWFSZXF1aXJlZCIsInJlcXVpcmVkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiU2V0IiwiZ2V0U2NoZW1hVGhlbiIsInRoZW4iLCJnZXRTY2hlbWFPbmVPZiIsIm9uZU9mIiwiZ2V0U2NoZW1hVW5pcXVlSXRlbXMiLCJ1bmlxdWVJdGVtcyIsImdldENpcmN1bGFyUmVwbGFjZXIiLCJhbmNlc3RvcnMiLCJfdHlwZW9mIiwiYXQiLCJjbG9uZSIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwicmVwbGFjZSIsInJlcGxhY2VBbGwiLCJzdHIiLCJmaW5kIiwiUmVnRXhwIiwib2JqIiwicHJvcCIsImhhc093blByb3BlcnR5Iiwic29ydE9iamVjdCIsInNvcnQiLCJyZWR1Y2UiLCJyZXN1bHQiLCJhIiwiYiIsImRpZmZlcmVudCIsImlzTnVsbCIsIm5vdFNldCIsIkFycmF5IiwiZ2V0VHlwZSIsIm1lcmdlRGVlcCIsInRhcmdldCIsIl9sZW4iLCJzb3VyY2VzIiwiX2tleSIsInNvdXJjZSIsInNoaWZ0IiwiYXNzaWduIiwiX2RlZmluZVByb3BlcnR5IiwiY29uY2F0IiwiZGVlcENvcHkiLCJjb3B5IiwiaSIsIm92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyIsIm9iajEiLCJvYmoyIiwiZ2V0VmFsdWVCeUpTT05QYXRoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInRlc3QiLCJwYXJzZUludCIsImVyciIsImUiLCJmIiwibWF0Y2giLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJyZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IiwiYXJyIiwidW5pcXVlT2JqZWN0cyIsInVuaXF1ZVZhbHVlcyIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJvYmpTdHJpbmciLCJoYXMiLCJhZGQiLCJpMThuIiwiZXJyb3JBZGRpdGlvbmFsUHJvcGVydGllcyIsImVycm9yQW55T2YiLCJlcnJvckNvbnN0IiwiZXJyb3JDb250YWlucyIsImVycm9yRGVwZW5kZW50UmVxdWlyZWQiLCJlcnJvckVudW0iLCJlcnJvckV4Y2x1c2l2ZU1heGltdW0iLCJlcnJvckV4Y2x1c2l2ZU1pbmltdW0iLCJlcnJvckZvcm1hdCIsImVycm9ySXRlbXMiLCJlcnJvck1heGltdW0iLCJlcnJvck1heEl0ZW1zIiwiZXJyb3JNYXhMZW5ndGgiLCJlcnJvck1heFByb3BlcnRpZXMiLCJlcnJvck1heENvbnRhaW5zIiwiZXJyb3JNaW5Db250YWlucyIsImVycm9yTWluaW11bSIsImVycm9yTWluSXRlbXMiLCJlcnJvck1pbkxlbmd0aCIsImVycm9yTWluUHJvcGVydGllcyIsImVycm9yTXVsdGlwbGVPZiIsImVycm9yTm90IiwiZXJyb3JPbmVPZiIsImVycm9yUGF0dGVybiIsImVycm9yUHJlZml4SXRlbXMiLCJlcnJvclJlcXVpcmVkIiwiZXJyb3JUeXBlIiwiZXJyb3JVbmlxdWVJdGVtcyIsIkluc3RhbmNlQXJyYXkiLCJfSW5zdGFuY2UiLCJzZXRVSSIsInNjaGVtYVR5cGUiLCJwcmVwYXJlIiwicmVmcmVzaENoaWxkcmVuIiwiY3JlYXRlSXRlbUluc3RhbmNlIiwiaXRlbXNDb3VudCIsInNjaGVtYUl0ZW1zIiwic2NoZW1hUHJlZml4SXRlbXMiLCJoYXNQcmVmaXhJdGVtc1NjaGVtYSIsImNyZWF0ZUluc3RhbmNlIiwicGFyZW50IiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsIm9uQ2hpbGRDaGFuZ2UiLCJpdGVtVmFsdWUiLCJJbnN0YW5jZSIsIkluc3RhbmNlQm9vbGVhbiIsImNvbmZpZyIsInJvb3ROYW1lIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsInVucmVnaXN0ZXIiLCJzY2hlbWFEZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJ2YWxpZGF0b3IiLCJJbnN0YW5jZU11bHRpcGxlIiwiaW5zdGFuY2VzIiwiYWN0aXZlSW5zdGFuY2VDaGFuZ2VkIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJzY2hlbWFDb3B5IiwiX29iamVjdFNwcmVhZCIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImZpdHRlc3RJbmRleCIsImdldElmSW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJyZWFzc2lnblZhbHVlcyIsImxhc3RJbnN0YW5jZVZhbHVlIiwiY3VycmVudEluc3RhbmNlVmFsdWUiLCJtZXJnZWRWYWx1ZSIsImlmRWRpdG9yIiwiSmVkaSIsImlmRXJyb3JzIiwiY2hhbXBpb25FcnJvcnMiLCJpbnN0YW5jZUVycm9ycyIsIkluc3RhbmNlTnVsbCIsIkluc3RhbmNlTnVtYmVyIiwidHlwZUlzTnVtZXJpYyIsIkluc3RhbmNlT2JqZWN0Iiwic2NoZW1hQ29udHJvbCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZGVhY3RpdmF0ZU5vblJlcXVpcmVkIiwiaXNOb3RSZXF1aXJlZCIsImRlbGV0ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJvbGRWYWx1ZSIsIkluc3RhbmNlU3RyaW5nIiwiWE1MSHR0cFJlcXVlc3QiLCJyb290IiwicmVmUGFyc2VyIiwiVmFsaWRhdG9yIiwiUmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImNsYXNzTGlzdCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsImV4cGFuZCIsInNjaGVtYU9uZU9mIiwic2NoZW1hQW55T2YiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwicmVmRGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiY29uc29sZSIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIl9yZWYzIiwiX3JlZjQiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfcmVmOCIsInByZXZWYWx1ZSIsIl9UaGVtZSIsInVzZVRvZ2dsZUV2ZW50cyIsImdldExlZ2VuZCIsImxlZ2VuZCIsImhpZGVFbGVtZW50IiwiZ2V0Q2FyZCIsImNhcmQiLCJnZXRDYXJkSGVhZGVyIiwiaGVhZGVyIiwiZ2V0Q2FyZEJvZHkiLCJodG1sIiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldEJ1dHRvbiIsImdldFByb3BlcnRpZXNTbG90IiwiZ2V0QnRuR3JvdXAiLCJnZXREZXNjcmlwdGlvbiIsImZpZWxkc2V0IiwibGFiZWxzIiwibGFiZWxUZXh0cyIsInJhZGlvQ29udHJvbHMiLCJyYWRpb0NvbnRyb2wiLCJmb3JtR3JvdXAiLCJsYWJlbFRleHQiLCJnZXRTd2l0Y2hlciIsInJlbW92ZSIsInhzIiwibWQiLCJvZmZzZXRNZCIsImxpbmsiLCJzaG93RWxlbWVudCIsImdldENvbHVtbkNsYXNzIiwic2l6ZSIsImdldENvbnRyb2xTbG90IiwiY29udHJvbFNsb3QiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImdldEljb24iLCJpY29uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWNvbkNsYXNzZXMiLCJjbGFzc05hbWUiLCJnZXRFZGl0b3JDb250YWluZXIiLCJnZXRGaWVsZHNldCIsInRleHRDb250ZW50IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0TWVzc2FnZXNTbG90Iiwic3R5bGUiLCJkaXNwbGF5IiwidG9nZ2xlIiwicHJvcGVydGllc0NvbnRhaW5lciIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiYnV0dG9uIiwidGV4dCIsImdldEFycmF5QnRuQWRkIiwiZGVsZXRlSXRlbUJ0biIsIm1vdmVVcEl0ZW1CdG4iLCJtb3ZlRG93bkl0ZW1CdG4iLCJhY3Rpb25zIiwiYm9keSIsInByb3BlcnRpZXNUb2dnbGUiLCJidG5Hcm91cCIsImRlc2NyaXB0aW9uSWQiLCJzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsInJlZ2V4cCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsInZhbGlkIiwiYW55T2ZFZGl0b3IiLCJhbnlPZkVycm9ycyIsIl9jb25zdCIsInNjaGVtYUNvbnN0IiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJpbnZhbGlkIiwiY291bnRlciIsImNvbnRhaW5zRWRpdG9yIiwiY29udGFpbnNFcnJvcnMiLCJjb250YWluc0ludmFsaWQiLCJtaW5Db250YWluc0ludmFsaWQiLCJtYXhDb250YWluc0ludmFsaWQiLCJqb2luIiwiZGVwZW5kZW50U2NoZW1hIiwidG1wRWRpdG9yIiwidG1wRXJyb3JzIiwiX2VudW0iLCJzb21lIiwiX2lmIiwic2NoZW1hSWYiLCJzY2hlbWFUaGVuIiwic2NoZW1hRWxzZSIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwibm90RWRpdG9yIiwibm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsImF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3JFcnJvcnMiLCJpdGVtU2NoZW1hIiwidHlwZXMiLCJpbnRlZ2VyIiwiYm9vbGVhbiIsImFycmF5Iiwib2JqZWN0IiwiX251bGwiLCJ2YWx1ZVR5cGUiLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiX2xvb3AiLCJpdGVtU3RyaW5naWZpZWQiLCJfcmV0IiwiZHJhZnQiLCJkcmFmdDIwMjAxMiIsImpzb25TY2hlbWFEcmFmdHMiLCJkcmFmdDA0IiwiZHJhZnQwNiIsImRyYWZ0MDciLCJkcmFmdDIwMTkwOSIsInNjaGVtYUVycm9ycyIsInNjaGVtYU9wdGlvbnNNZXNzYWdlcyIsImNvbnN0cmFpbiIsInZhbGlkYXRvckVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLGlIOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBLCtHOzs7Ozs7Ozs7OztBQ0hBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrSDs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7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SSxDQUFDbWUsS0FBSyxDQUFDLENBQUM3bEIsT0FBTyxDQUFDLFVBQUNzbUIsU0FBUyxFQUFLO1FBQzdDLElBQUlwYiw2REFBTSxDQUFDdU8sV0FBVyxFQUFFNk0sU0FBUyxDQUFDLEVBQUU7VUFDbEMsSUFBTXpOLFNBQVMsR0FBRzlhLEtBQUksQ0FBQzhuQixLQUFLLENBQUNTLFNBQVMsQ0FBQztVQUN2QyxJQUFNQyxlQUFlLEdBQUcxTixTQUFTLENBQUM5YSxLQUFJLEVBQUVSLEtBQUssRUFBRXNCLE1BQU0sRUFBRXZCLEdBQUcsRUFBRXdFLElBQUksQ0FBQztVQUVqRSxJQUFJeWtCLGVBQWUsRUFBRTtZQUNuQkgsWUFBWSxNQUFBcFQsTUFBQSxDQUFBL0MsK0VBQUEsQ0FBT21XLFlBQVksR0FBQW5XLCtFQUFBLENBQUtzVyxlQUFlLEVBQUM7VUFDdEQ7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUlILFlBQVksQ0FBQ2hvQixNQUFNLEdBQUcsQ0FBQyxJQUFJaW9CLHFCQUFxQixFQUFFO1FBQ3BERCxZQUFZLEdBQUcsQ0FDYjtVQUNFdmYsUUFBUSxFQUFFd2YscUJBQXFCO1VBQy9CdmtCLElBQUksRUFBRUE7UUFDUixDQUFDLENBQ0Y7TUFDSDtNQUVBLE9BQU9za0IsWUFBWTtJQUNyQjtFQUFDO0VBQUEsT0FBQXZLLFNBQUE7QUFBQTtBQUdZQSx3RUFBUyxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gbnVsbCA9PSBhcnIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IF9pKSB7XG4gICAgdmFyIF9zLFxuICAgICAgX2UsXG4gICAgICBfeCxcbiAgICAgIF9yLFxuICAgICAgX2FyciA9IFtdLFxuICAgICAgX24gPSAhMCxcbiAgICAgIF9kID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChfeCA9IChfaSA9IF9pLmNhbGwoYXJyKSkubmV4dCwgMCA9PT0gaSkge1xuICAgICAgICBpZiAoT2JqZWN0KF9pKSAhPT0gX2kpIHJldHVybjtcbiAgICAgICAgX24gPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShfbiA9IChfcyA9IF94LmNhbGwoX2kpKS5kb25lKSAmJiAoX2Fyci5wdXNoKF9zLnZhbHVlKSwgX2Fyci5sZW5ndGggIT09IGkpOyBfbiA9ICEwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gITAsIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIG51bGwgIT0gX2lbXCJyZXR1cm5cIl0gJiYgKF9yID0gX2lbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KF9yKSAhPT0gX3IpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FycjtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7IGNsYW1wLCBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXlOYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JBcnJheVxuICovXG5jbGFzcyBFZGl0b3JBcnJheU5hdiBleHRlbmRzIEVkaXRvckFycmF5IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoXG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IG5hdkNvbHMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZDb2xzJylcbiAgICBjb25zdCBuYXZTdGFja2VkID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2U3RhY2tlZCcpXG4gICAgY29uc3QgbmF2VHlwZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdlR5cGUnKVxuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSBpc1NldChuYXZDb2xzKSA/IG5hdkNvbHMgOiAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBpc1NldChuYXZTdGFja2VkKSA/IG5hdlN0YWNrZWQgOiBmYWxzZSxcbiAgICAgIHR5cGU6IGlzU2V0KG5hdlR5cGUpID8gbmF2VHlwZSA6ICdwaWxzJ1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgbGV0IGNoaWxkVGl0bGVcbiAgICAgIGNvbnN0IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2l0ZW1UZW1wbGF0ZScpXG5cbiAgICAgIGlmIChzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGVcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpMDogaW5kZXgsXG4gICAgICAgICAgaTE6IChpbmRleCArIDEpLFxuICAgICAgICAgIHZhbHVlOiBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRUaXRsZSA9IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgICBjaGlsZFRpdGxlID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgKyAnICcgKyAoaW5kZXggKyAxKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGNsYW1wKChpbmRleCAtIDEpLCAwLCAodGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggLSAxKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXggLSAxXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0b0luZGV4XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXggKyAxXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0b0luZGV4XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuXG4gICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgIHRpdGxlOiBjaGlsZFRpdGxlLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICB9KVxuXG4gICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIG1vdmVVcEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG5cbiAgICAgIGlmICgodGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggLSAxKSA9PT0gaW5kZXgpIHtcbiAgICAgICAgbW92ZURvd25CdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlOYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFNYXhJdGVtcyxcbiAgZ2V0U2NoZW1hTWluSXRlbXMsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JBcnJheSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG5cbiAgICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQobWF4SXRlbXMpICYmIG1heEl0ZW1zID09PSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb250cm9sLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZXQobWluSXRlbXMpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIDw9IG1pbkl0ZW1zKSB7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvckJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbiBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdseXBoaWNvbnMsIGJvb3RzdHJhcEljb25zLCBmb250QXdlc29tZTMsIGZvbnRBd2Vzb21lNCwgZm9udEF3ZXNvbWU1LCBmb250QXdlc29tZTYgfSBmcm9tICcuLi90aGVtZXMvaWNvbnMvaWNvbnMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vdGhlbWVzL3RoZW1lJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEluc3RhbmNlIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhpcyBlZGl0b3IuXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBFZGl0b3IgdXNlciBpbnRlcmZhY2UuXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGludGVyZmFjZSBodG1sIGZvciB0aGlzIGVkaXRvclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udHJvbCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVkIHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBvbmx5IHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVhZE9ubHkgPSB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKVxuXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLmNvZXJjZVZhbHVlKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGNvbnN0IGFsd2F5c1Nob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnYWx3YXlzJyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdzaG93RXJyb3JzJykgPT09ICdhbHdheXMnXG5cbiAgICBpZiAoYWx3YXlzU2hvd0Vycm9ycykge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgbGV0IGljb25zID0gbnVsbFxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpIHtcbiAgICAgICAgY2FzZSAnZ2x5cGhpY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBnbHlwaGljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYm9vdHN0cmFwLWljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGJvb3RzdHJhcEljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWUzJzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lM1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNCc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTUnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU1XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU2JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZShpY29ucylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb250YWluZXIgYXR0cmlidXRlcyBsaWtlIGRhdGEtcGF0aCBhbmQgZGF0YS10eXBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCBnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJ5IG1ha2luZyBhc3N1bXB0aW9ucyBiYXNlZCBvbiBjb25zdHJhaW5zXG4gICAqL1xuICBjb2VyY2VWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRW51bSkgJiYgIXNjaGVtYUVudW0uaW5jbHVkZXModGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSAmJiBpc1NldChzY2hlbWFFbnVtWzBdKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShzY2hlbWFFbnVtWzBdLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB1aSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgY29uc3QgbmV2ZXJTaG93RXJyb3JzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuc2hvd0Vycm9ycyA9PT0gJ25ldmVyJyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdzaG93RXJyb3JzJykgPT09ICduZXZlcidcblxuICAgIGlmIChuZXZlclNob3dFcnJvcnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNvbnRyb2wgVUkgd2hlbiBpdHMgc3RhdGUgY2hhbmdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgfVxuXG4gIHJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzICgpIHtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gdGhpcy5jb250cm9sLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcblxuICAgIGludGVyYWN0aXZlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgaW5wdXQgdmFsdWUgaWYgbmVjZXNzYXJ5IGJlZm9yZSB2YWx1ZSBzZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udGFpbmVyICYmIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jb250YWluZXIpXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTXVsdGlwbGUgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRNdWx0aXBsZUNvbnRyb2woe1xuICAgICAgdGl0bGU6ICdPcHRpb25zJyxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgc3dpdGNoZXJPcHRpb25WYWx1ZXM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICBzd2l0Y2hlck9wdGlvbnNMYWJlbHM6IHRoaXMuaW5zdGFuY2Uuc3dpdGNoZXJPcHRpb25zTGFiZWxzXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zd2l0Y2hJbnN0YW5jZShpbmRleClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZCh0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuaW5kZXhcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmRpc2FibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFjdGl2ZUluc3RhbmNlLnVpLmVuYWJsZSgpXG4gICAgfVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTXVsdGlwbGVcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdWxsIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bGwgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXROdWxsQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bGxcbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck51bWJlckVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZShyYWRpby52YWx1ZSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChOdW1iZXIocmFkaW8udmFsdWUpID09PSBOdW1iZXIodGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck51bWJlclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzTnVtYmVyLCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYUZvcm1hdCxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZSwgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0R3JpZCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3RHcmlkIGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ2NvbHVtbnMnKSB8fCAxMlxuICAgICAgICBjb25zdCBvZmZzZXQgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnb2Zmc2V0JykgfHwgMFxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29sdW1ucywgb2Zmc2V0KVxuXG4gICAgICAgIGlmIChnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnbmV3Um93JykgPT09IHRydWUpIHtcbiAgICAgICAgICByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgIH1cblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICBjb2wuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RHcmlkXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3ROYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0TmF2IGV4dGVuZHMgRWRpdG9yT2JqZWN0IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xDb2xzID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC1jb2xzJ11cbiAgICBjb25zdCBjb250cm9sU3RhY2tlZCA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtc3RhY2tlZCddXG4gICAgY29uc3QgY29udHJvbFZhcmlhbnQgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLXZhcmlhbnQnXVxuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSBpc1NldChjb250cm9sQ29scykgPyBjb250cm9sQ29scyA6IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGlzU2V0KGNvbnRyb2xTdGFja2VkKSA/IGNvbnRyb2xTdGFja2VkIDogZmFsc2UsXG4gICAgICB0eXBlOiBpc1NldChjb250cm9sVmFyaWFudCkgPyBjb250cm9sVmFyaWFudCA6ICdwaWxzJ1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcblxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgICAgdGl0bGU6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcblxuICAgICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHtcbiAgZXF1YWwsXG4gIGhhc093bixcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBwYXRoVG9BdHRyaWJ1dGVcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JPYmplY3QgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgbGV0IGFkZFByb3BlcnR5ID0gdHJ1ZVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgYWRkUHJvcGVydHkgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0T2JqZWN0Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZXF1YWwodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSB8fCBlcXVhbChnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKSwgdHJ1ZSksXG4gICAgICBhZGRQcm9wZXJ0eTogYWRkUHJvcGVydHlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7fVxuXG4gICAgICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgICBpZiAoaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIWlzUmVxdWlyZWQgJiYgIWlzRGVwZW5kZW50UmVxdWlyZWRcblxuICAgICAgICBpZiAobm90UmVxdWlyZWQpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKSArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nVGV4dGFyZWEgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nVGV4dGFyZWFcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyhzY2hlbWFGb3JtYXQpID8gc2NoZW1hRm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBzY2hlbWFGb3JtYXQgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdjb2xvcicgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW50IHRoaXMgZXZlbnQgaXMgZW1pdHRlZFxuICAgKi9cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGEgbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBiZSBlbWl0dGVkXG4gICAqL1xuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbGxPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbGxPZikgPyBzY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFueU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFueU9mKSA/IHNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29uc3QgKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmNvbnN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb250YWlucyAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmNvbnRhaW5zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmNvbnRhaW5zKSkgPyBzY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlZmF1bHQgKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmRlZmF1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlc2NyaXB0aW9uIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5kZXNjcmlwdGlvbikgPyBzY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVsc2UgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmVsc2UpKSA/IHNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbnVtIChzY2hlbWEpIHtcbiAgaWYgKGlzQXJyYXkoc2NoZW1hLmVudW0pICYmIHNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLmVudW1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUZvcm1hdCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZm9ybWF0KSA/IHNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUlmIChzY2hlbWEpIHtcbiAgaWYgKGlzT2JqZWN0KHNjaGVtYS5pZikpIHtcbiAgICByZXR1cm4gc2NoZW1hLmlmXG4gIH1cblxuICBpZiAoaXNCb29sZWFuKHNjaGVtYS5pZikpIHtcbiAgICByZXR1cm4gc2NoZW1hLmlmXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuaXRlbXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuaXRlbXMpID8gc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5tYXhpbXVtKSA/IHNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhDb250YWlucyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heENvbnRhaW5zKSAmJiBzY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4Q29udGFpbnNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heEl0ZW1zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4SXRlbXMpICYmIHNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhJdGVtc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4TGVuZ3RoIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4TGVuZ3RoKSAmJiBzY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5taW5pbXVtKSA/IHNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Db250YWlucyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiBzY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluQ29udGFpbnNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkl0ZW1zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluSXRlbXMpICYmIHNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5JdGVtc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluTGVuZ3RoIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluTGVuZ3RoKSAmJiBzY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU11bHRpcGxlT2YgKHNjaGVtYSkge1xuICBpZiAoaXNOdW1iZXIoc2NoZW1hLm11bHRpcGxlT2YpICYmIHNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm11bHRpcGxlT2ZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU5vdCAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHNjaGVtYS5ub3QpKSA/IHNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9wdGlvbiAoc2NoZW1hLCBvcHRpb24pIHtcbiAgcmV0dXJuIChzY2hlbWEub3B0aW9ucyAmJiBzY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5pcXVlSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmlxdWVJdGVtcykgPyBzY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbn1cbiIsIi8qKlxuICogVXRpbHMuXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmN1bGFyUmVwbGFjZXIgKCkge1xuICBjb25zdCBhbmNlc3RvcnMgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLy8gYHRoaXNgIGlzIHRoZSBvYmplY3QgdGhhdCB2YWx1ZSBpcyBjb250YWluZWQgaW4sXG4gICAgLy8gaS5lLiwgaXRzIGRpcmVjdCBwYXJlbnQuXG4gICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggPiAwICYmIGFuY2VzdG9ycy5hdCgtMSkgIT09IHRoaXMpIHtcbiAgICAgIGFuY2VzdG9ycy5wb3AoKVxuICAgIH1cbiAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJ1xuICAgIH1cbiAgICBhbmNlc3RvcnMucHVzaCh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcsIGdldENpcmN1bGFyUmVwbGFjZXIoKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weSAob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgY29uc3QgY29weSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcHlbaV0gPSBkZWVwQ29weShvYmpbaV0pXG4gICAgfVxuICAgIHJldHVybiBjb3B5XG4gIH1cblxuICBjb25zdCBjb3B5ID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29weVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzIGJ1dCBvbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluIGJvdGhzIG9iamVjdHNcbiAqIGlmIHRoZXkgYXJlIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9iajIgLSBPYmplY3RzIHdobydzIHByb3BlcnRpZXMgYXJlIHRoZSBvdmVycmlkZXNcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG92ZXJ3cml0dGVuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIChvYmoxLCBvYmoyKSB7XG4gIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqMSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmoxW2tleV0gPT09IHR5cGVvZiBvYmoyW2tleV0pIHtcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmoxXG59XG5cbi8qKlxuICogR2V0IHNvbWUgdmFsdWUgYnkgdHJhdmVyc2luZyB0aGUgZGF0YSB1c2luZyBKU09OIHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEpTT04gcGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlKU09OUGF0aCAoZGF0YSwgcGF0aCkge1xuICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdCgnLicpIC8vIFNwbGl0IHRoZSBwYXRoIGludG8gaW5kaXZpZHVhbCBrZXlzXG5cbiAgbGV0IHZhbHVlID0gZGF0YVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIC9eXFxkKyQvLnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChrZXkpXG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2luZGV4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJbmRleCBpcyBvdXQgb2YgYm91bmRzLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEtleSBkb2Vzbid0IGV4aXN0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBieSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gV2hlcmUgdGVtcGxhdGUgZGF0YSBsaXZlc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZSAodGVtcGxhdGUsIGRhdGEpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAobWF0Y2gpID0+IHtcbiAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICBjb25zdCBwYXRoID0gbWF0Y2guc3BsaXQoL3t7fH19LylbMV1cbiAgICByZXR1cm4gZ2V0VmFsdWVCeUpTT05QYXRoKGRhdGEsIHBhdGgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IChhcnIpIHtcbiAgY29uc3QgdW5pcXVlT2JqZWN0cyA9IFtdXG4gIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKVxuXG4gIGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIGNvbnN0IG9ialN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICBpZiAoIXVuaXF1ZVZhbHVlcy5oYXMob2JqU3RyaW5nKSkge1xuICAgICAgdW5pcXVlVmFsdWVzLmFkZChvYmpTdHJpbmcpXG4gICAgICB1bmlxdWVPYmplY3RzLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlxdWVPYmplY3RzXG59XG4iLCIvKipcbiAqIFNpbXBsZSB0cmFuc2xhdGlvbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGkxOG5cbiAqL1xuXG4vKipcbiAqIExvY2FsZSBtZXNzYWdlc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGkxOG4gPSB7XG4gIGVycm9yQWRkaXRpb25hbFByb3BlcnRpZXM6ICdoYXMgYWRkaXRpb25hbCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCIgYnV0IG5vIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgYWxsb3dlZCcsXG4gIGVycm9yQW55T2Y6ICdtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgZXJyb3JDb25zdDogJ211c3QgaGF2ZSB2YWx1ZSBvZjoge3sgY29uc3QgfX0nLFxuICBlcnJvckNvbnRhaW5zOiAnbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvckRlcGVuZGVudFJlcXVpcmVkOiAnbXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyBkZXBlbmRlbnRSZXF1aXJlZCB9fScsXG4gIGVycm9yRW51bTogJ211c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczoge3sgZW51bSB9fScsXG4gIGVycm9yRXhjbHVzaXZlTWF4aW11bTogJ211c3QgYmUgbGVzcyB0aGFuIHt7IGV4Y2x1c2l2ZU1heGltdW0gfX0nLFxuICBlcnJvckV4Y2x1c2l2ZU1pbmltdW06ICdtdXN0IGJlIGdyZWF0ZXIgdGhhbiB7eyBleGNsdXNpdmVNaW5pbXVtIH19JyxcbiAgZXJyb3JGb3JtYXQ6ICdtdXN0IGJlIGEgdmFsaWQge3sgZm9ybWF0IH19JyxcbiAgZXJyb3JJdGVtczogJ211c3QgaGF2ZSBpdGVtcyB0aGF0IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yTWF4aW11bTogJ211c3QgYmUgYXQgbW9zdCB7eyBtYXhpbXVtIH19JyxcbiAgZXJyb3JNYXhJdGVtczogJ211c3QgaGF2ZSBhdCBtb3N0IHt7IG1heEl0ZW1zIH19IGl0ZW1zJyxcbiAgZXJyb3JNYXhMZW5ndGg6ICdtdXN0IGJlIGF0IG1vc3Qge3sgbWF4TGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZycsXG4gIGVycm9yTWF4UHJvcGVydGllczogJ211c3QgaGF2ZSBhdCBtb3N0IHt7IG1heFByb3BlcnRpZXMgfX0gcHJvcGVydGllcycsXG4gIGVycm9yTWF4Q29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbW9zdCB7eyBtYXhDb250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fScsXG4gIGVycm9yTWluQ29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbGVhc3Qge3sgbWluQ29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0nLFxuICBlcnJvck1pbmltdW06ICdtdXN0IGJlIGF0IGxlYXN0IHt7IG1pbmltdW0gfX0nLFxuICBlcnJvck1pbkl0ZW1zOiAnbXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pbkl0ZW1zIH19IGl0ZW1zJyxcbiAgZXJyb3JNaW5MZW5ndGg6ICdtdXN0IGJlIGF0IGxlYXN0IHt7IG1pbkxlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcnLFxuICBlcnJvck1pblByb3BlcnRpZXM6ICdtdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluUHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzJyxcbiAgZXJyb3JNdWx0aXBsZU9mOiAnbXVzdCBiZSBtdWx0aXBsZSBvZiB7eyBtdWx0aXBsZU9mIH19JyxcbiAgZXJyb3JOb3Q6ICdtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvck9uZU9mOiAnbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3Qge3sgY291bnRlciB9fSBvZiB0aGUgc2NoZW1hcycsXG4gIGVycm9yUGF0dGVybjogJ211c3QgbWF0Y2ggdGhlIHBhdHRlcm46IFwie3sgcGF0dGVybiB9fVwiJyxcbiAgZXJyb3JQcmVmaXhJdGVtczogJ0l0ZW0ge3sgaW5kZXggfX0gZmFpbHMgdmFsaWRhdGlvbicsXG4gIGVycm9yUmVxdWlyZWQ6ICdtdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IHJlcXVpcmVkIH19JyxcbiAgZXJyb3JUeXBlOiAnbXVzdCBiZSBvZiB0eXBlIHt7IHR5cGUgfX0nLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcydcbn1cbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEVkaXRvckFycmF5TmF2IGZyb20gJy4uL2VkaXRvcnMvYXJyYXktbmF2J1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheU5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IHNjaGVtYVxuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGNvbnN0IHNjaGVtYUl0ZW1zID0gZ2V0U2NoZW1hSXRlbXModGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBzY2hlbWEgPSBpc1NldChzY2hlbWFJdGVtcykgPyBzY2hlbWFJdGVtcyA6IHt9XG5cbiAgICBjb25zdCBoYXNQcmVmaXhJdGVtc1NjaGVtYSA9IGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zKSAmJiBpc1NldChzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoQ2hpbGRyZW4gKCkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUFycmF5XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlZmF1bHQsIGdldFNjaGVtYVJlYWRPbmx5LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEpTT04gaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBKZWRpIGluc3RhbmNlIHRvIHdoaWNoIHRoaXMgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKiBAdHlwZSB7SmVkaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG5cbiAgICAvKipcbiAgICAgKiBBIEpTT04gc2NoZW1hLlxuICAgICAqIEB0eXBlIHtib29sZWFufG9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuXG4gICAgLyoqXG4gICAgICogVGhlIGpzb24gdmFsdWUgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSBpc1NldChjb25maWcudmFsdWUpID8gY29uZmlnLnZhbHVlIDogdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIHN0YXRlIG9mIHRoaXMgaW5zdGFuY2UuIElmIGZhbHNlIHRoZSBlZGl0b3IgaXMgbm90IHBhcnRpY2lwYXRpbmdcbiAgICAgKiB0byB0aGUgdmFsdWUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjaGVtYSBwYXRoIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuXG4gICAgLyoqXG4gICAgICogVGhlIFBhcmVudCBpbnN0YW5jZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcblxuICAgIC8qKlxuICAgICAqIENoaWxkIGluc3RhbmNlcyBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZVtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWRpdG9yIGNvbnRyb2xsaW5nIHRoaXMgSW5zdGFuY2UgaWYgYW55XG4gICAgICogQHR5cGUge0VkaXRvcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy51aSA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgaWYgKG5vdFNldCh0aGlzLnZhbHVlKSkge1xuICAgICAgbGV0IHZhbHVlXG4gICAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYURlZmF1bHQgPSBnZXRTY2hlbWFEZWZhdWx0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYURlZmF1bHQpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHNjaGVtYURlZmF1bHQsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG5cbiAgICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheShlcnJvcnMpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgaW5zdGFuY2UgaXMgcmVhZCBvbmx5XG4gICAqL1xuICBpc1JlYWRPbmx5ICgpIHtcbiAgICBsZXQgcmVhZE9ubHkgPSBmYWxzZVxuXG4gICAgaWYgKGdldFNjaGVtYVJlYWRPbmx5KHRoaXMuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIGdldFNjaGVtYVJlYWRPbmx5KHRoaXMucGFyZW50LnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZWFkT25seVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIG5vdFNldCxcbiAgY2xvbmUsXG4gIGlzT2JqZWN0LFxuICBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMsIG1lcmdlRGVlcCwgZGVlcENvcHlcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTXVsdGlwbGUgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU11bHRpcGxlIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgdGhpcy51aSA9IG5ldyBFZGl0b3JNdWx0aXBsZSh0aGlzKVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXVxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2UgPSBudWxsXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgdGhpcy5sYXN0SW5kZXggPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcbiAgICB0aGlzLnNjaGVtYXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMgPSBbXVxuICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW11cblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25TZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgfHwgaXNTZXQoZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpKSkge1xuICAgICAgY29uc3Qgc2NoZW1hc09mID0gaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSA/IGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSA6IGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3Qgc2NoZW1hQ29weSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ2FueU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvbmVPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb3B0aW9ucyddXG5cbiAgICAgIHNjaGVtYXNPZi5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHNjaGVtYSA9IHsgLi4uc2NoZW1hQ29weSwgLi4uc2NoZW1hIH1cbiAgICAgICAgbGV0IHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcblxuICAgICAgICBjb25zdCBzd2l0Y2hlclRpdGxlID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ3N3aXRjaGVyVGl0bGUnKVxuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKHNjaGVtYSlcblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hVGl0bGUpKSB7XG4gICAgICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzY2hlbWFUaXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2V0KHN3aXRjaGVyVGl0bGUpKSB7XG4gICAgICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWwgPSBzd2l0Y2hlclRpdGxlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzLnB1c2goc3dpdGNoZXJPcHRpb25zTGFiZWwpXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHNjaGVtYVR5cGUpKSB7XG4gICAgICBzY2hlbWFUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gbWVyZ2VEZWVwKHRoaXMuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAuLi5zY2hlbWFDbG9uZSxcbiAgICAgICAgICAuLi57IHR5cGU6IHR5cGUsIHRpdGxlOiB0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzY2hlbWFDbG9uZS50aXRsZSkpIHtcbiAgICAgICAgICBzY2hlbWEudGl0bGUgPSBzY2hlbWFDbG9uZS50aXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKVxuXG4gICAgICAgIHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYW55JyB8fCAhc2NoZW1hVHlwZSkge1xuICAgICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSlcblxuICAgICAgdGhpcy5zY2hlbWFzID0gW1xuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdvYmplY3QnIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnYXJyYXknIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnc3RyaW5nJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bWJlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdpbnRlZ2VyJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2Jvb2xlYW4nIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnbnVsbCcgfSB9XG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25zTGFiZWxzID0gW1xuICAgICAgICAnT2JqZWN0JywgJ0FycmF5JywgJ1N0cmluZycsICdOdW1iZXInLCAnSW50ZWdlcicsICdCb29sZWFuJywgJ051bGwnXG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5zY2hlbWFzLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgIHZhbHVlOiBjbG9uZSh0aGlzLnZhbHVlKVxuICAgICAgfSlcblxuICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWUpKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFZhbHVlKHRoaXMudmFsdWUsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS51bnJlZ2lzdGVyKClcblxuICAgICAgaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSlcblxuICAgICAgdGhpcy5yZWdpc3RlcigpXG4gICAgfSlcblxuICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICB0aGlzLnN3aXRjaEluc3RhbmNlKGZpdHRlc3RJbmRleCwgdGhpcy52YWx1ZSlcbiAgfVxuXG4gIHN3aXRjaEluc3RhbmNlIChpbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaW5kZXhdXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgfVxuXG4gIG9uU2V0VmFsdWUgKCkge1xuICAgIGlmIChkaWZmZXJlbnQodGhpcy5hY3RpdmVJbnN0YW5jZS5nZXRWYWx1ZSgpLCB0aGlzLnZhbHVlKSB8fCB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQgPSBmYWxzZVxuICAgICAgY29uc3QgZml0dGVzdEluZGV4ID0gaXNTZXQodGhpcy5pZikgPyB0aGlzLmdldElmSW5kZXgodGhpcy52YWx1ZSkgOiB0aGlzLmdldEZpdHRlc3RJbmRleCh0aGlzLnZhbHVlKVxuICAgICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVhc3NpZ25WYWx1ZXMgKCkge1xuICAgIGNvbnN0IGxhc3RJbnN0YW5jZVZhbHVlID0gdGhpcy5pbnN0YW5jZXNbdGhpcy5sYXN0SW5kZXhdLmdldFZhbHVlKClcbiAgICBjb25zdCBjdXJyZW50SW5zdGFuY2VWYWx1ZSA9IHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzT2JqZWN0KGxhc3RJbnN0YW5jZVZhbHVlKSAmJiBpc09iamVjdChjdXJyZW50SW5zdGFuY2VWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IG1lcmdlZFZhbHVlID0gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzKGN1cnJlbnRJbnN0YW5jZVZhbHVlLCBsYXN0SW5zdGFuY2VWYWx1ZSlcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2Uuc2V0VmFsdWUobWVyZ2VkVmFsdWUsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGdldElmSW5kZXggKHZhbHVlKSB7XG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogdGhpcy5pZiwgZGF0YTogdmFsdWUgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG4gICAgcmV0dXJuIGlmRXJyb3JzLmxlbmd0aCA9PT0gMCA/IDAgOiAxXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGluc3RhbmNlIHRoYXQgaGFzIGxlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICovXG4gIGdldEZpdHRlc3RJbmRleCAodmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGZpdHRlc3RJbmRleFxuICAgIGxldCBjaGFtcGlvbkVycm9yc1xuXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiB0aGlzLmluc3RhbmNlcykge1xuICAgICAgY29uc3QgaW5zdGFuY2VFcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh2YWx1ZSwgaW5zdGFuY2Uuc2NoZW1hLCBpbnN0YW5jZS5nZXRLZXkoKSwgaW5zdGFuY2UucGF0aClcblxuICAgICAgaWYgKG5vdFNldChmaXR0ZXN0SW5kZXgpIHx8IG5vdFNldChjaGFtcGlvbkVycm9ycykpIHtcbiAgICAgICAgZml0dGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgY2hhbXBpb25FcnJvcnMgPSBpbnN0YW5jZUVycm9yc1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2VFcnJvcnMubGVuZ3RoIDwgY2hhbXBpb25FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIHJldHVybiBmaXR0ZXN0SW5kZXhcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VNdWx0aXBsZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVsbCBmcm9tICcuLi9lZGl0b3JzL251bGwnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTnVsbCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVsbCh0aGlzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVsbFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXInXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bWJlciBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCB0eXBlSXNOdW1lcmljID0gc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInXG5cbiAgICBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHR5cGVJc051bWVyaWMpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTnVtYmVyKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTnVtYmVyXG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGRpZmZlcmVudCwgaXNTZXQsIG5vdFNldCwgaXNPYmplY3QsIGhhc093biwgY2xvbmUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEVkaXRvck9iamVjdEdyaWQgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QtZ3JpZCdcbmltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi4vZWRpdG9ycy9vYmplY3QnXG5pbXBvcnQgRWRpdG9yT2JqZWN0TmF2IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LW5hdidcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkLFxuICBnZXRTY2hlbWFGb3JtYXQsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hUmVxdWlyZWQsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZU9iamVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlT2JqZWN0IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUNvbnRyb2wgPSB0aGlzLnNjaGVtYVsneC1jb250cm9sJ11cblxuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hQ29udHJvbCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hUmVxdWlyZWQpICYmIHNjaGVtYVJlcXVpcmVkLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGlzU2V0KGRlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGlzTm90UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVxdWlyZWQocHJvcGVydHkpICYmICF0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQocHJvcGVydHkpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHt9LCBrZXksIHZhbHVlW2tleV0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgSW5zdGFuY2VNdWx0aXBsZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBJbnN0YW5jZUJvb2xlYW4gZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBJbnN0YW5jZU9iamVjdCBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgSW5zdGFuY2VBcnJheSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBJbnN0YW5jZVN0cmluZyBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgSW5zdGFuY2VOdW1iZXIgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IEluc3RhbmNlTnVsbCBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXIvcmVmLXBhcnNlcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSmVkaSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgSmVkaSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdHxib29sZWFufSBvcHRpb25zLnNjaGVtYSAtIEEgSlNPTiBzY2hlbWFcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmlzRWRpdG9yIC0gR2VuZXJhdGVzIFVJIGNvbnRyb2xzIHRvIGVkaXQgdGhlIEpTT04gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNvbnRhaW5lciAtIFdoZXJlIHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRoZW1lIC0gSG93IHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICBzaG93RXJyb3JzOiAnY2hhbmdlJyxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIFhNTEh0dHBSZXF1ZXN0OiB1bmRlZmluZWRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMucmVmUGFyc2VyID0gbmV3IFJlZlBhcnNlcih7IFhNTEh0dHBSZXF1ZXN0OiB0aGlzLm9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfSlcbiAgICB0aGlzLnJlZlBhcnNlci5kZXJlZmVyZW5jZSh0aGlzLm9wdGlvbnMuc2NoZW1hKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuZGF0YSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuZGF0YSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGpzb24gaW5zdGFuY2UgYW5kIGRlcmVmZXJlbmNlIHNjaGVtYSBvbiB0aGUgZmx5IGlmIG5lZWRlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZXhwYW5kKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUFueU9mKSB8fCBpc1NldChzY2hlbWFPbmVPZikgfHwgc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgaXNBcnJheShzY2hlbWFUeXBlKSB8fCBub3RTZXQoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VNdWx0aXBsZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlT2JqZWN0KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUFycmF5KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VTdHJpbmcoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdW1iZXIoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VCb29sZWFuKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci5nZXRFcnJvcnMoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0XG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbGxPZixcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFQcmVmaXhJdGVtc1xufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUmVmUGFyc2VyIGluc3RhbmNlLlxuICovXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCAxXG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLnJlZkRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3Mua2V5ID09PSAnJHJlZicpIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW2FyZ3MudmFsdWVdID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGRlZmluZSBleHRlcm5hbCByZWZzXG4gICAgT2JqZWN0LmtleXModGhpcy5yZWZEZWZpbml0aW9ucykuZm9yRWFjaCgocmVmKSA9PiB7XG4gICAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW3JlZl0gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkZWZpbmUgaW50ZXJuYWwgcmVmc1xuICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy5yZWZEZWZpbml0aW9uc1thcmdzLnBhdGhdKSkge1xuICAgICAgICAgIHRoaXMucmVmRGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBleHBhbmQgKHNjaGVtYSkge1xuICAgIGlmIChpc1NldChzY2hlbWFbJyRyZWYnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZkRlZmluaXRpb25zW3NjaGVtYVsnJHJlZiddXVxuICAgIH1cblxuICAgIGNvbnN0IGFueU9mID0gZ2V0U2NoZW1hQW55T2Yoc2NoZW1hKVxuICAgIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuICAgIGNvbnN0IGFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuICAgIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGFueU9mKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoYW55T2YpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEuYW55T2Zba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQob25lT2YpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhvbmVPZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5vbmVPZltrZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1NldChhbGxPZikpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGFsbE9mKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLmFsbE9mW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHByZWZpeEl0ZW1zKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJlZml4SXRlbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEucHJlZml4SXRlbXNba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICB0cmF2ZXJzZSAoYXJncykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJncy52YWx1ZVxuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5jYWxsYmFja1xuICAgIGNvbnN0IHBhdGggPSBpc1NldChhcmdzLnBhdGgpID8gYXJncy5wYXRoICsgJy8nICsgYXJncy5rZXkgOiAnIydcbiAgICBhcmdzLnBhdGggPSBwYXRoXG5cbiAgICBpZiAoaXNTZXQoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjayhhcmdzKVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYXJncy52YWx1ZSA9IHZhbHVlW2tleV1cbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICBhcmdzLmtleSA9IGtleVxuICAgICAgICBhcmdzLnBhdGggPSBwYXRoXG4gICAgICAgIGFyZ3MucHJldlZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy50cmF2ZXJzZShhcmdzKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmUGFyc2VyXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXAzIGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXAzIGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncGFuZWwtZGVmYXVsdCcpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGhlYWRlciA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICByZXR1cm4gaGVhZGVyXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHVsbC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4teHMnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWRlZmF1bHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wteHMtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXN0YWNrZWQnKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtc3RhY2tlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAndGFiJylcbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luJylcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gIH1cblxuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Itb25seScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXAzXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXA0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXA0IGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGItMCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZpZWxkc2V0LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbHVtbkNsYXNzIChzaXplLCBjb2xzKSB7XG4gICAgcmV0dXJuICdjb2wtJyArIHNpemUgKyAnLScgKyBjb2xzXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KHhzLCBtZCwgb2Zmc2V0TWQpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdvZmZzZXQtbWQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KClcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sdW1uJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2x1bW4nKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG4gICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuXG4gICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKVxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAndGFiJylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJcbiAgfVxuXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgc3VwZXIuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoZWxlbWVudCwgYWN0aXZlLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1wYW5lJylcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICBoaWRlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gIH1cblxuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Itb25seScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXA1IGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgdGhpcy5oaWRlRWxlbWVudChsZWdlbmQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGItMCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0LWVuZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1zZWxlY3QnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cblxuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUJvb3RzdHJhcDVcbiIsIi8qKlxuICogTGlzdHMgb2YgaHRtbCBjbGFzc2VzIHVzZWQgZm9yIGljb25zLlxuICogQG1vZHVsZSBpY29uc1xuICovXG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBnbHlwaGljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZ2x5cGhpY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2dseXBoaWNvbiBnbHlwaGljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2dseXBoaWNvbiBnbHlwaGljb24tdHJhc2gnLFxuICBhZGQ6ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBib290c3RyYXAtaWNvbnMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBib290c3RyYXBJY29ucyA9IHtcbiAgcHJvcGVydGllczogJ2JpIGJpLWNhcmQtbGlzdCcsXG4gIGRlbGV0ZTogJ2JpIGJpLXRyYXNoMicsXG4gIGFkZDogJ2JpIGJpLXBsdXMnLFxuICBtb3ZlVXA6ICdiaSBiaS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnYmkgYmktYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lMyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lMyA9IHtcbiAgcHJvcGVydGllczogJ2ljb24tbGlzdCcsXG4gIGRlbGV0ZTogJ2ljb24tdHJhc2gnLFxuICBhZGQ6ICdpY29uLXBsdXMnLFxuICBtb3ZlVXA6ICdpY29uLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdpY29uLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTQgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTQgPSB7XG4gIHByb3BlcnRpZXM6ICdmYSBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmEgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYSBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTUgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTUgPSB7XG4gIHByb3BlcnRpZXM6ICdmYXMgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhcyBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhcyBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmFzIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYXMgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNiBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNiA9IHtcbiAgcHJvcGVydGllczogJ2ZhLXNvbGlkIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYS1zb2xpZCBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhLXNvbGlkIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYS1zb2xpZCBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEtc29saWQgZmEtYXJyb3ctZG93bidcbn1cbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lIGluc3RhbmNlLlxuICovXG5jbGFzcyBUaGVtZSB7XG4gIGNvbnN0cnVjdG9yIChpY29ucyA9IG51bGwpIHtcbiAgICB0aGlzLmljb25zID0gaWNvbnNcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHNvbWUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAobmFtZSkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpY29uIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEljb24gKG5hbWUpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgaWNvbkNsYXNzZXMgPSB0aGlzLmljb25zW25hbWVdLnNwbGl0KCcgJylcblxuICAgIGlmIChpY29uQ2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpY29uQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZGl2IHVzZWQgdG8gd3JhcCB0aGUgZWRpdG9yIFVJIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRFZGl0b3JDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lZGl0b3ItY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGZpZWxkc2V0IGVsZW1lbnQuXG4gICAqIFVzZWQgdG8gd3JhcCBjaGlsZHJlbiBzbG90IGFuZCBwcm92aWRlIG1vcmUgc2VtYW50aWMgaHRtbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb21wbGV4IGVkaXRvcnMgbGlrZSBhcnJheXMsIG9iamVjdHMgYW5kIG11bHRpcGxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBMZWdlbmQgZWxlbWVudCB1c2VkIGluIGZpZWxkc2V0c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxuICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWFkZXIgZm9yIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkSGVhZGVyIChjb25maWcgPSB7fSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblxuICAgIGlmIChjb25maWcudGV4dENvbnRlbnQpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQodGl0bGUpXG4gICAgfVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgLyoqXG4gICAqIEEgYm9keSBmb3IgdGhlIGNhcmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGFycmF5IHNwZWNpZmljIGFjdGlvbnMgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFjdGlvbnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBjaGlsZCBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGlsZHJlblNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jaGlsZC1lZGl0b3JzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZXJyb3IgbWVzc2FnZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1lc3NhZ2VzU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLW1lc3NhZ2VzLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgZWRpdG9yIGNvbnRyb2xzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbnRyb2wtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIHByb3BlcnRpZXMgZWRpdGluZyBlbGVtZW50cyBsaWtlIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1zbG90JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICAgIGh0bWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgT2JqZWN0RWRpdG9yIHByb3BlcnRpZXMgd3JhcHBlciB2aXNpYmlsaXR5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCB0b2dnbGUgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICB0aGlzLnNob3dFbGVtZW50KGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZUVsZW1lbnQoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZ2dsZVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHByb3BlcnR5IGFjdGl2YXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNBY3RpdmF0b3JzICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy1jb250YWluZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBidXR0b25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogQSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG5cbiAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICBidXR0b24udmFsdWUgPSBjb25maWcudmFsdWVcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuXG4gICAgaWYgKHRoaXMuaWNvbnMgJiYgY29uZmlnLmljb24pIHtcbiAgICAgIGNvbnN0IGljb24gPSB0aGlzLmdldEljb24oY29uZmlnLmljb24pXG4gICAgICBpY29uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBjb25maWcudGV4dENvbnRlbnQpXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbilcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQodGV4dClcbiAgICB9XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dClcblxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImFkZFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUJ0bkFkZCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiZGVsZXRlXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlbGV0ZUl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJyxcbiAgICAgIGljb246ICdkZWxldGUnXG4gICAgfSlcblxuICAgIGRlbGV0ZUl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgcmV0dXJuIGRlbGV0ZUl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgdXBcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCcsXG4gICAgICBpY29uOiAnbW92ZVVwJ1xuICAgIH0pXG5cbiAgICBtb3ZlVXBJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICByZXR1cm4gbW92ZVVwSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSBkb3duXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1vdmVEb3duSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZURvd25JdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nLFxuICAgICAgaWNvbjogJ21vdmVEb3duJ1xuICAgIH0pXG5cbiAgICBtb3ZlRG93bkl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgcmV0dXJuIG1vdmVEb3duSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRoZSBlZGl0b3IgZGVzY3JpcHRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3QgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBFYWNoIGVkaXRvciBpcyBtYXBwZWQgdG8gYW4gb2JqZWN0IGluc3RhbmNlIHByb3BlcnR5LlxuICAgKiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCwgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZCBkZXBlbmRpbmcgb24gY29uZmlndXJhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0T2JqZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogJ1Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZCxcbiAgICAgIGljb246ICdwcm9wZXJ0aWVzJyxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXI6IHByb3BlcnRpZXNDb250YWluZXJcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0FjdGl2YXRvcnMgPSB0aGlzLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIGNvbmZpZy5pZCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5QnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZVxuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKHByb3BlcnRpZXNDb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICBpZiAoY29uZmlnLmVkaXRhYmxlUHJvcGVydGllcykge1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQWN0aXZhdG9ycylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmFkZFByb3BlcnR5KSB7XG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5Q29udHJvbC5jb250YWluZXIpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb3BlcnR5QnRuKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHByb3BlcnRpZXNUb2dnbGUsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLFxuICAgICAgYWRkUHJvcGVydHlDb250cm9sLFxuICAgICAgYWRkUHJvcGVydHlCdG4sXG4gICAgICBwcm9wZXJ0aWVzQWN0aXZhdG9ycyxcbiAgICAgIGFycmF5QWN0aW9uc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEl0ZW1zIGNhbiBidmUgYWRkZWQsIGRlbGV0ZWQgb3IgbW92ZWQgdXAgb3IgZG93bi5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjYXJkID0gdGhpcy5nZXRDYXJkKClcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0Q2FyZEhlYWRlcih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgc3JPbmx5OiBjb25maWcuc3JPbmx5XG4gICAgfSlcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5nZXRBcnJheUJ0bkFkZCh7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBpdGVtJyxcbiAgICAgIGljb246ICdhZGQnXG4gICAgfSlcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuR3JvdXApXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbGUgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnMgdGhhdCBjYW4gYmVcbiAgICogc2VsZWN0ZWQgd2l0aCBhIHN3aXRjaGVyIGNvbnRyb2wuIE9ubHkgb25lIGVkaXRvciBjYW4gYmUgYWN0aXZlL3Zpc2libGVcbiAgICogYXQgYSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiBjb25maWcucmVhZE9ubHlcbiAgICB9KVxuXG4gICAgc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHN3aXRjaGVyLmNvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgc3dpdGNoZXIsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCBmb3IgTnVsbEVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGV4dGFyZWFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFuIElucHV0IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGNvbmZpZy50eXBlKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgcmFkaW8gZ3JvdXAgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG5cbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmxhYmVsXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICBjb25zdCByYWRpb0NvbnRyb2xzID0gW11cbiAgICBjb25zdCByYWRpb3MgPSBbXVxuICAgIGNvbnN0IGxhYmVscyA9IFtdXG4gICAgY29uc3QgbGFiZWxUZXh0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbHMucHVzaChyYWRpb0NvbnRyb2wpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvcy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZpZWxkc2V0LCBsZWdlbmQsIGxhYmVsLCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgY2hlY2tib3ggY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpcHRpb25JZClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgdG8gc3dpdGNoIGJldHdlZW4gbXVsdGlwbGUgZWRpdG9ycyBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gIH1cblxuICAvKipcbiAgICogQW5vdGhlciB0eXBlIG9mIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyIHVzZWQgZm9yIG1vcmUgY29tcGxleCBlZGl0b3JzIGxpa2VcbiAgICogb2JqZWN0LCBhcnJheSBhbmQgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29sdW1uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdqZWRpLXJvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29sdW1uIHRvIGNvbnRhaW4gY29udGVudCB0byBhIHNwZWNpZmljIHdpZHRoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgLyoqXG4gICAqIFRhYiBsaXN0IGlzIGEgbGlzdCBvZiBsaW5rcyB0aGF0IHRyaWdnZXJzIHRhYnMgdmlzaWJpbGl0eSBuZSBhdCB0aGUgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICAvKipcbiAgICogQSBUYWIgaXMgYSB3cmFwcGVyIGZvciBjb250ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGluaycpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuaWQpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGluaylcbiAgICByZXR1cm4geyBsaXN0LCBsaW5rIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0YWJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJDb250ZW50ICgpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50JylcbiAgICByZXR1cm4gdGFiQ29udGVudFxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0YWIgYXR0cmlidXRlcyB0byBtYWtlIGl0IHRvZ2dsZWFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqZWRpLXRhYi1wYW5lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBlbGVtZW50IHZpc3VhbGx5IGhpZGRlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZlYWxzIGEgdmlzdWFsbHkgaGlkZGVuIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcywgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsIGdldFNjaGVtYVByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSA/IHNjaGVtYVByb3BlcnRpZXMgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQWRkaXRpb25hbFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZVtwcm9wZXJ0eV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4uYWRkaXRpb25hbFByb3BlcnR5RXJyb3JzXVxuXG4gICAgICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBbGxPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgYWxsT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBzdWJTY2hlbWFFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgYW55T2ZFcnJvcnMgPSBhbnlPZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgYW55T2ZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICAgIGlmIChhbnlPZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yQW55T2ZcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc1NldCwgZGlmZmVyZW50LCBjb21waWxlVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29uc3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFDb25zdCA9IGdldFNjaGVtYUNvbnN0KHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hQ29uc3QpKSB7XG4gICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSBkaWZmZXJlbnQodmFsdWUsIHNjaGVtYUNvbnN0KVxuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQ29uc3QsIHtcbiAgICAgICAgICAgIGNvbnN0OiBKU09OLnN0cmluZ2lmeShzY2hlbWFDb25zdClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUNvbnRhaW5zLCBnZXRTY2hlbWFNYXhDb250YWlucywgZ2V0U2NoZW1hTWluQ29udGFpbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGNvbnRhaW5zID0gZ2V0U2NoZW1hQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtaW5Db250YWlucyA9IGdldFNjaGVtYU1pbkNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWF4Q29udGFpbnMgPSBnZXRTY2hlbWFNYXhDb250YWlucyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGNvbnRhaW5zKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbnNFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogY29udGFpbnMsIGRhdGE6IGl0ZW0gfSlcbiAgICAgIGNvbnN0IGNvbnRhaW5zRXJyb3JzID0gY29udGFpbnNFZGl0b3IuZ2V0RXJyb3JzKClcblxuICAgICAgaWYgKGNvbnRhaW5zRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cblxuICAgICAgY29udGFpbnNFZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID09PSAwKVxuXG4gICAgaWYgKGlzU2V0KG1pbkNvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWluQ29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPCBtaW5Db250YWlucylcblxuICAgICAgaWYgKG1pbkNvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluQ29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWluQ29udGFpbnM6IG1pbkNvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JDb250YWluc10sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NldChtYXhDb250YWlucykpIHtcbiAgICAgIGNvbnN0IG1heENvbnRhaW5zSW52YWxpZCA9IChjb3VudGVyID4gbWF4Q29udGFpbnMpXG5cbiAgICAgIGlmIChtYXhDb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heENvbnRhaW5zLCB7XG4gICAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXIsXG4gICAgICAgICAgICAgIG1heENvbnRhaW5zOiBtYXhDb250YWluc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFJlcXVpcmVkICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWhhc093bih2YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRGVwZW5kZW50UmVxdWlyZWQsIHtcbiAgICAgICAgICAgIGRlcGVuZGVudFJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVudFNjaGVtYXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBkZXBlbmRlbnRTY2hlbWFzID0gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChkZXBlbmRlbnRTY2hlbWFzKSkge1xuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFNjaGVtYXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGlzU2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudFNjaGVtYSA9IGRlcGVuZGVudFNjaGVtYXNba2V5XVxuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFbnVtLCB7XG4gICAgICAgICAgICBlbnVtOiBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBmb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2lmICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hSWYsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgbGV0IHRoZW5FcnJvcnMgPSBbXVxuICAgIGxldCBlbHNlRXJyb3JzID0gW11cblxuICAgIGlmIChpc1NldChzY2hlbWFUaGVuKSkge1xuICAgICAgY29uc3QgdGhlbkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFUaGVuLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgdGhlbkVycm9ycyA9IHRoZW5FZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHRoZW5FZGl0b3IuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICBjb25zdCBlbHNlRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYUVsc2UsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU5vdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBub3QgPSBnZXRTY2hlbWFOb3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChub3QpKSB7XG4gICAgY29uc3Qgbm90RWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IG5vdCwgZGF0YTogdmFsdWUgfSlcbiAgICBjb25zdCBub3RFcnJvcnMgPSBub3RFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBub3RFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBjb25zdCBpbnZhbGlkID0gbm90RXJyb3JzLmxlbmd0aCA9PT0gMFxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck5vdClcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFPbmVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgb25lT2YgPSBnZXRTY2hlbWFPbmVPZihzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgb25lT2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBvbmVPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBjb25zdCBvbmVPZkVycm9ycyA9IG9uZU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBvbmVPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKG9uZU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNvdW50ZXIgIT09IDEpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck9uZU9mLCB7XG4gICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm4gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHBhdHRlcm4gPSBnZXRTY2hlbWFQYXR0ZXJuKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KHBhdHRlcm4pKSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgIGNvbnN0IGludmFsaWQgPSAhcmVnZXhwLnRlc3QodmFsdWUpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUGF0dGVybiwge1xuICAgICAgICAgICAgcGF0dGVybjogcGF0dGVyblxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3QgYXR0ZXJuUHJvcGVydGllcyA9IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGlmIChyZWdleHAudGVzdChwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hID0gcGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl1cblxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICBwcmVmaXhJdGVtcy5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBpdGVtU2NoZW1hLCBkYXRhOiBpdGVtVmFsdWUgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcblxuICAgICAgICBpZiAodG1wRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclByZWZpeEl0ZW1zLCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQocmVxdWlyZWQpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHJlcXVpcmVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUmVxdWlyZWQsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQge1xuICBjb21waWxlVGVtcGxhdGUsIGdldFR5cGUsXG4gIGlzQXJyYXksXG4gIGlzQm9vbGVhbixcbiAgaXNJbnRlZ2VyLFxuICBpc051bGwsXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHR5cGUgPSBnZXRTY2hlbWFUeXBlKHNjaGVtYSlcblxuICBpZiAodHlwZSA9PT0gJ2FueScpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQodHlwZSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB2YWxpZCA9IHR5cGUuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclR5cGUsIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGdldFR5cGUodmFsdWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVW5pcXVlSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHVuaXF1ZUl0ZW1zID0gZ2V0U2NoZW1hVW5pcXVlSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldCh1bmlxdWVJdGVtcykgJiYgdW5pcXVlSXRlbXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvclVuaXF1ZUl0ZW1zXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0MDQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDQnXG5pbXBvcnQgZHJhZnQwNiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNidcbmltcG9ydCBkcmFmdDA3IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA3J1xuaW1wb3J0IGRyYWZ0MjAxOTA5IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMTktMDknXG5pbXBvcnQgZHJhZnQyMDIwMTIgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuLCBjbG9uZSwgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZHJhZnQgPSBkcmFmdDIwMjAxMlxuXG4gICAgdGhpcy5qc29uU2NoZW1hRHJhZnRzID0ge1xuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIyc6IGRyYWZ0MDQsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNi9zY2hlbWEjJzogZHJhZnQwNixcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSMnOiBkcmFmdDA3LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMTktMDkvc2NoZW1hJzogZHJhZnQyMDE5MDksXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAyMC0xMi9zY2hlbWEnOiBkcmFmdDIwMjAxMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICBnZXRFcnJvcnMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdtZXNzYWdlcycpXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHNjaGVtYSlcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IGlzU2V0KHNjaGVtYU9wdGlvbnNNZXNzYWdlcykgPyBzY2hlbWFPcHRpb25zTWVzc2FnZXMgOiBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=