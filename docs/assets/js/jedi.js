(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Jedi"] = factory();
	else
		root["Jedi"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(5);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(6)["default"];

var assertThisInitialized = __webpack_require__(7);

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
/* 5 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/theme.js



var theme_Theme = /*#__PURE__*/function () {
  function Theme() {
    classCallCheck_default()(this, Theme);
  }

  createClass_default()(Theme, [{
    key: "getButton",
    value: function getButton(text) {
      var button = document.createElement('button');
      button.textContent = text;
      return button;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return document.createElement('div');
    }
  }, {
    key: "getLabel",
    value: function getLabel(text) {
      var label = document.createElement('label');
      label.textContent = text;
      return label;
    }
  }, {
    key: "getInput",
    value: function getInput(type) {
      var input = document.createElement('input');
      input.setAttribute('type', type);
      return input;
    }
  }, {
    key: "getSelect",
    value: function getSelect(optionValues, optionsLabels) {
      var select = document.createElement('select');
      optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = optionsLabels[index];
        select.appendChild(option);
      });
      return select;
    }
  }]);

  return Theme;
}();

/* harmony default export */ var theme = (theme_Theme);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(3);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(2);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/editor.js



var editor_Editor = /*#__PURE__*/function () {
  function Editor(config) {
    classCallCheck_default()(this, Editor);

    this.jedi = config.jedi;
    this.schema = config.schema;
    this.input = null;
    this.value = undefined;
    this.path = config.path || 'root';
    this.container = null;
    this.childEditors = {};
    this.init();
  }
  /**
   * Starts the build pipeline of the editor
   */


  createClass_default()(Editor, [{
    key: "init",
    value: function init() {
      this.setContainer();
      this.build();
      this.setDefaultValue();
      this.register();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getContainer();
      this.container.setAttribute('data-path', this.path);
    }
  }, {
    key: "build",
    value: function build() {}
    /**
     * Adds this editor instance in the jedi.editors object
     */

  }, {
    key: "register",
    value: function register() {
      this.jedi.registerEditor(this);
    }
    /**
     * Removes this editor instance from the jedi.editors object
     */

  }, {
    key: "unregister",
    value: function unregister() {
      this.jedi.unregisterEditor(this);
    }
    /**
     * Sets a default value in the property "default" is set in the schema
     */

  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      if (typeof this.schema["default"] !== 'undefined') {
        this.setValue(this.schema["default"], true);
      }
    }
    /**
     * Returns the current value of the editor
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     * Sanitize value
     */

  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return value;
    }
    /**
     * Sets the editor value and calls refreshUI right after. The onChange method
     * will be called if the new value is not an initial or default value and the
     * new value is different than the current value.
     */

  }, {
    key: "setValue",
    value: function setValue(newValue, initial) {
      newValue = this.sanitize(newValue);
      var currentValue = this.value;

      if (!initial && currentValue !== newValue) {
        this.onChange();
      }

      this.value = newValue;
      this.refreshUI();
    }
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();
    }
    /**
     * Fires when the value of the editor changes.
     */

  }, {
    key: "onChange",
    value: function onChange() {
      console.log('onChange');
    }
    /**
     * Destroys the editor, and every reference that it is attached to it.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.unregister();
    }
  }]);

  return Editor;
}();

/* harmony default export */ var editor = (editor_Editor);
// CONCATENATED MODULE: ./src/editors/array.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var array_ArrayEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ArrayEditor, _Editor);

  var _super = _createSuper(ArrayEditor);

  function ArrayEditor(config) {
    var _this;

    classCallCheck_default()(this, ArrayEditor);

    _this = _super.call(this, config);
    _this.value = [];
    return _this;
  }

  createClass_default()(ArrayEditor, [{
    key: "build",
    value: function build() {
      var _this2 = this;

      var label = this.jedi.theme.getLabel('array');
      this.container.appendChild(label);
      var addBtn = this.jedi.theme.getButton('add');
      addBtn.addEventListener('click', function () {
        var editor = _this2.jedi.createEditor({
          jedi: _this2.jedi,
          schema: _this2.schema.items,
          path: _this2.path + '.' + Object.keys(_this2.childEditors).length
        });

        _this2.container.appendChild(editor.container);

        _this2.childEditors[editor.path] = editor;
      });
      this.container.appendChild(addBtn);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this3 = this;

      this.value = [];
      Object.keys(this.childEditors).forEach(function (prop) {
        _this3.value.push(_this3.childEditors[prop].getValue());
      });
      return this.value;
    }
  }]);

  return ArrayEditor;
}(editor);

/* harmony default export */ var array = (array_ArrayEditor);
// CONCATENATED MODULE: ./src/editors/boolean.js






function boolean_createSuper(Derived) { var hasNativeReflectConstruct = boolean_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_BooleanEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(BooleanEditor, _Editor);

  var _super = boolean_createSuper(BooleanEditor);

  function BooleanEditor() {
    classCallCheck_default()(this, BooleanEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEditor, [{
    key: "sanitize",
    value: function sanitize(value) {
      return Boolean(value);
    }
  }]);

  return BooleanEditor;
}(editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
// CONCATENATED MODULE: ./src/editors/boolean-checkbox.js






function boolean_checkbox_createSuper(Derived) { var hasNativeReflectConstruct = boolean_checkbox_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_checkbox_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_checkbox_BooleanCheckbox = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanCheckbox, _BooleanEditor);

  var _super = boolean_checkbox_createSuper(BooleanCheckbox);

  function BooleanCheckbox() {
    classCallCheck_default()(this, BooleanCheckbox);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanCheckbox, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      this.container.appendChild(label);
      this.input = this.jedi.theme.getInput('checkbox');
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.checked);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.checked = this.value;
    }
  }]);

  return BooleanCheckbox;
}(editors_boolean);

/* harmony default export */ var boolean_checkbox = (boolean_checkbox_BooleanCheckbox);
// CONCATENATED MODULE: ./src/editors/boolean-select.js






function boolean_select_createSuper(Derived) { var hasNativeReflectConstruct = boolean_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_select_BooleanSelect = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanSelect, _BooleanEditor);

  var _super = boolean_select_createSuper(BooleanSelect);

  function BooleanSelect() {
    classCallCheck_default()(this, BooleanSelect);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanSelect, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      this.container.appendChild(label);
      var optionValues = ['', '1'];
      var optionsLabels = ['false', 'true'];
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels);
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.value ? '1' : '';
    }
  }]);

  return BooleanSelect;
}(editors_boolean);

/* harmony default export */ var boolean_select = (boolean_select_BooleanSelect);
// CONCATENATED MODULE: ./src/editors/object.js






function object_createSuper(Derived) { var hasNativeReflectConstruct = object_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function object_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var object_ObjectEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(ObjectEditor, _Editor);

  var _super = object_createSuper(ObjectEditor);

  function ObjectEditor(config) {
    var _this;

    classCallCheck_default()(this, ObjectEditor);

    _this = _super.call(this, config);
    _this.value = {};
    return _this;
  }

  createClass_default()(ObjectEditor, [{
    key: "build",
    value: function build() {
      var _this2 = this;

      var label = this.jedi.theme.getLabel('object');
      this.container.appendChild(label);
      Object.keys(this.schema.properties).forEach(function (prop) {
        var schema = _this2.schema.properties[prop];

        var editor = _this2.jedi.createEditor({
          jedi: _this2.jedi,
          schema: schema,
          path: _this2.path + '.' + prop
        });

        _this2.container.appendChild(editor.container);

        _this2.childEditors[prop] = editor;
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this3 = this;

      this.value = {};
      Object.keys(this.childEditors).forEach(function (prop) {
        _this3.value[prop] = _this3.childEditors[prop].getValue();
      });
      return this.value;
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {}
  }]);

  return ObjectEditor;
}(editor);

/* harmony default export */ var object = (object_ObjectEditor);
// CONCATENATED MODULE: ./src/editors/string.js






function string_createSuper(Derived) { var hasNativeReflectConstruct = string_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var string_StringEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(StringEditor, _Editor);

  var _super = string_createSuper(StringEditor);

  function StringEditor(config) {
    var _this;

    classCallCheck_default()(this, StringEditor);

    _this = _super.call(this, config);
    _this.value = '';
    return _this;
  }

  createClass_default()(StringEditor, [{
    key: "build",
    value: function build() {
      var _this2 = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      this.input = this.jedi.theme.getInput('text');
      this.container.appendChild(label);
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this2.setValue(_this2.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return String(value);
    }
  }]);

  return StringEditor;
}(editor);

/* harmony default export */ var string = (string_StringEditor);
// CONCATENATED MODULE: ./src/resolver.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var resolver_Resolver = /*#__PURE__*/function () {
  function Resolver() {
    classCallCheck_default()(this, Resolver);

    /**
     * Functions that return an editor class if the condition pass
     */
    this.resolvers = [function (schema) {
      if (schema.type === 'boolean' && schema.format === 'checkbox') {
        return boolean_checkbox;
      }
    }, function (schema) {
      if (schema.type === 'boolean' && schema.format === 'select') {
        return boolean_select;
      }
    }, function (schema) {
      if (schema.type === 'boolean') {
        return boolean_checkbox;
      }
    }, function (schema) {
      if (schema.type === 'object') {
        return object;
      }
    }, function (schema) {
      if (schema.type === 'array') {
        return array;
      }
    }, function (schema) {
      if (schema.type === 'string') {
        return string;
      }
    }];
  }
  /**
   * Adds a resolver function
   */


  createClass_default()(Resolver, [{
    key: "addResolver",
    value: function addResolver(resolver) {
      this.resolvers.unshift(resolver);
    }
    /**
     * returns the first editor class that matches the passed schema.
     */

  }, {
    key: "resolve",
    value: function resolve(schema) {
      var _iterator = _createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var editorClass = resolver(schema);

          if (typeof editorClass !== 'undefined') {
            return editorClass;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Resolver;
}();

/* harmony default export */ var resolver = (resolver_Resolver);
// CONCATENATED MODULE: ./src/index.js





var src_Jedi = /*#__PURE__*/function () {
  function Jedi(config) {
    classCallCheck_default()(this, Jedi);

    this.theme = new theme();
    this.resolver = new resolver();
    this.container = config.container;
    this.schema = config.schema;
    this.root = null;
    this.editors = {};
    this.init();
  }

  createClass_default()(Jedi, [{
    key: "init",
    value: function init() {
      this.loadEditors();
    }
    /**
     * Adds an editor instance in the editors object
     */

  }, {
    key: "registerEditor",
    value: function registerEditor(editor) {
      this.editors[editor.path] = editor;
    }
    /**
     * Removes an editor instance from the editors object
     */

  }, {
    key: "unregisterEditor",
    value: function unregisterEditor(editor) {
      this.editors[editor.path] = null; // todo delete?
    }
  }, {
    key: "loadEditors",
    value: function loadEditors() {
      this.root = this.createEditor({
        jedi: this,
        schema: this.schema
      });
      this.container.appendChild(this.root.container);
      this.container.classList.add('jedi-loaded');
    }
    /**
     * Creates an editor instance based on the passed schema and config
     */

  }, {
    key: "createEditor",
    value: function createEditor(config) {
      // todo expand defs
      return new (this.resolver.resolve(config.schema))(config);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.root.getValue();
    }
  }, {
    key: "getEditor",
    value: function getEditor(path) {
      return this.editors[path];
    }
  }]);

  return Jedi;
}();

/* harmony default export */ var src = __webpack_exports__["default"] = (src_Jedi);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWNoZWNrYm94LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwidGV4dCIsImJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibGFiZWwiLCJ0eXBlIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwic2VsZWN0IiwiZm9yRWFjaCIsInZhbHVlIiwiaW5kZXgiLCJvcHRpb24iLCJhcHBlbmRDaGlsZCIsIkVkaXRvciIsImNvbmZpZyIsImplZGkiLCJzY2hlbWEiLCJ1bmRlZmluZWQiLCJwYXRoIiwiY29udGFpbmVyIiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInNldENvbnRhaW5lciIsImJ1aWxkIiwic2V0RGVmYXVsdFZhbHVlIiwicmVnaXN0ZXIiLCJ0aGVtZSIsImdldENvbnRhaW5lciIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJvbkNoYW5nZSIsInJlZnJlc2hVSSIsImdldFZhbHVlIiwiY29uc29sZSIsImxvZyIsInVucmVnaXN0ZXIiLCJBcnJheUVkaXRvciIsImdldExhYmVsIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVkaXRvciIsImNyZWF0ZUVkaXRvciIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInByb3AiLCJwdXNoIiwiQm9vbGVhbkVkaXRvciIsIkJvb2xlYW4iLCJCb29sZWFuQ2hlY2tib3giLCJ0aXRsZSIsImdldElucHV0IiwiY2hlY2tlZCIsIkJvb2xlYW5TZWxlY3QiLCJnZXRTZWxlY3QiLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzIiwiU3RyaW5nRWRpdG9yIiwiU3RyaW5nIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJmb3JtYXQiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIkplZGkiLCJyb290IiwiZWRpdG9ycyIsImxvYWRFZGl0b3JzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFDRDs7O1dBRUQsb0JBQVk7QUFDVixhQUFPLEtBQUsyRCxJQUFMLENBQVVwQyxRQUFWLEVBQVA7QUFDRDs7O1dBRUQsbUJBQVduQixJQUFYLEVBQWlCO0FBQ2YsYUFBTyxLQUFLd0QsT0FBTCxDQUFheEQsSUFBYixDQUFQO0FBQ0Q7Ozs7OztBQUdZc0QsaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lIHtcbiAgZ2V0QnV0dG9uICh0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExhYmVsICh0ZXh0KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAodHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy5pbnB1dCA9IG51bGxcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMucmVnaXN0ZXIoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5wYXRoKVxuICB9XG5cbiAgYnVpbGQgKCkge31cblxuICAvKipcbiAgICogQWRkcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgamVkaS5lZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnVucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgZGVmYXVsdCB2YWx1ZSBpbiB0aGUgcHJvcGVydHkgXCJkZWZhdWx0XCIgaXMgc2V0IGluIHRoZSBzY2hlbWFcbiAgICovXG4gIHNldERlZmF1bHRWYWx1ZSAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNjaGVtYS5kZWZhdWx0LCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBhbiBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWUgYW5kIHRoZVxuICAgKiBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIGluaXRpYWwpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZVxuXG4gICAgaWYgKCFpbml0aWFsICYmIGN1cnJlbnRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZWRpdG9yIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ29uQ2hhbmdlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgICB0aGlzLnZhbHVlID0gW11cbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCgnYXJyYXknKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2FkZCcpXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgT2JqZWN0LmtleXModGhpcy5jaGlsZEVkaXRvcnMpLmxlbmd0aFxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1tlZGl0b3IucGF0aF0gPSBlZGl0b3JcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0gW11cbiAgICBPYmplY3Qua2V5cyh0aGlzLmNoaWxkRWRpdG9ycykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIHRoaXMudmFsdWUucHVzaCh0aGlzLmNoaWxkRWRpdG9yc1twcm9wXS5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5DaGVja2JveCBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwodGhpcy5zY2hlbWEudGl0bGUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCgnY2hlY2tib3gnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuQ2hlY2tib3hcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhblNlbGVjdCBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwodGhpcy5zY2hlbWEudGl0bGUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gWycnLCAnMSddXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy52YWx1ZSA/ICcxJyA6ICcnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhblNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpXG4gICAgdGhpcy52YWx1ZSA9IHt9XG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwoJ29iamVjdCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXVxuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHByb3BcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnNbcHJvcF0gPSBlZGl0b3JcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHRoaXMudmFsdWUgPSB7fVxuICAgIE9iamVjdC5rZXlzKHRoaXMuY2hpbGRFZGl0b3JzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgdGhpcy52YWx1ZVtwcm9wXSA9IHRoaXMuY2hpbGRFZGl0b3JzW3Byb3BdLmdldFZhbHVlKClcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgICB0aGlzLnZhbHVlID0gJydcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KCd0ZXh0JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5DaGVja2JveCBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1jaGVja2JveCdcbmltcG9ydCBCb29sZWFuU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLXNlbGVjdCdcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhblNlbGVjdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmICh0eXBlb2YgZWRpdG9yQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKClcbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIC8vIHRvZG8gZGVsZXRlP1xuICB9XG5cbiAgbG9hZEVkaXRvcnMgKCkge1xuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QuY29udGFpbmVyKVxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktbG9hZGVkJylcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIC8vIHRvZG8gZXhwYW5kIGRlZnNcbiAgICByZXR1cm4gbmV3ICh0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnLnNjaGVtYSkpKGNvbmZpZylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIGdldEVkaXRvciAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvcnNbcGF0aF1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9