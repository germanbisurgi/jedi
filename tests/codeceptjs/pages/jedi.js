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

var setPrototypeOf = __webpack_require__(6);

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

var _typeof = __webpack_require__(5)["default"];

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
/* 6 */
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
    key: "setAttributes",
    value: function setAttributes(element) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(attributes).forEach(function (key) {
        element.setAttribute(key, attributes[key]);
      });
    }
    /**
     * Adds an error message to the specified editor container.
     */

  }, {
    key: "addInputError",
    value: function addInputError(container, message) {
      var error = document.createElement('p');
      error.classList.add('jedi-error-message');
      error.textContent = message;
      container.appendChild(error);
    }
    /**
     * Removes any error message from the specified editor container.
     */

  }, {
    key: "removeInputError",
    value: function removeInputError(container) {
      var path = container.getAttribute('data-path');
      var selector = '[data-path="' + path + '"] > .jedi-error-message';
      var errors = container.querySelectorAll(selector);
      errors.forEach(function (error) {
        container.removeChild(error);
      });
    }
  }, {
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
    key: "getDebugContainer",
    value: function getDebugContainer() {
      return document.createElement('pre');
    }
  }, {
    key: "getLabel",
    value: function getLabel(labelText) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var label = document.createElement('label');
      label.textContent = labelText;
      this.setAttributes(label, attributes);
      return label;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = document.createElement('input');
      this.setAttributes(input, attributes);
      return input;
    }
  }, {
    key: "getRadioGroup",
    value: function getRadioGroup(optionValues, optionsLabels, radioGroupName) {
      var _this = this;

      var radioGroup = this.getContainer();
      optionValues.forEach(function (value, index) {
        var labelText = optionsLabels[index];

        var label = _this.getLabel(labelText, {
          "for": radioGroupName + '[' + value + ']'
        });

        var radio = _this.getInput({
          type: 'radio',
          value: value,
          id: radioGroupName + '[' + value + ']',
          name: radioGroupName
        });

        radioGroup.appendChild(label);
        radioGroup.appendChild(radio);
      });
      return radioGroup;
    }
  }, {
    key: "getSelect",
    value: function getSelect(optionValues, optionsLabels, selectId) {
      var select = document.createElement('select');
      select.setAttribute('id', selectId);
      optionValues.forEach(function (value, index) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.textContent = optionsLabels[index];
        select.appendChild(option);
      });
      return select;
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var output = document.createElement('output');
      this.setAttributes(output, attributes);
      return output;
    }
  }]);

  return Theme;
}();

/* harmony default export */ var theme = (theme_Theme);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils.js




var utils_Utils = /*#__PURE__*/function () {
  function Utils() {
    classCallCheck_default()(this, Utils);
  }

  createClass_default()(Utils, [{
    key: "clone",
    value: function clone(thing) {
      return JSON.parse(JSON.stringify(thing));
    }
  }, {
    key: "equal",
    value: function equal(a, b) {
      return JSON.stringify(a) === JSON.stringify(b);
    }
  }, {
    key: "different",
    value: function different(a, b) {
      return JSON.stringify(a) !== JSON.stringify(b);
    }
  }, {
    key: "isSet",
    value: function isSet(value) {
      return typeof value !== 'undefined';
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: "isInteger",
    value: function isInteger(value) {
      return this.isNumber(value) && value === Math.floor(value);
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: "isBoolean",
    value: function isBoolean(value) {
      return typeof value === 'boolean';
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return Array.isArray(value);
    }
  }, {
    key: "isObject",
    value: function isObject(value) {
      return !this.isNull(value) && !this.isArray(value) && typeof_default()(value) === 'object';
    }
  }, {
    key: "isNull",
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: "getSchemaEnumTitles",
    value: function getSchemaEnumTitles(schema) {
      return schema && schema.options && schema.options.enumTitles && this.isArray(schema.options.enumTitles) ? schema.options.enumTitles : false;
    }
  }, {
    key: "getSchemaEnum",
    value: function getSchemaEnum(schema) {
      return schema && schema["enum"] && this.isArray(schema["enum"]) ? schema["enum"] : false;
    }
  }, {
    key: "getSchemaTitle",
    value: function getSchemaTitle(schema) {
      return schema && schema.title ? schema.title : '';
    }
  }, {
    key: "hasNumericType",
    value: function hasNumericType(schema) {
      return schema.type === 'number' || schema.type === 'integer';
    }
  }, {
    key: "hasFormatRadio",
    value: function hasFormatRadio(schema) {
      return schema.format && schema.format === 'radio';
    }
  }, {
    key: "hasFormatSelect",
    value: function hasFormatSelect(schema) {
      return schema.format && schema.format === 'select';
    }
  }]);

  return Utils;
}();

/* harmony default export */ var utils = (new utils_Utils());
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
    this.value = config.value || undefined;
    this.path = config.path || 'root';
    this.parent = config.parent || null;
    this.container = null;
    this.debug = null;
    this.childEditors = [];
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
      this.showValidationErrors();
      this.register();
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.path.split('.').pop();
    }
  }, {
    key: "setContainer",
    value: function setContainer() {
      this.container = this.jedi.theme.getContainer();
      this.container.setAttribute('data-path', this.path);
      this.container.setAttribute('data-type', this.schema.type);

      if (this.jedi.debug) {
        this.debug = this.jedi.theme.getDebugContainer();
        this.container.appendChild(this.debug);
      }
    }
    /**
     * build the editor's user interface
     */

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
     * If schema.default is not difen, sets an initial value based on it's type.
     * If enum is defined and schema.default is not defined set the first item of
     * the enum als the default value.
     */

  }, {
    key: "setDefaultValue",
    value: function setDefaultValue() {
      var value;
      if (this.schema.type === 'boolean') value = false;
      if (this.schema.type === 'number') value = 0.0;
      if (this.schema.type === 'integer') value = 0;
      if (this.schema.type === 'string') value = '';
      if (this.schema.type === 'object') value = {};
      if (this.schema.type === 'array') value = [];
      var defaulIsDefined = utils.isSet(this.schema["default"]);

      if (defaulIsDefined) {
        value = this.schema["default"];
      }

      this.setValue(value, false);
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
     * will be called unless triggersChange is explicitly set to false. This is
     * useful for initial or default values.
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var triggersChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      newValue = this.sanitize(newValue);
      this.value = newValue;

      if (triggersChange) {
        this.onChange();
      }

      this.refreshUI();
      this.refreshDebug();
      this.showValidationErrors();
    }
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshUI",
    value: function refreshUI() {}
    /**
     * Refresh the UI of the editor to reflect it's value. This is necessary when
     * using setValue to set the value programmatically.
     */

  }, {
    key: "refreshDebug",
    value: function refreshDebug() {
      if (this.jedi.debug) {
        this.debug.textContent = JSON.stringify(this.getValue(), null, 2);
      }
    }
    /**
     * Shows validation messages in the editor container.
     */

  }, {
    key: "showValidationErrors",
    value: function showValidationErrors() {
      var _this = this;

      var errors = this.jedi.validator.validate(this.schema, this.getValue(), this.path);
      this.jedi.theme.removeInputError(this.container);
      errors.forEach(function (error) {
        _this.jedi.theme.addInputError(_this.container, error.message);
      });
    }
    /**
     * Fires when the value of the editor changes.
     */

  }, {
    key: "onChange",
    value: function onChange() {
      if (this.parent) {
        this.parent.onChildEditorChange();
      }
    }
    /**
     * Fires when the value of a child editor changes. This is relevant for Array
     * and Object editors.
     */

  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {}
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

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText);
      this.container.appendChild(label); // addBtn

      var addBtn = this.jedi.theme.getButton('add');
      this.container.appendChild(addBtn);
      addBtn.addEventListener('click', function () {
        _this.addItem();
      });
    }
  }, {
    key: "createItemEditor",
    value: function createItemEditor() {
      var _this2 = this;

      var itemEditor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: this.schema.items,
        path: this.path + '.' + this.childEditors.length,
        parent: this
      });
      var itemIndex = Number(itemEditor.getKey());

      if (itemEditor.input) {
        itemEditor.input.addEventListener('change', function () {
          var value = utils.clone(_this2.getValue());
          value[itemIndex] = utils.clone(itemEditor.getValue());

          _this2.setValue(value);
        });
      }

      var deleteBtn = this.jedi.theme.getButton('delete');
      itemEditor.container.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', function () {
        var itemIndex = Number(itemEditor.path.split('.').pop());

        _this2.deleteItem(itemIndex);
      });

      if (this.childEditors.length !== 0) {
        var moveUpBtn = this.jedi.theme.getButton('move up');
        itemEditor.container.appendChild(moveUpBtn);
        moveUpBtn.addEventListener('click', function () {
          var toIndex = itemIndex - 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      if (this.value.length - 1 !== itemIndex) {
        var moveDownBtn = this.jedi.theme.getButton('move down');
        itemEditor.container.appendChild(moveDownBtn);
        moveDownBtn.addEventListener('click', function () {
          var toIndex = itemIndex + 1;

          _this2.move(itemIndex, toIndex);
        });
      }

      return itemEditor;
    }
  }, {
    key: "move",
    value: function move(fromIndex, toIndex) {
      var value = utils.clone(this.getValue());
      var item = value[fromIndex];
      value.splice(fromIndex, 1);
      value.splice(toIndex, 0, item);
      this.setValue(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var tempEditor = this.createItemEditor();
      var value = utils.clone(this.getValue());
      value.push(tempEditor.getValue());
      tempEditor.destroy();
      this.setValue(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemIndex) {
      if (window.confirm('Confirm to delete')) {
        var currentValue = utils.clone(this.getValue());
        var newValue = currentValue.filter(function (item, index) {
          return index !== itemIndex;
        });
        this.setValue(newValue);
      }
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var _this3 = this;

      this.childEditors.forEach(function (editor) {
        _this3.container.removeChild(editor.container);

        editor.destroy();
      });
      this.childEditors = [];
      this.getValue().forEach(function (value) {
        var itemEditor = _this3.createItemEditor();

        itemEditor.setValue(value, false);

        _this3.childEditors.push(itemEditor);
      });
      this.childEditors.forEach(function (editor) {
        _this3.container.appendChild(editor.container);
      });
    }
  }]);

  return ArrayEditor;
}(editor);

/* harmony default export */ var editors_array = (array_ArrayEditor);
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
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      this.input = this.jedi.theme.getInput({
        type: 'checkbox',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.checked);
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
      this.input.checked = this.value;
    }
  }]);

  return BooleanEditor;
}(editor);

/* harmony default export */ var editors_boolean = (boolean_BooleanEditor);
// CONCATENATED MODULE: ./src/editors/boolean-enum-select.js






function boolean_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = boolean_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_enum_select_BooleanEnumSelectEditor = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanEnumSelectEditor, _BooleanEditor);

  var _super = boolean_enum_select_createSuper(BooleanEnumSelectEditor);

  function BooleanEnumSelectEditor() {
    classCallCheck_default()(this, BooleanEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = ['false', 'true'];
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        var value = _this.input.value === 'true';

        _this.setValue(value);
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue() === true ? 'true' : 'false';
    }
  }]);

  return BooleanEnumSelectEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_select = (boolean_enum_select_BooleanEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/boolean-enum-radio.js






function boolean_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = boolean_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function boolean_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var boolean_enum_radio_BooleanEnumRadioEditor = /*#__PURE__*/function (_BooleanEditor) {
  inherits_default()(BooleanEnumRadioEditor, _BooleanEditor);

  var _super = boolean_enum_radio_createSuper(BooleanEnumRadioEditor);

  function BooleanEnumRadioEditor() {
    classCallCheck_default()(this, BooleanEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(BooleanEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = ['false', 'true'];
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var value = radio.value === 'true';

          _this.setValue(value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radioGroupName = this.path;
      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      var value = this.getValue() === true ? 'true' : 'false';
      var radio = this.container.querySelector('[value="' + value + '"]');
      radioInputs.forEach(function (radio) {
        radio.removeAttribute('checked');
      });

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return BooleanEnumRadioEditor;
}(editors_boolean);

/* harmony default export */ var boolean_enum_radio = (boolean_enum_radio_BooleanEnumRadioEditor);
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

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText);
      this.container.appendChild(label); // child editors

      Object.keys(this.schema.properties).forEach(function (prop) {
        var schema = _this.schema.properties[prop];

        var editor = _this.jedi.createEditor({
          jedi: _this.jedi,
          schema: schema,
          path: _this.path + '.' + prop,
          parent: _this
        });

        _this.container.appendChild(editor.container);

        _this.childEditors.push(editor);
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this2 = this;

      this.value = {};
      this.childEditors.forEach(function (childEditor) {
        _this2.value[childEditor.getKey()] = childEditor.getValue();
      });
      return this.value;
    }
  }, {
    key: "onChildEditorChange",
    value: function onChildEditorChange() {
      var value = {};
      this.childEditors.forEach(function (childEditor) {
        value[childEditor.getKey()] = childEditor.getValue();
      });
      this.setValue(value);
    }
  }]);

  return ObjectEditor;
}(editor);

/* harmony default export */ var editors_object = (object_ObjectEditor);
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

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var inputTypes = ['color', 'datetime-local', 'email', 'month', 'search', 'tel', 'text', 'time', 'url', 'week'];
      this.input = this.jedi.theme.getInput({
        type: inputTypes.includes(this.schema.format) ? this.schema.format : 'text',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
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
      this.input.value = this.getValue();
    }
  }]);

  return StringEditor;
}(editor);

/* harmony default export */ var editors_string = (string_StringEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-select.js






function string_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_enum_select_StringEnumSelectEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumSelectEditor, _StringEditor);

  var _super = string_enum_select_createSuper(StringEnumSelectEditor);

  function StringEnumSelectEditor() {
    classCallCheck_default()(this, StringEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }]);

  return StringEnumSelectEditor;
}(editors_string);

/* harmony default export */ var string_enum_select = (string_enum_select_StringEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/string-enum-radio.js






function string_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = string_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function string_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var string_enum_radio_StringEnumRadioEditor = /*#__PURE__*/function (_StringEditor) {
  inherits_default()(StringEnumRadioEditor, _StringEditor);

  var _super = string_enum_radio_createSuper(StringEnumRadioEditor);

  function StringEnumRadioEditor() {
    classCallCheck_default()(this, StringEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(StringEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.setValue(radio.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radioGroupName = this.path;
      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');
      radioInputs.forEach(function (radio) {
        radio.removeAttribute('checked');
      });

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return StringEnumRadioEditor;
}(editors_string);

/* harmony default export */ var string_enum_radio = (string_enum_radio_StringEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/number.js






function number_createSuper(Derived) { var hasNativeReflectConstruct = number_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_NumberEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NumberEditor, _Editor);

  var _super = number_createSuper(NumberEditor);

  function NumberEditor() {
    classCallCheck_default()(this, NumberEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      this.input = this.jedi.theme.getInput({
        type: 'number',
        id: this.path
      });
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(value) {
      return Number(value);
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      this.input.value = this.getValue();
    }
  }]);

  return NumberEditor;
}(editor);

/* harmony default export */ var editors_number = (number_NumberEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-select.js






function number_enum_select_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_enum_select_NumberEnumSelectEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumSelectEditor, _NumberEditor);

  var _super = number_enum_select_createSuper(NumberEnumSelectEditor);

  function NumberEnumSelectEditor() {
    classCallCheck_default()(this, NumberEnumSelectEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumSelectEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path);
      this.container.appendChild(this.input); // events

      this.input.addEventListener('change', function () {
        _this.setValue(_this.input.value);
      });
    }
  }]);

  return NumberEnumSelectEditor;
}(editors_number);

/* harmony default export */ var number_enum_select = (number_enum_select_NumberEnumSelectEditor);
// CONCATENATED MODULE: ./src/editors/number-enum-radio.js






function number_enum_radio_createSuper(Derived) { var hasNativeReflectConstruct = number_enum_radio_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function number_enum_radio_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var number_enum_radio_NumberEnumRadioEditor = /*#__PURE__*/function (_NumberEditor) {
  inherits_default()(NumberEnumRadioEditor, _NumberEditor);

  var _super = number_enum_radio_createSuper(NumberEnumRadioEditor);

  function NumberEnumRadioEditor() {
    classCallCheck_default()(this, NumberEnumRadioEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NumberEnumRadioEditor, [{
    key: "build",
    value: function build() {
      var _this = this;

      // label
      var labelText = utils.getSchemaTitle(this.schema);
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = utils.getSchemaEnum(this.schema);
      var optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues;
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radio) {
        radio.addEventListener('change', function () {
          _this.setValue(radio.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radioGroupName = this.path;
      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');
      radioInputs.forEach(function (radio) {
        radio.removeAttribute('checked');
      });

      if (radio) {
        radio.setAttribute('checked', 'checked');
      }
    }
  }]);

  return NumberEnumRadioEditor;
}(editors_number);

/* harmony default export */ var number_enum_radio = (number_enum_radio_NumberEnumRadioEditor);
// CONCATENATED MODULE: ./src/editors/null.js






function null_createSuper(Derived) { var hasNativeReflectConstruct = null_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function null_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var null_NullEditor = /*#__PURE__*/function (_Editor) {
  inherits_default()(NullEditor, _Editor);

  var _super = null_createSuper(NullEditor);

  function NullEditor() {
    classCallCheck_default()(this, NullEditor);

    return _super.apply(this, arguments);
  }

  createClass_default()(NullEditor, [{
    key: "sanitize",
    value: function sanitize(value) {
      return null;
    }
  }]);

  return NullEditor;
}(editor);

/* harmony default export */ var editors_null = (null_NullEditor);
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
      var hasFormatRadio = utils.hasFormatRadio(schema);

      if (schema.type === 'boolean' && hasFormatRadio) {
        return boolean_enum_radio;
      }
    }, function (schema) {
      var hasFormatSelect = utils.hasFormatSelect(schema);

      if (schema.type === 'boolean' && hasFormatSelect) {
        return boolean_enum_select;
      }
    }, function (schema) {
      if (schema.type === 'boolean') {
        return editors_boolean;
      }
    }, function (schema) {
      if (schema.type === 'object') {
        return editors_object;
      }
    }, function (schema) {
      if (schema.type === 'array') {
        return editors_array;
      }
    }, function (schema) {
      var hasEnumConstrain = utils.getSchemaEnum(schema);
      var hasFormatRadio = utils.hasFormatRadio(schema);

      if (schema.type === 'string' && hasEnumConstrain && hasFormatRadio) {
        return string_enum_radio;
      }
    }, function (schema) {
      var hasEnumConstrain = utils.getSchemaEnum(schema);

      if (schema.type === 'string' && hasEnumConstrain) {
        return string_enum_select;
      }
    }, function (schema) {
      if (schema.type === 'string') {
        return editors_string;
      }
    }, function (schema) {
      var hasNumericType = utils.hasNumericType(schema);
      var hasEnumConstrain = utils.getSchemaEnum(schema);
      var hasFormatRadio = utils.hasFormatRadio(schema);

      if (hasNumericType && hasEnumConstrain && hasFormatRadio) {
        return number_enum_radio;
      }
    }, function (schema) {
      var hasNumericType = utils.hasNumericType(schema);
      var hasEnumConstrain = utils.getSchemaEnum(schema);

      if (hasNumericType && hasEnumConstrain) {
        return number_enum_select;
      }
    }, function (schema) {
      var hasNumericType = utils.hasNumericType(schema);

      if (hasNumericType) {
        return editors_number;
      }
    }, function (schema) {
      if (schema.type === 'null') {
        return editors_null;
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

          if (utils.isSet(editorClass)) {
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

/* harmony default export */ var src_resolver = (resolver_Resolver);
// CONCATENATED MODULE: ./src/validator.js




var validator_Validator = /*#__PURE__*/function () {
  function Validator() {
    classCallCheck_default()(this, Validator);

    /**
     * Functions that return an error object if the the validation condition is not met.
     */
    this.validators = {
      type: function type(schema, value, path) {
        var types = {
          string: function string(value) {
            return utils.isString(value);
          },
          number: function number(value) {
            return utils.isNumber(value);
          },
          integer: function integer(value) {
            return utils.isInteger(value);
          },
          "boolean": function boolean(value) {
            return utils.isBoolean(value);
          },
          array: function array(value) {
            return utils.isArray(value);
          },
          object: function object(value) {
            return utils.isObject(value);
          },
          "null": function _null(value) {
            return utils.isNull(value);
          }
        };
        var valid = types[schema.type](value);

        if (!valid) {
          return {
            message: 'Must be of type ' + schema.type,
            path: path
          };
        }

        return false;
      },
      uniqueItems: function uniqueItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var uniqueItems = schema.uniqueItems;
        var hasUniqueItemsConstrain = utils.isSet(uniqueItems) && utils.isBoolean(uniqueItems);
        if (!hasUniqueItemsConstrain) return;
        var seen = {};
        var hasDuplicatedItems = false;

        for (var i = 0; i < value.length; i++) {
          var item = JSON.stringify(value[i]);

          if (seen[item]) {
            hasDuplicatedItems = true;
            break;
          }

          seen[item] = true;
        }

        var invalid = hasUniqueItemsConstrain && hasDuplicatedItems;

        if (invalid) {
          return {
            message: 'Must have unique items',
            path: path
          };
        }

        return false;
      },
      minItems: function minItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var minItems = schema.minItems;
        var hasMinItemsConstrain = utils.isSet(minItems) && utils.isNumber(minItems);
        if (!hasMinItemsConstrain) return;
        var invalid = hasMinItemsConstrain && value.length < minItems;

        if (invalid) {
          return {
            message: 'Must have at least ' + minItems + ' items',
            path: path
          };
        }

        return false;
      },
      maxItems: function maxItems(schema, value, path) {
        var isArrayType = schema.type === 'array';
        if (!isArrayType) return;
        var maxItems = schema.maxItems;
        var hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems);
        if (!hasMaxItemsConstrain) return;
        var invalid = hasMaxItemsConstrain && value.length > maxItems;

        if (invalid) {
          return {
            message: 'Must have at most ' + maxItems + ' items',
            path: path
          };
        }

        return false;
      },
      minLength: function minLength(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var minLength = schema.minLength;
        var hasMinLengthConstrain = utils.isSet(minLength) && utils.isNumber(minLength);
        if (!hasMinLengthConstrain) return;
        var invalid = hasMinLengthConstrain && value.length < minLength;

        if (invalid) {
          return {
            message: 'Must be at least ' + minLength + ' characters long',
            path: path
          };
        }

        return false;
      },
      maxLength: function maxLength(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var maxLength = schema.maxLength;
        var hasMaxLengthConstrain = utils.isSet(maxLength) && utils.isNumber(maxLength);
        if (!hasMaxLengthConstrain) return;
        var invalid = hasMaxLengthConstrain && value.length > maxLength;

        if (invalid) {
          return {
            message: 'Must be at most ' + maxLength + ' characters long',
            path: path
          };
        }

        return false;
      },
      pattern: function pattern(schema, value, path) {
        var isStringType = schema.type === 'string';
        if (!isStringType) return;
        var pattern = schema.pattern;
        var hasPatternConstrain = utils.isSet(pattern) && utils.isString(pattern);
        if (!hasPatternConstrain) return;
        var regexp = new RegExp(pattern);
        var matchPattern = regexp.test(value);
        var invalid = hasPatternConstrain && !matchPattern;

        if (invalid) {
          return {
            message: 'Must be the pattern: ' + pattern,
            path: path
          };
        }

        return false;
      },
      minimum: function minimum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var exclusiveMinimum = schema.exclusiveMinimum;
        var minimum = schema.minimum;
        var hasMinimumConstrain = utils.isSet(minimum) && utils.isNumber(minimum);
        if (!hasMinimumConstrain) return;
        var hasExclusiveMinimumConstrain = utils.isSet(exclusiveMinimum) && exclusiveMinimum === true;
        var finalMinimum = hasExclusiveMinimumConstrain ? minimum + 1 : minimum;
        var invalid = hasMinimumConstrain && value < finalMinimum;

        if (invalid) {
          return {
            message: 'Must be at least ' + finalMinimum,
            path: path
          };
        }

        return false;
      },
      maximum: function maximum(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var exclusiveMaximum = schema.exclusiveMaximum;
        var maximum = schema.maximum;
        var hasMaximumConstrain = utils.isSet(maximum) && utils.isNumber(maximum);
        if (!hasMaximumConstrain) return;
        var hasExclusiveMaximumConstrain = utils.isSet(exclusiveMaximum) && exclusiveMaximum === true;
        var finalMaximum = hasExclusiveMaximumConstrain ? maximum - 1 : maximum;
        var invalid = hasMaximumConstrain && value > finalMaximum;

        if (invalid) {
          return {
            message: 'Must be less than ' + finalMaximum,
            path: path
          };
        }

        return false;
      },
      multipleOf: function multipleOf(schema, value, path) {
        var isNumericType = schema.type === 'number' || schema.type === 'integer';
        if (!isNumericType) return;
        var multipleOf = schema.multipleOf;
        var hasMultipleOfConstrain = utils.isSet(multipleOf) && utils.isNumber(multipleOf);
        if (!hasMultipleOfConstrain) return;
        var isMultipleOf = value / multipleOf === Math.floor(value / multipleOf);
        var invalid = hasMultipleOfConstrain && !isMultipleOf;

        if (invalid) {
          return {
            message: 'Must be multiple of ' + multipleOf,
            path: path
          };
        }

        return false;
      },
      "const": function _const(schema, value, path) {
        var _const = schema["const"];
        var hasConstConstrain = utils.isSet(_const);
        if (!hasConstConstrain) return;
        var valueIsNotEqualConst = JSON.stringify(value) !== JSON.stringify(_const);
        var invalid = hasConstConstrain && valueIsNotEqualConst;

        if (invalid) {
          return {
            message: 'Must have value: ' + _const,
            path: path
          };
        }

        return false;
      },
      "enum": function _enum(schema, value, path) {
        var _enum = schema["enum"];
        var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
        if (!hasEnumConstrain) return;
        var valueNotInEnum = !_enum.some(function (e) {
          return JSON.stringify(value) === JSON.stringify(e);
        });
        var invalid = hasEnumConstrain && valueNotInEnum;

        if (invalid) {
          return {
            message: 'Value must be one of the enumerated values',
            path: path
          };
        }

        return false;
      }
    };
  }
  /**
   * Adds a validator function
   */


  createClass_default()(Validator, [{
    key: "addValidator",
    value: function addValidator(name, validator) {
      this.validators[name] = validator;
    }
    /**
     * Validates a value against it's schema
     */

  }, {
    key: "validate",
    value: function validate(schema, value, path) {
      var _this = this;

      var errors = [];
      Object.keys(this.validators).forEach(function (key) {
        var validator = _this.validators[key];
        var error = validator(schema, value, path);

        if (error) {
          errors.push(error);
        }
      });
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
    this.resolver = new src_resolver();
    this.validator = new validator();
    this.container = config.container;
    this.debug = config.debug || false;
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
      this.editors[editor.path] = null;
      delete this.editors[editor.path];
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
      var EditorClass = this.resolver.resolve(config.schema);
      return new EditorClass(config);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZSIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBhdGgiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RvciIsImVycm9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsInRleHQiLCJidXR0b24iLCJsYWJlbFRleHQiLCJsYWJlbCIsInNldEF0dHJpYnV0ZXMiLCJpbnB1dCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJyYWRpb0dyb3VwTmFtZSIsInJhZGlvR3JvdXAiLCJnZXRDb250YWluZXIiLCJ2YWx1ZSIsImluZGV4IiwiZ2V0TGFiZWwiLCJyYWRpbyIsImdldElucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInNlbGVjdElkIiwic2VsZWN0Iiwib3B0aW9uIiwib3V0cHV0IiwiVXRpbHMiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImEiLCJiIiwiaXNOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJBcnJheSIsImlzQXJyYXkiLCJpc051bGwiLCJzY2hlbWEiLCJvcHRpb25zIiwiZW51bVRpdGxlcyIsInRpdGxlIiwiZm9ybWF0IiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInVuZGVmaW5lZCIsInBhcmVudCIsImRlYnVnIiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInNldENvbnRhaW5lciIsImJ1aWxkIiwic2V0RGVmYXVsdFZhbHVlIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJyZWdpc3RlciIsInNwbGl0IiwicG9wIiwidGhlbWUiLCJnZXREZWJ1Z0NvbnRhaW5lciIsInJlZ2lzdGVyRWRpdG9yIiwidW5yZWdpc3RlckVkaXRvciIsImRlZmF1bElzRGVmaW5lZCIsInV0aWxzIiwiaXNTZXQiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwidHJpZ2dlcnNDaGFuZ2UiLCJzYW5pdGl6ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwicmVmcmVzaERlYnVnIiwiZ2V0VmFsdWUiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsInJlbW92ZUlucHV0RXJyb3IiLCJhZGRJbnB1dEVycm9yIiwib25DaGlsZEVkaXRvckNoYW5nZSIsInVucmVnaXN0ZXIiLCJBcnJheUVkaXRvciIsImdldFNjaGVtYVRpdGxlIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW0iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJnZXRLZXkiLCJjbG9uZSIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtRWRpdG9yIiwicHVzaCIsImRlc3Ryb3kiLCJ3aW5kb3ciLCJjb25maXJtIiwiY3VycmVudFZhbHVlIiwiZmlsdGVyIiwiZWRpdG9yIiwiQm9vbGVhbkVkaXRvciIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJnZXRTY2hlbWFFbnVtVGl0bGVzIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsImdldFJhZGlvR3JvdXAiLCJyYWRpb0lucHV0cyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzIiwicHJvcCIsImNoaWxkRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsImdldFNjaGVtYUVudW0iLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwiaGFzRm9ybWF0UmFkaW8iLCJoYXNGb3JtYXRTZWxlY3QiLCJoYXNFbnVtQ29uc3RyYWluIiwiaGFzTnVtZXJpY1R5cGUiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIlZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJ0eXBlcyIsInN0cmluZyIsImlzU3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImlzSW50ZWdlciIsImlzQm9vbGVhbiIsImFycmF5Iiwib2JqZWN0IiwiaXNPYmplY3QiLCJ2YWxpZCIsInVuaXF1ZUl0ZW1zIiwiaXNBcnJheVR5cGUiLCJoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaW52YWxpZCIsIm1pbkl0ZW1zIiwiaGFzTWluSXRlbXNDb25zdHJhaW4iLCJtYXhJdGVtcyIsImhhc01heEl0ZW1zQ29uc3RyYWluIiwibWluTGVuZ3RoIiwiaXNTdHJpbmdUeXBlIiwiaGFzTWluTGVuZ3RoQ29uc3RyYWluIiwibWF4TGVuZ3RoIiwiaGFzTWF4TGVuZ3RoQ29uc3RyYWluIiwicGF0dGVybiIsImhhc1BhdHRlcm5Db25zdHJhaW4iLCJyZWdleHAiLCJSZWdFeHAiLCJtYXRjaFBhdHRlcm4iLCJ0ZXN0IiwibWluaW11bSIsImlzTnVtZXJpY1R5cGUiLCJleGNsdXNpdmVNaW5pbXVtIiwiaGFzTWluaW11bUNvbnN0cmFpbiIsImhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4iLCJmaW5hbE1pbmltdW0iLCJtYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImhhc01heGltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluIiwiZmluYWxNYXhpbXVtIiwibXVsdGlwbGVPZiIsImhhc011bHRpcGxlT2ZDb25zdHJhaW4iLCJpc011bHRpcGxlT2YiLCJfY29uc3QiLCJoYXNDb25zdENvbnN0cmFpbiIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwiX2VudW0iLCJ2YWx1ZU5vdEluRW51bSIsInNvbWUiLCJlIiwiSmVkaSIsInJvb3QiLCJlZGl0b3JzIiwibG9hZEVkaXRvcnMiLCJFZGl0b3JDbGFzcyIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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QUFMLENBQWE5RixNQUFNLENBQUNsSCxJQUFwQixJQUE0QixJQUE1QjtBQUNBLGFBQU8sS0FBS2dOLE9BQUwsQ0FBYTlGLE1BQU0sQ0FBQ2xILElBQXBCLENBQVA7QUFDRDs7O1dBRUQsdUJBQWU7QUFDYixXQUFLK00sSUFBTCxHQUFZLEtBQUtySCxZQUFMLENBQWtCO0FBQzVCekMsWUFBSSxFQUFFLElBRHNCO0FBRTVCUCxjQUFNLEVBQUUsS0FBS0E7QUFGZSxPQUFsQixDQUFaO0FBSUEsV0FBS25ELFNBQUwsQ0FBZVEsV0FBZixDQUEyQixLQUFLZ04sSUFBTCxDQUFVeE4sU0FBckM7QUFDQSxXQUFLQSxTQUFMLENBQWVLLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGFBQTdCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxzQkFBY21ELE1BQWQsRUFBc0I7QUFDcEI7QUFDQSxVQUFNa0ssV0FBVyxHQUFHLEtBQUsvRCxRQUFMLENBQWNnRSxPQUFkLENBQXNCbkssTUFBTSxDQUFDTixNQUE3QixDQUFwQjtBQUNBLGFBQU8sSUFBS3dLLFdBQUwsQ0FBa0JsSyxNQUFsQixDQUFQO0FBQ0Q7OztXQUVELG9CQUFZO0FBQ1YsYUFBTyxLQUFLK0osSUFBTCxDQUFVbkksUUFBVixFQUFQO0FBQ0Q7OztXQUVELG1CQUFXNUUsSUFBWCxFQUFpQjtBQUNmLGFBQU8sS0FBS2dOLE9BQUwsQ0FBYWhOLElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHWThNLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZSB7XG4gIHNldEF0dHJpYnV0ZXMgKGVsZW1lbnQsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgYWRkSW5wdXRFcnJvciAoY29udGFpbmVyLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFueSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgcmVtb3ZlSW5wdXRFcnJvciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtcGF0aD1cIicgKyBwYXRoICsgJ1wiXSA+IC5qZWRpLWVycm9yLW1lc3NhZ2UnXG4gICAgY29uc3QgZXJyb3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldEJ1dHRvbiAodGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXREZWJ1Z0NvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpXG4gIH1cblxuICBnZXRMYWJlbCAobGFiZWxUZXh0LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dFxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhsYWJlbCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldElucHV0IChhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoaW5wdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRSYWRpb0dyb3VwIChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHJhZGlvR3JvdXBOYW1lKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuZ2V0Q29udGFpbmVyKClcblxuICAgIG9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgICAgZm9yOiByYWRpb0dyb3VwTmFtZSArICdbJyArIHZhbHVlICsgJ10nXG4gICAgICB9KVxuXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiByYWRpb0dyb3VwTmFtZSArICdbJyArIHZhbHVlICsgJ10nLFxuICAgICAgICBuYW1lOiByYWRpb0dyb3VwTmFtZVxuICAgICAgfSlcblxuICAgICAgcmFkaW9Hcm91cC5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIHJhZGlvR3JvdXAuYXBwZW5kQ2hpbGQocmFkaW8pXG4gICAgfSlcbiAgICByZXR1cm4gcmFkaW9Hcm91cFxuICB9XG5cbiAgZ2V0U2VsZWN0IChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHNlbGVjdElkKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIHNlbGVjdElkKVxuICAgIG9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uc0xhYmVsc1tpbmRleF1cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcbiAgICByZXR1cm4gc2VsZWN0XG4gIH1cblxuICBnZXRPdXRwdXQgKGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKG91dHB1dCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gb3V0cHV0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVcbiIsImNsYXNzIFV0aWxzIHtcbiAgY2xvbmUgKHRoaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpbmcpKVxuICB9XG5cbiAgZXF1YWwgKGEsIGIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG4gIH1cblxuICBkaWZmZXJlbnQgKGEsIGIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgIT09IEpTT04uc3RyaW5naWZ5KGIpXG4gIH1cblxuICBpc1NldCAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xuICB9XG5cbiAgaXNOdW1iZXIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgfVxuXG4gIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG4gIH1cblxuICBpc1N0cmluZyAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICB9XG5cbiAgaXNCb29sZWFuICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICB9XG5cbiAgaXNBcnJheSAodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgfVxuXG4gIGlzT2JqZWN0ICh2YWx1ZSkge1xuICAgIHJldHVybiAhdGhpcy5pc051bGwodmFsdWUpICYmICF0aGlzLmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgfVxuXG4gIGlzTnVsbCAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGxcbiAgfVxuXG4gIGdldFNjaGVtYUVudW1UaXRsZXMgKHNjaGVtYSkge1xuICAgIHJldHVybiAoc2NoZW1hICYmIHNjaGVtYS5vcHRpb25zICYmIHNjaGVtYS5vcHRpb25zLmVudW1UaXRsZXMgJiYgdGhpcy5pc0FycmF5KHNjaGVtYS5vcHRpb25zLmVudW1UaXRsZXMpKSA/IHNjaGVtYS5vcHRpb25zLmVudW1UaXRsZXMgOiBmYWxzZVxuICB9XG5cbiAgZ2V0U2NoZW1hRW51bSAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIChzY2hlbWEgJiYgc2NoZW1hLmVudW0gJiYgdGhpcy5pc0FycmF5KHNjaGVtYS5lbnVtKSkgPyBzY2hlbWEuZW51bSA6IGZhbHNlXG4gIH1cblxuICBnZXRTY2hlbWFUaXRsZSAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIChzY2hlbWEgJiYgc2NoZW1hLnRpdGxlKSA/IHNjaGVtYS50aXRsZSA6ICcnXG4gIH1cblxuICBoYXNOdW1lcmljVHlwZSAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gIH1cblxuICBoYXNGb3JtYXRSYWRpbyAoc2NoZW1hKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5mb3JtYXQgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3JhZGlvJ1xuICB9XG5cbiAgaGFzRm9ybWF0U2VsZWN0IChzY2hlbWEpIHtcbiAgICByZXR1cm4gc2NoZW1hLmZvcm1hdCAmJiBzY2hlbWEuZm9ybWF0ID09PSAnc2VsZWN0J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuZGVidWcgPSBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMucmVnaXN0ZXIoKVxuICB9XG5cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuc2NoZW1hLnR5cGUpXG5cbiAgICBpZiAodGhpcy5qZWRpLmRlYnVnKSB7XG4gICAgICB0aGlzLmRlYnVnID0gdGhpcy5qZWRpLnRoZW1lLmdldERlYnVnQ29udGFpbmVyKClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVidWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRpZmVuLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKiBJZiBlbnVtIGlzIGRlZmluZWQgYW5kIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkIHNldCB0aGUgZmlyc3QgaXRlbSBvZlxuICAgKiB0aGUgZW51bSBhbHMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgY29uc3QgZGVmYXVsSXNEZWZpbmVkID0gdXRpbHMuaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdClcbiAgICBpZiAoZGVmYXVsSXNEZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCB1bmxlc3MgdHJpZ2dlcnNDaGFuZ2UgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuIFRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB0aGlzLnJlZnJlc2hEZWJ1ZygpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hEZWJ1ZyAoKSB7XG4gICAgaWYgKHRoaXMuamVkaS5kZWJ1Zykge1xuICAgICAgdGhpcy5kZWJ1Zy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSwgbnVsbCwgMilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLCB0aGlzLmdldFZhbHVlKCksIHRoaXMucGF0aClcbiAgICB0aGlzLmplZGkudGhlbWUucmVtb3ZlSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuamVkaS50aGVtZS5hZGRJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyLCBlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hpbGQgZWRpdG9yIGNoYW5nZXMuIFRoaXMgaXMgcmVsZXZhbnQgZm9yIEFycmF5XG4gICAqIGFuZCBPYmplY3QgZWRpdG9ycy5cbiAgICovXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge31cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGFkZEJ0blxuICAgIGNvbnN0IGFkZEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2FkZCcpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWRkSXRlbSgpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUl0ZW1FZGl0b3IgKCkge1xuICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWEuaXRlbXMsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyB0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGgsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KVxuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IuZ2V0S2V5KCkpXG5cbiAgICBpZiAoaXRlbUVkaXRvci5pbnB1dCkge1xuICAgICAgaXRlbUVkaXRvci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgICB2YWx1ZVtpdGVtSW5kZXhdID0gdXRpbHMuY2xvbmUoaXRlbUVkaXRvci5nZXRWYWx1ZSgpKVxuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdkZWxldGUnKVxuICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5wYXRoLnNwbGl0KCcuJykucG9wKCkpXG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0oaXRlbUluZGV4KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBtb3ZlVXBCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdtb3ZlIHVwJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVVcEJ0bilcbiAgICAgIG1vdmVVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCAtIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoIC0gMSAhPT0gaXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBtb3ZlRG93bkJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgZG93bicpXG4gICAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlRG93bkJ0bilcbiAgICAgIG1vdmVEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4ICsgMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbUVkaXRvclxuICB9XG5cbiAgbW92ZSAoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgY29uc3QgaXRlbSA9IHZhbHVlW2Zyb21JbmRleF1cbiAgICB2YWx1ZS5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgIHZhbHVlLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBhZGRJdGVtICgpIHtcbiAgICBjb25zdCB0ZW1wRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICB2YWx1ZS5wdXNoKHRlbXBFZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICB0ZW1wRWRpdG9yLmRlc3Ryb3koKVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cblxuICBkZWxldGVJdGVtIChpdGVtSW5kZXgpIHtcbiAgICBpZiAod2luZG93LmNvbmZpcm0oJ0NvbmZpcm0gdG8gZGVsZXRlJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBpdGVtSW5kZXgpXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgZWRpdG9yLmRlc3Ryb3koKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG5cbiAgICB0aGlzLmdldFZhbHVlKCkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1FZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgICAgaXRlbUVkaXRvci5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB1dGlscy5nZXRTY2hlbWFFbnVtVGl0bGVzKHRoaXMuc2NoZW1hKSB8fCBvcHRpb25WYWx1ZXNcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUgPT09ICd0cnVlJ1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBCb29sZWFuRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHV0aWxzLmdldFNjaGVtYUVudW1UaXRsZXModGhpcy5zY2hlbWEpIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgY29uc3QgcmFkaW8gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGNoaWxkIGVkaXRvcnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdXG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgcHJvcCxcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICBvbkNoaWxkRWRpdG9yQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHV0aWxzLmdldFNjaGVtYVRpdGxlKHRoaXMuc2NoZW1hKVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBpbnB1dFR5cGVzID0gWydjb2xvcicsICdkYXRldGltZS1sb2NhbCcsICdlbWFpbCcsICdtb250aCcsICdzZWFyY2gnLCAndGVsJywgJ3RleHQnLCAndGltZScsICd1cmwnLCAnd2VlayddXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiBpbnB1dFR5cGVzLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmZvcm1hdCkgPyB0aGlzLnNjaGVtYS5mb3JtYXQgOiAndGV4dCcsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB1dGlscy5nZXRTY2hlbWFUaXRsZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdXRpbHMuZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdXRpbHMuZ2V0U2NoZW1hRW51bVRpdGxlcyh0aGlzLnNjaGVtYSkgfHwgb3B0aW9uVmFsdWVzXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHV0aWxzLmdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHV0aWxzLmdldFNjaGVtYUVudW1UaXRsZXModGhpcy5zY2hlbWEpIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB0aGlzLmdldFZhbHVlKCkgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB1dGlscy5nZXRTY2hlbWFUaXRsZSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdXRpbHMuZ2V0U2NoZW1hRW51bSh0aGlzLnNjaGVtYSlcbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdXRpbHMuZ2V0U2NoZW1hRW51bVRpdGxlcyh0aGlzLnNjaGVtYSkgfHwgb3B0aW9uVmFsdWVzXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscydcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdXRpbHMuZ2V0U2NoZW1hVGl0bGUodGhpcy5zY2hlbWEpXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHV0aWxzLmdldFNjaGVtYUVudW0odGhpcy5zY2hlbWEpXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHV0aWxzLmdldFNjaGVtYUVudW1UaXRsZXModGhpcy5zY2hlbWEpIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB0aGlzLmdldFZhbHVlKCkgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlZGl0b3IgY2xhc3MgaWYgdGhlIGNvbmRpdGlvbiBwYXNzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHZlcnMgPSBbXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFJhZGlvID0gdXRpbHMuaGFzRm9ybWF0UmFkaW8oc2NoZW1hKVxuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFNlbGVjdCA9IHV0aWxzLmhhc0Zvcm1hdFNlbGVjdChzY2hlbWEpXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nICYmIGhhc0Zvcm1hdFNlbGVjdCkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIHJldHVybiBBcnJheUVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuZ2V0U2NoZW1hRW51bShzY2hlbWEpXG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFJhZGlvID0gdXRpbHMuaGFzRm9ybWF0UmFkaW8oc2NoZW1hKVxuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIGhhc0VudW1Db25zdHJhaW4gJiYgaGFzRm9ybWF0UmFkaW8pIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5nZXRTY2hlbWFFbnVtKHNjaGVtYSlcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBoYXNFbnVtQ29uc3RyYWluKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaGFzTnVtZXJpY1R5cGUgPSB1dGlscy5oYXNOdW1lcmljVHlwZShzY2hlbWEpXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5nZXRTY2hlbWFFbnVtKHNjaGVtYSlcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5oYXNGb3JtYXRSYWRpbyhzY2hlbWEpXG4gICAgICAgIGlmIChoYXNOdW1lcmljVHlwZSAmJiBoYXNFbnVtQ29uc3RyYWluICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBoYXNOdW1lcmljVHlwZSA9IHV0aWxzLmhhc051bWVyaWNUeXBlKHNjaGVtYSlcbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmdldFNjaGVtYUVudW0oc2NoZW1hKVxuICAgICAgICBpZiAoaGFzTnVtZXJpY1R5cGUgJiYgaGFzRW51bUNvbnN0cmFpbikge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc051bWVyaWNUeXBlID0gdXRpbHMuaGFzTnVtZXJpY1R5cGUoc2NoZW1hKVxuICAgICAgICBpZiAoaGFzTnVtZXJpY1R5cGUpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgcmV0dXJuIE51bGxFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKHV0aWxzLmlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVycm9yIG9iamVjdCBpZiB0aGUgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3JzID0ge1xuICAgICAgdHlwZTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiB1dGlscy5pc1N0cmluZyh2YWx1ZSksXG4gICAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiB1dGlscy5pc051bWJlcih2YWx1ZSksXG4gICAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gdXRpbHMuaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiB1dGlscy5pc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICAgIGFycmF5OiB2YWx1ZSA9PiB1dGlscy5pc0FycmF5KHZhbHVlKSxcbiAgICAgICAgICBvYmplY3Q6IHZhbHVlID0+IHV0aWxzLmlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgICBudWxsOiB2YWx1ZSA9PiB1dGlscy5pc051bGwodmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlXSh2YWx1ZSlcblxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHVuaXF1ZUl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCB1bmlxdWVJdGVtcyA9IHNjaGVtYS51bmlxdWVJdGVtc1xuICAgICAgICBjb25zdCBoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1dGlscy5pc0Jvb2xlYW4odW5pcXVlSXRlbXMpXG4gICAgICAgIGlmICghaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBzZWVuID0ge31cbiAgICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gJiYgaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5JdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluSXRlbXMgPSBzY2hlbWEubWluSXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWluSXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5JdGVtcykgJiYgdXRpbHMuaXNOdW1iZXIobWluSXRlbXMpXG4gICAgICAgIGlmICghaGFzTWluSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbkl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIG1pbkl0ZW1zICsgJyBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4SXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1heEl0ZW1zID0gc2NoZW1hLm1heEl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc01heEl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4SXRlbXMpICYmIHV0aWxzLmlzTnVtYmVyKG1heEl0ZW1zKVxuICAgICAgICBpZiAoIWhhc01heEl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhJdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIG1heEl0ZW1zICsgJyBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluTGVuZ3RoOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtaW5MZW5ndGggPSBzY2hlbWEubWluTGVuZ3RoXG4gICAgICAgIGNvbnN0IGhhc01pbkxlbmd0aENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbkxlbmd0aCkgJiYgdXRpbHMuaXNOdW1iZXIobWluTGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01pbkxlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluTGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgbWluTGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heExlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gc2NoZW1hLm1heExlbmd0aFxuICAgICAgICBjb25zdCBoYXNNYXhMZW5ndGhDb25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhMZW5ndGgpICYmIHV0aWxzLmlzTnVtYmVyKG1heExlbmd0aClcbiAgICAgICAgaWYgKCFoYXNNYXhMZW5ndGhDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heExlbmd0aENvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgbWF4TGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBzY2hlbWEucGF0dGVyblxuICAgICAgICBjb25zdCBoYXNQYXR0ZXJuQ29uc3RyYWluID0gdXRpbHMuaXNTZXQocGF0dGVybikgJiYgdXRpbHMuaXNTdHJpbmcocGF0dGVybilcbiAgICAgICAgaWYgKCFoYXNQYXR0ZXJuQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBjb25zdCBtYXRjaFBhdHRlcm4gPSByZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNQYXR0ZXJuQ29uc3RyYWluICYmICFtYXRjaFBhdHRlcm4pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBwYXR0ZXJuLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbmltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgY29uc3QgbWluaW11bSA9IHNjaGVtYS5taW5pbXVtXG4gICAgICAgIGNvbnN0IGhhc01pbmltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5pbXVtKSAmJiB1dGlscy5pc051bWJlcihtaW5pbXVtKVxuICAgICAgICBpZiAoIWhhc01pbmltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoZXhjbHVzaXZlTWluaW11bSkgJiYgZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1pbmltdW0gPSBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID8gbWluaW11bSArIDEgOiBtaW5pbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluaW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA8IGZpbmFsTWluaW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgZmluYWxNaW5pbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heGltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW1cbiAgICAgICAgY29uc3QgbWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtXG4gICAgICAgIGNvbnN0IGhhc01heGltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhpbXVtKSAmJiB1dGlscy5pc051bWJlcihtYXhpbXVtKVxuICAgICAgICBpZiAoIWhhc01heGltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkgJiYgZXhjbHVzaXZlTWF4aW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1heGltdW0gPSBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID8gbWF4aW11bSAtIDEgOiBtYXhpbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4aW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA+IGZpbmFsTWF4aW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGZpbmFsTWF4aW11bSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtdWx0aXBsZU9mOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbXVsdGlwbGVPZiA9IHNjaGVtYS5tdWx0aXBsZU9mXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlT2ZDb25zdHJhaW4gPSB1dGlscy5pc1NldChtdWx0aXBsZU9mKSAmJiB1dGlscy5pc051bWJlcihtdWx0aXBsZU9mKVxuICAgICAgICBpZiAoIWhhc011bHRpcGxlT2ZDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiAmJiAhaXNNdWx0aXBsZU9mKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBtdWx0aXBsZU9mLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbnN0OiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfY29uc3QgPSBzY2hlbWEuY29uc3RcbiAgICAgICAgY29uc3QgaGFzQ29uc3RDb25zdHJhaW4gPSB1dGlscy5pc1NldChfY29uc3QpXG4gICAgICAgIGlmICghaGFzQ29uc3RDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KF9jb25zdCkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzQ29uc3RDb25zdHJhaW4gJiYgdmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB2YWx1ZTogJyArIF9jb25zdCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlbnVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKCFoYXNFbnVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgdmFsdWVOb3RJbkVudW0gPSAhX2VudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRW51bUNvbnN0cmFpbiAmJiB2YWx1ZU5vdEluRW51bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVmFsdWUgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy52YWxpZGF0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1trZXldXG4gICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRvcihzY2hlbWEsIHZhbHVlLCBwYXRoKVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLmRlYnVnID0gY29uZmlnLmRlYnVnIHx8IGZhbHNlXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy5yb290ID0gbnVsbFxuICAgIHRoaXMuZWRpdG9ycyA9IHt9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMubG9hZEVkaXRvcnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZWRpdG9yIGluc3RhbmNlIGluIHRoZSBlZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgcmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBlZGl0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBlZGl0b3JzIG9iamVjdFxuICAgKi9cbiAgdW5yZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IG51bGxcbiAgICBkZWxldGUgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXVxuICB9XG5cbiAgbG9hZEVkaXRvcnMgKCkge1xuICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlRWRpdG9yKHtcbiAgICAgIGplZGk6IHRoaXMsXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QuY29udGFpbmVyKVxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2plZGktbG9hZGVkJylcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGVkaXRvciBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgcGFzc2VkIHNjaGVtYSBhbmQgY29uZmlnXG4gICAqL1xuICBjcmVhdGVFZGl0b3IgKGNvbmZpZykge1xuICAgIC8vIHRvZG8gZXhwYW5kIGRlZnNcbiAgICBjb25zdCBFZGl0b3JDbGFzcyA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKVxuICAgIHJldHVybiBuZXcgKEVkaXRvckNsYXNzKShjb25maWcpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICBnZXRFZGl0b3IgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JzW3BhdGhdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==