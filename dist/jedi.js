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

      this.setValue(value, true);
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
    value: function setValue(newValue) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      newValue = this.sanitize(newValue);
      var currentValue = this.getValue();
      this.value = newValue;

      if (!initial && currentValue !== newValue) {
        this.onChange();
      }

      this.refreshUI();
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
        this.parent.onChange();
      }
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

        itemEditor.setValue(value, true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tc2VsZWN0LmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXItZW51bS1yYWRpby5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3Jlc29sdmVyLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGhlbWUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiY29udGFpbmVyIiwibWVzc2FnZSIsImVycm9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBhdGgiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RvciIsImVycm9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsInRleHQiLCJidXR0b24iLCJsYWJlbFRleHQiLCJsYWJlbCIsInNldEF0dHJpYnV0ZXMiLCJpbnB1dCIsIm9wdGlvblZhbHVlcyIsIm9wdGlvbnNMYWJlbHMiLCJyYWRpb0dyb3VwTmFtZSIsInJhZGlvR3JvdXAiLCJnZXRDb250YWluZXIiLCJ2YWx1ZSIsImluZGV4IiwiZ2V0TGFiZWwiLCJyYWRpbyIsImdldElucHV0IiwidHlwZSIsImlkIiwibmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0SWQiLCJzZWxlY3QiLCJvcHRpb24iLCJvdXRwdXQiLCJVdGlscyIsInRoaW5nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaXNOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJBcnJheSIsImlzQXJyYXkiLCJpc051bGwiLCJFZGl0b3IiLCJjb25maWciLCJqZWRpIiwic2NoZW1hIiwidW5kZWZpbmVkIiwicGFyZW50IiwiY2hpbGRFZGl0b3JzIiwiaW5pdCIsInNldENvbnRhaW5lciIsImJ1aWxkIiwic2V0RGVmYXVsdFZhbHVlIiwic2hvd1ZhbGlkYXRpb25FcnJvcnMiLCJyZWdpc3RlciIsInNwbGl0IiwicG9wIiwidGhlbWUiLCJyZWdpc3RlckVkaXRvciIsInVucmVnaXN0ZXJFZGl0b3IiLCJkZWZhdWxJc0RlZmluZWQiLCJ1dGlscyIsImlzU2V0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsImluaXRpYWwiLCJzYW5pdGl6ZSIsImN1cnJlbnRWYWx1ZSIsImdldFZhbHVlIiwib25DaGFuZ2UiLCJyZWZyZXNoVUkiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZSIsInJlbW92ZUlucHV0RXJyb3IiLCJhZGRJbnB1dEVycm9yIiwidW5yZWdpc3RlciIsIkFycmF5RWRpdG9yIiwidGl0bGUiLCJhZGRCdG4iLCJnZXRCdXR0b24iLCJhZGRJdGVtIiwiaXRlbUVkaXRvciIsImNyZWF0ZUVkaXRvciIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbUluZGV4IiwiTnVtYmVyIiwiZ2V0S2V5IiwiY2xvbmUiLCJkZWxldGVCdG4iLCJkZWxldGVJdGVtIiwibW92ZVVwQnRuIiwidG9JbmRleCIsIm1vdmUiLCJtb3ZlRG93bkJ0biIsImZyb21JbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJ0ZW1wRWRpdG9yIiwiY3JlYXRlSXRlbUVkaXRvciIsInB1c2giLCJkZXN0cm95Iiwid2luZG93IiwiY29uZmlybSIsImZpbHRlciIsImVkaXRvciIsIkJvb2xlYW5FZGl0b3IiLCJjaGVja2VkIiwiQm9vbGVhbiIsIkJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIiwiZW51bVRpdGxlcyIsImdldFNlbGVjdCIsIkJvb2xlYW5FbnVtUmFkaW9FZGl0b3IiLCJnZXRSYWRpb0dyb3VwIiwicmFkaW9JbnB1dHMiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwiT2JqZWN0RWRpdG9yIiwicHJvcGVydGllcyIsInByb3AiLCJjaGlsZEVkaXRvciIsIlN0cmluZ0VkaXRvciIsImlucHV0VHlwZXMiLCJpbmNsdWRlcyIsImZvcm1hdCIsIlN0cmluZyIsIlN0cmluZ0VudW1TZWxlY3RFZGl0b3IiLCJTdHJpbmdFbnVtUmFkaW9FZGl0b3IiLCJOdW1iZXJFZGl0b3IiLCJOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIiwiTnVtYmVyRW51bVJhZGlvRWRpdG9yIiwiTnVsbEVkaXRvciIsIlJlc29sdmVyIiwicmVzb2x2ZXJzIiwiaGFzRm9ybWF0UmFkaW8iLCJpc1N0cmluZyIsImhhc0Zvcm1hdFNlbGVjdCIsIl9lbnVtIiwiaGFzRW51bUNvbnN0cmFpbiIsImlzTnVtZXJpY1R5cGUiLCJyZXNvbHZlciIsInVuc2hpZnQiLCJlZGl0b3JDbGFzcyIsIlZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJ0eXBlcyIsInN0cmluZyIsIm51bWJlciIsImludGVnZXIiLCJpc0ludGVnZXIiLCJpc0Jvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwidmFsaWQiLCJ1bmlxdWVJdGVtcyIsImlzQXJyYXlUeXBlIiwiaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4iLCJzZWVuIiwiaGFzRHVwbGljYXRlZEl0ZW1zIiwiaSIsImludmFsaWQiLCJtaW5JdGVtcyIsImhhc01pbkl0ZW1zQ29uc3RyYWluIiwibWF4SXRlbXMiLCJoYXNNYXhJdGVtc0NvbnN0cmFpbiIsIm1pbkxlbmd0aCIsImlzU3RyaW5nVHlwZSIsImhhc01pbkxlbmd0aENvbnN0cmFpbiIsIm1heExlbmd0aCIsImhhc01heExlbmd0aENvbnN0cmFpbiIsInBhdHRlcm4iLCJoYXNQYXR0ZXJuQ29uc3RyYWluIiwicmVnZXhwIiwiUmVnRXhwIiwibWF0Y2hQYXR0ZXJuIiwidGVzdCIsIm1pbmltdW0iLCJleGNsdXNpdmVNaW5pbXVtIiwiaGFzTWluaW11bUNvbnN0cmFpbiIsImhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4iLCJmaW5hbE1pbmltdW0iLCJtYXhpbXVtIiwiZXhjbHVzaXZlTWF4aW11bSIsImhhc01heGltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluIiwiZmluYWxNYXhpbXVtIiwibXVsdGlwbGVPZiIsImhhc011bHRpcGxlT2ZDb25zdHJhaW4iLCJpc011bHRpcGxlT2YiLCJfY29uc3QiLCJoYXNDb25zdENvbnN0cmFpbiIsInZhbHVlSXNOb3RFcXVhbENvbnN0IiwidmFsdWVOb3RJbkVudW0iLCJzb21lIiwiZSIsIkplZGkiLCJyb290IiwiZWRpdG9ycyIsImxvYWRFZGl0b3JzIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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QUFDZixhQUFPLEtBQUt1TSxPQUFMLENBQWF2TSxJQUFiLENBQVA7QUFDRDs7Ozs7O0FBR1lxTSxpRkFBZixFIiwiZmlsZSI6ImplZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKZWRpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiY2xhc3MgVGhlbWUge1xuICBzZXRBdHRyaWJ1dGVzIChlbGVtZW50LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIGFkZElucHV0RXJyb3IgKGNvbnRhaW5lciwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnamVkaS1lcnJvci1tZXNzYWdlJylcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbnkgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHJlbW92ZUlucHV0RXJyb3IgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHBhdGggPSBjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnKVxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ1tkYXRhLXBhdGg9XCInICsgcGF0aCArICdcIl0gPiAuamVkaS1lcnJvci1tZXNzYWdlJ1xuICAgIGNvbnN0IGVycm9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRCdXR0b24gKHRleHQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cblxuICBnZXRDb250YWluZXIgKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG5cbiAgZ2V0TGFiZWwgKGxhYmVsVGV4dCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMobGFiZWwsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cblxuICBnZXRJbnB1dCAoYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVzKGlucHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZ2V0UmFkaW9Hcm91cCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLmdldENvbnRhaW5lcigpXG5cbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFRleHQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICAgIGZvcjogcmFkaW9Hcm91cE5hbWUgKyAnWycgKyB2YWx1ZSArICddJ1xuICAgICAgfSlcblxuICAgICAgY29uc3QgcmFkaW8gPSB0aGlzLmdldElucHV0KHtcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpZDogcmFkaW9Hcm91cE5hbWUgKyAnWycgKyB2YWx1ZSArICddJyxcbiAgICAgICAgbmFtZTogcmFkaW9Hcm91cE5hbWVcbiAgICAgIH0pXG5cbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JhZGlvIGNoYW5nZScpXG4gICAgICB9KVxuXG4gICAgICByYWRpb0dyb3VwLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgcmFkaW9Hcm91cC5hcHBlbmRDaGlsZChyYWRpbylcbiAgICB9KVxuICAgIHJldHVybiByYWRpb0dyb3VwXG4gIH1cblxuICBnZXRTZWxlY3QgKG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgc2VsZWN0SWQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZWN0SWQpXG4gICAgb3B0aW9uVmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zTGFiZWxzW2luZGV4XVxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RcbiAgfVxuXG4gIGdldE91dHB1dCAoYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMob3V0cHV0LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiY2xhc3MgVXRpbHMge1xuICBjbG9uZSAodGhpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGluZykpXG4gIH1cblxuICBpc1NldCAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xuICB9XG5cbiAgaXNOdW1iZXIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgfVxuXG4gIGlzSW50ZWdlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgPT09IE1hdGguZmxvb3IodmFsdWUpXG4gIH1cblxuICBpc1N0cmluZyAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICB9XG5cbiAgaXNCb29sZWFuICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICB9XG5cbiAgaXNBcnJheSAodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgfVxuXG4gIGlzT2JqZWN0ICh2YWx1ZSkge1xuICAgIHJldHVybiAhdGhpcy5pc051bGwodmFsdWUpICYmICF0aGlzLmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgfVxuXG4gIGlzTnVsbCAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXRpbHMoKVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmplZGkgPSBjb25maWcuamVkaVxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWUgfHwgdW5kZWZpbmVkXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGggfHwgJ3Jvb3QnXG4gICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGxcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGxcbiAgICB0aGlzLmNoaWxkRWRpdG9ycyA9IFtdXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGJ1aWxkIHBpcGVsaW5lIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGluaXQgKCkge1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKClcbiAgICB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gICAgdGhpcy5yZWdpc3RlcigpXG4gIH1cblxuICBnZXRLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGguc3BsaXQoJy4nKS5wb3AoKVxuICB9XG5cbiAgc2V0Q29udGFpbmVyICgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuamVkaS50aGVtZS5nZXRDb250YWluZXIoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXRoJywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgdGhpcy5zY2hlbWEudHlwZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZCB0aGUgZWRpdG9yJ3MgdXNlciBpbnRlcmZhY2VcbiAgICovXG4gIGJ1aWxkICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGluIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlciAoKSB7XG4gICAgdGhpcy5qZWRpLnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGlzIGVkaXRvciBpbnN0YW5jZSBmcm9tIHRoZSBqZWRpLmVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkudW5yZWdpc3RlckVkaXRvcih0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIElmIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkaWZlbiwgc2V0cyBhbiBpbml0aWFsIHZhbHVlIGJhc2VkIG9uIGl0J3MgdHlwZS5cbiAgICogSWYgZW51bSBpcyBkZWZpbmVkIGFuZCBzY2hlbWEuZGVmYXVsdCBpcyBub3QgZGVmaW5lZCBzZXQgdGhlIGZpcnN0IGl0ZW0gb2ZcbiAgICogdGhlIGVudW0gYWxzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgc2V0RGVmYXVsdFZhbHVlICgpIHtcbiAgICBsZXQgdmFsdWVcblxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnYm9vbGVhbicpIHZhbHVlID0gZmFsc2VcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcicpIHZhbHVlID0gMC4wXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykgdmFsdWUgPSAwXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9ICcnXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB2YWx1ZSA9IHt9XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHZhbHVlID0gW11cblxuICAgIGNvbnN0IGRlZmF1bElzRGVmaW5lZCA9IHV0aWxzLmlzU2V0KHRoaXMuc2NoZW1hLmRlZmF1bHQpXG4gICAgaWYgKGRlZmF1bElzRGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIGdldFZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIHZhbHVlXG4gICAqL1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgdmFsdWUgYW5kIGNhbGxzIHJlZnJlc2hVSSByaWdodCBhZnRlci4gVGhlIG9uQ2hhbmdlIG1ldGhvZFxuICAgKiB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBhbiBpbml0aWFsIG9yIGRlZmF1bHQgdmFsdWUgYW5kIHRoZVxuICAgKiBuZXcgdmFsdWUgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqL1xuICBzZXRWYWx1ZSAobmV3VmFsdWUsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIG5ld1ZhbHVlID0gdGhpcy5zYW5pdGl6ZShuZXdWYWx1ZSlcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmdldFZhbHVlKClcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWVcblxuICAgIGlmICghaW5pdGlhbCAmJiBjdXJyZW50VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKClcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2hVSSgpXG4gICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycygpXG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgVUkgb2YgdGhlIGVkaXRvciB0byByZWZsZWN0IGl0J3MgdmFsdWUuIFRoaXMgaXMgbmVjZXNzYXJ5IHdoZW5cbiAgICogdXNpbmcgc2V0VmFsdWUgdG8gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaFVJICgpIHt9XG5cbiAgLyoqXG4gICAqIFNob3dzIHZhbGlkYXRpb24gbWVzc2FnZXMgaW4gdGhlIGVkaXRvciBjb250YWluZXIuXG4gICAqL1xuICBzaG93VmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5qZWRpLnZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnNjaGVtYSwgdGhpcy5nZXRWYWx1ZSgpLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5qZWRpLnRoZW1lLnJlbW92ZUlucHV0RXJyb3IodGhpcy5jb250YWluZXIpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLmplZGkudGhlbWUuYWRkSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lciwgZXJyb3IubWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBlZGl0b3IgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50Lm9uQ2hhbmdlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGVkaXRvciwgYW5kIGV2ZXJ5IHJlZmVyZW5jZSB0aGF0IGl0IGlzIGF0dGFjaGVkIHRvIGl0LlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuXG5jbGFzcyBBcnJheUVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gYWRkQnRuXG4gICAgY29uc3QgYWRkQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignYWRkJylcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5hZGRJdGVtKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSXRlbUVkaXRvciAoKSB7XG4gICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuamVkaS5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pXG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSBOdW1iZXIoaXRlbUVkaXRvci5nZXRLZXkoKSlcblxuICAgIGlmIChpdGVtRWRpdG9yLmlucHV0KSB7XG4gICAgICBpdGVtRWRpdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICAgIHZhbHVlW2l0ZW1JbmRleF0gPSB1dGlscy5jbG9uZShpdGVtRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ2RlbGV0ZScpXG4gICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLnBhdGguc3BsaXQoJy4nKS5wb3AoKSlcbiAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtSW5kZXgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmNoaWxkRWRpdG9ycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG1vdmVVcEJ0biA9IHRoaXMuamVkaS50aGVtZS5nZXRCdXR0b24oJ21vdmUgdXAnKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZVVwQnRuKVxuICAgICAgbW92ZVVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0luZGV4ID0gaXRlbUluZGV4IC0gMVxuICAgICAgICB0aGlzLm1vdmUoaXRlbUluZGV4LCB0b0luZGV4KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSAxICE9PSBpdGVtSW5kZXgpIHtcbiAgICAgIGNvbnN0IG1vdmVEb3duQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSBkb3duJylcbiAgICAgIGl0ZW1FZGl0b3IuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVEb3duQnRuKVxuICAgICAgbW92ZURvd25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggKyAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBpdGVtRWRpdG9yXG4gIH1cblxuICBtb3ZlIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICBjb25zdCBpdGVtID0gdmFsdWVbZnJvbUluZGV4XVxuICAgIHZhbHVlLnNwbGljZShmcm9tSW5kZXgsIDEpXG4gICAgdmFsdWUuc3BsaWNlKHRvSW5kZXgsIDAsIGl0ZW0pXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGFkZEl0ZW0gKCkge1xuICAgIGNvbnN0IHRlbXBFZGl0b3IgPSB0aGlzLmNyZWF0ZUl0ZW1FZGl0b3IoKVxuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIHZhbHVlLnB1c2godGVtcEVkaXRvci5nZXRWYWx1ZSgpKVxuICAgIHRlbXBFZGl0b3IuZGVzdHJveSgpXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0gKGl0ZW1JbmRleCkge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQ29uZmlybSB0byBkZWxldGUnKSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGl0ZW1JbmRleClcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICBlZGl0b3IuZGVzdHJveSgpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cblxuICAgIHRoaXMuZ2V0VmFsdWUoKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgICBpdGVtRWRpdG9yLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICAgICAgdGhpcy5jaGlsZEVkaXRvcnMucHVzaChpdGVtRWRpdG9yKVxuICAgIH0pXG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChlZGl0b3IpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIEJvb2xlYW5FZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBpZDogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuaW5wdXQuY2hlY2tlZCA9IHRoaXMudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRWRpdG9yXG4iLCJpbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2Jvb2xlYW4nXG5cbmNsYXNzIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLmVudW1UaXRsZXMgfHwgb3B0aW9uVmFsdWVzXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlID09PSAndHJ1ZSdcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IEJvb2xlYW5FZGl0b3IgZnJvbSAnLi9ib29sZWFuJ1xuXG5jbGFzcyBCb29sZWFuRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgQm9vbGVhbkVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IFsnZmFsc2UnLCAndHJ1ZSddXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLmVudW1UaXRsZXMgfHwgb3B0aW9uVmFsdWVzXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmFkaW8udmFsdWUgPT09ICd0cnVlJ1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInICsgcmFkaW9Hcm91cE5hbWUgKyAnXCJdJylcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICBjb25zdCByYWRpbyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyB2YWx1ZSArICdcIl0nKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgfSlcblxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgT2JqZWN0RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBjaGlsZCBlZGl0b3JzXG4gICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXVxuICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICAgIGplZGk6IHRoaXMuamVkaSxcbiAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgIHBhdGg6IHRoaXMucGF0aCArICcuJyArIHByb3AsXG4gICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgfSlcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci5jb250YWluZXIpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGVkaXRvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHRoaXMudmFsdWUgPSB7fVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMuZm9yRWFjaCgoY2hpbGRFZGl0b3IpID0+IHtcbiAgICAgIHRoaXMudmFsdWVbY2hpbGRFZGl0b3IuZ2V0S2V5KCldID0gY2hpbGRFZGl0b3IuZ2V0VmFsdWUoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIFN0cmluZ0VkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2NvbG9yJywgJ2RhdGV0aW1lLWxvY2FsJywgJ2VtYWlsJywgJ21vbnRoJywgJ3NlYXJjaCcsICd0ZWwnLCAndGV4dCcsICd0aW1lJywgJ3VybCcsICd3ZWVrJ11cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6IGlucHV0VHlwZXMuaW5jbHVkZXModGhpcy5zY2hlbWEuZm9ybWF0KSA/IHRoaXMuc2NoZW1hLmZvcm1hdCA6ICd0ZXh0JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVNlbGVjdEVkaXRvciBleHRlbmRzIFN0cmluZ0VkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW1cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEuZW51bVRpdGxlcyB8fCBvcHRpb25WYWx1ZXNcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldFNlbGVjdChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHRoaXMucGF0aClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KVxuXG4gICAgLy8gZXZlbnRzXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuaW5wdXQudmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtUmFkaW9FZGl0b3IgZXh0ZW5kcyBTdHJpbmdFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3Qgb3B0aW9uc0xhYmVscyA9IHRoaXMuc2NoZW1hLmVudW1UaXRsZXMgfHwgb3B0aW9uVmFsdWVzXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUocmFkaW8udmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXBOYW1lID0gdGhpcy5wYXRoXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIGNvbnN0IHJhZGlvID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIHRoaXMuZ2V0VmFsdWUoKSArICdcIl0nKVxuXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpXG4gICAgfSlcblxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtVGl0bGVzIHx8IG9wdGlvblZhbHVlc1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0U2VsZWN0KG9wdGlvblZhbHVlcywgb3B0aW9uc0xhYmVscywgdGhpcy5wYXRoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC52YWx1ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1TZWxlY3RFZGl0b3JcbiIsImltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9udW1iZXInXG5cbmNsYXNzIE51bWJlckVudW1SYWRpb0VkaXRvciBleHRlbmRzIE51bWJlckVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMuc2NoZW1hLmVudW1cbiAgICBjb25zdCBvcHRpb25zTGFiZWxzID0gdGhpcy5zY2hlbWEuZW51bVRpdGxlcyB8fCBvcHRpb25WYWx1ZXNcbiAgICBjb25zdCByYWRpb0dyb3VwTmFtZSA9IHRoaXMucGF0aFxuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLmplZGkudGhlbWUuZ2V0UmFkaW9Hcm91cChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHJhZGlvR3JvdXBOYW1lKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJhZGlvR3JvdXApXG5cbiAgICAvLyBldmVudHNcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShyYWRpby52YWx1ZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIHJhZGlvR3JvdXBOYW1lICsgJ1wiXScpXG4gICAgY29uc3QgcmFkaW8gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgdGhpcy5nZXRWYWx1ZSgpICsgJ1wiXScpXG5cbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgcmFkaW8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJylcbiAgICB9KVxuXG4gICAgaWYgKHJhZGlvKSB7XG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckVudW1SYWRpb0VkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5cbmNsYXNzIE51bGxFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxFZGl0b3JcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IEFycmF5RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9hcnJheSdcbmltcG9ydCBCb29sZWFuRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuJ1xuaW1wb3J0IEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9ib29sZWFuLWVudW0tc2VsZWN0J1xuaW1wb3J0IEJvb2xlYW5FbnVtUmFkaW9FZGl0b3IgZnJvbSAnLi9lZGl0b3JzL2Jvb2xlYW4tZW51bS1yYWRpbydcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBzY2hlbWEuZm9ybWF0XG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFJhZGlvID0gdXRpbHMuaXNTZXQoZm9ybWF0KSAmJiB1dGlscy5pc1N0cmluZyhmb3JtYXQpICYmIGZvcm1hdCA9PT0gJ3JhZGlvJ1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJyAmJiBoYXNGb3JtYXRSYWRpbykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0U2VsZWN0ID0gdXRpbHMuaXNTZXQoZm9ybWF0KSAmJiB1dGlscy5pc1N0cmluZyhmb3JtYXQpICYmIGZvcm1hdCA9PT0gJ3NlbGVjdCdcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYm9vbGVhbicgJiYgaGFzRm9ybWF0U2VsZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW5FZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBPYmplY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBjb25zdCBmb3JtYXQgPSBzY2hlbWEuZm9ybWF0XG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFJhZGlvID0gdXRpbHMuaXNTZXQoZm9ybWF0KSAmJiB1dGlscy5pc1N0cmluZyhmb3JtYXQpICYmIGZvcm1hdCA9PT0gJ3JhZGlvJ1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIGhhc0VudW1Db25zdHJhaW4gJiYgaGFzRm9ybWF0UmFkaW8pIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnICYmIGhhc0VudW1Db25zdHJhaW4pIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgY29uc3QgaGFzRm9ybWF0UmFkaW8gPSB1dGlscy5pc1NldChmb3JtYXQpICYmIHV0aWxzLmlzU3RyaW5nKGZvcm1hdCkgJiYgZm9ybWF0ID09PSAncmFkaW8nXG4gICAgICAgIGlmIChpc051bWVyaWNUeXBlICYmIGhhc0VudW1Db25zdHJhaW4gJiYgaGFzRm9ybWF0UmFkaW8pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRW51bVJhZGlvRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKGlzTnVtZXJpY1R5cGUgJiYgaGFzRW51bUNvbnN0cmFpbikge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoaXNOdW1lcmljVHlwZSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXJFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICByZXR1cm4gTnVsbEVkaXRvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSByZXNvbHZlciBmdW5jdGlvblxuICAgKi9cbiAgYWRkUmVzb2x2ZXIgKHJlc29sdmVyKSB7XG4gICAgdGhpcy5yZXNvbHZlcnMudW5zaGlmdChyZXNvbHZlcilcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBmaXJzdCBlZGl0b3IgY2xhc3MgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2NoZW1hLlxuICAgKi9cbiAgcmVzb2x2ZSAoc2NoZW1hKSB7XG4gICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgY29uc3QgZWRpdG9yQ2xhc3MgPSByZXNvbHZlcihzY2hlbWEpXG4gICAgICBpZiAodXRpbHMuaXNTZXQoZWRpdG9yQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiBlZGl0b3JDbGFzc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmNsYXNzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZXJyb3Igb2JqZWN0IGlmIHRoZSB0aGUgdmFsaWRhdGlvbiBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRvcnMgPSB7XG4gICAgICB0eXBlOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgICAgICBzdHJpbmc6IHZhbHVlID0+IHV0aWxzLmlzU3RyaW5nKHZhbHVlKSxcbiAgICAgICAgICBudW1iZXI6IHZhbHVlID0+IHV0aWxzLmlzTnVtYmVyKHZhbHVlKSxcbiAgICAgICAgICBpbnRlZ2VyOiB2YWx1ZSA9PiB1dGlscy5pc0ludGVnZXIodmFsdWUpLFxuICAgICAgICAgIGJvb2xlYW46IHZhbHVlID0+IHV0aWxzLmlzQm9vbGVhbih2YWx1ZSksXG4gICAgICAgICAgYXJyYXk6IHZhbHVlID0+IHV0aWxzLmlzQXJyYXkodmFsdWUpLFxuICAgICAgICAgIG9iamVjdDogdmFsdWUgPT4gdXRpbHMuaXNPYmplY3QodmFsdWUpLFxuICAgICAgICAgIG51bGw6IHZhbHVlID0+IHV0aWxzLmlzTnVsbCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkID0gdHlwZXNbc2NoZW1hLnR5cGVdKHZhbHVlKVxuXG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgb2YgdHlwZSAnICsgc2NoZW1hLnR5cGUsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgdW5pcXVlSXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHVuaXF1ZUl0ZW1zID0gc2NoZW1hLnVuaXF1ZUl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQodW5pcXVlSXRlbXMpICYmIHV0aWxzLmlzQm9vbGVhbih1bmlxdWVJdGVtcylcbiAgICAgICAgaWYgKCFoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHNlZW4gPSB7fVxuICAgICAgICBsZXQgaGFzRHVwbGljYXRlZEl0ZW1zID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlW2ldKVxuICAgICAgICAgIGlmIChzZWVuW2l0ZW1dKSB7XG4gICAgICAgICAgICBoYXNEdXBsaWNhdGVkSXRlbXMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWVuW2l0ZW1dID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiAmJiBoYXNEdXBsaWNhdGVkSXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB1bmlxdWUgaXRlbXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbkl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtaW5JdGVtcyA9IHNjaGVtYS5taW5JdGVtc1xuICAgICAgICBjb25zdCBoYXNNaW5JdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbkl0ZW1zKSAmJiB1dGlscy5pc051bWJlcihtaW5JdGVtcylcbiAgICAgICAgaWYgKCFoYXNNaW5JdGVtc0NvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluSXRlbXNDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoIDwgbWluSXRlbXMpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSBhdCBsZWFzdCAnICsgbWluSXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtYXhJdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4SXRlbXMgPSBzY2hlbWEubWF4SXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWF4SXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhJdGVtcykgJiYgdXRpbHMuaXNOdW1iZXIobWF4SXRlbXMpXG4gICAgICAgIGlmICghaGFzTWF4SXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heEl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbW9zdCAnICsgbWF4SXRlbXMgKyAnIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5MZW5ndGg6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IHNjaGVtYS5taW5MZW5ndGhcbiAgICAgICAgY29uc3QgaGFzTWluTGVuZ3RoQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWluTGVuZ3RoKSAmJiB1dGlscy5pc051bWJlcihtaW5MZW5ndGgpXG4gICAgICAgIGlmICghaGFzTWluTGVuZ3RoQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5MZW5ndGhDb25zdHJhaW4gJiYgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBtaW5MZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4TGVuZ3RoOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtYXhMZW5ndGggPSBzY2hlbWEubWF4TGVuZ3RoXG4gICAgICAgIGNvbnN0IGhhc01heExlbmd0aENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heExlbmd0aCkgJiYgdXRpbHMuaXNOdW1iZXIobWF4TGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01heExlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4TGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBtb3N0ICcgKyBtYXhMZW5ndGggKyAnIGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgcGF0dGVybjogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHNjaGVtYS5wYXR0ZXJuXG4gICAgICAgIGNvbnN0IGhhc1BhdHRlcm5Db25zdHJhaW4gPSB1dGlscy5pc1NldChwYXR0ZXJuKSAmJiB1dGlscy5pc1N0cmluZyhwYXR0ZXJuKVxuICAgICAgICBpZiAoIWhhc1BhdHRlcm5Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pXG4gICAgICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9IHJlZ2V4cC50ZXN0KHZhbHVlKVxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc1BhdHRlcm5Db25zdHJhaW4gJiYgIW1hdGNoUGF0dGVybilcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSB0aGUgcGF0dGVybjogJyArIHBhdHRlcm4sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluaW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1pbmltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bVxuICAgICAgICBjb25zdCBtaW5pbXVtID0gc2NoZW1hLm1pbmltdW1cbiAgICAgICAgY29uc3QgaGFzTWluaW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbmltdW0pICYmIHV0aWxzLmlzTnVtYmVyKG1pbmltdW0pXG4gICAgICAgIGlmICghaGFzTWluaW11bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChleGNsdXNpdmVNaW5pbXVtKSAmJiBleGNsdXNpdmVNaW5pbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWluaW11bSA9IGhhc0V4Y2x1c2l2ZU1pbmltdW1Db25zdHJhaW4gPyBtaW5pbXVtICsgMSA6IG1pbmltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNaW5pbXVtQ29uc3RyYWluICYmIHZhbHVlIDwgZmluYWxNaW5pbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGF0IGxlYXN0ICcgKyBmaW5hbE1pbmltdW0sXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4aW11bTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGlmICghaXNOdW1lcmljVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGV4Y2x1c2l2ZU1heGltdW0gPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bVxuICAgICAgICBjb25zdCBtYXhpbXVtID0gc2NoZW1hLm1heGltdW1cbiAgICAgICAgY29uc3QgaGFzTWF4aW11bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1heGltdW0pICYmIHV0aWxzLmlzTnVtYmVyKG1heGltdW0pXG4gICAgICAgIGlmICghaGFzTWF4aW11bUNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChleGNsdXNpdmVNYXhpbXVtKSAmJiBleGNsdXNpdmVNYXhpbXVtID09PSB0cnVlXG4gICAgICAgIGNvbnN0IGZpbmFsTWF4aW11bSA9IGhhc0V4Y2x1c2l2ZU1heGltdW1Db25zdHJhaW4gPyBtYXhpbXVtIC0gMSA6IG1heGltdW1cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhpbXVtQ29uc3RyYWluICYmIHZhbHVlID4gZmluYWxNYXhpbXVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIGxlc3MgdGhhbiAnICsgZmluYWxNYXhpbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG11bHRpcGxlT2Y6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtdWx0aXBsZU9mID0gc2NoZW1hLm11bHRpcGxlT2ZcbiAgICAgICAgY29uc3QgaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG11bHRpcGxlT2YpICYmIHV0aWxzLmlzTnVtYmVyKG11bHRpcGxlT2YpXG4gICAgICAgIGlmICghaGFzTXVsdGlwbGVPZkNvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGlzTXVsdGlwbGVPZiA9ICh2YWx1ZSAvIG11bHRpcGxlT2YgPT09IE1hdGguZmxvb3IodmFsdWUgLyBtdWx0aXBsZU9mKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNdWx0aXBsZU9mQ29uc3RyYWluICYmICFpc011bHRpcGxlT2YpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgbXVsdGlwbGUgb2YgJyArIG11bHRpcGxlT2YsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgY29uc3Q6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9jb25zdCA9IHNjaGVtYS5jb25zdFxuICAgICAgICBjb25zdCBoYXNDb25zdENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9jb25zdClcbiAgICAgICAgaWYgKCFoYXNDb25zdENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IHZhbHVlSXNOb3RFcXVhbENvbnN0ID0gKEpTT04uc3RyaW5naWZ5KHZhbHVlKSAhPT0gSlNPTi5zdHJpbmdpZnkoX2NvbnN0KSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNDb25zdENvbnN0cmFpbiAmJiB2YWx1ZUlzTm90RXF1YWxDb25zdClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIHZhbHVlOiAnICsgX2NvbnN0LFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGVudW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBpZiAoIWhhc0VudW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCB2YWx1ZU5vdEluRW51bSA9ICFfZW51bS5zb21lKGUgPT4gSlNPTi5zdHJpbmdpZnkodmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShlKSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNFbnVtQ29uc3RyYWluICYmIHZhbHVlTm90SW5FbnVtKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdWYWx1ZSBtdXN0IGJlIG9uZSBvZiB0aGUgZW51bWVyYXRlZCB2YWx1ZXMnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAqL1xuICBhZGRWYWxpZGF0b3IgKG5hbWUsIHZhbGlkYXRvcikge1xuICAgIHRoaXMudmFsaWRhdG9yc1tuYW1lXSA9IHZhbGlkYXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgaXQncyBzY2hlbWFcbiAgICovXG4gIHZhbGlkYXRlIChzY2hlbWEsIHZhbHVlLCBwYXRoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBPYmplY3Qua2V5cyh0aGlzLnZhbGlkYXRvcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW2tleV1cbiAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdG9yKHNjaGVtYSwgdmFsdWUsIHBhdGgpXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yXG4iLCJpbXBvcnQgVGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJ1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL3ZhbGlkYXRvcidcblxuY2xhc3MgSmVkaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLnRoZW1lID0gbmV3IFRoZW1lKClcbiAgICB0aGlzLnJlc29sdmVyID0gbmV3IFJlc29sdmVyKClcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKVxuICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuICAgIHRoaXMuc2NoZW1hID0gY29uZmlnLnNjaGVtYVxuICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICB0aGlzLmVkaXRvcnMgPSB7fVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmxvYWRFZGl0b3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVkaXRvciBpbnN0YW5jZSBpbiB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gZWRpdG9yXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlZGl0b3IgaW5zdGFuY2UgZnJvbSB0aGUgZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXJFZGl0b3IgKGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF0gPSBudWxsXG4gICAgZGVsZXRlIHRoaXMuZWRpdG9yc1tlZGl0b3IucGF0aF1cbiAgfVxuXG4gIGxvYWRFZGl0b3JzICgpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYVxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290LmNvbnRhaW5lcilcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqZWRpLWxvYWRlZCcpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlZGl0b3IgaW5zdGFuY2UgYmFzZWQgb24gdGhlIHBhc3NlZCBzY2hlbWEgYW5kIGNvbmZpZ1xuICAgKi9cbiAgY3JlYXRlRWRpdG9yIChjb25maWcpIHtcbiAgICAvLyB0b2RvIGV4cGFuZCBkZWZzXG4gICAgcmV0dXJuIG5ldyAodGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbmZpZy5zY2hlbWEpKShjb25maWcpXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5nZXRWYWx1ZSgpXG4gIH1cblxuICBnZXRFZGl0b3IgKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JzW3BhdGhdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmVkaVxuIl0sInNvdXJjZVJvb3QiOiIifQ==