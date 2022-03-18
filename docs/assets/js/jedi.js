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
     * Validates value against it's schema
     */

  }, {
    key: "validate",
    value: function validate() {
      return this.jedi.validator.validate(this.schema, this.getValue(), this.path);
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
      var currentValue = this.getValue();

      if (!initial && currentValue !== newValue) {
        this.onChange();
      }

      this.value = newValue;
      this.validate();
      this.refreshUI();
    }
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshUI",
    value: function refreshUI() {}
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

  function ArrayEditor() {
    classCallCheck_default()(this, ArrayEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ArrayEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel('array');
      this.container.appendChild(label);
      var addBtn = this.jedi.theme.getButton('add');
      addBtn.addEventListener('click', function () {
        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: _this.schema.items,
          path: _this.path + '.' + Object.keys(_this.childEditors).length
        });

        _this.container.appendChild(editor.container);

        _this.childEditors[editor.path] = editor;
      });
      this.container.appendChild(addBtn);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      this.value = [];
      Object.keys(this.childEditors).forEach(function (prop) {
        _this2.value.push(_this2.childEditors[prop].getValue());
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

  function ObjectEditor() {
    classCallCheck_default()(this, ObjectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(ObjectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel('object');
      this.container.appendChild(label);
      Object.keys(this.schema.properties).forEach(function (prop) {
        var schema = _this.schema.properties[prop];

        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path + '.' + prop
        });

        _this.container.appendChild(editor.container);

        _this.childEditors[prop] = editor;
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      this.value = {};
      Object.keys(this.childEditors).forEach(function (prop) {
        _this2.value[prop] = _this2.childEditors[prop].getValue();
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

  function StringEditor() {
    classCallCheck_default()(this, StringEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      var label = this.jedi.theme.getLabel(this.schema.title);
      this.input = this.jedi.theme.getInput('text');
      this.container.appendChild(label);
      this.container.appendChild(this.input);
      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
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
// CONCATENATED MODULE: ./src/validator.js



function validator_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = validator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function validator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validator_arrayLikeToArray(o, minLen); }

function validator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = [function (schema, value, path) {
      console.log(path, schema["const"], value);

      if (schema["const"] && schema["const"] !== value) {
        return {
          message: 'error const',
          path: path
        };
      }

      return false;
    }];
  }
  /**
   * Adds a validator function
   */


  createClass_default()(Validator, [{
    key: "addValidator",
    value: function addValidator(validator) {
      this.validators.unshift(validator);
    }
    /**
     * returns the first editor class that matches the passed schema.
     */

  }, {
    key: "validate",
    value: function validate(schema, value, path) {
      var errors = [];

      var _iterator = validator_createForOfIteratorHelper(this.validators),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var validator = _step.value;
          var error = validator(schema, value, path);
          console.log(error);

          if (error) {
            errors.push(error);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return errors;
    }
  }]);

  return Validator;
}();

/* harmony default export */ var validator = (validator_Validator);
// CONCATENATED MODULE: ./src/index.js






var src_Jedi = /*#__PURE__*/function () {
  function Jedi(config) {
    classCallCheck_default()(this, Jedi);

    this.theme = new theme();
    this.resolver = new resolver();
    this.validator = new validator();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2FycmF5LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLWNoZWNrYm94LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9ib29sZWFuLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwidGV4dCIsImJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibGFiZWwiLCJ0eXBlIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwic2VsZWN0IiwiZm9yRWFjaCIsInZhbHVlIiwiaW5kZXgiLCJvcHRpb24iLCJhcHBlbmRDaGlsZCIsIkVkaXRvciIsImNvbmZpZyIsImplZGkiLCJzY2hlbWEiLCJ1bmRlZmluZWQiLCJwYXRoIiwiY29udGFpbmVyIiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInNldENvbnRhaW5lciIsImJ1aWxkIiwic2V0RGVmYXVsdFZhbHVlIiwicmVnaXN0ZXIiLCJ0aGVtZSIsImdldENvbnRhaW5lciIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsInNldFZhbHVlIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJnZXRWYWx1ZSIsIm5ld1ZhbHVlIiwiaW5pdGlhbCIsInNhbml0aXplIiwiY3VycmVudFZhbHVlIiwib25DaGFuZ2UiLCJyZWZyZXNoVUkiLCJjb25zb2xlIiwibG9nIiwidW5yZWdpc3RlciIsIkFycmF5RWRpdG9yIiwiZ2V0TGFiZWwiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHJvcCIsInB1c2giLCJCb29sZWFuRWRpdG9yIiwiQm9vbGVhbiIsIkJvb2xlYW5DaGVja2JveCIsInRpdGxlIiwiZ2V0SW5wdXQiLCJjaGVja2VkIiwiQm9vbGVhblNlbGVjdCIsImdldFNlbGVjdCIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXMiLCJTdHJpbmdFZGl0b3IiLCJTdHJpbmciLCJSZXNvbHZlciIsInJlc29sdmVycyIsImZvcm1hdCIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJlcnJvciIsIkplZGkiLCJyb290IiwiZWRpdG9ycyIsImxvYWRFZGl0b3JzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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OztXQUVELG1CQUFXZixJQUFYLEVBQWlCO0FBQ2YsYUFBTyxLQUFLK0QsT0FBTCxDQUFhL0QsSUFBYixDQUFQO0FBQ0Q7Ozs7OztBQUdZNkQsaUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lIHtcbiAgZ2V0QnV0dG9uICh0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldExhYmVsICh0ZXh0KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAodHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscykge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZFxuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoIHx8ICdyb290J1xuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgdmFsdWUgaW4gdGhlIHByb3BlcnR5IFwiZGVmYXVsdFwiIGlzIHNldCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEuZGVmYXVsdCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSB2YWx1ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYSwgdGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnBhdGgpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWRpdG9yIHZhbHVlIGFuZCBjYWxscyByZWZyZXNoVUkgcmlnaHQgYWZ0ZXIuIFRoZSBvbkNoYW5nZSBtZXRob2RcbiAgICogd2lsbCBiZSBjYWxsZWQgaWYgdGhlIG5ldyB2YWx1ZSBpcyBub3QgYW4gaW5pdGlhbCBvciBkZWZhdWx0IHZhbHVlIGFuZCB0aGVcbiAgICogbmV3IHZhbHVlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCBpbml0aWFsKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCFpbml0aWFsICYmIGN1cnJlbnRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuICAgIHRoaXMudmFsaWRhdGUoKVxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZScpXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCgnYXJyYXknKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2FkZCcpXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgT2JqZWN0LmtleXModGhpcy5jaGlsZEVkaXRvcnMpLmxlbmd0aFxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1tlZGl0b3IucGF0aF0gPSBlZGl0b3JcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0gW11cbiAgICBPYmplY3Qua2V5cyh0aGlzLmNoaWxkRWRpdG9ycykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIHRoaXMudmFsdWUucHVzaCh0aGlzLmNoaWxkRWRpdG9yc1twcm9wXS5nZXRWYWx1ZSgpKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5DaGVja2JveCBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwodGhpcy5zY2hlbWEudGl0bGUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCgnY2hlY2tib3gnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuQ2hlY2tib3hcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhblNlbGVjdCBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwodGhpcy5zY2hlbWEudGl0bGUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gWycnLCAnMSddXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy52YWx1ZSA/ICcxJyA6ICcnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhblNlbGVjdFxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCgnb2JqZWN0JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdXG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgcHJvcFxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1twcm9wXSA9IGVkaXRvclxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHt9XG4gICAgT2JqZWN0LmtleXModGhpcy5jaGlsZEVkaXRvcnMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICB0aGlzLnZhbHVlW3Byb3BdID0gdGhpcy5jaGlsZEVkaXRvcnNbcHJvcF0uZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KCd0ZXh0JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5DaGVja2JveCBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1jaGVja2JveCdcbmltcG9ydCBCb29sZWFuU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLXNlbGVjdCdcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhblNlbGVjdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmICh0eXBlb2YgZWRpdG9yQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlclxuIiwiY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlcnJvciBvYmplY3QgaWYgdGhlIHRoZSB2YWxpZGF0aW9uIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtcbiAgICAgIChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhdGgsIHNjaGVtYS5jb25zdCwgdmFsdWUpXG4gICAgICAgIGlmIChzY2hlbWEuY29uc3QgJiYgc2NoZW1hLmNvbnN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnZXJyb3IgY29uc3QnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yICh2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMudW5zaGlmdCh2YWxpZGF0b3IpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHZhbGlkYXRlIChzY2hlbWEsIHZhbHVlLCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiB0aGlzLnZhbGlkYXRvcnMpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdG9yKHNjaGVtYSwgdmFsdWUsIHBhdGgpXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIC8vIHRvZG8gZGVsZXRlP1xuICB9XG5cbiAgbG9hZEVkaXRvcnMgKCkge1xuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QuY29udGFpbmVyKVxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktbG9hZGVkJylcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIC8vIHRvZG8gZXhwYW5kIGRlZnNcbiAgICByZXR1cm4gbmV3ICh0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnLnNjaGVtYSkpKGNvbmZpZylcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290LmdldFZhbHVlKClcbiAgfVxuXG4gIGdldEVkaXRvciAocGF0aCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvcnNbcGF0aF1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKZWRpXG4iXSwic291cmNlUm9vdCI6IiJ9