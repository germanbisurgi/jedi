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

        radio.addEventListener('change', function () {
          console.log('radio change');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZSIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBhdGgiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RvciIsImVycm9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsInRleHQiLCJidXR0b24iLCJsYWJlbFRleHQiLCJsYWJlbCIsInNldEF0dHJpYnV0ZXMiLCJpbnB1dCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJyYWRpb0dyb3VwTmFtZSIsInJhZGlvR3JvdXAiLCJnZXRDb250YWluZXIiLCJ2YWx1ZSIsImluZGV4IiwiZ2V0TGFiZWwiLCJyYWRpbyIsImdldElucHV0IiwidHlwZSIsImlkIiwibmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJvcHRpb24iLCJvdXRwdXQiLCJVdGlscyIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYSIsImIiLCJpc051bWJlciIsIk1hdGgiLCJmbG9vciIsIkFycmF5IiwiaXNBcnJheSIsImlzTnVsbCIsIkVkaXRvciIsImNvbmZpZyIsImplZGkiLCJzY2hlbWEiLCJ1bmRlZmluZWQiLCJwYXJlbnQiLCJkZWJ1ZyIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwiZ2V0RGVidWdDb250YWluZXIiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJkZWZhdWxJc0RlZmluZWQiLCJ1dGlscyIsImlzU2V0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsInRyaWdnZXJzQ2hhbmdlIiwic2FuaXRpemUiLCJvbkNoYW5nZSIsInJlZnJlc2hVSSIsInJlZnJlc2hEZWJ1ZyIsImdldFZhbHVlIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsIm9uQ2hpbGRFZGl0b3JDaGFuZ2UiLCJ1bnJlZ2lzdGVyIiwiQXJyYXlFZGl0b3IiLCJ0aXRsZSIsImFkZEJ0biIsImdldEJ1dHRvbiIsImFkZEl0ZW0iLCJpdGVtRWRpdG9yIiwiY3JlYXRlRWRpdG9yIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtSW5kZXgiLCJOdW1iZXIiLCJnZXRLZXkiLCJjbG9uZSIsImRlbGV0ZUJ0biIsImRlbGV0ZUl0ZW0iLCJtb3ZlVXBCdG4iLCJ0b0luZGV4IiwibW92ZSIsIm1vdmVEb3duQnRuIiwiZnJvbUluZGV4IiwiaXRlbSIsInNwbGljZSIsInRlbXBFZGl0b3IiLCJjcmVhdGVJdGVtRWRpdG9yIiwicHVzaCIsImRlc3Ryb3kiLCJ3aW5kb3ciLCJjb25maXJtIiwiY3VycmVudFZhbHVlIiwiZmlsdGVyIiwiZWRpdG9yIiwiQm9vbGVhbkVkaXRvciIsImNoZWNrZWQiLCJCb29sZWFuIiwiQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IiLCJlbnVtVGl0bGVzIiwiZ2V0U2VsZWN0IiwiQm9vbGVhbkVudW1SYWRpb0VkaXRvciIsImdldFJhZGlvR3JvdXAiLCJyYWRpb0lucHV0cyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzIiwicHJvcCIsImNoaWxkRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsIk51bWJlckVkaXRvciIsIk51bWJlckVudW1TZWxlY3RFZGl0b3IiLCJOdW1iZXJFbnVtUmFkaW9FZGl0b3IiLCJOdWxsRWRpdG9yIiwiUmVzb2x2ZXIiLCJyZXNvbHZlcnMiLCJoYXNGb3JtYXRSYWRpbyIsImlzU3RyaW5nIiwiaGFzRm9ybWF0U2VsZWN0IiwiX2VudW0iLCJoYXNFbnVtQ29uc3RyYWluIiwiaXNOdW1lcmljVHlwZSIsInJlc29sdmVyIiwidW5zaGlmdCIsImVkaXRvckNsYXNzIiwiVmFsaWRhdG9yIiwidmFsaWRhdG9ycyIsInR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaW50ZWdlciIsImlzSW50ZWdlciIsImlzQm9vbGVhbiIsImFycmF5Iiwib2JqZWN0IiwiaXNPYmplY3QiLCJ2YWxpZCIsInVuaXF1ZUl0ZW1zIiwiaXNBcnJheVR5cGUiLCJoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiIsInNlZW4iLCJoYXNEdXBsaWNhdGVkSXRlbXMiLCJpIiwiaW52YWxpZCIsIm1pbkl0ZW1zIiwiaGFzTWluSXRlbXNDb25zdHJhaW4iLCJtYXhJdGVtcyIsImhhc01heEl0ZW1zQ29uc3RyYWluIiwibWluTGVuZ3RoIiwiaXNTdHJpbmdUeXBlIiwiaGFzTWluTGVuZ3RoQ29uc3RyYWluIiwibWF4TGVuZ3RoIiwiaGFzTWF4TGVuZ3RoQ29uc3RyYWluIiwicGF0dGVybiIsImhhc1BhdHRlcm5Db25zdHJhaW4iLCJyZWdleHAiLCJSZWdFeHAiLCJtYXRjaFBhdHRlcm4iLCJ0ZXN0IiwibWluaW11bSIsImV4Y2x1c2l2ZU1pbmltdW0iLCJoYXNNaW5pbXVtQ29uc3RyYWluIiwiaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiIsImZpbmFsTWluaW11bSIsIm1heGltdW0iLCJleGNsdXNpdmVNYXhpbXVtIiwiaGFzTWF4aW11bUNvbnN0cmFpbiIsImhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4iLCJmaW5hbE1heGltdW0iLCJtdWx0aXBsZU9mIiwiaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiIsImlzTXVsdGlwbGVPZiIsIl9jb25zdCIsImhhc0NvbnN0Q29uc3RyYWluIiwidmFsdWVJc05vdEVxdWFsQ29uc3QiLCJ2YWx1ZU5vdEluRW51bSIsInNvbWUiLCJlIiwiSmVkaSIsInJvb3QiLCJlZGl0b3JzIiwibG9hZEVkaXRvcnMiLCJFZGl0b3JDbGFzcyIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QmxLLE1BQU0sQ0FBQ0UsTUFBN0IsQ0FBcEI7QUFDQSxhQUFPLElBQUsrSixXQUFMLENBQWtCakssTUFBbEIsQ0FBUDtBQUNEOzs7V0FFRCxvQkFBWTtBQUNWLGFBQU8sS0FBSzhKLElBQUwsQ0FBVWpJLFFBQVYsRUFBUDtBQUNEOzs7V0FFRCxtQkFBVzNFLElBQVgsRUFBaUI7QUFDZixhQUFPLEtBQUs2TSxPQUFMLENBQWE3TSxJQUFiLENBQVA7QUFDRDs7Ozs7O0FBR1kyTSxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiY2xhc3MgVGhlbWUge1xuICBzZXRBdHRyaWJ1dGVzIChlbGVtZW50LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIGFkZElucHV0RXJyb3IgKGNvbnRhaW5lciwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbnkgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHJlbW92ZUlucHV0RXJyb3IgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHBhdGggPSBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnKVxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ1tkYXRhLXBhdGg9XCInICsgcGF0aCArICdcIl0gPiAuamVkaS1lcnJvci1tZXNzYWdlJ1xuICAgIGNvbnN0IGVycm9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRCdXR0b24gKHRleHQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0RGVidWdDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKVxuICB9XG5cbiAgZ2V0TGFiZWwgKGxhYmVsVGV4dCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMobGFiZWwsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAoYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGlucHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0UmFkaW9Hcm91cCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLmdldENvbnRhaW5lcigpXG5cbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICAgIGZvcjogcmFkaW9Hcm91cE5hbWUgKyAnWycgKyB2YWx1ZSArICddJ1xuICAgICAgfSlcblxuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogcmFkaW9Hcm91cE5hbWUgKyAnWycgKyB2YWx1ZSArICddJyxcbiAgICAgICAgbmFtZTogcmFkaW9Hcm91cE5hbWVcbiAgICAgIH0pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JhZGlvIGNoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICByYWRpb0dyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgcmFkaW9Hcm91cC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICB9KVxuICAgIHJldHVybiByYWRpb0dyb3VwXG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgc2VsZWN0SWQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZWN0SWQpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldE91dHB1dCAoYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMob3V0cHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgVXRpbHMge1xuICBjbG9uZSAodGhpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG4gIH1cblxuICBlcXVhbCAoYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfVxuXG4gIGRpZmZlcmVudCAoYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYilcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuZGVidWcgPSBudWxsXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBidWlsZCBwaXBlbGluZSBvZiB0aGUgZWRpdG9yXG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLnNldENvbnRhaW5lcigpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKVxuICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMoKVxuICAgIHRoaXMucmVnaXN0ZXIoKVxuICB9XG5cbiAgZ2V0S2V5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnNwbGl0KCcuJykucG9wKClcbiAgfVxuXG4gIHNldENvbnRhaW5lciAoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmplZGkudGhlbWUuZ2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIHRoaXMuc2NoZW1hLnR5cGUpXG5cbiAgICBpZiAodGhpcy5qZWRpLmRlYnVnKSB7XG4gICAgICB0aGlzLmRlYnVnID0gdGhpcy5qZWRpLnRoZW1lLmdldERlYnVnQ29udGFpbmVyKClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVidWcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRpZmVuLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKiBJZiBlbnVtIGlzIGRlZmluZWQgYW5kIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkIHNldCB0aGUgZmlyc3QgaXRlbSBvZlxuICAgKiB0aGUgZW51bSBhbHMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgY29uc3QgZGVmYXVsSXNEZWZpbmVkID0gdXRpbHMuaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdClcbiAgICBpZiAoZGVmYXVsSXNEZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCB1bmxlc3MgdHJpZ2dlcnNDaGFuZ2UgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuIFRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWVzLlxuICAgKi9cbiAgc2V0VmFsdWUgKG5ld1ZhbHVlLCB0cmlnZ2Vyc0NoYW5nZSA9IHRydWUpIHtcbiAgICBuZXdWYWx1ZSA9IHRoaXMuc2FuaXRpemUobmV3VmFsdWUpXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlXG5cbiAgICBpZiAodHJpZ2dlcnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB0aGlzLnJlZnJlc2hEZWJ1ZygpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIFVJIG9mIHRoZSBlZGl0b3IgdG8gcmVmbGVjdCBpdCdzIHZhbHVlLiBUaGlzIGlzIG5lY2Vzc2FyeSB3aGVuXG4gICAqIHVzaW5nIHNldFZhbHVlIHRvIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIHJlZnJlc2hEZWJ1ZyAoKSB7XG4gICAgaWYgKHRoaXMuamVkaS5kZWJ1Zykge1xuICAgICAgdGhpcy5kZWJ1Zy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSwgbnVsbCwgMilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLCB0aGlzLmdldFZhbHVlKCksIHRoaXMucGF0aClcbiAgICB0aGlzLmplZGkudGhlbWUucmVtb3ZlSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuamVkaS50aGVtZS5hZGRJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyLCBlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGlsZEVkaXRvckNoYW5nZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hpbGQgZWRpdG9yIGNoYW5nZXMuIFRoaXMgaXMgcmVsZXZhbnQgZm9yIEFycmF5XG4gICAqIGFuZCBPYmplY3QgZWRpdG9ycy5cbiAgICovXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge31cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignYWRkJylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUVkaXRvciAoKSB7XG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGlmIChpdGVtRWRpdG9yLmlucHV0KSB7XG4gICAgICBpdGVtRWRpdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICAgIHZhbHVlW2l0ZW1JbmRleF0gPSB1dGlscy5jbG9uZShpdGVtRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHRoaXMuZ2V0VmFsdWUoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKHZhbHVlLCBmYWxzZSlcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goaXRlbUVkaXRvcilcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoZWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBCb29sZWFuRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRJbnB1dCh7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCb29sZWFuKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LmNoZWNrZWQgPSB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJ3RydWUnXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vYm9vbGVhbidcblxuY2xhc3MgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBleHRlbmRzIEJvb2xlYW5FZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbJ2ZhbHNlJywgJ3RydWUnXVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJhZGlvLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgY29uc3QgcmFkaW8gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE9iamVjdEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gY2hpbGQgZWRpdG9yc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1cbiAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICBwYXRoOiB0aGlzLnBhdGggKyAnLicgKyBwcm9wLFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IuY29udGFpbmVyKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChlZGl0b3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldFZhbHVlICgpIHtcbiAgICB0aGlzLnZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlW2NoaWxkRWRpdG9yLmdldEtleSgpXSA9IGNoaWxkRWRpdG9yLmdldFZhbHVlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgfVxuXG4gIG9uQ2hpbGRFZGl0b3JDaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0ge31cblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGNoaWxkRWRpdG9yKSA9PiB7XG4gICAgICB2YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnY29sb3InLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbW9udGgnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3RpbWUnLCAndXJsJywgJ3dlZWsnXVxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9zdHJpbmcnXG5cbmNsYXNzIFN0cmluZ0VudW1SYWRpb0VkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW1cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEuZW51bVRpdGxlcyB8fCBvcHRpb25WYWx1ZXNcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Hcm91cChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHJhZGlvR3JvdXBOYW1lKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvR3JvdXApXG5cbiAgICAvLyBldmVudHNcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgY29uc3QgcmFkaW8gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgdGhpcy5nZXRWYWx1ZSgpICsgJ1wiXScpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcbiAgICB9KVxuXG4gICAgaWYgKHJhZGlvKSB7XG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bWJlckVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1TZWxlY3RFZGl0b3IgZXh0ZW5kcyBOdW1iZXJFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLmVudW1UaXRsZXMgfHwgb3B0aW9uVmFsdWVzXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuamVkaS50aGVtZS5nZXRSYWRpb0dyb3VwKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgcmFkaW9Hcm91cE5hbWUpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmFkaW9Hcm91cClcblxuICAgIC8vIGV2ZW50c1xuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB0aGlzLmdldFZhbHVlKCkgKyAnXCJdJylcblxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKVxuICAgIH0pXG5cbiAgICBpZiAocmFkaW8pIHtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgTnVsbEVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbEVkaXRvclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgQXJyYXlFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2FycmF5J1xuaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4nXG5pbXBvcnQgQm9vbGVhbkVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QnXG5pbXBvcnQgQm9vbGVhbkVudW1SYWRpb0VkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbi1lbnVtLXJhZGlvJ1xuaW1wb3J0IE9iamVjdEVkaXRvciBmcm9tICcuL2VkaXRvcnMvb2JqZWN0J1xuaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL2VkaXRvcnMvc3RyaW5nJ1xuaW1wb3J0IFN0cmluZ0VudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdCdcbmltcG9ydCBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL2VkaXRvcnMvbnVtYmVyJ1xuaW1wb3J0IE51bWJlckVudW1TZWxlY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdCdcbmltcG9ydCBOdW1iZXJFbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlci1lbnVtLXJhZGlvJ1xuaW1wb3J0IE51bGxFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bGwnXG5cbmNsYXNzIFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlZGl0b3IgY2xhc3MgaWYgdGhlIGNvbmRpdGlvbiBwYXNzXG4gICAgICovXG4gICAgdGhpcy5yZXNvbHZlcnMgPSBbXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAncmFkaW8nXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBjb25zdCBoYXNGb3JtYXRTZWxlY3QgPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAnc2VsZWN0J1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyAmJiBoYXNGb3JtYXRTZWxlY3QpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbkVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICByZXR1cm4gQXJyYXlFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAncmFkaW8nXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgaGFzRW51bUNvbnN0cmFpbiAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgJiYgaGFzRW51bUNvbnN0cmFpbikge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBjb25zdCBoYXNGb3JtYXRSYWRpbyA9IHV0aWxzLmlzU2V0KGZvcm1hdCkgJiYgdXRpbHMuaXNTdHJpbmcoZm9ybWF0KSAmJiBmb3JtYXQgPT09ICdyYWRpbydcbiAgICAgICAgaWYgKGlzTnVtZXJpY1R5cGUgJiYgaGFzRW51bUNvbnN0cmFpbiAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBpZiAoaXNOdW1lcmljVHlwZSAmJiBoYXNFbnVtQ29uc3RyYWluKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmIChpc051bWVyaWNUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdudWxsJykge1xuICAgICAgICAgIHJldHVybiBOdWxsRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHJlc29sdmVyIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRSZXNvbHZlciAocmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlc29sdmVycy51bnNoaWZ0KHJlc29sdmVyKVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGZpcnN0IGVkaXRvciBjbGFzcyB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzY2hlbWEuXG4gICAqL1xuICByZXNvbHZlIChzY2hlbWEpIHtcbiAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICBjb25zdCBlZGl0b3JDbGFzcyA9IHJlc29sdmVyKHNjaGVtYSlcbiAgICAgIGlmICh1dGlscy5pc1NldChlZGl0b3JDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIGVkaXRvckNsYXNzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBhbiBlcnJvciBvYmplY3QgaWYgdGhlIHRoZSB2YWxpZGF0aW9uIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IHtcbiAgICAgIHR5cGU6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgICAgIHN0cmluZzogdmFsdWUgPT4gdXRpbHMuaXNTdHJpbmcodmFsdWUpLFxuICAgICAgICAgIG51bWJlcjogdmFsdWUgPT4gdXRpbHMuaXNOdW1iZXIodmFsdWUpLFxuICAgICAgICAgIGludGVnZXI6IHZhbHVlID0+IHV0aWxzLmlzSW50ZWdlcih2YWx1ZSksXG4gICAgICAgICAgYm9vbGVhbjogdmFsdWUgPT4gdXRpbHMuaXNCb29sZWFuKHZhbHVlKSxcbiAgICAgICAgICBhcnJheTogdmFsdWUgPT4gdXRpbHMuaXNBcnJheSh2YWx1ZSksXG4gICAgICAgICAgb2JqZWN0OiB2YWx1ZSA9PiB1dGlscy5pc09iamVjdCh2YWx1ZSksXG4gICAgICAgICAgbnVsbDogdmFsdWUgPT4gdXRpbHMuaXNOdWxsKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSB0eXBlc1tzY2hlbWEudHlwZV0odmFsdWUpXG5cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBvZiB0eXBlICcgKyBzY2hlbWEudHlwZSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICB1bmlxdWVJdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgdW5pcXVlSXRlbXMgPSBzY2hlbWEudW5pcXVlSXRlbXNcbiAgICAgICAgY29uc3QgaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldCh1bmlxdWVJdGVtcykgJiYgdXRpbHMuaXNCb29sZWFuKHVuaXF1ZUl0ZW1zKVxuICAgICAgICBpZiAoIWhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3Qgc2VlbiA9IHt9XG4gICAgICAgIGxldCBoYXNEdXBsaWNhdGVkSXRlbXMgPSBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gSlNPTi5zdHJpbmdpZnkodmFsdWVbaV0pXG4gICAgICAgICAgaWYgKHNlZW5baXRlbV0pIHtcbiAgICAgICAgICAgIGhhc0R1cGxpY2F0ZWRJdGVtcyA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlZW5baXRlbV0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluICYmIGhhc0R1cGxpY2F0ZWRJdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHVuaXF1ZSBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkl0ZW1zID0gc2NoZW1hLm1pbkl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc01pbkl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluSXRlbXMpICYmIHV0aWxzLmlzTnVtYmVyKG1pbkl0ZW1zKVxuICAgICAgICBpZiAoIWhhc01pbkl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5JdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPCBtaW5JdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IGxlYXN0ICcgKyBtaW5JdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heEl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhJdGVtcyA9IHNjaGVtYS5tYXhJdGVtc1xuICAgICAgICBjb25zdCBoYXNNYXhJdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heEl0ZW1zKSAmJiB1dGlscy5pc051bWJlcihtYXhJdGVtcylcbiAgICAgICAgaWYgKCFoYXNNYXhJdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4SXRlbXNDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoID4gbWF4SXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBtb3N0ICcgKyBtYXhJdGVtcyArICcgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbkxlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gc2NoZW1hLm1pbkxlbmd0aFxuICAgICAgICBjb25zdCBoYXNNaW5MZW5ndGhDb25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5MZW5ndGgpICYmIHV0aWxzLmlzTnVtYmVyKG1pbkxlbmd0aClcbiAgICAgICAgaWYgKCFoYXNNaW5MZW5ndGhDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbkxlbmd0aENvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIG1pbkxlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhMZW5ndGg6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1heExlbmd0aCA9IHNjaGVtYS5tYXhMZW5ndGhcbiAgICAgICAgY29uc3QgaGFzTWF4TGVuZ3RoQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4TGVuZ3RoKSAmJiB1dGlscy5pc051bWJlcihtYXhMZW5ndGgpXG4gICAgICAgIGlmICghaGFzTWF4TGVuZ3RoQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhMZW5ndGhDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IG1vc3QgJyArIG1heExlbmd0aCArICcgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBwYXR0ZXJuOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gc2NoZW1hLnBhdHRlcm5cbiAgICAgICAgY29uc3QgaGFzUGF0dGVybkNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KHBhdHRlcm4pICYmIHV0aWxzLmlzU3RyaW5nKHBhdHRlcm4pXG4gICAgICAgIGlmICghaGFzUGF0dGVybkNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocGF0dGVybilcbiAgICAgICAgY29uc3QgbWF0Y2hQYXR0ZXJuID0gcmVnZXhwLnRlc3QodmFsdWUpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzUGF0dGVybkNvbnN0cmFpbiAmJiAhbWF0Y2hQYXR0ZXJuKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIHRoZSBwYXR0ZXJuOiAnICsgcGF0dGVybixcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5pbXVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgZXhjbHVzaXZlTWluaW11bSA9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtXG4gICAgICAgIGNvbnN0IG1pbmltdW0gPSBzY2hlbWEubWluaW11bVxuICAgICAgICBjb25zdCBoYXNNaW5pbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluaW11bSkgJiYgdXRpbHMuaXNOdW1iZXIobWluaW11bSlcbiAgICAgICAgaWYgKCFoYXNNaW5pbXVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KGV4Y2x1c2l2ZU1pbmltdW0pICYmIGV4Y2x1c2l2ZU1pbmltdW0gPT09IHRydWVcbiAgICAgICAgY29uc3QgZmluYWxNaW5pbXVtID0gaGFzRXhjbHVzaXZlTWluaW11bUNvbnN0cmFpbiA/IG1pbmltdW0gKyAxIDogbWluaW11bVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbmltdW1Db25zdHJhaW4gJiYgdmFsdWUgPCBmaW5hbE1pbmltdW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbGVhc3QgJyArIGZpbmFsTWluaW11bSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhpbXVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgZXhjbHVzaXZlTWF4aW11bSA9IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtXG4gICAgICAgIGNvbnN0IG1heGltdW0gPSBzY2hlbWEubWF4aW11bVxuICAgICAgICBjb25zdCBoYXNNYXhpbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4aW11bSkgJiYgdXRpbHMuaXNOdW1iZXIobWF4aW11bSlcbiAgICAgICAgaWYgKCFoYXNNYXhpbXVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KGV4Y2x1c2l2ZU1heGltdW0pICYmIGV4Y2x1c2l2ZU1heGltdW0gPT09IHRydWVcbiAgICAgICAgY29uc3QgZmluYWxNYXhpbXVtID0gaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiA/IG1heGltdW0gLSAxIDogbWF4aW11bVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heGltdW1Db25zdHJhaW4gJiYgdmFsdWUgPiBmaW5hbE1heGltdW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbGVzcyB0aGFuICcgKyBmaW5hbE1heGltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbXVsdGlwbGVPZjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG11bHRpcGxlT2YgPSBzY2hlbWEubXVsdGlwbGVPZlxuICAgICAgICBjb25zdCBoYXNNdWx0aXBsZU9mQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobXVsdGlwbGVPZikgJiYgdXRpbHMuaXNOdW1iZXIobXVsdGlwbGVPZilcbiAgICAgICAgaWYgKCFoYXNNdWx0aXBsZU9mQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaXNNdWx0aXBsZU9mID0gKHZhbHVlIC8gbXVsdGlwbGVPZiA9PT0gTWF0aC5mbG9vcih2YWx1ZSAvIG11bHRpcGxlT2YpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc011bHRpcGxlT2ZDb25zdHJhaW4gJiYgIWlzTXVsdGlwbGVPZilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgbXVsdGlwbGVPZixcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb25zdDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgX2NvbnN0ID0gc2NoZW1hLmNvbnN0XG4gICAgICAgIGNvbnN0IGhhc0NvbnN0Q29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2NvbnN0KVxuICAgICAgICBpZiAoIWhhc0NvbnN0Q29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgdmFsdWVJc05vdEVxdWFsQ29uc3QgPSAoSlNPTi5zdHJpbmdpZnkodmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShfY29uc3QpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc0NvbnN0Q29uc3RyYWluICYmIHZhbHVlSXNOb3RFcXVhbENvbnN0KVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdmFsdWU6ICcgKyBfY29uc3QsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgZW51bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGlmICghaGFzRW51bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHZhbHVlTm90SW5FbnVtID0gIV9lbnVtLnNvbWUoZSA9PiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGUpKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc0VudW1Db25zdHJhaW4gJiYgdmFsdWVOb3RJbkVudW0pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ1ZhbHVlIG11c3QgYmUgb25lIG9mIHRoZSBlbnVtZXJhdGVkIHZhbHVlcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICovXG4gIGFkZFZhbGlkYXRvciAobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzW25hbWVdID0gdmFsaWRhdG9yXG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBpdCdzIHNjaGVtYVxuICAgKi9cbiAgdmFsaWRhdGUgKHNjaGVtYSwgdmFsdWUsIHBhdGgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgIE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdG9ycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNba2V5XVxuICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0b3Ioc2NoZW1hLCB2YWx1ZSwgcGF0aClcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0b3JcbiIsImltcG9ydCBUaGVtZSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IFJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInXG5pbXBvcnQgVmFsaWRhdG9yIGZyb20gJy4vdmFsaWRhdG9yJ1xuXG5jbGFzcyBKZWRpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKVxuICAgIHRoaXMucmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoKVxuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpXG4gICAgdGhpcy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyXG4gICAgdGhpcy5kZWJ1ZyA9IGNvbmZpZy5kZWJ1ZyB8fCBmYWxzZVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIGxvYWRFZGl0b3JzICgpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWxvYWRlZCcpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICAvLyB0b2RvIGV4cGFuZCBkZWZzXG4gICAgY29uc3QgRWRpdG9yQ2xhc3MgPSB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29uZmlnLnNjaGVtYSlcbiAgICByZXR1cm4gbmV3IChFZGl0b3JDbGFzcykoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=