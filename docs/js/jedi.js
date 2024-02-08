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
      this.propertyActivators = {};
      var schemaOptions = this.instance.schema.options || {};
      var addProperty = true;
      var additionalProperties = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaAdditionalProperties"])(this.instance.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(additionalProperties) && additionalProperties === false) {
        addProperty = false;
      }
      var editableProperties = false;
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(this.instance.jedi.options.editableProperties)) {
        editableProperties = this.instance.jedi.options.editableProperties;
      }
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaOptions.editableProperties)) {
        editableProperties = schemaOptions.editableProperties;
      }
      this.control = this.theme.getObjectControl({
        title: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(this.instance.schema) || this.instance.getKey(),
        srOnly: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaOption"])(this.instance.schema, 'hideTitle'),
        id: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(this.instance.path),
        description: Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaDescription"])(this.instance.schema),
        editableProperties: editableProperties,
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
        var ariaLive = _this.control.ariaLive;
        ariaLive.innerHTML = '';
        var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(child.schema);
        var label = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : key;
        var ariaLiveMessage = _this.theme.getAriaLiveMessage();
        ariaLiveMessage.textContent = label + ' field was added to the form';
        ariaLive.appendChild(ariaLiveMessage);
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
        this.instance.children.forEach(function (child) {
          var childKey = child.getKey();
          var isRequired = _this2.instance.isRequired(childKey);
          var isDependentRequired = _this2.instance.isDependentRequired(childKey);
          var notRequired = !isRequired && !isDependentRequired;
          var activatorInDom = _this2.propertyActivators[childKey];
          var ariaLive = _this2.control.ariaLive;
          var schemaTitle = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_7__["getSchemaTitle"])(child.schema);
          var id = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["pathToAttribute"])(child.path) + '-activator';
          var label = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["isSet"])(schemaTitle) ? schemaTitle : childKey;
          if (notRequired && !activatorInDom) {
            var checkboxControl = _this2.theme.getCheckboxControl({
              id: id,
              label: label,
              srOnly: false
            });
            var _checkbox = checkboxControl.input;
            _this2.propertyActivators[childKey] = _checkbox;
            _checkbox.addEventListener('change', function () {
              ariaLive.innerHTML = '';
              var ariaLiveMessage = _this2.theme.getAriaLiveMessage();
              if (_checkbox.checked) {
                child.activate();
                ariaLiveMessage.textContent = label + ' field was added to the form';
                ariaLive.appendChild(ariaLiveMessage);
              } else {
                child.deactivate();
                ariaLiveMessage.textContent = label + ' field was removed from the form';
                ariaLive.appendChild(ariaLiveMessage);
              }
            });
            _this2.control.propertiesActivators.appendChild(checkboxControl.container);
          }
          var checkbox = _this2.propertyActivators[childKey];
          if (checkbox) {
            checkbox.disabled = _this2.disabled;
            checkbox.checked = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(_this2.instance.getValue(), childKey);
          }
        });
      }
    }
  }, {
    key: "refreshEditors",
    value: function refreshEditors() {
      var _this3 = this;
      this.instance.children.forEach(function (child) {
        if (child.isActive) {
          if (child.ui.control.container.parentNode === null) {
            _this3.control.childrenSlot.appendChild(child.ui.control.container);
          }
          if (_this3.disabled || _this3.instance.isReadOnly()) {
            child.ui.disable();
          } else {
            child.ui.enable();
          }
        } else {
          if (child.ui.control.container.parentNode) {
            child.ui.control.container.parentNode.removeChild(child.ui.control.container);
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
   * Adds a named event listener
   * @public
   * @param {string} name - The name of the event
   * @param {function} callback - A callback functions that will be executed when this event is emitted
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
/*! exports provided: getSchemaX, getSchemaSchema, getSchemaAdditionalProperties, getSchemaPropertyNames, getSchemaAllOf, getSchemaAnyOf, getSchemaConst, getSchemaContains, getSchemaDefault, getSchemaDependentRequired, getSchemaDependentSchemas, getSchemaDescription, getSchemaElse, getSchemaEnum, getSchemaExclusiveMaximum, getSchemaExclusiveMinimum, getSchemaFormat, getSchemaIf, getSchemaItems, getSchemaMaximum, getSchemaMaxContains, getSchemaMaxItems, getSchemaMaxLength, getSchemaMaxProperties, getSchemaMinimum, getSchemaMinContains, getSchemaMinItems, getSchemaMinLength, getSchemaMinProperties, getSchemaMultipleOf, getSchemaNot, getSchemaOption, getSchemaPattern, getSchemaPatternProperties, getSchemaPrefixItems, getSchemaProperties, getSchemaReadOnly, getSchemaRequired, getSchemaThen, getSchemaTitle, getSchemaType, getSchemaOneOf, getSchemaUniqueItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaX", function() { return getSchemaX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaSchema", function() { return getSchemaSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaAdditionalProperties", function() { return getSchemaAdditionalProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaPropertyNames", function() { return getSchemaPropertyNames; });
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
function getSchemaPropertyNames(schema) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.propertyNames) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(schema.propertyNames) ? schema.propertyNames : undefined;
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
 * @return {string}
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
  errorAdditionalProperties: 'Has additional property "{{ property }}" but no additional properties are allowed.',
  errorAnyOf: 'Must validate against at least one of the provided schemas.',
  errorConst: 'Must have value of: {{ const }}.',
  errorContains: 'Must contain at least one item matching the provided schema.',
  errorDependentRequired: 'Must have the required properties: {{ dependentRequired }}.',
  errorEnum: 'Must be one of the enumerated values: {{ enum }}.',
  errorExclusiveMaximum: 'Must be less than {{ exclusiveMaximum }}.',
  errorExclusiveMinimum: 'Must be greater than {{ exclusiveMinimum }}.',
  errorFormat: 'Must be a valid {{ format }}.',
  errorItems: 'Must have items that validate against the provided schema.',
  errorMaximum: 'Must be at most {{ maximum }}.',
  errorMaxItems: 'Must have at most {{ maxItems }} items.',
  errorMaxLength: 'Must be at most {{ maxLength }} characters long.',
  errorMaxProperties: 'Must have at most {{ maxProperties }} properties.',
  errorMaxContains: 'Must contain at most {{ maxContains }} items matching the provided schema. It currently contains {{ counter }}.',
  errorMinContains: 'Must contain at least {{ minContains }} items matching the provided schema. It currently contains {{ counter }}.',
  errorMinimum: 'Must be at least {{ minimum }}.',
  errorMinItems: 'Must have at least {{ minItems }} items.',
  errorMinLength: 'Must be at least {{ minLength }} characters long.',
  errorMinProperties: 'Must have at least {{ minProperties }} properties.',
  errorMultipleOf: 'Must be multiple of {{ multipleOf }}.',
  errorNot: 'Must not validate against the provided schema.',
  errorOneOf: 'Must validate against exactly one of the provided schemas. It currently validates against {{ counter }} of the schemas.',
  errorPattern: 'Must match the pattern: "{{ pattern }}".',
  errorPrefixItems: 'Item {{ index }} fails validation.',
  errorPropertyNames: 'Property name "{{ propertyName }}" fails validation.',
  errorRequired: 'Must have the required properties: {{ required }}.',
  errorType: 'Must be of type {{ type }}.',
  errorUniqueItems: 'Must have unique items.'
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
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jedi */ "./src/jedi.js");






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
     * The schema path of this instance.
     * @type {string}
     * @private
     */
    _this.path = config.path || _this.jedi.rootName;

    /**
     * A JSON schema.
     * @type {boolean|object}
     * @private
     */
    _this.originalSchema = config.schema;

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
     * in the value.
     * @type {boolean}
     * @private
     */
    _this.isActive = true;

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

        // if (this.jedi?.options?.isEditor) {
        //   this.mutate()
        // }
      });
    }
  }, {
    key: "mutate",
    value: function mutate() {
      if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(this.schema)) {
        return;
      }
      var schemaIf = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaIf"])(this.schema);
      if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["isSet"])(schemaIf)) {
        this.unregister();
        var jedi = this.jedi;
        var path = this.path;
        var parent = this.parent;
        var container = this.ui.control.container.parentNode;
        var originalSchema = this.originalSchema;
        var oldValue = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["clone"])(this.getValue());
        var schemaThen = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaThen"])(this.schema);
        var schemaElse = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_8__["getSchemaElse"])(this.schema);
        var ifEditor = new _jedi__WEBPACK_IMPORTED_MODULE_9__["default"]({
          schema: schemaIf,
          data: oldValue
        });
        var valid = ifEditor.getErrors().length === 0;
        ifEditor.destroy();
        var schemaDelta = valid ? schemaThen : schemaElse;
        var newSchema = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["mergeDeep"])({}, originalSchema, schemaDelta);
        var schemaUnchanged = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["equal"])(originalSchema, newSchema);
        if (schemaUnchanged) {
          return;
        }
        this.destroy();
        var newInstance = jedi.createInstance({
          jedi: jedi,
          schema: newSchema,
          path: path,
          parent: parent
        });
        newInstance.setValue(Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["mergeDeep"])(newInstance.getValue(), oldValue), false);
        container.appendChild(newInstance.ui.control.container);
      }
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
      this.listeners = [];
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
      validateFormat: false,
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
      this.validator = new _validation_validator__WEBPACK_IMPORTED_MODULE_6__["default"]({
        refParser: this.refParser,
        validateFormat: this.options.validateFormat
      });
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
     * Appends a hidden input to the root container whose value will be the value
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
     * Returns an instance by path
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
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = document.createElement('fieldset');
      fieldset.classList.add('panel');
      fieldset.classList.add('panel-default');
      return fieldset;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getLegend", this).call(this, config);
      legend.classList.add('h5');
      legend.classList.add('panel-heading');
      legend.classList.add('pull-left');
      legend.setAttribute('style', 'margin: 0; display: flex; justify-content: space-between; align-items: center;');
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
      header.classList.add('text-right');
      return header;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getCardBody", this).call(this);
      html.classList.add('panel-body');
      html.style.clear = 'both';
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
        this.visuallyHidden(label);
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
        this.visuallyHidden(label);
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getRadiosControl", this).call(this, config);
      var body = control.body,
        radios = control.radios,
        labels = control.labels,
        labelTexts = control.labelTexts,
        radioControls = control.radioControls,
        description = control.description,
        messages = control.messages;
      radioControls.forEach(function (radioControl, index) {
        radioControl.classList.add('radio');
        body.appendChild(radioControls[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(radios[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      body.appendChild(description);
      body.appendChild(messages);
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
        this.visuallyHidden(label);
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
    key: "visuallyHidden",
    value: function visuallyHidden(element) {
      element.classList.add('sr-only');
    }
  }, {
    key: "visuallyVisible",
    value: function visuallyVisible(element) {
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
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = document.createElement('fieldset');
      fieldset.classList.add('card');
      fieldset.classList.add('mb-3');
      return fieldset;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getLegend", this).call(this, config);
      legend.classList.add('h6');
      legend.classList.add('card-header');
      legend.classList.add('d-flex');
      legend.classList.add('justify-content-between');
      legend.classList.add('align-items-center');
      legend.classList.add('float-left');
      legend.classList.add('py-2');
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
      html.classList.add('justify-content-end');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      return html;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getCardBody", this).call(this);
      html.classList.add('card-body');
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
      html.classList.add('btn-sm');
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
        this.visuallyHidden(label);
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
        this.visuallyHidden(label);
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap4.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        body = control.body,
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
        body.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      body.appendChild(description);
      body.appendChild(messages);
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
    key: "visuallyHidden",
    value: function visuallyHidden(element) {
      element.classList.add('sr-only');
    }
  }, {
    key: "visuallyVisible",
    value: function visuallyVisible(element) {
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
    key: "getFieldset",
    value: function getFieldset() {
      var fieldset = document.createElement('fieldset');
      fieldset.classList.add('card');
      fieldset.classList.add('mb-3');
      return fieldset;
    }
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getLegend", this).call(this, config);
      legend.classList.add('h6');
      legend.classList.add('card-header');
      legend.classList.add('d-flex');
      legend.classList.add('justify-content-between');
      legend.classList.add('align-items-center');
      legend.classList.add('py-2');
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
      html.classList.add('justify-content-end');
      html.classList.add('align-items-center');
      html.classList.add('py-1');
      return html;
    }
  }, {
    key: "getCardBody",
    value: function getCardBody() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getCardBody", this).call(this);
      html.classList.add('card-body');
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
      html.classList.add('btn-sm');
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
        this.visuallyHidden(label);
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
        this.visuallyHidden(label);
      }
      return control;
    }
  }, {
    key: "getRadiosControl",
    value: function getRadiosControl(config) {
      var control = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap5.prototype), "getRadiosControl", this).call(this, config);
      var container = control.container,
        body = control.body,
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
        body.appendChild(radioControls[index]);
        radioControl.appendChild(radios[index]);
        radioControl.appendChild(labels[index]);
        labels[index].appendChild(labelTexts[index]);
      });
      body.appendChild(description);
      body.appendChild(messages);
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
        this.visuallyHidden(label);
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
      this.visuallyHidden(label);
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
    key: "visuallyHidden",
    value: function visuallyHidden(element) {
      element.classList.add('visually-hidden');
    }
  }, {
    key: "visuallyVisible",
    value: function visuallyVisible(element) {
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
  "delete": 'fa fa-trash-o',
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
     * Used to wrap the editor UI elements
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
     * Used to group several controls
     * @private
     */
  }, {
    key: "getFieldset",
    value: function getFieldset() {
      return document.createElement('fieldset');
    }

    /**
     * Represents a caption for the content of its parent fieldset
     * @private
     */
  }, {
    key: "getLegend",
    value: function getLegend(config) {
      var legend = document.createElement('legend');
      var legendText = document.createElement('span');
      legend.setAttribute('aria-labelledby', '#legend-' + config.id);
      legendText.textContent = config.textContent;
      legendText.setAttribute('id', '#legend-' + config.id);
      legend.appendChild(legendText);
      return legend;
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
     * Header for cards
     * @private
     */
  }, {
    key: "getCardHeader",
    value: function getCardHeader() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return document.createElement('div');
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
      var html = this.getBtnGroup();
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
      html.setAttribute('aria-atomic', 'false');
      html.setAttribute('aria-live', 'polite');
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
     * Container for screen reader announced messages
     * @private
     */
  }, {
    key: "getPropertiesAriaLive",
    value: function getPropertiesAriaLive(message) {
      var html = document.createElement('div');
      html.setAttribute('role', 'status');
      html.setAttribute('aria-live', 'polite');
      return html;
    }

    /**
     * A message that will be announced by screen reader
     * @private
     */
  }, {
    key: "getAriaLiveMessage",
    value: function getAriaLiveMessage(message) {
      var html = document.createElement('p');
      html.textContent = message;
      this.visuallyHidden(html);
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
            _this.visuallyVisible(config.propertiesContainer);
          } else {
            _this.visuallyHidden(config.propertiesContainer);
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
      var html = document.createElement('span');
      html.style.display = 'initial';
      return html;
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
        this.visuallyHidden(text);
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
    value: function getArrayBtnAdd() {
      var html = this.getButton({
        textContent: 'Add item into',
        icon: 'add'
      });
      html.classList.add('jedi-array-add');
      return html;
    }
  }, {
    key: "getAddPropertyButton",
    value: function getAddPropertyButton() {
      var html = this.getButton({
        textContent: 'Add property'
      });
      html.classList.add('jedi-add-property-btn');
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
      var description = document.createElement('small');
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
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var body = this.getCardBody();
      var ariaLive = this.getPropertiesAriaLive();
      var description = this.getDescription({
        textContent: config.description
      });
      var messages = this.getMessagesSlot();
      var childrenSlot = this.getChildrenSlot();
      var propertiesContainer = this.getPropertiesSlot({
        id: 'properties-slot-' + config.id
      });
      var propertiesToggle = this.getPropertiesToggle({
        textContent: config.title + ' ' + 'properties',
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
      var addPropertyBtn = this.getAddPropertyButton();
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title,
        id: config.id
      });
      addPropertyBtn.classList.add('jedi-object-add');
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      body.appendChild(description);
      body.appendChild(messages);
      legend.appendChild(actions);
      actions.appendChild(arrayActions);
      body.appendChild(propertiesContainer);
      body.appendChild(childrenSlot);
      if (config.editableProperties) {
        actions.appendChild(propertiesToggle);
        propertiesContainer.appendChild(ariaLive);
        propertiesContainer.appendChild(propertiesActivators);
      }
      if (config.addProperty) {
        propertiesContainer.appendChild(addPropertyControl.container);
        propertiesContainer.appendChild(addPropertyBtn);
      }
      return {
        container: container,
        body: body,
        actions: actions,
        messages: messages,
        childrenSlot: childrenSlot,
        propertiesToggle: propertiesToggle,
        propertiesContainer: propertiesContainer,
        addPropertyControl: addPropertyControl,
        addPropertyBtn: addPropertyBtn,
        ariaLive: ariaLive,
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
      var actions = this.getActionsSlot();
      var arrayActions = this.getArrayActionsSlot();
      var body = this.getCardBody();
      var description = this.getDescription({
        textContent: config.description
      });
      var messages = this.getMessagesSlot();
      var childrenSlot = this.getChildrenSlot();
      var btnGroup = this.getBtnGroup();
      var addBtn = this.getArrayBtnAdd();
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title,
        id: config.id
      });
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      body.appendChild(description);
      body.appendChild(messages);
      legend.appendChild(actions);
      actions.appendChild(btnGroup);
      btnGroup.appendChild(addBtn);
      actions.appendChild(arrayActions);
      body.appendChild(childrenSlot);
      return {
        container: container,
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
        this.visuallyHidden(label);
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
        this.visuallyHidden(label);
      }
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var describedBy = messagesId + ' ' + descriptionId;
      input.setAttribute('aria-describedby', describedBy);
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
        this.visuallyHidden(label);
      }
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var describedBy = messagesId + ' ' + descriptionId;
      input.setAttribute('aria-describedby', describedBy);
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
      var messages = this.getMessagesSlot();
      var body = this.getCardBody();
      var legend = this.getLegend({
        id: config.label
      });
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.srOnly) {
        this.visuallyHidden(legend);
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
        var describedBy = messagesId + ' ' + descriptionId;
        radio.setAttribute('aria-describedby', describedBy);
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
        legend.textContent = config.label;
      }
      container.appendChild(fieldset);
      container.appendChild(actions);
      fieldset.appendChild(legend);
      fieldset.appendChild(body);
      actions.appendChild(arrayActions);
      radioControls.forEach(function (radioControl, index) {
        body.appendChild(radioControls[index]);
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
        body: body,
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
        this.visuallyHidden(label);
      }
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var describedBy = messagesId + ' ' + descriptionId;
      input.setAttribute('aria-describedby', describedBy);
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
        this.visuallyHidden(label);
      }
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var describedBy = messagesId + ' ' + descriptionId;
      input.setAttribute('aria-describedby', describedBy);
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
      return this.getInvalidFeedback(config);
    }

    /**
     * Error messages
     * @public
     */
  }, {
    key: "getInvalidFeedback",
    value: function getInvalidFeedback(config) {
      var html = document.createElement('div');
      var invalidFeedbackText = document.createElement('span');
      var invalidFeedbackIcon = document.createElement('small');
      invalidFeedbackText.textContent = config.message;
      invalidFeedbackIcon.textContent = '❌ ';
      invalidFeedbackIcon.classList.add('jedi-error-message');
      invalidFeedbackIcon.setAttribute('aria-hidden', 'true');
      html.classList.add('jedi-error-message');
      html.appendChild(invalidFeedbackIcon);
      html.appendChild(invalidFeedbackText);
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
    key: "visuallyHidden",
    value: function visuallyHidden(element) {
      element.setAttribute('style', 'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;');
    }

    /**
     * Reveals a visually hidden element
     * @private
     */
  }, {
    key: "visuallyVisible",
    value: function visuallyVisible(element) {
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
  var validateFormat = validator.validateFormat;
  if (Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_1__["getSchemaOption"])(schema, 'validateFormat')) {
    validateFormat = schema.options.validateFormat;
  }
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(format) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) && validateFormat) {
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

/***/ "./src/validation/constrains/propertyNames.js":
/*!****************************************************!*\
  !*** ./src/validation/constrains/propertyNames.js ***!
  \****************************************************/
/*! exports provided: propertyNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyNames", function() { return propertyNames; });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _jedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jedi */ "./src/jedi.js");
/* harmony import */ var _helpers_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/schema */ "./src/helpers/schema.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/**
 * constrains propertyNames
 */





function propertyNames(validator, value, schema, key, path) {
  var errors = [];
  var schemaPropertyNames = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_2__["getSchemaPropertyNames"])(schema);
  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["isSet"])(schemaPropertyNames)) {
    Object.keys(value).forEach(function (propertyName) {
      var editor = new _jedi__WEBPACK_IMPORTED_MODULE_1__["default"]({
        XMLHttpRequest: validator.refParser.XMLHttpRequest,
        schema: schemaPropertyNames,
        data: propertyName
      });
      var invalid = editor.getErrors().length > 0;
      if (invalid) {
        errors.push({
          messages: [Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["compileTemplate"])(_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].errorPropertyNames, {
            propertyName: propertyName
          })],
          path: path
        });
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
/* harmony import */ var _constrains_propertyNames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../constrains/propertyNames */ "./src/validation/constrains/propertyNames.js");
/* harmony import */ var _constrains_required__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../constrains/required */ "./src/validation/constrains/required.js");
/* harmony import */ var _constrains_type__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../constrains/type */ "./src/validation/constrains/type.js");
/* harmony import */ var _constrains_maximum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../constrains/maximum */ "./src/validation/constrains/maximum.js");
/* harmony import */ var _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../constrains/uniqueItems */ "./src/validation/constrains/uniqueItems.js");
/* harmony import */ var _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../constrains/additionalProperties */ "./src/validation/constrains/additionalProperties.js");































/* harmony default export */ __webpack_exports__["default"] = ({
  additionalProperties: _constrains_additionalProperties__WEBPACK_IMPORTED_MODULE_30__["additionalProperties"],
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
  maximum: _constrains_maximum__WEBPACK_IMPORTED_MODULE_28__["maximum"],
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
  propertyNames: _constrains_propertyNames__WEBPACK_IMPORTED_MODULE_25__["propertyNames"],
  required: _constrains_required__WEBPACK_IMPORTED_MODULE_26__["required"],
  type: _constrains_type__WEBPACK_IMPORTED_MODULE_27__["type"],
  uniqueItems: _constrains_uniqueItems__WEBPACK_IMPORTED_MODULE_29__["uniqueItems"]
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
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Validator);
    this.refParser = config.refParser;
    this.validateFormat = config.validateFormat ? config.validateFormat : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJvcGVydHlOYW1lcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy90eXBlLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA3LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAxOS0wOS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMjAtMTIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJFZGl0b3JBcnJheU5hdiIsIl9FZGl0b3JBcnJheSIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbml0IiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJhY3RpdmVUYWJJbmRleCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiX3RoaXMiLCJjb250cm9sIiwiYWRkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluc3RhbmNlIiwibGVuZ3RoIiwiYWRkSXRlbSIsInJlZnJlc2hVSSIsIl90aGlzMiIsInJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzIiwiY2hpbGRyZW5TbG90IiwiaW5uZXJIVE1MIiwibmF2Q29scyIsImdldFNjaGVtYU9wdGlvbiIsInNjaGVtYSIsIm5hdlN0YWNrZWQiLCJuYXZUeXBlIiwicm93IiwidGhlbWUiLCJnZXRSb3ciLCJjb2xzIiwiaXNTZXQiLCJ0YWJMaXN0Q29sIiwiZ2V0Q29sIiwidGFiQ29udGVudENvbCIsInRhYkNvbnRlbnQiLCJnZXRUYWJDb250ZW50IiwidGFiTGlzdCIsImdldFRhYkxpc3QiLCJzdGFja2VkIiwidHlwZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmRleCIsImRlbGV0ZUJ0biIsImdldERlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBCdG4iLCJnZXRNb3ZlVXBJdGVtQnRuIiwibW92ZURvd25CdG4iLCJnZXRNb3ZlRG93bkl0ZW1CdG4iLCJ1aSIsImFycmF5QWN0aW9ucyIsImNvbnRhaW5lciIsImNoaWxkVGl0bGUiLCJzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpMCIsImkxIiwiZ2V0VmFsdWUiLCJjb21waWxlVGVtcGxhdGUiLCJzY2hlbWFUaXRsZSIsImdldFNjaGVtYVRpdGxlIiwiZ2V0S2V5IiwiY2xhbXAiLCJkZWxldGVJdGVtIiwidG9JbmRleCIsIm1vdmUiLCJhY3RpdmUiLCJpZCIsInBhdGhUb0F0dHJpYnV0ZSIsInBhdGgiLCJ0YWIiLCJnZXRUYWIiLCJ0aXRsZSIsImxpc3QiLCJzZXRUYWJQYW5lQXR0cmlidXRlcyIsImRpc2FibGVkIiwiaXNSZWFkT25seSIsImRpc2FibGUiLCJlbmFibGUiLCJzZXRBdHRyaWJ1dGUiLCJFZGl0b3JBcnJheSIsIl9FZGl0b3IiLCJidWlsZCIsImdldEFycmF5Q29udHJvbCIsInNyT25seSIsImRlc2NyaXB0aW9uIiwiZ2V0U2NoZW1hRGVzY3JpcHRpb24iLCJnZXRJbnZhbGlkRmVlZGJhY2siLCJjb25maWciLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsIm1heEl0ZW1zIiwiZ2V0U2NoZW1hTWF4SXRlbXMiLCJtaW5JdGVtcyIsImdldFNjaGVtYU1pbkl0ZW1zIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsIkVkaXRvciIsIkVkaXRvckJvb2xlYW5FbnVtUmFkaW8iLCJfRWRpdG9yQm9vbGVhbiIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsInNldFZhbHVlIiwiY2hlY2tlZCIsIkVkaXRvckJvb2xlYW4iLCJFZGl0b3JCb29sZWFuRW51bVNlbGVjdCIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwicmVhZE9ubHkiLCJjb2VyY2VWYWx1ZSIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJhbHdheXNTaG93RXJyb3JzIiwib3B0aW9ucyIsInNob3dFcnJvcnMiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsIm9uIiwiaWNvbnMiLCJpY29uTGliIiwiZ2x5cGhpY29ucyIsImJvb3RzdHJhcEljb25zIiwiZm9udEF3ZXNvbWUzIiwiZm9udEF3ZXNvbWU0IiwiZm9udEF3ZXNvbWU1IiwiZm9udEF3ZXNvbWU2IiwiVGhlbWVCb290c3RyYXAzIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiVGhlbWUiLCJnZXRTY2hlbWFUeXBlIiwic2NoZW1hRW51bSIsImdldFNjaGVtYUVudW0iLCJpbmNsdWRlcyIsIm5ldmVyU2hvd0Vycm9ycyIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW52YWxpZEZlZWRiYWNrIiwiX3RoaXMzIiwiaW50ZXJhY3RpdmVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwiZGVzdHJveSIsIl90aGlzNCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk9iamVjdCIsImtleXMiLCJFdmVudEVtaXR0ZXIiLCJFZGl0b3JNdWx0aXBsZSIsImdldE11bHRpcGxlQ29udHJvbCIsInN3aXRjaGVyT3B0aW9uVmFsdWVzIiwic3dpdGNoZXJPcHRpb25zTGFiZWxzIiwic3dpdGNoZXIiLCJzd2l0Y2hJbnN0YW5jZSIsImFjdGl2ZUluc3RhbmNlIiwiRWRpdG9yTnVsbCIsImdldE51bGxDb250cm9sIiwiZ2V0U2NoZW1hRm9ybWF0IiwiRWRpdG9yTnVtYmVyRW51bVJhZGlvIiwiX0VkaXRvck51bWJlciIsIkVkaXRvck51bWJlciIsIkVkaXRvck51bWJlckVudW1TZWxlY3QiLCJnZXRJbnB1dENvbnRyb2wiLCJNYXRoIiwiZmxvb3IiLCJpc051bWJlciIsIkVkaXRvck9iamVjdEdyaWQiLCJfRWRpdG9yT2JqZWN0IiwicmVmcmVzaEVkaXRvcnMiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaXNBY3RpdmUiLCJjb2x1bW5zIiwib2Zmc2V0IiwiY29sIiwiRWRpdG9yT2JqZWN0IiwiRWRpdG9yT2JqZWN0TmF2IiwiY29udHJvbENvbHMiLCJjb250cm9sU3RhY2tlZCIsImNvbnRyb2xWYXJpYW50IiwicHJvcGVydHlBY3RpdmF0b3JzIiwic2NoZW1hT3B0aW9ucyIsImFkZFByb3BlcnR5IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyIsImVkaXRhYmxlUHJvcGVydGllcyIsImdldE9iamVjdENvbnRyb2wiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsInNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlQ2hpbGQiLCJhY3RpdmF0ZSIsImFyaWFMaXZlIiwiYXJpYUxpdmVNZXNzYWdlIiwiZ2V0QXJpYUxpdmVNZXNzYWdlIiwidGV4dENvbnRlbnQiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyIsImVxdWFsIiwiY2hpbGRLZXkiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsIm5vdFJlcXVpcmVkIiwiYWN0aXZhdG9ySW5Eb20iLCJjaGVja2JveENvbnRyb2wiLCJjaGVja2JveCIsImRlYWN0aXZhdGUiLCJwcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImhhc093biIsIkVkaXRvclN0cmluZ0VudW1SYWRpbyIsIl9FZGl0b3JTdHJpbmciLCJFZGl0b3JTdHJpbmciLCJFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IiwiRWRpdG9yU3RyaW5nVGV4dGFyZWEiLCJnZXRUZXh0YXJlYUNvbnRyb2wiLCJTdHJpbmciLCJpbnB1dFR5cGVzIiwic2NoZW1hRm9ybWF0IiwibGlzdGVuZXJzIiwibmFtZSIsImNhbGxiYWNrIiwicHVzaCIsImVtaXQiLCJmaWx0ZXIiLCJsaXN0ZW5lciIsImdldFNjaGVtYVgiLCJrZXl3b3JkIiwiZ2V0U2NoZW1hU2NoZW1hIiwiaXNTdHJpbmciLCIkc2NoZW1hIiwidW5kZWZpbmVkIiwiaXNCb29sZWFuIiwiZ2V0U2NoZW1hUHJvcGVydHlOYW1lcyIsInByb3BlcnR5TmFtZXMiLCJnZXRTY2hlbWFBbGxPZiIsImFsbE9mIiwiZ2V0U2NoZW1hQW55T2YiLCJhbnlPZiIsImdldFNjaGVtYUNvbnN0IiwiZ2V0U2NoZW1hQ29udGFpbnMiLCJjb250YWlucyIsImdldFNjaGVtYURlZmF1bHQiLCJnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwiZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyIsImRlcGVuZGVudFNjaGVtYXMiLCJnZXRTY2hlbWFFbHNlIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsImdldFNjaGVtYUlmIiwiZ2V0U2NoZW1hSXRlbXMiLCJpdGVtcyIsImdldFNjaGVtYU1heGltdW0iLCJtYXhpbXVtIiwiZ2V0U2NoZW1hTWF4Q29udGFpbnMiLCJpc0ludGVnZXIiLCJtYXhDb250YWlucyIsImdldFNjaGVtYU1heExlbmd0aCIsIm1heExlbmd0aCIsImdldFNjaGVtYU1heFByb3BlcnRpZXMiLCJtYXhQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hTWluaW11bSIsIm1pbmltdW0iLCJnZXRTY2hlbWFNaW5Db250YWlucyIsIm1pbkNvbnRhaW5zIiwiZ2V0U2NoZW1hTWluTGVuZ3RoIiwibWluTGVuZ3RoIiwiZ2V0U2NoZW1hTWluUHJvcGVydGllcyIsIm1pblByb3BlcnRpZXMiLCJnZXRTY2hlbWFNdWx0aXBsZU9mIiwibXVsdGlwbGVPZiIsImdldFNjaGVtYU5vdCIsIm5vdCIsIm9wdGlvbiIsImdldFNjaGVtYVBhdHRlcm4iLCJwYXR0ZXJuIiwiZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJwYXR0ZXJuUHJvcGVydGllcyIsImdldFNjaGVtYVByZWZpeEl0ZW1zIiwicHJlZml4SXRlbXMiLCJnZXRTY2hlbWFQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImdldFNjaGVtYVJlYWRPbmx5IiwiZ2V0U2NoZW1hUmVxdWlyZWQiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsImdldFNjaGVtYVRoZW4iLCJ0aGVuIiwiZ2V0U2NoZW1hT25lT2YiLCJvbmVPZiIsImdldFNjaGVtYVVuaXF1ZUl0ZW1zIiwidW5pcXVlSXRlbXMiLCJnZXRDaXJjdWxhclJlcGxhY2VyIiwiYW5jZXN0b3JzIiwiX3R5cGVvZiIsImF0IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiZmluZCIsIlJlZ0V4cCIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInNvcnRPYmplY3QiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJub3RTZXQiLCJBcnJheSIsImdldFR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmNhdCIsImRlZXBDb3B5IiwiY29weSIsImkiLCJvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMiLCJvYmoxIiwib2JqMiIsImdldFZhbHVlQnlKU09OUGF0aCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ0ZXN0IiwicGFyc2VJbnQiLCJlcnIiLCJlIiwiZiIsIm1hdGNoIiwibnVtYmVyIiwibWluIiwibWF4IiwicmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSIsImFyciIsInVuaXF1ZU9iamVjdHMiLCJ1bmlxdWVWYWx1ZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwib2JqU3RyaW5nIiwiaGFzIiwiYWRkIiwiaTE4biIsImVycm9yQWRkaXRpb25hbFByb3BlcnRpZXMiLCJlcnJvckFueU9mIiwiZXJyb3JDb25zdCIsImVycm9yQ29udGFpbnMiLCJlcnJvckRlcGVuZGVudFJlcXVpcmVkIiwiZXJyb3JFbnVtIiwiZXJyb3JFeGNsdXNpdmVNYXhpbXVtIiwiZXJyb3JFeGNsdXNpdmVNaW5pbXVtIiwiZXJyb3JGb3JtYXQiLCJlcnJvckl0ZW1zIiwiZXJyb3JNYXhpbXVtIiwiZXJyb3JNYXhJdGVtcyIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JNYXhQcm9wZXJ0aWVzIiwiZXJyb3JNYXhDb250YWlucyIsImVycm9yTWluQ29udGFpbnMiLCJlcnJvck1pbmltdW0iLCJlcnJvck1pbkl0ZW1zIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvck1pblByb3BlcnRpZXMiLCJlcnJvck11bHRpcGxlT2YiLCJlcnJvck5vdCIsImVycm9yT25lT2YiLCJlcnJvclBhdHRlcm4iLCJlcnJvclByZWZpeEl0ZW1zIiwiZXJyb3JQcm9wZXJ0eU5hbWVzIiwiZXJyb3JSZXF1aXJlZCIsImVycm9yVHlwZSIsImVycm9yVW5pcXVlSXRlbXMiLCJJbnN0YW5jZUFycmF5IiwiX0luc3RhbmNlIiwic2V0VUkiLCJzY2hlbWFUeXBlIiwicHJlcGFyZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJzY2hlbWFJdGVtcyIsInNjaGVtYVByZWZpeEl0ZW1zIiwiaGFzUHJlZml4SXRlbXNTY2hlbWEiLCJjcmVhdGVJbnN0YW5jZSIsInBhcmVudCIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJJbnN0YW5jZUJvb2xlYW4iLCJyb290TmFtZSIsIm9yaWdpbmFsU2NoZW1hIiwicmVnaXN0ZXIiLCJzZXRJbml0aWFsVmFsdWUiLCJzZXREZWZhdWx0VmFsdWUiLCJpc0VkaXRvciIsIm11dGF0ZSIsInNjaGVtYUlmIiwidW5yZWdpc3RlciIsIm9sZFZhbHVlIiwic2NoZW1hVGhlbiIsInNjaGVtYUVsc2UiLCJpZkVkaXRvciIsIkplZGkiLCJ2YWxpZCIsInNjaGVtYURlbHRhIiwibmV3U2NoZW1hIiwic2NoZW1hVW5jaGFuZ2VkIiwibmV3SW5zdGFuY2UiLCJzY2hlbWFEZWZhdWx0IiwidHJpZ2dlcnNDaGFuZ2UiLCJ2YWxpZGF0b3IiLCJJbnN0YW5jZU11bHRpcGxlIiwiaW5zdGFuY2VzIiwiYWN0aXZlSW5zdGFuY2VDaGFuZ2VkIiwibGFzdEluZGV4Iiwic2NoZW1hcyIsIm9uU2V0VmFsdWUiLCJzY2hlbWFzT2YiLCJzY2hlbWFDb3B5IiwiX29iamVjdFNwcmVhZCIsInN3aXRjaGVyT3B0aW9uc0xhYmVsIiwic3dpdGNoZXJUaXRsZSIsInNjaGVtYUNsb25lIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYXJBdCIsImZpdHRlc3RJbmRleCIsImdldElmSW5kZXgiLCJnZXRGaXR0ZXN0SW5kZXgiLCJyZWFzc2lnblZhbHVlcyIsImxhc3RJbnN0YW5jZVZhbHVlIiwiY3VycmVudEluc3RhbmNlVmFsdWUiLCJtZXJnZWRWYWx1ZSIsImlmRXJyb3JzIiwiY2hhbXBpb25FcnJvcnMiLCJpbnN0YW5jZUVycm9ycyIsIkluc3RhbmNlTnVsbCIsIkluc3RhbmNlTnVtYmVyIiwidHlwZUlzTnVtZXJpYyIsIkluc3RhbmNlT2JqZWN0Iiwic2NoZW1hQ29udHJvbCIsInNjaGVtYVByb3BlcnRpZXMiLCJyZWZyZXNoSW5zdGFuY2VzIiwicHJvcGVydHkiLCJzY2hlbWFSZXF1aXJlZCIsIm1pc3NpbmdQcm9wZXJ0aWVzIiwicmVxdWlyZWRQcm9wZXJ0aWVzIiwiZGVhY3RpdmF0ZU5vblJlcXVpcmVkIiwiaXNOb3RSZXF1aXJlZCIsImRlbGV0ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJJbnN0YW5jZVN0cmluZyIsInZhbGlkYXRlRm9ybWF0IiwiWE1MSHR0cFJlcXVlc3QiLCJyb290IiwicmVmUGFyc2VyIiwiUmVmUGFyc2VyIiwiZGVyZWZlcmVuY2UiLCJWYWxpZGF0b3IiLCJhcHBlbmRIaWRkZW5JbnB1dCIsImNsYXNzTGlzdCIsImhpZGRlbkNvbnRyb2wiLCJoaWRkZW5JbnB1dCIsImV4cGFuZCIsInNjaGVtYU9uZU9mIiwic2NoZW1hQW55T2YiLCJfdGhpcyRyb290IiwiZ2V0SW5zdGFuY2UiLCJlZGl0b3IiLCJfdGhpczUiLCJpdGVyYXRpb25zIiwicmVmRGVmaW5pdGlvbnMiLCJ0cmF2ZXJzZSIsImFyZ3MiLCJyZWYiLCJzdGFydHNXaXRoIiwicmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiY29uc29sZSIsImVudHJpZXMiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIl9yZWYzIiwiX3JlZjQiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfcmVmOCIsInByZXZWYWx1ZSIsIl9UaGVtZSIsInVzZVRvZ2dsZUV2ZW50cyIsImdldEZpZWxkc2V0IiwiZmllbGRzZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRMZWdlbmQiLCJsZWdlbmQiLCJnZXRDYXJkIiwiY2FyZCIsImdldENhcmRIZWFkZXIiLCJoZWFkZXIiLCJnZXRDYXJkQm9keSIsImh0bWwiLCJzdHlsZSIsImNsZWFyIiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldEJ1dHRvbiIsInByb3BlcnRpZXNDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEJ0bkdyb3VwIiwiZ2V0RGVzY3JpcHRpb24iLCJ2aXN1YWxseUhpZGRlbiIsImJvZHkiLCJsYWJlbHMiLCJsYWJlbFRleHRzIiwicmFkaW9Db250cm9scyIsInJhZGlvQ29udHJvbCIsImZvcm1Hcm91cCIsImxhYmVsVGV4dCIsImdldFN3aXRjaGVyIiwicmVtb3ZlIiwieHMiLCJtZCIsIm9mZnNldE1kIiwibGluayIsInZpc3VhbGx5VmlzaWJsZSIsImdldENvbHVtbkNsYXNzIiwic2l6ZSIsImdldENvbnRyb2xTbG90IiwiY29udHJvbFNsb3QiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImdldEljb24iLCJpY29uIiwiaWNvbkNsYXNzZXMiLCJjbGFzc05hbWUiLCJnZXRFZGl0b3JDb250YWluZXIiLCJsZWdlbmRUZXh0IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0Q2hpbGRyZW5TbG90IiwiZ2V0TWVzc2FnZXNTbG90IiwiZGlzcGxheSIsImdldFByb3BlcnRpZXNBcmlhTGl2ZSIsInRvZ2dsZSIsImhhc0F0dHJpYnV0ZSIsImdldFByb3BlcnRpZXNBY3RpdmF0b3JzIiwiYnV0dG9uIiwidGV4dCIsImdldEFycmF5QnRuQWRkIiwiZ2V0QWRkUHJvcGVydHlCdXR0b24iLCJkZWxldGVJdGVtQnRuIiwibW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duSXRlbUJ0biIsImFjdGlvbnMiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwibWVzc2FnZXNJZCIsImRlc2NyaWJlZEJ5IiwiaW52YWxpZEZlZWRiYWNrVGV4dCIsImludmFsaWRGZWVkYmFja0ljb24iLCJzY2hlbWFQYXR0ZXJuUHJvcGVydGllcyIsImRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSIsInJlZ2V4cCIsImFkZGl0aW9uYWxQcm9wZXJ0eUVycm9ycyIsIm1hcCIsInN1YlNjaGVtYUVkaXRvciIsInN1YlNjaGVtYUVycm9ycyIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfY29uc3QiLCJzY2hlbWFDb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsIl9lbnVtIiwic29tZSIsIl9pZiIsInRoZW5FcnJvcnMiLCJlbHNlRXJyb3JzIiwidGhlbkVkaXRvciIsImVsc2VFZGl0b3IiLCJwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCIsInByb3BlcnRpZXNDb3VudCIsImlzTXVsdGlwbGVPZiIsInRvU3RyaW5nIiwibm90RWRpdG9yIiwibm90RXJyb3JzIiwib25lT2ZFZGl0b3IiLCJvbmVPZkVycm9ycyIsImF0dGVyblByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJlZGl0b3JFcnJvcnMiLCJpdGVtU2NoZW1hIiwic2NoZW1hUHJvcGVydHlOYW1lcyIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsIl9udWxsIiwidmFsdWVUeXBlIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2FnZXMiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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QUFBO0FBQUE7QUFHWUEsd0VBQVMsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvamVkaS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzdXBlclByb3BCYXNlID0gcmVxdWlyZShcIi4vc3VwZXJQcm9wQmFzZS5qc1wiKTtcbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfVxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IG51bGwgPT0gYXJyID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSBfaSkge1xuICAgIHZhciBfcyxcbiAgICAgIF9lLFxuICAgICAgX3gsXG4gICAgICBfcixcbiAgICAgIF9hcnIgPSBbXSxcbiAgICAgIF9uID0gITAsXG4gICAgICBfZCA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAoX3ggPSAoX2kgPSBfaS5jYWxsKGFycikpLm5leHQsIDAgPT09IGkpIHtcbiAgICAgICAgaWYgKE9iamVjdChfaSkgIT09IF9pKSByZXR1cm47XG4gICAgICAgIF9uID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoX24gPSAoX3MgPSBfeC5jYWxsKF9pKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIF9hcnIubGVuZ3RoICE9PSBpKTsgX24gPSAhMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9ICEwLCBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBudWxsICE9IF9pW1wicmV0dXJuXCJdICYmIChfciA9IF9pW1wicmV0dXJuXCJdKCksIE9iamVjdChfcikgIT09IF9yKSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc3VwZXJQcm9wQmFzZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4vYXJyYXknXG5pbXBvcnQgeyBjbGFtcCwgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQXJyYXlcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXlOYXYgZXh0ZW5kcyBFZGl0b3JBcnJheSB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aFxuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICBjb25zdCBuYXZDb2xzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Q29scycpXG4gICAgY29uc3QgbmF2U3RhY2tlZCA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdlN0YWNrZWQnKVxuICAgIGNvbnN0IG5hdlR5cGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZUeXBlJylcblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQobmF2Q29scykgPyBuYXZDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQobmF2U3RhY2tlZCkgPyBuYXZTdGFja2VkIDogZmFsc2UsXG4gICAgICB0eXBlOiBpc1NldChuYXZUeXBlKSA/IG5hdlR5cGUgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGxldCBjaGlsZFRpdGxlXG4gICAgICBjb25zdCBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdpdGVtVGVtcGxhdGUnKVxuXG4gICAgICBpZiAoc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgaTA6IGluZGV4LFxuICAgICAgICAgIGkxOiAoaW5kZXggKyAxKSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkVGl0bGUgPSBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgY2hpbGRUaXRsZSA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlICsgJyAnICsgKGluZGV4ICsgMSkgOiBjaGlsZC5nZXRLZXkoKVxuICAgICAgfVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBjbGFtcCgoaW5kZXggLSAxKSwgMCwgKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4IC0gMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGluZGV4ICsgMVxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdG9JbmRleFxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5hY3RpdmVUYWJJbmRleFxuICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcblxuICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICB0aXRsZTogY2hpbGRUaXRsZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgfSlcblxuICAgICAgdGFiLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgfSlcblxuICAgICAgdGhpcy50aGVtZS5zZXRUYWJQYW5lQXR0cmlidXRlcyhjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lciwgYWN0aXZlLCBpZClcbiAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBtb3ZlVXBCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoKHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIC0gMSkgPT09IGluZGV4KSB7XG4gICAgICAgIG1vdmVEb3duQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5TmF2XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hTWF4SXRlbXMsXG4gIGdldFNjaGVtYU1pbkl0ZW1zLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQXJyYXkgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRBcnJheUNvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuXG4gICAgY29uc3QgbWF4SXRlbXMgPSBnZXRTY2hlbWFNYXhJdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICBjb25zdCBtaW5JdGVtcyA9IGdldFNjaGVtYU1pbkl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KG1heEl0ZW1zKSAmJiBtYXhJdGVtcyA9PT0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29udHJvbC5hZGRCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5nZXRLZXkoKSlcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQucGF0aC5zcGxpdCh0aGlzLmluc3RhbmNlLmplZGkucGF0aFNlcGFyYXRvcikucG9wKCkpXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2V0KG1pbkl0ZW1zKSAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA8PSBtaW5JdGVtcykge1xuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlcbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpb1ZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW4gZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBnbHlwaGljb25zLCBib290c3RyYXBJY29ucywgZm9udEF3ZXNvbWUzLCBmb250QXdlc29tZTQsIGZvbnRBd2Vzb21lNSwgZm9udEF3ZXNvbWU2IH0gZnJvbSAnLi4vdGhlbWVzL2ljb25zL2ljb25zJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwMyBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwMydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDQgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDQnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA1IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA1J1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lcy90aGVtZSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpbnN0YW5jZSkge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBJbnN0YW5jZSBiZWluZyBjb250cm9sbGVkIGJ5IHRoaXMgZWRpdG9yLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBidWlsZCB0aGUgRWRpdG9yIHVzZXIgaW50ZXJmYWNlLlxuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBpbnRlcmZhY2UgaHRtbCBmb3IgdGhpcyBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2wgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlZCBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcblxuICAgIC8qKlxuICAgICAqIFJlYWQgb25seSBzdGF0dXMgZm9yIHRoaXMgZWRpdG9yIHVzZXIgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJlYWRPbmx5ID0gdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KClcblxuICAgIHRoaXMuaW5pdCgpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5jb2VyY2VWYWx1ZSgpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5zZXRDb250YWluZXJBdHRyaWJ1dGVzKClcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG5cbiAgICBjb25zdCBhbHdheXNTaG93RXJyb3JzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuc2hvd0Vycm9ycyA9PT0gJ2Fsd2F5cycgfHwgZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnc2hvd0Vycm9ycycpID09PSAnYWx3YXlzJ1xuXG4gICAgaWYgKGFsd2F5c1Nob3dFcnJvcnMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBlZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKCkge1xuICAgIGxldCBpY29ucyA9IG51bGxcblxuICAgIGlmIChpc1NldCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSkge1xuICAgICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5pY29uTGliKSB7XG4gICAgICAgIGNhc2UgJ2dseXBoaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gZ2x5cGhpY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2Jvb3RzdHJhcC1pY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBib290c3RyYXBJY29uc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lMyc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTQnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU0XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU1JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNic6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTZcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDMnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwMyhpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDQnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNChpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jvb3RzdHJhcDUnOlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lQm9vdHN0cmFwNShpY29ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoaWNvbnMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY29udGFpbmVyIGF0dHJpYnV0ZXMgbGlrZSBkYXRhLXBhdGggYW5kIGRhdGEtdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q29udGFpbmVyQXR0cmlidXRlcyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMuaW5zdGFuY2UucGF0aClcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkpXG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSBlZGl0b3IgY29udHJvbCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBieSBtYWtpbmcgYXNzdW1wdGlvbnMgYmFzZWQgb24gY29uc3RyYWluc1xuICAgKi9cbiAgY29lcmNlVmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUVudW0pICYmICFzY2hlbWFFbnVtLmluY2x1ZGVzKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkgJiYgaXNTZXQoc2NoZW1hRW51bVswXSkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoc2NoZW1hRW51bVswXSwgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdWkgZWxlbWVudHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB2YWxpZGF0aW9uIG1lc3NhZ2VzIGluIHRoZSBlZGl0b3IgY29udGFpbmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcnMgKGVycm9ycykge1xuICAgIGNvbnN0IG5ldmVyU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICduZXZlcicgfHwgZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnc2hvd0Vycm9ycycpID09PSAnbmV2ZXInXG5cbiAgICBpZiAobmV2ZXJTaG93RXJyb3JzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuaW5uZXJIVE1MID0gJydcblxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgZXJyb3IubWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSB0aGlzLmdldEludmFsaWRGZWVkYmFjayh7IG1lc3NhZ2UgfSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JNdWx0aXBsZSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEFsZXJ0KGNvbmZpZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JNdWx0aXBsZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlclxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3RHcmlkIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdEdyaWQgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnY29sdW1ucycpIHx8IDEyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdvZmZzZXQnKSB8fCAwXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2x1bW5zLCBvZmZzZXQpXG5cbiAgICAgICAgaWYgKGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICduZXdSb3cnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdEdyaWRcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdE5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvck9iamVjdFxuICovXG5jbGFzcyBFZGl0b3JPYmplY3ROYXYgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbENvbHMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLWNvbHMnXVxuICAgIGNvbnN0IGNvbnRyb2xTdGFja2VkID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC1zdGFja2VkJ11cbiAgICBjb25zdCBjb250cm9sVmFyaWFudCA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtdmFyaWFudCddXG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGlzU2V0KGNvbnRyb2xDb2xzKSA/IGNvbnRyb2xDb2xzIDogM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogaXNTZXQoY29udHJvbFN0YWNrZWQpID8gY29udHJvbFN0YWNrZWQgOiBmYWxzZSxcbiAgICAgIHR5cGU6IGlzU2V0KGNvbnRyb2xWYXJpYW50KSA/IGNvbnRyb2xWYXJpYW50IDogJ3BpbHMnXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgICB0aXRsZTogaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZC5nZXRLZXkoKSxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgICAgfSlcblxuICAgICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuXG4gICAgICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQodGFiLmxpc3QpXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3ROYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQge1xuICBlcXVhbCxcbiAgaGFzT3duLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIHBhdGhUb0F0dHJpYnV0ZVxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yT2JqZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLnByb3BlcnR5QWN0aXZhdG9ycyA9IHt9XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9ucyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hLm9wdGlvbnMgfHwge31cbiAgICBsZXQgYWRkUHJvcGVydHkgPSB0cnVlXG4gICAgY29uc3QgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICBhZGRQcm9wZXJ0eSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IGVkaXRhYmxlUHJvcGVydGllcyA9IGZhbHNlXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzKSkge1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYU9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzKSkge1xuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzID0gc2NoZW1hT3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXNcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVkaXRhYmxlUHJvcGVydGllcyxcbiAgICAgIGFkZFByb3BlcnR5OiBhZGRQcm9wZXJ0eVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVFbXB0eSA9IGtleS5sZW5ndGggPT09IDBcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZUVtcHR5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wZXJ0eUV4aXN0ID0gaXNTZXQodGhpcy5pbnN0YW5jZS52YWx1ZVtrZXldKVxuXG4gICAgICBpZiAocHJvcGVydHlFeGlzdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHNjaGVtYSA9IHt9XG5cbiAgICAgIGNvbnN0IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICAgIGlmIChpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmluc3RhbmNlLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmluc3RhbmNlLnZhbHVlKVxuICAgICAgdGhpcy5jb250cm9sLmFkZFByb3BlcnR5Q29udHJvbC5pbnB1dC52YWx1ZSA9ICcnXG5cbiAgICAgIGNvbnN0IGFyaWFMaXZlID0gdGhpcy5jb250cm9sLmFyaWFMaXZlXG4gICAgICBhcmlhTGl2ZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICBjb25zdCBsYWJlbCA9IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDoga2V5XG4gICAgICBjb25zdCBhcmlhTGl2ZU1lc3NhZ2UgPSB0aGlzLnRoZW1lLmdldEFyaWFMaXZlTWVzc2FnZSgpXG4gICAgICBhcmlhTGl2ZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBsYWJlbCArICcgZmllbGQgd2FzIGFkZGVkIHRvIHRoZSBmb3JtJ1xuICAgICAgYXJpYUxpdmUuYXBwZW5kQ2hpbGQoYXJpYUxpdmVNZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoY29uZmlnKVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZEtleSA9IGNoaWxkLmdldEtleSgpXG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGRLZXkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGRLZXkpXG4gICAgICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIWlzUmVxdWlyZWQgJiYgIWlzRGVwZW5kZW50UmVxdWlyZWRcbiAgICAgICAgY29uc3QgYWN0aXZhdG9ySW5Eb20gPSB0aGlzLnByb3BlcnR5QWN0aXZhdG9yc1tjaGlsZEtleV1cbiAgICAgICAgY29uc3QgYXJpYUxpdmUgPSB0aGlzLmNvbnRyb2wuYXJpYUxpdmVcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpICsgJy1hY3RpdmF0b3InXG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgOiBjaGlsZEtleVxuXG4gICAgICAgIGlmIChub3RSZXF1aXJlZCAmJiAhYWN0aXZhdG9ySW5Eb20pIHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hDb250cm9sLmlucHV0XG4gICAgICAgICAgdGhpcy5wcm9wZXJ0eUFjdGl2YXRvcnNbY2hpbGRLZXldID0gY2hlY2tib3hcblxuICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGFyaWFMaXZlLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICBjb25zdCBhcmlhTGl2ZU1lc3NhZ2UgPSB0aGlzLnRoZW1lLmdldEFyaWFMaXZlTWVzc2FnZSgpXG5cbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgICAgICAgICAgYXJpYUxpdmVNZXNzYWdlLnRleHRDb250ZW50ID0gbGFiZWwgKyAnIGZpZWxkIHdhcyBhZGRlZCB0byB0aGUgZm9ybSdcbiAgICAgICAgICAgICAgYXJpYUxpdmUuYXBwZW5kQ2hpbGQoYXJpYUxpdmVNZXNzYWdlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICAgIGFyaWFMaXZlTWVzc2FnZS50ZXh0Q29udGVudCA9IGxhYmVsICsgJyBmaWVsZCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBmb3JtJ1xuICAgICAgICAgICAgICBhcmlhTGl2ZS5hcHBlbmRDaGlsZChhcmlhTGl2ZU1lc3NhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5hcHBlbmRDaGlsZChjaGVja2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnByb3BlcnR5QWN0aXZhdG9yc1tjaGlsZEtleV1cbiAgICAgICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkS2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgaWYgKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLnJlZnJlc2hQcm9wZXJ0aWVzU2xvdCgpXG4gICAgdGhpcy5yZWZyZXNoRWRpdG9ycygpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0XG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1SYWRpbyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRSYWRpb3NDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAocmFkaW8udmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ0VudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JTdHJpbmcge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ0VudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdUZXh0YXJlYSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdUZXh0YXJlYSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFRleHRhcmVhQ29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdUZXh0YXJlYVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmcgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnaGlkZGVuJywgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbnVtYmVyJywgJ21vbnRoJywgJ3Bhc3N3b3JkJywgJ3NlYXJjaCcsICd0aW1lJywgJ3RlbCcsICd0ZXh0JywgJ3RleHRhcmVhJywgJ3VybCcsICd3ZWVrJ11cbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHNjaGVtYUZvcm1hdCkgPyBzY2hlbWFGb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IHNjaGVtYUZvcm1hdCA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcblxuICAgIC8vIGZpeCBjb2xvciBwaWNrZXIgYnVnXG4gICAgaWYgKHNjaGVtYUZvcm1hdCA9PT0gJ2NvbG9yJyAmJiB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSgnIzAwMDAwMCcsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGFuIEV2ZW50RW1pdHRlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoaXMgZXZlbnQgaXMgZW1pdHRlZFxuICAgKi9cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGEgbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBiZSBlbWl0dGVkXG4gICAqL1xuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wcm9wZXJ0eU5hbWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLnByb3BlcnR5TmFtZXMpID8gc2NoZW1hLnByb3BlcnR5TmFtZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFsbE9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFsbE9mKSA/IHNjaGVtYS5hbGxPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQW55T2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYW55T2YpID8gc2NoZW1hLmFueU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb25zdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuY29uc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnRhaW5zIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuY29udGFpbnMpIHx8IGlzQm9vbGVhbihzY2hlbWEuY29udGFpbnMpKSA/IHNjaGVtYS5jb250YWlucyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVmYXVsdCAoc2NoZW1hKSB7XG4gIHJldHVybiBzY2hlbWEuZGVmYXVsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkKSA/IHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50U2NoZW1hcykgPyBzY2hlbWEuZGVwZW5kZW50U2NoZW1hcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRGVzY3JpcHRpb24gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmRlc2NyaXB0aW9uKSA/IHNjaGVtYS5kZXNjcmlwdGlvbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRWxzZSAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmVsc2UpIHx8IGlzQm9vbGVhbihzY2hlbWEuZWxzZSkpID8gc2NoZW1hLmVsc2UgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVudW0gKHNjaGVtYSkge1xuICBpZiAoaXNBcnJheShzY2hlbWEuZW51bSkgJiYgc2NoZW1hLmVudW0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBzY2hlbWEuZW51bVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkgPyBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRm9ybWF0IChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5mb3JtYXQpID8gc2NoZW1hLmZvcm1hdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSWYgKHNjaGVtYSkge1xuICBpZiAoaXNPYmplY3Qoc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW4oc2NoZW1hLmlmKSkge1xuICAgIHJldHVybiBzY2hlbWEuaWZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5pdGVtcykgfHwgaXNCb29sZWFuKHNjaGVtYS5pdGVtcykgPyBzY2hlbWEuaXRlbXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1heGltdW0pID8gc2NoZW1hLm1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heENvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4Q29udGFpbnMpICYmIHNjaGVtYS5tYXhDb250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhDb250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4SXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhJdGVtcykgJiYgc2NoZW1hLm1heEl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heEl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhMZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhMZW5ndGgpICYmIHNjaGVtYS5tYXhMZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4UHJvcGVydGllcykpIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heFByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLm1pbmltdW0pID8gc2NoZW1hLm1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkNvbnRhaW5zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluQ29udGFpbnMpICYmIHNjaGVtYS5taW5Db250YWlucyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Db250YWluc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluSXRlbXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5JdGVtcykgJiYgc2NoZW1hLm1pbkl0ZW1zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5MZW5ndGggKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5MZW5ndGgpICYmIHNjaGVtYS5taW5MZW5ndGggPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluTGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluUHJvcGVydGllcykgJiYgc2NoZW1hLm1pblByb3BlcnRpZXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluUHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTXVsdGlwbGVPZiAoc2NoZW1hKSB7XG4gIGlmIChpc051bWJlcihzY2hlbWEubXVsdGlwbGVPZikgJiYgc2NoZW1hLm11bHRpcGxlT2YgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubXVsdGlwbGVPZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTm90IChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEubm90KSB8fCBpc0Jvb2xlYW4oc2NoZW1hLm5vdCkpID8gc2NoZW1hLm5vdCA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT3B0aW9uIChzY2hlbWEsIG9wdGlvbikge1xuICByZXR1cm4gKHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zW29wdGlvbl0pID8gc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUGF0dGVybiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEucGF0dGVybikgPyBzY2hlbWEucGF0dGVybiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSA/IHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJlZml4SXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEucHJlZml4SXRlbXMpID8gc2NoZW1hLnByZWZpeEl0ZW1zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFQcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wcm9wZXJ0aWVzKSA/IHNjaGVtYS5wcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFSZWFkT25seSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0Jvb2xlYW4oc2NoZW1hLnJlYWRPbmx5KSA/IHNjaGVtYS5yZWFkT25seSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVxdWlyZWQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gWy4uLm5ldyBTZXQoc2NoZW1hLnJlcXVpcmVkKV0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVRoZW4gKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS50aGVuKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLnRoZW4pKSA/IHNjaGVtYS50aGVuIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaXRsZSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEudGl0bGUpID8gc2NoZW1hLnRpdGxlIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUeXBlIChzY2hlbWEpIHtcbiAgaWYgKGlzU3RyaW5nKHNjaGVtYS50eXBlKSB8fCBpc0FycmF5KHNjaGVtYS50eXBlKSkge1xuICAgIHJldHVybiBzY2hlbWEudHlwZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hT25lT2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEub25lT2YpID8gc2NoZW1hLm9uZU9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFVbmlxdWVJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0Jvb2xlYW4oc2NoZW1hLnVuaXF1ZUl0ZW1zKSA/IHNjaGVtYS51bmlxdWVJdGVtcyA6IHVuZGVmaW5lZFxufVxuIiwiLyoqXG4gKiBVdGlscy5cbiAqIEBtb2R1bGUgdXRpbHNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY3VsYXJSZXBsYWNlciAoKSB7XG4gIGNvbnN0IGFuY2VzdG9ycyA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICAvLyBgdGhpc2AgaXMgdGhlIG9iamVjdCB0aGF0IHZhbHVlIGlzIGNvbnRhaW5lZCBpbixcbiAgICAvLyBpLmUuLCBpdHMgZGlyZWN0IHBhcmVudC5cbiAgICB3aGlsZSAoYW5jZXN0b3JzLmxlbmd0aCA+IDAgJiYgYW5jZXN0b3JzLmF0KC0xKSAhPT0gdGhpcykge1xuICAgICAgYW5jZXN0b3JzLnBvcCgpXG4gICAgfVxuICAgIGlmIChhbmNlc3RvcnMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nXG4gICAgfVxuICAgIGFuY2VzdG9ycy5wdXNoKHZhbHVlKVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNsb25lIG9mIGEgdGhpbmdcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gYmUgY2xvbmVkXG4gKiBAcmV0dXJuIHsqfSBUaGUgY2xvbmUgb2YgdGhlIHRoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAodGhpbmcpIHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZywgZ2V0Q2lyY3VsYXJSZXBsYWNlcigpKSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGVzY2FwZWQgcmVnZXhwXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIHJlZ2V4cFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpIC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG4vKipcbiAqIE11bHRpcGxlIHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaW5kIC0gVGhlIHBhcnQgdG8gYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlIC0gVGhlIHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbCAoc3RyLCBmaW5kLCByZXBsYWNlKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChmaW5kKSwgJ2cnKSwgcmVwbGFjZSlcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEganNvbiBwYXRoIHRvIGJlIHVzZWQgYXMgYW4gaHRtbCBhdHRyaWJ1dGUgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIGpzb24gcGF0aFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aFRvQXR0cmlidXRlIChwYXRoKSB7XG4gIHJldHVybiByZXBsYWNlQWxsKHJlcGxhY2VBbGwocGF0aCwgJyMnLCAncm9vdCcpLCAnLycsICctJylcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIFRoZSBwcm9wZXJ0eVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093biAob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxufVxuXG4vKipcbiAqIFNvcnQgb2JqZWN0IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydE9iamVjdCAob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwge30pXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIHBhc3NlZCBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbCAoYSwgYikge1xuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBhID0gc29ydE9iamVjdChhKVxuICAgIGIgPSBzb3J0T2JqZWN0KGIpXG4gIH1cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGRpZmZlcmVudFxuICogQHBhcmFtIHsqfSBhIC0gVmFsdWUgQVxuICogQHBhcmFtIHsqfSBiIC0gVmFsdWUgQlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVudCAoYSwgYikge1xuICByZXR1cm4gIWVxdWFsKGEsIGIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgbnVsbFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZXQgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RTZXQgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBudW1iZXJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlciAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBpbnRlZ2VyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyICh2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09PSBNYXRoLmZsb29yKHZhbHVlKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgc3RyaW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBib29sZWFuXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBhcnJheVxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGFuIG9iamVjdFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0ICh2YWx1ZSkge1xuICByZXR1cm4gIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0eXBlIG9mIGEgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHR5cGUgb2YgdGhlIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlICh2YWx1ZSkge1xuICBsZXQgdHlwZSA9ICdhbnknXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHR5cGUgPSBpc0ludGVnZXIodmFsdWUpID8gJ2ludGVnZXInIDogJ251bWJlcidcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ3N0cmluZydcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgdHlwZSA9ICdib29sZWFuJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSdcbiAgfSBlbHNlIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdudWxsJ1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnb2JqZWN0J1xuICB9XG5cbiAgcmV0dXJuIHR5cGVcbn1cblxuLyoqXG4gKiBNZXJnZXMgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdFtdfSBzb3VyY2VzIC0gT2JqZWN0cyB0byBiZSBtZXJnZWQgaW50byB0aGUgdGFyZ2V0IG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBUaGUgbWVyZ2VkIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwICh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldFxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG4gICAgICAgICAgICBba2V5XToge31cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5IChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBjb25zdCBjb3B5ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgY29weVtpXSA9IGRlZXBDb3B5KG9ialtpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNvcHlcbiAgfVxuXG4gIGNvbnN0IGNvcHkgPSB7fVxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duKG9iaiwga2V5KSkge1xuICAgICAgY29weVtrZXldID0gZGVlcENvcHkob2JqW2tleV0pXG4gICAgfVxuICB9XG4gIHJldHVybiBjb3B5XG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHMgYnV0IG9ubHkgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdHMgaW4gYm90aHMgb2JqZWN0c1xuICogaWYgdGhleSBhcmUgdGhlIHNhbWUgdHlwZSBvZiB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iajEgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gb2JqMiAtIE9iamVjdHMgd2hvJ3MgcHJvcGVydGllcyBhcmUgdGhlIG92ZXJyaWRlc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3ZlcndyaXR0ZW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMgKG9iajEsIG9iajIpIHtcbiAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmoxKSB7XG4gICAgICBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gdHlwZW9mIG9iajJba2V5XSkge1xuICAgICAgICBvYmoxW2tleV0gPSBvYmoyW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG9iajFcbn1cblxuLyoqXG4gKiBHZXQgc29tZSB2YWx1ZSBieSB0cmF2ZXJzaW5nIHRoZSBkYXRhIHVzaW5nIEpTT04gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gSlNPTiBwYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeUpTT05QYXRoIChkYXRhLCBwYXRoKSB7XG4gIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KCcuJykgLy8gU3BsaXQgdGhlIHBhdGggaW50byBpbmRpdmlkdWFsIGtleXNcblxuICBsZXQgdmFsdWUgPSBkYXRhXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgL15cXGQrJC8udGVzdChrZXkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSlcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVbaW5kZXhdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEluZGV4IGlzIG91dCBvZiBib3VuZHMsIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc093bih2YWx1ZSwga2V5KSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gS2V5IGRvZXNuJ3QgZXhpc3QsIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBDb21waWxlcyBhIHRlbXBsYXRlIGJ5IHNlYXJjaCBhbmQgcmVwbGFjZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBXaGVyZSB0ZW1wbGF0ZSBkYXRhIGxpdmVzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUgKHRlbXBsYXRlLCBkYXRhKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC97eyguKj8pfX0vZywgKG1hdGNoKSA9PiB7XG4gICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgY29uc3QgcGF0aCA9IG1hdGNoLnNwbGl0KC97e3x9fS8pWzFdXG4gICAgcmV0dXJuIGdldFZhbHVlQnlKU09OUGF0aChkYXRhLCBwYXRoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAgKG51bWJlciwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obnVtYmVyLCBtYXgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSAoYXJyKSB7XG4gIGNvbnN0IHVuaXF1ZU9iamVjdHMgPSBbXVxuICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgU2V0KClcblxuICBmb3IgKGNvbnN0IG9iaiBvZiBhcnIpIHtcbiAgICBjb25zdCBvYmpTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgaWYgKCF1bmlxdWVWYWx1ZXMuaGFzKG9ialN0cmluZykpIHtcbiAgICAgIHVuaXF1ZVZhbHVlcy5hZGQob2JqU3RyaW5nKVxuICAgICAgdW5pcXVlT2JqZWN0cy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pcXVlT2JqZWN0c1xufVxuIiwiLyoqXG4gKiBTaW1wbGUgdHJhbnNsYXRpb24gbW9kdWxlLlxuICogQG1vZHVsZSBpMThuXG4gKi9cblxuLyoqXG4gKiBMb2NhbGUgbWVzc2FnZXNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBpMThuID0ge1xuICBlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzOiAnSGFzIGFkZGl0aW9uYWwgcHJvcGVydHkgXCJ7eyBwcm9wZXJ0eSB9fVwiIGJ1dCBubyBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYXJlIGFsbG93ZWQuJyxcbiAgZXJyb3JBbnlPZjogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuJyxcbiAgZXJyb3JDb25zdDogJ011c3QgaGF2ZSB2YWx1ZSBvZjoge3sgY29uc3QgfX0uJyxcbiAgZXJyb3JDb250YWluczogJ011c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yRGVwZW5kZW50UmVxdWlyZWQ6ICdNdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IGRlcGVuZGVudFJlcXVpcmVkIH19LicsXG4gIGVycm9yRW51bTogJ011c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczoge3sgZW51bSB9fS4nLFxuICBlcnJvckV4Y2x1c2l2ZU1heGltdW06ICdNdXN0IGJlIGxlc3MgdGhhbiB7eyBleGNsdXNpdmVNYXhpbXVtIH19LicsXG4gIGVycm9yRXhjbHVzaXZlTWluaW11bTogJ011c3QgYmUgZ3JlYXRlciB0aGFuIHt7IGV4Y2x1c2l2ZU1pbmltdW0gfX0uJyxcbiAgZXJyb3JGb3JtYXQ6ICdNdXN0IGJlIGEgdmFsaWQge3sgZm9ybWF0IH19LicsXG4gIGVycm9ySXRlbXM6ICdNdXN0IGhhdmUgaXRlbXMgdGhhdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JNYXhpbXVtOiAnTXVzdCBiZSBhdCBtb3N0IHt7IG1heGltdW0gfX0uJyxcbiAgZXJyb3JNYXhJdGVtczogJ011c3QgaGF2ZSBhdCBtb3N0IHt7IG1heEl0ZW1zIH19IGl0ZW1zLicsXG4gIGVycm9yTWF4TGVuZ3RoOiAnTXVzdCBiZSBhdCBtb3N0IHt7IG1heExlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgZXJyb3JNYXhQcm9wZXJ0aWVzOiAnTXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4UHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzLicsXG4gIGVycm9yTWF4Q29udGFpbnM6ICdNdXN0IGNvbnRhaW4gYXQgbW9zdCB7eyBtYXhDb250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fS4nLFxuICBlcnJvck1pbkNvbnRhaW5zOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IHt7IG1pbkNvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19LicsXG4gIGVycm9yTWluaW11bTogJ011c3QgYmUgYXQgbGVhc3Qge3sgbWluaW11bSB9fS4nLFxuICBlcnJvck1pbkl0ZW1zOiAnTXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pbkl0ZW1zIH19IGl0ZW1zLicsXG4gIGVycm9yTWluTGVuZ3RoOiAnTXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5MZW5ndGggfX0gY2hhcmFjdGVycyBsb25nLicsXG4gIGVycm9yTWluUHJvcGVydGllczogJ011c3QgaGF2ZSBhdCBsZWFzdCB7eyBtaW5Qcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMuJyxcbiAgZXJyb3JNdWx0aXBsZU9mOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiB7eyBtdWx0aXBsZU9mIH19LicsXG4gIGVycm9yTm90OiAnTXVzdCBub3QgdmFsaWRhdGUgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hLicsXG4gIGVycm9yT25lT2Y6ICdNdXN0IHZhbGlkYXRlIGFnYWluc3QgZXhhY3RseSBvbmUgb2YgdGhlIHByb3ZpZGVkIHNjaGVtYXMuIEl0IGN1cnJlbnRseSB2YWxpZGF0ZXMgYWdhaW5zdCB7eyBjb3VudGVyIH19IG9mIHRoZSBzY2hlbWFzLicsXG4gIGVycm9yUGF0dGVybjogJ011c3QgbWF0Y2ggdGhlIHBhdHRlcm46IFwie3sgcGF0dGVybiB9fVwiLicsXG4gIGVycm9yUHJlZml4SXRlbXM6ICdJdGVtIHt7IGluZGV4IH19IGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgZXJyb3JQcm9wZXJ0eU5hbWVzOiAnUHJvcGVydHkgbmFtZSBcInt7IHByb3BlcnR5TmFtZSB9fVwiIGZhaWxzIHZhbGlkYXRpb24uJyxcbiAgZXJyb3JSZXF1aXJlZDogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgcmVxdWlyZWQgfX0uJyxcbiAgZXJyb3JUeXBlOiAnTXVzdCBiZSBvZiB0eXBlIHt7IHR5cGUgfX0uJyxcbiAgZXJyb3JVbmlxdWVJdGVtczogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMuJ1xufVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBpc1NldCwgY2xvbmUsIGlzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEVkaXRvckFycmF5IGZyb20gJy4uL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgRWRpdG9yQXJyYXlOYXYgZnJvbSAnLi4vZWRpdG9ycy9hcnJheS1uYXYnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcywgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQXJyYXkgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JyAmJiBzY2hlbWFGb3JtYXQgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXkodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGlsZHJlbigpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1JbnN0YW5jZSAodmFsdWUpIHtcbiAgICBsZXQgc2NoZW1hXG4gICAgY29uc3QgaXRlbXNDb3VudCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgY29uc3Qgc2NoZW1hSXRlbXMgPSBnZXRTY2hlbWFJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFQcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIHNjaGVtYSA9IGlzU2V0KHNjaGVtYUl0ZW1zKSA/IHNjaGVtYUl0ZW1zIDoge31cblxuICAgIGNvbnN0IGhhc1ByZWZpeEl0ZW1zU2NoZW1hID0gaXNTZXQoc2NoZW1hUHJlZml4SXRlbXMpICYmIGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdKVxuXG4gICAgaWYgKGhhc1ByZWZpeEl0ZW1zU2NoZW1hKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBpdGVtc0NvdW50LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBjaGlsZC5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZSgpXG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gW11cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIHZhbHVlLnB1c2goY2hpbGQuZ2V0VmFsdWUoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hDaGlsZHJlbiAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaCgoaXRlbVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKGl0ZW1WYWx1ZSlcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQXJyYXlcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tcmFkaW8nXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi4vZWRpdG9ycy9ib29sZWFuJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlQm9vbGVhbiBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW5FbnVtUmFkaW8odGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWFGb3JtYXQgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUJvb2xlYW5cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7XG4gIGNsb25lLCBlcXVhbCxcbiAgaXNTZXQsIG1lcmdlRGVlcCwgbm90U2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5XG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZWZhdWx0LFxuICBnZXRTY2hlbWFFbHNlLFxuICBnZXRTY2hlbWFJZixcbiAgZ2V0U2NoZW1hUmVhZE9ubHksXG4gIGdldFNjaGVtYVRoZW4sXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjaGVtYSBwYXRoIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm9yaWdpbmFsU2NoZW1hID0gY29uZmlnLnNjaGVtYVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gaXNTZXQoY29uZmlnLnZhbHVlKSA/IGNvbmZpZy52YWx1ZSA6IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogaW4gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiAodGhpcy5qZWRpPy5vcHRpb25zPy5pc0VkaXRvcikge1xuICAgICAgLy8gICB0aGlzLm11dGF0ZSgpXG4gICAgICAvLyB9XG4gICAgfSlcbiAgfVxuXG4gIG11dGF0ZSAoKSB7XG4gICAgaWYgKCFpc1NldCh0aGlzLnNjaGVtYSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hSWYpKSB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXIoKVxuICAgICAgY29uc3QgamVkaSA9IHRoaXMuamVkaVxuICAgICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aFxuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMudWkuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgY29uc3Qgb3JpZ2luYWxTY2hlbWEgPSB0aGlzLm9yaWdpbmFsU2NoZW1hXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IHNjaGVtYVRoZW4gPSBnZXRTY2hlbWFUaGVuKHRoaXMuc2NoZW1hKVxuICAgICAgY29uc3Qgc2NoZW1hRWxzZSA9IGdldFNjaGVtYUVsc2UodGhpcy5zY2hlbWEpXG4gICAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFJZiwgZGF0YTogb2xkVmFsdWUgfSlcbiAgICAgIGNvbnN0IHZhbGlkID0gaWZFZGl0b3IuZ2V0RXJyb3JzKCkubGVuZ3RoID09PSAwXG4gICAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgY29uc3Qgc2NoZW1hRGVsdGEgPSB2YWxpZCA/IHNjaGVtYVRoZW4gOiBzY2hlbWFFbHNlXG4gICAgICBjb25zdCBuZXdTY2hlbWEgPSBtZXJnZURlZXAoe30sIG9yaWdpbmFsU2NoZW1hLCBzY2hlbWFEZWx0YSlcbiAgICAgIGNvbnN0IHNjaGVtYVVuY2hhbmdlZCA9IGVxdWFsKG9yaWdpbmFsU2NoZW1hLCBuZXdTY2hlbWEpXG5cbiAgICAgIGlmIChzY2hlbWFVbmNoYW5nZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVzdHJveSgpXG5cbiAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIGplZGk6IGplZGksXG4gICAgICAgIHNjaGVtYTogbmV3U2NoZW1hLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgfSlcblxuICAgICAgbmV3SW5zdGFuY2Uuc2V0VmFsdWUobWVyZ2VEZWVwKG5ld0luc3RhbmNlLmdldFZhbHVlKCksIG9sZFZhbHVlKSwgZmFsc2UpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbnN0YW5jZS51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGlmIChub3RTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgIGxldCB2YWx1ZVxuICAgICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFEZWZhdWx0ID0gZ2V0U2NoZW1hRGVmYXVsdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFEZWZhdWx0KSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShzY2hlbWFEZWZhdWx0LCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuXG4gICAgcmV0dXJuIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkoZXJyb3JzKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGluc3RhbmNlIGlzIHJlYWQgb25seVxuICAgKi9cbiAgaXNSZWFkT25seSAoKSB7XG4gICAgbGV0IHJlYWRPbmx5ID0gZmFsc2VcblxuICAgIGlmIChnZXRTY2hlbWFSZWFkT25seSh0aGlzLnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiBnZXRTY2hlbWFSZWFkT25seSh0aGlzLnBhcmVudC5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck11bHRpcGxlIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzLCBtZXJnZURlZXAsIGRlZXBDb3B5XG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VNdWx0aXBsZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTXVsdGlwbGUodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpIHx8IGlzU2V0KGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgPyBnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkgOiBnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSlcbiAgICAgIGNvbnN0IHNjaGVtYUNvcHkgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSlcbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydhbnlPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb25lT2YnXVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLnNjaGVtYUNvcHksIC4uLnNjaGVtYSB9XG4gICAgICAgIGxldCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9ICdPcHRpb24tJyArIChpbmRleCArIDEpXG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJUaXRsZSA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJylcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShzY2hlbWEpXG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYVRpdGxlKSkge1xuICAgICAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzd2l0Y2hlclRpdGxlKSkge1xuICAgICAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc3dpdGNoZXJUaXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShzY2hlbWFUeXBlKSkge1xuICAgICAgc2NoZW1hVHlwZS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IG1lcmdlRGVlcCh0aGlzLnNjaGVtYSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgIXNjaGVtYVR5cGUpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gZGVlcENvcHkodGhpcy5zY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ09iamVjdCcsICdBcnJheScsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgICB2YWx1ZTogY2xvbmUodGhpcy52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlKSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLnZhbHVlLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSBpc1NldCh0aGlzLmlmKSA/IHRoaXMuZ2V0SWZJbmRleCh0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2luZGV4XVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdGhpcy52YWx1ZSkgfHwgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gZmFsc2VcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlYXNzaWduVmFsdWVzICgpIHtcbiAgICBjb25zdCBsYXN0SW5zdGFuY2VWYWx1ZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMubGFzdEluZGV4XS5nZXRWYWx1ZSgpXG4gICAgY29uc3QgY3VycmVudEluc3RhbmNlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc09iamVjdChsYXN0SW5zdGFuY2VWYWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudEluc3RhbmNlVmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXJnZWRWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50SW5zdGFuY2VWYWx1ZSwgbGFzdEluc3RhbmNlVmFsdWUpXG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKG1lcmdlZFZhbHVlLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBnZXRJZkluZGV4ICh2YWx1ZSkge1xuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHRoaXMuaWYsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuICAgIHJldHVybiBpZkVycm9ycy5sZW5ndGggPT09IDAgPyAwIDogMVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTXVsdGlwbGVcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bGwgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bGwgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bGwodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bGxcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdW1iZXIgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgdHlwZUlzTnVtZXJpYyA9IHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuXG4gICAgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bWJlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGlzT2JqZWN0LCBoYXNPd24sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFDb250cm9sID0gdGhpcy5zY2hlbWFbJ3gtY29udHJvbCddXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hQ29udHJvbCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0TmF2KHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGdldFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hUHJvcGVydGllcykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYVByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzY2hlbWFQcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkXG4gICAqL1xuICBpc1JlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHNjaGVtYVJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICByZXR1cm4gaXNTZXQoc2NoZW1hUmVxdWlyZWQpICYmIHNjaGVtYVJlcXVpcmVkLmluY2x1ZGVzKHByb3BlcnR5KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgZGVwZW5kZW50IHJlcXVpcmVkXG4gICAqL1xuICBpc0RlcGVuZGVudFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgICBsZXQgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuXG4gICAgICBPYmplY3Qua2V5cyhkZXBlbmRlbnRSZXF1aXJlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlW2tleV0pKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wZXJ0aWVzID0gZGVwZW5kZW50UmVxdWlyZWRba2V5XVxuXG4gICAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNPd24odGhpcy52YWx1ZSwgcHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1pc3NpbmdQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQ2hpbGQgKHNjaGVtYSwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgdGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IgKyBrZXksXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0YW5jZSlcbiAgICB0aGlzLnZhbHVlW2tleV0gPSBpbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBjb25zdCBkZWFjdGl2YXRlTm9uUmVxdWlyZWQgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5zY2hlbWEsICdkZWFjdGl2YXRlTm9uUmVxdWlyZWQnKVxuXG4gICAgaWYgKHRoaXMuaXNOb3RSZXF1aXJlZChrZXkpICYmIGlzU2V0KGRlYWN0aXZhdGVOb25SZXF1aXJlZCkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGlzTm90UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVxdWlyZWQocHJvcGVydHkpICYmICF0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQocHJvcGVydHkpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHt9LCBrZXksIHZhbHVlW2tleV0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgSW5zdGFuY2VNdWx0aXBsZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBJbnN0YW5jZUJvb2xlYW4gZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBJbnN0YW5jZU9iamVjdCBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgSW5zdGFuY2VBcnJheSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBJbnN0YW5jZVN0cmluZyBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgSW5zdGFuY2VOdW1iZXIgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IEluc3RhbmNlTnVsbCBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXIvcmVmLXBhcnNlcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBub3RTZXQgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSmVkaSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgSmVkaSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgSmVkaSBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdHxib29sZWFufSBvcHRpb25zLnNjaGVtYSAtIEEgSlNPTiBzY2hlbWFcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmlzRWRpdG9yIC0gR2VuZXJhdGVzIFVJIGNvbnRyb2xzIHRvIGVkaXQgdGhlIEpTT04gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNvbnRhaW5lciAtIFdoZXJlIHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRoZW1lIC0gSG93IHRoZSBVSSBjb250cm9scyB3aWxsIGJlIHJlbmRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgaXNFZGl0b3I6IGZhbHNlLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIHNjaGVtYToge30sXG4gICAgICBzaG93RXJyb3JzOiAnY2hhbmdlJyxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkYXRlRm9ybWF0OiBmYWxzZSxcbiAgICAgIFhNTEh0dHBSZXF1ZXN0OiB1bmRlZmluZWRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoeyBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0IH0pXG4gICAgdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoeyByZWZQYXJzZXI6IHRoaXMucmVmUGFyc2VyLCB2YWxpZGF0ZUZvcm1hdDogdGhpcy5vcHRpb25zLnZhbGlkYXRlRm9ybWF0IH0pXG5cbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMub3B0aW9ucy5zY2hlbWFcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHRoaXMub3B0aW9ucy5kYXRhKSkge1xuICAgICAgdGhpcy5yb290LnNldFZhbHVlKHRoaXMub3B0aW9ucy5kYXRhLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lclxuICAgICAgdGhpcy5hcHBlbmRIaWRkZW5JbnB1dCgpXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXJlYWR5JylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3Qub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBoaWRkZW4gaW5wdXQgdG8gdGhlIHJvb3QgY29udGFpbmVyIHdob3NlIHZhbHVlIHdpbGwgYmUgdGhlIHZhbHVlXG4gICAqIG9mIHRoZSByb290IGluc3RhbmNlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwZW5kSGlkZGVuSW5wdXQgKCkge1xuICAgIGNvbnN0IGhpZGRlbkNvbnRyb2wgPSB0aGlzLnJvb3QudWkudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgaWQ6ICdqZWRpLWhpZGRlbi1pbnB1dCdcbiAgICB9KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQgPSBoaWRkZW5Db250cm9sLmlucHV0XG5cbiAgICB0aGlzLmhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdqc29uJylcbiAgICB0aGlzLmhpZGRlbklucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbklucHV0KVxuICAgIHRoaXMuaGlkZGVuSW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpXG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlciAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXSA9IGluc3RhbmNlXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVucmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGpzb24gaW5zdGFuY2UgYW5kIGRlcmVmZXJlbmNlIHNjaGVtYSBvbiB0aGUgZmx5IGlmIG5lZWRlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZUluc3RhbmNlIChjb25maWcpIHtcbiAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZXhwYW5kKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUFueU9mKSB8fCBpc1NldChzY2hlbWFPbmVPZikgfHwgc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgaXNBcnJheShzY2hlbWFUeXBlKSB8fCBub3RTZXQoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VNdWx0aXBsZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlT2JqZWN0KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUFycmF5KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VTdHJpbmcoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdW1iZXIoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VCb29sZWFuKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldFxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWxsT2YsXG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hUHJlZml4SXRlbXNcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJlZlBhcnNlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgMVxuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5yZWZEZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmtleSA9PT0gJyRyZWYnKSB7XG4gICAgICAgICAgdGhpcy5yZWZEZWZpbml0aW9uc1thcmdzLnZhbHVlXSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkZWZpbmUgZXh0ZXJuYWwgcmVmc1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVmRGVmaW5pdGlvbnMpLmZvckVhY2goKHJlZikgPT4ge1xuICAgICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5yZWZEZWZpbml0aW9uc1tyZWZdID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gZGVmaW5lIGludGVybmFsIHJlZnNcbiAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMucmVmRGVmaW5pdGlvbnNbYXJncy5wYXRoXSkpIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZXhwYW5kIChzY2hlbWEpIHtcbiAgICBpZiAoaXNTZXQoc2NoZW1hWyckcmVmJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZEZWZpbml0aW9uc1tzY2hlbWFbJyRyZWYnXV1cbiAgICB9XG5cbiAgICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcbiAgICBjb25zdCBvbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcbiAgICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcbiAgICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICAgIGlmIChpc1NldChhbnlPZikpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGFueU9mKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLmFueU9mW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMob25lT2YpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEub25lT2Zba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhhbGxPZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5hbGxPZltrZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByZWZpeEl0ZW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLnByZWZpeEl0ZW1zW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1kZWZhdWx0JylcbiAgICByZXR1cm4gZmllbGRzZXRcbiAgfVxuXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gc3VwZXIuZ2V0TGVnZW5kKGNvbmZpZylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnaDUnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1oZWFkaW5nJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHVsbC1sZWZ0JylcbiAgICBsZWdlbmQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXJnaW46IDA7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsnKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtcmlnaHQnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgaHRtbC5zdHlsZS5jbGVhciA9ICdib3RoJ1xuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgYm9keSwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgncmFkaW8nKVxuXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U3dpdGNoZXIoY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wteHMtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXN0YWNrZWQnKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtc3RhY2tlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcblxuICAgIGlmIChjb25maWcuYWN0aXZlKSB7XG4gICAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHRhYi5saW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAndGFiJylcbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luJylcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG4gIH1cblxuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3Itb25seScpXG4gIH1cblxuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0RmllbGRzZXQgKCkge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBmaWVsZHNldFxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1sZWZ0JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncHktMicpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1lbmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNTbG90IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0UHJvcGVydGllc1Nsb3QoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tc20nKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBzdXBlci5nZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRUZXh0YXJlYUNvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRJbnB1dENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRSYWRpb3NDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0UmFkaW9zQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGJvZHksIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udHJvbCcpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QWxlcnQoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxlcnQtZGFuZ2VyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RleHQtZGFuZ2VyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29sdW1uQ2xhc3MgKHNpemUsIGNvbHMpIHtcbiAgICByZXR1cm4gJ2NvbC0nICsgc2l6ZSArICctJyArIGNvbHNcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIHZpc3VhbGx5SGlkZGVuIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzci1vbmx5JylcbiAgfVxuXG4gIHZpc3VhbGx5VmlzaWJsZSAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Itb25seScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA0XG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVGhlbWVCb290c3RyYXA1IGluc3RhbmNlLlxuICogQGV4dGVuZHMgVGhlbWVcbiAqL1xuY2xhc3MgVGhlbWVCb290c3RyYXA1IGV4dGVuZHMgVGhlbWUge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IGZhbHNlXG4gIH1cblxuICBnZXRGaWVsZHNldCAoKSB7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGZpZWxkc2V0XG4gIH1cblxuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IHN1cGVyLmdldExlZ2VuZChjb25maWcpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2g2JylcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ3B5LTInKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtZW5kJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdweS0xJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBjb250cm9sU2xvdCA9IHN1cGVyLmdldENvbnRyb2xTbG90KClcbiAgICBjb250cm9sU2xvdC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY29udHJvbFNsb3RcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnIycgKyBjb25maWcucHJvcGVydGllc0NvbnRhaW5lci5pZClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktcHJvcGVydGllcy10b2dnbGUnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXNtJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBib2R5LCByYWRpb3MsIGxhYmVscywgbGFiZWxUZXh0cywgcmFkaW9Db250cm9scywgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJhZGlvQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICAgIHJhZGlvc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgICBib2R5LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRDaGVja2JveENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtR3JvdXAsIGlucHV0LCBsYWJlbCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0IH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0JylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTd2l0Y2hlcihjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLXNlbGVjdCcpXG4gICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1ibG9jaycpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdChjb25maWcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgdmlzdWFsbHlIaWRkZW4gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cblxuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCIvKipcbiAqIExpc3RzIG9mIGh0bWwgY2xhc3NlcyB1c2VkIGZvciBpY29ucy5cbiAqIEBtb2R1bGUgaWNvbnNcbiAqL1xuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZ2x5cGhpY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdseXBoaWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QnLFxuICBkZWxldGU6ICdnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoJyxcbiAgYWRkOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgYm9vdHN0cmFwLWljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgYm9vdHN0cmFwSWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdiaSBiaS1jYXJkLWxpc3QnLFxuICBkZWxldGU6ICdiaSBiaS10cmFzaDInLFxuICBhZGQ6ICdiaSBiaS1wbHVzJyxcbiAgbW92ZVVwOiAnYmkgYmktYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2JpIGJpLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTMgPSB7XG4gIHByb3BlcnRpZXM6ICdpY29uLWxpc3QnLFxuICBkZWxldGU6ICdpY29uLXRyYXNoJyxcbiAgYWRkOiAnaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU0IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU0ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhIGZhLXRyYXNoLW8nLFxuICBhZGQ6ICdmYSBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTUgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTUgPSB7XG4gIHByb3BlcnRpZXM6ICdmYXMgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhcyBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhcyBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmFzIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYXMgZmEtYXJyb3ctZG93bidcbn1cblxuLyoqXG4gKiBIVE1MIGNsYXNzZXMgZm9yIGZvbnRhd2Vzb21lNiBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbnRBd2Vzb21lNiA9IHtcbiAgcHJvcGVydGllczogJ2ZhLXNvbGlkIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYS1zb2xpZCBmYS10cmFzaCcsXG4gIGFkZDogJ2ZhLXNvbGlkIGZhLXBsdXMnLFxuICBtb3ZlVXA6ICdmYS1zb2xpZCBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmEtc29saWQgZmEtYXJyb3ctZG93bidcbn1cbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lIGluc3RhbmNlLlxuICovXG5jbGFzcyBUaGVtZSB7XG4gIGNvbnN0cnVjdG9yIChpY29ucyA9IG51bGwpIHtcbiAgICB0aGlzLmljb25zID0gaWNvbnNcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHNvbWUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAobmFtZSkge1xuICAgIHRoaXMudXNlVG9nZ2xlRXZlbnRzID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpY29uIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEljb24gKG5hbWUpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgaWNvbkNsYXNzZXMgPSB0aGlzLmljb25zW25hbWVdLnNwbGl0KCcgJylcblxuICAgIGlmIChpY29uQ2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpY29uQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGdyb3VwIHNldmVyYWwgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBjYXB0aW9uIGZvciB0aGUgY29udGVudCBvZiBpdHMgcGFyZW50IGZpZWxkc2V0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMZWdlbmQgKGNvbmZpZykge1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpXG4gICAgY29uc3QgbGVnZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsICcjbGVnZW5kLScgKyBjb25maWcuaWQpXG4gICAgbGVnZW5kVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIGxlZ2VuZFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICcjbGVnZW5kLScgKyBjb25maWcuaWQpXG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGxlZ2VuZFRleHQpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29tcGxleCBlZGl0b3JzIGxpa2UgYXJyYXlzLCBvYmplY3RzIGFuZCBtdWx0aXBsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGNoaWxkIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoaWxkcmVuU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNoaWxkLWVkaXRvcnMtc2xvdCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlcnJvciBtZXNzYWdlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWVzc2FnZXNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktbWVzc2FnZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXRvbWljJywgJ2ZhbHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VkIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQXJpYUxpdmUgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEEgbWVzc2FnZSB0aGF0IHdpbGwgYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFyaWFMaXZlTWVzc2FnZSAobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIHRoaXMudmlzdWFsbHlIaWRkZW4oaHRtbClcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIE9iamVjdEVkaXRvciBwcm9wZXJ0aWVzIHdyYXBwZXIgdmlzaWJpbGl0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuaGFzQXR0cmlidXRlKCdzdHlsZScpKSB7XG4gICAgICAgICAgdGhpcy52aXN1YWxseVZpc2libGUoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAodGhpcy5pY29ucyAmJiBjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbih0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkICgpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbSBpbnRvJyxcbiAgICAgIGljb246ICdhZGQnXG4gICAgfSlcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktYWRkJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWRkUHJvcGVydHlCdXR0b24gKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0FkZCBwcm9wZXJ0eSdcbiAgICB9KVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hZGQtcHJvcGVydHktYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiZGVsZXRlXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlbGV0ZUl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ0RlbGV0ZSBpdGVtJyxcbiAgICAgIGljb246ICdkZWxldGUnXG4gICAgfSlcblxuICAgIGRlbGV0ZUl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1kZWxldGUnKVxuXG4gICAgcmV0dXJuIGRlbGV0ZUl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgdXBcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZVVwSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZVVwSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSB1cCcsXG4gICAgICBpY29uOiAnbW92ZVVwJ1xuICAgIH0pXG5cbiAgICBtb3ZlVXBJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS11cCcpXG5cbiAgICByZXR1cm4gbW92ZVVwSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSBkb3duXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1vdmVEb3duSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgbW92ZURvd25JdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIGRvd24nLFxuICAgICAgaWNvbjogJ21vdmVEb3duJ1xuICAgIH0pXG5cbiAgICBtb3ZlRG93bkl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLWRvd24nKVxuXG4gICAgcmV0dXJuIG1vdmVEb3duSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRoZSBlZGl0b3IgZGVzY3JpcHRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcbiAgICBjb25zdCBhcmlhTGl2ZSA9IHRoaXMuZ2V0UHJvcGVydGllc0FyaWFMaXZlKClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHByb3BlcnRpZXNDb250YWluZXIgPSB0aGlzLmdldFByb3BlcnRpZXNTbG90KHtcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc1RvZ2dsZSA9IHRoaXMuZ2V0UHJvcGVydGllc1RvZ2dsZSh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlICsgJyAnICsgJ3Byb3BlcnRpZXMnLFxuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtdG9nZ2xlLScgKyBjb25maWcuaWQsXG4gICAgICBpY29uOiAncHJvcGVydGllcycsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyOiBwcm9wZXJ0aWVzQ29udGFpbmVyXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QWRkUHJvcGVydHlCdXR0b24oKVxuXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLnRpdGxlLFxuICAgICAgaWQ6IGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKHByb3BlcnRpZXNDb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG5cbiAgICBpZiAoY29uZmlnLmVkaXRhYmxlUHJvcGVydGllcykge1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzVG9nZ2xlKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcmlhTGl2ZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hZGRQcm9wZXJ0eSkge1xuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHByb3BlcnRpZXNUb2dnbGUsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLFxuICAgICAgYWRkUHJvcGVydHlDb250cm9sLFxuICAgICAgYWRkUHJvcGVydHlCdG4sXG4gICAgICBhcmlhTGl2ZSxcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldENhcmRCb2R5KClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXREZXNjcmlwdGlvbih7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcbiAgICBjb25zdCBidG5Hcm91cCA9IHRoaXMuZ2V0QnRuR3JvdXAoKVxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoKVxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIGlkOiBjb25maWcuaWRcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChib2R5KVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbGUgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnMgdGhhdCBjYW4gYmVcbiAgICogc2VsZWN0ZWQgd2l0aCBhIHN3aXRjaGVyIGNvbnRyb2wuIE9ubHkgb25lIGVkaXRvciBjYW4gYmUgYWN0aXZlL3Zpc2libGVcbiAgICogYXQgYSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiBjb25maWcucmVhZE9ubHlcbiAgICB9KVxuXG4gICAgc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHN3aXRjaGVyLmNvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgc3dpdGNoZXIsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCBmb3IgTnVsbEVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGV4dGFyZWFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy52aXN1YWxseUhpZGRlbihsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIG1lc3NhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCBtZXNzYWdlc0lkKVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBtZXNzYWdlc0lkICsgJyAnICsgZGVzY3JpcHRpb25JZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJhZGlvIGdyb3VwIGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgaWQ6IGNvbmZpZy5sYWJlbFxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLnZpc3VhbGx5SGlkZGVuKGxlZ2VuZClcbiAgICB9XG5cbiAgICBjb25zdCByYWRpb0NvbnRyb2xzID0gW11cbiAgICBjb25zdCByYWRpb3MgPSBbXVxuICAgIGNvbnN0IGxhYmVscyA9IFtdXG4gICAgY29uc3QgbGFiZWxUZXh0cyA9IFtdXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHJhZGlvQ29udHJvbHMucHVzaChyYWRpb0NvbnRyb2wpXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQgKyAnLScgKyBpbmRleClcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIHJhZGlvcy5wdXNoKHJhZGlvKVxuXG4gICAgICBjb25zdCBkZXNjcmliZWRCeSA9IG1lc3NhZ2VzSWQgKyAnICcgKyBkZXNjcmlwdGlvbklkXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGlmIChjb25maWcubGFiZWwpIHtcbiAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChyYWRpb0NvbnRyb2xzW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChyYWRpb3NbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKGxhYmVsc1tpbmRleF0pXG4gICAgICBsYWJlbHNbaW5kZXhdLmFwcGVuZENoaWxkKGxhYmVsVGV4dHNbaW5kZXhdKVxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZmllbGRzZXQsIGxlZ2VuZCwgYm9keSwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNoZWNrYm94IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtR3JvdXApXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMudmlzdWFsbHlIaWRkZW4obGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gbWVzc2FnZXNJZCArICcgJyArIGRlc2NyaXB0aW9uSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFN3aXRjaGVyIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbm90aGVyIHR5cGUgb2YgZXJyb3IgbWVzc2FnZSBjb250YWluZXIgdXNlZCBmb3IgbW9yZSBjb21wbGV4IGVkaXRvcnMgbGlrZVxuICAgKiBvYmplY3QsIGFycmF5IGFuZCBtdWx0aXBsZSBlZGl0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKGNvbmZpZylcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGludmFsaWRGZWVkYmFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxuICAgIGludmFsaWRGZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIGludmFsaWRGZWVkYmFja0ljb24udGV4dENvbnRlbnQgPSAn4p2MICdcbiAgICBpbnZhbGlkRmVlZGJhY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaW52YWxpZEZlZWRiYWNrSWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFja0ljb24pXG4gICAgaHRtbC5hcHBlbmRDaGlsZChpbnZhbGlkRmVlZGJhY2tUZXh0KVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBjb2x1bW5zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2plZGktcm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICAvKipcbiAgICogQSBjb2x1bW4gdG8gY29udGFpbiBjb250ZW50IHRvIGEgc3BlY2lmaWMgd2lkdGhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wtbWQtb2Zmc2V0LScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICAvKipcbiAgICogVGFiIGxpc3QgaXMgYSBsaXN0IG9mIGxpbmtzIHRoYXQgdHJpZ2dlcnMgdGFicyB2aXNpYmlsaXR5IG5lIGF0IHRoZSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGlzdCcpXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRhYiBpcyBhIHdyYXBwZXIgZm9yIGNvbnRlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saW5rJylcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGNvbmZpZy5pZClcbiAgICBsaW5rLnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaW5rKVxuICAgIHJldHVybiB7IGxpc3QsIGxpbmsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIHRhYnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkNvbnRlbnQgKCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKVxuICAgIHJldHVybiB0YWJDb250ZW50XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRhYiBhdHRyaWJ1dGVzIHRvIG1ha2UgaXQgdG9nZ2xlYWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2plZGktdGFiLXBhbmUnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2aXN1YWxseUhpZGRlbiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDFweDtoZWlnaHQ6IDFweDtwYWRkaW5nOiAwO21hcmdpbjogLTFweDtvdmVyZmxvdzogaGlkZGVuO2NsaXA6IHJlY3QoMCwwLDAsMCk7Ym9yZGVyOiAwOycpXG4gIH1cblxuICAvKipcbiAgICogUmV2ZWFscyBhIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2aXN1YWxseVZpc2libGUgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcywgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsIGdldFNjaGVtYVByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSA/IHNjaGVtYVByb3BlcnRpZXMgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQWRkaXRpb25hbFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFsbE9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbGxPZikpIHtcbiAgICBhbGxPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvckFueU9mXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCwgY29tcGlsZVRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQ29uc3QgPSBnZXRTY2hlbWFDb25zdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUNvbnN0KSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWFDb25zdClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckNvbnN0LCB7XG4gICAgICAgICAgICBjb25zdDogSlNPTi5zdHJpbmdpZnkoc2NoZW1hQ29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFDb250YWlucywgZ2V0U2NoZW1hTWF4Q29udGFpbnMsIGdldFNjaGVtYU1pbkNvbnRhaW5zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBjb250YWlucyA9IGdldFNjaGVtYUNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWluQ29udGFpbnMgPSBnZXRTY2hlbWFNaW5Db250YWlucyhzY2hlbWEpXG4gIGNvbnN0IG1heENvbnRhaW5zID0gZ2V0U2NoZW1hTWF4Q29udGFpbnMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChjb250YWlucykpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBjb250YWlucywgZGF0YTogaXRlbSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQobWluQ29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IG1pbkNvbnRhaW5zKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Db250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtaW5Db250YWluczogbWluQ29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbaTE4bi5lcnJvckNvbnRhaW5zXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG1heENvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBtYXhDb250YWlucylcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4Q29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWF4Q29udGFpbnM6IG1heENvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCwge1xuICAgICAgICAgICAgZGVwZW5kZW50UmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50U2NoZW1hcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFNjaGVtYXMpKSB7XG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW50U2NoZW1hcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gZGVwZW5kZW50U2NoZW1hc1trZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFbnVtLCB7XG4gICAgICAgICAgICBlbnVtOiBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdChzY2hlbWEpXG4gIGxldCB2YWxpZGF0ZUZvcm1hdCA9IHZhbGlkYXRvci52YWxpZGF0ZUZvcm1hdFxuXG4gIGlmIChnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAndmFsaWRhdGVGb3JtYXQnKSkge1xuICAgIHZhbGlkYXRlRm9ybWF0ID0gc2NoZW1hLm9wdGlvbnMudmFsaWRhdGVGb3JtYXRcbiAgfVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSAmJiB2YWxpZGF0ZUZvcm1hdCkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHsgZm9ybWF0OiBmb3JtYXQgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2lmICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYUlmLCBkYXRhOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hVGhlbikpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYVRoZW4sIGRhdGE6IHZhbHVlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYUVsc2UsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU5vdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBub3QgPSBnZXRTY2hlbWFOb3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChub3QpKSB7XG4gICAgY29uc3Qgbm90RWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBub3QsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3Qgbm90RXJyb3JzID0gbm90RWRpdG9yLmdldEVycm9ycygpXG4gICAgbm90RWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JOb3QpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT25lT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25lT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChvbmVPZikpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIG9uZU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yT25lT2YsIHtcbiAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXJcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVybiA9IGdldFNjaGVtYVBhdHRlcm4oc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQocGF0dGVybikpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQYXR0ZXJuLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IGF0dGVyblByb3BlcnRpZXNcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsXG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQocHJlZml4SXRlbXMpKSB7XG4gICAgcHJlZml4SXRlbXMuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IGl0ZW1TY2hlbWEsIGRhdGE6IGl0ZW1WYWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJlZml4SXRlbXMsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgcHJvcGVydHlOYW1lc1xuICovXG5cbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQge1xuICBnZXRTY2hlbWFQcm9wZXJ0eU5hbWVzXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eU5hbWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0eU5hbWVzID0gZ2V0U2NoZW1hUHJvcGVydHlOYW1lcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFQcm9wZXJ0eU5hbWVzKSkge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsXG4gICAgICAgIHNjaGVtYTogc2NoZW1hUHJvcGVydHlOYW1lcyxcbiAgICAgICAgZGF0YTogcHJvcGVydHlOYW1lXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpbnZhbGlkID0gZWRpdG9yLmdldEVycm9ycygpLmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclByb3BlcnR5TmFtZXMsIHsgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQocmVxdWlyZWQpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHJlcXVpcmVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUmVxdWlyZWQsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQge1xuICBjb21waWxlVGVtcGxhdGUsIGdldFR5cGUsXG4gIGlzQXJyYXksXG4gIGlzQm9vbGVhbixcbiAgaXNJbnRlZ2VyLFxuICBpc051bGwsXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHR5cGUgPSBnZXRTY2hlbWFUeXBlKHNjaGVtYSlcblxuICBpZiAodHlwZSA9PT0gJ2FueScpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQodHlwZSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB2YWxpZCA9IHR5cGUuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclR5cGUsIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGdldFR5cGUodmFsdWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVW5pcXVlSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHVuaXF1ZUl0ZW1zID0gZ2V0U2NoZW1hVW5pcXVlSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldCh1bmlxdWVJdGVtcykgJiYgdW5pcXVlSXRlbXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvclVuaXF1ZUl0ZW1zXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyBwcm9wZXJ0eU5hbWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcm9wZXJ0eU5hbWVzJ1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL3JlcXVpcmVkJ1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdHlwZSdcbmltcG9ydCB7IG1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21heGltdW0nXG5pbXBvcnQgeyB1bmlxdWVJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMnXG5pbXBvcnQgeyBhZGRpdGlvbmFsUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICBhbGxPZjogYWxsT2YsXG4gIGFueU9mOiBhbnlPZixcbiAgY29uc3Q6IF9jb25zdCxcbiAgY29udGFpbnM6IGNvbnRhaW5zLFxuICBkZXBlbmRlbnRSZXF1aXJlZDogZGVwZW5kZW50UmVxdWlyZWQsXG4gIGRlcGVuZGVudFNjaGVtYXM6IGRlcGVuZGVudFNjaGVtYXMsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaWY6IF9pZixcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHByZWZpeEl0ZW1zOiBwcmVmaXhJdGVtcyxcbiAgcHJvcGVydHlOYW1lczogcHJvcGVydHlOYW1lcyxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB0eXBlOiB0eXBlLFxuICB1bmlxdWVJdGVtczogdW5pcXVlSXRlbXNcbn1cbiIsImltcG9ydCBkcmFmdDA0IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA0J1xuaW1wb3J0IGRyYWZ0MDYgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDYnXG5pbXBvcnQgZHJhZnQwNyBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNydcbmltcG9ydCBkcmFmdDIwMTkwOSBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDE5LTA5J1xuaW1wb3J0IGRyYWZ0MjAyMDEyIGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMjAtMTInXG5pbXBvcnQgeyBoYXNPd24sIGlzQm9vbGVhbiwgY2xvbmUsIGlzU2V0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHRoaXMucmVmUGFyc2VyID0gY29uZmlnLnJlZlBhcnNlclxuICAgIHRoaXMudmFsaWRhdGVGb3JtYXQgPSBjb25maWcudmFsaWRhdGVGb3JtYXQgPyBjb25maWcudmFsaWRhdGVGb3JtYXQgOiBmYWxzZVxuICAgIHRoaXMuZHJhZnQgPSBkcmFmdDIwMjAxMlxuXG4gICAgdGhpcy5qc29uU2NoZW1hRHJhZnRzID0ge1xuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIyc6IGRyYWZ0MDQsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNi9zY2hlbWEjJzogZHJhZnQwNixcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSMnOiBkcmFmdDA3LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMTktMDkvc2NoZW1hJzogZHJhZnQyMDE5MDksXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAyMC0xMi9zY2hlbWEnOiBkcmFmdDIwMjAxMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICBnZXRFcnJvcnMgKHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICAgIGxldCBzY2hlbWFFcnJvcnMgPSBbXVxuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdtZXNzYWdlcycpXG5cbiAgICBjb25zdCBzY2hlbWFDbG9uZSA9IGNsb25lKHNjaGVtYSlcblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgbWVzc2FnZXM6IGlzU2V0KHNjaGVtYU9wdGlvbnNNZXNzYWdlcykgPyBzY2hlbWFPcHRpb25zTWVzc2FnZXMgOiBbJ2ludmFsaWQnXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfV1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRyYWZ0KS5mb3JFYWNoKChjb25zdHJhaW4pID0+IHtcbiAgICAgIGlmIChoYXNPd24oc2NoZW1hQ2xvbmUsIGNvbnN0cmFpbikpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5kcmFmdFtjb25zdHJhaW5dXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvckVycm9ycyA9IHZhbGlkYXRvcih0aGlzLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpXG5cbiAgICAgICAgaWYgKHZhbGlkYXRvckVycm9ycykge1xuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IFsuLi5zY2hlbWFFcnJvcnMsIC4uLnZhbGlkYXRvckVycm9yc11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc2NoZW1hRXJyb3JzLmxlbmd0aCA+IDAgJiYgc2NoZW1hT3B0aW9uc01lc3NhZ2VzKSB7XG4gICAgICBzY2hlbWFFcnJvcnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiJdLCJzb3VyY2VSb290IjoiIn0=