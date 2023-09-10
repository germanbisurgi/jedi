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
          var switcherOptionsLabel = Object(_helpers_schema__WEBPACK_IMPORTED_MODULE_11__["getSchemaOption"])(schema, 'switcherTitle') || 'Option-' + (index + 1);
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
      if (this.isNotRequired(key) && deactivateNonRequired === true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zdXBlclByb3BCYXNlLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvZWRpdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9tdWx0aXBsZS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QtZ3JpZC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LW5hdi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9oZWxwZXJzL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pMThuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbXVsdGlwbGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luc3RhbmNlcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9pbnN0YW5jZXMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5zdGFuY2VzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2plZGkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZWYtcGFyc2VyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2Jvb3RzdHJhcDMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy90aGVtZXMvYm9vdHN0cmFwNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3RoZW1lcy9ib290c3RyYXA1LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL2ljb25zL2ljb25zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWVzL3RoZW1lLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FkZGl0aW9uYWxQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FsbE9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2FueU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2NvbnRhaW5zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2RlcGVuZGVudFNjaGVtYXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZW51bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9leGNsdXNpdmVNYXhpbXVtLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvZm9ybWF0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2lmLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL2l0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tYXhQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21heGltdW0uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL21pblByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9tdWx0aXBsZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL25vdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9vbmVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vY29uc3RyYWlucy9wYXR0ZXJuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3BhdHRlcm5Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3ByZWZpeEl0ZW1zLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3JlcXVpcmVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9jb25zdHJhaW5zL3R5cGUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2NvbnN0cmFpbnMvdW5pcXVlSXRlbXMuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0wNC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vZHJhZnRzL2RyYWZ0LTA2LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMDcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy92YWxpZGF0aW9uL2RyYWZ0cy9kcmFmdC0yMDE5LTA5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdGlvbi9kcmFmdHMvZHJhZnQtMjAyMC0xMi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIkVkaXRvckFycmF5TmF2IiwiX0VkaXRvckFycmF5IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsImFjdGl2ZVRhYkluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJfdGhpcyIsImNvbnRyb2wiLCJhZGRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5zdGFuY2UiLCJsZW5ndGgiLCJhZGRJdGVtIiwicmVmcmVzaFVJIiwiX3RoaXMyIiwicmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMiLCJjaGlsZHJlblNsb3QiLCJpbm5lckhUTUwiLCJyb3ciLCJ0aGVtZSIsImdldFJvdyIsImNvbHMiLCJnZXRTY2hlbWFPcHRpb24iLCJzY2hlbWEiLCJ0YWJMaXN0Q29sIiwiZ2V0Q29sIiwidGFiQ29udGVudENvbCIsInRhYkNvbnRlbnQiLCJnZXRUYWJDb250ZW50IiwidGFiTGlzdCIsImdldFRhYkxpc3QiLCJzdGFja2VkIiwidHlwZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmRleCIsImRlbGV0ZUJ0biIsImdldERlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBCdG4iLCJnZXRNb3ZlVXBJdGVtQnRuIiwibW92ZURvd25CdG4iLCJnZXRNb3ZlRG93bkl0ZW1CdG4iLCJ1aSIsImFycmF5QWN0aW9ucyIsImNvbnRhaW5lciIsImNoaWxkVGl0bGUiLCJzY2hlbWFPcHRpb25JdGVtVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpMCIsImkxIiwiZ2V0VmFsdWUiLCJjb21waWxlVGVtcGxhdGUiLCJzY2hlbWFUaXRsZSIsImdldFNjaGVtYVRpdGxlIiwiaXNTZXQiLCJnZXRLZXkiLCJjbGFtcCIsImRlbGV0ZUl0ZW0iLCJ0b0luZGV4IiwibW92ZSIsImFjdGl2ZSIsImlkIiwicGF0aFRvQXR0cmlidXRlIiwicGF0aCIsInRhYiIsImdldFRhYiIsInRpdGxlIiwibGlzdCIsInNldFRhYlBhbmVBdHRyaWJ1dGVzIiwiZGlzYWJsZWQiLCJpc1JlYWRPbmx5IiwiZGlzYWJsZSIsImVuYWJsZSIsInNldEF0dHJpYnV0ZSIsIkVkaXRvckFycmF5IiwiX0VkaXRvciIsImJ1aWxkIiwiZ2V0QXJyYXlDb250cm9sIiwic3JPbmx5IiwiZGVzY3JpcHRpb24iLCJnZXRTY2hlbWFEZXNjcmlwdGlvbiIsImdldEludmFsaWRGZWVkYmFjayIsIm1lc3NhZ2UiLCJnZXRBbGVydCIsInNhbml0aXplIiwiaXNBcnJheSIsIm1heEl0ZW1zIiwiZ2V0U2NoZW1hTWF4SXRlbXMiLCJtaW5JdGVtcyIsImdldFNjaGVtYU1pbkl0ZW1zIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwic3BsaXQiLCJqZWRpIiwicGF0aFNlcGFyYXRvciIsInBvcCIsIkVkaXRvciIsIkVkaXRvckJvb2xlYW5FbnVtUmFkaW8iLCJfRWRpdG9yQm9vbGVhbiIsImdldFJhZGlvc0NvbnRyb2wiLCJ2YWx1ZXMiLCJ0aXRsZXMiLCJsYWJlbCIsInJhZGlvcyIsInJhZGlvIiwicmFkaW9WYWx1ZSIsInNldFZhbHVlIiwiY2hlY2tlZCIsIkVkaXRvckJvb2xlYW4iLCJFZGl0b3JCb29sZWFuRW51bVNlbGVjdCIsImdldFNlbGVjdENvbnRyb2wiLCJpbnB1dCIsImdldENoZWNrYm94Q29udHJvbCIsIkJvb2xlYW4iLCJfRXZlbnRFbWl0dGVyIiwicmVhZE9ubHkiLCJjb2VyY2VWYWx1ZSIsInNldENvbnRhaW5lckF0dHJpYnV0ZXMiLCJhbHdheXNTaG93RXJyb3JzIiwib3B0aW9ucyIsInNob3dFcnJvcnMiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsIm9uIiwiaWNvbnMiLCJpY29uTGliIiwiZ2x5cGhpY29ucyIsImJvb3RzdHJhcEljb25zIiwiZm9udEF3ZXNvbWUzIiwiZm9udEF3ZXNvbWU0IiwiZm9udEF3ZXNvbWU1IiwiZm9udEF3ZXNvbWU2IiwiVGhlbWVCb290c3RyYXAzIiwiVGhlbWVCb290c3RyYXA0IiwiVGhlbWVCb290c3RyYXA1IiwiVGhlbWUiLCJnZXRTY2hlbWFUeXBlIiwic2NoZW1hRW51bSIsImdldFNjaGVtYUVudW0iLCJpbmNsdWRlcyIsIm5ldmVyU2hvd0Vycm9ycyIsIm1lc3NhZ2VzIiwiZXJyb3IiLCJpbnZhbGlkRmVlZGJhY2siLCJfdGhpczMiLCJpbnRlcmFjdGl2ZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkZXN0cm95IiwiX3RoaXM0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsIkV2ZW50RW1pdHRlciIsIkVkaXRvck11bHRpcGxlIiwiZ2V0TXVsdGlwbGVDb250cm9sIiwic3dpdGNoZXJPcHRpb25WYWx1ZXMiLCJzd2l0Y2hlck9wdGlvbnNMYWJlbHMiLCJzd2l0Y2hlciIsInN3aXRjaEluc3RhbmNlIiwiYWN0aXZlSW5zdGFuY2UiLCJFZGl0b3JOdWxsIiwiZ2V0TnVsbENvbnRyb2wiLCJnZXRTY2hlbWFGb3JtYXQiLCJFZGl0b3JOdW1iZXJFbnVtUmFkaW8iLCJfRWRpdG9yTnVtYmVyIiwiRWRpdG9yTnVtYmVyIiwiRWRpdG9yTnVtYmVyRW51bVNlbGVjdCIsImdldElucHV0Q29udHJvbCIsIk1hdGgiLCJmbG9vciIsImlzTnVtYmVyIiwiRWRpdG9yT2JqZWN0R3JpZCIsIl9FZGl0b3JPYmplY3QiLCJyZWZyZXNoRWRpdG9ycyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc0FjdGl2ZSIsImNvbHVtbnMiLCJvZmZzZXQiLCJjb2wiLCJFZGl0b3JPYmplY3QiLCJFZGl0b3JPYmplY3ROYXYiLCJhZGRQcm9wZXJ0eSIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMiLCJnZXRPYmplY3RDb250cm9sIiwiZWRpdGFibGVQcm9wZXJ0aWVzIiwiZXF1YWwiLCJhZGRQcm9wZXJ0eUJ0biIsImFkZFByb3BlcnR5Q29udHJvbCIsInByb3BlcnR5TmFtZUVtcHR5IiwicHJvcGVydHlFeGlzdCIsInNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlQ2hpbGQiLCJhY3RpdmF0ZSIsImlzT2JqZWN0IiwicmVmcmVzaFByb3BlcnRpZXNTbG90Iiwic2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzIiwicHJvcGVydGllc0FjdGl2YXRvcnMiLCJpc1JlcXVpcmVkIiwiaXNEZXBlbmRlbnRSZXF1aXJlZCIsIm5vdFJlcXVpcmVkIiwiY2hlY2tib3hDb250cm9sIiwiY2hlY2tib3giLCJoYXNPd24iLCJkZWFjdGl2YXRlIiwiRWRpdG9yU3RyaW5nRW51bVJhZGlvIiwiX0VkaXRvclN0cmluZyIsIkVkaXRvclN0cmluZyIsIkVkaXRvclN0cmluZ0VudW1TZWxlY3QiLCJFZGl0b3JTdHJpbmdUZXh0YXJlYSIsImdldFRleHRhcmVhQ29udHJvbCIsIlN0cmluZyIsImlucHV0VHlwZXMiLCJzY2hlbWFGb3JtYXQiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiY2FsbGJhY2siLCJwdXNoIiwiZW1pdCIsImZpbHRlciIsImxpc3RlbmVyIiwiZ2V0U2NoZW1hU2NoZW1hIiwiaXNTdHJpbmciLCIkc2NoZW1hIiwidW5kZWZpbmVkIiwiaXNCb29sZWFuIiwiZ2V0U2NoZW1hQWxsT2YiLCJhbGxPZiIsImdldFNjaGVtYUFueU9mIiwiYW55T2YiLCJnZXRTY2hlbWFDb25zdCIsImdldFNjaGVtYUNvbnRhaW5zIiwiY29udGFpbnMiLCJnZXRTY2hlbWFEZWZhdWx0IiwiZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQiLCJkZXBlbmRlbnRSZXF1aXJlZCIsImdldFNjaGVtYURlcGVuZGVudFNjaGVtYXMiLCJkZXBlbmRlbnRTY2hlbWFzIiwiZ2V0U2NoZW1hRWxzZSIsImdldFNjaGVtYUV4Y2x1c2l2ZU1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiZ2V0U2NoZW1hRXhjbHVzaXZlTWluaW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJmb3JtYXQiLCJnZXRTY2hlbWFJZiIsImdldFNjaGVtYUl0ZW1zIiwiaXRlbXMiLCJnZXRTY2hlbWFNYXhpbXVtIiwibWF4aW11bSIsImdldFNjaGVtYU1heENvbnRhaW5zIiwiaXNJbnRlZ2VyIiwibWF4Q29udGFpbnMiLCJnZXRTY2hlbWFNYXhMZW5ndGgiLCJtYXhMZW5ndGgiLCJnZXRTY2hlbWFNYXhQcm9wZXJ0aWVzIiwibWF4UHJvcGVydGllcyIsImdldFNjaGVtYU1pbmltdW0iLCJtaW5pbXVtIiwiZ2V0U2NoZW1hTWluQ29udGFpbnMiLCJtaW5Db250YWlucyIsImdldFNjaGVtYU1pbkxlbmd0aCIsIm1pbkxlbmd0aCIsImdldFNjaGVtYU1pblByb3BlcnRpZXMiLCJtaW5Qcm9wZXJ0aWVzIiwiZ2V0U2NoZW1hTXVsdGlwbGVPZiIsIm11bHRpcGxlT2YiLCJnZXRTY2hlbWFOb3QiLCJub3QiLCJvcHRpb24iLCJnZXRTY2hlbWFQYXR0ZXJuIiwicGF0dGVybiIsImdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIiwicGF0dGVyblByb3BlcnRpZXMiLCJnZXRTY2hlbWFQcmVmaXhJdGVtcyIsInByZWZpeEl0ZW1zIiwiZ2V0U2NoZW1hUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJnZXRTY2hlbWFSZWFkT25seSIsImdldFNjaGVtYVJlcXVpcmVkIiwicmVxdWlyZWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJTZXQiLCJnZXRTY2hlbWFUaGVuIiwidGhlbiIsImdldFNjaGVtYU9uZU9mIiwib25lT2YiLCJnZXRTY2hlbWFVbmlxdWVJdGVtcyIsInVuaXF1ZUl0ZW1zIiwiZ2V0Q2lyY3VsYXJSZXBsYWNlciIsImFuY2VzdG9ycyIsIl90eXBlb2YiLCJhdCIsImNsb25lIiwidGhpbmciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlc2NhcGVSZWdFeHAiLCJzdHJpbmciLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsInN0ciIsImZpbmQiLCJSZWdFeHAiLCJvYmoiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJzb3J0T2JqZWN0Iiwic29ydCIsInJlZHVjZSIsInJlc3VsdCIsImEiLCJiIiwiZGlmZmVyZW50IiwiaXNOdWxsIiwibm90U2V0IiwiQXJyYXkiLCJnZXRUeXBlIiwibWVyZ2VEZWVwIiwidGFyZ2V0IiwiX2xlbiIsInNvdXJjZXMiLCJfa2V5Iiwic291cmNlIiwic2hpZnQiLCJhc3NpZ24iLCJfZGVmaW5lUHJvcGVydHkiLCJjb25jYXQiLCJkZWVwQ29weSIsImNvcHkiLCJpIiwib3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIiwib2JqMSIsIm9iajIiLCJnZXRWYWx1ZUJ5SlNPTlBhdGgiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidGVzdCIsInBhcnNlSW50IiwiZXJyIiwiZSIsImYiLCJtYXRjaCIsIm51bWJlciIsIm1pbiIsIm1heCIsInJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkiLCJhcnIiLCJ1bmlxdWVPYmplY3RzIiwidW5pcXVlVmFsdWVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm9ialN0cmluZyIsImhhcyIsImFkZCIsImkxOG4iLCJlcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZXJyb3JBbnlPZiIsImVycm9yQ29uc3QiLCJlcnJvckNvbnRhaW5zIiwiZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCIsImVycm9yRW51bSIsImVycm9yRXhjbHVzaXZlTWF4aW11bSIsImVycm9yRXhjbHVzaXZlTWluaW11bSIsImVycm9yRm9ybWF0IiwiZXJyb3JJdGVtcyIsImVycm9yTWF4aW11bSIsImVycm9yTWF4SXRlbXMiLCJlcnJvck1heExlbmd0aCIsImVycm9yTWF4UHJvcGVydGllcyIsImVycm9yTWF4Q29udGFpbnMiLCJlcnJvck1pbkNvbnRhaW5zIiwiZXJyb3JNaW5pbXVtIiwiZXJyb3JNaW5JdGVtcyIsImVycm9yTWluTGVuZ3RoIiwiZXJyb3JNaW5Qcm9wZXJ0aWVzIiwiZXJyb3JNdWx0aXBsZU9mIiwiZXJyb3JOb3QiLCJlcnJvck9uZU9mIiwiZXJyb3JQYXR0ZXJuIiwiZXJyb3JQcmVmaXhJdGVtcyIsImVycm9yUmVxdWlyZWQiLCJlcnJvclR5cGUiLCJlcnJvclVuaXF1ZUl0ZW1zIiwiSW5zdGFuY2VBcnJheSIsIl9JbnN0YW5jZSIsInNldFVJIiwic2NoZW1hVHlwZSIsInByZXBhcmUiLCJyZWZyZXNoQ2hpbGRyZW4iLCJjcmVhdGVJdGVtSW5zdGFuY2UiLCJpdGVtc0NvdW50Iiwic2NoZW1hSXRlbXMiLCJzY2hlbWFQcmVmaXhJdGVtcyIsImhhc1ByZWZpeEl0ZW1zU2NoZW1hIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJlbnQiLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImN1cnJlbnRWYWx1ZSIsIm5ld1ZhbHVlIiwib25DaGlsZENoYW5nZSIsIml0ZW1WYWx1ZSIsIkluc3RhbmNlIiwiSW5zdGFuY2VCb29sZWFuIiwiY29uZmlnIiwicm9vdE5hbWUiLCJyZWdpc3RlciIsInNldEluaXRpYWxWYWx1ZSIsInNldERlZmF1bHRWYWx1ZSIsImlzRWRpdG9yIiwidW5yZWdpc3RlciIsInNjaGVtYURlZmF1bHQiLCJ0cmlnZ2Vyc0NoYW5nZSIsInZhbGlkYXRvciIsIkluc3RhbmNlTXVsdGlwbGUiLCJpbnN0YW5jZXMiLCJhY3RpdmVJbnN0YW5jZUNoYW5nZWQiLCJsYXN0SW5kZXgiLCJzY2hlbWFzIiwib25TZXRWYWx1ZSIsInNjaGVtYXNPZiIsInNjaGVtYUNvcHkiLCJfb2JqZWN0U3ByZWFkIiwic3dpdGNoZXJPcHRpb25zTGFiZWwiLCJzY2hlbWFDbG9uZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFyQXQiLCJmaXR0ZXN0SW5kZXgiLCJnZXRJZkluZGV4IiwiZ2V0Rml0dGVzdEluZGV4IiwicmVhc3NpZ25WYWx1ZXMiLCJsYXN0SW5zdGFuY2VWYWx1ZSIsImN1cnJlbnRJbnN0YW5jZVZhbHVlIiwibWVyZ2VkVmFsdWUiLCJpZkVkaXRvciIsIkplZGkiLCJzdGFydFZhbHVlIiwicmVmUGFyc2VyIiwiaWZFcnJvcnMiLCJjaGFtcGlvbkVycm9ycyIsImluc3RhbmNlRXJyb3JzIiwiSW5zdGFuY2VOdWxsIiwiSW5zdGFuY2VOdW1iZXIiLCJ0eXBlSXNOdW1lcmljIiwiSW5zdGFuY2VPYmplY3QiLCJzY2hlbWFQcm9wZXJ0aWVzIiwicmVmcmVzaEluc3RhbmNlcyIsInByb3BlcnR5Iiwic2NoZW1hUmVxdWlyZWQiLCJtaXNzaW5nUHJvcGVydGllcyIsInJlcXVpcmVkUHJvcGVydGllcyIsImRlYWN0aXZhdGVOb25SZXF1aXJlZCIsImlzTm90UmVxdWlyZWQiLCJkZWxldGVDaGlsZCIsImdldENoaWxkIiwib2xkVmFsdWUiLCJJbnN0YW5jZVN0cmluZyIsInJvb3QiLCJWYWxpZGF0b3IiLCJSZWZQYXJzZXIiLCJYTUxIdHRwUmVxdWVzdCIsImRlcmVmZXJlbmNlIiwiYXBwZW5kSGlkZGVuSW5wdXQiLCJjbGFzc0xpc3QiLCJoaWRkZW5Db250cm9sIiwiaGlkZGVuSW5wdXQiLCJleHBhbmQiLCJzY2hlbWFPbmVPZiIsInNjaGVtYUFueU9mIiwiX3RoaXMkcm9vdCIsImdldEluc3RhbmNlIiwiZWRpdG9yIiwiX3RoaXM1IiwiaXRlcmF0aW9ucyIsInJlZkRlZmluaXRpb25zIiwidHJhdmVyc2UiLCJhcmdzIiwicmVmIiwic3RhcnRzV2l0aCIsInJlcXVlc3QiLCJvcGVuIiwic2VuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJlbnRyaWVzIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJfcmVmMyIsIl9yZWY0IiwiX3JlZjUiLCJfcmVmNiIsIl9yZWY3IiwiX3JlZjgiLCJwcmV2VmFsdWUiLCJfVGhlbWUiLCJ1c2VUb2dnbGVFdmVudHMiLCJnZXRMZWdlbmQiLCJsZWdlbmQiLCJoaWRlRWxlbWVudCIsImdldENhcmQiLCJjYXJkIiwiZ2V0Q2FyZEhlYWRlciIsImhlYWRlciIsImdldENhcmRCb2R5IiwiaHRtbCIsImdldEFjdGlvbnNTbG90IiwiZ2V0QXJyYXlBY3Rpb25zU2xvdCIsImdldFByb3BlcnRpZXNUb2dnbGUiLCJnZXRCdXR0b24iLCJnZXRQcm9wZXJ0aWVzU2xvdCIsImdldEJ0bkdyb3VwIiwiZ2V0RGVzY3JpcHRpb24iLCJmaWVsZHNldCIsImxhYmVscyIsImxhYmVsVGV4dHMiLCJyYWRpb0NvbnRyb2xzIiwicmFkaW9Db250cm9sIiwiZm9ybUdyb3VwIiwibGFiZWxUZXh0IiwiZ2V0U3dpdGNoZXIiLCJyZW1vdmUiLCJ4cyIsIm1kIiwib2Zmc2V0TWQiLCJsaW5rIiwic2hvd0VsZW1lbnQiLCJnZXRDb2x1bW5DbGFzcyIsInNpemUiLCJnZXRDb250cm9sU2xvdCIsImNvbnRyb2xTbG90IiwibW92ZVVwIiwibW92ZURvd24iLCJnZXRJY29uIiwiaWNvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImljb25DbGFzc2VzIiwiY2xhc3NOYW1lIiwiZ2V0RWRpdG9yQ29udGFpbmVyIiwiZ2V0RmllbGRzZXQiLCJ0ZXh0Q29udGVudCIsImdldENoaWxkcmVuU2xvdCIsImdldE1lc3NhZ2VzU2xvdCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZSIsInByb3BlcnRpZXNDb250YWluZXIiLCJnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyIsImJ1dHRvbiIsInRleHQiLCJnZXRBcnJheUJ0bkFkZCIsImRlbGV0ZUl0ZW1CdG4iLCJtb3ZlVXBJdGVtQnRuIiwibW92ZURvd25JdGVtQnRuIiwiYWN0aW9ucyIsImJvZHkiLCJwcm9wZXJ0aWVzVG9nZ2xlIiwiYnRuR3JvdXAiLCJkZXNjcmlwdGlvbklkIiwic2NoZW1hUGF0dGVyblByb3BlcnRpZXMiLCJkZWZpbmVkSW5QYXR0ZXJuUHJvcGVydHkiLCJyZWdleHAiLCJhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMiLCJtYXAiLCJzdWJTY2hlbWFFZGl0b3IiLCJzdWJTY2hlbWFFcnJvcnMiLCJ2YWxpZCIsImFueU9mRWRpdG9yIiwiYW55T2ZFcnJvcnMiLCJfY29uc3QiLCJzY2hlbWFDb25zdCIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiaW52YWxpZCIsImNvdW50ZXIiLCJjb250YWluc0VkaXRvciIsImNvbnRhaW5zRXJyb3JzIiwiY29udGFpbnNJbnZhbGlkIiwibWluQ29udGFpbnNJbnZhbGlkIiwibWF4Q29udGFpbnNJbnZhbGlkIiwiam9pbiIsImRlcGVuZGVudFNjaGVtYSIsInRtcEVkaXRvciIsInRtcEVycm9ycyIsIl9lbnVtIiwic29tZSIsIl9pZiIsInNjaGVtYUlmIiwic2NoZW1hVGhlbiIsInNjaGVtYUVsc2UiLCJ0aGVuRXJyb3JzIiwiZWxzZUVycm9ycyIsInRoZW5FZGl0b3IiLCJlbHNlRWRpdG9yIiwicHJlZml4SXRlbXNTY2hlbWFzQ291bnQiLCJwcm9wZXJ0aWVzQ291bnQiLCJpc011bHRpcGxlT2YiLCJ0b1N0cmluZyIsIm5vdEVkaXRvciIsIm5vdEVycm9ycyIsIm9uZU9mRWRpdG9yIiwib25lT2ZFcnJvcnMiLCJhdHRlcm5Qcm9wZXJ0aWVzIiwicHJvcGVydHlOYW1lIiwiZWRpdG9yRXJyb3JzIiwiaXRlbVNjaGVtYSIsInR5cGVzIiwiaW50ZWdlciIsImJvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsIl9udWxsIiwidmFsdWVUeXBlIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsIl9sb29wIiwiaXRlbVN0cmluZ2lmaWVkIiwiX3JldCIsImRyYWZ0IiwiZHJhZnQyMDIwMTIiLCJqc29uU2NoZW1hRHJhZnRzIiwiZHJhZnQwNCIsImRyYWZ0MDYiLCJkcmFmdDA3IiwiZHJhZnQyMDE5MDkiLCJzY2hlbWFFcnJvcnMiLCJzY2hlbWFPcHRpb25zTWVzc2Fn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cERELFlBQVksR0FBRyxDQUNiO1VBQ0VqZixRQUFRLEVBQUVrZixxQkFBcUI7VUFDL0Jqa0IsSUFBSSxFQUFFQTtRQUNSLENBQUMsQ0FDRjtNQUNIO01BRUEsT0FBT2drQixZQUFZO0lBQ3JCO0VBQUM7RUFBQSxPQUFBeEssU0FBQTtBQUFBO0FBR1lBLHdFQUFTLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2plZGkuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2UuanNcIik7XG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2dldCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBudWxsID09IGFyciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gX2kpIHtcbiAgICB2YXIgX3MsXG4gICAgICBfZSxcbiAgICAgIF94LFxuICAgICAgX3IsXG4gICAgICBfYXJyID0gW10sXG4gICAgICBfbiA9ICEwLFxuICAgICAgX2QgPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKF94ID0gKF9pID0gX2kuY2FsbChhcnIpKS5uZXh0LCAwID09PSBpKSB7XG4gICAgICAgIGlmIChPYmplY3QoX2kpICE9PSBfaSkgcmV0dXJuO1xuICAgICAgICBfbiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKF9uID0gKF9zID0gX3guY2FsbChfaSkpLmRvbmUpICYmIChfYXJyLnB1c2goX3MudmFsdWUpLCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgbnVsbCAhPSBfaVtcInJldHVyblwiXSAmJiAoX3IgPSBfaVtcInJldHVyblwiXSgpLCBPYmplY3QoX3IpICE9PSBfcikpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYXJyO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL2dldFByb3RvdHlwZU9mLmpzXCIpO1xuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3N1cGVyUHJvcEJhc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHsgY2xhbXAsIGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JBcnJheU5hdiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvckFycmF5XG4gKi9cbmNsYXNzIEVkaXRvckFycmF5TmF2IGV4dGVuZHMgRWRpdG9yQXJyYXkge1xuICBpbml0ICgpIHtcbiAgICBzdXBlci5pbml0KClcbiAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gMFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGhcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3Qgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIGNvbnN0IGNvbHMgPSBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS5jb2xzIHx8IDNcbiAgICBjb25zdCB0YWJMaXN0Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsIGNvbHMpXG4gICAgY29uc3QgdGFiQ29udGVudENvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCAoMTIgLSBjb2xzKSlcbiAgICBjb25zdCB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5nZXRUYWJDb250ZW50KClcbiAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50aGVtZS5nZXRUYWJMaXN0KHtcbiAgICAgIHN0YWNrZWQ6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLnN0YWNrZWQsXG4gICAgICB0eXBlOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICduYXYnKS50eXBlXG4gICAgfSlcblxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJMaXN0Q29sKVxuICAgIHJvdy5hcHBlbmRDaGlsZCh0YWJDb250ZW50Q29sKVxuICAgIHRhYkxpc3RDb2wuYXBwZW5kQ2hpbGQodGFiTGlzdClcbiAgICB0YWJDb250ZW50Q29sLmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy50aGVtZS5nZXREZWxldGVJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZVVwSXRlbUJ0bigpXG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMudGhlbWUuZ2V0TW92ZURvd25JdGVtQnRuKClcblxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuaW5uZXJIVE1MID0gJydcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIGNoaWxkLnVpLmNvbnRyb2wuYXJyYXlBY3Rpb25zLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuXG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICBsZXQgY2hpbGRUaXRsZVxuICAgICAgY29uc3Qgc2NoZW1hT3B0aW9uSXRlbVRlbXBsYXRlID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaXRlbVRlbXBsYXRlJylcblxuICAgICAgaWYgKHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHNjaGVtYU9wdGlvbkl0ZW1UZW1wbGF0ZVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGkwOiBpbmRleCxcbiAgICAgICAgICBpMTogKGluZGV4ICsgMSksXG4gICAgICAgICAgdmFsdWU6IGNoaWxkLmdldFZhbHVlKClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZFRpdGxlID0gY29tcGlsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgIGNoaWxkVGl0bGUgPSBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSArICcgJyArIChpbmRleCArIDEpIDogY2hpbGQuZ2V0S2V5KClcbiAgICAgIH1cblxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gY2xhbXAoKGluZGV4IC0gMSksIDAsICh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCAtIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpbmRleCArIDFcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJJbmRleCA9IHRvSW5kZXhcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5tb3ZlKGluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgIGNvbnN0IGlkID0gcGF0aFRvQXR0cmlidXRlKGNoaWxkLnBhdGgpXG5cbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMudGhlbWUuZ2V0VGFiKHtcbiAgICAgICAgdGl0bGU6IGNoaWxkVGl0bGUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICAgIH0pXG5cbiAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gaW5kZXhcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG4gICAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHRhYi5saXN0KVxuICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC51aS5lbmFibGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgbW92ZVVwQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cblxuICAgICAgaWYgKCh0aGlzLmluc3RhbmNlLnZhbHVlLmxlbmd0aCAtIDEpID09PSBpbmRleCkge1xuICAgICAgICBtb3ZlRG93bkJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JBcnJheU5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IGlzQXJyYXksIGlzU2V0LCBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU1heEl0ZW1zLFxuICBnZXRTY2hlbWFNaW5JdGVtcyxcbiAgZ2V0U2NoZW1hT3B0aW9uLFxuICBnZXRTY2hlbWFUaXRsZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckFycmF5IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvckFycmF5IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0QXJyYXlDb250cm9sKHtcbiAgICAgIHRpdGxlOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuZ2V0QWxlcnQoe1xuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcblxuICAgIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXModGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChtYXhJdGVtcykgJiYgbWF4SXRlbXMgPT09IHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuYWRkQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmlubmVySFRNTCA9ICcnXG5cbiAgICB0aGlzLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoY2hpbGQuZ2V0S2V5KCkpXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnRoZW1lLmdldERlbGV0ZUl0ZW1CdG4oKVxuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlVXBJdGVtQnRuKClcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy50aGVtZS5nZXRNb3ZlRG93bkl0ZW1CdG4oKVxuXG4gICAgICBjaGlsZC51aS5jb250cm9sLmFycmF5QWN0aW9ucy5pbm5lckhUTUwgPSAnJ1xuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgY2hpbGQudWkuY29udHJvbC5hcnJheUFjdGlvbnMuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG5cbiAgICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIpXG5cbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGNoaWxkLnBhdGguc3BsaXQodGhpcy5pbnN0YW5jZS5qZWRpLnBhdGhTZXBhcmF0b3IpLnBvcCgpKVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLmluc3RhbmNlLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcblxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMuaW5zdGFuY2UubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICBjaGlsZC51aS5kaXNhYmxlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NldChtaW5JdGVtcykgJiYgdGhpcy5pbnN0YW5jZS52YWx1ZS5sZW5ndGggPD0gbWluSXRlbXMpIHtcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckFycmF5XG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JCb29sZWFuXG4gKi9cbmNsYXNzIEVkaXRvckJvb2xlYW5FbnVtUmFkaW8gZXh0ZW5kcyBFZGl0b3JCb29sZWFuIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0UmFkaW9zQ29udHJvbCh7XG4gICAgICB2YWx1ZXM6IFsnZmFsc2UnLCAndHJ1ZSddLFxuICAgICAgdGl0bGVzOiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdlbnVtVGl0bGVzJykgfHwgWydmYWxzZScsICd0cnVlJ10sXG4gICAgICBpZDogcGF0aFRvQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UucGF0aCksXG4gICAgICBsYWJlbDogZ2V0U2NoZW1hVGl0bGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpIHx8IHRoaXMuaW5zdGFuY2UuZ2V0S2V5KCksXG4gICAgICBzck9ubHk6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2hpZGVUaXRsZScpLFxuICAgICAgZGVzY3JpcHRpb246IGdldFNjaGVtYURlc2NyaXB0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSByYWRpby52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICByYWRpby5jaGVja2VkID0gcmFkaW9WYWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JCb29sZWFuRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yQm9vbGVhblxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvckJvb2xlYW4ge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBbJ2ZhbHNlJywgJ3RydWUnXSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhbkVudW1TZWxlY3RcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yQm9vbGVhbiBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JCb29sZWFuIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC5jaGVja2VkID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yQm9vbGVhblxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudC1lbWl0dGVyJ1xuaW1wb3J0IHsgZ2x5cGhpY29ucywgYm9vdHN0cmFwSWNvbnMsIGZvbnRBd2Vzb21lMywgZm9udEF3ZXNvbWU0LCBmb250QXdlc29tZTUsIGZvbnRBd2Vzb21lNiB9IGZyb20gJy4uL3RoZW1lcy9pY29ucy9pY29ucydcbmltcG9ydCBUaGVtZUJvb3RzdHJhcDMgZnJvbSAnLi4vdGhlbWVzL2Jvb3RzdHJhcDMnXG5pbXBvcnQgVGhlbWVCb290c3RyYXA0IGZyb20gJy4uL3RoZW1lcy9ib290c3RyYXA0J1xuaW1wb3J0IFRoZW1lQm9vdHN0cmFwNSBmcm9tICcuLi90aGVtZXMvYm9vdHN0cmFwNSdcbmltcG9ydCBUaGVtZSBmcm9tICcuLi90aGVtZXMvdGhlbWUnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVkaXRvciBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaW5zdGFuY2UpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgSW5zdGFuY2UgYmVpbmcgY29udHJvbGxlZCBieSB0aGlzIGVkaXRvci5cbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2VcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIGluc3RhbmNlIHVzZWQgdG8gYnVpbGQgdGhlIEVkaXRvciB1c2VyIGludGVyZmFjZS5cbiAgICAgKiBAdHlwZSB7VGhlbWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRoZW1lID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIgaW50ZXJmYWNlIGh0bWwgZm9yIHRoaXMgZWRpdG9yXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb250cm9sID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIG9ubHkgc3RhdHVzIGZvciB0aGlzIGVkaXRvciB1c2VyIGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yZWFkT25seSA9IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpXG5cbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuY29lcmNlVmFsdWUoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuc2V0Q29udGFpbmVyQXR0cmlidXRlcygpXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuXG4gICAgY29uc3QgYWx3YXlzU2hvd0Vycm9ycyA9IHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnNob3dFcnJvcnMgPT09ICdhbHdheXMnIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ2Fsd2F5cydcblxuICAgIGlmIChhbHdheXNTaG93RXJyb3JzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZXQtdmFsdWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmluc3RhbmNlLmdldEVycm9ycygpXG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKGVycm9ycylcbiAgICB9KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoVUkoKVxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5pbnN0YW5jZS5nZXRFcnJvcnMoKVxuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZWRpdG9yXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICBsZXQgaWNvbnMgPSBudWxsXG5cbiAgICBpZiAoaXNTZXQodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5qZWRpLm9wdGlvbnMuaWNvbkxpYikge1xuICAgICAgICBjYXNlICdnbHlwaGljb25zJzpcbiAgICAgICAgICBpY29ucyA9IGdseXBoaWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdib290c3RyYXAtaWNvbnMnOlxuICAgICAgICAgIGljb25zID0gYm9vdHN0cmFwSWNvbnNcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTMnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWUzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnZm9udGF3ZXNvbWU0JzpcbiAgICAgICAgICBpY29ucyA9IGZvbnRBd2Vzb21lNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ZvbnRhd2Vzb21lNSc6XG4gICAgICAgICAgaWNvbnMgPSBmb250QXdlc29tZTVcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmb250YXdlc29tZTYnOlxuICAgICAgICAgIGljb25zID0gZm9udEF3ZXNvbWU2XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjYXNlICdib290c3RyYXAzJzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDMoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA0JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDQoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib290c3RyYXA1JzpcbiAgICAgICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZUJvb3RzdHJhcDUoaWNvbnMpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKGljb25zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGNvbnRhaW5lciBhdHRyaWJ1dGVzIGxpa2UgZGF0YS1wYXRoIGFuZCBkYXRhLXR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENvbnRhaW5lckF0dHJpYnV0ZXMgKCkge1xuICAgIHRoaXMuY29udHJvbC5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLmluc3RhbmNlLnBhdGgpXG4gICAgdGhpcy5jb250cm9sLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpKVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgZWRpdG9yIGNvbnRyb2wgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGVkaXRvciBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2UgYnkgbWFraW5nIGFzc3VtcHRpb25zIGJhc2VkIG9uIGNvbnN0cmFpbnNcbiAgICovXG4gIGNvZXJjZVZhbHVlICgpIHtcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFFbnVtKSAmJiAhc2NoZW1hRW51bS5pbmNsdWRlcyh0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpICYmIGlzU2V0KHNjaGVtYUVudW1bMF0pKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHNjaGVtYUVudW1bMF0sIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHVpIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzIChlcnJvcnMpIHtcbiAgICBjb25zdCBuZXZlclNob3dFcnJvcnMgPSB0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5zaG93RXJyb3JzID09PSAnbmV2ZXInIHx8IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ3Nob3dFcnJvcnMnKSA9PT0gJ25ldmVyJ1xuXG4gICAgaWYgKG5ldmVyU2hvd0Vycm9ycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmlubmVySFRNTCA9ICcnXG5cbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gdGhpcy5nZXRJbnZhbGlkRmVlZGJhY2sobWVzc2FnZSlcbiAgICAgICAgdGhpcy5jb250cm9sLm1lc3NhZ2VzLmFwcGVuZENoaWxkKGludmFsaWRGZWVkYmFjaylcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXJyb3IgbWVzc2FnZSBjb250YWluZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEludmFsaWRGZWVkYmFjayAobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmdldEludmFsaWRGZWVkYmFjayh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgZWRpdG9yXG4gICAqL1xuICBkaXNhYmxlICgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIGVuYWJsZSAoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgY29udHJvbCBVSSB3aGVuIGl0cyBzdGF0ZSBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICB9XG5cbiAgcmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMgKCkge1xuICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuXG4gICAgaW50ZXJhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBpbnB1dCB2YWx1ZSBpZiBuZWNlc3NhcnkgYmVmb3JlIHZhbHVlIHNldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250YWluZXIgJiYgdGhpcy5jb250cm9sLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzW2tleV1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hT3B0aW9uIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEVkaXRvclxuICovXG5jbGFzcyBFZGl0b3JNdWx0aXBsZSBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE11bHRpcGxlQ29udHJvbCh7XG4gICAgICB0aXRsZTogJ09wdGlvbnMnLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBzd2l0Y2hlck9wdGlvblZhbHVlczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvblZhbHVlcyxcbiAgICAgIHN3aXRjaGVyT3B0aW9uc0xhYmVsczogdGhpcy5pbnN0YW5jZS5zd2l0Y2hlck9wdGlvbnNMYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5zd2l0Y2hlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcih0aGlzLmNvbnRyb2wuc3dpdGNoZXIuaW5wdXQudmFsdWUpXG4gICAgICB0aGlzLmluc3RhbmNlLnN3aXRjaEluc3RhbmNlKGluZGV4KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuY29udHJvbC5jb250YWluZXIpXG4gICAgdGhpcy5jb250cm9sLnN3aXRjaGVyLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5pbmRleFxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pbnN0YW5jZS5pc1JlYWRPbmx5KCkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZGlzYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWN0aXZlSW5zdGFuY2UudWkuZW5hYmxlKClcbiAgICB9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JNdWx0aXBsZVxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvck51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVsbCBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE51bGxDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVsbFxuIiwiaW1wb3J0IEVkaXRvck51bWJlciBmcm9tICcuL251bWJlcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hT3B0aW9uLCBnZXRTY2hlbWFUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gRWRpdG9yTnVtYmVyRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1SYWRpbyBleHRlbmRzIEVkaXRvck51bWJlciB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHJhZGlvLnZhbHVlKVxuICAgICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICB0aGlzLmNvbnRyb2wucmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5jaGVja2VkID0gKE51bWJlcihyYWRpby52YWx1ZSkgPT09IE51bWJlcih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCkpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yTnVtYmVyRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4vbnVtYmVyJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yTnVtYmVyXG4gKi9cbmNsYXNzIEVkaXRvck51bWJlckVudW1TZWxlY3QgZXh0ZW5kcyBFZGl0b3JOdW1iZXIge1xuICBidWlsZCAoKSB7XG4gICAgdGhpcy5jb250cm9sID0gdGhpcy50aGVtZS5nZXRTZWxlY3RDb250cm9sKHtcbiAgICAgIHZhbHVlczogZ2V0U2NoZW1hRW51bSh0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICB0aXRsZXM6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ2VudW1UaXRsZXMnKSB8fCBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNhbml0aXplKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXNjcmlwdGlvbixcbiAgZ2V0U2NoZW1hRm9ybWF0LFxuICBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVRpdGxlLCBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JOdW1iZXIgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yTnVtYmVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSB8fCBnZXRTY2hlbWFGb3JtYXQodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2FuaXRpemUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGdldFNjaGVtYVR5cGUodGhpcy5pbnN0YW5jZS5zY2hlbWEpID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLnJlZnJlc2hJbnRlcmFjdGl2ZUVsZW1lbnRzKClcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck51bWJlclxuIiwiaW1wb3J0IEVkaXRvck9iamVjdCBmcm9tICcuL29iamVjdCdcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBFZGl0b3JPYmplY3RHcmlkIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdEdyaWQgZXh0ZW5kcyBFZGl0b3JPYmplY3Qge1xuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBsZXQgcm93ID0gdGhpcy50aGVtZS5nZXRSb3coKVxuICAgIHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuYXBwZW5kQ2hpbGQocm93KVxuXG4gICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRTY2hlbWFPcHRpb24oY2hpbGQuc2NoZW1hLCAnY29sdW1ucycpXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICdvZmZzZXQnKSB8fCAwXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMudGhlbWUuZ2V0Q29sKDEyLCBjb2x1bW5zLCBvZmZzZXQpXG5cbiAgICAgICAgaWYgKGdldFNjaGVtYU9wdGlvbihjaGlsZC5zY2hlbWEsICduZXdSb3cnKSkge1xuICAgICAgICAgIHJvdyA9IHRoaXMudGhlbWUuZ2V0Um93KClcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpXG4gICAgICAgIGNvbC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdEdyaWRcbiIsImltcG9ydCBFZGl0b3JPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBpc1NldCwgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yT2JqZWN0TmF2IGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yT2JqZWN0XG4gKi9cbmNsYXNzIEVkaXRvck9iamVjdE5hdiBleHRlbmRzIEVkaXRvck9iamVjdCB7XG4gIGluaXQgKCkge1xuICAgIHN1cGVyLmluaXQoKVxuICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSAwXG4gIH1cblxuICByZWZyZXNoRWRpdG9ycyAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90Lmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCByb3cgPSB0aGlzLnRoZW1lLmdldFJvdygpXG4gICAgY29uc3QgY29scyA9IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLmNvbHMgfHwgM1xuICAgIGNvbnN0IHRhYkxpc3RDb2wgPSB0aGlzLnRoZW1lLmdldENvbCgxMiwgY29scylcbiAgICBjb25zdCB0YWJDb250ZW50Q29sID0gdGhpcy50aGVtZS5nZXRDb2woMTIsICgxMiAtIGNvbHMpKVxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLmdldFRhYkNvbnRlbnQoKVxuICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRoZW1lLmdldFRhYkxpc3Qoe1xuICAgICAgc3RhY2tlZDogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnbmF2Jykuc3RhY2tlZCxcbiAgICAgIHR5cGU6IGdldFNjaGVtYU9wdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSwgJ25hdicpLnR5cGVcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5hcHBlbmRDaGlsZChyb3cpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkxpc3RDb2wpXG4gICAgcm93LmFwcGVuZENoaWxkKHRhYkNvbnRlbnRDb2wpXG4gICAgdGFiTGlzdENvbC5hcHBlbmRDaGlsZCh0YWJMaXN0KVxuICAgIHRhYkNvbnRlbnRDb2wuYXBwZW5kQ2hpbGQodGFiQ29udGVudClcblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY2hpbGQuaXNBY3RpdmUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPT09IHRoaXMuYWN0aXZlVGFiSW5kZXhcbiAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aClcbiAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG5cbiAgICAgICAgY29uc3QgdGFiID0gdGhpcy50aGVtZS5nZXRUYWIoe1xuICAgICAgICAgIHRpdGxlOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRhYi5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVGFiSW5kZXggPSBpbmRleFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGhlbWUuc2V0VGFiUGFuZUF0dHJpYnV0ZXMoY2hpbGQudWkuY29udHJvbC5jb250YWluZXIsIGFjdGl2ZSwgaWQpXG5cbiAgICAgICAgdGFiTGlzdC5hcHBlbmRDaGlsZCh0YWIubGlzdClcbiAgICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjaGlsZC51aS5jb250cm9sLmNvbnRhaW5lcilcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmluc3RhbmNlLmlzUmVhZE9ubHkoKSkge1xuICAgICAgICAgIGNoaWxkLnVpLmRpc2FibGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoaWxkLnVpLmVuYWJsZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvck9iamVjdE5hdlxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7XG4gIGVxdWFsLFxuICBoYXNPd24sXG4gIGlzT2JqZWN0LFxuICBpc1NldCxcbiAgcGF0aFRvQXR0cmlidXRlXG59IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyxcbiAgZ2V0U2NoZW1hRGVzY3JpcHRpb24sXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVGl0bGVcbn0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFZGl0b3JPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yT2JqZWN0IGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIGxldCBhZGRQcm9wZXJ0eSA9IHRydWVcbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IGdldFNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KGFkZGl0aW9uYWxQcm9wZXJ0aWVzKSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgIGFkZFByb3BlcnR5ID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldE9iamVjdENvbnRyb2woe1xuICAgICAgdGl0bGU6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSksXG4gICAgICBlZGl0YWJsZVByb3BlcnRpZXM6IGVxdWFsKHRoaXMuaW5zdGFuY2UuamVkaS5vcHRpb25zLmVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkgfHwgZXF1YWwoZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJyksIHRydWUpLFxuICAgICAgYWRkUHJvcGVydHk6IGFkZFByb3BlcnR5XG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlXG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZUVtcHR5ID0ga2V5Lmxlbmd0aCA9PT0gMFxuXG4gICAgICBpZiAocHJvcGVydHlOYW1lRW1wdHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5RXhpc3QgPSBpc1NldCh0aGlzLmluc3RhbmNlLnZhbHVlW2tleV0pXG5cbiAgICAgIGlmIChwcm9wZXJ0eUV4aXN0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hID0ge31cblxuICAgICAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgICAgaWYgKGlzU2V0KHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSkge1xuICAgICAgICBzY2hlbWEgPSBzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuaW5zdGFuY2UuY3JlYXRlQ2hpbGQoc2NoZW1hLCBrZXkpXG4gICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UudmFsdWUpXG4gICAgICB0aGlzLmNvbnRyb2wuYWRkUHJvcGVydHlDb250cm9sLmlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5nZXRBbGVydCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hQcm9wZXJ0aWVzU2xvdCAoKSB7XG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uRWRpdGFibGVQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZWRpdGFibGVQcm9wZXJ0aWVzJylcblxuICAgIGlmIChlcXVhbCh0aGlzLmluc3RhbmNlLmplZGkub3B0aW9ucy5lZGl0YWJsZVByb3BlcnRpZXMsIHRydWUpIHx8IGVxdWFsKHNjaGVtYU9wdGlvbkVkaXRhYmxlUHJvcGVydGllcywgdHJ1ZSkpIHtcbiAgICAgIHdoaWxlICh0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wucHJvcGVydGllc0FjdGl2YXRvcnMucmVtb3ZlQ2hpbGQodGhpcy5jb250cm9sLnByb3BlcnRpZXNBY3RpdmF0b3JzLmxhc3RDaGlsZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc1JlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBpc0RlcGVuZGVudFJlcXVpcmVkID0gdGhpcy5pbnN0YW5jZS5pc0RlcGVuZGVudFJlcXVpcmVkKGNoaWxkLmdldEtleSgpKVxuICAgICAgICBjb25zdCBub3RSZXF1aXJlZCA9ICFpc1JlcXVpcmVkICYmICFpc0RlcGVuZGVudFJlcXVpcmVkXG5cbiAgICAgICAgaWYgKG5vdFJlcXVpcmVkKSB7XG4gICAgICAgICAgY29uc3Qgc2NoZW1hVGl0bGUgPSBnZXRTY2hlbWFUaXRsZShjaGlsZC5zY2hlbWEpXG4gICAgICAgICAgY29uc3QgaWQgPSBwYXRoVG9BdHRyaWJ1dGUoY2hpbGQucGF0aCkgKyAnLWFjdGl2YXRvcidcblxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94Q29udHJvbCA9IHRoaXMudGhlbWUuZ2V0Q2hlY2tib3hDb250cm9sKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGxhYmVsOiBpc1NldChzY2hlbWFUaXRsZSkgPyBzY2hlbWFUaXRsZSA6IGNoaWxkLmdldEtleSgpLFxuICAgICAgICAgICAgc3JPbmx5OiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNrYm94Q29udHJvbC5pbnB1dFxuXG4gICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGhhc093bih0aGlzLmluc3RhbmNlLmdldFZhbHVlKCksIGNoaWxkLmdldEtleSgpKVxuXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wZXJ0aWVzQWN0aXZhdG9ycy5hcHBlbmRDaGlsZChjaGVja2JveENvbnRyb2wuY29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hFZGl0b3JzICgpIHtcbiAgICB3aGlsZSAodGhpcy5jb250cm9sLmNoaWxkcmVuU2xvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LnJlbW92ZUNoaWxkKHRoaXMuY29udHJvbC5jaGlsZHJlblNsb3QubGFzdENoaWxkKVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2wuY2hpbGRyZW5TbG90LmFwcGVuZENoaWxkKGNoaWxkLnVpLmNvbnRyb2wuY29udGFpbmVyKVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2UuaXNSZWFkT25seSgpKSB7XG4gICAgICAgICAgY2hpbGQudWkuZGlzYWJsZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGQudWkuZW5hYmxlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMucmVmcmVzaFByb3BlcnRpZXNTbG90KClcbiAgICB0aGlzLnJlZnJlc2hFZGl0b3JzKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JPYmplY3RcbiIsImltcG9ydCBFZGl0b3JTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgeyBwYXRoVG9BdHRyaWJ1dGUgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVzY3JpcHRpb24sIGdldFNjaGVtYUVudW0sIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nRW51bVJhZGlvIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ0VudW1SYWRpbyBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFJhZGlvc0NvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uY2hlY2tlZCA9IChyYWRpby52YWx1ZSA9PT0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVJhZGlvXG4iLCJpbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4vc3RyaW5nJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ0VudW1TZWxlY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBFZGl0b3JcbiAqL1xuY2xhc3MgRWRpdG9yU3RyaW5nRW51bVNlbGVjdCBleHRlbmRzIEVkaXRvclN0cmluZyB7XG4gIGJ1aWxkICgpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnRoZW1lLmdldFNlbGVjdENvbnRyb2woe1xuICAgICAgdmFsdWVzOiBnZXRTY2hlbWFFbnVtKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSxcbiAgICAgIHRpdGxlczogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnZW51bVRpdGxlcycpIHx8IGdldFNjaGVtYUVudW0odGhpcy5pbnN0YW5jZS5zY2hlbWEpLFxuICAgICAgaWQ6IHBhdGhUb0F0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLnBhdGgpLFxuICAgICAgbGFiZWw6IGdldFNjaGVtYVRpdGxlKHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSB8fCB0aGlzLmluc3RhbmNlLmdldEtleSgpLFxuICAgICAgc3JPbmx5OiBnZXRTY2hlbWFPcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEsICdoaWRlVGl0bGUnKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgdGhpcy5jb250cm9sLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VmFsdWUodGhpcy5jb250cm9sLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nRW51bVNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcidcbmltcG9ydCB7IHBhdGhUb0F0dHJpYnV0ZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFEZXNjcmlwdGlvbiwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sIGdldFNjaGVtYVRpdGxlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEVkaXRvclN0cmluZ1RleHRhcmVhIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZ1RleHRhcmVhIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0VGV4dGFyZWFDb250cm9sKHtcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgZ2V0U2NoZW1hRm9ybWF0KHRoaXMuaW5zdGFuY2Uuc2NoZW1hKSA9PT0gJ2hpZGRlbicsXG4gICAgICBkZXNjcmlwdGlvbjogZ2V0U2NoZW1hRGVzY3JpcHRpb24odGhpcy5pbnN0YW5jZS5zY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnRyb2wuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLmNvbnRyb2wuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMucmVmcmVzaEludGVyYWN0aXZlRWxlbWVudHMoKVxuICAgIHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclN0cmluZ1RleHRhcmVhXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJ1xuaW1wb3J0IHsgcGF0aFRvQXR0cmlidXRlIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlc2NyaXB0aW9uLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYU9wdGlvbiwgZ2V0U2NoZW1hVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRWRpdG9yU3RyaW5nIGluc3RhbmNlLlxuICogQGV4dGVuZHMgRWRpdG9yXG4gKi9cbmNsYXNzIEVkaXRvclN0cmluZyBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydoaWRkZW4nLCAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdudW1iZXInLCAnbW9udGgnLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RpbWUnLCAndGVsJywgJ3RleHQnLCAndGV4dGFyZWEnLCAndXJsJywgJ3dlZWsnXVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLmluc3RhbmNlLnNjaGVtYSlcblxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMudGhlbWUuZ2V0SW5wdXRDb250cm9sKHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXMoc2NoZW1hRm9ybWF0KSA/IHNjaGVtYUZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiBwYXRoVG9BdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5wYXRoKSxcbiAgICAgIGxhYmVsOiBnZXRTY2hlbWFUaXRsZSh0aGlzLmluc3RhbmNlLnNjaGVtYSkgfHwgdGhpcy5pbnN0YW5jZS5nZXRLZXkoKSxcbiAgICAgIHNyT25seTogZ2V0U2NoZW1hT3B0aW9uKHRoaXMuaW5zdGFuY2Uuc2NoZW1hLCAnaGlkZVRpdGxlJykgfHwgc2NoZW1hRm9ybWF0ID09PSAnaGlkZGVuJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBnZXRTY2hlbWFEZXNjcmlwdGlvbih0aGlzLmluc3RhbmNlLnNjaGVtYSlcbiAgICB9KVxuXG4gICAgLy8gZml4IGNvbG9yIHBpY2tlciBidWdcbiAgICBpZiAoc2NoZW1hRm9ybWF0ID09PSAnY29sb3InICYmIHRoaXMuaW5zdGFuY2UudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKCcjMDAwMDAwJywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMuY29udHJvbC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoSW50ZXJhY3RpdmVFbGVtZW50cygpXG4gICAgdGhpcy5jb250cm9sLmlucHV0LnZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU3RyaW5nXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYW4gRXZlbnRFbWl0dGVyIGluc3RhbmNlLlxuICovXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gbmFtZWQgZXZlbnQgbGlzdGVuZXJcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVudCB0aGlzIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIG9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBuYW1lLCBjYWxsYmFjayB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvZiBhIG5hbWVkIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYmUgZW1pdHRlZFxuICAgKi9cbiAgZW1pdCAobmFtZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5uYW1lID09PSBuYW1lKVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lci5jYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc051bWJlciwgaXNJbnRlZ2VyLCBpc0Jvb2xlYW4sIGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVNjaGVtYSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuJHNjaGVtYSkgPyBzY2hlbWEuJHNjaGVtYSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzKSA/IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQWxsT2YgKHNjaGVtYSkge1xuICByZXR1cm4gaXNBcnJheShzY2hlbWEuYWxsT2YpID8gc2NoZW1hLmFsbE9mIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFBbnlPZiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc0FycmF5KHNjaGVtYS5hbnlPZikgPyBzY2hlbWEuYW55T2YgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYUNvbnN0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5jb25zdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hQ29udGFpbnMgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5jb250YWlucykgfHwgaXNCb29sZWFuKHNjaGVtYS5jb250YWlucykpID8gc2NoZW1hLmNvbnRhaW5zIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZWZhdWx0IChzY2hlbWEpIHtcbiAgcmV0dXJuIHNjaGVtYS5kZWZhdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEuZGVwZW5kZW50UmVxdWlyZWQpID8gc2NoZW1hLmRlcGVuZGVudFJlcXVpcmVkIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzKSA/IHNjaGVtYS5kZXBlbmRlbnRTY2hlbWFzIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFEZXNjcmlwdGlvbiAoc2NoZW1hKSB7XG4gIHJldHVybiBpc1N0cmluZyhzY2hlbWEuZGVzY3JpcHRpb24pID8gc2NoZW1hLmRlc2NyaXB0aW9uIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFbHNlIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEuZWxzZSkgfHwgaXNCb29sZWFuKHNjaGVtYS5lbHNlKSkgPyBzY2hlbWEuZWxzZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hRW51bSAoc2NoZW1hKSB7XG4gIGlmIChpc0FycmF5KHNjaGVtYS5lbnVtKSAmJiBzY2hlbWEuZW51bS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5lbnVtXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNYXhpbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSA/IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFGb3JtYXQgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLmZvcm1hdCkgPyBzY2hlbWEuZm9ybWF0IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFJZiAoc2NoZW1hKSB7XG4gIGlmIChpc09iamVjdChzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgaWYgKGlzQm9vbGVhbihzY2hlbWEuaWYpKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5pZlxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNPYmplY3Qoc2NoZW1hLml0ZW1zKSB8fCBpc0Jvb2xlYW4oc2NoZW1hLml0ZW1zKSA/IHNjaGVtYS5pdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4aW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWF4aW11bSkgPyBzY2hlbWEubWF4aW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWF4Q29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhDb250YWlucykgJiYgc2NoZW1hLm1heENvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1heENvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNYXhJdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heEl0ZW1zKSAmJiBzY2hlbWEubWF4SXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWF4SXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heExlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1heExlbmd0aCkgJiYgc2NoZW1hLm1heExlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tYXhMZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1heFByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xuICAgIHJldHVybiBzY2hlbWEubWF4UHJvcGVydGllc1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluaW11bSAoc2NoZW1hKSB7XG4gIHJldHVybiBpc051bWJlcihzY2hlbWEubWluaW11bSkgPyBzY2hlbWEubWluaW11bSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hTWluQ29udGFpbnMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Db250YWlucykgJiYgc2NoZW1hLm1pbkNvbnRhaW5zID49IDApIHtcbiAgICByZXR1cm4gc2NoZW1hLm1pbkNvbnRhaW5zXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNaW5JdGVtcyAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkl0ZW1zKSAmJiBzY2hlbWEubWluSXRlbXMgPj0gMCkge1xuICAgIHJldHVybiBzY2hlbWEubWluSXRlbXNcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pbkxlbmd0aCAoc2NoZW1hKSB7XG4gIGlmIChpc0ludGVnZXIoc2NoZW1hLm1pbkxlbmd0aCkgJiYgc2NoZW1hLm1pbkxlbmd0aCA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5MZW5ndGhcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU1pblByb3BlcnRpZXMgKHNjaGVtYSkge1xuICBpZiAoaXNJbnRlZ2VyKHNjaGVtYS5taW5Qcm9wZXJ0aWVzKSAmJiBzY2hlbWEubWluUHJvcGVydGllcyA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5taW5Qcm9wZXJ0aWVzXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFNdWx0aXBsZU9mIChzY2hlbWEpIHtcbiAgaWYgKGlzTnVtYmVyKHNjaGVtYS5tdWx0aXBsZU9mKSAmJiBzY2hlbWEubXVsdGlwbGVPZiA+PSAwKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5tdWx0aXBsZU9mXG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFOb3QgKHNjaGVtYSkge1xuICByZXR1cm4gKGlzT2JqZWN0KHNjaGVtYS5ub3QpIHx8IGlzQm9vbGVhbihzY2hlbWEubm90KSkgPyBzY2hlbWEubm90IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFPcHRpb24gKHNjaGVtYSwgb3B0aW9uKSB7XG4gIHJldHVybiAoc2NoZW1hLm9wdGlvbnMgJiYgc2NoZW1hLm9wdGlvbnNbb3B0aW9uXSkgPyBzY2hlbWEub3B0aW9uc1tvcHRpb25dIDogZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm4gKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnBhdHRlcm4pID8gc2NoZW1hLnBhdHRlcm4gOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykgPyBzY2hlbWEucGF0dGVyblByb3BlcnRpZXMgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVByZWZpeEl0ZW1zIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnByZWZpeEl0ZW1zKSA/IHNjaGVtYS5wcmVmaXhJdGVtcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUHJvcGVydGllcyAoc2NoZW1hKSB7XG4gIHJldHVybiBpc09iamVjdChzY2hlbWEucHJvcGVydGllcykgPyBzY2hlbWEucHJvcGVydGllcyA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hUmVhZE9ubHkgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS5yZWFkT25seSkgPyBzY2hlbWEucmVhZE9ubHkgOiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYVJlcXVpcmVkIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IFsuLi5uZXcgU2V0KHNjaGVtYS5yZXF1aXJlZCldIDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2hlbWFUaGVuIChzY2hlbWEpIHtcbiAgcmV0dXJuIChpc09iamVjdChzY2hlbWEudGhlbikgfHwgaXNCb29sZWFuKHNjaGVtYS50aGVuKSkgPyBzY2hlbWEudGhlbiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVGl0bGUgKHNjaGVtYSkge1xuICByZXR1cm4gaXNTdHJpbmcoc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVHlwZSAoc2NoZW1hKSB7XG4gIGlmIChpc1N0cmluZyhzY2hlbWEudHlwZSkgfHwgaXNBcnJheShzY2hlbWEudHlwZSkpIHtcbiAgICByZXR1cm4gc2NoZW1hLnR5cGVcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaGVtYU9uZU9mIChzY2hlbWEpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc2NoZW1hLm9uZU9mKSA/IHNjaGVtYS5vbmVPZiA6IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NoZW1hVW5pcXVlSXRlbXMgKHNjaGVtYSkge1xuICByZXR1cm4gaXNCb29sZWFuKHNjaGVtYS51bmlxdWVJdGVtcykgPyBzY2hlbWEudW5pcXVlSXRlbXMgOiB1bmRlZmluZWRcbn1cbiIsIi8qKlxuICogVXRpbHMuXG4gKiBAbW9kdWxlIHV0aWxzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmN1bGFyUmVwbGFjZXIgKCkge1xuICBjb25zdCBhbmNlc3RvcnMgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgLy8gYHRoaXNgIGlzIHRoZSBvYmplY3QgdGhhdCB2YWx1ZSBpcyBjb250YWluZWQgaW4sXG4gICAgLy8gaS5lLiwgaXRzIGRpcmVjdCBwYXJlbnQuXG4gICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggPiAwICYmIGFuY2VzdG9ycy5hdCgtMSkgIT09IHRoaXMpIHtcbiAgICAgIGFuY2VzdG9ycy5wb3AoKVxuICAgIH1cbiAgICBpZiAoYW5jZXN0b3JzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJ1xuICAgIH1cbiAgICBhbmNlc3RvcnMucHVzaCh2YWx1ZSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBjbG9uZSBvZiBhIHRoaW5nXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7Kn0gVGhlIGNsb25lIG9mIHRoZSB0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKHRoaW5nKSB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcsIGdldENpcmN1bGFyUmVwbGFjZXIoKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBlc2NhcGVkIHJlZ2V4cFxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCByZWdleHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZmluZCAtIFRoZSBwYXJ0IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSByZXBsYWNlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwgKHN0ciwgZmluZCwgcmVwbGFjZSkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGpzb24gcGF0aCB0byBiZSB1c2VkIGFzIGFuIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBqc29uIHBhdGhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhUb0F0dHJpYnV0ZSAocGF0aCkge1xuICByZXR1cm4gcmVwbGFjZUFsbChyZXBsYWNlQWxsKHBhdGgsICcjJywgJ3Jvb3QnKSwgJy8nLCAnLScpXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn1cblxuLyoqXG4gKiBTb3J0IG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gVGhlIG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3QgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIHt9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBwYXNzZWQgYXJlIGVxdWFsXG4gKiBAcGFyYW0geyp9IGEgLSBWYWx1ZSBBXG4gKiBAcGFyYW0geyp9IGIgLSBWYWx1ZSBCXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwgKGEsIGIpIHtcbiAgaWYgKGlzT2JqZWN0KGEpICYmIGlzT2JqZWN0KGIpKSB7XG4gICAgYSA9IHNvcnRPYmplY3QoYSlcbiAgICBiID0gc29ydE9iamVjdChiKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgcGFzc2VkIGFyZSBkaWZmZXJlbnRcbiAqIEBwYXJhbSB7Kn0gYSAtIFZhbHVlIEFcbiAqIEBwYXJhbSB7Kn0gYiAtIFZhbHVlIEJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgcmV0dXJuICFlcXVhbChhLCBiKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG51bGxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZGVmaW5lZFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90U2V0ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgbnVtYmVyXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gaW50ZWdlclxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgYm9vbGVhblxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBhbiBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuICFpc051bGwodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0eXBlIG9mIHRoZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSAodmFsdWUpIHtcbiAgbGV0IHR5cGUgPSAnYW55J1xuXG4gIGlmIChpc051bWJlcih2YWx1ZSkpIHtcbiAgICB0eXBlID0gaXNJbnRlZ2VyKHZhbHVlKSA/ICdpbnRlZ2VyJyA6ICdudW1iZXInXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdzdHJpbmcnXG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYm9vbGVhbidcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHR5cGUgPSAnYXJyYXknXG4gIH0gZWxzZSBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgIHR5cGUgPSAnbnVsbCdcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB0eXBlID0gJ29iamVjdCdcbiAgfVxuXG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogTWVyZ2VzIG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3RbXX0gc291cmNlcyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkIGludG8gdGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG1lcmdlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgICAgW2tleV06IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XTogc291cmNlW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weSAob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgY29uc3QgY29weSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcHlbaV0gPSBkZWVwQ29weShvYmpbaV0pXG4gICAgfVxuICAgIHJldHVybiBjb3B5XG4gIH1cblxuICBjb25zdCBjb3B5ID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29weVxufVxuXG4vKipcbiAqIE1lcmdlcyBvYmplY3RzIGJ1dCBvbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluIGJvdGhzIG9iamVjdHNcbiAqIGlmIHRoZXkgYXJlIHRoZSBzYW1lIHR5cGUgb2YgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIC0gVGhlIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9iajIgLSBPYmplY3RzIHdobydzIHByb3BlcnRpZXMgYXJlIHRoZSBvdmVycmlkZXNcbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIG92ZXJ3cml0dGVuIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlRXhpc3RpbmdQcm9wZXJ0aWVzIChvYmoxLCBvYmoyKSB7XG4gIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqMSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmoxW2tleV0gPT09IHR5cGVvZiBvYmoyW2tleV0pIHtcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvYmoxXG59XG5cbi8qKlxuICogR2V0IHNvbWUgdmFsdWUgYnkgdHJhdmVyc2luZyB0aGUgZGF0YSB1c2luZyBKU09OIHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIEpTT04gcGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQnlKU09OUGF0aCAoZGF0YSwgcGF0aCkge1xuICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdCgnLicpIC8vIFNwbGl0IHRoZSBwYXRoIGludG8gaW5kaXZpZHVhbCBrZXlzXG5cbiAgbGV0IHZhbHVlID0gZGF0YVxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIC9eXFxkKyQvLnRlc3Qoa2V5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChrZXkpXG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlW2luZGV4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBJbmRleCBpcyBvdXQgb2YgYm91bmRzLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNPd24odmFsdWUsIGtleSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIEtleSBkb2Vzbid0IGV4aXN0LCByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSB0ZW1wbGF0ZSBieSBzZWFyY2ggYW5kIHJlcGxhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gV2hlcmUgdGVtcGxhdGUgZGF0YSBsaXZlc1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZSAodGVtcGxhdGUsIGRhdGEpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAobWF0Y2gpID0+IHtcbiAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICBjb25zdCBwYXRoID0gbWF0Y2guc3BsaXQoL3t7fH19LylbMV1cbiAgICByZXR1cm4gZ2V0VmFsdWVCeUpTT05QYXRoKGRhdGEsIHBhdGgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IChhcnIpIHtcbiAgY29uc3QgdW5pcXVlT2JqZWN0cyA9IFtdXG4gIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBTZXQoKVxuXG4gIGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIGNvbnN0IG9ialN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICBpZiAoIXVuaXF1ZVZhbHVlcy5oYXMob2JqU3RyaW5nKSkge1xuICAgICAgdW5pcXVlVmFsdWVzLmFkZChvYmpTdHJpbmcpXG4gICAgICB1bmlxdWVPYmplY3RzLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmlxdWVPYmplY3RzXG59XG4iLCIvKipcbiAqIFNpbXBsZSB0cmFuc2xhdGlvbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGkxOG5cbiAqL1xuXG4vKipcbiAqIExvY2FsZSBtZXNzYWdlc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGkxOG4gPSB7XG4gIGVycm9yQWRkaXRpb25hbFByb3BlcnRpZXM6ICdoYXMgYWRkaXRpb25hbCBwcm9wZXJ0eSBcInt7IHByb3BlcnR5IH19XCIgYnV0IG5vIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgYWxsb3dlZCcsXG4gIGVycm9yQW55T2Y6ICdtdXN0IHZhbGlkYXRlIGFnYWluc3QgYXQgbGVhc3Qgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzJyxcbiAgZXJyb3JDb25zdDogJ211c3QgaGF2ZSB2YWx1ZSBvZjoge3sgY29uc3QgfX0nLFxuICBlcnJvckNvbnRhaW5zOiAnbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvckRlcGVuZGVudFJlcXVpcmVkOiAnbXVzdCBoYXZlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzOiB7eyBkZXBlbmRlbnRSZXF1aXJlZCB9fScsXG4gIGVycm9yRW51bTogJ211c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlczoge3sgZW51bSB9fScsXG4gIGVycm9yRXhjbHVzaXZlTWF4aW11bTogJ211c3QgYmUgbGVzcyB0aGFuIHt7IGV4Y2x1c2l2ZU1heGltdW0gfX0nLFxuICBlcnJvckV4Y2x1c2l2ZU1pbmltdW06ICdtdXN0IGJlIGdyZWF0ZXIgdGhhbiB7eyBleGNsdXNpdmVNaW5pbXVtIH19JyxcbiAgZXJyb3JGb3JtYXQ6ICdtdXN0IGJlIGEgdmFsaWQge3sgZm9ybWF0IH19JyxcbiAgZXJyb3JJdGVtczogJ211c3QgaGF2ZSBpdGVtcyB0aGF0IHZhbGlkYXRlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYScsXG4gIGVycm9yTWF4aW11bTogJ211c3QgYmUgYXQgbW9zdCB7eyBtYXhpbXVtIH19JyxcbiAgZXJyb3JNYXhJdGVtczogJ211c3QgaGF2ZSBhdCBtb3N0IHt7IG1heEl0ZW1zIH19IGl0ZW1zJyxcbiAgZXJyb3JNYXhMZW5ndGg6ICdtdXN0IGJlIGF0IG1vc3Qge3sgbWF4TGVuZ3RoIH19IGNoYXJhY3RlcnMgbG9uZycsXG4gIGVycm9yTWF4UHJvcGVydGllczogJ211c3QgaGF2ZSBhdCBtb3N0IHt7IG1heFByb3BlcnRpZXMgfX0gcHJvcGVydGllcycsXG4gIGVycm9yTWF4Q29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbW9zdCB7eyBtYXhDb250YWlucyB9fSBpdGVtcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgc2NoZW1hLiBJdCBjdXJyZW50bHkgY29udGFpbnMge3sgY291bnRlciB9fScsXG4gIGVycm9yTWluQ29udGFpbnM6ICdtdXN0IGNvbnRhaW4gYXQgbGVhc3Qge3sgbWluQ29udGFpbnMgfX0gaXRlbXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHNjaGVtYS4gSXQgY3VycmVudGx5IGNvbnRhaW5zIHt7IGNvdW50ZXIgfX0nLFxuICBlcnJvck1pbmltdW06ICdtdXN0IGJlIGF0IGxlYXN0IHt7IG1pbmltdW0gfX0nLFxuICBlcnJvck1pbkl0ZW1zOiAnbXVzdCBoYXZlIGF0IGxlYXN0IHt7IG1pbkl0ZW1zIH19IGl0ZW1zJyxcbiAgZXJyb3JNaW5MZW5ndGg6ICdtdXN0IGJlIGF0IGxlYXN0IHt7IG1pbkxlbmd0aCB9fSBjaGFyYWN0ZXJzIGxvbmcnLFxuICBlcnJvck1pblByb3BlcnRpZXM6ICdtdXN0IGhhdmUgYXQgbGVhc3Qge3sgbWluUHJvcGVydGllcyB9fSBwcm9wZXJ0aWVzJyxcbiAgZXJyb3JNdWx0aXBsZU9mOiAnbXVzdCBiZSBtdWx0aXBsZSBvZiB7eyBtdWx0aXBsZU9mIH19JyxcbiAgZXJyb3JOb3Q6ICdtdXN0IG5vdCB2YWxpZGF0ZSBhZ2FpbnN0IHRoZSBwcm92aWRlZCBzY2hlbWEnLFxuICBlcnJvck9uZU9mOiAnbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IGV4YWN0bHkgb25lIG9mIHRoZSBwcm92aWRlZCBzY2hlbWFzLiBJdCBjdXJyZW50bHkgdmFsaWRhdGVzIGFnYWluc3Qge3sgY291bnRlciB9fSBvZiB0aGUgc2NoZW1hcycsXG4gIGVycm9yUGF0dGVybjogJ211c3QgbWF0Y2ggdGhlIHBhdHRlcm46IFwie3sgcGF0dGVybiB9fVwiJyxcbiAgZXJyb3JQcmVmaXhJdGVtczogJ0l0ZW0ge3sgaW5kZXggfX0gZmFpbHMgdmFsaWRhdGlvbicsXG4gIGVycm9yUmVxdWlyZWQ6ICdtdXN0IGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXM6IHt7IHJlcXVpcmVkIH19JyxcbiAgZXJyb3JUeXBlOiAnbXVzdCBiZSBvZiB0eXBlIHt7IHR5cGUgfX0nLFxuICBlcnJvclVuaXF1ZUl0ZW1zOiAnbXVzdCBoYXZlIHVuaXF1ZSBpdGVtcydcbn1cbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IHsgaXNTZXQsIGNsb25lLCBpc0FycmF5IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JBcnJheSBmcm9tICcuLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEVkaXRvckFycmF5TmF2IGZyb20gJy4uL2VkaXRvcnMvYXJyYXktbmF2J1xuaW1wb3J0IHsgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFJdGVtcywgZ2V0U2NoZW1hUHJlZml4SXRlbXMsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEluc3RhbmNlQXJyYXkgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUFycmF5IGV4dGVuZHMgSW5zdGFuY2Uge1xuICBzZXRVSSAoKSB7XG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hRm9ybWF0ID0gZ2V0U2NoZW1hRm9ybWF0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdhcnJheScgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JBcnJheU5hdih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckFycmF5KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZSAoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW4oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtSW5zdGFuY2UgKHZhbHVlKSB7XG4gICAgbGV0IHNjaGVtYVxuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIGNvbnN0IHNjaGVtYUl0ZW1zID0gZ2V0U2NoZW1hSXRlbXModGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hUHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyh0aGlzLnNjaGVtYSlcbiAgICBzY2hlbWEgPSBpc1NldChzY2hlbWFJdGVtcykgPyBzY2hlbWFJdGVtcyA6IHt9XG5cbiAgICBjb25zdCBoYXNQcmVmaXhJdGVtc1NjaGVtYSA9IGlzU2V0KHNjaGVtYVByZWZpeEl0ZW1zKSAmJiBpc1NldChzY2hlbWFQcmVmaXhJdGVtc1tpdGVtc0NvdW50XSlcblxuICAgIGlmIChoYXNQcmVmaXhJdGVtc1NjaGVtYSkge1xuICAgICAgc2NoZW1hID0gc2NoZW1hUHJlZml4SXRlbXNbaXRlbXNDb3VudF1cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZCA9IHRoaXMuamVkaS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArIHRoaXMuamVkaS5wYXRoU2VwYXJhdG9yICsgaXRlbXNDb3VudCxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgY2hpbGQuc2V0VmFsdWUodmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZFxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtSW5zdGFuY2UoKVxuICAgIGNvbnN0IHZhbHVlID0gY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gIH1cblxuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFtdXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGNoaWxkLmdldFZhbHVlKCkpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICByZWZyZXNoQ2hpbGRyZW4gKCkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcblxuICAgIGlmICghaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goKGl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmNyZWF0ZUl0ZW1JbnN0YW5jZShpdGVtVmFsdWUpXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZUFycmF5XG4iLCJpbXBvcnQgSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcbmltcG9ydCBFZGl0b3JCb29sZWFuRW51bVJhZGlvIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvckJvb2xlYW5FbnVtU2VsZWN0IGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXNlbGVjdCdcbmltcG9ydCBFZGl0b3JCb29sZWFuIGZyb20gJy4uL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCwgZ2V0U2NoZW1hVHlwZSB9IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZUJvb2xlYW4gaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZUJvb2xlYW4gZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHNjaGVtYUZvcm1hdCA9PT0gJ3JhZGlvJykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hRm9ybWF0ID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JCb29sZWFuRW51bVNlbGVjdCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvckJvb2xlYW4odGhpcylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VCb29sZWFuXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0LCByZW1vdmVEdXBsaWNhdGVzRnJvbUFycmF5IH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYURlZmF1bHQsIGdldFNjaGVtYVJlYWRPbmx5LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEpTT04gaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBKZWRpIGluc3RhbmNlIHRvIHdoaWNoIHRoaXMgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKiBAdHlwZSB7SmVkaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG5cbiAgICAvKipcbiAgICAgKiBBIEpTT04gc2NoZW1hLlxuICAgICAqIEB0eXBlIHtib29sZWFufG9iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuXG4gICAgLyoqXG4gICAgICogVGhlIGpzb24gdmFsdWUgb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSBpc1NldChjb25maWcudmFsdWUpID8gY29uZmlnLnZhbHVlIDogdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIHN0YXRlIG9mIHRoaXMgaW5zdGFuY2UuIElmIGZhbHNlIHRoZSBlZGl0b3IgaXMgbm90IHBhcnRpY2lwYXRpbmdcbiAgICAgKiB0byB0aGUgdmFsdWUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjaGVtYSBwYXRoIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8IHRoaXMuamVkaS5yb290TmFtZVxuXG4gICAgLyoqXG4gICAgICogVGhlIFBhcmVudCBpbnN0YW5jZSBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZXxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcblxuICAgIC8qKlxuICAgICAqIENoaWxkIGluc3RhbmNlcyBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEB0eXBlIHtJbnN0YW5jZVtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWRpdG9yIGNvbnRyb2xsaW5nIHRoaXMgSW5zdGFuY2UgaWYgYW55XG4gICAgICogQHR5cGUge0VkaXRvcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy51aSA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW5kIHJlZ2lzdGVyIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpXG4gICAgdGhpcy5zZXRJbml0aWFsVmFsdWUoKVxuICAgIHRoaXMucHJlcGFyZSgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuXG4gICAgaWYgKHRoaXMuamVkaS5vcHRpb25zLmlzRWRpdG9yKSB7XG4gICAgICB0aGlzLnNldFVJKClcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnN0YW5jZSB1aSBwcm9wZXJ0eS4gVUkgY2FuIGJlIGFuIGVkaXRvciBpbnN0YW5jZSBvciBzaW1pbGFyXG4gICAqL1xuICBzZXRVSSAoKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGluc3RhbmNlIHBhdGhcbiAgICovXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciB0byB0aGUgaW5zdGFuY2VzIGxpc3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY2hpbGQgaW5zdGFuY2UgcG9pbnRlciBmcm9tIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXIodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnN0YW5jZSBiYXNlZCBvbiBpdCdzIHR5cGVcbiAgICovXG4gIHNldEluaXRpYWxWYWx1ZSAoKSB7XG4gICAgaWYgKG5vdFNldCh0aGlzLnZhbHVlKSkge1xuICAgICAgbGV0IHZhbHVlXG4gICAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcblxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdudW1iZXInKSB2YWx1ZSA9IDAuMFxuICAgICAgaWYgKHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnYXJyYXknKSB2YWx1ZSA9IFtdXG4gICAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbFxuXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGNvbnN0IHNjaGVtYURlZmF1bHQgPSBnZXRTY2hlbWFEZWZhdWx0KHRoaXMuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYURlZmF1bHQpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHNjaGVtYURlZmF1bHQsIGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluc3RhbmNlIHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIHRyaWdnZXJzQ2hhbmdlID0gdHJ1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMuZW1pdCgnc2V0LXZhbHVlJylcblxuICAgIGlmICh0cmlnZ2Vyc0NoYW5nZSkge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGEgY2hpbGQncyBpbnN0YW5jZSBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBvbkNoaWxkQ2hhbmdlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIGdldEVycm9ycyAoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLmdldEVycm9ycyh0aGlzLmdldFZhbHVlKCksIHRoaXMuc2NoZW1hLCB0aGlzLmdldEtleSgpLCB0aGlzLnBhdGgpXG5cbiAgICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc0Zyb21BcnJheShlcnJvcnMpXG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBkYXRhIGJlZm9yZSBidWlsZGluZyB0aGUgZWRpdG9yXG4gICAqL1xuICBwcmVwYXJlICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluc3RhbmNlXG4gICAqL1xuICBhY3RpdmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgaW5zdGFuY2VcbiAgICovXG4gIGRlYWN0aXZhdGUgKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgaW5zdGFuY2UgaXMgcmVhZCBvbmx5XG4gICAqL1xuICBpc1JlYWRPbmx5ICgpIHtcbiAgICBsZXQgcmVhZE9ubHkgPSBmYWxzZVxuXG4gICAgaWYgKGdldFNjaGVtYVJlYWRPbmx5KHRoaXMuc2NoZW1hKSA9PT0gdHJ1ZSkge1xuICAgICAgcmVhZE9ubHkgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIGdldFNjaGVtYVJlYWRPbmx5KHRoaXMucGFyZW50LnNjaGVtYSkgPT09IHRydWUpIHtcbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZWFkT25seVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy51bnJlZ2lzdGVyKClcblxuICAgIGlmICh0aGlzLnVpKSB7XG4gICAgICB0aGlzLnVpLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgIH0pXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yTXVsdGlwbGUgZnJvbSAnLi4vZWRpdG9ycy9tdWx0aXBsZSdcbmltcG9ydCB7XG4gIGlzU2V0LFxuICBpc0FycmF5LFxuICBkaWZmZXJlbnQsXG4gIG5vdFNldCxcbiAgY2xvbmUsXG4gIGlzT2JqZWN0LFxuICBvdmVyd3JpdGVFeGlzdGluZ1Byb3BlcnRpZXMsIG1lcmdlRGVlcCwgZGVlcENvcHlcbn0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBKZWRpIGZyb20gJy4uL2plZGknXG5pbXBvcnQge1xuICBnZXRTY2hlbWFBbnlPZixcbiAgZ2V0U2NoZW1hT25lT2YsXG4gIGdldFNjaGVtYU9wdGlvbixcbiAgZ2V0U2NoZW1hVHlwZVxufSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VNdWx0aXBsZSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIEluc3RhbmNlXG4gKi9cbmNsYXNzIEluc3RhbmNlTXVsdGlwbGUgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck11bHRpcGxlKHRoaXMpXG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcyA9IFtdXG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IG51bGxcbiAgICB0aGlzLmFjdGl2ZUluc3RhbmNlQ2hhbmdlZCA9IHRydWVcbiAgICB0aGlzLmxhc3RJbmRleCA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuICAgIHRoaXMuc2NoZW1hcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcyA9IFtdXG4gICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMgPSBbXVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNldFZhbHVlKClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUodGhpcy5zY2hlbWEpXG5cbiAgICBpZiAoaXNTZXQoZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpKSB8fCBpc1NldChnZXRTY2hlbWFPbmVPZih0aGlzLnNjaGVtYSkpKSB7XG4gICAgICBjb25zdCBzY2hlbWFzT2YgPSBpc1NldChnZXRTY2hlbWFBbnlPZih0aGlzLnNjaGVtYSkpID8gZ2V0U2NoZW1hQW55T2YodGhpcy5zY2hlbWEpIDogZ2V0U2NoZW1hT25lT2YodGhpcy5zY2hlbWEpXG4gICAgICBjb25zdCBzY2hlbWFDb3B5ID0gZGVlcENvcHkodGhpcy5zY2hlbWEpXG4gICAgICBkZWxldGUgc2NoZW1hQ29weVsnYW55T2YnXVxuICAgICAgZGVsZXRlIHNjaGVtYUNvcHlbJ29uZU9mJ11cbiAgICAgIGRlbGV0ZSBzY2hlbWFDb3B5WydvcHRpb25zJ11cblxuICAgICAgc2NoZW1hc09mLmZvckVhY2goKHNjaGVtYSwgaW5kZXgpID0+IHtcbiAgICAgICAgc2NoZW1hID0geyAuLi5zY2hlbWFDb3B5LCAuLi5zY2hlbWEgfVxuICAgICAgICBjb25zdCBzd2l0Y2hlck9wdGlvbnNMYWJlbCA9IGdldFNjaGVtYU9wdGlvbihzY2hlbWEsICdzd2l0Y2hlclRpdGxlJykgfHwgJ09wdGlvbi0nICsgKGluZGV4ICsgMSlcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvblZhbHVlcy5wdXNoKGluZGV4KVxuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscy5wdXNoKHN3aXRjaGVyT3B0aW9uc0xhYmVsKVxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShzY2hlbWFUeXBlKSkge1xuICAgICAgc2NoZW1hVHlwZS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzY2hlbWFDbG9uZSA9IG1lcmdlRGVlcCh0aGlzLnNjaGVtYSlcblxuICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgLi4uc2NoZW1hQ2xvbmUsXG4gICAgICAgICAgLi4ueyB0eXBlOiB0eXBlLCB0aXRsZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNTZXQoc2NoZW1hQ2xvbmUudGl0bGUpKSB7XG4gICAgICAgICAgc2NoZW1hLnRpdGxlID0gc2NoZW1hQ2xvbmUudGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoZXJPcHRpb25WYWx1ZXMucHVzaChpbmRleClcbiAgICAgICAgdGhpcy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMucHVzaCh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSlcblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgIXNjaGVtYVR5cGUpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUNsb25lID0gZGVlcENvcHkodGhpcy5zY2hlbWEpXG5cbiAgICAgIHRoaXMuc2NoZW1hcyA9IFtcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnb2JqZWN0JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ2FycmF5JyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ3N0cmluZycgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdudW1iZXInIH0gfSxcbiAgICAgICAgeyAuLi5zY2hlbWFDbG9uZSwgLi4ueyB0eXBlOiAnaW50ZWdlcicgfSB9LFxuICAgICAgICB7IC4uLnNjaGVtYUNsb25lLCAuLi57IHR5cGU6ICdib29sZWFuJyB9IH0sXG4gICAgICAgIHsgLi4uc2NoZW1hQ2xvbmUsIC4uLnsgdHlwZTogJ251bGwnIH0gfVxuICAgICAgXVxuXG4gICAgICB0aGlzLnNjaGVtYXMuZm9yRWFjaCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uVmFsdWVzLnB1c2goaW5kZXgpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN3aXRjaGVyT3B0aW9uc0xhYmVscyA9IFtcbiAgICAgICAgJ09iamVjdCcsICdBcnJheScsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0ludGVnZXInLCAnQm9vbGVhbicsICdOdWxsJ1xuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hcy5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5qZWRpLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgICB2YWx1ZTogY2xvbmUodGhpcy52YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIGlmIChpc1NldCh0aGlzLnZhbHVlKSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLnZhbHVlLCBmYWxzZSlcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UudW5yZWdpc3RlcigpXG5cbiAgICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpXG5cbiAgICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIH0pXG5cbiAgICBjb25zdCBmaXR0ZXN0SW5kZXggPSBpc1NldCh0aGlzLmlmKSA/IHRoaXMuZ2V0SWZJbmRleCh0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0Rml0dGVzdEluZGV4KHRoaXMudmFsdWUpXG4gICAgdGhpcy5zd2l0Y2hJbnN0YW5jZShmaXR0ZXN0SW5kZXgsIHRoaXMudmFsdWUpXG4gIH1cblxuICBzd2l0Y2hJbnN0YW5jZSAoaW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5hY3RpdmVJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW2luZGV4XVxuXG4gICAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgICAgdGhpcy5hY3RpdmVJbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKCkpXG4gIH1cblxuICBvblNldFZhbHVlICgpIHtcbiAgICBpZiAoZGlmZmVyZW50KHRoaXMuYWN0aXZlSW5zdGFuY2UuZ2V0VmFsdWUoKSwgdGhpcy52YWx1ZSkgfHwgdGhpcy5hY3RpdmVJbnN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5zdGFuY2VDaGFuZ2VkID0gZmFsc2VcbiAgICAgIGNvbnN0IGZpdHRlc3RJbmRleCA9IGlzU2V0KHRoaXMuaWYpID8gdGhpcy5nZXRJZkluZGV4KHRoaXMudmFsdWUpIDogdGhpcy5nZXRGaXR0ZXN0SW5kZXgodGhpcy52YWx1ZSlcbiAgICAgIHRoaXMuc3dpdGNoSW5zdGFuY2UoZml0dGVzdEluZGV4LCB0aGlzLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlYXNzaWduVmFsdWVzICgpIHtcbiAgICBjb25zdCBsYXN0SW5zdGFuY2VWYWx1ZSA9IHRoaXMuaW5zdGFuY2VzW3RoaXMubGFzdEluZGV4XS5nZXRWYWx1ZSgpXG4gICAgY29uc3QgY3VycmVudEluc3RhbmNlVmFsdWUgPSB0aGlzLmFjdGl2ZUluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGlmIChpc09iamVjdChsYXN0SW5zdGFuY2VWYWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudEluc3RhbmNlVmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXJnZWRWYWx1ZSA9IG92ZXJ3cml0ZUV4aXN0aW5nUHJvcGVydGllcyhjdXJyZW50SW5zdGFuY2VWYWx1ZSwgbGFzdEluc3RhbmNlVmFsdWUpXG4gICAgICB0aGlzLmFjdGl2ZUluc3RhbmNlLnNldFZhbHVlKG1lcmdlZFZhbHVlLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBnZXRJZkluZGV4ICh2YWx1ZSkge1xuICAgIGNvbnN0IGlmRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHRoaXMuaWYsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgY29uc3QgaWZFcnJvcnMgPSBpZkVkaXRvci5nZXRFcnJvcnMoKVxuICAgIGlmRWRpdG9yLmRlc3Ryb3koKVxuICAgIHJldHVybiBpZkVycm9ycy5sZW5ndGggPT09IDAgPyAwIDogMVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnN0YW5jZSB0aGF0IGhhcyBsZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAqL1xuICBnZXRGaXR0ZXN0SW5kZXggKHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBmaXR0ZXN0SW5kZXhcbiAgICBsZXQgY2hhbXBpb25FcnJvcnNcblxuICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlRXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci5nZXRFcnJvcnModmFsdWUsIGluc3RhbmNlLnNjaGVtYSwgaW5zdGFuY2UuZ2V0S2V5KCksIGluc3RhbmNlLnBhdGgpXG5cbiAgICAgIGlmIChub3RTZXQoZml0dGVzdEluZGV4KSB8fCBub3RTZXQoY2hhbXBpb25FcnJvcnMpKSB7XG4gICAgICAgIGZpdHRlc3RJbmRleCA9IGluZGV4XG4gICAgICAgIGNoYW1waW9uRXJyb3JzID0gaW5zdGFuY2VFcnJvcnNcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlRXJyb3JzLmxlbmd0aCA8IGNoYW1waW9uRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBmaXR0ZXN0SW5kZXggPSBpbmRleFxuICAgICAgICBjaGFtcGlvbkVycm9ycyA9IGluc3RhbmNlRXJyb3JzXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICByZXR1cm4gZml0dGVzdEluZGV4XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlTXVsdGlwbGVcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bGwgZnJvbSAnLi4vZWRpdG9ycy9udWxsJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBJbnN0YW5jZU51bGwgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU51bGwgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bGwodGhpcylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bGxcbiIsImltcG9ydCBJbnN0YW5jZSBmcm9tICcuL2luc3RhbmNlJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvck51bWJlckVudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yTnVtYmVyIGZyb20gJy4uL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRW51bSwgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEluc3RhbmNlTnVtYmVyIGluc3RhbmNlLlxuICogQGV4dGVuZHMgSW5zdGFuY2VcbiAqL1xuY2xhc3MgSW5zdGFuY2VOdW1iZXIgZXh0ZW5kcyBJbnN0YW5jZSB7XG4gIHNldFVJICgpIHtcbiAgICBjb25zdCBzY2hlbWFUeXBlID0gZ2V0U2NoZW1hVHlwZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFGb3JtYXQgPSBnZXRTY2hlbWFGb3JtYXQodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgdHlwZUlzTnVtZXJpYyA9IHNjaGVtYVR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYVR5cGUgPT09ICdpbnRlZ2VyJ1xuXG4gICAgaWYgKHR5cGVJc051bWVyaWMgJiYgaXNTZXQoc2NoZW1hRW51bSkgJiYgc2NoZW1hRm9ybWF0ID09PSAncmFkaW8nKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlckVudW1SYWRpbyh0aGlzKVxuICAgIH0gZWxzZSBpZiAodHlwZUlzTnVtZXJpYyAmJiBpc1NldChzY2hlbWFFbnVtKSkge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JOdW1iZXJFbnVtU2VsZWN0KHRoaXMpXG4gICAgfSBlbHNlIGlmICh0eXBlSXNOdW1lcmljKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvck51bWJlcih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU51bWJlclxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgeyBkaWZmZXJlbnQsIGlzU2V0LCBub3RTZXQsIGlzT2JqZWN0LCBoYXNPd24sIGNsb25lIH0gZnJvbSAnLi4vaGVscGVycy91dGlscydcbmltcG9ydCBFZGl0b3JPYmplY3RHcmlkIGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0LWdyaWQnXG5pbXBvcnQgRWRpdG9yT2JqZWN0IGZyb20gJy4uL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IEVkaXRvck9iamVjdE5hdiBmcm9tICcuLi9lZGl0b3JzL29iamVjdC1uYXYnXG5pbXBvcnQge1xuICBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCxcbiAgZ2V0U2NoZW1hRm9ybWF0LCBnZXRTY2hlbWFPcHRpb24sXG4gIGdldFNjaGVtYVByb3BlcnRpZXMsXG4gIGdldFNjaGVtYVJlcXVpcmVkLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gSW5zdGFuY2VPYmplY3QgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZU9iamVjdCBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0KHRoaXMpXG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnZ3JpZCcpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yT2JqZWN0R3JpZCh0aGlzKVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gJ29iamVjdCcgJiYgc2NoZW1hRm9ybWF0ID09PSAnbmF2Jykge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3ROYXYodGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51aSA9IG5ldyBFZGl0b3JPYmplY3QodGhpcylcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlICgpIHtcbiAgICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChzY2hlbWFQcm9wZXJ0aWVzKSkge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hUHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHNjaGVtYVByb3BlcnRpZXNba2V5XVxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHNjaGVtYSwga2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hJbnN0YW5jZXMoKVxuXG4gICAgdGhpcy5vbignc2V0LXZhbHVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoSW5zdGFuY2VzKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWRcbiAgICovXG4gIGlzUmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3Qgc2NoZW1hUmVxdWlyZWQgPSBnZXRTY2hlbWFSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIHJldHVybiBpc1NldChzY2hlbWFSZXF1aXJlZCkgJiYgc2NoZW1hUmVxdWlyZWQuaW5jbHVkZXMocHJvcGVydHkpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZXBlbmRlbnQgcmVxdWlyZWRcbiAgICovXG4gIGlzRGVwZW5kZW50UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgY29uc3QgZGVwZW5kZW50UmVxdWlyZWQgPSBnZXRTY2hlbWFEZXBlbmRlbnRSZXF1aXJlZCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChpc1NldChkZXBlbmRlbnRSZXF1aXJlZCkpIHtcbiAgICAgIGxldCBtaXNzaW5nUHJvcGVydGllcyA9IFtdXG5cbiAgICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGlzU2V0KHRoaXMudmFsdWVba2V5XSkpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgICBtaXNzaW5nUHJvcGVydGllcyA9IHJlcXVpcmVkUHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc093bih0aGlzLnZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWlzc2luZ1Byb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjcmVhdGVDaGlsZCAoc2NoZW1hLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmplZGkuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyB0aGlzLmplZGkucGF0aFNlcGFyYXRvciArIGtleSxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiBjbG9uZSh2YWx1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGluc3RhbmNlKVxuICAgIHRoaXMudmFsdWVba2V5XSA9IGluc3RhbmNlLmdldFZhbHVlKClcblxuICAgIGNvbnN0IGRlYWN0aXZhdGVOb25SZXF1aXJlZCA9IGdldFNjaGVtYU9wdGlvbih0aGlzLnNjaGVtYSwgJ2RlYWN0aXZhdGVOb25SZXF1aXJlZCcpXG5cbiAgICBpZiAodGhpcy5pc05vdFJlcXVpcmVkKGtleSkgJiYgZGVhY3RpdmF0ZU5vblJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGlzTm90UmVxdWlyZWQgKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVxdWlyZWQocHJvcGVydHkpICYmICF0aGlzLmlzRGVwZW5kZW50UmVxdWlyZWQocHJvcGVydHkpXG4gIH1cblxuICBkZWxldGVDaGlsZCAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jaGlsZHJlbltpXVxuICAgICAgaWYgKGluc3RhbmNlLmdldEtleSgpID09PSBrZXkpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpXG4gICAgICAgIHRoaXMub25DaGlsZENoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGQgKGtleSkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbmQoKGluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4ga2V5ID09PSBpbnN0YW5jZS5nZXRLZXkoKS5zcGxpdCh0aGlzLmplZGkucGF0aFNlcGFyYXRvcikucG9wKClcbiAgICB9KVxuICB9XG5cbiAgb25DaGlsZENoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLmlzQWN0aXZlKSB7XG4gICAgICAgIHZhbHVlW2NoaWxkLmdldEtleSgpXSA9IGNoaWxkLmdldFZhbHVlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hJbnN0YW5jZXMgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG5cbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmdldENoaWxkKGtleSlcblxuICAgICAgLy8gSWYgYSB2YWx1ZSBoYXMgYSBhbHJlYWR5IGEgY2hpbGQgaW5zdGFuY2VcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5hY3RpdmF0ZSgpXG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gY2hpbGQuZ2V0VmFsdWUoKVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlW2NoaWxkLmdldEtleSgpXVxuXG4gICAgICAgIC8vIHVwZGF0ZSBjaGlsZCB2YWx1ZSBpZiB0aGUgb2xkIHZhbHVlIGFuZCB0aGUgbmV3IHZhbHVlIGFyZSBkaWZmZXJlbnRcbiAgICAgICAgaWYgKGRpZmZlcmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hpbGQuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGNoaWxkIGluc3RhbmNlIGZvciB0aGUgbmV3IHZhbHVlIGVudHJ5IGhhdmluZyB0aGUgdmFsdWUgYXMgZGVmYXVsdFxuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkKHt9LCBrZXksIHZhbHVlW2tleV0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY2hpbGRyZW5baV1cbiAgICAgIGNvbnN0IGtleSA9IGluc3RhbmNlLmdldEtleSgpXG4gICAgICBpZiAobm90U2V0KHZhbHVlW2tleV0pKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNoaWxkKGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZU9iamVjdFxuIiwiaW1wb3J0IEluc3RhbmNlIGZyb20gJy4vaW5zdGFuY2UnXG5pbXBvcnQgRWRpdG9yU3RyaW5nIGZyb20gJy4uL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1SYWRpbyBmcm9tICcuLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IEVkaXRvclN0cmluZ0VudW1TZWxlY3QgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgRWRpdG9yU3RyaW5nVGV4dGFyZWEgZnJvbSAnLi4vZWRpdG9ycy9zdHJpbmctdGV4dGFyZWEnXG5pbXBvcnQgeyBpc1NldCB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtLCBnZXRTY2hlbWFGb3JtYXQsIGdldFNjaGVtYVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgSW5zdGFuY2VTdHJpbmcgaW5zdGFuY2UuXG4gKiBAZXh0ZW5kcyBJbnN0YW5jZVxuICovXG5jbGFzcyBJbnN0YW5jZVN0cmluZyBleHRlbmRzIEluc3RhbmNlIHtcbiAgc2V0VUkgKCkge1xuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSBnZXRTY2hlbWFUeXBlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUVudW0gPSBnZXRTY2hlbWFFbnVtKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IHNjaGVtYUZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdCh0aGlzLnNjaGVtYSlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBpc1NldChzY2hlbWFFbnVtKSAmJiBzY2hlbWFGb3JtYXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nRW51bVJhZGlvKHRoaXMpXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSAnc3RyaW5nJyAmJiBzY2hlbWFGb3JtYXQgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRoaXMudWkgPSBuZXcgRWRpdG9yU3RyaW5nVGV4dGFyZWEodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnICYmIGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZ0VudW1TZWxlY3QodGhpcylcbiAgICB9IGVsc2UgaWYgKHNjaGVtYVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnVpID0gbmV3IEVkaXRvclN0cmluZyh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YW5jZVN0cmluZ1xuIiwiaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRpb24vdmFsaWRhdG9yJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXInXG5pbXBvcnQgSW5zdGFuY2VNdWx0aXBsZSBmcm9tICcuL2luc3RhbmNlcy9tdWx0aXBsZSdcbmltcG9ydCBJbnN0YW5jZUJvb2xlYW4gZnJvbSAnLi9pbnN0YW5jZXMvYm9vbGVhbidcbmltcG9ydCBJbnN0YW5jZU9iamVjdCBmcm9tICcuL2luc3RhbmNlcy9vYmplY3QnXG5pbXBvcnQgSW5zdGFuY2VBcnJheSBmcm9tICcuL2luc3RhbmNlcy9hcnJheSdcbmltcG9ydCBJbnN0YW5jZVN0cmluZyBmcm9tICcuL2luc3RhbmNlcy9zdHJpbmcnXG5pbXBvcnQgSW5zdGFuY2VOdW1iZXIgZnJvbSAnLi9pbnN0YW5jZXMvbnVtYmVyJ1xuaW1wb3J0IEluc3RhbmNlTnVsbCBmcm9tICcuL2luc3RhbmNlcy9udWxsJ1xuaW1wb3J0IFJlZlBhcnNlciBmcm9tICcuL3JlZi1wYXJzZXInXG5pbXBvcnQgeyBpc0FycmF5LCBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQW55T2YsXG4gIGdldFNjaGVtYU9uZU9mLFxuICBnZXRTY2hlbWFUeXBlXG59IGZyb20gJy4vaGVscGVycy9zY2hlbWEnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIEplZGkgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIEplZGkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIEplZGkgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R8Ym9vbGVhbn0gb3B0aW9ucy5zY2hlbWEgLSBBIEpTT04gc2NoZW1hXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5pc0VkaXRvciAtIEdlbmVyYXRlcyBVSSBjb250cm9scyB0byBlZGl0IHRoZSBKU09OIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb250YWluZXIgLSBXaGVyZSB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aGVtZSAtIEhvdyB0aGUgVUkgY29udHJvbHMgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGlzRWRpdG9yOiBmYWxzZSxcbiAgICAgIGVkaXRhYmxlUHJvcGVydGllczogZmFsc2UsXG4gICAgICBzY2hlbWE6IHt9LFxuICAgICAgcmVmUGFyc2VyOiB0cnVlLFxuICAgICAgc2hvd0Vycm9yczogJ2NoYW5nZSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogUm9vdHMgc3ltYm9sIHVzZWQgaW4gcGF0aHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5yb290TmFtZSA9ICcjJ1xuXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9yIHN5bWJvbCB1c2VkIGluIHBhdGhzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGF0aFNlcGFyYXRvciA9ICcvJ1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGluc3RhbmNlc1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmluc3RhbmNlcyA9IHt9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcm9vdCBlZGl0b3JcbiAgICAgKiBAdHlwZSB7SW5zdGFuY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnJvb3QgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVGhlbWUgaW5zdGFuY2UgdXNlZCB0byBnZW5lcmF0ZSBlZGl0b3JzIHVzZXIgaW50ZXJmYWNlc1xuICAgICAqIEB0eXBlIHtUaGVtZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudGhlbWUgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgVmFsaWRhdG9yIGluc3RhbmNlIHVzZWQgdG8gdmFsaWRhdGUgaW5zdGFuY2UgdmFsdWVzXG4gICAgICogQHR5cGUge1ZhbGlkYXRvcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9yID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQSBqc29uIHNjaGVtYSB1c2VkXG4gICAgICogQHR5cGUgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnNjaGVtYSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEEgUmVmUGFyc2VyIGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlZlBhcnNlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucmVmUGFyc2VyID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICB0aGlzLnJlZlBhcnNlciA9IG5ldyBSZWZQYXJzZXIoe1xuICAgICAgICBYTUxIdHRwUmVxdWVzdDogdGhpcy5vcHRpb25zLlhNTEh0dHBSZXF1ZXN0XG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZGVyZWZlcmVuY2UodGhpcy5vcHRpb25zLnNjaGVtYSlcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMub3B0aW9ucy5zY2hlbWFcblxuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5vcHRpb25zLnNjaGVtYVxuICAgIH0pXG5cbiAgICBpZiAoaXNTZXQodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUpKSB7XG4gICAgICB0aGlzLnJvb3Quc2V0VmFsdWUodGhpcy5vcHRpb25zLnN0YXJ0VmFsdWUsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyXG4gICAgICB0aGlzLmFwcGVuZEhpZGRlbklucHV0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC51aS5jb250cm9sLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktcmVhZHknKVxuICAgIH1cblxuICAgIHRoaXMucm9vdC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGhpZGRlbiBpbnB1dCB0byB0aGUgcm9vdCBjb250YWluZXIgd2hvJ3MgdmFsdWUgd2lsbCBiZSB0aGUgdmFsdWVcbiAgICogb2YgdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhcHBlbmRIaWRkZW5JbnB1dCAoKSB7XG4gICAgY29uc3QgaGlkZGVuQ29udHJvbCA9IHRoaXMucm9vdC51aS50aGVtZS5nZXRJbnB1dENvbnRyb2woe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBpZDogJ2plZGktaGlkZGVuLWlucHV0J1xuICAgIH0pXG4gICAgdGhpcy5oaWRkZW5JbnB1dCA9IGhpZGRlbkNvbnRyb2wuaW5wdXRcblxuICAgIHRoaXMuaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKVxuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5JbnB1dClcbiAgICB0aGlzLmhpZGRlbklucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRkZW5JbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIHRvIHRoZSBpbnN0YW5jZXMgbGlzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXIgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UucGF0aF0gPSBpbnN0YW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjaGlsZCBpbnN0YW5jZSBwb2ludGVyIGZyb20gdGhlIGluc3RhbmNlcyBsaXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bnJlZ2lzdGVyIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5wYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4ganNvbiBpbnN0YW5jZSBhbmQgZGVyZWZlcmVuY2Ugc2NoZW1hIG9uIHRoZSBmbHkgaWYgbmVlZGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlSW5zdGFuY2UgKGNvbmZpZykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVmUGFyc2VyKSB7XG4gICAgICBjb25maWcuc2NoZW1hID0gdGhpcy5yZWZQYXJzZXIuZXhwYW5kKGNvbmZpZy5zY2hlbWEpXG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZW1hVHlwZSA9IGdldFNjaGVtYVR5cGUoY29uZmlnLnNjaGVtYSlcbiAgICBjb25zdCBzY2hlbWFPbmVPZiA9IGdldFNjaGVtYU9uZU9mKGNvbmZpZy5zY2hlbWEpXG4gICAgY29uc3Qgc2NoZW1hQW55T2YgPSBnZXRTY2hlbWFBbnlPZihjb25maWcuc2NoZW1hKVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYUFueU9mKSB8fCBpc1NldChzY2hlbWFPbmVPZikgfHwgc2NoZW1hVHlwZSA9PT0gJ2FueScgfHwgaXNBcnJheShzY2hlbWFUeXBlKSB8fCBub3RTZXQoc2NoZW1hVHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VNdWx0aXBsZShjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlT2JqZWN0KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIG5ldyBJbnN0YW5jZUFycmF5KGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VTdHJpbmcoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWFUeXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VOdW1iZXIoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFUeXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBuZXcgSW5zdGFuY2VCb29sZWFuKGNvbmZpZylcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbmV3IEluc3RhbmNlTnVsbChjb25maWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSByb290IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgaW5zdGFuY2VcbiAgICovXG4gIHNldFZhbHVlICgpIHtcbiAgICB0aGlzLnJvb3Quc2V0VmFsdWUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBpbnN0YW5jZSBieSBwYXRoXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRJbnN0YW5jZSAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1twYXRoXVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSByb290IGluc3RhbmNlIGFuZCBpdCdzIGNoaWxkcmVuIHVzZXIgaW50ZXJmYWNlc1xuICAgKi9cbiAgZGlzYWJsZSAoKSB7XG4gICAgdGhpcy5yb290LnVpLmRpc2FibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW4gdXNlciBpbnRlcmZhY2VzXG4gICAqL1xuICBlbmFibGUgKCkge1xuICAgIHRoaXMucm9vdC51aS5lbmFibGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgZ2V0RXJyb3JzICgpIHtcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuaW5zdGFuY2VzW2tleV1cbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvci5nZXRFcnJvcnMoKV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIHJvb3QgaW5zdGFuY2UgYW5kIGl0J3MgY2hpbGRyZW5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucm9vdC5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNFZGl0b3IpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iLCIvKiBnbG9iYWwgWE1MSHR0cFJlcXVlc3QgKi9cblxuaW1wb3J0IHtcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU2V0LFxuICBub3RTZXRcbn0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHtcbiAgZ2V0U2NoZW1hQWxsT2YsXG4gIGdldFNjaGVtYUFueU9mLFxuICBnZXRTY2hlbWFPbmVPZixcbiAgZ2V0U2NoZW1hUHJlZml4SXRlbXNcbn0gZnJvbSAnLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUmVmUGFyc2VyIGluc3RhbmNlLlxuICovXG5jbGFzcyBSZWZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIGlmIChub3RTZXQob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0aW9ucyA9IG9wdGlvbnMuaXRlcmF0aW9ucyB8fCAxXG4gICAgdGhpcy5YTUxIdHRwUmVxdWVzdCA9IG9wdGlvbnMuWE1MSHR0cFJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3RcbiAgICB0aGlzLnJlZkRlZmluaXRpb25zID0ge31cbiAgfVxuXG4gIGRlcmVmZXJlbmNlIChzY2hlbWEpIHtcbiAgICB0aGlzLnRyYXZlcnNlKHtcbiAgICAgIHZhbHVlOiBzY2hlbWEsXG4gICAgICBjYWxsYmFjazogKGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3Mua2V5ID09PSAnJHJlZicpIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW2FyZ3MudmFsdWVdID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGRlZmluZSBleHRlcm5hbCByZWZzXG4gICAgT2JqZWN0LmtleXModGhpcy5yZWZEZWZpbml0aW9ucykuZm9yRWFjaCgocmVmKSA9PiB7XG4gICAgICBpZiAocmVmLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCByZWYuc3RhcnRzV2l0aCgnaHR0cHMnKSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHJlZiwgZmFsc2UpIC8vIGBmYWxzZWAgbWFrZXMgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpXG5cbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLnJlZkRlZmluaXRpb25zW3JlZl0gPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbiBub3QgbG9hZCcsIHJlZilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkZWZpbmUgaW50ZXJuYWwgcmVmc1xuICAgIHRoaXMudHJhdmVyc2Uoe1xuICAgICAgdmFsdWU6IHNjaGVtYSxcbiAgICAgIGNhbGxiYWNrOiAoYXJncykgPT4ge1xuICAgICAgICBpZiAoaXNTZXQodGhpcy5yZWZEZWZpbml0aW9uc1thcmdzLnBhdGhdKSkge1xuICAgICAgICAgIHRoaXMucmVmRGVmaW5pdGlvbnNbYXJncy5wYXRoXSA9IGFyZ3MudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlZkRlZmluaXRpb25zLCBudWxsLCAyKSlcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzY2hlbWEsIG51bGwsIDIpKVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgZXhwYW5kIChzY2hlbWEpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRVhQQU5EJywgSlNPTi5zdHJpbmdpZnkoc2NoZW1hLCBudWxsLCAyKSlcbiAgICBpZiAoaXNTZXQoc2NoZW1hWyckcmVmJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZEZWZpbml0aW9uc1tzY2hlbWFbJyRyZWYnXV1cbiAgICB9XG5cbiAgICBjb25zdCBhbnlPZiA9IGdldFNjaGVtYUFueU9mKHNjaGVtYSlcbiAgICBjb25zdCBvbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcbiAgICBjb25zdCBhbGxPZiA9IGdldFNjaGVtYUFsbE9mKHNjaGVtYSlcbiAgICBjb25zdCBwcmVmaXhJdGVtcyA9IGdldFNjaGVtYVByZWZpeEl0ZW1zKHNjaGVtYSlcblxuICAgIGlmIChpc1NldChhbnlPZikpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGFueU9mKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLmFueU9mW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG9uZU9mKSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMob25lT2YpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBzY2hlbWEub25lT2Zba2V5XSA9IHRoaXMuZXhwYW5kKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoYWxsT2YpKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhhbGxPZikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHNjaGVtYS5hbGxPZltrZXldID0gdGhpcy5leHBhbmQodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByZWZpeEl0ZW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgc2NoZW1hLnByZWZpeEl0ZW1zW2tleV0gPSB0aGlzLmV4cGFuZCh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgdHJhdmVyc2UgKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudmFsdWVcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MuY2FsbGJhY2tcbiAgICBjb25zdCBwYXRoID0gaXNTZXQoYXJncy5wYXRoKSA/IGFyZ3MucGF0aCArICcvJyArIGFyZ3Mua2V5IDogJyMnXG4gICAgYXJncy5wYXRoID0gcGF0aFxuXG4gICAgaWYgKGlzU2V0KGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soYXJncylcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGFyZ3MudmFsdWUgPSB2YWx1ZVtrZXldXG4gICAgICAgIGFyZ3Mua2V5ID0ga2V5XG4gICAgICAgIGFyZ3MucGF0aCA9IHBhdGhcbiAgICAgICAgYXJncy5wcmV2VmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLnRyYXZlcnNlKGFyZ3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBhcmdzLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgYXJncy5rZXkgPSBrZXlcbiAgICAgICAgYXJncy5wYXRoID0gcGF0aFxuICAgICAgICBhcmdzLnByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMudHJhdmVyc2UoYXJncylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZlBhcnNlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwMyBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwMyBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJylcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3BhbmVsLWRlZmF1bHQnKVxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBnZXRDYXJkSGVhZGVyIChjb25maWcpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFuZWwtaGVhZGluZycpXG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkQm9keSgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwYW5lbC1ib2R5JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBY3Rpb25zU2xvdCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QXJyYXlBY3Rpb25zU2xvdCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3B1bGwtcmlnaHQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdwdWxsLXJpZ2h0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0UHJvcGVydGllc1Nsb3QgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRQcm9wZXJ0aWVzU2xvdChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdG5Hcm91cCAoKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ0bkdyb3VwKClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ1dHRvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLXhzJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWZhdWx0JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ3JhZGlvJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCwgbGFiZWwgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJylcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRSb3cgKCkge1xuICAgIGNvbnN0IHJvdyA9IHN1cGVyLmdldFJvdygpXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpXG4gICAgcmV0dXJuIHJvd1xuICB9XG5cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gc3VwZXIuZ2V0Um93KClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLXhzLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBzdXBlci5nZXRUYWJMaXN0KGNvbmZpZylcbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpXG5cbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXBpbGxzJylcbiAgICB9XG5cbiAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1zdGFja2VkJylcblxuICAgIGlmIChjb25maWcuc3RhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXN0YWNrZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0YWJMaXN0XG4gIH1cblxuICBnZXRUYWIgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYiA9IHN1cGVyLmdldFRhYihjb25maWcpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwM1xuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNCBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNCBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1yaWdodCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFByb3BlcnRpZXNUb2dnbGUgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCAnIycgKyBjb25maWcuaWQpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdG5Hcm91cCgpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc3VwZXIuZ2V0RGVzY3JpcHRpb24oY29uZmlnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZ2V0VGV4dGFyZWFDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0VGV4dGFyZWFDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0SW5wdXRDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0SW5wdXRDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0UmFkaW9zQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFJhZGlvc0NvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmaWVsZHNldCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKVxuXG4gICAgcmFkaW9Db250cm9scy5mb3JFYWNoKChyYWRpb0NvbnRyb2wsIGluZGV4KSA9PiB7XG4gICAgICByYWRpb0NvbnRyb2wuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgICByYWRpb3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWxhYmVsJylcblxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocmFkaW9Db250cm9sc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQocmFkaW9zW2luZGV4XSlcbiAgICAgIHJhZGlvQ29udHJvbC5hcHBlbmRDaGlsZChsYWJlbHNbaW5kZXhdKVxuICAgICAgbGFiZWxzW2luZGV4XS5hcHBlbmRDaGlsZChsYWJlbFRleHRzW2luZGV4XSlcbiAgICB9KVxuXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0Q2hlY2tib3hDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250cm9sID0gc3VwZXIuZ2V0Q2hlY2tib3hDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybUdyb3VwLCBpbnB1dCwgbGFiZWwsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcyB9ID0gY29udHJvbFxuICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjaycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0U2VsZWN0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICAgIGNvbnN0IHsgY29udGFpbmVyLCBpbnB1dCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250cm9sJylcbiAgICByZXR1cm4gY29udHJvbFxuICB9XG5cbiAgZ2V0QWxlcnQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBbGVydChjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGVydC1kYW5nZXInKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRJbnZhbGlkRmVlZGJhY2sgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRJbnZhbGlkRmVlZGJhY2soY29uZmlnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndGV4dC1kYW5nZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZm9ybS10ZXh0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb2x1bW5DbGFzcyAoc2l6ZSwgY29scykge1xuICAgIHJldHVybiAnY29sLScgKyBzaXplICsgJy0nICsgY29sc1xuICB9XG5cbiAgZ2V0Um93ICgpIHtcbiAgICBjb25zdCByb3cgPSBzdXBlci5nZXRSb3coKVxuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIGdldENvbCAoeHMsIG1kLCBvZmZzZXRNZCkge1xuICAgIGNvbnN0IGNvbCA9IHN1cGVyLmdldFJvdyh4cywgbWQsIG9mZnNldE1kKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtbWQtJyArIG1kKVxuXG4gICAgaWYgKG9mZnNldE1kKSB7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnb2Zmc2V0LW1kLScgKyBvZmZzZXRNZClcbiAgICB9XG5cbiAgICByZXR1cm4gY29sXG4gIH1cblxuICBnZXRUYWJMaXN0IChjb25maWcpIHtcbiAgICBjb25zdCB0YWJMaXN0ID0gc3VwZXIuZ2V0VGFiTGlzdCgpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAndGFicycpIHtcbiAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1waWxscycpXG4gICAgfVxuXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpXG5cbiAgICBpZiAoY29uZmlnLnN0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sdW1uJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCB0YWIgPSBzdXBlci5nZXRUYWIoY29uZmlnKVxuICAgIHRhYi5saXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcblxuICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICB0YWIubGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ3RhYicpXG5cbiAgICBpZiAoY29uZmlnLmFjdGl2ZSkge1xuICAgICAgdGFiLmxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGFiXG4gIH1cblxuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIHN1cGVyLnNldFRhYlBhbmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGFjdGl2ZSwgaWQpXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWItcGFuZScpXG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICB9XG5cbiAgaGlkZUVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyLW9ubHknKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyLW9ubHknKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQm9vdHN0cmFwNFxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFRoZW1lQm9vdHN0cmFwNSBpbnN0YW5jZS5cbiAqIEBleHRlbmRzIFRoZW1lXG4gKi9cbmNsYXNzIFRoZW1lQm9vdHN0cmFwNSBleHRlbmRzIFRoZW1lIHtcbiAgaW5pdCAoKSB7XG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSBmYWxzZVxuICB9XG5cbiAgZ2V0TGVnZW5kIChjb25maWcpIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoY29uZmlnKVxuICAgIHRoaXMuaGlkZUVsZW1lbnQobGVnZW5kKVxuICAgIHJldHVybiBsZWdlbmRcbiAgfVxuXG4gIGdldENhcmQgKCkge1xuICAgIGNvbnN0IGNhcmQgPSBzdXBlci5nZXRDYXJkKClcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGdldENhcmRIZWFkZXIgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRDYXJkSGVhZGVyKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgncHktMScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldENhcmRCb2R5ICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0Q2FyZEJvZHkoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3BiLTAnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldFByb3BlcnRpZXNTbG90KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBzdXBlci5nZXRBcnJheUFjdGlvbnNTbG90KClcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdmbG9hdC1lbmQnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICBnZXRDb250cm9sU2xvdCAoKSB7XG4gICAgY29uc3QgY29udHJvbFNsb3QgPSBzdXBlci5nZXRDb250cm9sU2xvdCgpXG4gICAgY29udHJvbFNsb3QuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgcmV0dXJuIGNvbnRyb2xTbG90XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzVG9nZ2xlIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIGh0bWwuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdjb2xsYXBzZScpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JywgJyMnICsgY29uZmlnLmlkKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1wcm9wZXJ0aWVzLXRvZ2dsZScpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEJ0bkdyb3VwICgpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnRuR3JvdXAoKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgZ2V0QnV0dG9uIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gc3VwZXIuZ2V0QnV0dG9uKGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHN1cGVyLmdldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LW11dGVkJylcbiAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgfVxuXG4gIGdldFRleHRhcmVhQ29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFRleHRhcmVhQ29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldElucHV0Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldElucHV0Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGlucHV0LCBsYWJlbCB9ID0gY29udHJvbFxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRSYWRpb3NDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgZmllbGRzZXQsIHJhZGlvcywgbGFiZWxzLCBsYWJlbFRleHRzLCByYWRpb0NvbnRyb2xzLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYi0zJylcblxuICAgIHJhZGlvQ29udHJvbHMuZm9yRWFjaCgocmFkaW9Db250cm9sLCBpbmRleCkgPT4ge1xuICAgICAgcmFkaW9Db250cm9sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgICAgcmFkaW9zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1sYWJlbCcpXG5cbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldENoZWNrYm94Q29udHJvbChjb25maWcpXG4gICAgY29uc3QgeyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBkZXNjcmlwdGlvbiwgbWVzc2FnZXMgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2snKVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgcmV0dXJuIGNvbnRyb2xcbiAgfVxuXG4gIGdldFNlbGVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBzdXBlci5nZXRTZWxlY3RDb250cm9sKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQgfSA9IGNvbnRyb2xcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMycpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZWxlY3QnKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRTd2l0Y2hlciAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHN1cGVyLmdldFN3aXRjaGVyKGNvbmZpZylcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsIH0gPSBjb250cm9sXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21iLTMnKVxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tc2VsZWN0JylcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIHJldHVybiBjb250cm9sXG4gIH1cblxuICBnZXRBbGVydCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEFsZXJ0KGNvbmZpZylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LWRhbmdlcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldEludmFsaWRGZWVkYmFjayAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IHN1cGVyLmdldEludmFsaWRGZWVkYmFjayhjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gc3VwZXIuZ2V0Um93KClcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93JylcbiAgICByZXR1cm4gcm93XG4gIH1cblxuICBnZXRDb2wgKHhzLCBtZCwgb2Zmc2V0TWQpIHtcbiAgICBjb25zdCBjb2wgPSBzdXBlci5nZXRSb3coeHMsIG1kLCBvZmZzZXRNZClcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLScgKyB4cylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLW1kLScgKyBtZClcblxuICAgIGlmIChvZmZzZXRNZCkge1xuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ29mZnNldC1tZC0nICsgb2Zmc2V0TWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbFxuICB9XG5cbiAgZ2V0VGFiTGlzdCAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiTGlzdCA9IHN1cGVyLmdldFRhYkxpc3QoY29uZmlnKVxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2JylcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICB0YWJMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtcGlsbHMnKVxuICAgIH1cblxuICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2x1bW4nKVxuXG4gICAgaWYgKGNvbmZpZy5zdGFja2VkID09PSBmYWxzZSkge1xuICAgICAgdGFiTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYkxpc3RcbiAgfVxuXG4gIGdldFRhYiAoY29uZmlnKSB7XG4gICAgY29uc3QgdGFiID0gc3VwZXIuZ2V0VGFiKGNvbmZpZylcbiAgICB0YWIubGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXG5cbiAgICB0YWIubGluay5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgdGFiLmxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICd0YWInKVxuXG4gICAgaWYgKGNvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHRhYi5saW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYlxuICB9XG5cbiAgc2V0VGFiUGFuZUF0dHJpYnV0ZXMgKGVsZW1lbnQsIGFjdGl2ZSwgaWQpIHtcbiAgICBzdXBlci5zZXRUYWJQYW5lQXR0cmlidXRlcyhlbGVtZW50LCBhY3RpdmUsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFiLXBhbmUnKVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfVxuXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICB9XG5cbiAgc2hvd0VsZW1lbnQgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVCb290c3RyYXA1XG4iLCIvKipcbiAqIExpc3RzIG9mIGh0bWwgY2xhc3NlcyB1c2VkIGZvciBpY29ucy5cbiAqIEBtb2R1bGUgaWNvbnNcbiAqL1xuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZ2x5cGhpY29ucyBpY29uc1xuICogQHR5cGUge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdseXBoaWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QnLFxuICBkZWxldGU6ICdnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoJyxcbiAgYWRkOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgYm9vdHN0cmFwLWljb25zIGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgYm9vdHN0cmFwSWNvbnMgPSB7XG4gIHByb3BlcnRpZXM6ICdiaSBiaS1jYXJkLWxpc3QnLFxuICBkZWxldGU6ICdiaSBiaS10cmFzaDInLFxuICBhZGQ6ICdiaSBiaS1wbHVzJyxcbiAgbW92ZVVwOiAnYmkgYmktYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2JpIGJpLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTMgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTMgPSB7XG4gIHByb3BlcnRpZXM6ICdpY29uLWxpc3QnLFxuICBkZWxldGU6ICdpY29uLXRyYXNoJyxcbiAgYWRkOiAnaWNvbi1wbHVzJyxcbiAgbW92ZVVwOiAnaWNvbi1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnaWNvbi1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU0IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU0ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmEgZmEtbGlzdCcsXG4gIGRlbGV0ZTogJ2ZhIGZhLXRyYXNoJyxcbiAgYWRkOiAnZmEgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhIGZhLWFycm93LXVwJyxcbiAgbW92ZURvd246ICdmYSBmYS1hcnJvdy1kb3duJ1xufVxuXG4vKipcbiAqIEhUTUwgY2xhc3NlcyBmb3IgZm9udGF3ZXNvbWU1IGljb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgZm9udEF3ZXNvbWU1ID0ge1xuICBwcm9wZXJ0aWVzOiAnZmFzIGZhLWxpc3QnLFxuICBkZWxldGU6ICdmYXMgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYXMgZmEtcGx1cycsXG4gIG1vdmVVcDogJ2ZhcyBmYS1hcnJvdy11cCcsXG4gIG1vdmVEb3duOiAnZmFzIGZhLWFycm93LWRvd24nXG59XG5cbi8qKlxuICogSFRNTCBjbGFzc2VzIGZvciBmb250YXdlc29tZTYgaWNvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBmb250QXdlc29tZTYgPSB7XG4gIHByb3BlcnRpZXM6ICdmYS1zb2xpZCBmYS1saXN0JyxcbiAgZGVsZXRlOiAnZmEtc29saWQgZmEtdHJhc2gnLFxuICBhZGQ6ICdmYS1zb2xpZCBmYS1wbHVzJyxcbiAgbW92ZVVwOiAnZmEtc29saWQgZmEtYXJyb3ctdXAnLFxuICBtb3ZlRG93bjogJ2ZhLXNvbGlkIGZhLWFycm93LWRvd24nXG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBUaGVtZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGhlbWUge1xuICBjb25zdHJ1Y3RvciAoaWNvbnMgPSBudWxsKSB7XG4gICAgdGhpcy5pY29ucyA9IGljb25zXG4gICAgdGhpcy51c2VUb2dnbGVFdmVudHMgPSB0cnVlXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzb21lIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXQgKG5hbWUpIHtcbiAgICB0aGlzLnVzZVRvZ2dsZUV2ZW50cyA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaWNvbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJY29uIChuYW1lKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNvbnN0IGljb25DbGFzc2VzID0gdGhpcy5pY29uc1tuYW1lXS5zcGxpdCgnICcpXG5cbiAgICBpZiAoaWNvbkNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWNvbkNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpY29uXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGRpdiB1c2VkIHRvIHdyYXAgdGhlIGVkaXRvciBVSSBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0RWRpdG9yQ29udGFpbmVyICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZWRpdG9yLWNvbnRhaW5lcicpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBmaWVsZHNldCBlbGVtZW50LlxuICAgKiBVc2VkIHRvIHdyYXAgY2hpbGRyZW4gc2xvdCBhbmQgcHJvdmlkZSBtb3JlIHNlbWFudGljIGh0bWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEZpZWxkc2V0ICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBmb3IgY29tcGxleCBlZGl0b3JzIGxpa2UgYXJyYXlzLCBvYmplY3RzIGFuZCBtdWx0aXBsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICAvKipcbiAgICogTGVnZW5kIGVsZW1lbnQgdXNlZCBpbiBmaWVsZHNldHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExlZ2VuZCAoY29uZmlnKSB7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcbiAgICB0aGlzLmhpZGVFbGVtZW50KGxlZ2VuZClcbiAgICByZXR1cm4gbGVnZW5kXG4gIH1cblxuICAvKipcbiAgICogSGVhZGVyIGZvciBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEhlYWRlciAoY29uZmlnID0ge30pIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgICBpZiAoY29uZmlnLnRleHRDb250ZW50KSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvbmZpZy50ZXh0Q29udGVudFxuICAgIH1cblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KHRpdGxlKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGJvZHkgZm9yIHRoZSBjYXJkc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2FyZEJvZHkgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFjdGlvbnNTbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktYWN0aW9ucy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBhcnJheSBzcGVjaWZpYyBhY3Rpb25zIGJ1dHRvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFycmF5QWN0aW9uc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1hcnJheS1hY3Rpb25zLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgY2hpbGQgZWRpdG9yc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q2hpbGRyZW5TbG90ICgpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktY2hpbGQtZWRpdG9ycy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZXNzYWdlc1Nsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1tZXNzYWdlcy1zbG90JylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZm9yIGVkaXRvciBjb250cm9sc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29udHJvbFNsb3QgKCkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnamVkaS1jb250cm9sLXNsb3QnKVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbmVyIGZvciBwcm9wZXJ0aWVzIGVkaXRpbmcgZWxlbWVudHMgbGlrZSBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzU2xvdCAoY29uZmlnKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtc2xvdCcpXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgaWYgKHRoaXMudXNlVG9nZ2xlRXZlbnRzKSB7XG4gICAgICBodG1sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIE9iamVjdEVkaXRvciBwcm9wZXJ0aWVzIHdyYXBwZXIgdmlzaWJpbGl0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0UHJvcGVydGllc1RvZ2dsZSAoY29uZmlnKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gdGhpcy5nZXRCdXR0b24oY29uZmlnKVxuICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtdG9nZ2xlJylcblxuICAgIGlmICh0aGlzLnVzZVRvZ2dsZUV2ZW50cykge1xuICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudChjb25maWcucHJvcGVydGllc0NvbnRhaW5lcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGVFbGVtZW50KGNvbmZpZy5wcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0b2dnbGVcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciBwcm9wZXJ0eSBhY3RpdmF0b3JzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycyAoKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLXByb3BlcnRpZXMtY29udGFpbmVyJylcbiAgICByZXR1cm4gaHRtbFxuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgYnV0dG9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QnRuR3JvdXAgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgLyoqXG4gICAqIEEgYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRCdXR0b24gKGNvbmZpZykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuXG4gICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgYnV0dG9uLnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSBjb25maWcudGV4dENvbnRlbnRcblxuICAgIGlmICh0aGlzLmljb25zICYmIGNvbmZpZy5pY29uKSB7XG4gICAgICBjb25zdCBpY29uID0gdGhpcy5nZXRJY29uKGNvbmZpZy5pY29uKVxuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY29uZmlnLnRleHRDb250ZW50KVxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXG4gICAgICB0aGlzLmhpZGVFbGVtZW50KHRleHQpXG4gICAgfVxuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpXG5cbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJhZGRcIiBpdGVtIGJ1dHRvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QXJyYXlCdG5BZGQgKGNvbmZpZykge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdldEJ1dHRvbihjb25maWcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LWFkZCcpXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcImRlbGV0ZVwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREZWxldGVJdGVtQnRuICgpIHtcbiAgICBjb25zdCBkZWxldGVJdGVtQnRuID0gdGhpcy5nZXRCdXR0b24oe1xuICAgICAgdGV4dENvbnRlbnQ6ICdEZWxldGUgaXRlbScsXG4gICAgICBpY29uOiAnZGVsZXRlJ1xuICAgIH0pXG5cbiAgICBkZWxldGVJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktZGVsZXRlJylcblxuICAgIHJldHVybiBkZWxldGVJdGVtQnRuXG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgXCJtb3ZlIHVwXCIgaXRlbSBidXR0b25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE1vdmVVcEl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IG1vdmVVcEl0ZW1CdG4gPSB0aGlzLmdldEJ1dHRvbih7XG4gICAgICB0ZXh0Q29udGVudDogJ01vdmUgdXAnLFxuICAgICAgaWNvbjogJ21vdmVVcCdcbiAgICB9KVxuXG4gICAgbW92ZVVwSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdqZWRpLWFycmF5LW1vdmUtdXAnKVxuXG4gICAgcmV0dXJuIG1vdmVVcEl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheSBcIm1vdmUgZG93blwiIGl0ZW0gYnV0dG9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNb3ZlRG93bkl0ZW1CdG4gKCkge1xuICAgIGNvbnN0IG1vdmVEb3duSXRlbUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnTW92ZSBkb3duJyxcbiAgICAgIGljb246ICdtb3ZlRG93bidcbiAgICB9KVxuXG4gICAgbW92ZURvd25JdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2plZGktYXJyYXktbW92ZS1kb3duJylcblxuICAgIHJldHVybiBtb3ZlRG93bkl0ZW1CdG5cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZvciB0aGUgZWRpdG9yIGRlc2NyaXB0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXREZXNjcmlwdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLnRleHRDb250ZW50XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gIH1cblxuICAvKipcbiAgICogT2JqZWN0IGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycy5cbiAgICogRWFjaCBlZGl0b3IgaXMgbWFwcGVkIHRvIGFuIG9iamVjdCBpbnN0YW5jZSBwcm9wZXJ0eS5cbiAgICogUHJvcGVydGllcyBjYW4gYmUgYWRkZWQsIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQgZGVwZW5kaW5nIG9uIGNvbmZpZ3VyYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE9iamVjdENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzQ29udGFpbmVyID0gdGhpcy5nZXRQcm9wZXJ0aWVzU2xvdCh7XG4gICAgICBpZDogJ3Byb3BlcnRpZXMtc2xvdC0nICsgY29uZmlnLmlkXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNUb2dnbGUgPSB0aGlzLmdldFByb3BlcnRpZXNUb2dnbGUoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdQcm9wZXJ0aWVzJyxcbiAgICAgIGlkOiAncHJvcGVydGllcy1zbG90LScgKyBjb25maWcuaWQsXG4gICAgICBpY29uOiAncHJvcGVydGllcycsXG4gICAgICBwcm9wZXJ0aWVzQ29udGFpbmVyOiBwcm9wZXJ0aWVzQ29udGFpbmVyXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3BlcnRpZXNBY3RpdmF0b3JzID0gdGhpcy5nZXRQcm9wZXJ0aWVzQWN0aXZhdG9ycygpXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUNvbnRyb2wgPSB0aGlzLmdldElucHV0Q29udHJvbCh7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBpZDogJ2plZGktYWRkLXByb3BlcnR5LWlucHV0LScgKyBjb25maWcuaWQsXG4gICAgICBsYWJlbDogJ1Byb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9wZXJ0eUJ0biA9IHRoaXMuZ2V0QnV0dG9uKHtcbiAgICAgIHRleHRDb250ZW50OiAnQWRkIHByb3BlcnR5J1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgYWRkUHJvcGVydHlCdG4uY2xhc3NMaXN0LmFkZCgnamVkaS1vYmplY3QtYWRkJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzQ29udGFpbmVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaWVsZHNldClcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2hpbGRyZW5TbG90KVxuXG4gICAgaWYgKGNvbmZpZy5lZGl0YWJsZVByb3BlcnRpZXMpIHtcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJvcGVydGllc1RvZ2dsZSlcbiAgICAgIHByb3BlcnRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydGllc0FjdGl2YXRvcnMpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hZGRQcm9wZXJ0eSkge1xuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUNvbnRyb2wuY29udGFpbmVyKVxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9wZXJ0eUJ0bilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyLFxuICAgICAgY2FyZCxcbiAgICAgIGJvZHksXG4gICAgICBhY3Rpb25zLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBjaGlsZHJlblNsb3QsXG4gICAgICBwcm9wZXJ0aWVzVG9nZ2xlLFxuICAgICAgcHJvcGVydGllc0NvbnRhaW5lcixcbiAgICAgIGFkZFByb3BlcnR5Q29udHJvbCxcbiAgICAgIGFkZFByb3BlcnR5QnRuLFxuICAgICAgcHJvcGVydGllc0FjdGl2YXRvcnMsXG4gICAgICBhcnJheUFjdGlvbnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgY29udHJvbCBpcyBhIGNhcmQgY29udGFpbmluZyBtdWx0aXBsZSBlZGl0b3JzLlxuICAgKiBJdGVtcyBjYW4gYnZlIGFkZGVkLCBkZWxldGVkIG9yIG1vdmVkIHVwIG9yIGRvd24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBcnJheUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZCgpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldENhcmRIZWFkZXIoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy50aXRsZSxcbiAgICAgIHNyT25seTogY29uZmlnLnNyT25seVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRDYXJkQm9keSgpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0RGVzY3JpcHRpb24oe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pXG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG4gICAgY29uc3QgYnRuR3JvdXAgPSB0aGlzLmdldEJ0bkdyb3VwKClcblxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuZ2V0QXJyYXlCdG5BZGQoe1xuICAgICAgdGV4dENvbnRlbnQ6ICdBZGQgaXRlbScsXG4gICAgICBpY29uOiAnYWRkJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuICAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGVcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkdyb3VwKVxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZmllbGRzZXQpXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIGJ0bkdyb3VwLFxuICAgICAgYWRkQnRuLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE11bHRpcGxlIGNvbnRyb2wgaXMgYSBjYXJkIGNvbnRhaW5pbmcgbXVsdGlwbGUgZWRpdG9ycyBvcHRpb25zIHRoYXQgY2FuIGJlXG4gICAqIHNlbGVjdGVkIHdpdGggYSBzd2l0Y2hlciBjb250cm9sLiBPbmx5IG9uZSBlZGl0b3IgY2FuIGJlIGFjdGl2ZS92aXNpYmxlXG4gICAqIGF0IGEgdGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TXVsdGlwbGVDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdldENhcmQoKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRDYXJkSGVhZGVyKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcudGl0bGUsXG4gICAgICBzck9ubHk6IGNvbmZpZy5zck9ubHlcbiAgICB9KVxuXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0Q2FyZEJvZHkoKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmdldERlc2NyaXB0aW9uKHtcbiAgICAgIHRleHRDb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlblNsb3QgPSB0aGlzLmdldENoaWxkcmVuU2xvdCgpXG5cbiAgICBjb25zdCBzd2l0Y2hlciA9IHRoaXMuZ2V0U3dpdGNoZXIoe1xuICAgICAgdmFsdWVzOiBjb25maWcuc3dpdGNoZXJPcHRpb25WYWx1ZXMsXG4gICAgICB0aXRsZXM6IGNvbmZpZy5zd2l0Y2hlck9wdGlvbnNMYWJlbHMsXG4gICAgICBpZDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBsYWJlbDogY29uZmlnLmlkICsgJy1zd2l0Y2hlcicsXG4gICAgICBzck9ubHk6IHRydWUsXG4gICAgICByZWFkT25seTogY29uZmlnLnJlYWRPbmx5XG4gICAgfSlcblxuICAgIHN3aXRjaGVyLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLXN3aXRjaGVyJylcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChhcnJheUFjdGlvbnMpXG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChzd2l0Y2hlci5jb250YWluZXIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoaWxkcmVuU2xvdClcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXIsXG4gICAgICBjYXJkLFxuICAgICAgYm9keSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGNoaWxkcmVuU2xvdCxcbiAgICAgIHN3aXRjaGVyLFxuICAgICAgYXJyYXlBY3Rpb25zXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgZm9yIE51bGxFZGl0b3JcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldE51bGxDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFRleHRhcmVhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRUZXh0YXJlYUNvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBJbnB1dCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRJbnB1dENvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBjb25maWcudHlwZSlcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dClcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJhZGlvIGdyb3VwIGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJhZGlvc0NvbnRyb2wgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc1Nsb3QoKVxuICAgIGNvbnN0IGFycmF5QWN0aW9ucyA9IHRoaXMuZ2V0QXJyYXlBY3Rpb25zU2xvdCgpXG5cbiAgICBjb25zdCBmaWVsZHNldCA9IHRoaXMuZ2V0RmllbGRzZXQoKVxuXG4gICAgY29uc3QgbGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoe1xuICAgICAgdGV4dENvbnRlbnQ6IGNvbmZpZy5sYWJlbFxuICAgIH0pXG5cbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29uZmlnLmxhYmVsXG5cbiAgICBpZiAoY29uZmlnLnNyT25seSkge1xuICAgICAgdGhpcy5oaWRlRWxlbWVudChsYWJlbClcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXNTbG90KClcblxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgY29uc3QgcmFkaW9Db250cm9scyA9IFtdXG4gICAgY29uc3QgcmFkaW9zID0gW11cbiAgICBjb25zdCBsYWJlbHMgPSBbXVxuICAgIGNvbnN0IGxhYmVsVGV4dHMgPSBbXVxuXG4gICAgY29uZmlnLnZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICByYWRpb0NvbnRyb2xzLnB1c2gocmFkaW9Db250cm9sKVxuXG4gICAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgY29uZmlnLmlkICsgJy0nICsgaW5kZXgpXG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICByYWRpb3MucHVzaChyYWRpbylcblxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZCArICctJyArIGluZGV4KVxuXG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxhYmVsVGV4dHMucHVzaChsYWJlbFRleHQpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGxhYmVscy5wdXNoKGxhYmVsKVxuICAgIH0pXG5cbiAgICByYWRpb0NvbnRyb2xzLmZvckVhY2goKHJhZGlvQ29udHJvbCwgaW5kZXgpID0+IHtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHJhZGlvQ29udHJvbHNbaW5kZXhdKVxuICAgICAgcmFkaW9Db250cm9sLmFwcGVuZENoaWxkKHJhZGlvc1tpbmRleF0pXG4gICAgICByYWRpb0NvbnRyb2wuYXBwZW5kQ2hpbGQobGFiZWxzW2luZGV4XSlcbiAgICAgIGxhYmVsc1tpbmRleF0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0c1tpbmRleF0pXG4gICAgfSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkc2V0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2VzKVxuXG4gICAgcmV0dXJuIHsgY29udGFpbmVyLCBmaWVsZHNldCwgbGVnZW5kLCBsYWJlbCwgcmFkaW9zLCBsYWJlbHMsIGxhYmVsVGV4dHMsIHJhZGlvQ29udHJvbHMsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNoZWNrYm94IGNvbnRyb2xcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldENoZWNrYm94Q29udHJvbCAoY29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zU2xvdCgpXG4gICAgY29uc3QgYXJyYXlBY3Rpb25zID0gdGhpcy5nZXRBcnJheUFjdGlvbnNTbG90KClcblxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNvbmZpZy5pZClcblxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IGNvbmZpZy5sYWJlbFxuXG4gICAgaWYgKGNvbmZpZy5zck9ubHkpIHtcbiAgICAgIHRoaXMuaGlkZUVsZW1lbnQobGFiZWwpXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGNvbmZpZy5pZCArICctZGVzY3JpcHRpb24nXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkZXNjcmlwdGlvbklkKVxuXG4gICAgaWYgKGNvbmZpZy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb25maWcuZGVzY3JpcHRpb25cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGRlc2NyaXB0aW9uSWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmdldE1lc3NhZ2VzU2xvdCgpXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25zKVxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXJyYXlBY3Rpb25zKVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KVxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZXMpXG5cbiAgICByZXR1cm4geyBjb250YWluZXIsIGZvcm1Hcm91cCwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNlbGVjdCBjb250cm9sXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3RDb250cm9sIChjb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnNTbG90KClcbiAgICBjb25zdCBhcnJheUFjdGlvbnMgPSB0aGlzLmdldEFycmF5QWN0aW9uc1Nsb3QoKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBjb25maWcuaWQpXG5cbiAgICBjb25maWcudmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG5cbiAgICAgIGlmIChjb25maWcudGl0bGVzICYmIGNvbmZpZy50aXRsZXNbaW5kZXhdKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbmZpZy50aXRsZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjb25maWcuaWQpXG5cbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBjb25maWcubGFiZWxcblxuICAgIGlmIChjb25maWcuc3JPbmx5KSB7XG4gICAgICB0aGlzLmhpZGVFbGVtZW50KGxhYmVsKVxuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBjb25maWcuaWQgKyAnLWRlc2NyaXB0aW9uJ1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGVzY3JpcHRpb25JZClcblxuICAgIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBkZXNjcmlwdGlvbklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXRNZXNzYWdlc1Nsb3QoKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsYWJlbFRleHQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9ucylcbiAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGFycmF5QWN0aW9ucylcblxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgaW5wdXQsIGxhYmVsLCBsYWJlbFRleHQsIGRlc2NyaXB0aW9uLCBtZXNzYWdlcywgYWN0aW9ucywgYXJyYXlBY3Rpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIHRvIHN3aXRjaCBiZXR3ZWVuIG11bHRpcGxlIGVkaXRvcnMgb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0U3dpdGNoZXIgKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmdldFNlbGVjdENvbnRyb2woY29uZmlnKVxuICB9XG5cbiAgLyoqXG4gICAqIEFub3RoZXIgdHlwZSBvZiBlcnJvciBtZXNzYWdlIGNvbnRhaW5lciB1c2VkIGZvciBtb3JlIGNvbXBsZXggZWRpdG9ycyBsaWtlXG4gICAqIG9iamVjdCwgYXJyYXkgYW5kIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFsZXJ0IChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGh0bWwudGV4dENvbnRlbnQgPSBjb25maWcubWVzc2FnZVxuICAgIHJldHVybiBodG1sXG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZXNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0SW52YWxpZEZlZWRiYWNrIChjb25maWcpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgaHRtbC50ZXh0Q29udGVudCA9IGNvbmZpZy5tZXNzYWdlXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgZm9yIGNvbHVtbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFJvdyAoKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnamVkaS1yb3cnKVxuICAgIHJldHVybiByb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbHVtbiB0byBjb250YWluIGNvbnRlbnQgdG8gYSBzcGVjaWZpYyB3aWR0aFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0Q29sICh4cywgbWQsIG9mZnNldE1kKSB7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnamVkaS1jb2wteHMtJyArIHhzKVxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC1tZC0nICsgbWQpXG5cbiAgICBpZiAob2Zmc2V0TWQpIHtcbiAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdqZWRpLWNvbC1tZC1vZmZzZXQtJyArIG9mZnNldE1kKVxuICAgIH1cblxuICAgIHJldHVybiBjb2xcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWIgbGlzdCBpcyBhIGxpc3Qgb2YgbGlua3MgdGhhdCB0cmlnZ2VycyB0YWJzIHZpc2liaWxpdHkgbmUgYXQgdGhlIHRpbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFRhYkxpc3QgKGNvbmZpZykge1xuICAgIGNvbnN0IHRhYkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgdGFiTGlzdC5jbGFzc0xpc3QuYWRkKCdqZWRpLW5hdi1saXN0JylcbiAgICByZXR1cm4gdGFiTGlzdFxuICB9XG5cbiAgLyoqXG4gICAqIEEgVGFiIGlzIGEgd3JhcHBlciBmb3IgY29udGVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiIChjb25maWcpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2plZGktbmF2LWxpbmsnKVxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgY29uZmlnLmlkKVxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBjb25maWcudGl0bGVcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpbmspXG4gICAgcmV0dXJuIHsgbGlzdCwgbGluayB9XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmb3IgdGFic1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0VGFiQ29udGVudCAoKSB7XG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpXG4gICAgcmV0dXJuIHRhYkNvbnRlbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGFiIGF0dHJpYnV0ZXMgdG8gbWFrZSBpdCB0b2dnbGVhYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRUYWJQYW5lQXR0cmlidXRlcyAoZWxlbWVudCwgYWN0aXZlLCBpZCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnamVkaS10YWItcGFuZScpXG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gZWxlbWVudCB2aXN1YWxseSBoaWRkZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhpZGVFbGVtZW50IChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICAvKipcbiAgICogUmV2ZWFscyBhIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzaG93RWxlbWVudCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiLyoqXG4gKiBjb25zdHJhaW5zIGFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gKi9cblxuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBoYXNPd24sIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMsIGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzLCBnZXRTY2hlbWFQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZGl0aW9uYWxQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBsZXQgZXJyb3JzID0gW11cbiAgY29uc3Qgc2NoZW1hQWRkaXRpb25hbFByb3BlcnRpZXMgPSBnZXRTY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcyhzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChzY2hlbWFBZGRpdGlvbmFsUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaXNTZXQoc2NoZW1hUHJvcGVydGllcykgPyBzY2hlbWFQcm9wZXJ0aWVzIDoge31cbiAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYUFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSBzY2hlbWFQYXR0ZXJuUHJvcGVydGllc1xuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBsZXQgZGVmaW5lZEluUGF0dGVyblByb3BlcnR5ID0gZmFsc2VcblxuICAgICAgICBpZiAoaXNTZXQocGF0dGVyblByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgICAgIGRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSA9IHJlZ2V4cC50ZXN0KHByb3BlcnR5KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBhZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckFkZGl0aW9uYWxQcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmluZWRJblBhdHRlcm5Qcm9wZXJ0eSAmJiBpc09iamVjdChhZGRpdGlvbmFsUHJvcGVydGllcykgJiYgIWhhc093bihwcm9wZXJ0aWVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBjb25zdCBlZGl0b3IgPSBuZXcgSmVkaSh7XG4gICAgICAgICAgICBzY2hlbWE6IGFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3RhcnRWYWx1ZTogdmFsdWVbcHJvcGVydHldLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsUHJvcGVydHlFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5hZGRpdGlvbmFsUHJvcGVydHlFcnJvcnNdXG5cbiAgICAgICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNTZXQsIHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYUFsbE9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxPZiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFsbE9mID0gZ2V0U2NoZW1hQWxsT2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbGxPZikpIHtcbiAgICBhbGxPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IHN1YlNjaGVtYUVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByb290TmFtZToga2V5LCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBzdWJTY2hlbWFFcnJvcnMgPSBzdWJTY2hlbWFFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIHN1YlNjaGVtYUVkaXRvci5kZXN0cm95KClcbiAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnN1YlNjaGVtYUVycm9yc11cbiAgICAgIGVycm9ycyA9IHJlbW92ZUR1cGxpY2F0ZXNGcm9tQXJyYXkoZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQW55T2YgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gYW55T2YgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGFueU9mID0gZ2V0U2NoZW1hQW55T2Yoc2NoZW1hKVxuXG4gIGlmIChpc1NldChhbnlPZikpIHtcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgYW55T2YuZm9yRWFjaCgoc2NoZW1hKSA9PiB7XG4gICAgICBjb25zdCBhbnlPZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICBjb25zdCBhbnlPZkVycm9ycyA9IGFueU9mRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBhbnlPZkVkaXRvci5kZXN0cm95KClcblxuICAgICAgaWYgKGFueU9mRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGkxOG4uZXJyb3JBbnlPZlxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzU2V0LCBkaWZmZXJlbnQsIGNvbXBpbGVUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFDb25zdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29uc3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUNvbnN0ID0gZ2V0U2NoZW1hQ29uc3Qoc2NoZW1hKVxuXG4gIGlmIChpc1NldChzY2hlbWFDb25zdCkpIHtcbiAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IGRpZmZlcmVudCh2YWx1ZSwgc2NoZW1hQ29uc3QpXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JDb25zdCwge1xuICAgICAgICAgICAgY29uc3Q6IEpTT04uc3RyaW5naWZ5KHNjaGVtYUNvbnN0KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hQ29udGFpbnMsIGdldFNjaGVtYU1heENvbnRhaW5zLCBnZXRTY2hlbWFNaW5Db250YWlucyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgY29udGFpbnMgPSBnZXRTY2hlbWFDb250YWlucyhzY2hlbWEpXG4gIGNvbnN0IG1pbkNvbnRhaW5zID0gZ2V0U2NoZW1hTWluQ29udGFpbnMoc2NoZW1hKVxuICBjb25zdCBtYXhDb250YWlucyA9IGdldFNjaGVtYU1heENvbnRhaW5zKHNjaGVtYSlcblxuICBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgaXNTZXQoY29udGFpbnMpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluc0VkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBjb250YWlucywgc3RhcnRWYWx1ZTogaXRlbSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgICAgY29uc3QgY29udGFpbnNFcnJvcnMgPSBjb250YWluc0VkaXRvci5nZXRFcnJvcnMoKVxuXG4gICAgICBpZiAoY29udGFpbnNFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuXG4gICAgICBjb250YWluc0VkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPT09IDApXG5cbiAgICBpZiAoaXNTZXQobWluQ29udGFpbnMpKSB7XG4gICAgICBjb25zdCBtaW5Db250YWluc0ludmFsaWQgPSAoY291bnRlciA8IG1pbkNvbnRhaW5zKVxuXG4gICAgICBpZiAobWluQ29udGFpbnNJbnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Db250YWlucywge1xuICAgICAgICAgICAgICBjb3VudGVyOiBjb3VudGVyLFxuICAgICAgICAgICAgICBtaW5Db250YWluczogbWluQ29udGFpbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb250YWluc0ludmFsaWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2VzOiBbaTE4bi5lcnJvckNvbnRhaW5zXSxcbiAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU2V0KG1heENvbnRhaW5zKSkge1xuICAgICAgY29uc3QgbWF4Q29udGFpbnNJbnZhbGlkID0gKGNvdW50ZXIgPiBtYXhDb250YWlucylcblxuICAgICAgaWYgKG1heENvbnRhaW5zSW52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4Q29udGFpbnMsIHtcbiAgICAgICAgICAgICAgY291bnRlcjogY291bnRlcixcbiAgICAgICAgICAgICAgbWF4Q29udGFpbnM6IG1heENvbnRhaW5zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaGFzT3duLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50UmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFJlcXVpcmVkID0gZ2V0U2NoZW1hRGVwZW5kZW50UmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoZGVwZW5kZW50UmVxdWlyZWQpKSB7XG4gICAgbGV0IG1pc3NpbmdQcm9wZXJ0aWVzID0gW11cblxuICAgIE9iamVjdC5rZXlzKGRlcGVuZGVudFJlcXVpcmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChpc1NldCh2YWx1ZVtrZXldKSkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXMgPSBkZXBlbmRlbnRSZXF1aXJlZFtrZXldXG5cbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMgPSByZXF1aXJlZFByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaGFzT3duKHZhbHVlLCBwcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaW52YWxpZCA9IG1pc3NpbmdQcm9wZXJ0aWVzLmxlbmd0aCA+IDBcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JEZXBlbmRlbnRSZXF1aXJlZCwge1xuICAgICAgICAgICAgZGVwZW5kZW50UmVxdWlyZWQ6IG1pc3NpbmdQcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW50U2NoZW1hcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGRlcGVuZGVudFNjaGVtYXMgPSBnZXRTY2hlbWFEZXBlbmRlbnRTY2hlbWFzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KGRlcGVuZGVudFNjaGVtYXMpKSB7XG4gICAgT2JqZWN0LmtleXMoZGVwZW5kZW50U2NoZW1hcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoaXNTZXQodmFsdWVba2V5XSkpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50U2NoZW1hID0gZGVwZW5kZW50U2NoZW1hc1trZXldXG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBkZXBlbmRlbnRTY2hlbWEsIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICAgIGNvbnN0IHRtcEVycm9ycyA9IHRtcEVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgICB0bXBFZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLnRtcEVycm9yc11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIF9lbnVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBzY2hlbWFFbnVtID0gZ2V0U2NoZW1hRW51bShzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KHNjaGVtYUVudW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICFzY2hlbWFFbnVtLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckVudW0sIHtcbiAgICAgICAgICAgIGVudW06IEpTT04uc3RyaW5naWZ5KHNjaGVtYUVudW0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBleGNsdXNpdmVNYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gZ2V0U2NoZW1hRXhjbHVzaXZlTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChleGNsdXNpdmVNYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPj0gZXhjbHVzaXZlTWF4aW11bSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JFeGNsdXNpdmVNYXhpbXVtLCB7XG4gICAgICAgICAgICBleGNsdXNpdmVNYXhpbXVtOiBleGNsdXNpdmVNYXhpbXVtXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1c2l2ZU1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSBnZXRTY2hlbWFFeGNsdXNpdmVNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KGV4Y2x1c2l2ZU1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8PSBleGNsdXNpdmVNaW5pbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckV4Y2x1c2l2ZU1pbmltdW0sIHtcbiAgICAgICAgICAgIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUZvcm1hdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IGZvcm1hdCA9IGdldFNjaGVtYUZvcm1hdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KGZvcm1hdCkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbGV0IHJlZ2V4cFxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ2VtYWlsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXJsJykge1xuICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXig/Omh0dHBzP3xmdHApOlxcL1xcLyg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykoPzpcXC4oPzpbYS16MC05XFx1ezAwYTF9LVxcdXtmZmZmfV0rLSkqW2EtejAtOVxcdXswMGExfS1cXHV7ZmZmZn1dKykqKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn1dezIsfSkpKSg/OjpcXGR7Miw1fSk/KD86XFwvW15cXHNdKik/JC9pdSlcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAndXVpZCcpIHtcbiAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2kpXG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGlzU2V0KHJlZ2V4cCkgJiYgIXJlZ2V4cC50ZXN0KHZhbHVlKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvckZvcm1hdCwge1xuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5pbXBvcnQgeyBpc1NldCwgbm90U2V0IH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYUVsc2UsIGdldFNjaGVtYUlmLCBnZXRTY2hlbWFUaGVuIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBfaWYgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHNjaGVtYUlmID0gZ2V0U2NoZW1hSWYoc2NoZW1hKVxuICBjb25zdCBzY2hlbWFUaGVuID0gZ2V0U2NoZW1hVGhlbihzY2hlbWEpXG4gIGNvbnN0IHNjaGVtYUVsc2UgPSBnZXRTY2hlbWFFbHNlKHNjaGVtYSlcblxuICBpZiAoaXNTZXQoc2NoZW1hSWYpKSB7XG4gICAgaWYgKG5vdFNldChzY2hlbWFUaGVuKSAmJiBub3RTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG5cbiAgICBjb25zdCBpZkVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBzY2hlbWFJZiwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICBjb25zdCBpZkVycm9ycyA9IGlmRWRpdG9yLmdldEVycm9ycygpXG4gICAgaWZFZGl0b3IuZGVzdHJveSgpXG5cbiAgICBsZXQgdGhlbkVycm9ycyA9IFtdXG4gICAgbGV0IGVsc2VFcnJvcnMgPSBbXVxuXG4gICAgaWYgKGlzU2V0KHNjaGVtYVRoZW4pKSB7XG4gICAgICBjb25zdCB0aGVuRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYVRoZW4sIHN0YXJ0VmFsdWU6IHZhbHVlLCByZWZQYXJzZXI6IGZhbHNlIH0pXG4gICAgICB0aGVuRXJyb3JzID0gdGhlbkVkaXRvci5nZXRFcnJvcnMoKVxuICAgICAgdGhlbkVkaXRvci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAoaXNTZXQoc2NoZW1hRWxzZSkpIHtcbiAgICAgIGNvbnN0IGVsc2VFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogc2NoZW1hRWxzZSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGVsc2VFcnJvcnMgPSBlbHNlRWRpdG9yLmdldEVycm9ycygpXG4gICAgICBlbHNlRWRpdG9yLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmIChzY2hlbWFJZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoZW5FcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hSWYgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZWxzZUVycm9yc1xuICAgIH1cblxuICAgIGlmIChpZkVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGVuRXJyb3JzXG4gICAgfVxuXG4gICAgaWYgKGlmRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBlbHNlRXJyb3JzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hSXRlbXMsIGdldFNjaGVtYVByZWZpeEl0ZW1zIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBpdGVtcyA9IGdldFNjaGVtYUl0ZW1zKHNjaGVtYSlcbiAgY29uc3QgcHJlZml4SXRlbXMgPSBnZXRTY2hlbWFQcmVmaXhJdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KGl0ZW1zKSkge1xuICAgIGNvbnN0IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50ID0gaXNTZXQocHJlZml4SXRlbXMpID8gcHJlZml4SXRlbXMubGVuZ3RoIDogMFxuXG4gICAgaWYgKGl0ZW1zID09PSBmYWxzZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA+IHByZWZpeEl0ZW1zU2NoZW1hc0NvdW50KSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbaTE4bi5lcnJvck1heFByb3BlcnRpZXNdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNBcnJheSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gbWF4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heEl0ZW1zID0gZ2V0U2NoZW1hTWF4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChtYXhJdGVtcykpIHtcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heEl0ZW1zLCB7XG4gICAgICAgICAgICBtYXhJdGVtczogbWF4SXRlbXNcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYU1heExlbmd0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGggKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1heExlbmd0aCA9IGdldFNjaGVtYU1heExlbmd0aChzY2hlbWEpXG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc1NldChtYXhMZW5ndGgpKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXFx1RENBOV0vZywgJycpIC8vIHJlbW92ZSBVbmljb2RlIGNvZGUgcG9pbnRzXG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4TGVuZ3RoLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhQcm9wZXJ0aWVzICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhQcm9wZXJ0aWVzID0gZ2V0U2NoZW1hTWF4UHJvcGVydGllcyhzY2hlbWEpXG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiBpc1NldChtYXhQcm9wZXJ0aWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXNDb3VudCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGhcbiAgICBjb25zdCBpbnZhbGlkID0gKHByb3BlcnRpZXNDb3VudCA+IG1heFByb3BlcnRpZXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWF4UHJvcGVydGllcywge1xuICAgICAgICAgICAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWF4aW11bSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhpbXVtICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtYXhpbXVtID0gZ2V0U2NoZW1hTWF4aW11bShzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtYXhpbXVtKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUgPiBtYXhpbXVtKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck1heGltdW0sIHtcbiAgICAgICAgICAgIG1heGltdW06IG1heGltdW1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5JdGVtcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5JdGVtcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluSXRlbXMgPSBnZXRTY2hlbWFNaW5JdGVtcyhzY2hlbWEpXG5cbiAgaWYgKGlzQXJyYXkodmFsdWUpICYmIGlzU2V0KG1pbkl0ZW1zKSkge1xuICAgIGNvbnN0IGludmFsaWQgPSAodmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluSXRlbXMsIHtcbiAgICAgICAgICAgIG1pbkl0ZW1zOiBtaW5JdGVtc1xuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc1NldCwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTWluTGVuZ3RoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbkxlbmd0aCAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgbWluTGVuZ3RoID0gZ2V0U2NoZW1hTWluTGVuZ3RoKHNjaGVtYSlcblxuICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIGlzU2V0KG1pbkxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tcXHVEQ0E5XS9nLCAnJykgLy8gcmVtb3ZlIFVuaWNvZGUgY29kZSBwb2ludHNcbiAgICBjb25zdCBpbnZhbGlkID0gKHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5MZW5ndGgsIHtcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzT2JqZWN0LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pblByb3BlcnRpZXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pblByb3BlcnRpZXMgPSBnZXRTY2hlbWFNaW5Qcm9wZXJ0aWVzKHNjaGVtYSlcblxuICBpZiAoaXNPYmplY3QodmFsdWUpICYmIGlzU2V0KG1pblByb3BlcnRpZXMpKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0NvdW50ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICAgIGNvbnN0IGludmFsaWQgPSAocHJvcGVydGllc0NvdW50IDwgbWluUHJvcGVydGllcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JNaW5Qcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBtaW5Qcm9wZXJ0aWVzOiBtaW5Qcm9wZXJ0aWVzXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGlzTnVtYmVyLCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFNaW5pbXVtIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbmltdW0gKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG1pbmltdW0gPSBnZXRTY2hlbWFNaW5pbXVtKHNjaGVtYSlcblxuICBpZiAoaXNOdW1iZXIodmFsdWUpICYmIGlzU2V0KG1pbmltdW0pKSB7XG4gICAgY29uc3QgaW52YWxpZCA9ICh2YWx1ZSA8IG1pbmltdW0pXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTWluaW11bSwge1xuICAgICAgICAgICAgbWluaW11bTogbWluaW11bVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc051bWJlciwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTXVsdGlwbGVPZiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2NoZW1hJ1xuaW1wb3J0IHsgaTE4biB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBsZU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBtdWx0aXBsZU9mID0gZ2V0U2NoZW1hTXVsdGlwbGVPZihzY2hlbWEpXG5cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiBpc1NldChtdWx0aXBsZU9mKSkge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cblxuICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICBjb25zdCBpbnZhbGlkID0gKCFpc011bHRpcGxlT2YgfHwgdmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpKVxuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvck11bHRpcGxlT2YsIHtcbiAgICAgICAgICAgIG11bHRpcGxlT2Y6IG11bHRpcGxlT2ZcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hTm90IH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcbmltcG9ydCBKZWRpIGZyb20gJy4uLy4uL2plZGknXG5cbmV4cG9ydCBmdW5jdGlvbiBub3QgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IG5vdCA9IGdldFNjaGVtYU5vdChzY2hlbWEpXG5cbiAgaWYgKGlzU2V0KG5vdCkpIHtcbiAgICBjb25zdCBub3RFZGl0b3IgPSBuZXcgSmVkaSh7IHNjaGVtYTogbm90LCBzdGFydFZhbHVlOiB2YWx1ZSwgcmVmUGFyc2VyOiBmYWxzZSB9KVxuICAgIGNvbnN0IG5vdEVycm9ycyA9IG5vdEVkaXRvci5nZXRFcnJvcnMoKVxuICAgIG5vdEVkaXRvci5kZXN0cm95KClcblxuICAgIGNvbnN0IGludmFsaWQgPSBub3RFcnJvcnMubGVuZ3RoID09PSAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yTm90KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYU9uZU9mIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIG9uZU9mICh2YWxpZGF0b3IsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aCkge1xuICBjb25zdCBlcnJvcnMgPSBbXVxuICBjb25zdCBvbmVPZiA9IGdldFNjaGVtYU9uZU9mKHNjaGVtYSlcblxuICBpZiAoaXNTZXQob25lT2YpKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICBvbmVPZi5mb3JFYWNoKChzY2hlbWEpID0+IHtcbiAgICAgIGNvbnN0IG9uZU9mRWRpdG9yID0gbmV3IEplZGkoeyBzY2hlbWE6IHNjaGVtYSwgc3RhcnRWYWx1ZTogdmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgIGNvbnN0IG9uZU9mRXJyb3JzID0gb25lT2ZFZGl0b3IuZ2V0RXJyb3JzKClcbiAgICAgIG9uZU9mRWRpdG9yLmRlc3Ryb3koKVxuXG4gICAgICBpZiAob25lT2ZFcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY291bnRlciAhPT0gMSkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yT25lT2YsIHtcbiAgICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXJcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgaXNTZXQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybiAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgY29uc3QgZXJyb3JzID0gW11cbiAgY29uc3QgcGF0dGVybiA9IGdldFNjaGVtYVBhdHRlcm4oc2NoZW1hKVxuXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgaXNTZXQocGF0dGVybikpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgY29uc3QgaW52YWxpZCA9ICFyZWdleHAudGVzdCh2YWx1ZSlcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgY29tcGlsZVRlbXBsYXRlKGkxOG4uZXJyb3JQYXR0ZXJuLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEplZGkgZnJvbSAnLi4vLi4vamVkaSdcbmltcG9ydCB7IGdldFNjaGVtYVBhdHRlcm5Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuUHJvcGVydGllcyAodmFsaWRhdG9yLCB2YWx1ZSwgc2NoZW1hLCBwYXRoKSB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBjb25zdCBhdHRlcm5Qcm9wZXJ0aWVzID0gZ2V0U2NoZW1hUGF0dGVyblByb3BlcnRpZXMoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQoYXR0ZXJuUHJvcGVydGllcykpIHtcbiAgICBjb25zdCBwYXR0ZXJuUHJvcGVydGllcyA9IGF0dGVyblByb3BlcnRpZXNcblxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgaWYgKHJlZ2V4cC50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBzY2hlbWEgPSBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXVxuXG4gICAgICAgICAgY29uc3QgZWRpdG9yID0gbmV3IEplZGkoe1xuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgICBzdGFydFZhbHVlOiB2YWx1ZVtwcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgICAgcmVmUGFyc2VyOiBmYWxzZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zdCBlZGl0b3JFcnJvcnMgPSBlZGl0b3IuZ2V0RXJyb3JzKCkubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yLm1lc3NhZ2VzLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgcHJvcGVydHlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLmVkaXRvckVycm9yc11cblxuICAgICAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc0FycmF5LCBpc1NldCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSmVkaSBmcm9tICcuLi8uLi9qZWRpJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUHJlZml4SXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4SXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHByZWZpeEl0ZW1zID0gZ2V0U2NoZW1hUHJlZml4SXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldChwcmVmaXhJdGVtcykpIHtcbiAgICBwcmVmaXhJdGVtcy5mb3JFYWNoKChpdGVtU2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVZhbHVlID0gdmFsdWVbaW5kZXhdXG5cbiAgICAgIGlmIChpc1NldChpdGVtVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEVkaXRvciA9IG5ldyBKZWRpKHsgc2NoZW1hOiBpdGVtU2NoZW1hLCBzdGFydFZhbHVlOiBpdGVtVmFsdWUsIHJlZlBhcnNlcjogZmFsc2UgfSlcbiAgICAgICAgY29uc3QgdG1wRXJyb3JzID0gdG1wRWRpdG9yLmdldEVycm9ycygpXG4gICAgICAgIHRtcEVkaXRvci5kZXN0cm95KClcblxuICAgICAgICBpZiAodG1wRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclByZWZpeEl0ZW1zLCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlLCBpc09iamVjdCwgaXNTZXQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHJlcXVpcmVkID0gZ2V0U2NoZW1hUmVxdWlyZWQoc2NoZW1hKVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNTZXQocmVxdWlyZWQpKSB7XG4gICAgY29uc3QgbWlzc2luZ1Byb3BlcnRpZXMgPSBbXVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcblxuICAgIHJlcXVpcmVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgbWlzc2luZ1Byb3BlcnRpZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGludmFsaWQgPSBtaXNzaW5nUHJvcGVydGllcy5sZW5ndGggPiAwXG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgIGNvbXBpbGVUZW1wbGF0ZShpMThuLmVycm9yUmVxdWlyZWQsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBtaXNzaW5nUHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQge1xuICBjb21waWxlVGVtcGxhdGUsIGdldFR5cGUsXG4gIGlzQXJyYXksXG4gIGlzQm9vbGVhbixcbiAgaXNJbnRlZ2VyLFxuICBpc051bGwsXG4gIGlzTnVtYmVyLFxuICBpc09iamVjdCxcbiAgaXNTZXQsXG4gIGlzU3RyaW5nXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFUeXBlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zY2hlbWEnXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnLi4vLi4vaTE4bidcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHR5cGUgPSBnZXRTY2hlbWFUeXBlKHNjaGVtYSlcblxuICBpZiAodHlwZSA9PT0gJ2FueScpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpZiAoaXNTZXQodHlwZSkpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIHN0cmluZzogdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpLFxuICAgICAgbnVtYmVyOiB2YWx1ZSA9PiBpc051bWJlcih2YWx1ZSksXG4gICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiBpc0ludGVnZXIodmFsdWUpLFxuICAgICAgYm9vbGVhbjogdmFsdWUgPT4gaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgIGFycmF5OiB2YWx1ZSA9PiBpc0FycmF5KHZhbHVlKSxcbiAgICAgIG9iamVjdDogdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpLFxuICAgICAgbnVsbDogdmFsdWUgPT4gaXNOdWxsKHZhbHVlKVxuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IHRydWVcblxuICAgIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB2YWxpZCA9IHR5cGUuc29tZSgodHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXNbdHlwZV0odmFsdWUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZCA9IHR5cGVzW3R5cGVdKHZhbHVlKVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICBjb21waWxlVGVtcGxhdGUoaTE4bi5lcnJvclR5cGUsIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGdldFR5cGUodmFsdWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTZXQsIHNvcnRPYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IHsgZ2V0U2NoZW1hVW5pcXVlSXRlbXMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3NjaGVtYSdcbmltcG9ydCB7IGkxOG4gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlSXRlbXMgKHZhbGlkYXRvciwgdmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG4gIGNvbnN0IHVuaXF1ZUl0ZW1zID0gZ2V0U2NoZW1hVW5pcXVlSXRlbXMoc2NoZW1hKVxuXG4gIGlmIChpc0FycmF5KHZhbHVlKSAmJiBpc1NldCh1bmlxdWVJdGVtcykgJiYgdW5pcXVlSXRlbXMgPT09IHRydWUpIHtcbiAgICBjb25zdCBzZWVuID0gW11cbiAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdmFsdWVbaV1cblxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIGl0ZW0gPSBzb3J0T2JqZWN0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSBzZWVuLnNvbWUoKHNlZW4pID0+IHNlZW4gPT09IGl0ZW1TdHJpbmdpZmllZClcblxuICAgICAgaWYgKGhhc0R1cGxpY2F0ZWRJdGVtcykge1xuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5wdXNoKGl0ZW1TdHJpbmdpZmllZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gKGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgaTE4bi5lcnJvclVuaXF1ZUl0ZW1zXG4gICAgICAgIF0sXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBhbnlPZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvYW55T2YnXG5pbXBvcnQgeyBfZW51bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZW51bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1heGltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1heGltdW0nXG5pbXBvcnQgeyBleGNsdXNpdmVNaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9leGNsdXNpdmVNaW5pbXVtJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnLi4vY29uc3RyYWlucy9mb3JtYXQnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBlbnVtOiBfZW51bSxcbiAgZXhjbHVzaXZlTWF4aW11bTogZXhjbHVzaXZlTWF4aW11bSxcbiAgZXhjbHVzaXZlTWluaW11bTogZXhjbHVzaXZlTWluaW11bSxcbiAgZm9ybWF0OiBmb3JtYXQsXG4gIGl0ZW1zOiBpdGVtcyxcbiAgbWF4aW11bTogbWF4aW11bSxcbiAgbWF4SXRlbXM6IG1heEl0ZW1zLFxuICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgbWF4UHJvcGVydGllczogbWF4UHJvcGVydGllcyxcbiAgbWluaW11bTogbWluaW11bSxcbiAgbWluSXRlbXM6IG1pbkl0ZW1zLFxuICBtaW5MZW5ndGg6IG1pbkxlbmd0aCxcbiAgbWluUHJvcGVydGllczogbWluUHJvcGVydGllcyxcbiAgbXVsdGlwbGVPZjogbXVsdGlwbGVPZixcbiAgbm90OiBub3QsXG4gIG9uZU9mOiBvbmVPZixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgcGF0dGVyblByb3BlcnRpZXM6IHBhdHRlcm5Qcm9wZXJ0aWVzLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IHsgYWxsT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FsbE9mJ1xuaW1wb3J0IHsgbWluTGVuZ3RoIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5MZW5ndGgnXG5pbXBvcnQgeyBfY29uc3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnN0J1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9jb25zdHJhaW5zL2NvbnRhaW5zJ1xuaW1wb3J0IHsgYW55T2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL2FueU9mJ1xuaW1wb3J0IHsgZGVwZW5kZW50UmVxdWlyZWQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2RlcGVuZGVudFJlcXVpcmVkJ1xuaW1wb3J0IHsgZGVwZW5kZW50U2NoZW1hcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZGVwZW5kZW50U2NoZW1hcydcbmltcG9ydCB7IF9lbnVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9lbnVtJ1xuaW1wb3J0IHsgZXhjbHVzaXZlTWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvZXhjbHVzaXZlTWF4aW11bSdcbmltcG9ydCB7IGV4Y2x1c2l2ZU1pbmltdW0gfSBmcm9tICcuLi9jb25zdHJhaW5zL2V4Y2x1c2l2ZU1pbmltdW0nXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICcuLi9jb25zdHJhaW5zL2Zvcm1hdCdcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaWYnXG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvaXRlbXMnXG5pbXBvcnQgeyBtYXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4SXRlbXMnXG5pbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICcuLi9jb25zdHJhaW5zL21heExlbmd0aCdcbmltcG9ydCB7IG1heFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21heFByb3BlcnRpZXMnXG5pbXBvcnQgeyBtaW5pbXVtIH0gZnJvbSAnLi4vY29uc3RyYWlucy9taW5pbXVtJ1xuaW1wb3J0IHsgbWluSXRlbXMgfSBmcm9tICcuLi9jb25zdHJhaW5zL21pbkl0ZW1zJ1xuaW1wb3J0IHsgbWluUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWluUHJvcGVydGllcydcbmltcG9ydCB7IG11bHRpcGxlT2YgfSBmcm9tICcuLi9jb25zdHJhaW5zL211bHRpcGxlT2YnXG5pbXBvcnQgeyBub3QgfSBmcm9tICcuLi9jb25zdHJhaW5zL25vdCdcbmltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vY29uc3RyYWlucy9vbmVPZidcbmltcG9ydCB7IHBhdHRlcm4gfSBmcm9tICcuLi9jb25zdHJhaW5zL3BhdHRlcm4nXG5pbXBvcnQgeyBwYXR0ZXJuUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcGF0dGVyblByb3BlcnRpZXMnXG5pbXBvcnQgeyBwcmVmaXhJdGVtcyB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcHJlZml4SXRlbXMnXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJy4uL2NvbnN0cmFpbnMvcmVxdWlyZWQnXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vY29uc3RyYWlucy90eXBlJ1xuaW1wb3J0IHsgbWF4aW11bSB9IGZyb20gJy4uL2NvbnN0cmFpbnMvbWF4aW11bSdcbmltcG9ydCB7IHVuaXF1ZUl0ZW1zIH0gZnJvbSAnLi4vY29uc3RyYWlucy91bmlxdWVJdGVtcydcbmltcG9ydCB7IGFkZGl0aW9uYWxQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RyYWlucy9hZGRpdGlvbmFsUHJvcGVydGllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogYWRkaXRpb25hbFByb3BlcnRpZXMsXG4gIGFsbE9mOiBhbGxPZixcbiAgYW55T2Y6IGFueU9mLFxuICBjb25zdDogX2NvbnN0LFxuICBjb250YWluczogY29udGFpbnMsXG4gIGRlcGVuZGVudFJlcXVpcmVkOiBkZXBlbmRlbnRSZXF1aXJlZCxcbiAgZGVwZW5kZW50U2NoZW1hczogZGVwZW5kZW50U2NoZW1hcyxcbiAgZW51bTogX2VudW0sXG4gIGV4Y2x1c2l2ZU1heGltdW06IGV4Y2x1c2l2ZU1heGltdW0sXG4gIGV4Y2x1c2l2ZU1pbmltdW06IGV4Y2x1c2l2ZU1pbmltdW0sXG4gIGZvcm1hdDogZm9ybWF0LFxuICBpZjogX2lmLFxuICBpdGVtczogaXRlbXMsXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1heEl0ZW1zOiBtYXhJdGVtcyxcbiAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gIG1heFByb3BlcnRpZXM6IG1heFByb3BlcnRpZXMsXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1pbkl0ZW1zOiBtaW5JdGVtcyxcbiAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gIG1pblByb3BlcnRpZXM6IG1pblByb3BlcnRpZXMsXG4gIG11bHRpcGxlT2Y6IG11bHRpcGxlT2YsXG4gIG5vdDogbm90LFxuICBvbmVPZjogb25lT2YsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIHBhdHRlcm5Qcm9wZXJ0aWVzOiBwYXR0ZXJuUHJvcGVydGllcyxcbiAgcHJlZml4SXRlbXM6IHByZWZpeEl0ZW1zLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHR5cGU6IHR5cGUsXG4gIHVuaXF1ZUl0ZW1zOiB1bmlxdWVJdGVtc1xufVxuIiwiaW1wb3J0IGRyYWZ0MDQgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMDQnXG5pbXBvcnQgZHJhZnQwNiBmcm9tICcuL2RyYWZ0cy9kcmFmdC0wNidcbmltcG9ydCBkcmFmdDA3IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTA3J1xuaW1wb3J0IGRyYWZ0MjAxOTA5IGZyb20gJy4vZHJhZnRzL2RyYWZ0LTIwMTktMDknXG5pbXBvcnQgZHJhZnQyMDIwMTIgZnJvbSAnLi9kcmFmdHMvZHJhZnQtMjAyMC0xMidcbmltcG9ydCB7IGhhc093biwgaXNCb29sZWFuLCBjbG9uZSB9IGZyb20gJy4uL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgeyBnZXRTY2hlbWFPcHRpb24gfSBmcm9tICcuLi9oZWxwZXJzL3NjaGVtYSdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5kcmFmdCA9IGRyYWZ0MjAyMDEyXG5cbiAgICB0aGlzLmpzb25TY2hlbWFEcmFmdHMgPSB7XG4gICAgICAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNC9zY2hlbWEjJzogZHJhZnQwNCxcbiAgICAgICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA2L3NjaGVtYSMnOiBkcmFmdDA2LFxuICAgICAgJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIyc6IGRyYWZ0MDcsXG4gICAgICAnaHR0cHM6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQvMjAxOS0wOS9zY2hlbWEnOiBkcmFmdDIwMTkwOSxcbiAgICAgICdodHRwczovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC8yMDIwLTEyL3NjaGVtYSc6IGRyYWZ0MjAyMDEyXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIGdldEVycm9ycyAodmFsdWUsIHNjaGVtYSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IHNjaGVtYUVycm9ycyA9IFtdXG4gICAgY29uc3Qgc2NoZW1hT3B0aW9uc01lc3NhZ2VzID0gZ2V0U2NoZW1hT3B0aW9uKHNjaGVtYSwgJ21lc3NhZ2VzJylcblxuICAgIGNvbnN0IHNjaGVtYUNsb25lID0gY2xvbmUoc2NoZW1hKVxuXG4gICAgaWYgKGlzQm9vbGVhbihzY2hlbWFDbG9uZSkgJiYgc2NoZW1hQ2xvbmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY2hlbWFFcnJvcnNcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKHNjaGVtYUNsb25lKSAmJiBzY2hlbWFDbG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBtZXNzYWdlczogc2NoZW1hT3B0aW9uc01lc3NhZ2VzIHx8IFsnaW52YWxpZCddLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhZnQpLmZvckVhY2goKGNvbnN0cmFpbikgPT4ge1xuICAgICAgaWYgKGhhc093bihzY2hlbWFDbG9uZSwgY29uc3RyYWluKSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmRyYWZ0W2NvbnN0cmFpbl1cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yRXJyb3JzID0gdmFsaWRhdG9yKHRoaXMsIHZhbHVlLCBzY2hlbWEsIGtleSwgcGF0aClcblxuICAgICAgICBpZiAodmFsaWRhdG9yRXJyb3JzKSB7XG4gICAgICAgICAgc2NoZW1hRXJyb3JzID0gWy4uLnNjaGVtYUVycm9ycywgLi4udmFsaWRhdG9yRXJyb3JzXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzY2hlbWFFcnJvcnMubGVuZ3RoID4gMCAmJiBzY2hlbWFPcHRpb25zTWVzc2FnZXMpIHtcbiAgICAgIHNjaGVtYUVycm9ycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzOiBzY2hlbWFPcHRpb25zTWVzc2FnZXMsXG4gICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYUVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIl0sInNvdXJjZVJvb3QiOiIifQ==