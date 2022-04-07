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
      var optionsLabels = this.schema["enum"];
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
      var optionsLabels = this.schema["enum"];
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radioInput) {
        radioInput.addEventListener('change', function () {
          _this.setValue(radioInput.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');

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
      var optionsLabels = this.schema["enum"];
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
      var optionsLabels = this.schema["enum"];
      var radioGroupName = this.path;
      var radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName);
      this.container.appendChild(radioGroup); // events

      var radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]');
      radioInputs.forEach(function (radioInput) {
        radioInput.addEventListener('change', function () {
          _this.setValue(radioInput.value);
        });
      });
    }
  }, {
    key: "refreshUI",
    value: function refreshUI() {
      var radio = this.container.querySelector('[value="' + this.getValue() + '"]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9KZWRpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0plZGkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL2Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvc3RyaW5nLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL3N0cmluZy1lbnVtLXJhZGlvLmpzIiwid2VicGFjazovL0plZGkvLi9zcmMvZWRpdG9ycy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bWJlci1lbnVtLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2VkaXRvcnMvbnVtYmVyLWVudW0tcmFkaW8uanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9lZGl0b3JzL251bGwuanMiLCJ3ZWJwYWNrOi8vSmVkaS8uL3NyYy9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9KZWRpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwYXRoIiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0b3IiLCJlcnJvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0IiwiYnV0dG9uIiwibGFiZWxUZXh0IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGVzIiwiaW5wdXQiLCJvcHRpb25WYWx1ZXMiLCJvcHRpb25zTGFiZWxzIiwicmFkaW9Hcm91cE5hbWUiLCJyYWRpb0dyb3VwIiwiZ2V0Q29udGFpbmVyIiwidmFsdWUiLCJpbmRleCIsImdldExhYmVsIiwicmFkaW8iLCJnZXRJbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNlbGVjdElkIiwic2VsZWN0Iiwib3B0aW9uIiwib3V0cHV0IiwiVXRpbHMiLCJ0aGluZyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImlzTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNOdWxsIiwiRWRpdG9yIiwiY29uZmlnIiwiamVkaSIsInNjaGVtYSIsInVuZGVmaW5lZCIsInBhcmVudCIsImNoaWxkRWRpdG9ycyIsImluaXQiLCJzZXRDb250YWluZXIiLCJidWlsZCIsInNldERlZmF1bHRWYWx1ZSIsInNob3dWYWxpZGF0aW9uRXJyb3JzIiwicmVnaXN0ZXIiLCJzcGxpdCIsInBvcCIsInRoZW1lIiwicmVnaXN0ZXJFZGl0b3IiLCJ1bnJlZ2lzdGVyRWRpdG9yIiwiZGVmYXVsSXNEZWZpbmVkIiwidXRpbHMiLCJpc1NldCIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJpbml0aWFsIiwic2FuaXRpemUiLCJjdXJyZW50VmFsdWUiLCJnZXRWYWx1ZSIsIm9uQ2hhbmdlIiwicmVmcmVzaFVJIiwidmFsaWRhdG9yIiwidmFsaWRhdGUiLCJyZW1vdmVJbnB1dEVycm9yIiwiYWRkSW5wdXRFcnJvciIsInVucmVnaXN0ZXIiLCJBcnJheUVkaXRvciIsInRpdGxlIiwiYWRkQnRuIiwiZ2V0QnV0dG9uIiwiYWRkSXRlbSIsIml0ZW1FZGl0b3IiLCJjcmVhdGVFZGl0b3IiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1JbmRleCIsIk51bWJlciIsImdldEtleSIsImNsb25lIiwiZGVsZXRlQnRuIiwiZGVsZXRlSXRlbSIsIm1vdmVVcEJ0biIsInRvSW5kZXgiLCJtb3ZlIiwibW92ZURvd25CdG4iLCJmcm9tSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwidGVtcEVkaXRvciIsImNyZWF0ZUl0ZW1FZGl0b3IiLCJwdXNoIiwiZGVzdHJveSIsIndpbmRvdyIsImNvbmZpcm0iLCJmaWx0ZXIiLCJlZGl0b3IiLCJCb29sZWFuRWRpdG9yIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJPYmplY3RFZGl0b3IiLCJwcm9wZXJ0aWVzIiwicHJvcCIsImNoaWxkRWRpdG9yIiwiU3RyaW5nRWRpdG9yIiwiaW5wdXRUeXBlcyIsImluY2x1ZGVzIiwiZm9ybWF0IiwiU3RyaW5nIiwiU3RyaW5nRW51bVNlbGVjdEVkaXRvciIsImdldFNlbGVjdCIsIlN0cmluZ0VudW1SYWRpb0VkaXRvciIsImdldFJhZGlvR3JvdXAiLCJyYWRpb0lucHV0cyIsInJhZGlvSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiTnVtYmVyRWRpdG9yIiwiTnVtYmVyRW51bVNlbGVjdEVkaXRvciIsIk51bWJlckVudW1SYWRpb0VkaXRvciIsIk51bGxFZGl0b3IiLCJSZXNvbHZlciIsInJlc29sdmVycyIsIl9lbnVtIiwiaGFzRW51bUNvbnN0cmFpbiIsImhhc0Zvcm1hdFJhZGlvIiwiaXNTdHJpbmciLCJpc051bWVyaWNUeXBlIiwicmVzb2x2ZXIiLCJ1bnNoaWZ0IiwiZWRpdG9yQ2xhc3MiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0b3JzIiwidHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJpbnRlZ2VyIiwiaXNJbnRlZ2VyIiwiaXNCb29sZWFuIiwiYXJyYXkiLCJvYmplY3QiLCJpc09iamVjdCIsInZhbGlkIiwidW5pcXVlSXRlbXMiLCJpc0FycmF5VHlwZSIsImhhc1VuaXF1ZUl0ZW1zQ29uc3RyYWluIiwic2VlbiIsImhhc0R1cGxpY2F0ZWRJdGVtcyIsImkiLCJpbnZhbGlkIiwibWluSXRlbXMiLCJoYXNNaW5JdGVtc0NvbnN0cmFpbiIsIm1heEl0ZW1zIiwiaGFzTWF4SXRlbXNDb25zdHJhaW4iLCJtaW5MZW5ndGgiLCJpc1N0cmluZ1R5cGUiLCJoYXNNaW5MZW5ndGhDb25zdHJhaW4iLCJtYXhMZW5ndGgiLCJoYXNNYXhMZW5ndGhDb25zdHJhaW4iLCJwYXR0ZXJuIiwiaGFzUGF0dGVybkNvbnN0cmFpbiIsInJlZ2V4cCIsIlJlZ0V4cCIsIm1hdGNoUGF0dGVybiIsInRlc3QiLCJtaW5pbXVtIiwiZXhjbHVzaXZlTWluaW11bSIsImhhc01pbmltdW1Db25zdHJhaW4iLCJoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluIiwiZmluYWxNaW5pbXVtIiwibWF4aW11bSIsImV4Y2x1c2l2ZU1heGltdW0iLCJoYXNNYXhpbXVtQ29uc3RyYWluIiwiaGFzRXhjbHVzaXZlTWF4aW11bUNvbnN0cmFpbiIsImZpbmFsTWF4aW11bSIsIm11bHRpcGxlT2YiLCJoYXNNdWx0aXBsZU9mQ29uc3RyYWluIiwiaXNNdWx0aXBsZU9mIiwiX2NvbnN0IiwiaGFzQ29uc3RDb25zdHJhaW4iLCJ2YWx1ZUlzTm90RXF1YWxDb25zdCIsInZhbHVlTm90SW5FbnVtIiwic29tZSIsImUiLCJKZWRpIiwicm9vdCIsImVkaXRvcnMiLCJsb2FkRWRpdG9ycyIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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QUFkLEVBQXNCO0FBQ3BCO0FBQ0EsYUFBTyxLQUFLLEtBQUs2RixRQUFMLENBQWM0RCxPQUFkLENBQXNCekosTUFBTSxDQUFDRSxNQUE3QixDQUFMLEVBQTJDRixNQUEzQyxDQUFQO0FBQ0Q7OztXQUVELG9CQUFZO0FBQ1YsYUFBTyxLQUFLc0osSUFBTCxDQUFVN0gsUUFBVixFQUFQO0FBQ0Q7OztXQUVELG1CQUFXckUsSUFBWCxFQUFpQjtBQUNmLGFBQU8sS0FBS21NLE9BQUwsQ0FBYW5NLElBQWIsQ0FBUDtBQUNEOzs7Ozs7QUFHWWlNLGlGQUFmLEUiLCJmaWxlIjoiamVkaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkplZGlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSmVkaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjbGFzcyBUaGVtZSB7XG4gIHNldEF0dHJpYnV0ZXMgKGVsZW1lbnQsIGF0dHJpYnV0ZXMgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgYWRkSW5wdXRFcnJvciAoY29udGFpbmVyLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdqZWRpLWVycm9yLW1lc3NhZ2UnKVxuICAgIGVycm9yLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFueSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCBlZGl0b3IgY29udGFpbmVyLlxuICAgKi9cbiAgcmVtb3ZlSW5wdXRFcnJvciAoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aCcpXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtcGF0aD1cIicgKyBwYXRoICsgJ1wiXSA+IC5qZWRpLWVycm9yLW1lc3NhZ2UnXG4gICAgY29uc3QgZXJyb3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIGdldEJ1dHRvbiAodGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIHJldHVybiBidXR0b25cbiAgfVxuXG4gIGdldENvbnRhaW5lciAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICBnZXRMYWJlbCAobGFiZWxUZXh0LCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dFxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhsYWJlbCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGdldElucHV0IChhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoaW5wdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBnZXRSYWRpb0dyb3VwIChvcHRpb25WYWx1ZXMsIG9wdGlvbnNMYWJlbHMsIHJhZGlvR3JvdXBOYW1lKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMuZ2V0Q29udGFpbmVyKClcblxuICAgIG9wdGlvblZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgICAgZm9yOiByYWRpb0dyb3VwTmFtZSArICdbJyArIHZhbHVlICsgJ10nXG4gICAgICB9KVxuXG4gICAgICBjb25zdCByYWRpbyA9IHRoaXMuZ2V0SW5wdXQoe1xuICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGlkOiByYWRpb0dyb3VwTmFtZSArICdbJyArIHZhbHVlICsgJ10nLFxuICAgICAgICBuYW1lOiByYWRpb0dyb3VwTmFtZVxuICAgICAgfSlcblxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmFkaW8gY2hhbmdlJylcbiAgICAgIH0pXG5cbiAgICAgIHJhZGlvR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICByYWRpb0dyb3VwLmFwcGVuZENoaWxkKHJhZGlvKVxuICAgIH0pXG4gICAgcmV0dXJuIHJhZGlvR3JvdXBcbiAgfVxuXG4gIGdldFNlbGVjdCAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCBzZWxlY3RJZCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxlY3RJZClcbiAgICBvcHRpb25WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNMYWJlbHNbaW5kZXhdXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdFxuICB9XG5cbiAgZ2V0T3V0cHV0IChhdHRyaWJ1dGVzID0ge30pIHtcbiAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlcyhvdXRwdXQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lXG4iLCJjbGFzcyBVdGlscyB7XG4gIGNsb25lICh0aGluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaW5nKSlcbiAgfVxuXG4gIGlzU2V0ICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gIH1cblxuICBpc051bWJlciAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG5cbiAgaXNJbnRlZ2VyICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKHZhbHVlKSAmJiB2YWx1ZSA9PT0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgfVxuXG4gIGlzU3RyaW5nICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gIH1cblxuICBpc0Jvb2xlYW4gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIH1cblxuICBpc0FycmF5ICh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICB9XG5cbiAgaXNPYmplY3QgKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbCh2YWx1ZSkgJiYgIXRoaXMuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG5cbiAgaXNOdWxsICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxuY2xhc3MgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHRoaXMuamVkaSA9IGNvbmZpZy5qZWRpXG4gICAgdGhpcy5zY2hlbWEgPSBjb25maWcuc2NoZW1hXG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aCB8fCAncm9vdCdcbiAgICB0aGlzLnBhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbFxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbFxuICAgIHRoaXMuY2hpbGRFZGl0b3JzID0gW11cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYnVpbGQgcGlwZWxpbmUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgICB0aGlzLnJlZ2lzdGVyKClcbiAgfVxuXG4gIGdldEtleSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5zcGxpdCgnLicpLnBvcCgpXG4gIH1cblxuICBzZXRDb250YWluZXIgKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qZWRpLnRoZW1lLmdldENvbnRhaW5lcigpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCB0aGlzLnNjaGVtYS50eXBlKVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkIHRoZSBlZGl0b3IncyB1c2VyIGludGVyZmFjZVxuICAgKi9cbiAgYnVpbGQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhpcyBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmplZGkucmVnaXN0ZXJFZGl0b3IodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGplZGkuZWRpdG9ycyBvYmplY3RcbiAgICovXG4gIHVucmVnaXN0ZXIgKCkge1xuICAgIHRoaXMuamVkaS51bnJlZ2lzdGVyRWRpdG9yKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogSWYgc2NoZW1hLmRlZmF1bHQgaXMgbm90IGRpZmVuLCBzZXRzIGFuIGluaXRpYWwgdmFsdWUgYmFzZWQgb24gaXQncyB0eXBlLlxuICAgKiBJZiBlbnVtIGlzIGRlZmluZWQgYW5kIHNjaGVtYS5kZWZhdWx0IGlzIG5vdCBkZWZpbmVkIHNldCB0aGUgZmlyc3QgaXRlbSBvZlxuICAgKiB0aGUgZW51bSBhbHMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBzZXREZWZhdWx0VmFsdWUgKCkge1xuICAgIGxldCB2YWx1ZVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykgdmFsdWUgPSBmYWxzZVxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgdmFsdWUgPSAwLjBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB2YWx1ZSA9IDBcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gJydcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHZhbHVlID0ge31cbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JykgdmFsdWUgPSBbXVxuXG4gICAgY29uc3QgZGVmYXVsSXNEZWZpbmVkID0gdXRpbHMuaXNTZXQodGhpcy5zY2hlbWEuZGVmYXVsdClcbiAgICBpZiAoZGVmYXVsSXNEZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGVkaXRvclxuICAgKi9cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgdmFsdWVcbiAgICovXG4gIHNhbml0aXplICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVkaXRvciB2YWx1ZSBhbmQgY2FsbHMgcmVmcmVzaFVJIHJpZ2h0IGFmdGVyLiBUaGUgb25DaGFuZ2UgbWV0aG9kXG4gICAqIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuZXcgdmFsdWUgaXMgbm90IGFuIGluaXRpYWwgb3IgZGVmYXVsdCB2YWx1ZSBhbmQgdGhlXG4gICAqIG5ldyB2YWx1ZSBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICovXG4gIHNldFZhbHVlIChuZXdWYWx1ZSwgaW5pdGlhbCA9IGZhbHNlKSB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLnNhbml0aXplKG5ld1ZhbHVlKVxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgaWYgKCFpbml0aWFsICYmIGN1cnJlbnRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaFVJKClcbiAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBVSSBvZiB0aGUgZWRpdG9yIHRvIHJlZmxlY3QgaXQncyB2YWx1ZS4gVGhpcyBpcyBuZWNlc3Nhcnkgd2hlblxuICAgKiB1c2luZyBzZXRWYWx1ZSB0byBzZXQgdGhlIHZhbHVlIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICByZWZyZXNoVUkgKCkge31cblxuICAvKipcbiAgICogU2hvd3MgdmFsaWRhdGlvbiBtZXNzYWdlcyBpbiB0aGUgZWRpdG9yIGNvbnRhaW5lci5cbiAgICovXG4gIHNob3dWYWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmplZGkudmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuc2NoZW1hLCB0aGlzLmdldFZhbHVlKCksIHRoaXMucGF0aClcbiAgICB0aGlzLmplZGkudGhlbWUucmVtb3ZlSW5wdXRFcnJvcih0aGlzLmNvbnRhaW5lcilcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRoaXMuamVkaS50aGVtZS5hZGRJbnB1dEVycm9yKHRoaXMuY29udGFpbmVyLCBlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2UgKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQub25DaGFuZ2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgZWRpdG9yLCBhbmQgZXZlcnkgcmVmZXJlbmNlIHRoYXQgaXQgaXMgYXR0YWNoZWQgdG8gaXQuXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIiwiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIEFycmF5RWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBhZGRCdG5cbiAgICBjb25zdCBhZGRCdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdhZGQnKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZEl0ZW0oKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVJdGVtRWRpdG9yICgpIHtcbiAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5qZWRpLmNyZWF0ZUVkaXRvcih7XG4gICAgICBqZWRpOiB0aGlzLmplZGksXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgdGhpcy5jaGlsZEVkaXRvcnMubGVuZ3RoLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSlcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IE51bWJlcihpdGVtRWRpdG9yLmdldEtleSgpKVxuXG4gICAgaWYgKGl0ZW1FZGl0b3IuaW5wdXQpIHtcbiAgICAgIGl0ZW1FZGl0b3IuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHV0aWxzLmNsb25lKHRoaXMuZ2V0VmFsdWUoKSlcbiAgICAgICAgdmFsdWVbaXRlbUluZGV4XSA9IHV0aWxzLmNsb25lKGl0ZW1FZGl0b3IuZ2V0VmFsdWUoKSlcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignZGVsZXRlJylcbiAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUluZGV4ID0gTnVtYmVyKGl0ZW1FZGl0b3IucGF0aC5zcGxpdCgnLicpLnBvcCgpKVxuICAgICAgdGhpcy5kZWxldGVJdGVtKGl0ZW1JbmRleClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY2hpbGRFZGl0b3JzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgbW92ZVVwQnRuID0gdGhpcy5qZWRpLnRoZW1lLmdldEJ1dHRvbignbW92ZSB1cCcpXG4gICAgICBpdGVtRWRpdG9yLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlVXBCdG4pXG4gICAgICBtb3ZlVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvSW5kZXggPSBpdGVtSW5kZXggLSAxXG4gICAgICAgIHRoaXMubW92ZShpdGVtSW5kZXgsIHRvSW5kZXgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIDEgIT09IGl0ZW1JbmRleCkge1xuICAgICAgY29uc3QgbW92ZURvd25CdG4gPSB0aGlzLmplZGkudGhlbWUuZ2V0QnV0dG9uKCdtb3ZlIGRvd24nKVxuICAgICAgaXRlbUVkaXRvci5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZURvd25CdG4pXG4gICAgICBtb3ZlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IGl0ZW1JbmRleCArIDFcbiAgICAgICAgdGhpcy5tb3ZlKGl0ZW1JbmRleCwgdG9JbmRleClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1FZGl0b3JcbiAgfVxuXG4gIG1vdmUgKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMuY2xvbmUodGhpcy5nZXRWYWx1ZSgpKVxuICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtmcm9tSW5kZXhdXG4gICAgdmFsdWUuc3BsaWNlKGZyb21JbmRleCwgMSlcbiAgICB2YWx1ZS5zcGxpY2UodG9JbmRleCwgMCwgaXRlbSlcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgYWRkSXRlbSAoKSB7XG4gICAgY29uc3QgdGVtcEVkaXRvciA9IHRoaXMuY3JlYXRlSXRlbUVkaXRvcigpXG4gICAgY29uc3QgdmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgdmFsdWUucHVzaCh0ZW1wRWRpdG9yLmdldFZhbHVlKCkpXG4gICAgdGVtcEVkaXRvci5kZXN0cm95KClcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgZGVsZXRlSXRlbSAoaXRlbUluZGV4KSB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdDb25maXJtIHRvIGRlbGV0ZScpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB1dGlscy5jbG9uZSh0aGlzLmdldFZhbHVlKCkpXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCAhPT0gaXRlbUluZGV4KVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIGVkaXRvci5kZXN0cm95KClcbiAgICB9KVxuXG4gICAgdGhpcy5jaGlsZEVkaXRvcnMgPSBbXVxuXG4gICAgdGhpcy5nZXRWYWx1ZSgpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpdGVtRWRpdG9yID0gdGhpcy5jcmVhdGVJdGVtRWRpdG9yKClcbiAgICAgIGl0ZW1FZGl0b3Iuc2V0VmFsdWUodmFsdWUsIHRydWUpXG4gICAgICB0aGlzLmNoaWxkRWRpdG9ycy5wdXNoKGl0ZW1FZGl0b3IpXG4gICAgfSlcblxuICAgIHRoaXMuY2hpbGRFZGl0b3JzLmZvckVhY2goKGVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgQm9vbGVhbkVkaXRvciBleHRlbmRzIEVkaXRvciB7XG4gIGJ1aWxkICgpIHtcbiAgICAvLyBsYWJlbFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmplZGkudGhlbWUuZ2V0TGFiZWwobGFiZWxUZXh0LCB7XG4gICAgICBmb3I6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAvLyBpbnB1dFxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGlkOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpXG5cbiAgICAvLyBldmVudHNcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5pbnB1dC5jaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSlcbiAgfVxuXG4gIHJlZnJlc2hVSSAoKSB7XG4gICAgdGhpcy5pbnB1dC5jaGVja2VkID0gdGhpcy52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBPYmplY3RFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGNoaWxkIGVkaXRvcnNcbiAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdXG4gICAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmplZGkuY3JlYXRlRWRpdG9yKHtcbiAgICAgICAgamVkaTogdGhpcy5qZWRpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoICsgJy4nICsgcHJvcCxcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KVxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLmNvbnRhaW5lcilcbiAgICAgIHRoaXMuY2hpbGRFZGl0b3JzLnB1c2goZWRpdG9yKVxuICAgIH0pXG4gIH1cblxuICBnZXRWYWx1ZSAoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHt9XG5cbiAgICB0aGlzLmNoaWxkRWRpdG9ycy5mb3JFYWNoKChjaGlsZEVkaXRvcikgPT4ge1xuICAgICAgdGhpcy52YWx1ZVtjaGlsZEVkaXRvci5nZXRLZXkoKV0gPSBjaGlsZEVkaXRvci5nZXRWYWx1ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RWRpdG9yXG4iLCJpbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcidcblxuY2xhc3MgU3RyaW5nRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnY29sb3InLCAnZGF0ZXRpbWUtbG9jYWwnLCAnZW1haWwnLCAnbW9udGgnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3RpbWUnLCAndXJsJywgJ3dlZWsnXVxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmplZGkudGhlbWUuZ2V0SW5wdXQoe1xuICAgICAgdHlwZTogaW5wdXRUeXBlcy5pbmNsdWRlcyh0aGlzLnNjaGVtYS5mb3JtYXQpID8gdGhpcy5zY2hlbWEuZm9ybWF0IDogJ3RleHQnLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRWRpdG9yXG4iLCJpbXBvcnQgU3RyaW5nRWRpdG9yIGZyb20gJy4vc3RyaW5nJ1xuXG5jbGFzcyBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IFN0cmluZ0VkaXRvciBmcm9tICcuL3N0cmluZydcblxuY2xhc3MgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgU3RyaW5nRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvSW5wdXQpID0+IHtcbiAgICAgIHJhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvSW5wdXQudmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHJhZGlvID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIHRoaXMuZ2V0VmFsdWUoKSArICdcIl0nKVxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdW1iZXJFZGl0b3IgZXh0ZW5kcyBFZGl0b3Ige1xuICBidWlsZCAoKSB7XG4gICAgLy8gbGFiZWxcbiAgICBjb25zdCBsYWJlbFRleHQgPSB0aGlzLnNjaGVtYS50aXRsZVxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5qZWRpLnRoZW1lLmdldExhYmVsKGxhYmVsVGV4dCwge1xuICAgICAgZm9yOiB0aGlzLnBhdGhcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgLy8gaW5wdXRcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5qZWRpLnRoZW1lLmdldElucHV0KHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaWQ6IHRoaXMucGF0aFxuICAgIH0pXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBzYW5pdGl6ZSAodmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgcmVmcmVzaFVJICgpIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRWRpdG9yXG4iLCJpbXBvcnQgTnVtYmVyRWRpdG9yIGZyb20gJy4vbnVtYmVyJ1xuXG5jbGFzcyBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuamVkaS50aGVtZS5nZXRTZWxlY3Qob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCB0aGlzLnBhdGgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dClcblxuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlucHV0LnZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuIiwiaW1wb3J0IE51bWJlckVkaXRvciBmcm9tICcuL251bWJlcidcblxuY2xhc3MgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGV4dGVuZHMgTnVtYmVyRWRpdG9yIHtcbiAgYnVpbGQgKCkge1xuICAgIC8vIGxhYmVsXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gdGhpcy5zY2hlbWEudGl0bGVcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuamVkaS50aGVtZS5nZXRMYWJlbChsYWJlbFRleHQsIHtcbiAgICAgIGZvcjogdGhpcy5wYXRoXG4gICAgfSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgIC8vIGlucHV0XG4gICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5zY2hlbWEuZW51bVxuICAgIGNvbnN0IG9wdGlvbnNMYWJlbHMgPSB0aGlzLnNjaGVtYS5lbnVtXG4gICAgY29uc3QgcmFkaW9Hcm91cE5hbWUgPSB0aGlzLnBhdGhcbiAgICBjb25zdCByYWRpb0dyb3VwID0gdGhpcy5qZWRpLnRoZW1lLmdldFJhZGlvR3JvdXAob3B0aW9uVmFsdWVzLCBvcHRpb25zTGFiZWxzLCByYWRpb0dyb3VwTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWRpb0dyb3VwKVxuXG4gICAgLy8gZXZlbnRzXG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicgKyByYWRpb0dyb3VwTmFtZSArICdcIl0nKVxuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvSW5wdXQpID0+IHtcbiAgICAgIHJhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHJhZGlvSW5wdXQudmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoVUkgKCkge1xuICAgIGNvbnN0IHJhZGlvID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIHRoaXMuZ2V0VmFsdWUoKSArICdcIl0nKVxuICAgIGlmIChyYWRpbykge1xuICAgICAgcmFkaW8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJFbnVtUmFkaW9FZGl0b3JcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJ1xuXG5jbGFzcyBOdWxsRWRpdG9yIGV4dGVuZHMgRWRpdG9yIHtcbiAgc2FuaXRpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdWxsRWRpdG9yXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCBBcnJheUVkaXRvciBmcm9tICcuL2VkaXRvcnMvYXJyYXknXG5pbXBvcnQgQm9vbGVhbkVkaXRvciBmcm9tICcuL2VkaXRvcnMvYm9vbGVhbidcbmltcG9ydCBPYmplY3RFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL29iamVjdCdcbmltcG9ydCBTdHJpbmdFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL3N0cmluZydcbmltcG9ydCBTdHJpbmdFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1zZWxlY3QnXG5pbXBvcnQgU3RyaW5nRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9zdHJpbmctZW51bS1yYWRpbydcbmltcG9ydCBOdW1iZXJFZGl0b3IgZnJvbSAnLi9lZGl0b3JzL251bWJlcidcbmltcG9ydCBOdW1iZXJFbnVtU2VsZWN0RWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1zZWxlY3QnXG5pbXBvcnQgTnVtYmVyRW51bVJhZGlvRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udW1iZXItZW51bS1yYWRpbydcbmltcG9ydCBOdWxsRWRpdG9yIGZyb20gJy4vZWRpdG9ycy9udWxsJ1xuXG5jbGFzcyBSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gYW4gZWRpdG9yIGNsYXNzIGlmIHRoZSBjb25kaXRpb24gcGFzc1xuICAgICAqL1xuICAgIHRoaXMucmVzb2x2ZXJzID0gW1xuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0RWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIHJldHVybiBBcnJheUVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBjb25zdCBoYXNGb3JtYXRSYWRpbyA9IHV0aWxzLmlzU2V0KGZvcm1hdCkgJiYgdXRpbHMuaXNTdHJpbmcoZm9ybWF0KSAmJiBmb3JtYXQgPT09ICdyYWRpbydcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBoYXNFbnVtQ29uc3RyYWluICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyAmJiBoYXNFbnVtQ29uc3RyYWluKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZ0VudW1TZWxlY3RFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmdFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChzY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3QgaXNOdW1lcmljVHlwZSA9IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJyB8fCBzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInXG4gICAgICAgIGNvbnN0IF9lbnVtID0gc2NoZW1hLmVudW1cbiAgICAgICAgY29uc3QgaGFzRW51bUNvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KF9lbnVtKSAmJiB1dGlscy5pc0FycmF5KF9lbnVtKVxuICAgICAgICBjb25zdCBmb3JtYXQgPSBzY2hlbWEuZm9ybWF0XG4gICAgICAgIGNvbnN0IGhhc0Zvcm1hdFJhZGlvID0gdXRpbHMuaXNTZXQoZm9ybWF0KSAmJiB1dGlscy5pc1N0cmluZyhmb3JtYXQpICYmIGZvcm1hdCA9PT0gJ3JhZGlvJ1xuICAgICAgICBpZiAoaXNOdW1lcmljVHlwZSAmJiBoYXNFbnVtQ29uc3RyYWluICYmIGhhc0Zvcm1hdFJhZGlvKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlckVudW1SYWRpb0VkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgY29uc3QgX2VudW0gPSBzY2hlbWEuZW51bVxuICAgICAgICBjb25zdCBoYXNFbnVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoX2VudW0pICYmIHV0aWxzLmlzQXJyYXkoX2VudW0pXG4gICAgICAgIGlmIChpc051bWVyaWNUeXBlICYmIGhhc0VudW1Db25zdHJhaW4pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRW51bVNlbGVjdEVkaXRvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKHNjaGVtYSkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKGlzTnVtZXJpY1R5cGUpIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyRWRpdG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoc2NoZW1hKSA9PiB7XG4gICAgICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgcmV0dXJuIE51bGxFZGl0b3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVzb2x2ZXIgZnVuY3Rpb25cbiAgICovXG4gIGFkZFJlc29sdmVyIChyZXNvbHZlcikge1xuICAgIHRoaXMucmVzb2x2ZXJzLnVuc2hpZnQocmVzb2x2ZXIpXG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgZmlyc3QgZWRpdG9yIGNsYXNzIHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNjaGVtYS5cbiAgICovXG4gIHJlc29sdmUgKHNjaGVtYSkge1xuICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgIGNvbnN0IGVkaXRvckNsYXNzID0gcmVzb2x2ZXIoc2NoZW1hKVxuICAgICAgaWYgKHV0aWxzLmlzU2V0KGVkaXRvckNsYXNzKSkge1xuICAgICAgICByZXR1cm4gZWRpdG9yQ2xhc3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZXJcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIGFuIGVycm9yIG9iamVjdCBpZiB0aGUgdGhlIHZhbGlkYXRpb24gY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0b3JzID0ge1xuICAgICAgdHlwZTogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICAgICAgc3RyaW5nOiB2YWx1ZSA9PiB1dGlscy5pc1N0cmluZyh2YWx1ZSksXG4gICAgICAgICAgbnVtYmVyOiB2YWx1ZSA9PiB1dGlscy5pc051bWJlcih2YWx1ZSksXG4gICAgICAgICAgaW50ZWdlcjogdmFsdWUgPT4gdXRpbHMuaXNJbnRlZ2VyKHZhbHVlKSxcbiAgICAgICAgICBib29sZWFuOiB2YWx1ZSA9PiB1dGlscy5pc0Jvb2xlYW4odmFsdWUpLFxuICAgICAgICAgIGFycmF5OiB2YWx1ZSA9PiB1dGlscy5pc0FycmF5KHZhbHVlKSxcbiAgICAgICAgICBvYmplY3Q6IHZhbHVlID0+IHV0aWxzLmlzT2JqZWN0KHZhbHVlKSxcbiAgICAgICAgICBudWxsOiB2YWx1ZSA9PiB1dGlscy5pc051bGwodmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZCA9IHR5cGVzW3NjaGVtYS50eXBlXSh2YWx1ZSlcblxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG9mIHR5cGUgJyArIHNjaGVtYS50eXBlLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHVuaXF1ZUl0ZW1zOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc0FycmF5VHlwZSA9IHNjaGVtYS50eXBlID09PSAnYXJyYXknXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIHJldHVyblxuICAgICAgICBjb25zdCB1bmlxdWVJdGVtcyA9IHNjaGVtYS51bmlxdWVJdGVtc1xuICAgICAgICBjb25zdCBoYXNVbmlxdWVJdGVtc0NvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KHVuaXF1ZUl0ZW1zKSAmJiB1dGlscy5pc0Jvb2xlYW4odW5pcXVlSXRlbXMpXG4gICAgICAgIGlmICghaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBzZWVuID0ge31cbiAgICAgICAgbGV0IGhhc0R1cGxpY2F0ZWRJdGVtcyA9IGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZVtpXSlcbiAgICAgICAgICBpZiAoc2VlbltpdGVtXSkge1xuICAgICAgICAgICAgaGFzRHVwbGljYXRlZEl0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VlbltpdGVtXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzVW5pcXVlSXRlbXNDb25zdHJhaW4gJiYgaGFzRHVwbGljYXRlZEl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgdW5pcXVlIGl0ZW1zJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtaW5JdGVtczogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBcnJheVR5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ2FycmF5J1xuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWluSXRlbXMgPSBzY2hlbWEubWluSXRlbXNcbiAgICAgICAgY29uc3QgaGFzTWluSXRlbXNDb25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5JdGVtcykgJiYgdXRpbHMuaXNOdW1iZXIobWluSXRlbXMpXG4gICAgICAgIGlmICghaGFzTWluSXRlbXNDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01pbkl0ZW1zQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkl0ZW1zKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGhhdmUgYXQgbGVhc3QgJyArIG1pbkl0ZW1zICsgJyBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4SXRlbXM6IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXlUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdhcnJheSdcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IG1heEl0ZW1zID0gc2NoZW1hLm1heEl0ZW1zXG4gICAgICAgIGNvbnN0IGhhc01heEl0ZW1zQ29uc3RyYWluID0gdXRpbHMuaXNTZXQobWF4SXRlbXMpICYmIHV0aWxzLmlzTnVtYmVyKG1heEl0ZW1zKVxuICAgICAgICBpZiAoIWhhc01heEl0ZW1zQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNNYXhJdGVtc0NvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPiBtYXhJdGVtcylcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBoYXZlIGF0IG1vc3QgJyArIG1heEl0ZW1zICsgJyBpdGVtcycsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9LFxuICAgICAgbWluTGVuZ3RoOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZ1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgaWYgKCFpc1N0cmluZ1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBtaW5MZW5ndGggPSBzY2hlbWEubWluTGVuZ3RoXG4gICAgICAgIGNvbnN0IGhhc01pbkxlbmd0aENvbnN0cmFpbiA9IHV0aWxzLmlzU2V0KG1pbkxlbmd0aCkgJiYgdXRpbHMuaXNOdW1iZXIobWluTGVuZ3RoKVxuICAgICAgICBpZiAoIWhhc01pbkxlbmd0aENvbnN0cmFpbikgcmV0dXJuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluTGVuZ3RoQ29uc3RyYWluICYmIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aClcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgbWluTGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heExlbmd0aDogKHNjaGVtYSwgdmFsdWUsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgIGlmICghaXNTdHJpbmdUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gc2NoZW1hLm1heExlbmd0aFxuICAgICAgICBjb25zdCBoYXNNYXhMZW5ndGhDb25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhMZW5ndGgpICYmIHV0aWxzLmlzTnVtYmVyKG1heExlbmd0aClcbiAgICAgICAgaWYgKCFoYXNNYXhMZW5ndGhDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gKGhhc01heExlbmd0aENvbnN0cmFpbiAmJiB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgYXQgbW9zdCAnICsgbWF4TGVuZ3RoICsgJyBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nVHlwZSA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICBpZiAoIWlzU3RyaW5nVHlwZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBzY2hlbWEucGF0dGVyblxuICAgICAgICBjb25zdCBoYXNQYXR0ZXJuQ29uc3RyYWluID0gdXRpbHMuaXNTZXQocGF0dGVybikgJiYgdXRpbHMuaXNTdHJpbmcocGF0dGVybilcbiAgICAgICAgaWYgKCFoYXNQYXR0ZXJuQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKVxuICAgICAgICBjb25zdCBtYXRjaFBhdHRlcm4gPSByZWdleHAudGVzdCh2YWx1ZSlcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IChoYXNQYXR0ZXJuQ29uc3RyYWluICYmICFtYXRjaFBhdHRlcm4pXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgYmUgdGhlIHBhdHRlcm46ICcgKyBwYXR0ZXJuLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1pbmltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNaW5pbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW1cbiAgICAgICAgY29uc3QgbWluaW11bSA9IHNjaGVtYS5taW5pbXVtXG4gICAgICAgIGNvbnN0IGhhc01pbmltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChtaW5pbXVtKSAmJiB1dGlscy5pc051bWJlcihtaW5pbXVtKVxuICAgICAgICBpZiAoIWhhc01pbmltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoZXhjbHVzaXZlTWluaW11bSkgJiYgZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1pbmltdW0gPSBoYXNFeGNsdXNpdmVNaW5pbXVtQ29uc3RyYWluID8gbWluaW11bSArIDEgOiBtaW5pbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWluaW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA8IGZpbmFsTWluaW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBhdCBsZWFzdCAnICsgZmluYWxNaW5pbXVtLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heGltdW06IChzY2hlbWEsIHZhbHVlLCBwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTnVtZXJpY1R5cGUgPSBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicgfHwgc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJ1xuICAgICAgICBpZiAoIWlzTnVtZXJpY1R5cGUpIHJldHVyblxuICAgICAgICBjb25zdCBleGNsdXNpdmVNYXhpbXVtID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW1cbiAgICAgICAgY29uc3QgbWF4aW11bSA9IHNjaGVtYS5tYXhpbXVtXG4gICAgICAgIGNvbnN0IGhhc01heGltdW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChtYXhpbXVtKSAmJiB1dGlscy5pc051bWJlcihtYXhpbXVtKVxuICAgICAgICBpZiAoIWhhc01heGltdW1Db25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID0gdXRpbHMuaXNTZXQoZXhjbHVzaXZlTWF4aW11bSkgJiYgZXhjbHVzaXZlTWF4aW11bSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBmaW5hbE1heGltdW0gPSBoYXNFeGNsdXNpdmVNYXhpbXVtQ29uc3RyYWluID8gbWF4aW11bSAtIDEgOiBtYXhpbXVtXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTWF4aW11bUNvbnN0cmFpbiAmJiB2YWx1ZSA+IGZpbmFsTWF4aW11bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gJyArIGZpbmFsTWF4aW11bSxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBtdWx0aXBsZU9mOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBpc051bWVyaWNUeXBlID0gc2NoZW1hLnR5cGUgPT09ICdudW1iZXInIHx8IHNjaGVtYS50eXBlID09PSAnaW50ZWdlcidcbiAgICAgICAgaWYgKCFpc051bWVyaWNUeXBlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbXVsdGlwbGVPZiA9IHNjaGVtYS5tdWx0aXBsZU9mXG4gICAgICAgIGNvbnN0IGhhc011bHRpcGxlT2ZDb25zdHJhaW4gPSB1dGlscy5pc1NldChtdWx0aXBsZU9mKSAmJiB1dGlscy5pc051bWJlcihtdWx0aXBsZU9mKVxuICAgICAgICBpZiAoIWhhc011bHRpcGxlT2ZDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCBpc011bHRpcGxlT2YgPSAodmFsdWUgLyBtdWx0aXBsZU9mID09PSBNYXRoLmZsb29yKHZhbHVlIC8gbXVsdGlwbGVPZikpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzTXVsdGlwbGVPZkNvbnN0cmFpbiAmJiAhaXNNdWx0aXBsZU9mKVxuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdNdXN0IGJlIG11bHRpcGxlIG9mICcgKyBtdWx0aXBsZU9mLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNvbnN0OiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfY29uc3QgPSBzY2hlbWEuY29uc3RcbiAgICAgICAgY29uc3QgaGFzQ29uc3RDb25zdHJhaW4gPSB1dGlscy5pc1NldChfY29uc3QpXG4gICAgICAgIGlmICghaGFzQ29uc3RDb25zdHJhaW4pIHJldHVyblxuICAgICAgICBjb25zdCB2YWx1ZUlzTm90RXF1YWxDb25zdCA9IChKU09OLnN0cmluZ2lmeSh2YWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KF9jb25zdCkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzQ29uc3RDb25zdHJhaW4gJiYgdmFsdWVJc05vdEVxdWFsQ29uc3QpXG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZTogJ011c3QgaGF2ZSB2YWx1ZTogJyArIF9jb25zdCxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlbnVtOiAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBfZW51bSA9IHNjaGVtYS5lbnVtXG4gICAgICAgIGNvbnN0IGhhc0VudW1Db25zdHJhaW4gPSB1dGlscy5pc1NldChfZW51bSkgJiYgdXRpbHMuaXNBcnJheShfZW51bSlcbiAgICAgICAgaWYgKCFoYXNFbnVtQ29uc3RyYWluKSByZXR1cm5cbiAgICAgICAgY29uc3QgdmFsdWVOb3RJbkVudW0gPSAhX2VudW0uc29tZShlID0+IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSkpXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSAoaGFzRW51bUNvbnN0cmFpbiAmJiB2YWx1ZU5vdEluRW51bSlcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVmFsdWUgbXVzdCBiZSBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRvciBmdW5jdGlvblxuICAgKi9cbiAgYWRkVmFsaWRhdG9yIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGl0J3Mgc2NoZW1hXG4gICAqL1xuICB2YWxpZGF0ZSAoc2NoZW1hLCB2YWx1ZSwgcGF0aCkge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy52YWxpZGF0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1trZXldXG4gICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRvcihzY2hlbWEsIHZhbHVlLCBwYXRoKVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcidcbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAnLi92YWxpZGF0b3InXG5cbmNsYXNzIEplZGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy50aGVtZSA9IG5ldyBUaGVtZSgpXG4gICAgdGhpcy5yZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpXG4gICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKClcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXJcbiAgICB0aGlzLnNjaGVtYSA9IGNvbmZpZy5zY2hlbWFcbiAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgdGhpcy5lZGl0b3JzID0ge31cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5sb2FkRWRpdG9ycygpXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlZGl0b3IgaW5zdGFuY2UgaW4gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICByZWdpc3RlckVkaXRvciAoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3JzW2VkaXRvci5wYXRoXSA9IGVkaXRvclxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGZyb20gdGhlIGVkaXRvcnMgb2JqZWN0XG4gICAqL1xuICB1bnJlZ2lzdGVyRWRpdG9yIChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdID0gbnVsbFxuICAgIGRlbGV0ZSB0aGlzLmVkaXRvcnNbZWRpdG9yLnBhdGhdXG4gIH1cblxuICBsb2FkRWRpdG9ycyAoKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVFZGl0b3Ioe1xuICAgICAgamVkaTogdGhpcyxcbiAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWFcbiAgICB9KVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdC5jb250YWluZXIpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamVkaS1sb2FkZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZWRpdG9yIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBwYXNzZWQgc2NoZW1hIGFuZCBjb25maWdcbiAgICovXG4gIGNyZWF0ZUVkaXRvciAoY29uZmlnKSB7XG4gICAgLy8gdG9kbyBleHBhbmQgZGVmc1xuICAgIHJldHVybiBuZXcgKHRoaXMucmVzb2x2ZXIucmVzb2x2ZShjb25maWcuc2NoZW1hKSkoY29uZmlnKVxuICB9XG5cbiAgZ2V0VmFsdWUgKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3QuZ2V0VmFsdWUoKVxuICB9XG5cbiAgZ2V0RWRpdG9yIChwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yc1twYXRoXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEplZGlcbiJdLCJzb3VyY2VSb290IjoiIn0=