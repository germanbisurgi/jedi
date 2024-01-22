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
      legend.classList.add('h5');
      legend.setAttribute('style', 'border-bottom: none;');
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
      return html;
    }
  }, {
    key: "getArrayActionsSlot",
    value: function getArrayActionsSlot() {
      var html = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ThemeBootstrap3.prototype), "getArrayActionsSlot", this).call(this);
      html.classList.add('btn-group');
      // html.classList.add('pull-right')
      return html;
    }
  }, {
    key: "getPropertiesToggle",
    value: function getPropertiesToggle(config) {
      var html = this.getButton(config);
      html.setAttribute('data-toggle', 'collapse');
      html.setAttribute('data-target', '#' + config.propertiesContainer.id);
      html.classList.add('jedi-properties-toggle');
      // html.classList.add('pull-right')
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
      legend.classList.add('h6');
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
      legend.classList.add('h6');
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
      html.setAttribute('role', 'alert');
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
      var addPropertyBtn = this.getButton({
        textContent: 'Add property'
      });
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title
      });
      addPropertyBtn.classList.add('jedi-object-add');
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(description);
      fieldset.appendChild(card);
      card.appendChild(header);
      card.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(arrayActions);
      body.appendChild(propertiesContainer);
      body.appendChild(childrenSlot);
      body.appendChild(messages);
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
        textContent: 'Add item into' + ' ' + config.title,
        icon: 'add'
      });
      var fieldset = this.getFieldset();
      var legend = this.getLegend({
        textContent: config.title
      });
      container.appendChild(fieldset);
      fieldset.appendChild(legend);
      fieldset.appendChild(description);
      fieldset.appendChild(card);
      card.appendChild(header);
      card.appendChild(body);
      header.appendChild(actions);
      actions.appendChild(btnGroup);
      btnGroup.appendChild(addBtn);
      actions.appendChild(arrayActions);
      body.appendChild(childrenSlot);
      body.appendChild(messages);
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
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var describedBy = descriptionId + ' ' + messagesId;
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
        this.hideElement(label);
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
      var describedBy = descriptionId + ' ' + messagesId;
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
      var legend = this.getLegend({
        textContent: config.label
      });
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.srOnly) {
        this.hideElement(legend);
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
        var describedBy = descriptionId + ' ' + messagesId;
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
      var description = document.createElement('div');
      var descriptionId = config.id + '-description';
      description.setAttribute('id', descriptionId);
      if (config.description) {
        description.textContent = config.description;
      }
      var messages = this.getMessagesSlot();
      var messagesId = config.id + '-messages';
      messages.setAttribute('id', messagesId);
      var describedBy = descriptionId + ' ' + messagesId;
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
        this.hideElement(label);
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
      var describedBy = descriptionId + ' ' + messagesId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyL3JlZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwMy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWRkaXRpb25hbFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYWxsT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvYW55T2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9lbnVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaWYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9taW5pbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL211bHRpcGxlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbm90LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL29uZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdHlwZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy91bmlxdWVJdGVtcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDYuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTIwMTktMDkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDIwLTEyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yQXJyYXlOYXYiLCJfRWRpdG9yQXJyYXkiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiYWN0aXZlVGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiY29udHJvbCIsImFkZEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnN0YW5jZSIsImxlbmd0aCIsImFkZEl0ZW0iLCJyZWZyZXNoVUkiLCJfdGhpczIiLCJyZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyIsImNoaWxkcmVuU2xvdCIsImlubmVySFRNTCIsIm5hdkNvbHMiLCJnZXRTY2hlbWFPcHRpb24iLCJzY2hlbWEiLCJuYXZTdGFja2VkIiwibmF2VHlwZSIsInJvdyIsInRoZW1lIiwiZ2V0Um93IiwiY29scyIsImlzU2V0IiwidGFiTGlzdENvbCIsImdldENvbCIsInRhYkNvbnRlbnRDb2wiLCJ0YWJDb250ZW50IiwiZ2V0VGFiQ29udGVudCIsInRhYkxpc3QiLCJnZXRUYWJMaXN0Iiwic3RhY2tlZCIsInR5cGUiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJkZWxldGVCdG4iLCJnZXREZWxldGVJdGVtQnRuIiwibW92ZVVwQnRuIiwiZ2V0TW92ZVVwSXRlbUJ0biIsIm1vdmVEb3duQnRuIiwiZ2V0TW92ZURvd25JdGVtQnRuIiwidWkiLCJhcnJheUFjdGlvbnMiLCJjb250YWluZXIiLCJjaGlsZFRpdGxlIiwic2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlIiwidGVtcGxhdGUiLCJkYXRhIiwiaTAiLCJpMSIsImdldFZhbHVlIiwiY29tcGlsZVRlbXBsYXRlIiwic2NoZW1hVGl0bGUiLCJnZXRTY2hlbWFUaXRsZSIsImdldEtleSIsImNsYW1wIiwiZGVsZXRlSXRlbSIsInRvSW5kZXgiLCJtb3ZlIiwiYWN0aXZlIiwiaWQiLCJwYXRoVG9BdHRyaWJ1dGUiLCJwYXRoIiwidGFiIiwiZ2V0VGFiIiwidGl0bGUiLCJsaXN0Iiwic2V0VGFiUGFuZUF0dHJpYnV0ZXMiLCJkaXNhYmxlZCIsImlzUmVhZE9ubHkiLCJkaXNhYmxlIiwiZW5hYmxlIiwic2V0QXR0cmlidXRlIiwiRWRpdG9yQXJyYXkiLCJfRWRpdG9yIiwiYnVpbGQiLCJnZXRBcnJheUNvbnRyb2wiLCJzck9ubHkiLCJkZXNjcmlwdGlvbiIsImdldFNjaGVtYURlc2NyaXB0aW9uIiwiZ2V0SW52YWxpZEZlZWRiYWNrIiwiY29uZmlnIiwiZ2V0QWxlcnQiLCJzYW5pdGl6ZSIsImlzQXJyYXkiLCJtYXhJdGVtcyIsImdldFNjaGVtYU1heEl0ZW1zIiwibWluSXRlbXMiLCJnZXRTY2hlbWFNaW5JdGVtcyIsIml0ZW1JbmRleCIsIk51bWJlciIsInNwbGl0IiwiamVkaSIsInBhdGhTZXBhcmF0b3IiLCJwb3AiLCJFZGl0b3IiLCJFZGl0b3JCb29sZWFuRW51bVJhZGlvIiwiX0VkaXRvckJvb2xlYW4iLCJnZXRSYWRpb3NDb250cm9sIiwidmFsdWVzIiwidGl0bGVzIiwibGFiZWwiLCJyYWRpb3MiLCJyYWRpbyIsInJhZGlvVmFsdWUiLCJzZXRWYWx1ZSIsImNoZWNrZWQiLCJFZGl0b3JCb29sZWFuIiwiRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QiLCJnZXRTZWxlY3RDb250cm9sIiwiaW5wdXQiLCJnZXRDaGVja2JveENvbnRyb2wiLCJCb29sZWFuIiwiX0V2ZW50RW1pdHRlciIsInJlYWRPbmx5IiwiY29lcmNlVmFsdWUiLCJzZXRDb250YWluZXJBdHRyaWJ1dGVzIiwiYWx3YXlzU2hvd0Vycm9ycyIsIm9wdGlvbnMiLCJzaG93RXJyb3JzIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJvbiIsImljb25zIiwiaWNvbkxpYiIsImdseXBoaWNvbnMiLCJib290c3RyYXBJY29ucyIsImZvbnRBd2Vzb21lMyIsImZvbnRBd2Vzb21lNCIsImZvbnRBd2Vzb21lNSIsImZvbnRBd2Vzb21lNiIsIlRoZW1lQm9vdHN0cmFwMyIsIlRoZW1lQm9vdHN0cmFwNCIsIlRoZW1lQm9vdHN0cmFwNSIsIlRoZW1lIiwiZ2V0U2NoZW1hVHlwZSIsInNjaGVtYUVudW0iLCJnZXRTY2hlbWFFbnVtIiwiaW5jbHVkZXMiLCJuZXZlclNob3dFcnJvcnMiLCJtZXNzYWdlcyIsImVycm9yIiwibWVzc2FnZSIsImludmFsaWRGZWVkYmFjayIsIl90aGlzMyIsImludGVyYWN0aXZlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJfdGhpczQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJPYmplY3QiLCJrZXlzIiwiRXZlbnRFbWl0dGVyIiwiRWRpdG9yTXVsdGlwbGUiLCJnZXRNdWx0aXBsZUNvbnRyb2wiLCJzd2l0Y2hlck9wdGlvblZhbHVlcyIsInN3aXRjaGVyT3B0aW9uc0xhYmVscyIsInN3aXRjaGVyIiwic3dpdGNoSW5zdGFuY2UiLCJhY3RpdmVJbnN0YW5jZSIsIkVkaXRvck51bGwiLCJnZXROdWxsQ29udHJvbCIsImdldFNjaGVtYUZvcm1hdCIsIkVkaXRvck51bWJlckVudW1SYWRpbyIsIl9FZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXIiLCJFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IiwiZ2V0SW5wdXRDb250cm9sIiwiTWF0aCIsImZsb29yIiwiaXNOdW1iZXIiLCJFZGl0b3JPYmplY3RHcmlkIiwiX0VkaXRvck9iamVjdCIsInJlZnJlc2hFZGl0b3JzIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImlzQWN0aXZlIiwiY29sdW1ucyIsIm9mZnNldCIsImNvbCIsIkVkaXRvck9iamVjdCIsIkVkaXRvck9iamVjdE5hdiIsImNvbnRyb2xDb2xzIiwiY29udHJvbFN0YWNrZWQiLCJjb250cm9sVmFyaWFudCIsInNjaGVtYU9wdGlvbnMiLCJhZGRQcm9wZXJ0eSIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJlZGl0YWJsZVByb3BlcnRpZXMiLCJnZXRPYmplY3RDb250cm9sIiwiYWRkUHJvcGVydHlCdG4iLCJhZGRQcm9wZXJ0eUNvbnRyb2wiLCJwcm9wZXJ0eU5hbWVFbXB0eSIsInByb3BlcnR5RXhpc3QiLCJzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZUNoaWxkIiwiYWN0aXZhdGUiLCJpc09iamVjdCIsInJlZnJlc2hQcm9wZXJ0aWVzU2xvdCIsInNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcyIsImVxdWFsIiwicHJvcGVydGllc0FjdGl2YXRvcnMiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsIm5vdFJlcXVpcmVkIiwiY2hlY2tib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJkZWFjdGl2YXRlIiwiRWRpdG9yU3RyaW5nRW51bVJhZGlvIiwiX0VkaXRvclN0cmluZyIsIkVkaXRvclN0cmluZyIsIkVkaXRvclN0cmluZ0VudW1TZWxlY3QiLCJFZGl0b3JTdHJpbmdUZXh0YXJlYSIsImdldFRleHRhcmVhQ29udHJvbCIsIlN0cmluZyIsImlucHV0VHlwZXMiLCJzY2hlbWFGb3JtYXQiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImZpbHRlciIsImxpc3RlbmVyIiwiZ2V0U2NoZW1hWCIsImtleXdvcmQiLCJnZXRTY2hlbWFTY2hlbWEiLCJpc1N0cmluZyIsIiRzY2hlbWEiLCJ1bmRlZmluZWQiLCJpc0Jvb2xlYW4iLCJnZXRTY2hlbWFBbGxPZiIsImFsbE9mIiwiZ2V0U2NoZW1hQW55T2YiLCJhbnlPZiIsImdldFNjaGVtYUNvbnN0IiwiZ2V0U2NoZW1hQ29udGFpbnMiLCJjb250YWlucyIsImdldFNjaGVtYURlZmF1bHQiLCJnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCIsImRlcGVuZGVudFJlcXVpcmVkIiwiZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyIsImRlcGVuZGVudFNjaGVtYXMiLCJnZXRTY2hlbWFFbHNlIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImZvcm1hdCIsImdldFNjaGVtYUlmIiwiZ2V0U2NoZW1hSXRlbXMiLCJpdGVtcyIsImdldFNjaGVtYU1heGltdW0iLCJtYXhpbXVtIiwiZ2V0U2NoZW1hTWF4Q29udGFpbnMiLCJpc0ludGVnZXIiLCJtYXhDb250YWlucyIsImdldFNjaGVtYU1heExlbmd0aCIsIm1heExlbmd0aCIsImdldFNjaGVtYU1heFByb3BlcnRpZXMiLCJtYXhQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hTWluaW11bSIsIm1pbmltdW0iLCJnZXRTY2hlbWFNaW5Db250YWlucyIsIm1pbkNvbnRhaW5zIiwiZ2V0U2NoZW1hTWluTGVuZ3RoIiwibWluTGVuZ3RoIiwiZ2V0U2NoZW1hTWluUHJvcGVydGllcyIsIm1pblByb3BlcnRpZXMiLCJnZXRTY2hlbWFNdWx0aXBsZU9mIiwibXVsdGlwbGVPZiIsImdldFNjaGVtYU5vdCIsIm5vdCIsIm9wdGlvbiIsImdldFNjaGVtYVBhdHRlcm4iLCJwYXR0ZXJuIiwiZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJwYXR0ZXJuUHJvcGVydGllcyIsImdldFNjaGVtYVByZWZpeEl0ZW1zIiwicHJlZml4SXRlbXMiLCJnZXRTY2hlbWFQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImdldFNjaGVtYVJlYWRPbmx5IiwiZ2V0U2NoZW1hUmVxdWlyZWQiLCJyZXF1aXJlZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsImdldFNjaGVtYVRoZW4iLCJ0aGVuIiwiZ2V0U2NoZW1hT25lT2YiLCJvbmVPZiIsImdldFNjaGVtYVVuaXF1ZUl0ZW1zIiwidW5pcXVlSXRlbXMiLCJnZXRDaXJjdWxhclJlcGxhY2VyIiwiYW5jZXN0b3JzIiwiX3R5cGVvZiIsImF0IiwiY2xvbmUiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImVzY2FwZVJlZ0V4cCIsInN0cmluZyIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwic3RyIiwiZmluZCIsIlJlZ0V4cCIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInNvcnRPYmplY3QiLCJzb3J0IiwicmVkdWNlIiwicmVzdWx0IiwiYSIsImIiLCJkaWZmZXJlbnQiLCJpc051bGwiLCJub3RTZXQiLCJBcnJheSIsImdldFR5cGUiLCJtZXJnZURlZXAiLCJ0YXJnZXQiLCJfbGVuIiwic291cmNlcyIsIl9rZXkiLCJzb3VyY2UiLCJzaGlmdCIsImFzc2lnbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmNhdCIsImRlZXBDb3B5IiwiY29weSIsImkiLCJvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMiLCJvYmoxIiwib2JqMiIsImdldFZhbHVlQnlKU09OUGF0aCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ0ZXN0IiwicGFyc2VJbnQiLCJlcnIiLCJlIiwiZiIsIm1hdGNoIiwibnVtYmVyIiwibWluIiwibWF4IiwicmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSIsImFyciIsInVuaXF1ZU9iamVjdHMiLCJ1bmlxdWVWYWx1ZXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwib2JqU3RyaW5nIiwiaGFzIiwiYWRkIiwiaTE4biIsImVycm9yQWRkaXRpb25hbFByb3BlcnRpZXMiLCJlcnJvckFueU9mIiwiZXJyb3JDb25zdCIsImVycm9yQ29udGFpbnMiLCJlcnJvckRlcGVuZGVudFJlcXVpcmVkIiwiZXJyb3JFbnVtIiwiZXJyb3JFeGNsdXNpdmVNYXhpbXVtIiwiZXJyb3JFeGNsdXNpdmVNaW5pbXVtIiwiZXJyb3JGb3JtYXQiLCJlcnJvckl0ZW1zIiwiZXJyb3JNYXhpbXVtIiwiZXJyb3JNYXhJdGVtcyIsImVycm9yTWF4TGVuZ3RoIiwiZXJyb3JNYXhQcm9wZXJ0aWVzIiwiZXJyb3JNYXhDb250YWlucyIsImVycm9yTWluQ29udGFpbnMiLCJlcnJvck1pbmltdW0iLCJlcnJvck1pbkl0ZW1zIiwiZXJyb3JNaW5MZW5ndGgiLCJlcnJvck1pblByb3BlcnRpZXMiLCJlcnJvck11bHRpcGxlT2YiLCJlcnJvck5vdCIsImVycm9yT25lT2YiLCJlcnJvclBhdHRlcm4iLCJlcnJvclByZWZpeEl0ZW1zIiwiZXJyb3JSZXF1aXJlZCIsImVycm9yVHlwZSIsImVycm9yVW5pcXVlSXRlbXMiLCJJbnN0YW5jZUFycmF5IiwiX0luc3RhbmNlIiwic2V0VUkiLCJzY2hlbWFUeXBlIiwicHJlcGFyZSIsInJlZnJlc2hDaGlsZHJlbiIsImNyZWF0ZUl0ZW1JbnN0YW5jZSIsIml0ZW1zQ291bnQiLCJzY2hlbWFJdGVtcyIsInNjaGVtYVByZWZpeEl0ZW1zIiwiaGFzUHJlZml4SXRlbXNTY2hlbWEiLCJjcmVhdGVJbnN0YW5jZSIsInBhcmVudCIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJvbkNoaWxkQ2hhbmdlIiwiaXRlbVZhbHVlIiwiSW5zdGFuY2UiLCJJbnN0YW5jZUJvb2xlYW4iLCJyb290TmFtZSIsInJlZ2lzdGVyIiwic2V0SW5pdGlhbFZhbHVlIiwic2V0RGVmYXVsdFZhbHVlIiwiaXNFZGl0b3IiLCJ1bnJlZ2lzdGVyIiwic2NoZW1hRGVmYXVsdCIsInRyaWdnZXJzQ2hhbmdlIiwidmFsaWRhdG9yIiwiSW5zdGFuY2VNdWx0aXBsZSIsImluc3RhbmNlcyIsImFjdGl2ZUluc3RhbmNlQ2hhbmdlZCIsImxhc3RJbmRleCIsInNjaGVtYXMiLCJvblNldFZhbHVlIiwic2NoZW1hc09mIiwic2NoZW1hQ29weSIsIl9vYmplY3RTcHJlYWQiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbCIsInN3aXRjaGVyVGl0bGUiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJmaXR0ZXN0SW5kZXgiLCJnZXRJZkluZGV4IiwiZ2V0Rml0dGVzdEluZGV4IiwicmVhc3NpZ25WYWx1ZXMiLCJsYXN0SW5zdGFuY2VWYWx1ZSIsImN1cnJlbnRJbnN0YW5jZVZhbHVlIiwibWVyZ2VkVmFsdWUiLCJpZkVkaXRvciIsIkplZGkiLCJpZkVycm9ycyIsImNoYW1waW9uRXJyb3JzIiwiaW5zdGFuY2VFcnJvcnMiLCJJbnN0YW5jZU51bGwiLCJJbnN0YW5jZU51bWJlciIsInR5cGVJc051bWVyaWMiLCJJbnN0YW5jZU9iamVjdCIsInNjaGVtYUNvbnRyb2wiLCJzY2hlbWFQcm9wZXJ0aWVzIiwicmVmcmVzaEluc3RhbmNlcyIsInByb3BlcnR5Iiwic2NoZW1hUmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImRlYWN0aXZhdGVOb25SZXF1aXJlZCIsImlzTm90UmVxdWlyZWQiLCJkZWxldGVDaGlsZCIsImdldENoaWxkIiwib2xkVmFsdWUiLCJJbnN0YW5jZVN0cmluZyIsIlhNTEh0dHBSZXF1ZXN0Iiwicm9vdCIsInJlZlBhcnNlciIsIlJlZlBhcnNlciIsImRlcmVmZXJlbmNlIiwiVmFsaWRhdG9yIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJjbGFzc0xpc3QiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJleHBhbmQiLCJzY2hlbWFPbmVPZiIsInNjaGVtYUFueU9mIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsInJlZkRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmIiwic3RhcnRzV2l0aCIsInJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJlbnRyaWVzIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJfcmVmMyIsIl9yZWY0IiwiX3JlZjUiLCJfcmVmNiIsIl9yZWY3IiwiX3JlZjgiLCJwcmV2VmFsdWUiLCJfVGhlbWUiLCJ1c2VUb2dnbGVFdmVudHMiLCJnZXRMZWdlbmQiLCJsZWdlbmQiLCJnZXRDYXJkIiwiY2FyZCIsImdldENhcmRIZWFkZXIiLCJoZWFkZXIiLCJnZXRDYXJkQm9keSIsImh0bWwiLCJnZXRBcnJheUFjdGlvbnNTbG90IiwiZ2V0UHJvcGVydGllc1RvZ2dsZSIsImdldEJ1dHRvbiIsInByb3BlcnRpZXNDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEJ0bkdyb3VwIiwiZ2V0RGVzY3JpcHRpb24iLCJoaWRlRWxlbWVudCIsImZpZWxkc2V0IiwibGFiZWxzIiwibGFiZWxUZXh0cyIsInJhZGlvQ29udHJvbHMiLCJyYWRpb0NvbnRyb2wiLCJmb3JtR3JvdXAiLCJsYWJlbFRleHQiLCJnZXRTd2l0Y2hlciIsInJlbW92ZSIsInhzIiwibWQiLCJvZmZzZXRNZCIsImxpbmsiLCJzaG93RWxlbWVudCIsImdldENvbHVtbkNsYXNzIiwic2l6ZSIsImdldENvbnRyb2xTbG90IiwiY29udHJvbFNsb3QiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImdldEljb24iLCJpY29uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWNvbkNsYXNzZXMiLCJjbGFzc05hbWUiLCJnZXRFZGl0b3JDb250YWluZXIiLCJnZXRGaWVsZHNldCIsInRleHRDb250ZW50IiwiZ2V0QWN0aW9uc1Nsb3QiLCJnZXRDaGlsZHJlblNsb3QiLCJnZXRNZXNzYWdlc1Nsb3QiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2dnbGUiLCJoYXNBdHRyaWJ1dGUiLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImJ1dHRvbiIsInRleHQiLCJnZXRBcnJheUJ0bkFkZCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwibWVzc2FnZXNJZCIsImRlc2NyaWJlZEJ5Iiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfY29uc3QiLCJzY2hlbWFDb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsIl9lbnVtIiwic29tZSIsIl9pZiIsInNjaGVtYUlmIiwic2NoZW1hVGhlbiIsInNjaGVtYUVsc2UiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJlZml4SXRlbXNTY2hlbWFzQ291bnQiLCJwcm9wZXJ0aWVzQ291bnQiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsIm5vdEVkaXRvciIsIm5vdEVycm9ycyIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsIl9udWxsIiwidmFsdWVUeXBlIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2FnZXMiLCJjb25zdHJhaW4iLCJ2YWxpZGF0b3JFcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQSxpSDs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQSwrRzs7Ozs7Ozs7Ozs7QUNIQSx1QkFBdUIsbUJBQU8sQ0FB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QUFBQTtBQUdZQSx3RUFBUyxFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qZWRpLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHN1cGVyUHJvcEJhc2UgPSByZXF1aXJlKFwiLi9zdXBlclByb3BCYXNlLmpzXCIpO1xuZnVuY3Rpb24gX2dldCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQuYmluZCgpLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG4gIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9nZXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gbnVsbCA9PSBhcnIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IF9pKSB7XG4gICAgdmFyIF9zLFxuICAgICAgX2UsXG4gICAgICBfeCxcbiAgICAgIF9yLFxuICAgICAgX2FyciA9IFtdLFxuICAgICAgX24gPSAhMCxcbiAgICAgIF9kID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChfeCA9IChfaSA9IF9pLmNhbGwoYXJyKSkubmV4dCwgMCA9PT0gaSkge1xuICAgICAgICBpZiAoT2JqZWN0KF9pKSAhPT0gX2kpIHJldHVybjtcbiAgICAgICAgX24gPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShfbiA9IChfcyA9IF94LmNhbGwoX2kpKS5kb25lKSAmJiAoX2Fyci5wdXNoKF9zLnZhbHVlKSwgX2Fyci5sZW5ndGggIT09IGkpOyBfbiA9ICEwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gITAsIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIG51bGwgIT0gX2lbXCJyZXR1cm5cIl0gJiYgKF9yID0gX2lbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KF9yKSAhPT0gX3IpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FycjtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7IGNsYW1wLCBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yQXJyYXlOYXYgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JBcnJheVxuICovXG5jbGFzcyBFZGl0b3JBcnJheU5hdiBleHRlbmRzIEVkaXRvckFycmF5IHtcbiAgaW5pdCAoKSB7XG4gICAgc3VwZXIuaW5pdCgpXG4gICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IDBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoXG4gICAgICB0aGlzLmluc3RhbmNlLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IG5hdkNvbHMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXZDb2xzJylcbiAgICBjb25zdCBuYXZTdGFja2VkID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2U3RhY2tlZCcpXG4gICAgY29uc3QgbmF2VHlwZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdlR5cGUnKVxuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSBpc1NldChuYXZDb2xzKSA/IG5hdkNvbHMgOiAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBpc1NldChuYXZTdGFja2VkKSA/IG5hdlN0YWNrZWQgOiBmYWxzZSxcbiAgICAgIHR5cGU6IGlzU2V0KG5hdlR5cGUpID8gbmF2VHlwZSA6ICdwaWxzJ1xuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiTGlzdENvbClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbClcbiAgICB0YWJMaXN0Q29sLmFwcGVuZENoaWxkKHRhYkxpc3QpXG4gICAgdGFiQ29udGVudENvbC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudGhlbWUuZ2V0RGVsZXRlSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVVcEl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLnRoZW1lLmdldE1vdmVEb3duSXRlbUJ0bigpXG5cbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmlubmVySFRNTCA9ICcnXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcblxuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgbGV0IGNoaWxkVGl0bGVcbiAgICAgIGNvbnN0IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2l0ZW1UZW1wbGF0ZScpXG5cbiAgICAgIGlmIChzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGVcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBpMDogaW5kZXgsXG4gICAgICAgICAgaTE6IChpbmRleCArIDEpLFxuICAgICAgICAgIHZhbHVlOiBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRUaXRsZSA9IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYVRpdGxlID0gZ2V0U2NoZW1hVGl0bGUoY2hpbGQuc2NoZW1hKVxuICAgICAgICBjaGlsZFRpdGxlID0gaXNTZXQoc2NoZW1hVGl0bGUpID8gc2NoZW1hVGl0bGUgKyAnICcgKyAoaW5kZXggKyAxKSA6IGNoaWxkLmdldEtleSgpXG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGNsYW1wKChpbmRleCAtIDEpLCAwLCAodGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggLSAxKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXggLSAxXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0b0luZGV4XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaW5kZXggKyAxXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSB0b0luZGV4XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGluZGV4ID09PSB0aGlzLmFjdGl2ZVRhYkluZGV4XG4gICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKVxuXG4gICAgICBjb25zdCB0YWIgPSB0aGlzLnRoZW1lLmdldFRhYih7XG4gICAgICAgIHRpdGxlOiBjaGlsZFRpdGxlLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICB9KVxuXG4gICAgICB0YWIubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IGluZGV4XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnRoZW1lLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyLCBhY3RpdmUsIGlkKVxuICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIG1vdmVVcEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG5cbiAgICAgIGlmICgodGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggLSAxKSA9PT0gaW5kZXgpIHtcbiAgICAgICAgbW92ZURvd25CdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQXJyYXlOYXZcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFNYXhJdGVtcyxcbiAgZ2V0U2NoZW1hTWluSXRlbXMsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JBcnJheSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldEFycmF5Q29udHJvbCh7XG4gICAgICB0aXRsZTogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoY29uZmlnKVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG5cbiAgICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQobWF4SXRlbXMpICYmIG1heEl0ZW1zID09PSB0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb250cm9sLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLmdldEtleSgpKVxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihjaGlsZC5wYXRoLnNwbGl0KHRoaXMuaW5zdGFuY2UuamVkaS5wYXRoU2VwYXJhdG9yKS5wb3AoKSlcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG5cbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTZXQobWluSXRlbXMpICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoIDw9IG1pbkl0ZW1zKSB7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheVxuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yQm9vbGVhbiB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9WYWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IHJhZGlvVmFsdWUgPT09IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1SYWRpb1xuIiwiaW1wb3J0IEVkaXRvckJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckJvb2xlYW5cbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvckJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yQm9vbGVhbiBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldENoZWNrYm94Q29udHJvbCh7XG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZCA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckJvb2xlYW5cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnQtZW1pdHRlcidcbmltcG9ydCB7IGdseXBoaWNvbnMsIGJvb3RzdHJhcEljb25zLCBmb250QXdlc29tZTMsIGZvbnRBd2Vzb21lNCwgZm9udEF3ZXNvbWU1LCBmb250QXdlc29tZTYgfSBmcm9tICcuLi90aGVtZXMvaWNvbnMvaWNvbnMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXAzIGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXAzJ1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNCBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNCdcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDUgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDUnXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vdGhlbWVzL3RoZW1lJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3IgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGluc3RhbmNlKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEluc3RhbmNlIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhpcyBlZGl0b3IuXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBpbnN0YW5jZSB1c2VkIHRvIGJ1aWxkIHRoZSBFZGl0b3IgdXNlciBpbnRlcmZhY2UuXG4gICAgICogQHR5cGUge1RoZW1lfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50aGVtZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGludGVyZmFjZSBodG1sIGZvciB0aGlzIGVkaXRvclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udHJvbCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVkIHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBvbmx5IHN0YXR1cyBmb3IgdGhpcyBlZGl0b3IgdXNlciBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVhZE9ubHkgPSB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKVxuXG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLmNvZXJjZVZhbHVlKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLnNldENvbnRhaW5lckF0dHJpYnV0ZXMoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcblxuICAgIGNvbnN0IGFsd2F5c1Nob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnYWx3YXlzJyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdzaG93RXJyb3JzJykgPT09ICdhbHdheXMnXG5cbiAgICBpZiAoYWx3YXlzU2hvd0Vycm9ycykge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuaW5zdGFuY2UuZ2V0RXJyb3JzKClcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgbGV0IGljb25zID0gbnVsbFxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmljb25MaWIpIHtcbiAgICAgICAgY2FzZSAnZ2x5cGhpY29ucyc6XG4gICAgICAgICAgaWNvbnMgPSBnbHlwaGljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYm9vdHN0cmFwLWljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGJvb3RzdHJhcEljb25zXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWUzJzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lM1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNCc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTUnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU1XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU2JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy50aGVtZSkge1xuICAgICAgY2FzZSAnYm9vdHN0cmFwMyc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXAzKGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNCc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA0KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYm9vdHN0cmFwNSc6XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWVCb290c3RyYXA1KGljb25zKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZShpY29ucylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjb250YWluZXIgYXR0cmlidXRlcyBsaWtlIGRhdGEtcGF0aCBhbmQgZGF0YS10eXBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDb250YWluZXJBdHRyaWJ1dGVzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5pbnN0YW5jZS5wYXRoKVxuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCBnZXRTY2hlbWFUeXBlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGVkaXRvciBjb250cm9sIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBlZGl0b3IgY29udGFpbmVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlIGJ5IG1ha2luZyBhc3N1bXB0aW9ucyBiYXNlZCBvbiBjb25zdHJhaW5zXG4gICAqL1xuICBjb2VyY2VWYWx1ZSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRW51bSkgJiYgIXNjaGVtYUVudW0uaW5jbHVkZXModGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKSAmJiBpc1NldChzY2hlbWFFbnVtWzBdKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShzY2hlbWFFbnVtWzBdLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB1aSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoZXJyb3JzKSB7XG4gICAgY29uc3QgbmV2ZXJTaG93RXJyb3JzID0gdGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuc2hvd0Vycm9ycyA9PT0gJ25ldmVyJyB8fCBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdzaG93RXJyb3JzJykgPT09ICduZXZlcidcblxuICAgIGlmIChuZXZlclNob3dFcnJvcnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5tZXNzYWdlcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5tZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IHRoaXMuZ2V0SW52YWxpZEZlZWRiYWNrKHsgbWVzc2FnZSB9KVxuICAgICAgICB0aGlzLmNvbnRyb2wubWVzc2FnZXMuYXBwZW5kQ2hpbGQoaW52YWxpZEZlZWRiYWNrKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBlcnJvciBtZXNzYWdlIGNvbnRhaW5lclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIGVkaXRvclxuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBjb250cm9sIFVJIHdoZW4gaXRzIHN0YXRlIGNoYW5nZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gIH1cblxuICByZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cyAoKSB7XG4gICAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50cyA9IHRoaXMuY29udHJvbC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXG5cbiAgICBpbnRlcmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIGlucHV0IHZhbHVlIGlmIG5lY2Vzc2FyeSBiZWZvcmUgdmFsdWUgc2V0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY29udGFpbmVyKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvck11bHRpcGxlIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TXVsdGlwbGVDb250cm9sKHtcbiAgICAgIHRpdGxlOiAnT3B0aW9ucycsXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHN3aXRjaGVyT3B0aW9uVmFsdWVzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uVmFsdWVzLFxuICAgICAgc3dpdGNoZXJPcHRpb25zTGFiZWxzOiB0aGlzLmluc3RhbmNlLnN3aXRjaGVyT3B0aW9uc0xhYmVsc1xuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3dpdGNoSW5zdGFuY2UoaW5kZXgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQodGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmluZGV4XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5kaXNhYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hY3RpdmVJbnN0YW5jZS51aS5lbmFibGUoKVxuICAgIH1cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoY29uZmlnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck11bHRpcGxlXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yTnVsbCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdWxsIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0TnVsbENvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdWxsXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JOdW1iZXJcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yTnVtYmVyIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUocmFkaW8udmFsdWUpXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSAoTnVtYmVyKHJhZGlvLnZhbHVlKSA9PT0gTnVtYmVyKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JOdW1iZXIgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvck51bWJlckVudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JOdW1iZXJcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlckVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBpc051bWJlciwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7XG4gIGdldFNjaGVtYURlc2NyaXB0aW9uLFxuICBnZXRTY2hlbWFGb3JtYXQsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGUsIGdldFNjaGVtYVR5cGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bWJlciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JOdW1iZXIgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpIHx8IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zYW5pdGl6ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoZ2V0U2NoZW1hVHlwZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgPT09ICdpbnRlZ2VyJykge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyXG4iLCJpbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IHsgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck9iamVjdEdyaWQgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JPYmplY3RcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0R3JpZCBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdjb2x1bW5zJykgfHwgMTJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ29mZnNldCcpIHx8IDBcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHVtbnMsIG9mZnNldClcblxuICAgICAgICBpZiAoZ2V0U2NoZW1hT3B0aW9uKGNoaWxkLnNjaGVtYSwgJ25ld1JvdycpID09PSB0cnVlKSB7XG4gICAgICAgICAgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgY29sLmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yT2JqZWN0R3JpZFxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdE5hdiBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sQ29scyA9IHRoaXMuaW5zdGFuY2Uuc2NoZW1hWyd4LWNvbnRyb2wtY29scyddXG4gICAgY29uc3QgY29udHJvbFN0YWNrZWQgPSB0aGlzLmluc3RhbmNlLnNjaGVtYVsneC1jb250cm9sLXN0YWNrZWQnXVxuICAgIGNvbnN0IGNvbnRyb2xWYXJpYW50ID0gdGhpcy5pbnN0YW5jZS5zY2hlbWFbJ3gtY29udHJvbC12YXJpYW50J11cblxuICAgIGNvbnN0IHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICBjb25zdCBjb2xzID0gaXNTZXQoY29udHJvbENvbHMpID8gY29udHJvbENvbHMgOiAzXG4gICAgY29uc3QgdGFiTGlzdENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2xzKVxuICAgIGNvbnN0IHRhYkNvbnRlbnRDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgKDEyIC0gY29scykpXG4gICAgY29uc3QgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuZ2V0VGFiQ29udGVudCgpXG4gICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGhlbWUuZ2V0VGFiTGlzdCh7XG4gICAgICBzdGFja2VkOiBpc1NldChjb250cm9sU3RhY2tlZCkgPyBjb250cm9sU3RhY2tlZCA6IGZhbHNlLFxuICAgICAgdHlwZTogaXNTZXQoY29udHJvbFZhcmlhbnQpID8gY29udHJvbFZhcmlhbnQgOiAncGlscydcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG5cbiAgICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICAgIHRpdGxlOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG5cbiAgICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdE5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IHNjaGVtYU9wdGlvbnMgPSB0aGlzLmluc3RhbmNlLnNjaGVtYS5vcHRpb25zIHx8IHt9XG4gICAgbGV0IGFkZFByb3BlcnR5ID0gdHJ1ZVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoYWRkaXRpb25hbFByb3BlcnRpZXMpICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgYWRkUHJvcGVydHkgPSBmYWxzZVxuICAgIH1cblxuICAgIGxldCBlZGl0YWJsZVByb3BlcnRpZXMgPSBmYWxzZVxuXG4gICAgaWYgKGlzU2V0KHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcykpIHtcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllcyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllc1xuICAgIH1cblxuICAgIGlmIChpc1NldChzY2hlbWFPcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcykpIHtcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllcyA9IHNjaGVtYU9wdGlvbnMuZWRpdGFibGVQcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRPYmplY3RDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgZWRpdGFibGVQcm9wZXJ0aWVzOiBlZGl0YWJsZVByb3BlcnRpZXMsXG4gICAgICBhZGRQcm9wZXJ0eTogYWRkUHJvcGVydHlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWVcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lRW1wdHkgPSBrZXkubGVuZ3RoID09PSAwXG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWVFbXB0eSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcGVydHlFeGlzdCA9IGlzU2V0KHRoaXMuaW5zdGFuY2UudmFsdWVba2V5XSlcblxuICAgICAgaWYgKHByb3BlcnR5RXhpc3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBzY2hlbWEgPSB7fVxuXG4gICAgICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgICBpZiAoaXNTZXQoc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMpKSB7XG4gICAgICAgIHNjaGVtYSA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5pbnN0YW5jZS5jcmVhdGVDaGlsZChzY2hlbWEsIGtleSlcbiAgICAgIGNoaWxkLmFjdGl2YXRlKClcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5pbnN0YW5jZS52YWx1ZSlcbiAgICAgIHRoaXMuY29udHJvbC5hZGRQcm9wZXJ0eUNvbnRyb2wuaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoY29uZmlnKVxuICB9XG5cbiAgcmVmcmVzaFByb3BlcnRpZXNTbG90ICgpIHtcbiAgICBjb25zdCBzY2hlbWFPcHRpb25FZGl0YWJsZVByb3BlcnRpZXMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlZGl0YWJsZVByb3BlcnRpZXMnKVxuXG4gICAgaWYgKGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzLCB0cnVlKSkge1xuICAgICAgd2hpbGUgKHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMubGFzdENoaWxkKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzUmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IGlzRGVwZW5kZW50UmVxdWlyZWQgPSB0aGlzLmluc3RhbmNlLmlzRGVwZW5kZW50UmVxdWlyZWQoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICAgIGNvbnN0IG5vdFJlcXVpcmVkID0gIWlzUmVxdWlyZWQgJiYgIWlzRGVwZW5kZW50UmVxdWlyZWRcblxuICAgICAgICBpZiAobm90UmVxdWlyZWQpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWFUaXRsZSA9IGdldFNjaGVtYVRpdGxlKGNoaWxkLnNjaGVtYSlcbiAgICAgICAgICBjb25zdCBpZCA9IHBhdGhUb0F0dHJpYnV0ZShjaGlsZC5wYXRoKSArICctYWN0aXZhdG9yJ1xuXG4gICAgICAgICAgY29uc3QgY2hlY2tib3hDb250cm9sID0gdGhpcy50aGVtZS5nZXRDaGVja2JveENvbnRyb2woe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgbGFiZWw6IGlzU2V0KHNjaGVtYVRpdGxlKSA/IHNjaGVtYVRpdGxlIDogY2hpbGQuZ2V0S2V5KCksXG4gICAgICAgICAgICBzck9ubHk6IGZhbHNlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hDb250cm9sLmlucHV0XG5cbiAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaGFzT3duKHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKSwgY2hpbGQuZ2V0S2V5KCkpXG5cbiAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgdGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udHJvbC5jb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaEVkaXRvcnMgKCkge1xuICAgIHdoaWxlICh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5yZWZyZXNoUHJvcGVydGllc1Nsb3QoKVxuICAgIHRoaXMucmVmcmVzaEVkaXRvcnMoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdFxuIiwiaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuL3N0cmluZydcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKHJhZGlvLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtUmFkaW9cbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGV4dGVuZHMgRWRpdG9yU3RyaW5nIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0U2VsZWN0Q29udHJvbCh7XG4gICAgICB2YWx1ZXM6IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nVGV4dGFyZWEgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRUZXh0YXJlYUNvbnRyb2woe1xuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nVGV4dGFyZWFcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2hpZGRlbicsICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ251bWJlcicsICdtb250aCcsICdwYXNzd29yZCcsICdzZWFyY2gnLCAndGltZScsICd0ZWwnLCAndGV4dCcsICd0ZXh0YXJlYScsICd1cmwnLCAnd2VlayddXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyhzY2hlbWFGb3JtYXQpID8gc2NoZW1hRm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBzY2hlbWFGb3JtYXQgPT09ICdoaWRkZW4nLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG5cbiAgICAvLyBmaXggY29sb3IgcGlja2VyIGJ1Z1xuICAgIGlmIChzY2hlbWFGb3JtYXQgPT09ICdjb2xvcicgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUoJyMwMDAwMDAnLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdHJpbmdcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhbiBFdmVudEVtaXR0ZXIgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBuYW1lZCBldmVudCBsaXN0ZW5lclxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW50IHRoaXMgZXZlbnQgaXMgZW1pdHRlZFxuICAgKi9cbiAgb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IG5hbWUsIGNhbGxiYWNrIH0pXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9mIGEgbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBiZSBlbWl0dGVkXG4gICAqL1xuICBlbWl0IChuYW1lKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLm5hbWUgPT09IG5hbWUpXG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzTnVtYmVyLCBpc0ludGVnZXIsIGlzQm9vbGVhbiwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hWCAoc2NoZW1hLCBrZXl3b3JkKSB7XG4gIGNvbnN0IGtleSA9ICd4LScgKyBrZXl3b3JkXG4gIHJldHVybiBzY2hlbWFba2V5XVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hU2NoZW1hIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS4kc2NoZW1hKSA/IHNjaGVtYS4kc2NoZW1hIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpID8gc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbGxPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbGxPZikgPyBzY2hlbWEuYWxsT2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUFueU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLmFueU9mKSA/IHNjaGVtYS5hbnlPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29uc3QgKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmNvbnN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFDb250YWlucyAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLmNvbnRhaW5zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmNvbnRhaW5zKSkgPyBzY2hlbWEuY29udGFpbnMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlZmF1bHQgKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmRlZmF1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRSZXF1aXJlZCkgPyBzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMpID8gc2NoZW1hLmRlcGVuZGVudFNjaGVtYXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYURlc2NyaXB0aW9uIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHNjaGVtYS5kZXNjcmlwdGlvbikgPyBzY2hlbWEuZGVzY3JpcHRpb24gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUVsc2UgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5lbHNlKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmVsc2UpKSA/IHNjaGVtYS5lbHNlIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbnVtIChzY2hlbWEpIHtcbiAgaWYgKGlzQXJyYXkoc2NoZW1hLmVudW0pICYmIHNjaGVtYS5lbnVtLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLmVudW1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pID8gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUV4Y2x1c2l2ZU1pbmltdW0gKHNjaGVtYSkge1xuICByZXR1cm4gaXNOdW1iZXIoc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pID8gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUZvcm1hdCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZm9ybWF0KSA/IHNjaGVtYS5mb3JtYXQgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUlmIChzY2hlbWEpIHtcbiAgaWYgKGlzT2JqZWN0KHNjaGVtYS5pZikpIHtcbiAgICByZXR1cm4gc2NoZW1hLmlmXG4gIH1cblxuICBpZiAoaXNCb29sZWFuKHNjaGVtYS5pZikpIHtcbiAgICByZXR1cm4gc2NoZW1hLmlmXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJdGVtcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuaXRlbXMpIHx8IGlzQm9vbGVhbihzY2hlbWEuaXRlbXMpID8gc2NoZW1hLml0ZW1zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5tYXhpbXVtKSA/IHNjaGVtYS5tYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhDb250YWlucyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heENvbnRhaW5zKSAmJiBzY2hlbWEubWF4Q29udGFpbnMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4Q29udGFpbnNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heEl0ZW1zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4SXRlbXMpICYmIHNjaGVtYS5tYXhJdGVtcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhJdGVtc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4TGVuZ3RoIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWF4TGVuZ3RoKSAmJiBzY2hlbWEubWF4TGVuZ3RoID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhQcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5taW5pbXVtKSA/IHNjaGVtYS5taW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5Db250YWlucyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkNvbnRhaW5zKSAmJiBzY2hlbWEubWluQ29udGFpbnMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluQ29udGFpbnNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkl0ZW1zIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluSXRlbXMpICYmIHNjaGVtYS5taW5JdGVtcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5JdGVtc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluTGVuZ3RoIChzY2hlbWEpIHtcbiAgaWYgKGlzSW50ZWdlcihzY2hlbWEubWluTGVuZ3RoKSAmJiBzY2hlbWEubWluTGVuZ3RoID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pblByb3BlcnRpZXMpICYmIHNjaGVtYS5taW5Qcm9wZXJ0aWVzID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pblByb3BlcnRpZXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU11bHRpcGxlT2YgKHNjaGVtYSkge1xuICBpZiAoaXNOdW1iZXIoc2NoZW1hLm11bHRpcGxlT2YpICYmIHNjaGVtYS5tdWx0aXBsZU9mID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm11bHRpcGxlT2ZcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU5vdCAoc2NoZW1hKSB7XG4gIHJldHVybiAoaXNPYmplY3Qoc2NoZW1hLm5vdCkgfHwgaXNCb29sZWFuKHNjaGVtYS5ub3QpKSA/IHNjaGVtYS5ub3QgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9wdGlvbiAoc2NoZW1hLCBvcHRpb24pIHtcbiAgcmV0dXJuIChzY2hlbWEub3B0aW9ucyAmJiBzY2hlbWEub3B0aW9uc1tvcHRpb25dKSA/IHNjaGVtYS5vcHRpb25zW29wdGlvbl0gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5pcXVlSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmlxdWVJdGVtcykgPyBzY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbn1cbiIsIi8qKlxuICogVXRpbHMuXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmN1bGFyUmVwbGFjZXIgKCkge1xuICBjb25zdCBhbmNlc3RvcnMgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLy8gYHRoaXNgIGlzIHRoZSBvYmplY3QgdGhhdCB2YWx1ZSBpcyBjb250YWluZWQgaW4sXG4gICAgLy8gaS5lLiwgaXRzIGRpcmVjdCBwYXJlbnQuXG4gICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggPiAwICYmIGFuY2VzdG9ycy5hdCgtMSkgIT09IHRoaXMpIHtcbiAgICAgIGFuY2VzdG9ycy5wb3AoKVxuICAgIH1cbiAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJ1xuICAgIH1cbiAgICBhbmNlc3RvcnMucHVzaCh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcsIGdldENpcmN1bGFyUmVwbGFjZXIoKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weSAob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgY29uc3QgY29weSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcHlbaV0gPSBkZWVwQ29weShvYmpbaV0pXG4gICAgfVxuICAgIHJldHVybiBjb3B5XG4gIH1cblxuICBjb25zdCBjb3B5ID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29weVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzIGJ1dCBvbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluIGJvdGhzIG9iamVjdHNcbiAqIGlmIHRoZXkgYXJlIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9iajIgLSBPYmplY3RzIHdobydzIHByb3BlcnRpZXMgYXJlIHRoZSBvdmVycmlkZXNcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG92ZXJ3cml0dGVuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIChvYmoxLCBvYmoyKSB7XG4gIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqMSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmoxW2tleV0gPT09IHR5cGVvZiBvYmoyW2tleV0pIHtcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmoxXG59XG5cbi8qKlxuICogR2V0IHNvbWUgdmFsdWUgYnkgdHJhdmVyc2luZyB0aGUgZGF0YSB1c2luZyBKU09OIHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEpTT04gcGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlKU09OUGF0aCAoZGF0YSwgcGF0aCkge1xuICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdCgnLicpIC8vIFNwbGl0IHRoZSBwYXRoIGludG8gaW5kaXZpZHVhbCBrZXlzXG5cbiAgbGV0IHZhbHVlID0gZGF0YVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIC9eXFxkKyQvLnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChrZXkpXG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2luZGV4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJbmRleCBpcyBvdXQgb2YgYm91bmRzLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEtleSBkb2Vzbid0IGV4aXN0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBieSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gV2hlcmUgdGVtcGxhdGUgZGF0YSBsaXZlc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZSAodGVtcGxhdGUsIGRhdGEpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAobWF0Y2gpID0+IHtcbiAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICBjb25zdCBwYXRoID0gbWF0Y2guc3BsaXQoL3t7fH19LylbMV1cbiAgICByZXR1cm4gZ2V0VmFsdWVCeUpTT05QYXRoKGRhdGEsIHBhdGgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IChhcnIpIHtcbiAgY29uc3QgdW5pcXVlT2JqZWN0cyA9IFtdXG4gIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKVxuXG4gIGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIGNvbnN0IG9ialN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICBpZiAoIXVuaXF1ZVZhbHVlcy5oYXMob2JqU3RyaW5nKSkge1xuICAgICAgdW5pcXVlVmFsdWVzLmFkZChvYmpTdHJpbmcpXG4gICAgICB1bmlxdWVPYmplY3RzLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlxdWVPYmplY3RzXG59XG4iLCIvKipcbiAqIFNpbXBsZSB0cmFuc2xhdGlvbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGkxOG5cbiAqL1xuXG4vKipcbiAqIExvY2FsZSBtZXNzYWdlc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGkxOG4gPSB7XG4gIGVycm9yQWRkaXRpb25hbFByb3BlcnRpZXM6ICdIYXMgYWRkaXRpb25hbCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCIgYnV0IG5vIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgYWxsb3dlZC4nLFxuICBlcnJvckFueU9mOiAnTXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4nLFxuICBlcnJvckNvbnN0OiAnTXVzdCBoYXZlIHZhbHVlIG9mOiB7eyBjb25zdCB9fS4nLFxuICBlcnJvckNvbnRhaW5zOiAnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JEZXBlbmRlbnRSZXF1aXJlZDogJ011c3QgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydGllczoge3sgZGVwZW5kZW50UmVxdWlyZWQgfX0uJyxcbiAgZXJyb3JFbnVtOiAnTXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzOiB7eyBlbnVtIH19LicsXG4gIGVycm9yRXhjbHVzaXZlTWF4aW11bTogJ011c3QgYmUgbGVzcyB0aGFuIHt7IGV4Y2x1c2l2ZU1heGltdW0gfX0uJyxcbiAgZXJyb3JFeGNsdXNpdmVNaW5pbXVtOiAnTXVzdCBiZSBncmVhdGVyIHRoYW4ge3sgZXhjbHVzaXZlTWluaW11bSB9fS4nLFxuICBlcnJvckZvcm1hdDogJ011c3QgYmUgYSB2YWxpZCB7eyBmb3JtYXQgfX0uJyxcbiAgZXJyb3JJdGVtczogJ011c3QgaGF2ZSBpdGVtcyB0aGF0IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYS4nLFxuICBlcnJvck1heGltdW06ICdNdXN0IGJlIGF0IG1vc3Qge3sgbWF4aW11bSB9fS4nLFxuICBlcnJvck1heEl0ZW1zOiAnTXVzdCBoYXZlIGF0IG1vc3Qge3sgbWF4SXRlbXMgfX0gaXRlbXMuJyxcbiAgZXJyb3JNYXhMZW5ndGg6ICdNdXN0IGJlIGF0IG1vc3Qge3sgbWF4TGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZy4nLFxuICBlcnJvck1heFByb3BlcnRpZXM6ICdNdXN0IGhhdmUgYXQgbW9zdCB7eyBtYXhQcm9wZXJ0aWVzIH19IHByb3BlcnRpZXMuJyxcbiAgZXJyb3JNYXhDb250YWluczogJ011c3QgY29udGFpbiBhdCBtb3N0IHt7IG1heENvbnRhaW5zIH19IGl0ZW1zIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEuIEl0IGN1cnJlbnRseSBjb250YWlucyB7eyBjb3VudGVyIH19LicsXG4gIGVycm9yTWluQ29udGFpbnM6ICdNdXN0IGNvbnRhaW4gYXQgbGVhc3Qge3sgbWluQ29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0uJyxcbiAgZXJyb3JNaW5pbXVtOiAnTXVzdCBiZSBhdCBsZWFzdCB7eyBtaW5pbXVtIH19LicsXG4gIGVycm9yTWluSXRlbXM6ICdNdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluSXRlbXMgfX0gaXRlbXMuJyxcbiAgZXJyb3JNaW5MZW5ndGg6ICdNdXN0IGJlIGF0IGxlYXN0IHt7IG1pbkxlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgZXJyb3JNaW5Qcm9wZXJ0aWVzOiAnTXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pblByb3BlcnRpZXMgfX0gcHJvcGVydGllcy4nLFxuICBlcnJvck11bHRpcGxlT2Y6ICdNdXN0IGJlIG11bHRpcGxlIG9mIHt7IG11bHRpcGxlT2YgfX0uJyxcbiAgZXJyb3JOb3Q6ICdNdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEuJyxcbiAgZXJyb3JPbmVPZjogJ011c3QgdmFsaWRhdGUgYWdhaW5zdCBleGFjdGx5IG9uZSBvZiB0aGUgcHJvdmlkZWQgc2NoZW1hcy4gSXQgY3VycmVudGx5IHZhbGlkYXRlcyBhZ2FpbnN0IHt7IGNvdW50ZXIgfX0gb2YgdGhlIHNjaGVtYXMuJyxcbiAgZXJyb3JQYXR0ZXJuOiAnTXVzdCBtYXRjaCB0aGUgcGF0dGVybjogXCJ7eyBwYXR0ZXJuIH19XCIuJyxcbiAgZXJyb3JQcmVmaXhJdGVtczogJ0l0ZW0ge3sgaW5kZXggfX0gZmFpbHMgdmFsaWRhdGlvbi4nLFxuICBlcnJvclJlcXVpcmVkOiAnTXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyByZXF1aXJlZCB9fS4nLFxuICBlcnJvclR5cGU6ICdNdXN0IGJlIG9mIHR5cGUge3sgdHlwZSB9fS4nLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcy4nXG59XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCB7IGlzU2V0LCBjbG9uZSwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgRWRpdG9yQXJyYXkgZnJvbSAnLi4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBFZGl0b3JBcnJheU5hdiBmcm9tICcuLi9lZGl0b3JzL2FycmF5LW5hdidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zLCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBJbnN0YW5jZUFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VBcnJheSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknICYmIHNjaGVtYUZvcm1hdCA9PT0gJ25hdicpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQXJyYXlOYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheSh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcblxuICAgIHRoaXMub24oJ3NldC12YWx1ZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENoaWxkcmVuKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUluc3RhbmNlICh2YWx1ZSkge1xuICAgIGxldCBzY2hlbWFcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGhcbiAgICBjb25zdCBzY2hlbWFJdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXModGhpcy5zY2hlbWEpXG4gICAgc2NoZW1hID0gaXNTZXQoc2NoZW1hSXRlbXMpID8gc2NoZW1hSXRlbXMgOiB7fVxuXG4gICAgY29uc3QgaGFzUHJlZml4SXRlbXNTY2hlbWEgPSBpc1NldChzY2hlbWFQcmVmaXhJdGVtcykgJiYgaXNTZXQoc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF0pXG5cbiAgICBpZiAoaGFzUHJlZml4SXRlbXNTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYVByZWZpeEl0ZW1zW2l0ZW1zQ291bnRdXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGl0ZW1zQ291bnQsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogY2xvbmUodmFsdWUpXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICAgIGNoaWxkLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUluc3RhbmNlKClcbiAgICBjb25zdCB2YWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgdmFsdWUucHVzaChjaGlsZC5nZXRWYWx1ZSgpKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaENoaWxkcmVuICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW11cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoaXRlbVZhbHVlKVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VBcnJheVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VCb29sZWFuIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VCb29sZWFuIGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJyAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlQm9vbGVhblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCwgcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZWZhdWx0LCBnZXRTY2hlbWFSZWFkT25seSwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBKU09OIGluc3RhbmNlLlxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSmVkaSBpbnN0YW5jZSB0byB3aGljaCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICogQHR5cGUge0plZGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuXG4gICAgLyoqXG4gICAgICogQSBKU09OIHNjaGVtYS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbnxvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcblxuICAgIC8qKlxuICAgICAqIFRoZSBqc29uIHZhbHVlIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gaXNTZXQoY29uZmlnLnZhbHVlKSA/IGNvbmZpZy52YWx1ZSA6IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGlzIGluc3RhbmNlLiBJZiBmYWxzZSB0aGUgZWRpdG9yIGlzIG5vdCBwYXJ0aWNpcGF0aW5nXG4gICAgICogdG8gdGhlIHZhbHVlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBzY2hlbWEgcGF0aCBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCB0aGlzLmplZGkucm9vdE5hbWVcblxuICAgIC8qKlxuICAgICAqIFRoZSBQYXJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsXG5cbiAgICAvKipcbiAgICAgKiBDaGlsZCBpbnN0YW5jZXMgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2VbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVkaXRvciBjb250cm9sbGluZyB0aGlzIEluc3RhbmNlIGlmIGFueVxuICAgICAqIEB0eXBlIHtFZGl0b3J8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudWkgPSBudWxsXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFuZCByZWdpc3RlciB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKClcbiAgICB0aGlzLnByZXBhcmUoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcblxuICAgIGlmICh0aGlzLmplZGkub3B0aW9ucy5pc0VkaXRvcikge1xuICAgICAgdGhpcy5zZXRVSSgpXG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5zdGFuY2UgdWkgcHJvcGVydHkuIFVJIGNhbiBiZSBhbiBlZGl0b3IgaW5zdGFuY2Ugb3Igc2ltaWxhclxuICAgKi9cbiAgc2V0VUkgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBwYXRoXG4gICAqL1xuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgdG8gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGNoaWxkIGluc3RhbmNlIHBvaW50ZXIgZnJvbSB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYmFzZWQgb24gaXQncyB0eXBlXG4gICAqL1xuICBzZXRJbml0aWFsVmFsdWUgKCkge1xuICAgIGlmIChub3RTZXQodGhpcy52YWx1ZSkpIHtcbiAgICAgIGxldCB2YWx1ZVxuICAgICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHZhbHVlID0gMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGxcblxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFEZWZhdWx0ID0gZ2V0U2NoZW1hRGVmYXVsdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFEZWZhdWx0KSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShzY2hlbWFEZWZhdWx0LCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGluc3RhbmNlXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcbiAgICB0aGlzLmVtaXQoJ3NldC12YWx1ZScpXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhIGNoaWxkJ3MgaW5zdGFuY2Ugc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBnZXRFcnJvcnMgKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnNjaGVtYSwgdGhpcy5nZXRLZXkoKSwgdGhpcy5wYXRoKVxuXG4gICAgcmV0dXJuIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkoZXJyb3JzKVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgZGF0YSBiZWZvcmUgYnVpbGRpbmcgdGhlIGVkaXRvclxuICAgKi9cbiAgcHJlcGFyZSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBkZWFjdGl2YXRlICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGluc3RhbmNlIGlzIHJlYWQgb25seVxuICAgKi9cbiAgaXNSZWFkT25seSAoKSB7XG4gICAgbGV0IHJlYWRPbmx5ID0gZmFsc2VcblxuICAgIGlmIChnZXRTY2hlbWFSZWFkT25seSh0aGlzLnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiBnZXRTY2hlbWFSZWFkT25seSh0aGlzLnBhcmVudC5zY2hlbWEpID09PSB0cnVlKSB7XG4gICAgICByZWFkT25seSA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlblxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMudW5yZWdpc3RlcigpXG5cbiAgICBpZiAodGhpcy51aSkge1xuICAgICAgdGhpcy51aS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck11bHRpcGxlIGZyb20gJy4uL2VkaXRvcnMvbXVsdGlwbGUnXG5pbXBvcnQge1xuICBpc1NldCxcbiAgaXNBcnJheSxcbiAgZGlmZmVyZW50LFxuICBub3RTZXQsXG4gIGNsb25lLFxuICBpc09iamVjdCxcbiAgb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzLCBtZXJnZURlZXAsIGRlZXBDb3B5XG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi9qZWRpJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU11bHRpcGxlIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VNdWx0aXBsZSBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yTXVsdGlwbGUodGhpcylcbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIHRoaXMuaW5zdGFuY2VzID0gW11cbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlID0gbnVsbFxuICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgIHRoaXMubGFzdEluZGV4ID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG4gICAgdGhpcy5zY2hlbWFzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzID0gW11cbiAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtdXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpIHx8IGlzU2V0KGdldFNjaGVtYU9uZU9mKHRoaXMuc2NoZW1hKSkpIHtcbiAgICAgIGNvbnN0IHNjaGVtYXNPZiA9IGlzU2V0KGdldFNjaGVtYUFueU9mKHRoaXMuc2NoZW1hKSkgPyBnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkgOiBnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSlcbiAgICAgIGNvbnN0IHNjaGVtYUNvcHkgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSlcbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydhbnlPZiddXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnb25lT2YnXVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ29wdGlvbnMnXVxuXG4gICAgICBzY2hlbWFzT2YuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICBzY2hlbWEgPSB7IC4uLnNjaGVtYUNvcHksIC4uLnNjaGVtYSB9XG4gICAgICAgIGxldCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9ICdPcHRpb24tJyArIChpbmRleCArIDEpXG5cbiAgICAgICAgY29uc3Qgc3dpdGNoZXJUaXRsZSA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJylcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShzY2hlbWEpXG5cbiAgICAgICAgaWYgKGlzU2V0KHNjaGVtYVRpdGxlKSkge1xuICAgICAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc2NoZW1hVGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NldChzd2l0Y2hlclRpdGxlKSkge1xuICAgICAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsID0gc3dpdGNoZXJUaXRsZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShzY2hlbWFUeXBlKSkge1xuICAgICAgc2NoZW1hVHlwZS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IG1lcmdlRGVlcCh0aGlzLnNjaGVtYSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgIXNjaGVtYVR5cGUpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gZGVlcENvcHkodGhpcy5zY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ09iamVjdCcsICdBcnJheScsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgICB2YWx1ZTogY2xvbmUodGhpcy52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlKSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLnZhbHVlLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSBpc1NldCh0aGlzLmlmKSA/IHRoaXMuZ2V0SWZJbmRleCh0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2luZGV4XVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdGhpcy52YWx1ZSkgfHwgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gZmFsc2VcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlYXNzaWduVmFsdWVzICgpIHtcbiAgICBjb25zdCBsYXN0SW5zdGFuY2VWYWx1ZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMubGFzdEluZGV4XS5nZXRWYWx1ZSgpXG4gICAgY29uc3QgY3VycmVudEluc3RhbmNlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc09iamVjdChsYXN0SW5zdGFuY2VWYWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudEluc3RhbmNlVmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXJnZWRWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50SW5zdGFuY2VWYWx1ZSwgbGFzdEluc3RhbmNlVmFsdWUpXG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKG1lcmdlZFZhbHVlLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBnZXRJZkluZGV4ICh2YWx1ZSkge1xuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHRoaXMuaWYsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuICAgIHJldHVybiBpZkVycm9ycy5sZW5ndGggPT09IDAgPyAwIDogMVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTXVsdGlwbGVcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bGwgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bGwgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bGwodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bGxcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdW1iZXIgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgdHlwZUlzTnVtZXJpYyA9IHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuXG4gICAgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bWJlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGlzT2JqZWN0LCBoYXNPd24sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFDb250cm9sID0gdGhpcy5zY2hlbWFbJ3gtY29udHJvbCddXG5cbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdCh0aGlzKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnICYmIHNjaGVtYUZvcm1hdCA9PT0gJ2dyaWQnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdEdyaWQodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnICYmIHNjaGVtYUNvbnRyb2wgPT09ICduYXYnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdE5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck9iamVjdCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIHByZXBhcmUgKCkge1xuICAgIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYVByb3BlcnRpZXMpKSB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWFQcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gc2NoZW1hUHJvcGVydGllc1trZXldXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEluc3RhbmNlcygpXG5cbiAgICB0aGlzLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyByZXF1aXJlZFxuICAgKi9cbiAgaXNSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBzY2hlbWFSZXF1aXJlZCA9IGdldFNjaGVtYVJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgcmV0dXJuIGlzU2V0KHNjaGVtYVJlcXVpcmVkKSAmJiBzY2hlbWFSZXF1aXJlZC5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGRlcGVuZGVudCByZXF1aXJlZFxuICAgKi9cbiAgaXNEZXBlbmRlbnRSZXF1aXJlZCAocHJvcGVydHkpIHtcbiAgICBjb25zdCBkZXBlbmRlbnRSZXF1aXJlZCA9IGdldFNjaGVtYURlcGVuZGVudFJlcXVpcmVkKHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGRlcGVuZGVudFJlcXVpcmVkKSkge1xuICAgICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgICAgT2JqZWN0LmtleXMoZGVwZW5kZW50UmVxdWlyZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy52YWx1ZVtrZXldKSkge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllcyA9IGRlcGVuZGVudFJlcXVpcmVkW2tleV1cblxuICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0aWVzID0gcmVxdWlyZWRQcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzT3duKHRoaXMudmFsdWUsIHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtaXNzaW5nUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkIChzY2hlbWEsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsga2V5LFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IGNsb25lKHZhbHVlKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdGFuY2UpXG4gICAgdGhpcy52YWx1ZVtrZXldID0gaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgY29uc3QgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuc2NoZW1hLCAnZGVhY3RpdmF0ZU5vblJlcXVpcmVkJylcblxuICAgIGlmICh0aGlzLmlzTm90UmVxdWlyZWQoa2V5KSAmJiBpc1NldChkZWFjdGl2YXRlTm9uUmVxdWlyZWQpICYmIGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBpc05vdFJlcXVpcmVkIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiAhdGhpcy5pc1JlcXVpcmVkKHByb3BlcnR5KSAmJiAhdGhpcy5pc0RlcGVuZGVudFJlcXVpcmVkKHByb3BlcnR5KVxuICB9XG5cbiAgZGVsZXRlQ2hpbGQgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGlmIChpbnN0YW5jZS5nZXRLZXkoKSA9PT0ga2V5KSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLm9uQ2hpbGRDaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGtleSA9PT0gaW5zdGFuY2UuZ2V0S2V5KCkuc3BsaXQodGhpcy5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2hpbGRDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB2YWx1ZVtjaGlsZC5nZXRLZXkoKV0gPSBjaGlsZC5nZXRWYWx1ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoSW5zdGFuY2VzICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5nZXRDaGlsZChrZXkpXG5cbiAgICAgIC8vIElmIGEgdmFsdWUgaGFzIGEgYWxyZWFkeSBhIGNoaWxkIGluc3RhbmNlXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZVtjaGlsZC5nZXRLZXkoKV1cblxuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgdmFsdWUgaWYgdGhlIG9sZCB2YWx1ZSBhbmQgdGhlIG5ldyB2YWx1ZSBhcmUgZGlmZmVyZW50XG4gICAgICAgIGlmIChkaWZmZXJlbnQob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoaWxkLnNldFZhbHVlKG5ld1ZhbHVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBjaGlsZCBpbnN0YW5jZSBmb3IgdGhlIG5ldyB2YWx1ZSBlbnRyeSBoYXZpbmcgdGhlIHZhbHVlIGFzIGRlZmF1bHRcbiAgICAgICAgdGhpcy5jcmVhdGVDaGlsZCh7fSwga2V5LCB2YWx1ZVtrZXldKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyByZW1vdmUgYW55IGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgdmFsdWVcbiAgICBmb3IgKGxldCBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNoaWxkcmVuW2ldXG4gICAgICBjb25zdCBrZXkgPSBpbnN0YW5jZS5nZXRLZXkoKVxuICAgICAgaWYgKG5vdFNldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZChrZXkpKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVhY3RpdmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWxldGVDaGlsZChrZXkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VPYmplY3RcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvclN0cmluZyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtUmFkaW8gZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0J1xuaW1wb3J0IEVkaXRvclN0cmluZ1RleHRhcmVhIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nLXRleHRhcmVhJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VTdHJpbmcgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycgJiYgc2NoZW1hRm9ybWF0ID09PSAndGV4dGFyZWEnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ1RleHRhcmVhKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmdFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JTdHJpbmcodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VTdHJpbmdcbiIsImltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0aW9uL3ZhbGlkYXRvcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IEluc3RhbmNlTXVsdGlwbGUgZnJvbSAnLi9pbnN0YW5jZXMvbXVsdGlwbGUnXG5pbXBvcnQgSW5zdGFuY2VCb29sZWFuIGZyb20gJy4vaW5zdGFuY2VzL2Jvb2xlYW4nXG5pbXBvcnQgSW5zdGFuY2VPYmplY3QgZnJvbSAnLi9pbnN0YW5jZXMvb2JqZWN0J1xuaW1wb3J0IEluc3RhbmNlQXJyYXkgZnJvbSAnLi9pbnN0YW5jZXMvYXJyYXknXG5pbXBvcnQgSW5zdGFuY2VTdHJpbmcgZnJvbSAnLi9pbnN0YW5jZXMvc3RyaW5nJ1xuaW1wb3J0IEluc3RhbmNlTnVtYmVyIGZyb20gJy4vaW5zdGFuY2VzL251bWJlcidcbmltcG9ydCBJbnN0YW5jZU51bGwgZnJvbSAnLi9pbnN0YW5jZXMvbnVsbCdcbmltcG9ydCBSZWZQYXJzZXIgZnJvbSAnLi9yZWYtcGFyc2VyL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEplZGkgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIEplZGkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gb3B0aW9ucy5zY2hlbWEgLSBBIEpTT04gc2NoZW1hXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5pc0VkaXRvciAtIEdlbmVyYXRlcyBVSSBjb250cm9scyB0byBlZGl0IHRoZSBKU09OIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb250YWluZXIgLSBXaGVyZSB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aGVtZSAtIEhvdyB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgc2hvd0Vycm9yczogJ2NoYW5nZScsXG4gICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICBYTUxIdHRwUmVxdWVzdDogdW5kZWZpbmVkXG4gICAgfSwgb3B0aW9ucylcblxuICAgIC8qKlxuICAgICAqIFJvb3RzIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucm9vdE5hbWUgPSAnIydcblxuICAgIC8qKlxuICAgICAqIFNlcGFyYXRvciBzeW1ib2wgdXNlZCBpbiBwYXRoc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSAnLydcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgcmVnaXN0ZXJlZCBpbnN0YW5jZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnN0YW5jZXMgPSB7fVxuXG4gICAgLyoqXG4gICAgICogVGhlIHJvb3QgZWRpdG9yXG4gICAgICogQHR5cGUge0luc3RhbmNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290ID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gZ2VuZXJhdGUgZWRpdG9ycyB1c2VyIGludGVyZmFjZXNcbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIFZhbGlkYXRvciBpbnN0YW5jZSB1c2VkIHRvIHZhbGlkYXRlIGluc3RhbmNlIHZhbHVlc1xuICAgICAqIEB0eXBlIHtWYWxpZGF0b3J9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvciA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEganNvbiBzY2hlbWEgdXNlZFxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zY2hlbWEgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBBIFJlZlBhcnNlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtSZWZQYXJzZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJlZlBhcnNlciA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgdGhpcy5yZWZQYXJzZXIgPSBuZXcgUmVmUGFyc2VyKHsgWE1MSHR0cFJlcXVlc3Q6IHRoaXMub3B0aW9ucy5YTUxIdHRwUmVxdWVzdCB9KVxuICAgIHRoaXMucmVmUGFyc2VyLmRlcmVmZXJlbmNlKHRoaXMub3B0aW9ucy5zY2hlbWEpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKHRoaXMucmVmUGFyc2VyKVxuXG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLm9wdGlvbnMuc2NoZW1hXG4gICAgfSlcblxuICAgIGlmIChpc1NldCh0aGlzLm9wdGlvbnMuZGF0YSkpIHtcbiAgICAgIHRoaXMucm9vdC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnMuZGF0YSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0VkaXRvciAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgIHRoaXMuYXBwZW5kSGlkZGVuSW5wdXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LnVpLmNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1yZWFkeScpXG4gICAgfVxuXG4gICAgdGhpcy5yb290Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGEgaGlkZGVuIGlucHV0IHRvIHRoZSByb290IGNvbnRhaW5lciB3aG8ncyB2YWx1ZSB3aWxsIGJlIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFwcGVuZEhpZGRlbklucHV0ICgpIHtcbiAgICBjb25zdCBoaWRkZW5Db250cm9sID0gdGhpcy5yb290LnVpLnRoZW1lLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIGlkOiAnamVkaS1oaWRkZW4taW5wdXQnXG4gICAgfSlcbiAgICB0aGlzLmhpZGRlbklucHV0ID0gaGlkZGVuQ29udHJvbC5pbnB1dFxuXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnanNvbicpXG4gICAgdGhpcy5oaWRkZW5JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBqc29uIGluc3RhbmNlIGFuZCBkZXJlZmVyZW5jZSBzY2hlbWEgb24gdGhlIGZseSBpZiBuZWVkZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVJbnN0YW5jZSAoY29uZmlnKSB7XG4gICAgY29uZmlnLnNjaGVtYSA9IHRoaXMucmVmUGFyc2VyLmV4cGFuZChjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hT25lT2YgPSBnZXRTY2hlbWFPbmVPZihjb25maWcuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUFueU9mID0gZ2V0U2NoZW1hQW55T2YoY29uZmlnLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFBbnlPZikgfHwgaXNTZXQoc2NoZW1hT25lT2YpIHx8IHNjaGVtYVR5cGUgPT09ICdhbnknIHx8IGlzQXJyYXkoc2NoZW1hVHlwZSkgfHwgbm90U2V0KHNjaGVtYVR5cGUpKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTXVsdGlwbGUoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU9iamVjdChjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VBcnJheShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlU3RyaW5nKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hVHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVtYmVyKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlQm9vbGVhbihjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZU51bGwoY29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcm9vdCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqL1xuICBzZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy5yb290LnNldFZhbHVlKC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaW5zdGFuY2UgYnkgcGF0aFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbcGF0aF1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgcm9vdCBpbnN0YW5jZSBhbmQgaXQncyBjaGlsZHJlbiB1c2VyIGludGVyZmFjZXNcbiAgICovXG4gIGRpc2FibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5kaXNhYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZW5hYmxlICgpIHtcbiAgICB0aGlzLnJvb3QudWkuZW5hYmxlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmluc3RhbmNlc1trZXldXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3IuZ2V0RXJyb3JzKCldXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJvb3QuZGVzdHJveSgpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5cbmltcG9ydCB7XG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1NldFxufSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWxsT2YsXG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hUHJlZml4SXRlbXNcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFJlZlBhcnNlciBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgUmVmUGFyc2VyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLml0ZXJhdGlvbnMgPSBvcHRpb25zLml0ZXJhdGlvbnMgfHwgMVxuICAgIHRoaXMuWE1MSHR0cFJlcXVlc3QgPSBvcHRpb25zLlhNTEh0dHBSZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0XG4gICAgdGhpcy5yZWZEZWZpbml0aW9ucyA9IHt9XG4gIH1cblxuICBkZXJlZmVyZW5jZSAoc2NoZW1hKSB7XG4gICAgdGhpcy50cmF2ZXJzZSh7XG4gICAgICB2YWx1ZTogc2NoZW1hLFxuICAgICAgY2FsbGJhY2s6IChhcmdzKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmtleSA9PT0gJyRyZWYnKSB7XG4gICAgICAgICAgdGhpcy5yZWZEZWZpbml0aW9uc1thcmdzLnZhbHVlXSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkZWZpbmUgZXh0ZXJuYWwgcmVmc1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVmRGVmaW5pdGlvbnMpLmZvckVhY2goKHJlZikgPT4ge1xuICAgICAgaWYgKHJlZi5zdGFydHNXaXRoKCdodHRwJykgfHwgcmVmLnN0YXJ0c1dpdGgoJ2h0dHBzJykpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB0aGlzLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCByZWYsIGZhbHNlKSAvLyBgZmFsc2VgIG1ha2VzIHRoZSByZXF1ZXN0IHN5bmNocm9ub3VzXG4gICAgICAgIHJlcXVlc3Quc2VuZChudWxsKVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5yZWZEZWZpbml0aW9uc1tyZWZdID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW4gbm90IGxvYWQnLCByZWYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gZGVmaW5lIGludGVybmFsIHJlZnNcbiAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMucmVmRGVmaW5pdGlvbnNbYXJncy5wYXRoXSkpIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW2FyZ3MucGF0aF0gPSBhcmdzLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZXhwYW5kIChzY2hlbWEpIHtcbiAgICBpZiAoaXNTZXQoc2NoZW1hWyckcmVmJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZEZWZpbml0aW9uc1tzY2hlbWFbJyRyZWYnXV1cbiAgICB9XG5cbiAgICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcbiAgICBjb25zdCBvbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcbiAgICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcbiAgICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICAgIGlmIChpc1NldChhbnlPZikpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGFueU9mKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLmFueU9mW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMob25lT2YpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEub25lT2Zba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhhbGxPZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5hbGxPZltrZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByZWZpeEl0ZW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLnByZWZpeEl0ZW1zW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNScpXG4gICAgbGVnZW5kLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyLWJvdHRvbTogbm9uZTsnKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtcmlnaHQnKVxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncGFuZWwtYm9keScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgLy8gaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsICcjJyArIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgLy8gaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNicpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1lbmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdoNicpXG4gICAgcmV0dXJuIGxlZ2VuZFxuICB9XG5cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgY29uc3QgY2FyZCA9IHN1cGVyLmdldENhcmQoKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICByZXR1cm4gY2FyZFxuICB9XG5cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRIZWFkZXIoY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZC1mbGV4JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1lbmQnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B5LTEnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDYXJkQm9keSAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldENhcmRCb2R5KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYi0wJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRBcnJheUFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZmxvYXQtZW5kJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGNvbnRyb2xTbG90ID0gc3VwZXIuZ2V0Q29udHJvbFNsb3QoKVxuICAgIGNvbnRyb2xTbG90LmNsYXNzTGlzdC5hZGQoJ21iLTMnKVxuICAgIHJldHVybiBjb250cm9sU2xvdFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnY29sbGFwc2UnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjJyArIGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCIvKipcbiAqIExpc3RzIG9mIGh0bWwgY2xhc3NlcyB1c2VkIGZvciBpY29ucy5cbiAqIEBtb2R1bGUgaWNvbnNcbiAqL1xuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZ2x5cGhpY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdseXBoaWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QnLFxuICBkZWxldGU6ICdnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoJyxcbiAgYWRkOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgYm9vdHN0cmFwLWljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgYm9vdHN0cmFwSWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdiaSBiaS1jYXJkLWxpc3QnLFxuICBkZWxldGU6ICdiaSBiaS10cmFzaDInLFxuICBhZGQ6ICdiaSBiaS1wbHVzJyxcbiAgbW92ZVVwOiAnYmkgYmktYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2JpIGJpLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTMgPSB7XG4gIHByb3BlcnRpZXM6ICdpY29uLWxpc3QnLFxuICBkZWxldGU6ICdpY29uLXRyYXNoJyxcbiAgYWRkOiAnaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU0IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU0ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYSBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU1IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU1ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmFzIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYXMgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYXMgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhcyBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmFzIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTYgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTYgPSB7XG4gIHByb3BlcnRpZXM6ICdmYS1zb2xpZCBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmEtc29saWQgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYS1zb2xpZCBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEtc29saWQgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhLXNvbGlkIGZhLWFycm93LWRvd24nXG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvciAoaWNvbnMgPSBudWxsKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKG5hbWUpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaWNvbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJY29uIChuYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNvbnN0IGljb25DbGFzc2VzID0gdGhpcy5pY29uc1tuYW1lXS5zcGxpdCgnICcpXG5cbiAgICBpZiAoaWNvbkNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWNvbkNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGRpdiB1c2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBmaWVsZHNldCBlbGVtZW50LlxuICAgKiBVc2VkIHRvIHdyYXAgY2hpbGRyZW4gc2xvdCBhbmQgcHJvdmlkZSBtb3JlIHNlbWFudGljIGh0bWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29tcGxleCBlZGl0b3JzIGxpa2UgYXJyYXlzLCBvYmplY3RzIGFuZCBtdWx0aXBsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogTGVnZW5kIGVsZW1lbnQgdXNlZCBpbiBmaWVsZHNldHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgY2hpbGQgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgncm9sZScsICdhbGVydCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBlZGl0b3IgY29udHJvbHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENvbnRyb2xTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29udHJvbC1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgcHJvcGVydGllcyBlZGl0aW5nIGVsZW1lbnRzIGxpa2UgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXNsb3QnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgaHRtbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBPYmplY3RFZGl0b3IgcHJvcGVydGllcyB3cmFwcGVyIHZpc2liaWxpdHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG5cbiAgICBpZiAodGhpcy51c2VUb2dnbGVFdmVudHMpIHtcbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnc3R5bGUnKSkge1xuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlRWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdG9nZ2xlXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgcHJvcGVydHkgYWN0aXZhdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0FjdGl2YXRvcnMgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcblxuICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG5cbiAgICBpZiAodGhpcy5pY29ucyAmJiBjb25maWcuaWNvbikge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMuZ2V0SWNvbihjb25maWcuaWNvbilcbiAgICAgIGljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGNvbmZpZy50ZXh0Q29udGVudClcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuICAgICAgdGhpcy5oaWRlRWxlbWVudCh0ZXh0KVxuICAgIH1cblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwiYWRkXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QnRuQWRkIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hZGQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJkZWxldGVcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVsZXRlSXRlbUJ0biAoKSB7XG4gICAgY29uc3QgZGVsZXRlSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnRGVsZXRlIGl0ZW0nLFxuICAgICAgaWNvbjogJ2RlbGV0ZSdcbiAgICB9KVxuXG4gICAgZGVsZXRlSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWRlbGV0ZScpXG5cbiAgICByZXR1cm4gZGVsZXRlSXRlbUJ0blxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IFwibW92ZSB1cFwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlVXBJdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlVXBJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdNb3ZlIHVwJyxcbiAgICAgIGljb246ICdtb3ZlVXAnXG4gICAgfSlcblxuICAgIG1vdmVVcEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1tb3ZlLXVwJylcblxuICAgIHJldHVybiBtb3ZlVXBJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIGRvd25cIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TW92ZURvd25JdGVtQnRuICgpIHtcbiAgICBjb25zdCBtb3ZlRG93bkl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgZG93bicsXG4gICAgICBpY29uOiAnbW92ZURvd24nXG4gICAgfSlcblxuICAgIG1vdmVEb3duSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtZG93bicpXG5cbiAgICByZXR1cm4gbW92ZURvd25JdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGhlIGVkaXRvciBkZXNjcmlwdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdCBjb250cm9sIGlzIGEgY2FyZCBjb250YWluaW5nIG11bHRpcGxlIGVkaXRvcnMuXG4gICAqIEVhY2ggZWRpdG9yIGlzIG1hcHBlZCB0byBhbiBvYmplY3QgaW5zdGFuY2UgcHJvcGVydHkuXG4gICAqIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkLCBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkIGRlcGVuZGluZyBvbiBjb25maWd1cmF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPYmplY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuXG4gICAgY29uc3QgcHJvcGVydGllc0NvbnRhaW5lciA9IHRoaXMuZ2V0UHJvcGVydGllc1Nsb3Qoe1xuICAgICAgaWQ6ICdwcm9wZXJ0aWVzLXNsb3QtJyArIGNvbmZpZy5pZFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9nZ2xlID0gdGhpcy5nZXRQcm9wZXJ0aWVzVG9nZ2xlKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUgKyAnICcgKyAncHJvcGVydGllcycsXG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC10b2dnbGUtJyArIGNvbmZpZy5pZCxcbiAgICAgIGljb246ICdwcm9wZXJ0aWVzJyxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXI6IHByb3BlcnRpZXNDb250YWluZXJcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvcGVydGllc0FjdGl2YXRvcnMgPSB0aGlzLmdldFByb3BlcnRpZXNBY3RpdmF0b3JzKClcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5Q29udHJvbCA9IHRoaXMuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkOiAnamVkaS1hZGQtcHJvcGVydHktaW5wdXQtJyArIGNvbmZpZy5pZCxcbiAgICAgIGxhYmVsOiAnUHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb3BlcnR5QnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgcHJvcGVydHknXG4gICAgfSlcblxuICAgIGNvbnN0IGZpZWxkc2V0ID0gdGhpcy5nZXRGaWVsZHNldCgpXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZVxuICAgIH0pXG5cbiAgICBhZGRQcm9wZXJ0eUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLW9iamVjdC1hZGQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKHByb3BlcnRpZXNDb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGlsZHJlblNsb3QpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcblxuICAgIGlmIChjb25maWcuZWRpdGFibGVQcm9wZXJ0aWVzKSB7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHByb3BlcnRpZXNUb2dnbGUpXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnRpZXNBY3RpdmF0b3JzKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuYWRkUHJvcGVydHkpIHtcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlDb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvcGVydHlCdG4pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgcHJvcGVydGllc1RvZ2dsZSxcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIsXG4gICAgICBhZGRQcm9wZXJ0eUNvbnRyb2wsXG4gICAgICBhZGRQcm9wZXJ0eUJ0bixcbiAgICAgIHByb3BlcnRpZXNBY3RpdmF0b3JzLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFycmF5IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogSXRlbXMgY2FuIGJ2ZSBhZGRlZCwgZGVsZXRlZCBvciBtb3ZlZCB1cCBvciBkb3duLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgY2hpbGRyZW5TbG90ID0gdGhpcy5nZXRDaGlsZHJlblNsb3QoKVxuICAgIGNvbnN0IGJ0bkdyb3VwID0gdGhpcy5nZXRCdG5Hcm91cCgpXG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmdldEFycmF5QnRuQWRkKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIGl0ZW0gaW50bycgKyAnICcgKyBjb25maWcudGl0bGUsXG4gICAgICBpY29uOiAnYWRkJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgYnRuR3JvdXAsXG4gICAgICBhZGRCdG4sXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTXVsdGlwbGUgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzIG9wdGlvbnMgdGhhdCBjYW4gYmVcbiAgICogc2VsZWN0ZWQgd2l0aCBhIHN3aXRjaGVyIGNvbnRyb2wuIE9ubHkgb25lIGVkaXRvciBjYW4gYmUgYWN0aXZlL3Zpc2libGVcbiAgICogYXQgYSB0aW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNdWx0aXBsZUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnN0IGNoaWxkcmVuU2xvdCA9IHRoaXMuZ2V0Q2hpbGRyZW5TbG90KClcblxuICAgIGNvbnN0IHN3aXRjaGVyID0gdGhpcy5nZXRTd2l0Y2hlcih7XG4gICAgICB2YWx1ZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHRpdGxlczogY29uZmlnLnN3aXRjaGVyT3B0aW9uc0xhYmVscyxcbiAgICAgIGlkOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIGxhYmVsOiBjb25maWcuaWQgKyAnLXN3aXRjaGVyJyxcbiAgICAgIHNyT25seTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiBjb25maWcucmVhZE9ubHlcbiAgICB9KVxuXG4gICAgc3dpdGNoZXIuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktc3dpdGNoZXInKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKHN3aXRjaGVyLmNvbnRhaW5lcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNhcmQsXG4gICAgICBib2R5LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIG1lc3NhZ2VzLFxuICAgICAgY2hpbGRyZW5TbG90LFxuICAgICAgc3dpdGNoZXIsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCBmb3IgTnVsbEVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TnVsbENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGV4dGFyZWFcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBtZXNzYWdlc0lkID0gY29uZmlnLmlkICsgJy1tZXNzYWdlcydcbiAgICBtZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVzc2FnZXNJZClcblxuICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gZGVzY3JpcHRpb25JZCArICcgJyArIG1lc3NhZ2VzSWRcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmliZWRCeSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGlucHV0LCBsYWJlbCwgbGFiZWxUZXh0LCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQW4gSW5wdXQgY29udHJvbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgY29uZmlnLnR5cGUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGRlc2NyaXB0aW9uSWQpXG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIG1lc3NhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCBtZXNzYWdlc0lkKVxuXG4gICAgY29uc3QgZGVzY3JpYmVkQnkgPSBkZXNjcmlwdGlvbklkICsgJyAnICsgbWVzc2FnZXNJZFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJhZGlvIGdyb3VwIGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgZmllbGRzZXQgPSB0aGlzLmdldEZpZWxkc2V0KClcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBsZWdlbmQgPSB0aGlzLmdldExlZ2VuZCh7XG4gICAgICB0ZXh0Q29udGVudDogY29uZmlnLmxhYmVsXG4gICAgfSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzSWQgPSBjb25maWcuaWQgKyAnLW1lc3NhZ2VzJ1xuICAgIG1lc3NhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCBtZXNzYWdlc0lkKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIH1cblxuICAgIGNvbnN0IHJhZGlvQ29udHJvbHMgPSBbXVxuICAgIGNvbnN0IHJhZGlvcyA9IFtdXG4gICAgY29uc3QgbGFiZWxzID0gW11cbiAgICBjb25zdCBsYWJlbFRleHRzID0gW11cblxuICAgIGNvbmZpZy52YWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcmFkaW9Db250cm9scy5wdXNoKHJhZGlvQ29udHJvbClcblxuICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgcmFkaW9zLnB1c2gocmFkaW8pXG5cbiAgICAgIGNvbnN0IGRlc2NyaWJlZEJ5ID0gZGVzY3JpcHRpb25JZCArICcgJyArIG1lc3NhZ2VzSWRcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaWJlZEJ5KVxuXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG5cbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbGFiZWxUZXh0cy5wdXNoKGxhYmVsVGV4dClcblxuICAgICAgaWYgKGNvbmZpZy50aXRsZXMgJiYgY29uZmlnLnRpdGxlc1tpbmRleF0pIHtcbiAgICAgICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gY29uZmlnLnRpdGxlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpXG4gICAgfSlcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5sYWJlbCkge1xuICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZClcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZpZWxkc2V0LCBsZWdlbmQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMsIGFjdGlvbnMsIGFycmF5QWN0aW9ucyB9XG4gIH1cblxuICAvKipcbiAgICogQSBjaGVja2JveCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDaGVja2JveENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsIG1lc3NhZ2VzSWQpXG5cbiAgICBjb25zdCBkZXNjcmliZWRCeSA9IGRlc2NyaXB0aW9uSWQgKyAnICcgKyBtZXNzYWdlc0lkXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gY29uZmlnLmlkICsgJy1kZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG4gICAgY29uc3QgbWVzc2FnZXNJZCA9IGNvbmZpZy5pZCArICctbWVzc2FnZXMnXG4gICAgbWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsIG1lc3NhZ2VzSWQpXG5cbiAgICBjb25zdCBkZXNjcmliZWRCeSA9IGRlc2NyaXB0aW9uSWQgKyAnICcgKyBtZXNzYWdlc0lkXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwsIGxhYmVsVGV4dCwgZGVzY3JpcHRpb24sIG1lc3NhZ2VzLCBhY3Rpb25zLCBhcnJheUFjdGlvbnMgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgdG8gc3dpdGNoIGJldHdlZW4gbXVsdGlwbGUgZWRpdG9ycyBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0Q29udHJvbChjb25maWcpXG4gIH1cblxuICAvKipcbiAgICogQW5vdGhlciB0eXBlIG9mIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyIHVzZWQgZm9yIG1vcmUgY29tcGxleCBlZGl0b3JzIGxpa2VcbiAgICogb2JqZWN0LCBhcnJheSBhbmQgbXVsdGlwbGUgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBodG1sLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2VcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29sdW1uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdqZWRpLXJvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29sdW1uIHRvIGNvbnRhaW4gY29udGVudCB0byBhIHNwZWNpZmljIHdpZHRoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC14cy0nICsgeHMpXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2plZGktY29sLW1kLW9mZnNldC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgLyoqXG4gICAqIFRhYiBsaXN0IGlzIGEgbGlzdCBvZiBsaW5rcyB0aGF0IHRyaWdnZXJzIHRhYnMgdmlzaWJpbGl0eSBuZSBhdCB0aGUgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpc3QnKVxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICAvKipcbiAgICogQSBUYWIgaXMgYSB3cmFwcGVyIGZvciBjb250ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnamVkaS1uYXYtbGluaycpXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBjb25maWcuaWQpXG4gICAgbGluay50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGluaylcbiAgICByZXR1cm4geyBsaXN0LCBsaW5rIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0YWJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUYWJDb250ZW50ICgpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50JylcbiAgICByZXR1cm4gdGFiQ29udGVudFxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0YWIgYXR0cmlidXRlcyB0byBtYWtlIGl0IHRvZ2dsZWFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFRhYlBhbmVBdHRyaWJ1dGVzIChlbGVtZW50LCBhY3RpdmUsIGlkKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqZWRpLXRhYi1wYW5lJylcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBlbGVtZW50IHZpc3VhbGx5IGhpZGRlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246IGFic29sdXRlO3dpZHRoOiAxcHg7aGVpZ2h0OiAxcHg7cGFkZGluZzogMDttYXJnaW46IC0xcHg7b3ZlcmZsb3c6IGhpZGRlbjtjbGlwOiByZWN0KDAsMCwwLDApO2JvcmRlcjogMDsnKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldmVhbHMgYSB2aXN1YWxseSBoaWRkZW4gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCIvKipcbiAqIGNvbnN0cmFpbnMgYWRkaXRpb25hbFByb3BlcnRpZXNcbiAqL1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGhhc093biwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcywgZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMsIGdldFNjaGVtYVByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkaXRpb25hbFByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hUGF0dGVyblByb3BlcnRpZXMgPSBnZXRTY2hlbWFQYXR0ZXJuUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVByb3BlcnRpZXMgPSBnZXRTY2hlbWFQcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSA/IHNjaGVtYVByb3BlcnRpZXMgOiB7fVxuICAgIGNvbnN0IGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzXG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGxldCBkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkgPSBmYWxzZVxuXG4gICAgICAgIGlmIChpc1NldChwYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaCgocGF0dGVybikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICAgICAgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gcmVnZXhwLnRlc3QocHJvcGVydHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yQWRkaXRpb25hbFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ICYmIGlzT2JqZWN0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiAhaGFzT3duKHByb3BlcnRpZXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IG5ldyBKZWRpKHtcbiAgICAgICAgICAgIFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LFxuICAgICAgICAgICAgc2NoZW1hOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5XVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFsbE9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbGxPZikpIHtcbiAgICBhbGxPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogc2NoZW1hLCBkYXRhOiB2YWx1ZSwgcm9vdE5hbWU6IGtleSB9KVxuICAgICAgY29uc3Qgc3ViU2NoZW1hRXJyb3JzID0gc3ViU2NoZW1hRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBzdWJTY2hlbWFFZGl0b3IuZGVzdHJveSgpXG4gICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5zdWJTY2hlbWFFcnJvcnNdXG4gICAgICBlcnJvcnMgPSByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5KGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUFueU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFueU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoYW55T2YpKSB7XG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGFueU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3QgYW55T2ZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IGFueU9mRXJyb3JzID0gYW55T2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIGFueU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAoYW55T2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvckFueU9mXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIGRpZmZlcmVudCwgY29tcGlsZVRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUNvbnN0IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQ29uc3QgPSBnZXRTY2hlbWFDb25zdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUNvbnN0KSkge1xuICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gZGlmZmVyZW50KHZhbHVlLCBzY2hlbWFDb25zdClcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckNvbnN0LCB7XG4gICAgICAgICAgICBjb25zdDogSlNPTi5zdHJpbmdpZnkoc2NoZW1hQ29uc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBnZXRTY2hlbWFDb250YWlucywgZ2V0U2NoZW1hTWF4Q29udGFpbnMsIGdldFNjaGVtYU1pbkNvbnRhaW5zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBjb250YWlucyA9IGdldFNjaGVtYUNvbnRhaW5zKHNjaGVtYSlcbiAgY29uc3QgbWluQ29udGFpbnMgPSBnZXRTY2hlbWFNaW5Db250YWlucyhzY2hlbWEpXG4gIGNvbnN0IG1heENvbnRhaW5zID0gZ2V0U2NoZW1hTWF4Q29udGFpbnMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChjb250YWlucykpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5zRWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBjb250YWlucywgZGF0YTogaXRlbSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQobWluQ29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IG1pbkNvbnRhaW5zKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Db250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtaW5Db250YWluczogbWluQ29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbaTE4bi5lcnJvckNvbnRhaW5zXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG1heENvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBtYXhDb250YWlucylcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4Q29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWF4Q29udGFpbnM6IG1heENvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCwge1xuICAgICAgICAgICAgZGVwZW5kZW50UmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50U2NoZW1hcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFNjaGVtYXMpKSB7XG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW50U2NoZW1hcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gZGVwZW5kZW50U2NoZW1hc1trZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsIHNjaGVtYTogZGVwZW5kZW50U2NoZW1hLCBkYXRhOiB2YWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi50bXBFcnJvcnNdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfZW51bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hRW51bSA9IGdldFNjaGVtYUVudW0oc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFFbnVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAhc2NoZW1hRW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFbnVtLCB7XG4gICAgICAgICAgICBlbnVtOiBKU09OLnN0cmluZ2lmeShzY2hlbWFFbnVtKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZXhjbHVzaXZlTWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IGdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID49IGV4Y2x1c2l2ZU1heGltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yRXhjbHVzaXZlTWF4aW11bSwge1xuICAgICAgICAgICAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPD0gZXhjbHVzaXZlTWluaW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNaW5pbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFGb3JtYXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBmb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQoc2NoZW1hKVxuXG4gIGlmIChpc1NldChmb3JtYXQpICYmIGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIGxldCByZWdleHBcblxuICAgIGlmIChmb3JtYXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8kL2kpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3VybCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzpodHRwcz98ZnRwKTpcXC9cXC8oPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKD86XFwuKD86W2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKy0pKlthLXowLTlcXHV7MDBhMX0tXFx1e2ZmZmZ9XSspKig/OlxcLig/OlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9XXsyLH0pKSkoPzo6XFxkezIsNX0pPyg/OlxcL1teXFxzXSopPyQvaXUpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3V1aWQnKSB7XG4gICAgICByZWdleHAgPSBuZXcgUmVnRXhwKC9eKD86dXJuOnV1aWQ6KT9bMC05YS1mXXs4fS0oPzpbMC05YS1mXXs0fS0pezN9WzAtOWEtZl17MTJ9JC9pKVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSBpc1NldChyZWdleHApICYmICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JGb3JtYXQsIHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQsIG5vdFNldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbHNlLCBnZXRTY2hlbWFJZiwgZ2V0U2NoZW1hVGhlbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gX2lmICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFJZiA9IGdldFNjaGVtYUlmKHNjaGVtYSlcbiAgY29uc3Qgc2NoZW1hVGhlbiA9IGdldFNjaGVtYVRoZW4oc2NoZW1hKVxuICBjb25zdCBzY2hlbWFFbHNlID0gZ2V0U2NoZW1hRWxzZShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUlmKSkge1xuICAgIGlmIChub3RTZXQoc2NoZW1hVGhlbikgJiYgbm90U2V0KHNjaGVtYUVsc2UpKSB7XG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuXG4gICAgY29uc3QgaWZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYUlmLCBkYXRhOiB2YWx1ZSB9KVxuICAgIGNvbnN0IGlmRXJyb3JzID0gaWZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICBpZkVkaXRvci5kZXN0cm95KClcblxuICAgIGxldCB0aGVuRXJyb3JzID0gW11cbiAgICBsZXQgZWxzZUVycm9ycyA9IFtdXG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hVGhlbikpIHtcbiAgICAgIGNvbnN0IHRoZW5FZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYVRoZW4sIGRhdGE6IHZhbHVlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYUVsc2UsIGRhdGE6IHZhbHVlIH0pXG4gICAgICBlbHNlRXJyb3JzID0gZWxzZUVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgZWxzZUVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYUlmID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGVsc2VFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaWZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhlbkVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUl0ZW1zLCBnZXRTY2hlbWFQcmVmaXhJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBpdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgaXRlbXMgPSBnZXRTY2hlbWFJdGVtcyhzY2hlbWEpXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChpdGVtcykpIHtcbiAgICBjb25zdCBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCA9IGlzU2V0KHByZWZpeEl0ZW1zKSA/IHByZWZpeEl0ZW1zLmxlbmd0aCA6IDBcblxuICAgIGlmIChpdGVtcyA9PT0gZmFsc2UgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPiBwcmVmaXhJdGVtc1NjaGVtYXNDb3VudCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW2kxOG4uZXJyb3JNYXhQcm9wZXJ0aWVzXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzQXJyYXksIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1heEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhJdGVtcyA9IGdldFNjaGVtYU1heEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQobWF4SXRlbXMpKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhJdGVtcywge1xuICAgICAgICAgICAgbWF4SXRlbXM6IG1heEl0ZW1zXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0LCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNYXhMZW5ndGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRTY2hlbWFNYXhMZW5ndGgoc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQobWF4TGVuZ3RoKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcdURDQTldL2csICcnKSAvLyByZW1vdmUgVW5pY29kZSBjb2RlIHBvaW50c1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heExlbmd0aCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNPYmplY3QsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4UHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4UHJvcGVydGllcyA9IGdldFNjaGVtYU1heFByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQobWF4UHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ291bnQgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZCA9IChwcm9wZXJ0aWVzQ291bnQgPiBtYXhQcm9wZXJ0aWVzKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heFByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heGltdW0gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4aW11bSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWF4aW11bSA9IGdldFNjaGVtYU1heGltdW0oc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobWF4aW11bSkpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlID4gbWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNYXhpbXVtLCB7XG4gICAgICAgICAgICBtYXhpbXVtOiBtYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWluSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkl0ZW1zID0gZ2V0U2NoZW1hTWluSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtaW5JdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbkl0ZW1zLCB7XG4gICAgICAgICAgICBtaW5JdGVtczogbWluSXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1pbkxlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbkxlbmd0aCA9IGdldFNjaGVtYU1pbkxlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtaW5MZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluTGVuZ3RoLCB7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluUHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5Qcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWluUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtaW5Qcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA8IG1pblByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluUHJvcGVydGllcywge1xuICAgICAgICAgICAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluaW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtaW5pbXVtID0gZ2V0U2NoZW1hTWluaW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtaW5pbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPCBtaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1pbmltdW0sIHtcbiAgICAgICAgICAgIG1pbmltdW06IG1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNOdW1iZXIsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU11bHRpcGxlT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbGVPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbXVsdGlwbGVPZiA9IGdldFNjaGVtYU11bHRpcGxlT2Yoc2NoZW1hKVxuXG4gIGlmIChpc051bWJlcih2YWx1ZSkgJiYgaXNTZXQobXVsdGlwbGVPZikpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgY29uc3QgaW52YWxpZCA9ICghaXNNdWx0aXBsZU9mIHx8IHZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2UnKSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNdWx0aXBsZU9mLCB7XG4gICAgICAgICAgICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzU2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU5vdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuXG5leHBvcnQgZnVuY3Rpb24gbm90ICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBub3QgPSBnZXRTY2hlbWFOb3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChub3QpKSB7XG4gICAgY29uc3Qgbm90RWRpdG9yID0gbmV3IEplZGkoeyBYTUxIdHRwUmVxdWVzdDogdmFsaWRhdG9yLnJlZlBhcnNlci5YTUxIdHRwUmVxdWVzdCwgc2NoZW1hOiBub3QsIGRhdGE6IHZhbHVlIH0pXG4gICAgY29uc3Qgbm90RXJyb3JzID0gbm90RWRpdG9yLmdldEVycm9ycygpXG4gICAgbm90RWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG5vdEVycm9ycy5sZW5ndGggPT09IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JOb3QpXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hT25lT2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gb25lT2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG9uZU9mID0gZ2V0U2NoZW1hT25lT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChvbmVPZikpIHtcbiAgICBsZXQgY291bnRlciA9IDBcblxuICAgIG9uZU9mLmZvckVhY2goKHNjaGVtYSkgPT4ge1xuICAgICAgY29uc3Qgb25lT2ZFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IHNjaGVtYSwgZGF0YTogdmFsdWUgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yT25lT2YsIHtcbiAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXJcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVybiA9IGdldFNjaGVtYVBhdHRlcm4oc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQocGF0dGVybikpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQYXR0ZXJuLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IGF0dGVyblByb3BlcnRpZXNcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgWE1MSHR0cFJlcXVlc3Q6IHZhbGlkYXRvci5yZWZQYXJzZXIuWE1MSHR0cFJlcXVlc3QsXG4gICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yRXJyb3JzID0gZWRpdG9yLmdldEVycm9ycygpLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBlcnJvci5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCArICcvJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5lZGl0b3JFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQocHJlZml4SXRlbXMpKSB7XG4gICAgcHJlZml4SXRlbXMuZm9yRWFjaCgoaXRlbVNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IHZhbHVlW2luZGV4XVxuXG4gICAgICBpZiAoaXNTZXQoaXRlbVZhbHVlKSkge1xuICAgICAgICBjb25zdCB0bXBFZGl0b3IgPSBuZXcgSmVkaSh7IFhNTEh0dHBSZXF1ZXN0OiB2YWxpZGF0b3IucmVmUGFyc2VyLlhNTEh0dHBSZXF1ZXN0LCBzY2hlbWE6IGl0ZW1TY2hlbWEsIGRhdGE6IGl0ZW1WYWx1ZSB9KVxuICAgICAgICBjb25zdCB0bXBFcnJvcnMgPSB0bXBFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgICAgdG1wRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICAgIGlmICh0bXBFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUHJlZml4SXRlbXMsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZChzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChyZXF1aXJlZCkpIHtcbiAgICBjb25zdCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuXG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBtaXNzaW5nUHJvcGVydGllcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JSZXF1aXJlZCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7XG4gIGNvbXBpbGVUZW1wbGF0ZSwgZ2V0VHlwZSxcbiAgaXNBcnJheSxcbiAgaXNCb29sZWFuLFxuICBpc0ludGVnZXIsXG4gIGlzTnVsbCxcbiAgaXNOdW1iZXIsXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZSAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdHlwZSA9IGdldFNjaGVtYVR5cGUoc2NoZW1hKVxuXG4gIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGlmIChpc1NldCh0eXBlKSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgc3RyaW5nOiB2YWx1ZSA9PiBpc1N0cmluZyh2YWx1ZSksXG4gICAgICBudW1iZXI6IHZhbHVlID0+IGlzTnVtYmVyKHZhbHVlKSxcbiAgICAgIGludGVnZXI6IHZhbHVlID0+IGlzSW50ZWdlcih2YWx1ZSksXG4gICAgICBib29sZWFuOiB2YWx1ZSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgYXJyYXk6IHZhbHVlID0+IGlzQXJyYXkodmFsdWUpLFxuICAgICAgb2JqZWN0OiB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSksXG4gICAgICBudWxsOiB2YWx1ZSA9PiBpc051bGwodmFsdWUpXG4gICAgfVxuXG4gICAgbGV0IHZhbGlkID0gdHJ1ZVxuXG4gICAgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHZhbGlkID0gdHlwZS5zb21lKCh0eXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0eXBlXSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkID0gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yVHlwZSwge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZTogZ2V0VHlwZSh2YWx1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1NldCwgc29ydE9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFVbmlxdWVJdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgdW5pcXVlSXRlbXMgPSBnZXRTY2hlbWFVbmlxdWVJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1bmlxdWVJdGVtcyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNlZW4gPSBbXVxuICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgaXRlbSA9IHNvcnRPYmplY3QoaXRlbSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbVN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHNlZW4uc29tZSgoc2VlbikgPT4gc2VlbiA9PT0gaXRlbVN0cmluZ2lmaWVkKVxuXG4gICAgICBpZiAoaGFzRHVwbGljYXRlZEl0ZW1zKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLnB1c2goaXRlbVN0cmluZ2lmaWVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBpMThuLmVycm9yVW5pcXVlSXRlbXNcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IGFueU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hbnlPZidcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGVudW06IF9lbnVtLFxuICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtLFxuICBleGNsdXNpdmVNaW5pbXVtOiBleGNsdXNpdmVNaW5pbXVtLFxuICBmb3JtYXQ6IGZvcm1hdCxcbiAgaXRlbXM6IGl0ZW1zLFxuICBtYXhpbXVtOiBtYXhpbXVtLFxuICBtYXhJdGVtczogbWF4SXRlbXMsXG4gIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICBtYXhQcm9wZXJ0aWVzOiBtYXhQcm9wZXJ0aWVzLFxuICBtaW5pbXVtOiBtaW5pbXVtLFxuICBtaW5JdGVtczogbWluSXRlbXMsXG4gIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzLFxuICBtdWx0aXBsZU9mOiBtdWx0aXBsZU9mLFxuICBub3Q6IG5vdCxcbiAgb25lT2Y6IG9uZU9mLFxuICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICBwYXR0ZXJuUHJvcGVydGllczogcGF0dGVyblByb3BlcnRpZXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyBhbGxPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYWxsT2YnXG5pbXBvcnQgeyBtaW5MZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkxlbmd0aCdcbmltcG9ydCB7IF9jb25zdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29uc3QnXG5pbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvY29udGFpbnMnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBkZXBlbmRlbnRSZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50UmVxdWlyZWQnXG5pbXBvcnQgeyBkZXBlbmRlbnRTY2hlbWFzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9kZXBlbmRlbnRTY2hlbWFzJ1xuaW1wb3J0IHsgX2VudW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2VudW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWluaW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWluaW11bSdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZm9ybWF0J1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pZidcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9pdGVtcydcbmltcG9ydCB7IG1heEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhJdGVtcydcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4TGVuZ3RoJ1xuaW1wb3J0IHsgbWF4UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4UHJvcGVydGllcydcbmltcG9ydCB7IG1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbmltdW0nXG5pbXBvcnQgeyBtaW5JdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluSXRlbXMnXG5pbXBvcnQgeyBtaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5Qcm9wZXJ0aWVzJ1xuaW1wb3J0IHsgbXVsdGlwbGVPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbXVsdGlwbGVPZidcbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbm90J1xuaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL29uZU9mJ1xuaW1wb3J0IHsgcGF0dGVybiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVybidcbmltcG9ydCB7IHBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wYXR0ZXJuUHJvcGVydGllcydcbmltcG9ydCB7IHByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy9wcmVmaXhJdGVtcydcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAnLi4vY29uc3RyYWlucy9yZXF1aXJlZCdcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi9jb25zdHJhaW5zL3R5cGUnXG5pbXBvcnQgeyBtYXhpbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9tYXhpbXVtJ1xuaW1wb3J0IHsgdW5pcXVlSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL3VuaXF1ZUl0ZW1zJ1xuaW1wb3J0IHsgYWRkaXRpb25hbFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBhZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgYWxsT2Y6IGFsbE9mLFxuICBhbnlPZjogYW55T2YsXG4gIGNvbnN0OiBfY29uc3QsXG4gIGNvbnRhaW5zOiBjb250YWlucyxcbiAgZGVwZW5kZW50UmVxdWlyZWQ6IGRlcGVuZGVudFJlcXVpcmVkLFxuICBkZXBlbmRlbnRTY2hlbWFzOiBkZXBlbmRlbnRTY2hlbWFzLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGlmOiBfaWYsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICBwcmVmaXhJdGVtczogcHJlZml4SXRlbXMsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgdHlwZTogdHlwZSxcbiAgdW5pcXVlSXRlbXM6IHVuaXF1ZUl0ZW1zXG59XG4iLCJpbXBvcnQgZHJhZnQwNCBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNCdcbmltcG9ydCBkcmFmdDA2IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA2J1xuaW1wb3J0IGRyYWZ0MDcgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDcnXG5pbXBvcnQgZHJhZnQyMDE5MDkgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAxOS0wOSdcbmltcG9ydCBkcmFmdDIwMjAxMiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0yMDIwLTEyJ1xuaW1wb3J0IHsgaGFzT3duLCBpc0Jvb2xlYW4sIGNsb25lLCBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAocmVmUGFyc2VyKSB7XG4gICAgdGhpcy5yZWZQYXJzZXIgPSByZWZQYXJzZXJcbiAgICB0aGlzLmRyYWZ0ID0gZHJhZnQyMDIwMTJcblxuICAgIHRoaXMuanNvblNjaGVtYURyYWZ0cyA9IHtcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnOiBkcmFmdDA0LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDYvc2NoZW1hIyc6IGRyYWZ0MDYsXG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJzogZHJhZnQwNyxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDE5LTA5L3NjaGVtYSc6IGRyYWZ0MjAxOTA5LFxuICAgICAgJ2h0dHBzOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LzIwMjAtMTIvc2NoZW1hJzogZHJhZnQyMDIwMTJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgZ2V0RXJyb3JzICh2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgc2NoZW1hRXJyb3JzID0gW11cbiAgICBjb25zdCBzY2hlbWFPcHRpb25zTWVzc2FnZXMgPSBnZXRTY2hlbWFPcHRpb24oc2NoZW1hLCAnbWVzc2FnZXMnKVxuXG4gICAgY29uc3Qgc2NoZW1hQ2xvbmUgPSBjbG9uZShzY2hlbWEpXG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oc2NoZW1hQ2xvbmUpICYmIHNjaGVtYUNsb25lID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG1lc3NhZ2VzOiBpc1NldChzY2hlbWFPcHRpb25zTWVzc2FnZXMpID8gc2NoZW1hT3B0aW9uc01lc3NhZ2VzIDogWydpbnZhbGlkJ10sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kcmFmdCkuZm9yRWFjaCgoY29uc3RyYWluKSA9PiB7XG4gICAgICBpZiAoaGFzT3duKHNjaGVtYUNsb25lLCBjb25zdHJhaW4pKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuZHJhZnRbY29uc3RyYWluXVxuICAgICAgICBjb25zdCB2YWxpZGF0b3JFcnJvcnMgPSB2YWxpZGF0b3IodGhpcywgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JFcnJvcnMpIHtcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBbLi4uc2NoZW1hRXJyb3JzLCAuLi52YWxpZGF0b3JFcnJvcnNdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHNjaGVtYUVycm9ycy5sZW5ndGggPiAwICYmIHNjaGVtYU9wdGlvbnNNZXNzYWdlcykge1xuICAgICAgc2NoZW1hRXJyb3JzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZXM6IHNjaGVtYU9wdGlvbnNNZXNzYWdlcyxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NoZW1hRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iXSwic291cmNlUm9vdCI6IiJ9