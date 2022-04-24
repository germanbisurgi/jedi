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
      var labelText = this.schema.title;
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
      var labelText = this.schema.title;
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
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = ['false', 'true'];
      var optionsLabels = this.schema.enumTitles || optionValues;
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
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = ['false', 'true'];
      var optionsLabels = this.schema.enumTitles || optionValues;
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
      var labelText = this.schema.title;
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
      var labelText = this.schema.title;
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
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || optionValues;
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
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || optionValues;
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
      var labelText = this.schema.title;
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
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || optionValues;
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
      var labelText = this.schema.title;
      var label = this.jedi.theme.getLabel(labelText, {
        "for": this.path
      });
      this.container.appendChild(label); // input

      var optionValues = this.schema["enum"];
      var optionsLabels = this.schema.enumTitles || optionValues;
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
      var format = schema.format;
      var hasFormatRadio = utils.isSet(format) && utils.isString(format) && format === 'radio';

      if (schema.type === 'boolean' && hasFormatRadio) {
        return boolean_enum_radio;
      }
    }, function (schema) {
      var format = schema.format;
      var hasFormatSelect = utils.isSet(format) && utils.isString(format) && format === 'select';

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
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
      var format = schema.format;
      var hasFormatRadio = utils.isSet(format) && utils.isString(format) && format === 'radio';

      if (schema.type === 'string' && hasEnumConstrain && hasFormatRadio) {
        return string_enum_radio;
      }
    }, function (schema) {
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);

      if (schema.type === 'string' && hasEnumConstrain) {
        return string_enum_select;
      }
    }, function (schema) {
      if (schema.type === 'string') {
        return editors_string;
      }
    }, function (schema) {
      var isNumericType = schema.type === 'number' || schema.type === 'integer';
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);
      var format = schema.format;
      var hasFormatRadio = utils.isSet(format) && utils.isString(format) && format === 'radio';

      if (isNumericType && hasEnumConstrain && hasFormatRadio) {
        return number_enum_radio;
      }
    }, function (schema) {
      var isNumericType = schema.type === 'number' || schema.type === 'integer';
      var _enum = schema["enum"];
      var hasEnumConstrain = utils.isSet(_enum) && utils.isArray(_enum);

      if (isNumericType && hasEnumConstrain) {
        return number_enum_select;
      }
    }, function (schema) {
      var isNumericType = schema.type === 'number' || schema.type === 'integer';

      if (isNumericType) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZSIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBhdGgiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RvciIsImVycm9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsInRleHQiLCJidXR0b24iLCJsYWJlbFRleHQiLCJsYWJlbCIsInNldEF0dHJpYnV0ZXMiLCJpbnB1dCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJyYWRpb0dyb3VwTmFtZSIsInJhZGlvR3JvdXAiLCJnZXRDb250YWluZXIiLCJ2YWx1ZSIsImluZGV4IiwiZ2V0TGFiZWwiLCJyYWRpbyIsImdldElucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInNlbGVjdElkIiwic2VsZWN0Iiwib3B0aW9uIiwib3V0cHV0IiwiVXRpbHMiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImEiLCJiIiwiaXNOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJBcnJheSIsImlzQXJyYXkiLCJpc051bGwiLCJFZGl0b3IiLCJjb25maWciLCJqZWRpIiwic2NoZW1hIiwidW5kZWZpbmVkIiwicGFyZW50IiwiZGVidWciLCJjaGlsZEVkaXRvcnMiLCJpbml0Iiwic2V0Q29udGFpbmVyIiwiYnVpbGQiLCJzZXREZWZhdWx0VmFsdWUiLCJzaG93VmFsaWRhdGlvbkVycm9ycyIsInJlZ2lzdGVyIiwic3BsaXQiLCJwb3AiLCJ0aGVtZSIsImdldERlYnVnQ29udGFpbmVyIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiZGVmYXVsSXNEZWZpbmVkIiwidXRpbHMiLCJpc1NldCIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJ0cmlnZ2Vyc0NoYW5nZSIsInNhbml0aXplIiwib25DaGFuZ2UiLCJyZWZyZXNoVUkiLCJyZWZyZXNoRGVidWciLCJnZXRWYWx1ZSIsInZhbGlkYXRvciIsInZhbGlkYXRlIiwicmVtb3ZlSW5wdXRFcnJvciIsImFkZElucHV0RXJyb3IiLCJvbkNoaWxkRWRpdG9yQ2hhbmdlIiwidW5yZWdpc3RlciIsIkFycmF5RWRpdG9yIiwidGl0bGUiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImNsb25lIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsIndpbmRvdyIsImNvbmZpcm0iLCJjdXJyZW50VmFsdWUiLCJmaWx0ZXIiLCJlZGl0b3IiLCJCb29sZWFuRWRpdG9yIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJCb29sZWFuRW51bVNlbGVjdEVkaXRvciIsImVudW1UaXRsZXMiLCJnZXRTZWxlY3QiLCJCb29sZWFuRW51bVJhZGlvRWRpdG9yIiwiZ2V0UmFkaW9Hcm91cCIsInJhZGlvSW5wdXRzIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsIk9iamVjdEVkaXRvciIsInByb3BlcnRpZXMiLCJwcm9wIiwiY2hpbGRFZGl0b3IiLCJTdHJpbmdFZGl0b3IiLCJpbnB1dFR5cGVzIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJTdHJpbmciLCJTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIiwiU3RyaW5nRW51bVJhZGlvRWRpdG9yIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bGxFZGl0b3IiLCJSZXNvbHZlciIsInJlc29sdmVycyIsImhhc0Zvcm1hdFJhZGlvIiwiaXNTdHJpbmciLCJoYXNGb3JtYXRTZWxlY3QiLCJfZW51bSIsImhhc0VudW1Db25zdHJhaW4iLCJpc051bWVyaWNUeXBlIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwidHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiaXNJbnRlZ2VyIiwiaXNCb29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJpc09iamVjdCIsInZhbGlkIiwidW5pcXVlSXRlbXMiLCJpc0FycmF5VHlwZSIsImhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJpbnZhbGlkIiwibWluSXRlbXMiLCJoYXNNaW5JdGVtc0NvbnN0cmFpbiIsIm1heEl0ZW1zIiwiaGFzTWF4SXRlbXNDb25zdHJhaW4iLCJtaW5MZW5ndGgiLCJpc1N0cmluZ1R5cGUiLCJoYXNNaW5MZW5ndGhDb25zdHJhaW4iLCJtYXhMZW5ndGgiLCJoYXNNYXhMZW5ndGhDb25zdHJhaW4iLCJwYXR0ZXJuIiwiaGFzUGF0dGVybkNvbnN0cmFpbiIsInJlZ2V4cCIsIlJlZ0V4cCIsIm1hdGNoUGF0dGVybiIsInRlc3QiLCJtaW5pbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImhhc01pbmltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluIiwiZmluYWxNaW5pbXVtIiwibWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJoYXNNYXhpbXVtQ29uc3RyYWluIiwiaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiIsImZpbmFsTWF4aW11bSIsIm11bHRpcGxlT2YiLCJoYXNNdWx0aXBsZU9mQ29uc3RyYWluIiwiaXNNdWx0aXBsZU9mIiwiX2NvbnN0IiwiaGFzQ29uc3RDb25zdHJhaW4iLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsInZhbHVlTm90SW5FbnVtIiwic29tZSIsImUiLCJKZWRpIiwicm9vdCIsImVkaXRvcnMiLCJsb2FkRWRpdG9ycyIsIkVkaXRvckNsYXNzIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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QUFMLENBQVVsSSxRQUFWLEVBQVA7QUFDRDs7O1dBRUQsbUJBQVd4RSxJQUFYLEVBQWlCO0FBQ2YsYUFBTyxLQUFLMk0sT0FBTCxDQUFhM00sSUFBYixDQUFQO0FBQ0Q7Ozs7OztBQUdZeU0saUZBQWYsRSIsImZpbGUiOiJqZWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImNsYXNzIFRoZW1lIHtcbiAgc2V0QXR0cmlidXRlcyAoZWxlbWVudCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBhZGRJbnB1dEVycm9yIChjb250YWluZXIsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2plZGktZXJyb3ItbWVzc2FnZScpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW55IGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICByZW1vdmVJbnB1dEVycm9yIChjb250YWluZXIpIHtcbiAgICBjb25zdCBwYXRoID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJylcbiAgICBjb25zdCBzZWxlY3RvciA9ICdbZGF0YS1wYXRoPVwiJyArIHBhdGggKyAnXCJdID4gLmplZGktZXJyb3ItbWVzc2FnZSdcbiAgICBjb25zdCBlcnJvcnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QnV0dG9uICh0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG5cbiAgZ2V0Q29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIGdldERlYnVnQ29udGFpbmVyICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJylcbiAgfVxuXG4gIGdldExhYmVsIChsYWJlbFRleHQsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGxhYmVsLCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZ2V0SW5wdXQgKGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhpbnB1dCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGdldFJhZGlvR3JvdXAgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5nZXRDb250YWluZXIoKVxuXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxUZXh0ID0gb3B0aW9uc0xhYmVsc1tpbmRleF1cblxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgICBmb3I6IHJhZGlvR3JvdXBOYW1lICsgJ1snICsgdmFsdWUgKyAnXSdcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHJhZGlvID0gdGhpcy5nZXRJbnB1dCh7XG4gICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaWQ6IHJhZGlvR3JvdXBOYW1lICsgJ1snICsgdmFsdWUgKyAnXScsXG4gICAgICAgIG5hbWU6IHJhZGlvR3JvdXBOYW1lXG4gICAgICB9KVxuXG4gICAgICByYWRpb0dyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgcmFkaW9Hcm91cC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICB9KVxuICAgIHJldHVybiByYWRpb0dyb3VwXG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgc2VsZWN0SWQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZWN0SWQpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldE91dHB1dCAoYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMob3V0cHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgVXRpbHMge1xuICBjbG9uZSAodGhpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG4gIH1cblxuICBlcXVhbCAoYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfVxuXG4gIGRpZmZlcmVudCAoYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuZGVidWcgPSBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMucmVnaXN0ZXIoKVxuICB9XG5cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuc2NoZW1hLnR5cGUpXG5cbiAgICBpZiAodGhpcy5qZWRpLmRlYnVnKSB7XG4gICAgICB0aGlzLmRlYnVnID0gdGhpcy5qZWRpLnRoZW1lLmdldERlYnVnQ29udGFpbmVyKClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVidWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRpZmVuLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKiBJZiBlbnVtIGlzIGRlZmluZWQgYW5kIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkIHNldCB0aGUgZmlyc3QgaXRlbSBvZlxuICAgKiB0aGUgZW51bSBhbHMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgY29uc3QgZGVmYXVsSXNEZWZpbmVkID0gdXRpbHMuaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdClcbiAgICBpZiAoZGVmYXVsSXNEZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCB1bmxlc3MgdHJpZ2dlcnNDaGFuZ2UgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuIFRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB0aGlzLnJlZnJlc2hEZWJ1ZygpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hEZWJ1ZyAoKSB7XG4gICAgaWYgKHRoaXMuamVkaS5kZWJ1Zykge1xuICAgICAgdGhpcy5kZWJ1Zy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSwgbnVsbCwgMilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLCB0aGlzLmdldFZhbHVlKCksIHRoaXMucGF0aClcbiAgICB0aGlzLmplZGkudGhlbWUucmVtb3ZlSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuamVkaS50aGVtZS5hZGRJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyLCBlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hpbGQgZWRpdG9yIGNoYW5nZXMuIFRoaXMgaXMgcmVsZXZhbnQgZm9yIEFycmF5XG4gICAqIGFuZCBPYmplY3QgZWRpdG9ycy5cbiAgICovXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge31cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignYWRkJylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUVkaXRvciAoKSB7XG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGlmIChpdGVtRWRpdG9yLmlucHV0KSB7XG4gICAgICBpdGVtRWRpdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICAgIHZhbHVlW2l0ZW1JbmRleF0gPSB1dGlscy5jbG9uZShpdGVtRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHRoaXMuZ2V0VmFsdWUoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgY29uc3QgcmFkaW8gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gY2hpbGQgZWRpdG9yc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1cbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBwcm9wLFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnY29sb3InLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbW9udGgnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3RpbWUnLCAndXJsJywgJ3dlZWsnXVxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW1cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEuZW51bVRpdGxlcyB8fCBvcHRpb25WYWx1ZXNcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Hcm91cChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHJhZGlvR3JvdXBOYW1lKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvR3JvdXApXG5cbiAgICAvLyBldmVudHNcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgY29uc3QgcmFkaW8gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgdGhpcy5nZXRWYWx1ZSgpICsgJ1wiXScpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcbiAgICB9KVxuXG4gICAgaWYgKHJhZGlvKSB7XG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLmVudW1UaXRsZXMgfHwgb3B0aW9uVmFsdWVzXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB0aGlzLmdldFZhbHVlKCkgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlZGl0b3IgY2xhc3MgaWYgdGhlIGNvbmRpdGlvbiBwYXNzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHZlcnMgPSBbXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAncmFkaW8nXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBjb25zdCBoYXNGb3JtYXRTZWxlY3QgPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAnc2VsZWN0J1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyAmJiBoYXNGb3JtYXRTZWxlY3QpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICByZXR1cm4gQXJyYXlFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAncmFkaW8nXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgaGFzRW51bUNvbnN0cmFpbiAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgaGFzRW51bUNvbnN0cmFpbikge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBjb25zdCBoYXNGb3JtYXRSYWRpbyA9IHV0aWxzLmlzU2V0KGZvcm1hdCkgJiYgdXRpbHMuaXNTdHJpbmcoZm9ybWF0KSAmJiBmb3JtYXQgPT09ICdyYWRpbydcbiAgICAgICAgaWYgKGlzTnVtZXJpY1R5cGUgJiYgaGFzRW51bUNvbnN0cmFpbiAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBpZiAoaXNOdW1lcmljVHlwZSAmJiBoYXNFbnVtQ29uc3RyYWluKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmIChpc051bWVyaWNUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudWxsJykge1xuICAgICAgICAgIHJldHVybiBOdWxsRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmICh1dGlscy5pc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlcnJvciBvYmplY3QgaWYgdGhlIHRoZSB2YWxpZGF0aW9uIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IHtcbiAgICAgIHR5cGU6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICAgIHN0cmluZzogdmFsdWUgPT4gdXRpbHMuaXNTdHJpbmcodmFsdWUpLFxuICAgICAgICAgIG51bWJlcjogdmFsdWUgPT4gdXRpbHMuaXNOdW1iZXIodmFsdWUpLFxuICAgICAgICAgIGludGVnZXI6IHZhbHVlID0+IHV0aWxzLmlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgICAgYm9vbGVhbjogdmFsdWUgPT4gdXRpbHMuaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgICAgICBhcnJheTogdmFsdWUgPT4gdXRpbHMuaXNBcnJheSh2YWx1ZSksXG4gICAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiB1dGlscy5pc09iamVjdCh2YWx1ZSksXG4gICAgICAgICAgbnVsbDogdmFsdWUgPT4gdXRpbHMuaXNOdWxsKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZV0odmFsdWUpXG5cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICB1bmlxdWVJdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgdW5pcXVlSXRlbXMgPSBzY2hlbWEudW5pcXVlSXRlbXNcbiAgICAgICAgY29uc3QgaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldCh1bmlxdWVJdGVtcykgJiYgdXRpbHMuaXNCb29sZWFuKHVuaXF1ZUl0ZW1zKVxuICAgICAgICBpZiAoIWhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluICYmIGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkl0ZW1zID0gc2NoZW1hLm1pbkl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc01pbkl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluSXRlbXMpICYmIHV0aWxzLmlzTnVtYmVyKG1pbkl0ZW1zKVxuICAgICAgICBpZiAoIWhhc01pbkl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5JdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPCBtaW5JdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBtaW5JdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heEl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhJdGVtcyA9IHNjaGVtYS5tYXhJdGVtc1xuICAgICAgICBjb25zdCBoYXNNYXhJdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heEl0ZW1zKSAmJiB1dGlscy5pc051bWJlcihtYXhJdGVtcylcbiAgICAgICAgaWYgKCFoYXNNYXhJdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4SXRlbXNDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoID4gbWF4SXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBtYXhJdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbkxlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gc2NoZW1hLm1pbkxlbmd0aFxuICAgICAgICBjb25zdCBoYXNNaW5MZW5ndGhDb25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5MZW5ndGgpICYmIHV0aWxzLmlzTnVtYmVyKG1pbkxlbmd0aClcbiAgICAgICAgaWYgKCFoYXNNaW5MZW5ndGhDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbkxlbmd0aENvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIG1pbkxlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhMZW5ndGg6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1heExlbmd0aCA9IHNjaGVtYS5tYXhMZW5ndGhcbiAgICAgICAgY29uc3QgaGFzTWF4TGVuZ3RoQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4TGVuZ3RoKSAmJiB1dGlscy5pc051bWJlcihtYXhMZW5ndGgpXG4gICAgICAgIGlmICghaGFzTWF4TGVuZ3RoQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhMZW5ndGhDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIG1heExlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBwYXR0ZXJuOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gc2NoZW1hLnBhdHRlcm5cbiAgICAgICAgY29uc3QgaGFzUGF0dGVybkNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KHBhdHRlcm4pICYmIHV0aWxzLmlzU3RyaW5nKHBhdHRlcm4pXG4gICAgICAgIGlmICghaGFzUGF0dGVybkNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgY29uc3QgbWF0Y2hQYXR0ZXJuID0gcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzUGF0dGVybkNvbnN0cmFpbiAmJiAhbWF0Y2hQYXR0ZXJuKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgcGF0dGVybixcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5pbXVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtXG4gICAgICAgIGNvbnN0IG1pbmltdW0gPSBzY2hlbWEubWluaW11bVxuICAgICAgICBjb25zdCBoYXNNaW5pbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluaW11bSkgJiYgdXRpbHMuaXNOdW1iZXIobWluaW11bSlcbiAgICAgICAgaWYgKCFoYXNNaW5pbXVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KGV4Y2x1c2l2ZU1pbmltdW0pICYmIGV4Y2x1c2l2ZU1pbmltdW0gPT09IHRydWVcbiAgICAgICAgY29uc3QgZmluYWxNaW5pbXVtID0gaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiA/IG1pbmltdW0gKyAxIDogbWluaW11bVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbmltdW1Db25zdHJhaW4gJiYgdmFsdWUgPCBmaW5hbE1pbmltdW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGZpbmFsTWluaW11bSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhpbXVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtXG4gICAgICAgIGNvbnN0IG1heGltdW0gPSBzY2hlbWEubWF4aW11bVxuICAgICAgICBjb25zdCBoYXNNYXhpbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4aW11bSkgJiYgdXRpbHMuaXNOdW1iZXIobWF4aW11bSlcbiAgICAgICAgaWYgKCFoYXNNYXhpbXVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KGV4Y2x1c2l2ZU1heGltdW0pICYmIGV4Y2x1c2l2ZU1heGltdW0gPT09IHRydWVcbiAgICAgICAgY29uc3QgZmluYWxNYXhpbXVtID0gaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiA/IG1heGltdW0gLSAxIDogbWF4aW11bVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heGltdW1Db25zdHJhaW4gJiYgdmFsdWUgPiBmaW5hbE1heGltdW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBmaW5hbE1heGltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbXVsdGlwbGVPZjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG11bHRpcGxlT2YgPSBzY2hlbWEubXVsdGlwbGVPZlxuICAgICAgICBjb25zdCBoYXNNdWx0aXBsZU9mQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobXVsdGlwbGVPZikgJiYgdXRpbHMuaXNOdW1iZXIobXVsdGlwbGVPZilcbiAgICAgICAgaWYgKCFoYXNNdWx0aXBsZU9mQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gbXVsdGlwbGVPZiA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIG11bHRpcGxlT2YpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc011bHRpcGxlT2ZDb25zdHJhaW4gJiYgIWlzTXVsdGlwbGVPZilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgbXVsdGlwbGVPZixcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb25zdDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgX2NvbnN0ID0gc2NoZW1hLmNvbnN0XG4gICAgICAgIGNvbnN0IGhhc0NvbnN0Q29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2NvbnN0KVxuICAgICAgICBpZiAoIWhhc0NvbnN0Q29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShfY29uc3QpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc0NvbnN0Q29uc3RyYWluICYmIHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdmFsdWU6ICcgKyBfY29uc3QsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgZW51bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGlmICghaGFzRW51bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHZhbHVlTm90SW5FbnVtID0gIV9lbnVtLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc0VudW1Db25zdHJhaW4gJiYgdmFsdWVOb3RJbkVudW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ1ZhbHVlIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICovXG4gIGFkZFZhbGlkYXRvciAobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzW25hbWVdID0gdmFsaWRhdG9yXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHNjaGVtYSwgdmFsdWUsIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgIE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdG9ycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNba2V5XVxuICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0b3Ioc2NoZW1hLCB2YWx1ZSwgcGF0aClcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdG9yJ1xuXG5jbGFzcyBKZWRpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKVxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoKVxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgdGhpcy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyXG4gICAgdGhpcy5kZWJ1ZyA9IGNvbmZpZy5kZWJ1ZyB8fCBmYWxzZVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIGxvYWRFZGl0b3JzICgpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWxvYWRlZCcpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICAvLyB0b2RvIGV4cGFuZCBkZWZzXG4gICAgY29uc3QgRWRpdG9yQ2xhc3MgPSB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnLnNjaGVtYSlcbiAgICByZXR1cm4gbmV3IChFZGl0b3JDbGFzcykoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=