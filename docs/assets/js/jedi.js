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
    this.parent = config.parent || null;
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
      console.log('editor sanitize', value);
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
// CONCATENATED MODULE: ./src/editors/boolean.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var boolean_BooleanEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(BooleanEditor, _Editor);

  var _super = _createSuper(BooleanEditor);

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

      Object.keys(this.childEditors).forEach(function (prop) {
        console.log(prop, _this3.childEditors[prop].getValue());
        _this3.value[prop] = _this3.childEditors[prop].getValue();
      });
      return this.value;
    }
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
        _this2.value = _this2.input.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwibGFiZWwiLCJ0ZXh0Q29udGVudCIsInR5cGUiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJzZWxlY3QiLCJmb3JFYWNoIiwidmFsdWUiLCJpbmRleCIsIm9wdGlvbiIsImFwcGVuZENoaWxkIiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhdGgiLCJwYXJlbnQiLCJjb250YWluZXIiLCJjaGlsZEVkaXRvcnMiLCJpbml0Iiwic2V0Q29udGFpbmVyIiwiYnVpbGQiLCJzZXREZWZhdWx0VmFsdWUiLCJyZWdpc3RlciIsInRoZW1lIiwiZ2V0Q29udGFpbmVyIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJvbkNoYW5nZSIsInJlZnJlc2hVSSIsImdldFZhbHVlIiwidW5yZWdpc3RlciIsIkJvb2xlYW5FZGl0b3IiLCJCb29sZWFuIiwiQm9vbGVhbkNoZWNrYm94IiwiZ2V0TGFiZWwiLCJ0aXRsZSIsImdldElucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrZWQiLCJCb29sZWFuU2VsZWN0IiwiZ2V0U2VsZWN0IiwiT2JqZWN0RWRpdG9yIiwiT2JqZWN0Iiwia2V5cyIsInByb3BlcnRpZXMiLCJwcm9wIiwiZWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiU3RyaW5nIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJmb3JtYXQiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIkplZGkiLCJyb290IiwiZWRpdG9ycyIsImxvYWRFZGl0b3JzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSw0Rzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLCtHOzs7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dkMsSUFBcEIsSUFBNEJ1QyxNQUE1QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsMEJBQWtCQSxNQUFsQixFQUEwQjtBQUN4QixXQUFLWSxPQUFMLENBQWFaLE1BQU0sQ0FBQ3ZDLElBQXBCLElBQTRCLElBQTVCLENBRHdCLENBRXhCO0FBQ0Q7OztXQUVELHVCQUFlO0FBQ2IsV0FBS2tELElBQUwsR0FBWSxLQUFLVixZQUFMLENBQWtCO0FBQzVCM0MsWUFBSSxFQUFFLElBRHNCO0FBRTVCQyxjQUFNLEVBQUUsS0FBS0E7QUFGZSxPQUFsQixDQUFaO0FBSUEsV0FBS0ksU0FBTCxDQUFlUixXQUFmLENBQTJCLEtBQUt3RCxJQUFMLENBQVVoRCxTQUFyQztBQUNBLFdBQUtBLFNBQUwsQ0FBZW1ELFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGFBQTdCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxzQkFBYzFELE1BQWQsRUFBc0I7QUFDcEI7QUFDQSxhQUFPLEtBQUssS0FBS2tELFFBQUwsQ0FBY1MsT0FBZCxDQUFzQjNELE1BQU0sQ0FBQ0UsTUFBN0IsQ0FBTCxFQUEyQ0YsTUFBM0MsQ0FBUDtBQUNEOzs7V0FFRCxvQkFBWTtBQUNWLGFBQU8sS0FBS3NELElBQUwsQ0FBVTVCLFFBQVYsRUFBUDtBQUNEOzs7V0FFRCxtQkFBV3RCLElBQVgsRUFBaUI7QUFDZixhQUFPLEtBQUttRCxPQUFMLENBQWFuRCxJQUFiLENBQVA7QUFDRDs7Ozs7O0FBR1lpRCxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiY2xhc3MgVGhlbWUge1xuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGFiZWwgKHRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHRcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldElucHV0ICh0eXBlKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldFNlbGVjdCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCJjbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5qZWRpID0gY29uZmlnLmplZGlcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLmlucHV0ID0gbnVsbFxuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcbiAgfVxuXG4gIGJ1aWxkICgpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGRlZmF1bHQgdmFsdWUgaW4gdGhlIHByb3BlcnR5IFwiZGVmYXVsdFwiIGlzIHNldCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEuZGVmYXVsdCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSB2YWx1ZVxuICAgKi9cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coJ2VkaXRvciBzYW5pdGl6ZScsIHZhbHVlKVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuZXcgdmFsdWUgaXMgbm90IGFuIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZSBhbmQgdGhlXG4gICAqIG5ldyB2YWx1ZSBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgaW5pdGlhbCkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlXG5cbiAgICBpZiAoIWluaXRpYWwgJiYgY3VycmVudFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpXG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5yZWZyZXNoVUkoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBlZGl0b3IgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBlZGl0b3IsIGFuZCBldmVyeSByZWZlcmVuY2UgdGhhdCBpdCBpcyBhdHRhY2hlZCB0byBpdC5cbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkNoZWNrYm94IGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KCdjaGVja2JveCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5DaGVja2JveFxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuU2VsZWN0IGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJycsICcxJ11cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gWydmYWxzZScsICd0cnVlJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlID8gJzEnIDogJydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuU2VsZWN0XG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgICB0aGlzLnZhbHVlID0ge31cbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCgnb2JqZWN0JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdXG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgcHJvcFxuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9yc1twcm9wXSA9IGVkaXRvclxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5jaGlsZEVkaXRvcnMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9wLCB0aGlzLmNoaWxkRWRpdG9yc1twcm9wXS5nZXRWYWx1ZSgpKVxuICAgICAgdGhpcy52YWx1ZVtwcm9wXSA9IHRoaXMuY2hpbGRFZGl0b3JzW3Byb3BdLmdldFZhbHVlKClcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZylcbiAgICB0aGlzLnZhbHVlID0gJydcbiAgfVxuXG4gIGJ1aWxkICgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbCh0aGlzLnNjaGVtYS50aXRsZSlcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KCd0ZXh0JylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5DaGVja2JveCBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1jaGVja2JveCdcbmltcG9ydCBCb29sZWFuU2VsZWN0IGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLXNlbGVjdCdcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcblxuY2xhc3MgUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVkaXRvciBjbGFzcyBpZiB0aGUgY29uZGl0aW9uIHBhc3NcbiAgICAgKi9cbiAgICB0aGlzLnJlc29sdmVycyA9IFtcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhblNlbGVjdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuQ2hlY2tib3hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKHR5cGVvZiBlZGl0b3JDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuXG5jbGFzcyBKZWRpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKVxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgLy8gdG9kbyBkZWxldGU/XG4gIH1cblxuICBsb2FkRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgLy8gdG9kbyBleHBhbmQgZGVmc1xuICAgIHJldHVybiBuZXcgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKSkoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=